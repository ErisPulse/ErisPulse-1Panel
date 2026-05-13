const GITHUB_RAW = "https://raw.githubusercontent.com/ErisPulse/ErisPulse-1Panel/main";

// 多语言配置
const I18N = {
  en: {
    title: "ErisPulse · 1Panel App Store",
    desc: "Event-driven multi-platform bot development framework",
    badges: ["Docker", "amd64 / arm64", "1Panel 1.x / 2.0+"],
    quickInstall: "Quick Install",
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
    footer: "&copy; ErisDev · Powered by ErisPulse"
  },
  zh: {
    title: "ErisPulse · 1Panel 应用商店",
    desc: "事件驱动的多平台机器人开发框架",
    badges: ["Docker", "amd64 / arm64", "1Panel 1.x / 2.0+"],
    quickInstall: "快速安装",
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
    footer: "&copy; ErisDev · 由 ErisPulse 驱动"
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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --bg-body: #0f1115;
    --bg-card: rgba(30, 34, 45, 0.6);
    --bg-card-hover: rgba(40, 44, 55, 0.8);
    --bg-code: #1a1d24;
    --border: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(255, 255, 255, 0.15);
    --text-main: #ffffff;
    --text-sub: #9ca3af;
    --accent: #6366f1;
    --accent-glow: rgba(99, 102, 241, 0.15);
    --success: #10b981;
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
  }
  
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  body {
    font-family: var(--font-sans);
    background-color: var(--bg-body);
    background-image: 
      radial-gradient(circle at 15% 50%, rgba(99, 102, 241, 0.08), transparent 25%),
      radial-gradient(circle at 85% 30%, rgba(16, 185, 129, 0.05), transparent 25%);
    color: var(--text-main);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  .container {
    width: 100%;
    max-width: 800px;
    padding: 40px 20px;
    flex: 1;
  }

  /* Header */
  .header {
    text-align: center;
    margin-bottom: 48px;
    animation: fadeIn 0.6s ease-out;
  }
  
  .logo-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 24px;
  }
  
  .logo-wrapper::after {
    content: '';
    position: absolute;
    inset: -10px;
    background: var(--accent);
    filter: blur(25px);
    opacity: 0.2;
    border-radius: 50%;
    z-index: -1;
  }

  .header img {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    border: 1px solid var(--border);
  }

  .header h1 {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 8px;
    background: linear-gradient(to right, #fff, #cbd5e1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .header p {
    color: var(--text-sub);
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto;
  }

  .badges {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 16px;
    flex-wrap: wrap;
  }

  .chip {
    padding: 4px 12px;
    border-radius: 99px;
    font-size: 12px;
    font-weight: 500;
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--border);
    color: var(--text-sub);
    transition: all 0.2s;
  }
  
  .chip:hover {
    border-color: var(--accent);
    color: var(--text-main);
    background: var(--accent-glow);
  }

  /* Cards */
  .card {
    background: var(--bg-card);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
    transition: transform 0.2s, border-color 0.2s;
    animation: slideUp 0.6s ease-out backwards;
  }
  
  .card:nth-child(2) { animation-delay: 0.1s; }
  .card:nth-child(3) { animation-delay: 0.2s; }
  .card:nth-child(4) { animation-delay: 0.3s; }

  .card:hover {
    border-color: var(--border-hover);
    transform: translateY(-2px);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
    color: var(--text-main);
  }

  .card-header svg {
    width: 20px;
    height: 20px;
    stroke: var(--accent);
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Code Block */
  .cmd-wrapper {
    position: relative;
    background: var(--bg-code);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
  }

  .cmd-label {
    padding: 10px 16px;
    font-size: 12px;
    color: var(--text-sub);
    border-bottom: 1px solid var(--border);
    background: rgba(0,0,0,0.2);
    font-family: var(--font-sans);
  }

  .cmd-content {
    padding: 16px;
    font-family: var(--font-mono);
    font-size: 13px;
    color: #e2e8f0;
    overflow-x: auto;
    white-space: pre;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  
  .cmd-text {
    flex: 1;
    word-break: break-all;
  }

  .btn-copy {
    background: rgba(255,255,255,0.1);
    border: none;
    color: var(--text-main);
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-sans);
    white-space: nowrap;
  }

  .btn-copy:hover {
    background: var(--accent);
    color: white;
  }

  .btn-copy.copied {
    background: var(--success);
    color: white;
  }

  .hint {
    margin-top: 12px;
    font-size: 13px;
    color: var(--text-sub);
  }
  
  .hint code {
    font-family: var(--font-mono);
    color: var(--accent);
    background: rgba(99, 102, 241, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
  }

  /* Steps */
  .steps {
    list-style: none;
    counter-reset: step-counter;
  }

  .steps li {
    position: relative;
    padding-left: 36px;
    margin-bottom: 16px;
    color: var(--text-sub);
    font-size: 14px;
  }
  
  .steps li:last-child { margin-bottom: 0; }

  .steps li::before {
    counter-increment: step-counter;
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    background: var(--bg-code);
    border: 1px solid var(--border);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: var(--accent);
  }
  
  .steps code {
    font-family: var(--font-mono);
    color: var(--text-main);
    background: rgba(255,255,255,0.05);
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 13px;
  }

  /* Links */
  .links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
  }

  .link-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background: rgba(255,255,255,0.03);
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--text-sub);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s;
  }

  .link-item:hover {
    background: var(--accent-glow);
    border-color: var(--accent);
    color: var(--text-main);
    transform: translateY(-2px);
  }

  /* Footer & Lang Switcher */
  .footer-area {
    margin-top: 40px;
    text-align: center;
    color: var(--text-sub);
    font-size: 13px;
    padding-bottom: 20px;
    animation: fadeIn 1s ease-out;
  }

  .footer-area a {
    color: var(--accent);
    text-decoration: none;
    transition: color 0.2s;
  }
  
  .footer-area a:hover { text-decoration: underline; }

  .lang-switch {
    margin-bottom: 12px;
    display: inline-flex;
    background: var(--bg-code);
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
  }

  .lang-btn {
    padding: 6px 16px;
    font-size: 12px;
    background: transparent;
    border: none;
    color: var(--text-sub);
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-sans);
  }

  .lang-btn.active {
    background: var(--accent);
    color: white;
  }
  
  .lang-btn:hover:not(.active) {
    color: var(--text-main);
    background: rgba(255,255,255,0.05);
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 600px) {
    .container { padding: 24px 16px; }
    .header h1 { font-size: 24px; }
    .cmd-content { flex-direction: column; align-items: stretch; gap: 10px; }
    .btn-copy { width: 100%; text-align: center; }
  }
