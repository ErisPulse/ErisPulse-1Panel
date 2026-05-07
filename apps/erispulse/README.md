# ErisPulse

事件驱动的多平台机器人开发框架

## 简介

ErisPulse 是一个基于 Python 的事件驱动型多平台机器人开发框架。通过统一的 OneBot12 标准接口，您可以一次编写代码，同时在云湖、Telegram、OneBot 等多个平台部署相同功能的机器人。

## 核心特性

- **事件驱动架构** - 基于 OneBot12 标准的清晰事件模型
- **跨平台兼容** - 插件模块编写一次即可在所有平台使用
- **模块化设计** - 灵活的插件系统，易于扩展和集成
- **热重载支持** - 开发时无需重启即可重新加载代码
- **完整工具链** - 提供 CLI 工具、包管理和自动化脚本

## 配置说明

| 参数 | 说明 | 默认值 |
|------|------|--------|
| 端口 | Dashboard Web 端口 | 8000 |
| 数据路径 | 配置文件存储路径 | ./data |
| 时区 | 容器时区 | Asia/Shanghai |
| Dashboard 令牌 | Dashboard 管理面板登录密码 | （空） |

## 使用说明

1. 安装后访问 `http://<IP>:<端口>/Dashboard`
2. 使用设置的 Dashboard 令牌登录管理面板
3. 在管理面板中配置适配器和插件

## 链接

- 官网: https://www.erisdev.com
- GitHub: https://github.com/ErisPulse/ErisPulse
- Docker Hub: https://hub.docker.com/r/erispulse/erispulse
- 文档: https://github.com/ErisPulse/ErisPulse
