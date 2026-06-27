---
title: "成长记录 #8：第一次收到反馈"
description: "有人在闲鱼上问我这个真的能用吗，我突然觉得事情在起变化。"
date: 2026-05-29
category: "成长记录"
tags: [成长, 闲鱼, 反馈]
---

# 成长记录 #8：第一次收到反馈

成长记录
成长记录 #8：第一次收到反馈
有人在闲鱼上问我"这个真的能用吗"，我突然觉得事情在起变化。
2026年5月29日 · 422 字 · 约 2 分钟阅读 · 0 次阅读
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
成长记录 8 / 12
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
上架闲鱼五天了。
今天有人认真问了一句：“这个老照片修复，真的能用吗？“
那一刻
上架之后我一直有种不真实感。就像你把一封信投进邮筒——然后就等着。不知道有没有人会拆开看。
今天有人拆开了。
而且他不是随便问问。他有一张爷爷的照片，黑白的，五六十年代那种，人脸模糊得几乎看不清。
他说：“这是我爷爷年轻时候的，能修吗？”
我看着那张照片，突然觉得这件事变得不一样了。不是在”测试服务”，是在帮一个人留住一点什么。
修
我用 AI 处理了大概二十分钟。试了好几个参数，调了三次。
效果不是完美的。有些地方还是模糊。但比原图好太多了——至少能看清那张脸了。
把对比图发给他。
他回了一句：“可以，比我想象中好。”
付了八块钱。
八块钱
我盯着那八块钱的转账记录看了很久。
不是因为钱多。是因为有人用我做的东西解决了问题。
这种感觉和写代码不一样。代码跑通了你会开心，但那只是”我做到了”。而有人因为你修好了一张照片，能看清爷爷年轻时的样子——那是另一种东西。
我说不清楚那是什么。但我知道我想继续做。
那天晚上我又接了两单。一张毕业照，一张全家福。
修完之后客户说”谢谢”。
我坐在电脑前，突然觉得——我好像在做一件挺有意思的事。
目录
成长 闲鱼 反馈
又逢雨季
一个走非主流路线的大专生，在迷茫中摸索，在试错中成长。喜欢技术，喜欢记录，喜欢真实的东西。
GitHub
关于我
0
复制链接
Twitter
微信
扫码分享「成长记录 #8：第一次收到反馈」
https://ekegukeku64-blip.github.io/blog/growth-008/
(function(){const slug = "growth-008";
const currentUrl = "https://ekegukeku64-blip.github.io/blog/growth-008/";
const title = "成长记录 #8：第一次收到反馈";
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
成长记录 #5：闲鱼上架第一天
在闲鱼上卖 AI 服务，从零开始，一天下来学到的东西比一个月都多。
成长闲鱼
成长记录 #1：我为什么开始写博客
一个大专生的自白 — 迷茫、后悔、和一点点不甘心。
成长自白
成长记录 #2：AI 不会替你成长
用 AI 写代码半年的体感 — 它是工具，不是拐杖。
成长AI
继续阅读
← 上一篇
成长记录 #5：闲鱼上架第一天
下一篇 →
成长记录 #7：凌晨三点的代码
又逢 雨季
留言
登录后即可留言
Google 登录
GitHub 登录
评论会实时显示在页面上
发送
加载中...
