#!/usr/bin/env bash
# ErisPulse 1Panel 本地应用安装脚本 / ErisPulse 1Panel local app installer
set -e

ERISPULSE_APP_DIR="/opt/1panel/resource/apps/local/erispulse"
REPO_URL="https://github.com/ErisPulse/ErisPulse-1Panel"
REPO_BRANCH="main"
TEMP_DIR=$(mktemp -d)

cleanup() {
    rm -rf "$TEMP_DIR"
}
trap cleanup EXIT

INSTALL_PATH="${1:-$ERISPULSE_APP_DIR}"

# 按系统 locale 选择输出语言 / Output language follows the system locale
if [ "${FORCE_LANG}" = "en" ] || { [ -z "${FORCE_LANG}" ] && [ "${LANG:-}" != "${LANG#*zh_*}" ]; }; then
    MSG_TITLE="ErisPulse 1Panel 应用安装器"
    MSG_DL="正在下载应用文件..."
    MSG_INSTALL="正在安装到 $INSTALL_PATH ..."
    MSG_OK="安装完成！"
    MSG_REFRESH="请在 1Panel 应用商店中点击「更新应用列表」以显示 ErisPulse。"
    MSG_PATH="安装路径: $INSTALL_PATH"
    MSG_NET_FAIL="错误: 无法连接 github.com，安装已中止。"
    MSG_NET_FIX="请检查服务器网络后重试，或使用手动安装方式（见项目 README）。"
else
    MSG_TITLE="ErisPulse 1Panel App Installer"
    MSG_DL="Downloading app files..."
    MSG_INSTALL="Installing to $INSTALL_PATH ..."
    MSG_OK="Installation complete!"
    MSG_REFRESH="Please refresh the app list in 1Panel App Store to see ErisPulse."
    MSG_PATH="Install path: $INSTALL_PATH"
    MSG_NET_FAIL="Error: unable to reach github.com, installation aborted."
    MSG_NET_FIX="Check the server network and retry, or use the manual install (see the project README)."
fi

echo "==========================================="
echo "  $MSG_TITLE"
echo "==========================================="

# 直连 GitHub 仓库，不经过任何第三方代理，保证脚本内容与仓库一致。
# 服务器无法访问 GitHub 时请改用手动安装，不自动降级到镜像克隆。
if ! curl -sL --connect-timeout 8 "https://github.com" > /dev/null 2>&1; then
    echo "[!] $MSG_NET_FAIL"
    echo "[!] $MSG_NET_FIX"
    exit 1
fi

echo "[*] $MSG_DL"
git clone -b "$REPO_BRANCH" --depth 1 "$REPO_URL" "$TEMP_DIR/repo"

echo "[*] $MSG_INSTALL"
mkdir -p "$INSTALL_PATH"
cp -rf "$TEMP_DIR/repo/apps/erispulse/"* "$INSTALL_PATH/"

echo "[OK] $MSG_OK"
echo ""
echo "$MSG_REFRESH"
echo "$MSG_PATH"
echo "==========================================="
