---
title: "Astro 博客搭建 #1：为什么选 Astro"
description: "对比 Hexo、Hugo、Next.js，为什么我最终选了 Astro 搭建个人博客。选型思路和踩坑记录。"
date: 2026-05-26
category: "技术"
tags: [astro, 博客, 前端, 教程]
---

# Astro 博客搭建 #1：为什么选 Astro

技术
Astro 博客搭建 #1：为什么选 Astro
对比 Hexo、Hugo、Next.js，为什么我最终选了 Astro 搭建个人博客。选型思路和踩坑记录。
2026年5月26日 · 806 字 · 约 3 分钟阅读 · 0 次阅读
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
Astro 博客搭建 1 / 3
#1 为什么选 Astro
#2 项目结构与内容配置
#3 样式系统与组件设计
想搭博客的人很多，但第一步就卡在选框架上。
我也是。试了好几个，最后选了 Astro。这篇记录我的选型过程和理由。
我试过的方案
Hexo
最早用的是 Hexo。中文社区大，主题多，部署简单。
但用了一阵子就受不了了。主题想改点东西，得去翻 EJS/Pug 模板，文档质量参差不齐。而且生成速度越来越慢，文章多了以后每次构建都要等很久。
Hugo
Hugo 快，真的快。几百篇文章秒级构建。
但 Go 的模板语法太反人类了。我写了两天模板，心态崩了。而且 Hugo 的主题生态虽然丰富，但大部分主题更新不活跃，想自定义也挺痛苦。
Next.js
Next.js 能力最强，想做什么都行。
但杀鸡焉用牛刀。博客是纯静态内容，用 Next.js 意味着要处理 SSR、ISR、Server Components…… 对于一个博客来说太重了。而且打包出来的 JS 体积不小。
为什么选 Astro
Astro 的核心理念正好戳中博客场景：
零 JavaScript 默认。文章页不需要 JS，Astro 输出的就是纯 HTML + CSS。只有你主动声明的交互组件才会加载 JS。
内容层（Content Layer）。Markdown 文件就是数据源，类型安全，构建时校验。不用折腾数据库或 CMS。
岛屿架构。需要交互的部分（评论、搜索）可以按需加载，不影响其他页面的静态性能。
构建速度快。目前十几篇文章，构建只要几秒。比 Hexo 快多了。
实际体验
搭下来的感受：上手简单，想做好看需要花功夫。
Astro 本身不提供主题系统（不像 Hexo 有一键安装的主题）。你得自己写布局、写样式。好处是完全可控，坏处是前端基础不好的话会比较吃力。
我用 Tailwind CSS 来写样式，配合一些自己写的组件，大概花了一周搭出现在的样子。
踩过的坑
base path 配置。部署到 GitHub Pages 的子路径（/blog），所有链接和资源路径都要注意 import.meta.env.BASE_URL。一开始忘了，样式和图片全挂了。
trailing slash。GitHub Pages 对 /about 和 /about/ 的处理不一样。统一设成 trailingSlash: 'always' 可以避免很多 404。
图片优化。Astro 的 组件很好用，但放在 public/ 目录的图片不会被处理。需要用 src/assets/ 目录才能享受自动优化。
View Transitions。Astro 内置的页面过渡动画很方便，但和某些第三方库（比如代码高亮）有冲突。需要在 astro:after-swap 事件里重新初始化。
适合谁
如果你想要一个：
加载飞快的静态博客
用 Markdown 写文章
能自定义但不想太复杂
部署在 GitHub Pages 或 Vercel
那 Astro 是个很好的选择。
如果你完全不会前端，只想找个主题一键部署，Hexo 或 Hugo 可能更适合。
下一篇会讲具体怎么从零搭建：项目结构、内容配置、部署流程。
这是「Astro 博客搭建系列」的第一篇。系列文章会记录从选型到上线的完整过程。
目录
Astro 博客 前端 教程
又逢雨季
一个走非主流路线的大专生，在迷茫中摸索，在试错中成长。喜欢技术，喜欢记录，喜欢真实的东西。
GitHub
关于我
0
复制链接
Twitter
微信
扫码分享「Astro 博客搭建 #1：为什么选 Astro」
https://ekegukeku64-blip.github.io/blog/astro-blog-01/
(function(){const slug = "astro-blog-01";
const currentUrl = "https://ekegukeku64-blip.github.io/blog/astro-blog-01/";
const title = "Astro 博客搭建 #1：为什么选 Astro";
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
ctx.fillRect(0, 0, size, s
