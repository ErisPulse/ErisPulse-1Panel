#!/usr/bin/env bash
# ErisPulse 1Panel 本地应用卸载脚本 / ErisPulse 1Panel local app uninstaller
set -e

ERISPULSE_APP_DIR="/opt/1panel/resource/apps/local/erispulse"

if [ "${FORCE_LANG}" = "en" ] || { [ -z "${FORCE_LANG}" ] && [ "${LANG:-}" != "${LANG#*zh_*}" ]; }; then
    MSG_TITLE="ErisPulse 1Panel 应用卸载器"
    MSG_REMOVED="已移除 ErisPulse 本地应用。"
    MSG_REFRESH="请在 1Panel 应用商店中点击「更新应用列表」刷新。"
    MSG_MISSING="未找到 ErisPulse 本地应用。"
else
    MSG_TITLE="ErisPulse 1Panel App Uninstaller"
    MSG_REMOVED="ErisPulse local app removed."
    MSG_REFRESH="Please refresh the app list in 1Panel App Store."
    MSG_MISSING="ErisPulse local app not found."
fi

echo "==========================================="
echo "  $MSG_TITLE"
echo "==========================================="

if [ -d "$ERISPULSE_APP_DIR" ]; then
    rm -rf "$ERISPULSE_APP_DIR"
    echo "[OK] $MSG_REMOVED"
    echo "$MSG_REFRESH"
else
    echo "[!] $MSG_MISSING"
fi

echo "==========================================="
