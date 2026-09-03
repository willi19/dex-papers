#!/usr/bin/env bash
# PostToolUse hook: after any write to the prose files in this repo, run the
# anti-slop counter and hand the result back to Claude. See CLAUDE.md rule 4.
set -u
payload=$(cat)
file=$(printf '%s' "$payload" | python3 -c 'import json,sys;print(json.load(sys.stdin).get("tool_input",{}).get("file_path",""))' 2>/dev/null)

case "$file" in
  *paper_summaries.js|*paper_ideas.js|*/overview/*.html|*/review/*) ;;
  *) exit 0 ;;
esac

cd "$(dirname "$0")/../.." || exit 0
out=$(node scripts/slop-check.mjs 2>&1)
if [ $? -ne 0 ]; then
  printf '%s' "$out" | python3 -c '
import json,sys
print(json.dumps({"hookSpecificOutput":{"hookEventName":"PostToolUse",
 "additionalContext":"Anti-slop check flagged this prose (CLAUDE.md rule 4). Run the stop-slop skill before committing.\n\n"+sys.stdin.read()}}))'
fi
exit 0
