#!/usr/bin/env bash
set -e

ERISPULSE_APP_DIR="/opt/1panel/resource/apps/local/erispulse"

echo "==========================================="
echo "  ErisPulse 1Panel App Store Uninstaller"
echo "==========================================="

if [ -d "$ERISPULSE_APP_DIR" ]; then
    rm -rf "$ERISPULSE_APP_DIR"
    echo "[OK] ErisPulse local app removed."
    echo "Please refresh the app list in 1Panel App Store."
else
    echo "[!] ErisPulse local app not found."
fi

echo "==========================================="
