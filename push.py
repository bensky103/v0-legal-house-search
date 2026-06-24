#!/usr/bin/env python3
"""push.py - stage all changes, commit with an auto message, push to GitHub.

Usage:  python push.py     (or double-click on Windows)
The commit message is auto-generated from the date/time.
"""
import datetime
import os
import subprocess
import sys

# Always operate from the script's own directory (the repo root).
os.chdir(os.path.dirname(os.path.abspath(__file__)))


def run(cmd, check=True):
    print(">", " ".join(cmd))
    result = subprocess.run(cmd)
    if check and result.returncode != 0:
        print(f"[ERROR] command failed: {' '.join(cmd)}")
        sys.exit(result.returncode)
    return result.returncode


def main():
    run(["git", "add", "-A"])

    msg = "update " + datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    # commit returns non-zero when there is nothing to commit -- that's fine,
    # we still try to push whatever is already committed.
    run(["git", "commit", "-m", msg], check=False)

    run(["git", "push"])
    print("\nDone.")


if __name__ == "__main__":
    main()
