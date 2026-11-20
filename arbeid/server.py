#!/usr/bin/env python3
"""Lokal server for nettsiden: python3 arbeid/server.py, og åpne http://localhost:8765/

- Videoene kan spoles (Range-forespørsler, som python3 -m http.server mangler).
- Svarene lagres i arbeid/svar/svar.json mens du skriver.
- «Svar på papir» lagrer bildet i arbeid/svar/bilder/ (JPEG, skalert av siden) og gir filnavnet tilbake.
- «Rett denne» legger oppgaven i arbeid/svar/ko.jsonl. Tilbakemeldingen skrives til
  arbeid/svar/tilbakemelding.json ({"e05": {"0": {"tekst": …, "tid": …}}}) og vises under oppgaven.
Lytter bare på 127.0.0.1."""
import base64
import json
import os
import re
import threading
import time
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

A = Path(__file__).resolve().parent
SV = A / "svar"
PORT = 8765
VERTER = {f"localhost:{PORT}", f"127.0.0.1:{PORT}"}
EGNE = {"http://" + v for v in VERTER}
ROT = A.parent
LOV = (ROT / "arbeid", ROT / "materiale")  # bare det siden bruker, ikke resten av prosjektet
LAAS = threading.Lock()


class H(SimpleHTTPRequestHandler):
    left = None

    def end_headers(self):
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def list_directory(self, path):
        self.send_error(404)

    def send_head(self):
        self.left = None
        path = self.translate_path(self.path)
        ekte = Path(path).resolve()
        if not any(ekte == r or r in ekte.parents for r in LOV):
            self.send_error(404)
            return None
        m = re.fullmatch(r"bytes=(\d*)-(\d*)", self.headers.get("Range", ""))
        if not m or not (m[1] or m[2]) or not os.path.isfile(path):
            return super().send_head()
        size = os.path.getsize(path)
        a = int(m[1]) if m[1] else max(0, size - int(m[2]))
        b = min(int(m[2]), size - 1) if m[1] and m[2] else size - 1
        if a > b:
            self.send_error(416)
            return None
        f = open(path, "rb")
        f.seek(a)
        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Range", f"bytes {a}-{b}/{size}")
        self.send_header("Content-Length", str(b - a + 1))
        self.end_headers()
        self.left = b - a + 1
        return f

    def copyfile(self, src, dst):
        if self.left is None:
            return super().copyfile(src, dst)
        while self.left > 0 and (buf := src.read(min(self.left, 1 << 16))):
            dst.write(buf)
            self.left -= len(buf)

    def parse_request(self):
        # Bare localhost som Host: en annen side kan ikke nå serveren via et eget domenenavn (DNS rebinding).
        if not super().parse_request():
            return False
        if self.headers.get("Host") not in VERTER:
            self.send_error(403)
            return False
        return True

    def do_GET(self):
        if self.path == "/":
            self.send_response(302)
            self.send_header("Location", "/arbeid/nettside.html")
            self.end_headers()
            return
        if self.path == "/api/svar":
            f = SV / "svar.json"
            return self.svar(json.loads(f.read_text()) if f.exists() else {})
        super().do_GET()

    def do_POST(self):
        # Andre nettsider i nettleseren kan også sende hit; godta bare siden selv.
        if self.headers.get("Origin") not in EGNE:
            return self.send_error(403)
        if self.path not in ("/api/svar", "/api/rett", "/api/bilde"):
            return self.send_error(404)
        try:
            n = int(self.headers.get("Content-Length", ""))
            if not 0 < n <= 5_000_000:
                raise ValueError
            body = json.loads(self.rfile.read(n))
        except ValueError:
            return self.send_error(400)
        if not isinstance(body, dict):
            return self.send_error(400)
        if self.path == "/api/bilde":
            return self.bilde(body)
        with LAAS:
            SV.mkdir(exist_ok=True)
            if self.path == "/api/svar":
                tmp = SV / "svar.json.tmp"
                tmp.write_text(json.dumps(body, ensure_ascii=False, indent=1))
                tmp.replace(SV / "svar.json")
            else:
                body["sendt"] = time.strftime("%Y-%m-%d %H:%M:%S")
                with open(SV / "ko.jsonl", "a") as f:
                    f.write(json.dumps(body, ensure_ascii=False) + "\n")
        self.svar({"ok": True})

    def bilde(self, body):
        m = re.fullmatch(r"data:image/jpeg;base64,([A-Za-z0-9+/]+=*)", str(body.get("data", "")))
        eid, j = str(body.get("id", "")), body.get("j")
        if not (m and re.fullmatch(r"[a-z0-9]{1,12}", eid) and type(j) is int and 0 <= j < 1000):
            return self.send_error(400)
        try:
            raw = base64.b64decode(m[1], validate=True)
        except ValueError:
            return self.send_error(400)
        if not raw.startswith(b"\xff\xd8"):
            return self.send_error(400)
        with LAAS:
            d = SV / "bilder"
            d.mkdir(parents=True, exist_ok=True)
            stamme, n = f"{eid}-{j}-{time.strftime('%Y%m%d-%H%M%S')}", 1
            while (d / f"{stamme}-{n}.jpg").exists():
                n += 1
            (d / f"{stamme}-{n}.jpg").write_bytes(raw)
        self.svar({"fil": f"svar/bilder/{stamme}-{n}.jpg"})

    def svar(self, obj):
        b = json.dumps(obj, ensure_ascii=False).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(b)))
        self.end_headers()
        self.wfile.write(b)

    def log_message(self, *a):
        pass


if __name__ == "__main__":
    print(f"Åpne http://localhost:{PORT}/  (Ctrl+C stopper)")
    ThreadingHTTPServer(("127.0.0.1", PORT), partial(H, directory=str(ROT))).serve_forever()
