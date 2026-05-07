const GITHUB_RAW = "https://raw.githubusercontent.com/ErisPulse/ErisPulse-1Panel/main";

async function fetchScript(name) {
  const resp = await fetch(`${GITHUB_RAW}/scripts/${name}`);
  if (!resp.ok) return null;
  return resp.text();
}

const UNINSTALL_SCRIPT = `#!/usr/bin/env bash
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

echo "==========================================="`;

function renderHTML(request) {
  const host = request.headers.get("Host") || "get-1panel.erisdev.com";
  const baseUrl = `https://${host}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ErisPulse · 1Panel App Store</title>
<style>
  :root {
    --bg: #0f1117;
    --card: #1a1d27;
    --border: #2a2d3a;
    --text: #e4e4e7;
    --text-muted: #9ca3af;
    --accent: #6366f1;
    --accent-hover: #818cf8;
    --green: #22c55e;
    --red: #ef4444;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    line-height: 1.6;
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
  }
  .header h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .header p {
    color: var(--text-muted);
    font-size: 15px;
  }
  .header .badges {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 12px;
    flex-wrap: wrap;
  }
  .header .badges span {
    display: inline-block;
    padding: 2px 10px;
    border-radius: 9999px;
    font-size: 12px;
    border: 1px solid var(--border);
    color: var(--text-muted);
  }
  .section { margin-bottom: 36px; }
  .section h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .section h2 .icon { font-size: 20px; }
  .cmd-block {
    position: relative;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px 52px 16px 18px;
    margin-bottom: 12px;
    font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
    font-size: 13px;
    overflow-x: auto;
    white-space: pre;
    color: #c9d1d9;
  }
  .cmd-block .label {
    font-family: -apple-system, sans-serif;
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: 6px;
    display: block;
  }
  .copy-btn {
    position: absolute;
    top: 12px; right: 12px;
    background: var(--border);
    border: none;
    color: var(--text-muted);
    padding: 6px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.2s;
  }
  .copy-btn:hover { background: var(--accent); color: #fff; }
  .copy-btn.copied { background: var(--green); color: #fff; }
  .steps {
    counter-reset: step;
    list-style: none;
    padding: 0;
  }
  .steps li {
    position: relative;
    padding: 12px 0 12px 40px;
    color: var(--text-muted);
    font-size: 14px;
  }
  .steps li::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    left: 0;
    top: 12px;
    width: 26px; height: 26px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: var(--text);
  }
  .links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 8px;
  }
  .links a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text);
    text-decoration: none;
    font-size: 13px;
    transition: all 0.2s;
  }
  .links a:hover { border-color: var(--accent); color: var(--accent-hover); }
  .divider {
    border: none;
    border-top: 1px solid var(--border);
    margin: 36px 0;
  }
  footer {
    text-align: center;
    color: var(--text-muted);
    font-size: 13px;
    margin-top: 48px;
  }
  footer a { color: var(--accent-hover); text-decoration: none; }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <img src="${baseUrl}/logo.png" alt="ErisPulse" />
    <h1>ErisPulse</h1>
    <p>Event-driven multi-platform bot development framework &middot; 1Panel App Store</p>
    <div class="badges">
      <span>Docker</span>
      <span>amd64 / arm64</span>
      <span>1Panel 2.0+</span>
    </div>
  </div>

  <div class="section">
    <h2><span class="icon">&#x26A1;</span>Quick Install</h2>
    <div class="cmd-block">
      <span class="label">1Panel Scheduled Task / Terminal</span>
      <button class="copy-btn" onclick="copyCmd(this)">Copy</button>
bash <(curl -sL ${baseUrl}/install.sh)
    </div>
    <p style="color:var(--text-muted);font-size:13px;">
      Or with wget: <code style="color:var(--accent-hover)">bash &lt;(wget -qO- ${baseUrl}/install.sh)</code>
    </p>
  </div>

  <div class="section">
    <h2>Setup Steps</h2>
    <ol class="steps">
      <li>Copy the install command above</li>
      <li>Run it via 1Panel Scheduled Task (Shell script), or SSH into your server and execute directly</li>
      <li>Go to 1Panel App Store, click "Update App List" to refresh local apps</li>
      <li>Find ErisPulse, click Install and configure the port and Dashboard token</li>
      <li>Visit <code>http://&lt;IP&gt;:&lt;port&gt;/Dashboard</code> and log in with your token</li>
    </ol>
  </div>

  <div class="section">
    <h2>Uninstall</h2>
    <div class="cmd-block">
      <button class="copy-btn" onclick="copyCmd(this)">Copy</button>
bash <(curl -sL ${baseUrl}/uninstall.sh)
    </div>
  </div>

  <hr class="divider" />

  <div class="section">
    <h2>Links</h2>
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
  const code = block.querySelector('.label')
    ? block.textContent.replace('Copy','').replace('Copied','').replace(block.querySelector('.label').textContent,'').trim()
    : block.textContent.replace('Copy','').replace('Copied','').trim();
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = 'Copied';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
  });
}
</script>
</body>
</html>`;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

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

    return new Response(renderHTML(request), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
};
