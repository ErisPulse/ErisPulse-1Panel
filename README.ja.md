[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [Русский](README.ru.md)

<div align="center">

<img src="https://raw.githubusercontent.com/ErisPulse/ErisPulse/main/.github/assets/ErisPulseLogo.png" width="180" alt="ErisPulse-1Panel" />

# ErisPulse-1Panel

**1Panel アプリストアから ErisPulse をワンクリック導入**

<p>
  <a href="https://github.com/ErisPulse/ErisPulse/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License"></a>
  <img src="https://raw.githubusercontent.com/ErisPulse/.github/main/assets/badges/ecosystem.svg" alt="ErisPulse">
</p>

</div>

---

<a id="english"></a>

## English

ErisPulse 1Panel App Store integration. Install ErisPulse from the local app store of [1Panel](https://1panel.cn) (v2 app format).

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

Re-run the install command to overwrite. **Docker only runs the container; framework updates are handled via Dashboard hot-update.**

### Directory Structure

```
ErisPulse-1Panel/
├── wrangler.toml                   # Cloudflare Worker config
├── package.json
├── scripts/
│   ├── install.sh
│   └── uninstall.sh
├── worker/src/index.js             # Worker entry (get-1panel.erisdev.com)
└── apps/erispulse/
    ├── data.yml
    ├── logo.png
    ├── README.md
    └── latest/
        ├── docker-compose.yml
        ├── data.yml
        └── scripts/                # init / uninstall / upgrade hooks
```

---

<a id="简体中文"></a>

## 简体中文

ErisPulse 的 [1Panel](https://1panel.cn) 本地应用商店适配（v2 应用格式），安装后在应用商店一键部署。

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

重新执行安装命令即可覆盖更新。**Docker 仅负责运行容器，框架更新请通过 Dashboard 热更新完成。**
