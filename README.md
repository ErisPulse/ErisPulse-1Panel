<div align="center">

# ErisPulse 1Panel App Store

[English](#english) | [简体中文](#简体中文)

</div>

---

<a id="english"></a>

## English

ErisPulse 1Panel App Store integration. One-click install ErisPulse via [1Panel](https://1panel.cn).

Visit [get-1panel.erisdev.com](https://get-1panel.erisdev.com) for a guided setup page.

### Quick Install

**1Panel Scheduled Task (recommended):**

Create a Shell script task in 1Panel → Scheduled Tasks, paste:

```bash
bash <(curl -sL https://get-1panel.erisdev.com/install.sh)
```

Or with wget: `bash <(wget -qO- https://get-1panel.erisdev.com/install.sh)`

**Manual:**

```bash
git clone -b main --depth 1 https://github.com/ErisPulse/ErisPulse-1Panel /tmp/erispulse-1panel
cp -rf /tmp/erispulse-1panel/apps/erispulse /opt/1panel/resource/apps/local/
rm -rf /tmp/erispulse-1panel
```

After install, click **"Update App List"** in 1Panel App Store.

### Uninstall

```bash
bash <(curl -sL https://get-1panel.erisdev.com/uninstall.sh)
```

### Update

Re-run the install command to overwrite.

### Auto Version Sync

A GitHub Actions workflow checks PyPI every 6 hours for new ErisPulse versions (including pre-releases) and creates version directories automatically.

### Directory Structure

```
ErisPulse-1Panel/
├── wrangler.toml                   # Cloudflare Worker config
├── package.json
├── scripts/
│   ├── install.sh
│   └── uninstall.sh
├── worker/src/index.js             # Worker entry
├── .github/workflows/
│   └── sync-pypi-version.yml
└── apps/erispulse/
    ├── data.yml
    ├── logo.png
    ├── README.md
    └── latest/
        ├── docker-compose.yml
        └── data.yml
```

---

<a id="简体中文"></a>

## 简体中文

ErisPulse 的 [1Panel](https://1panel.cn) 应用商店适配，支持一键安装。

访问 [get-1panel.erisdev.com](https://get-1panel.erisdev.com) 获取可视化安装指引。

### 快速安装

**1Panel 计划任务（推荐）：**

在 1Panel → 计划任务中创建 Shell 脚本任务，粘贴：

```bash
bash <(curl -sL https://get-1panel.erisdev.com/install.sh)
```

或使用 wget：`bash <(wget -qO- https://get-1panel.erisdev.com/install.sh)`

**手动安装：**

```bash
git clone -b main --depth 1 https://github.com/ErisPulse/ErisPulse-1Panel /tmp/erispulse-1panel
cp -rf /tmp/erispulse-1panel/apps/erispulse /opt/1panel/resource/apps/local/
rm -rf /tmp/erispulse-1panel
```

安装后在 1Panel 应用商店中点击 **「更新应用列表」** 刷新。

### 卸载

```bash
bash <(curl -sL https://get-1panel.erisdev.com/uninstall.sh)
```

### 更新

重新执行安装命令即可覆盖更新。

### 自动版本同步

GitHub Actions 工作流每 6 小时自动检查 [PyPI](https://pypi.org/project/ErisPulse/) 上的新版本（包括预发布版本），并自动创建对应的版本目录。