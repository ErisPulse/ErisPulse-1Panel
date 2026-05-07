#!/usr/bin/env bash
set -e

ERISPULSE_APP_DIR="/opt/1panel/resource/apps/local/erispulse"
REPO_URL="https://github.com/ErisPulse/ErisPulse-1Panel"
REPO_BRANCH="main"
MIRROR_PREFIX="https://gh-proxy.org/"
TEMP_DIR=$(mktemp -d)

cleanup() {
    rm -rf "$TEMP_DIR"
}
trap cleanup EXIT

echo "==========================================="
echo "  ErisPulse 1Panel App Store Installer"
echo "==========================================="

INSTALL_PATH="${1:-$ERISPULSE_APP_DIR}"

detect_network() {
    if curl -sL --connect-timeout 5 "https://github.com" > /dev/null 2>&1; then
        echo "direct"
    else
        echo "mirror"
    fi
}

NETWORK=$(detect_network)
if [ "$NETWORK" = "mirror" ]; then
    CLONE_URL="${MIRROR_PREFIX}${REPO_URL}"
    echo "[*] China network detected, using GitHub mirror"
else
    CLONE_URL="$REPO_URL"
    echo "[*] Using GitHub directly"
fi

echo "[*] Downloading app files..."
git clone -b "$REPO_BRANCH" --depth 1 "$CLONE_URL" "$TEMP_DIR/repo"

echo "[*] Installing to $INSTALL_PATH ..."
mkdir -p "$INSTALL_PATH"
cp -rf "$TEMP_DIR/repo/apps/erispulse/"* "$INSTALL_PATH/"

echo "[OK] Installation complete!"
echo ""
echo "Please refresh the app list in 1Panel App Store to see ErisPulse."
echo "Install path: $INSTALL_PATH"
echo "==========================================="
