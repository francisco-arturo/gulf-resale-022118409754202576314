#!/bin/bash
set -e

cd "$(dirname "$0")"

echo "=== Harness Initialization ==="
echo "=== Running prototype checks ==="
node check.mjs

echo "=== Running render smoke test ==="
node smoke.mjs

echo "=== Verification Complete ==="
echo ""
echo "Next steps:"
echo "1. Read feature_list.json to see current feature state"
echo "2. Pick ONE unfinished feature to work on"
echo "3. Implement only that feature"
echo "4. Re-run verification before claiming done"
