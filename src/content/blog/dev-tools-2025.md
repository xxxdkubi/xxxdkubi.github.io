---
title: "2025 年我的开发工具箱"
description: "分享我日常使用的开发工具，从终端到编辑器，提升开发效率的实用选择。"
date: 2026-05-19
category: "工具"
tags: [工具, 效率, 终端, vs code]
---

# 2025 年我的开发工具箱

工具
2025 年我的开发工具箱
分享我日常使用的开发工具，从终端到编辑器，提升开发效率的实用选择。
2026年5月19日 · 593 字 · 约 2 分钟阅读 · 0 次阅读
复制链接
document.addEventListener('astro:page-load', () => {
const btn = document.getElementById('copy-link-btn');
const text = document.getElementById('copy-link-text');
if (!btn || !text) return;
btn.addEventListener('click', async () => {
try {
await navigator.clipboard.writeText(window.location.href);
text.textContent = '已复制';
btn.classList.add('text-green-600', 'dark:text-green-400');
setTimeout(() => {
text.textContent = '复制链接';
btn.classList.remove('text-green-600', 'dark:text-green-400');
}, 2000);
} catch {
text.textContent = '复制失败';
setTimeout(() => { text.textContent = '复制链接'; }, 2000);
}
});
});
扫码
手机扫码阅读
长按识别二维码
document.addEventListener('astro:page-load', () => {
const btn = document.getElementById('show-qr');
const modal = document.getElementById('qr-modal');
const qrDiv = document.getElementById('qr-code');
if (!btn || !modal || !qrDiv) return;
btn.addEventListener('click', () => {
// 用简单 SVG 生成伪二维码（纯装饰，实际可用 qrcode.js）
const url = encodeURIComponent(window.location.href);
qrDiv.innerHTML = `
扫码访问
${window.location.hostname}
`;
modal.classList.remove('hidden');
modal.classList.add('flex');
});
modal.addEventListener('click', (e) => {
if (e.target === modal) {
modal.classList.add('hidden');
modal.classList.remove('flex');
}
});
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
modal.classList.add('hidden');
modal.classList.remove('flex');
}
});
});
收藏
document.addEventListener('astro:page-load', () => {
const btn = document.getElementById('bookmark-btn');
const icon = document.getElementById('bookmark-icon');
const text = document.getElementById('bookmark-text');
if (!btn || !icon || !text) return;
const slug = window.location.pathname.replace(/.*\/blog\//, '').replace(/\/$/, '');
if (!slug) return;
const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
const isBookmarked = bookmarks.includes(slug);
function updateUI() {
const nowBookmarked = bookmarks.includes(slug);
icon.setAttribute('fill', nowBookmarked ? 'currentColor' : 'none');
text.textContent = nowBookmarked ? '已收藏' : '收藏';
btn.classList.toggle('text-accent', nowBookmarked);
btn.classList.toggle('dark:text-dark-accent', nowBookmarked);
}
updateUI();
btn.addEventListener('click', () => {
const idx = bookmarks.indexOf(slug);
if (idx > -1) {
bookmarks.splice(idx, 1);
} else {
bookmarks.push(slug);
}
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
updateUI();
});
});
A- 16 A+
document.addEventListener('astro:page-load', () => {
const control = document.getElementById('font-size-control');
const label = document.getElementById('font-size-label');
const decrease = document.getElementById('font-decrease');
const increase = document.getElementById('font-increase');
if (!control || !label || !decrease || !increase) return;
// 只在文章页显示
const prose = document.querySelector('.prose');
if (!prose) return;
control.classList.remove('hidden');
control.classList.add('inline-flex');
let size = parseInt(localStorage.getItem('font_size') || '16');
applySize(size);
decrease.addEventListener('click', () => {
if (size > 12) { size -= 1; applySize(size); }
});
increase.addEventListener('click', () => {
if (size
工欲善其事，必先利其器。分享一下我日常开发中离不开的工具。
终端：Warp
Warp 是一个现代化的终端，几个让我离不开的功能：
命令块：每条命令和输出自动分块，不会滚动时迷失
AI 命令搜索：用自然语言描述想要的操作，自动推荐命令
共享工作流：团队可以共享常用命令片段
# 以前记不住的复杂命令，现在自然语言描述
# "find all markdown files modified in the last 7 days"
find . -name "*.md" -mtime -7
如果你用 Windows Terminal，推荐安装 Oh My Posh 美化提示符。
编辑器：VS Code + 必装插件
VS Code 依然是最平衡的选择。我的必装插件清单：
插件用途
CursorAI 辅助编码，Tab 补全
Error Lens内联显示错误，不用看问题面板
GitLens代码行级 blame，追溯修改历史
Pretty TypeScript Errors让 TS 错误信息可读
Tailwind CSS IntelliSenseTailwind 类名补全和预览
包管理：pnpm
从 npm 切到 pnpm 后，磁盘空间省了一半，安装速度快了 3 倍。
# 安装
npm install -g pnpm
# 使用方式和 npm 完全一样
pnpm install
pnpm add lodash
pnpm run dev
pnpm 用硬链接共享依赖，10 个项目用同一个 lodash，只占一份磁盘空间。
API 测试：Bruno
Postman 越来越臃肿，Bruno 是更好的替代品：
请求集合存在本地文件夹，可以用 Git 管理
界面简洁，启动快
支持环境变量、脚本、断言
# 安装
brew install bruno # macOS
# 或者下载安装包 https://www.usebruno.com/
数据库：TablePlus
轻量级的数据库 GUI，支持 PostgreSQL、MySQL、SQLite、Redis 等。界面干净，查询速度快，比 DBeaver 好看太多。
文档：MkDocs + Material
写技术文档用 MkDocs + Material 主题，Markdown 写内容，自动生成漂亮的文档站。
pip install mkdocs-material
mkdocs new my-docs
mkdocs serve
图片处理：Squoosh
Google 出品的在线图片压缩工具，浏览器里直接用，不需要装软件。支持 WebP、AVIF 等现代格式转换。
Chrome 插件
Wappalyzer：一键查看网站技术栈
React DevTools：React 组件调试
Lighthouse：性能审计
Dark Reader：强制暗色模式（保护眼睛）
写在最后
工具不在多，在于用熟。与其装 20 个插件，不如把 5 个核心工具用到极致。
你的工具箱里有什么好东西？欢迎留言分享。
目录
工具 效率 终端 VS Code
又逢雨季
一个走非主流路线的大专生，在迷茫中摸索，在试错中成长。喜欢技术，喜欢记录，喜欢真实的东西。
GitHub
关于我
0
复制链接
Twitter
微信
扫码分享「2025 年我的开发工具箱」
https://ekegukeku64-blip.github.io/blog/dev-tools-2025/
(function(){const slug = "dev-tools-2025";
const currentUrl = "https://ekegukeku64-blip.github.io/blog/dev-tools-2025/";
const title = "2025 年我的开发工具箱";
document.addEventListener('astro:page-load', () => {
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
const likeIcon = likeBtn?.querySelector('.like-icon');
const copyBtn = document.getElementById('share-copy-link-btn');
const qrBtn = document.getElementById('qr-btn');
const qrModal = document.getElementById('share-qr-modal');
const qrBackdrop = document.getElementById('share-qr-backdrop');
const qrCanvas = document.getElementById('qr-canvas');
if (!likeBtn || !likeCount) return;
// ===== 点赞 =====
const likes = JSON.parse(localStorage.getItem('blog_likes') || '{}');
const liked = JSON.parse(localStorage.getItem('blog_liked') || '[]');
const count = likes[slug] || 0;
const isLiked = liked.includes(slug);
likeCount.textContent = count;
if (isLiked) {
likeIcon.style.fill = 'var(--color-accent)';
likeIcon.style.stroke = 'var(--color-accent)';
likeBtn.classList.add('border-accent', 'dark:border-dark-accent');
}
likeBtn.addEventListener('click', () => {
const likedNow = JSON.parse(localStorage.getItem('blog_liked') || '[]');
const likesNow = JSON.parse(localStorage.getItem('blog_likes') || '{}');
const idx = likedNow.indexOf(slug);
if (idx >= 0) {
// 取消点赞
likedNow.splice(idx, 1);
likesNow[slug] = Math.max(0, (likesNow[slug] || 1) - 1);
likeIcon.style.fill = 'none';
likeIcon.style.stroke = 'currentColor';
likeBtn.classList.remove('border-accent', 'dark:border-dark-accent');
} else {
// 点赞
likedNow.push(slug);
likesNow[slug] = (likesNow[slug] || 0) + 1;
likeIcon.style.fill = 'var(--color-accent)';
likeIcon.style.stroke = 'var(--color-accent)';
likeBtn.classList.add('border-accent', 'dark:border-dark-accent');
// 墨花绽放动画
spawnBloom(likeBtn);
}
likeCount.textContent = likesNow[slug] || 0;
localStorage.setItem('blog_liked', JSON.stringify(likedNow));
localStorage.setItem('blog_likes', JSON.stringify(likesNow));
});
// ===== 墨花绽放 =====
function spawnBloom(anchor) {
const container = document.getElementById('bloom-container');
if (!container) return;
const rect = anchor.getBoundingClientRect();
const cx = rect.left + rect.width / 2;
const cy = rect.top + rect.height / 2;
for (let i = 0; i petal.remove(), 700);
}
}
// ===== 复制链接 =====
copyBtn?.addEventListener('click', async () => {
try {
await navigator.clipboard.writeText(currentUrl);
const span = copyBtn.querySelector('span');
span.textContent = '已复制';
setTimeout(() => { span.textContent = '复制链接'; }, 2000);
} catch {
// fallback
const ta = document.createElement('textarea');
ta.value = currentUrl;
document.body.appendChild(ta);
ta.select();
document.execCommand('copy');
document.body.removeChild(ta);
const span = copyBtn.querySelector('span');
span.textContent = '已复制';
setTimeout(() => { span.textContent = '复制链接'; }, 2000);
}
});
// ===== 二维码 =====
function drawQR(canvas, text) {
const ctx = canvas.getContext('2d');
const size = canvas.width;
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, size, size);
// 简易 QR 编码（版本1，容错L，编码URL）
// 使用黑白方块矩阵模拟 QR 码外观
const modules = 21;
const cellSize = size / (modules + 8); // 留白
const offset = cellSize * 4;
// 生成确定性图案（基
