var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// worker/src/index.js
var GITHUB_RAW = "https://raw.githubusercontent.com/ErisPulse/ErisPulse-1Panel/main";
async function fetchScript(name) {
  const resp = await fetch(`${GITHUB_RAW}/scripts/${name}`);
  if (!resp.ok) return null;
  return resp.text();
}
__name(fetchScript, "fetchScript");
function renderHTML(request) {
  const host = request.headers.get("Host") || "get-1panel.erisdev.com";
  const baseUrl = `https://${host}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ErisPulse \xB7 1Panel App Store</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --bg-p: #1a1a1a;
    --bg-s: #252525;
    --bg-t: #2d2d2d;
    --tx-p: #E0E0E0;
    --tx-s: #A0A0A0;
    --tx-t: #707070;
    --bd: #404040;
    --bd-h: #505050;
    --accent: #5a5a3a;
    --accent-h: #4a4a2a;
    --accent-fg: #D4D4AA;
    --sh: rgba(0,0,0,.3);
    --ok-bg: #1B5E20; --ok-c: #A5D6A7; --ok-bd: #2E7D32;
    --er-bg: #B71C1C; --er-c: #FFCDD2; --er-bd: #C62828;
    --link: #64B5F6;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    background: var(--bg-p);
    color: var(--tx-p);
    min-height: 100vh;
    line-height: 1.6;
    font-size: 14px;
  }
  .container {
    max-width: 780px;
    margin: 0 auto;
    padding: 60px 24px 80px;
  }
  .header { text-align: center; margin-bottom: 48px; }
  .header img {
    width: 72px; height: 72px;
    border-radius: 16px;
    margin-bottom: 16px;
    box-shadow: 0 4px 12px var(--sh);
  }
  .header h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .header p {
    color: var(--tx-s);
    font-size: 15px;
  }
  .badges {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 12px;
    flex-wrap: wrap;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    border: 1px solid var(--bd);
    color: var(--tx-s);
    background: transparent;
  }
  .card {
    background: var(--bg-t);
    border-radius: 16px;
    box-shadow: 0 4px 12px var(--sh);
    padding: 18px 20px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .card-header {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .card-header svg { width: 18px; height: 18px; stroke: var(--tx-s); fill: none; stroke-width: 2; }
  .cmd-block {
    position: relative;
    background: var(--bg-s);
    border: 1px solid var(--bd);
    border-radius: 8px;
    padding: 14px 52px 14px 16px;
    font-family: 'Cascadia Code', 'Fira Code', Consolas, Monaco, monospace;
    font-size: 13px;
    overflow-x: auto;
    white-space: pre;
    color: var(--tx-p);
  }
  .cmd-block .label {
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 12px;
    color: var(--tx-t);
    margin-bottom: 6px;
    display: block;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: all .2s;
  }
  .btn:hover { transform: translateY(-1px); }
  .btn:active { transform: translateY(0); }
  .btn-primary { background: var(--accent); color: var(--tx-p); }
  .btn-primary:hover { background: var(--accent-h); }
  .btn-copy {
    position: absolute;
    top: 10px; right: 10px;
    padding: 6px 12px;
    font-size: 12px;
    background: var(--bd);
    color: var(--tx-s);
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-weight: 600;
    transition: all .2s;
  }
  .btn-copy:hover { background: var(--accent); color: var(--tx-p); }
  .btn-copy.copied { background: var(--ok-bg); color: var(--ok-c); }
  .steps {
    counter-reset: step;
    list-style: none;
    padding: 0;
  }
  .steps li {
    position: relative;
    padding: 10px 0 10px 40px;
    color: var(--tx-s);
    font-size: 14px;
    line-height: 1.5;
  }
  .steps li::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    left: 0; top: 10px;
    width: 26px; height: 26px;
    background: var(--bg-s);
    border: 1px solid var(--bd);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: var(--tx-p);
  }
  .steps code {
    font-family: 'Cascadia Code', 'Fira Code', Consolas, monospace;
    font-size: 13px;
    color: var(--accent-fg);
    background: var(--bg-s);
    padding: 2px 6px;
    border-radius: 4px;
  }
  .hint {
    color: var(--tx-t);
    font-size: 13px;
    margin-top: 10px;
  }
  .hint code { color: var(--link); font-family: 'Cascadia Code', 'Fira Code', Consolas, monospace; font-size: 13px; }
  .links {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .links a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: var(--bg-s);
    border: 1px solid var(--bd);
    border-radius: 8px;
    color: var(--tx-p);
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    transition: all .2s;
  }
  .links a:hover { border-color: var(--accent); transform: translateY(-1px); }
  .divider {
    border: none;
    border-top: 1px solid var(--bd);
    margin: 28px 0;
  }
  footer {
    text-align: center;
    color: var(--tx-t);
    font-size: 13px;
    margin-top: 40px;
  }
  footer a { color: var(--link); text-decoration: none; }
  footer a:hover { text-decoration: underline; }
  @media (max-width: 480px) {
    .container { padding: 40px 16px 60px; }
    .card { padding: 14px 16px; }
  }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <img src="${baseUrl}/logo.png" alt="ErisPulse" />
    <h1>ErisPulse</h1>
    <p>Event-driven multi-platform bot development framework</p>
    <div class="badges">
      <span class="chip">Docker</span>
      <span class="chip">amd64 / arm64</span>
      <span class="chip">1Panel 1.x / 2.0+</span>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      Quick Install
    </div>
    <div class="cmd-block">
      <span class="label">1Panel Scheduled Task / Terminal</span>
      <button class="btn-copy" onclick="copyCmd(this)">Copy</button>
bash <(curl -sL ${baseUrl}/install.sh)
    </div>
    <p class="hint">Or with wget: <code>bash &lt;(wget -qO- ${baseUrl}/install.sh)</code></p>
  </div>

  <div class="card">
    <div class="card-header">
      <svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2"/><path d="M9 14l2 2 4-4"/></svg>
      Setup Steps
    </div>
    <ol class="steps">
      <li>Copy the install command above</li>
      <li>Run it via 1Panel Scheduled Task (Shell script), or SSH into your server and execute directly</li>
      <li>Go to 1Panel App Store, click "Update App List" to refresh local apps</li>
      <li>Find ErisPulse, click Install and configure the port and Dashboard token</li>
      <li>Visit <code>http://&lt;IP&gt;:&lt;port&gt;/Dashboard</code> and log in with your token</li>
    </ol>
  </div>

  <div class="card">
    <div class="card-header">
      <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      Uninstall
    </div>
    <div class="cmd-block">
      <button class="btn-copy" onclick="copyCmd(this)">Copy</button>
bash <(curl -sL ${baseUrl}/uninstall.sh)
    </div>
  </div>

  <hr class="divider" />

  <div class="card">
    <div class="card-header">
      <svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      Links
    </div>
    <div class="links">
      <a href="https://github.com/ErisPulse/ErisPulse" target="_blank">GitHub</a>
      <a href="https://hub.docker.com/r/erispulse/erispulse" target="_blank">Docker Hub</a>
      <a href="https://www.erisdev.com" target="_blank">Website</a>
      <a href="https://github.com/ErisPulse/ErisPulse-1Panel" target="_blank">This Repo</a>
      <a href="https://1panel.cn" target="_blank">1Panel</a>
    </div>
  </div>

  <footer>
    &copy; ErisDev &middot; <a href="https://github.com/ErisPulse/ErisPulse">ErisPulse</a>
  </footer>
</div>
<script>
function copyCmd(btn) {
  const block = btn.parentElement;
  const label = block.querySelector('.label');
  const text = label
    ? block.textContent.replace(btn.textContent,'').replace(label.textContent,'').trim()
    : block.textContent.replace(btn.textContent,'').trim();
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
  });
}
<\/script>
</body>
</html>`;
}
__name(renderHTML, "renderHTML");
var index_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === "/install.sh") {
      const script = await fetchScript("install.sh");
      if (!script) return new Response("Not Found", { status: 404 });
      return new Response(script, {
        headers: {
          "Content-Type": "text/x-shellscript; charset=utf-8",
          "Cache-Control": "public, max-age=300"
        }
      });
    }
    if (path === "/uninstall.sh") {
      const script = await fetchScript("uninstall.sh");
      if (!script) return new Response("Not Found", { status: 404 });
      return new Response(script, {
        headers: {
          "Content-Type": "text/x-shellscript; charset=utf-8",
          "Cache-Control": "public, max-age=300"
        }
      });
    }
    if (path === "/logo.png") {
      const resp = await fetch(`${GITHUB_RAW}/apps/erispulse/logo.png`);
      if (resp.ok) {
        return new Response(resp.body, {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=86400"
          }
        });
      }
      return new Response("Not Found", { status: 404 });
    }
    return new Response(renderHTML(request), {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
