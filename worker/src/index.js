const GITHUB_RAW = "https://raw.githubusercontent.com/ErisPulse/ErisPulse-1Panel/main";

// 多语言配置
const I18N = {
  en: {
    title: "ErisPulse · 1Panel App Store",
    desc: "Event-driven multi-platform bot development framework",
    crumbs: "App Store / ErisPulse",
    badges: ["Docker", "amd64 / arm64", "1Panel v2"],
    installMain: "Install",
    installLabel: "1Panel Scheduled Task / Terminal",
    copyBtn: "Copy",
    copiedBtn: "Copied!",
    orWith: "Or with wget:",
    stepsTitle: "Setup Steps",
    steps: [
      "Copy the install command above",
      "Run it via 1Panel Scheduled Task (Shell script), or SSH into your server and execute directly",
      "Go to 1Panel App Store, click \"Update App List\" to refresh local apps",
      "Find ErisPulse, click Install and configure the port and Dashboard token",
      "Visit <code>http://&lt;IP&gt;:&lt;port&gt;/Dashboard</code> and log in with your token"
    ],
    uninstallTitle: "Uninstall",
    linksTitle: "Resources",
    links: {
      github: "GitHub",
      docker: "Docker Hub",
      website: "Website",
      repo: "This Repo",
      panel: "1Panel Official"
    },
    footer: "&copy; ErisDev"
  },
  zh: {
    title: "ErisPulse · 1Panel 应用商店",
    desc: "事件驱动的多平台机器人开发框架",
    crumbs: "应用商店 / ErisPulse",
    badges: ["Docker", "amd64 / arm64", "1Panel v2"],
    installMain: "安装",
    installLabel: "1Panel 计划任务 / 终端",
    copyBtn: "复制",
    copiedBtn: "已复制!",
    orWith: "或使用 wget:",
    stepsTitle: "安装步骤",
    steps: [
      "复制上方的安装命令",
      "通过 1Panel 计划任务 (Shell 脚本) 运行，或 SSH 登录服务器直接执行",
      "进入 1Panel 应用商店，点击 \"更新应用列表\" 刷新本地应用",
      "找到 ErisPulse，点击安装并配置端口和 Dashboard 令牌",
      "访问 <code>http://&lt;IP&gt;:&lt;port&gt;/Dashboard</code> 并使用令牌登录"
    ],
    uninstallTitle: "卸载",
    linksTitle: "相关链接",
    links: {
      github: "GitHub",
      docker: "Docker Hub",
      website: "官方网站",
      repo: "本项目仓库",
      panel: "1Panel 官网"
    },
    footer: "&copy; ErisDev"
  }
};

async function fetchScript(name) {
  const resp = await fetch(`${GITHUB_RAW}/scripts/${name}`);
  if (!resp.ok) return null;
  return resp.text();
}

function getLang(request, url) {
  const param = url.searchParams.get("lang");
  if (param === "zh" || param === "en") return param;
  const acceptLang = request.headers.get("Accept-Language") || "";
  return acceptLang.toLowerCase().includes("zh") ? "zh" : "en";
}

