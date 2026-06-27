---
title: "成长记录 #9：学不动的时候怎么办"
description: "有段时间什么都不想学，什么都不想做。后来我发现这不是懒，是另一种信号。"
date: 2026-05-30
category: "成长记录"
tags: [成长, 倦怠, 心理健康]
---

# 成长记录 #9：学不动的时候怎么办

成长记录
成长记录 #9：学不动的时候怎么办
有段时间什么都不想学，什么都不想做。后来我发现这不是懒，是另一种信号。
2026年5月30日 · 440 字 · 约 2 分钟阅读 · 0 次阅读
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
成长记录 9 / 12
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
上周有三天，我什么都不想干。
打开电脑——关上。打开教程——关上。连博客都不想看一眼。
那三天
刷手机。看短视频。
刷完之后更空虚了。然后继续刷。像一个死循环。
以前遇到这种情况我会骂自己：“你怎么这么懒？别人都在学，你在干嘛？”
但这次我没有。
因为我发现这不是”懒”。
倦怠
我回忆了一下之前几周的状态——每天都在学东西、写代码、上架闲鱼、更新博客。节奏很快，几乎没休息。
身体没喊累，但精神喊了。
就像你跑步。不是腿跑不动了，是心不想跑了。你站在跑道上，看着前方，什么都不想做。不是不能跑，是不想跑。
怎么回来的
第四天早上，什么都没强迫自己做。出去走了走，吃了碗牛肉面，下午睡了一觉。
醒来的时候，阳光从窗帘缝里照进来，打在墙上。
我打开电脑。不是因为”应该学了”，是因为突然想看看博客的访问数据。
就那一下。我知道状态回来了。
学到的
休息不是偷懒。机器都需要停机维护，人也是。
倦怠是有信号的——当你对平时喜欢的事情也提不起兴趣的时候，不是你变了，是你需要停下来了。
不要在低谷期做决定。我差点在那三天里决定”算了不搞了”。幸好没在那个时候做决定。
如果你也在经历类似的阶段，别急。给自己放一两天假，什么都不用想。
出去走走。吃点好的。睡一觉。
状态会回来的。它一直都会。
目录
成长 倦怠 心理健康
又逢雨季
一个走非主流路线的大专生，在迷茫中摸索，在试错中成长。喜欢技术，喜欢记录，喜欢真实的东西。
GitHub
关于我
0
复制链接
Twitter
微信
扫码分享「成长记录 #9：学不动的时候怎么办」
https://ekegukeku64-blip.github.io/blog/growth-009/
(function(){const slug = "growth-009";
const currentUrl = "https://ekegukeku64-blip.github.io/blog/growth-009/";
const title = "成长记录 #9：学不动的时候怎么办";
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
用 AI 写代码半年的体感 — 它是工具，不是拐杖。
成长AI
成长记录 #3：关于「半途而废」这件事
放弃过很多东西，但这次我想聊聊为什么有些放弃不全是坏事。
成长坚持
继续阅读
← 上一篇
成长记录 #10：一个月了
下一篇 →
GitHub 每日精选 2026-05-30
又逢 雨季
留言
登录后即可留言
Google 登录
GitHub 登录
评论会实时显示在页面上
发送
加载中...
