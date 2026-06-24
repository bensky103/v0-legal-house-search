#!/usr/bin/env python3
"""run.py - run the Next.js app locally in development mode.

Installs npm dependencies on first run, starts the dev server at
http://localhost:3000, and automatically opens it in Chrome once it's ready.

Usage:  python run.py     (or double-click on Windows)
"""
import os
import shutil
import subprocess
import sys
import threading
import time
import urllib.request
import webbrowser

# Always operate from the script's own directory (the repo root).
os.chdir(os.path.dirname(os.path.abspath(__file__)))

URL = "http://localhost:3000"

# Common Chrome install locations on Windows.
CHROME_PATHS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    os.path.expandvars(r"%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"),
]


def find_npm():
    """Locate npm, falling back to the standard Node install path if PATH is stale."""
    npm = shutil.which("npm")
    if npm:
        return npm
    fallback = r"C:\Program Files\nodejs\npm.cmd"
    return fallback if os.path.isfile(fallback) else None


def open_in_chrome():
    """Open the app in Chrome (falls back to the default browser)."""
    for path in CHROME_PATHS:
        if os.path.isfile(path):
            subprocess.Popen([path, URL])
            return
    webbrowser.open(URL)  # no Chrome found -> default browser


def wait_then_open(timeout=90):
    """Poll the dev server until it responds, then open the browser once."""
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            urllib.request.urlopen(URL, timeout=2)
            print(f"\nServer is up -- opening {URL} in Chrome...\n")
            open_in_chrome()
            return
        except Exception:
            time.sleep(0.5)
    print(f"\n[WARN] Server didn't respond within {timeout}s; open {URL} manually.\n")


def main():
    npm = find_npm()
    if not npm:
        print("[ERROR] Node.js / npm was not found.")
        print("Install Node.js LTS from https://nodejs.org/ then run this again.")
        sys.exit(1)

    if not os.path.isdir("node_modules"):
        print("Installing dependencies (first run, this can take a minute)...")
        # --legacy-peer-deps: this project pins React 19 while Next 14 lists React 18 as a peer.
        if subprocess.run([npm, "install", "--legacy-peer-deps"]).returncode != 0:
            print("[ERROR] npm install failed.")
            sys.exit(1)

    print("\nStarting dev server -- it will open in Chrome automatically.")
    print("Press Ctrl+C to stop.\n")

    # Open the browser from a background thread once the server is reachable.
    threading.Thread(target=wait_then_open, daemon=True).start()

    try:
        return_code = subprocess.run([npm, "run", "dev"]).returncode
    except KeyboardInterrupt:
        return_code = 0
    sys.exit(return_code)


if __name__ == "__main__":
    main()
