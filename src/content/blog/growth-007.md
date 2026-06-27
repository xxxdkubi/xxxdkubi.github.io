---
title: "成长记录 #7：凌晨三点的代码"
description: "熬夜写代码到底是勤奋还是自我感动？我想了很久。"
date: 2026-05-29
category: "成长记录"
tags: [成长, 效率, 反思]
---

# 成长记录 #7：凌晨三点的代码

成长记录
成长记录 #7：凌晨三点的代码
熬夜写代码到底是勤奋还是自我感动？我想了很久。
2026年5月29日 · 492 字 · 约 2 分钟阅读 · 0 次阅读
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
成长记录 7 / 12
#1 我为什么开始写博客
#2 AI 不会替你成长
#3 关于「半途而废」这件事
#4 一次社死的面试
#5 闲鱼上架第一天
#6 被朋友问住了
#7 凌晨三点的代码
#8 第一次收到反馈
#9 学不动的时候怎么办
#10 一个月了
#11 代码改了一行，心情好了一天
#12 技术人的周二
前天晚上，十一点打开电脑。
想的是”写一小时就睡”。
三点关的机。
为什么没停
不是因为赶 deadline。是因为觉得今天又没学到东西。
白天在玩手机，晚上突然有负罪感。那种感觉你懂吗——就像欠了债，觉得必须还上。于是打开电脑，开始折腾。
一开始还挺顺的。改了两个 bug，加了个功能。但十二点之后——脑子开始糊了。
变量名想了三分钟，最后写了个 temp1。同样的错误犯了第三次。一个很简单的 CSS 问题，就是想不通。
但我没停。因为觉得”来都来了，再写一会儿”。
这句话害了我很多次。
第二天
闹钟响了，头很疼。眯着眼打开昨晚的代码。
看了一眼——删了。
有一半是多余的。有些逻辑根本不对。那个 CSS 问题？早上看了一眼就知道怎么改了，五分钟的事。
昨晚熬了四个小时写的东西，不如早上清醒了五分钟写的。
为什么总是熬夜
我观察了一下自己。熬夜通常不是因为”事情太多做不完”，而是：
白天没效率。玩了一天，晚上补。本质上是在还债。
完美主义。觉得今天必须做出点什么，否则就是浪费了一天。
深夜的安静。凌晨两点确实没人打扰。但这份安静不能用来弥补白天的浪费。
现在
给自己定了个规矩：超过十一点半不写代码。
不是不想努力。是因为熬夜写的东西质量差，还会透支第二天的状态。
与其每天熬夜感动自己，不如白天集中精力写两小时。
你也经常熬夜写代码吗？
停下来想一秒：你现在写的这些，明天清醒了还会保留吗？
大概率不会。那就去睡觉吧。
目录
成长 效率 反思
又逢雨季
一个走非主流路线的大专生，在迷茫中摸索，在试错中成长。喜欢技术，喜欢记录，喜欢真实的东西。
GitHub
关于我
0
复制链接
Twitter
微信
扫码分享「成长记录 #7：凌晨三点的代码」
https://ekegukeku64-blip.github.io/blog/growth-007/
(function(){const slug = "growth-007";
const currentUrl = "https://ekegukeku64-blip.github.io/blog/growth-007/";
const title = "成长记录 #7：凌晨三点的代码";
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
// 生成确定性图案（基于文本哈希）
let hash = 0;
for (let i = 0; i = modules - 8) || (r >= modules - 8 && c {
qrModal.classList.remove('hidden');
if (qrCanvas) drawQR(qrCanvas, currentUrl);
});
qrBackdrop?.addEventListener('click', () => {
qrModal.classList.add('hidden');
});
});
})();
相关文章
AI 辅助编程实战：工具选择与使用技巧
2026 年 AI 编程工具横评与实战经验，从 Copilot 到 Claude Code，找到最适合你的 AI 编程搭档。
AI工具
调试的艺术：从新手到高手的进阶之路
系统化的调试方法论，让你不再对着报错信息发呆。
调试效率
2025 年我的开发工具箱
分享我日常使用的开发工具，从终端到编辑器，提升开发效率的实用选择。
工具效率
继续阅读
← 上一篇
成长记录 #8：第一次收到反馈
下一篇 →
GitHub 每日精选 2026-05-29
又逢 雨季
留言
登
