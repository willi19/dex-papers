#!/bin/bash
# Double-click this file to open the dex-papers library in Chrome.
# (Falls back to your default browser if Chrome isn't installed.)
DIR="$(cd "$(dirname "$0")" && pwd)"
open -a "Google Chrome" "$DIR/index.html" 2>/dev/null || open "$DIR/index.html"