function renderHTML(request, url) {
  const host = request.headers.get("Host") || "get-1panel.erisdev.com";
  const baseUrl = `https://${host}`;
  const lang = getLang(request, url);
  const t = I18N[lang];
  const isZh = lang === "zh";

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${t.title}</title>
<style>
  :root {
    --bg: #f6f7f9;
    --bg-sunken: #eef0f3;
    --card: #ffffff;
    --ink: #0f1419;
    --ink-soft: #5f6b7a;
    --ink-faint: #9aa4b1;
    --line: #e5e8ec;
    --line-strong: #d0d6dd;
    --accent: #4aa3dd;
    --accent-fill: #3a94d0;
    --accent-soft: rgba(74, 163, 221, 0.14);
    --ok-bg: #e9f8ef;
    --ok-c: #178a52;
    --radius: 14px;
    --shadow-hover: 0 6px 18px -8px rgba(15, 23, 42, 0.18);
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: var(--font-sans);
    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  /* topbar：Dashboard 悬浮卡片语言 */
  .topbar {
    position: sticky; top: 10px; z-index: 10;
    width: min(1100px, calc(100% - 24px));
    margin: 10px auto 0;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 0 18px; height: 54px;
    display: flex; align-items: center; gap: 12px;
  }
  .topbar .brand { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 15px; }
  .topbar .brand svg { width: 22px; height: 22px; color: var(--accent-fill); }
  .topbar .sp { flex: 1; }
  .round { width: 34px; height: 34px; border-radius: 8px; background: var(--card); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; color: var(--ink-soft); transition: color 0.15s ease, border-color 0.15s ease; }
  .round:hover { border-color: var(--accent); color: var(--accent); }
  .round svg { width: 17px; height: 17px; }
  /* header */
  .container { max-width: 1100px; margin: 0 auto; padding: 28px 24px 64px; }
  .header { margin-bottom: 28px; }
  .crumbs { color: var(--ink-faint); font-size: 13px; margin-bottom: 6px; }
  .header h1 { font-size: 30px; font-weight: 800; letter-spacing: -0.02em; }
  .header .sub { color: var(--ink-soft); font-size: 15px; margin-top: 6px; }
  .badges { display: flex; gap: 8px; margin-top: 14px; flex-wrap: wrap; }
  .chip { padding: 4px 12px; border-radius: 8px; font-size: 12px; font-weight: 600; background: var(--bg-sunken); color: var(--ink-soft); border: 1px solid var(--line); }
  /* grid */
  .grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 16px; align-items: start; }
  .col { display: flex; flex-direction: column; gap: 16px; }
  .card {
    background: var(--card); border: 1px solid var(--line); border-radius: var(--radius);
    padding: 22px; transition: border-color 0.2s ease;
  }
  .card:hover { border-color: var(--line-strong); }
  .card.wide { grid-column: 1 / -1; }
  .card-head { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 700; margin-bottom: 18px; }
  .card-head svg { width: 19px; height: 19px; color: var(--accent-fill); }
  .cmd-wrapper { position: relative; background: var(--bg-sunken); border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
  .cmd-label { padding: 8px 16px; font-size: 12px; color: var(--ink-soft); border-bottom: 1px solid var(--line); }
  .cmd-content { padding: 14px 16px; font-family: var(--font-mono); font-size: 13px; color: var(--ink); display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  .cmd-text { flex: 1; white-space: nowrap; overflow-x: auto; scrollbar-width: thin; }
  .btn { background: var(--accent-fill); color: #fff; border: none; padding: 7px 14px; border-radius: 8px; font-size: 12px; font-weight: 600; cursor: pointer; transition: background-color 0.2s ease; white-space: nowrap; }
  .btn:hover { background: #2f7fb8; }
  .btn.ok { background: #178a52; }
  .hint { margin-top: 12px; font-size: 13px; color: var(--ink-soft); }
  .hint code { font-family: var(--font-mono); color: var(--accent-fill); background: var(--accent-soft); padding: 2px 6px; border-radius: 5px; font-size: 12px; }
  .steps { list-style: none; counter-reset: s; }
  .steps li { position: relative; padding-left: 32px; margin-bottom: 12px; color: var(--ink-soft); font-size: 14px; }
  .steps li:last-child { margin-bottom: 0; }
  .steps li::before { counter-increment: s; content: counter(s); position: absolute; left: 0; top: 0; width: 22px; height: 22px; background: var(--bg-sunken); border: 1px solid var(--line); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: var(--accent-fill); }
  .steps code { font-family: var(--font-mono); color: var(--ink); background: var(--bg-sunken); padding: 1px 5px; border-radius: 4px; }
  .links-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; }
  .link-item { display: flex; align-items: center; justify-content: center; padding: 12px; background: var(--bg-sunken); border: 1px solid var(--line); border-radius: 10px; color: var(--ink-soft); text-decoration: none; font-size: 14px; font-weight: 600; transition: color 0.15s ease, border-color 0.15s ease; }
  .link-item:hover { background: var(--accent-soft); border-color: var(--accent); color: var(--accent-fill); }
  .foot { margin-top: 32px; text-align: center; color: var(--ink-faint); font-size: 13px; }
  .lang-switch { display: inline-flex; background: var(--bg-sunken); border: 1px solid var(--line); border-radius: 999px; overflow: hidden; margin-bottom: 12px; }
  .lang-btn { padding: 6px 16px; font-size: 12px; background: transparent; border: none; color: var(--ink-soft); cursor: pointer; }
  .lang-btn.active { background: var(--accent-fill); color: #fff; }
  a { color: var(--accent-fill); text-decoration: none; }
  @media (max-width: 760px) { .container { padding: 20px 14px 40px; } .grid { grid-template-columns: 1fr; } .cmd-content { flex-direction: column; align-items: stretch; gap: 10px; } .btn { width: 100%; } }
</style>
</head>
<body>
<div class="topbar">
  <div class="brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg><span>ErisPulse</span></div>
  <div class="sp"></div>
  <a class="round" href="https://github.com/ErisPulse/ErisPulse" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
  </a>
</div>

<div class="container">
  <div class="header">
    <div class="crumbs">${t.crumbs}</div>
    <h1>ErisPulse</h1>
    <div class="sub">${t.desc}</div>
    <div class="badges">${t.badges.map(b => `<span class="chip">${b}</span>`).join('')}</div>
  </div>

  <div class="grid">
    <div class="card">
      <div class="card-head"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>${t.installMain}</div>
      <div class="cmd-wrapper">
        <div class="cmd-label">${t.installLabel}</div>
        <div class="cmd-content">
          <span class="cmd-text">bash <(curl -sL ${baseUrl}/install.sh)</span>
          <button class="btn" onclick="copyCmd(this)">${t.copyBtn}</button>
        </div>
      </div>
      <p class="hint">${t.orWith} <code>bash &lt;(wget -qO- ${baseUrl}/install.sh)</code></p>
      <ol class="steps">${t.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    </div>

    <div class="col">
      <div class="card">
        <div class="card-head"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>${t.uninstallTitle}</div>
        <div class="cmd-wrapper">
          <div class="cmd-content">
            <span class="cmd-text">bash <(curl -sL ${baseUrl}/uninstall.sh)</span>
            <button class="btn" onclick="copyCmd(this)">${t.copyBtn}</button>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-head"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>${t.linksTitle}</div>
        <div class="links-grid">
          <a href="https://github.com/ErisPulse/ErisPulse" target="_blank" rel="noopener noreferrer" class="link-item">${t.links.github}</a>
          <a href="https://hub.docker.com/r/erispulse/erispulse" target="_blank" rel="noopener noreferrer" class="link-item">${t.links.docker}</a>
          <a href="https://www.erisdev.com" target="_blank" rel="noopener noreferrer" class="link-item">${t.links.website}</a>
          <a href="https://github.com/ErisPulse/ErisPulse-1Panel" target="_blank" rel="noopener noreferrer" class="link-item">${t.links.repo}</a>
          <a href="https://1panel.cn" target="_blank" rel="noopener noreferrer" class="link-item">${t.links.panel}</a>
        </div>
      </div>
    </div>
  </div>

  <div class="foot">
    <div class="lang-switch">
      <button class="lang-btn ${isZh ? '' : 'active'}" onclick="switchLang('en')">English</button>
      <button class="lang-btn ${isZh ? 'active' : ''}" onclick="switchLang('zh')">中文</button>
    </div>
  </div>
</div>

<script>
function copyCmd(btn) {
  const wrapper = btn.closest('.cmd-wrapper');
  const text = wrapper.querySelector('.cmd-text').innerText.trim();

  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.innerText;
    const isZh = document.documentElement.lang === 'zh';
    btn.innerText = isZh ? '${I18N.zh.copiedBtn}' : '${I18N.en.copiedBtn}';
    btn.classList.add('ok');

    setTimeout(() => {
      btn.innerText = originalText;
      btn.classList.remove('ok');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

function switchLang(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.location.href = url.toString();
}
</script>
</body>
</html>`;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Support manual language override via query param

    if (path === "/install.sh") {
      const script = await fetchScript("install.sh");
      if (!script) return new Response("Not Found", { status: 404 });
      return new Response(script, {
        headers: {
          "Content-Type": "text/x-shellscript; charset=utf-8",
          "Cache-Control": "public, max-age=300",
        },
      });
    }

    if (path === "/uninstall.sh") {
      const script = await fetchScript("uninstall.sh");
      if (!script) return new Response("Not Found", { status: 404 });
      return new Response(script, {
        headers: {
          "Content-Type": "text/x-shellscript; charset=utf-8",
          "Cache-Control": "public, max-age=300",
        },
      });
    }

    if (path === "/logo.png") {
      const resp = await fetch(`${GITHUB_RAW}/apps/erispulse/logo.png`);
      if (resp.ok) {
        return new Response(resp.body, {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=86400",
          },
        });
      }
      return new Response("Not Found", { status: 404 });
    }

    return new Response(renderHTML(request, url), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
};