</style>
</head>
<body>

<div class="container">
  <div class="header">
    <div class="logo-wrapper">
      <img src="${baseUrl}/logo.png" alt="ErisPulse Logo" />
    </div>
    <h1>ErisPulse</h1>
    <p>${t.desc}</p>
    <div class="badges">
      ${t.badges.map(b => `<span class="chip">${b}</span>`).join('')}
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      ${t.quickInstall}
    </div>
    <div class="cmd-wrapper">
      <div class="cmd-label">${t.installLabel}</div>
      <div class="cmd-content">
        <span class="cmd-text">bash <(curl -sL ${baseUrl}/install.sh)</span>
        <button class="btn-copy" onclick="copyCmd(this)">${t.copyBtn}</button>
      </div>
    </div>
    <p class="hint">${t.orWith} <code>bash &lt;(wget -qO- ${baseUrl}/install.sh)</code></p>
  </div>

  <div class="card">
    <div class="card-header">
      <svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2"/><path d="M9 14l2 2 4-4"/></svg>
      ${t.stepsTitle}
    </div>
    <ol class="steps">
      ${t.steps.map(s => `<li>${s}</li>`).join('')}
    </ol>
  </div>

  <div class="card">
    <div class="card-header">
      <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      ${t.uninstallTitle}
    </div>
    <div class="cmd-wrapper">
      <div class="cmd-content">
        <span class="cmd-text">bash <(curl -sL ${baseUrl}/uninstall.sh)</span>
        <button class="btn-copy" onclick="copyCmd(this)">${t.copyBtn}</button>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      ${t.linksTitle}
    </div>
    <div class="links-grid">
      <a href="https://github.com/ErisPulse/ErisPulse" target="_blank" class="link-item">${t.links.github}</a>
      <a href="https://hub.docker.com/r/erispulse/erispulse" target="_blank" class="link-item">${t.links.docker}</a>
      <a href="https://www.erisdev.com" target="_blank" class="link-item">${t.links.website}</a>
      <a href="https://github.com/ErisPulse/ErisPulse-1Panel" target="_blank" class="link-item">${t.links.repo}</a>
      <a href="https://1panel.cn" target="_blank" class="link-item">${t.links.panel}</a>
    </div>
  </div>

  <div class="footer-area">
    <div class="lang-switch">
      <button class="lang-btn ${isZh ? '' : 'active'}" onclick="switchLang('en')">English</button>
      <button class="lang-btn ${isZh ? 'active' : ''}" onclick="switchLang('zh')">中文</button>
    </div>
    <div>${t.footer}</div>
  </div>
</div>

<script>
function copyCmd(btn) {
  const wrapper = btn.closest('.cmd-wrapper');
  const text = wrapper.querySelector('.cmd-text').innerText.trim();
  
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.innerText;
    // Use current language's "Copied" text based on button's current context or default
    const isZh = document.documentElement.lang === 'zh';
    btn.innerText = isZh ? '${I18N.zh.copiedBtn}' : '${I18N.en.copiedBtn}';
    btn.classList.add('copied');
    
    setTimeout(() => { 
      btn.innerText = originalText; 
      btn.classList.remove('copied'); 
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