---
title: "成长记录 #10：一个月了"
description: "博客上线一个月。没火，没赚到大钱，但我收获了一些更值钱的东西。"
date: 2026-05-30
category: "成长记录"
tags: [成长, 复盘, 一个月]
---

# 成长记录 #10：一个月了

成长记录
成长记录 #10：一个月了
博客上线一个月。没火，没赚到大钱，但我收获了一些更值钱的东西。
2026年5月30日 · 650 字 · 约 2 分钟阅读 · 0 次阅读
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
成长记录 10 / 12
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
今天是博客上线整整一个月。
打开后台看了看。访问量不多，文章也不多，闲鱼也没赚到什么钱。
但我想聊聊这一个月真正收获了什么。
做事情的感觉
以前我是一个”想很多、做很少”的人。有很多想法，但大部分都停在脑子里。想着想着就觉得太难了，然后就不做了。
这一个月，我写了十篇成长记录，搭了博客，上了架闲鱼，提交了搜索引擎收录，修了 bug，部署了自动化。
每一件都不是什么大事。但加在一起——我发现自己变了。
从一个”想做”的人，变成了一个”在做”的人。
这种变化很小。但很重要。
不确定性
以前做一件事，总想知道”结果会怎样”。如果不确定，就不敢开始。
现在我知道了：大部分事情在做的时候都不知道结果。你只能一边做一边看。
上架闲鱼五天没出单。第六天突然有人买了一张老照片修复。修完之后他说”比我想象中好”。
你永远不知道哪一天会有结果。但如果你不开始，那一天永远不会来。
更真实的自己
写成长记录的过程，其实是在跟自己对话。
有时候写着写着，发现自己以为自己很努力，其实大部分时间在摸鱼。以为自己很坚定，其实经常想放弃。以为自己很独立，其实很在意别人的看法。
这些发现不舒服。但我觉得诚实面对自己，比任何技术进步都重要。
没做到的
技术基础还是不够扎实。闲鱼销量一般，还在摸索。博客内容还不够多。有时候还是会偷懒、熬夜、emo。
但没关系。这些不是”失败”，是”还没到”。
下个月
补 JavaScript 基础。闲鱼继续优化。博客保持每周至少一篇。少熬夜，多运动。
不是什么宏伟的目标。但够具体，够我忙的了。
一个月前我说”也许以后回头看，会觉得现在写的很幼稚”。
现在回头看——确实挺幼稚的。
但我不后悔写下来。因为这些文字记录了我真实的样子。以后再看，不管变得多好或多差，至少我知道：我是从这里走出来的。
谢谢还在看这些文字的你。
不管你是在摸索自己的路，还是只是路过——都祝你一切顺利。
目录
成长 复盘 一个月
又逢雨季
一个走非主流路线的大专生，在迷茫中摸索，在试错中成长。喜欢技术，喜欢记录，喜欢真实的东西。
GitHub
关于我
0
复制链接
Twitter
微信
扫码分享「成长记录 #10：一个月了」
https://ekegukeku64-blip.github.io/blog/growth-010/
(function(){const slug = "growth-010";
const currentUrl = "https://ekegukeku64-blip.github.io/blog/growth-010/";
const title = "成长记录 #10：一个月了";
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
成长记录 #1：我为什么开始写博客
一个大专生的自白 — 迷茫、后悔、和一点点不甘心。
成长自白
成长记录 #2：AI 不会替你成长
用 A
