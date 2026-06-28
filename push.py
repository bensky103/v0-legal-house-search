#!/usr/bin/env python3
"""push.py - save everything to the main branch, fully automatically.

What it does, every run:
  1. Makes sure you're on `main` (switches if needed).
  2. Stages + commits all local changes (auto date/time message).
  3. Syncs with GitHub first (fetch + rebase) so the push is never rejected,
     even if a v0.dev pull-request was merged into main in the meantime.
  4. Pushes to main  ->  Vercel auto-deploys to production.
  5. Safe cleanup: deletes v0/* branches that are already fully merged into
     main (no work is ever lost - only merged branches are removed).

Usage:  python push.py     (or double-click on Windows)
"""
import datetime
import os
import subprocess
import sys

# Always operate from the script's own directory (the repo root).
os.chdir(os.path.dirname(os.path.abspath(__file__)))


def run(cmd, check=True, capture=False):
    print(">", " ".join(cmd))
    result = subprocess.run(
        cmd,
        text=True,
        stdout=subprocess.PIPE if capture else None,
        stderr=subprocess.STDOUT if capture else None,
    )
    if capture and result.stdout:
        print(result.stdout, end="")
    if check and result.returncode != 0:
        print(f"[ERROR] command failed: {' '.join(cmd)}")
        sys.exit(result.returncode)
    return result


def main():
    # 1. Make sure we're on main.
    branch = run(["git", "rev-parse", "--abbrev-ref", "HEAD"], capture=True).stdout.strip()
    if branch != "main":
        print(f"[info] switching from '{branch}' to 'main'")
        run(["git", "checkout", "main"])

    # 2. Stage + commit local changes (non-zero just means "nothing to commit").
    run(["git", "add", "-A"])
    msg = "update " + datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    run(["git", "commit", "-m", msg], check=False)

    # 3. Sync with remote main BEFORE pushing, so the push never gets rejected
    #    (e.g. after a v0.dev PR was merged on GitHub).
    run(["git", "fetch", "origin", "--prune"])
    rebase = run(["git", "pull", "--rebase", "origin", "main"], check=False)
    if rebase.returncode != 0:
        run(["git", "rebase", "--abort"], check=False)
        print(
            "\n[STOP] Could not auto-merge GitHub changes into your local copy "
            "(a real conflict). Nothing was pushed. Resolve it manually, then "
            "run push.py again."
        )
        sys.exit(1)

    # 4. Push to main -> triggers the Vercel production deploy.
    run(["git", "push", "origin", "main"])

    # 5. Safe cleanup: delete remote v0/* branches already merged into main.
    merged = run(
        ["git", "branch", "-r", "--merged", "origin/main", "--format=%(refname:short)"],
        capture=True,
        check=False,
    ).stdout
    for line in merged.splitlines():
        ref = line.strip()
        if not ref.startswith("origin/v0/"):
            continue
        branch_name = ref[len("origin/"):]  # e.g. v0/guybensky010-3010-xxxx
        print(f"[cleanup] deleting merged branch {branch_name}")
        run(["git", "push", "origin", "--delete", branch_name], check=False)

    print("\nDone - everything is on main. Vercel will deploy it automatically.")


if __name__ == "__main__":
    main()
