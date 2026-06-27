---
title: "成长记录 #3：关于「半途而废」这件事"
description: "放弃过很多东西，但这次我想聊聊为什么有些放弃不全是坏事。"
date: 2026-05-26
category: "成长记录"
tags: [成长, 坚持, 自白]
---

# 成长记录 #3：关于「半途而废」这件事

成长记录
成长记录 #3：关于「半途而废」这件事
放弃过很多东西，但这次我想聊聊为什么有些放弃不全是坏事。
2026年5月26日 · 937 字 · 约 3 分钟阅读 · 0 次阅读
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
成长记录 3 / 12
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
我放弃过很多东西。
游戏做了一半不做了。前端学到一半停了。有段时间想学设计，买了课，看了两节就没打开过。想健身，办了卡，去了三次。
每次放弃的时候，我都告诉自己”以后再说”。但后来发现，“以后再说”基本等于”算了”。
放弃的时候在想什么
说实话，放弃的那一刻是很轻松的。
做游戏的时候，前两周特别兴奋，天天熬夜。第三周开始遇到bug，改了三天没改好，心态崩了。关掉电脑的那一刻，我觉得世界都安静了。
但那种轻松是假的。过几天空虚感就回来了，而且比之前更强 — 因为你又多了一件”没做成的事”。
为什么总是坚持不下来
我观察过自己，发现放弃通常有几个规律：
新鲜感消退的时候。 一开始什么都觉得有意思，一旦进入枯燥的部分 — 比如调bug、写重复的代码 — 就开始想找下一个”有意思的事”。
看不到反馈的时候。 做游戏两个月，没人玩过。写前端一个月，没人看过我的页面。人是需要反馈的动物，没有反馈就像在黑暗里走路，走着走着就不想走了。
比较的时候。 看到别人做了很酷的东西，再看看自己的，觉得”算了，我做不出来”。其实别人也是从零开始的，但这个道理在情绪上头的时候根本听不进去。
这次为什么没放弃
这个博客，说真的，有好几次我都想算了。
刚开始搭建的时候，遇到一堆配置问题，Astro 的文档有些地方看不懂，部署到 GitHub Pages 折腾了两天。以前的我肯定就”以后再说”了。
但这次不一样。这次我做了一件以前没做过的事 — 把目标说出来了。
我在关于页写了”这个博客是我的自留地”。我在成长记录 #1 写了”我想记录”。当你说出来的时候，放弃就变得没那么容易了。因为你要面对的不只是自己，还有那个”说好了要写”的自己。
还有一点：这次我没有追求完美。以前做游戏，总想做一个很厉害的东西。结果越想越厉害，越厉害越不敢动手。这次我就想：写点东西就行，好不好再说。
降低预期，反而坚持下来了。
放弃不全是坏事
我现在觉得，有些放弃其实是在帮你看清自己。
游戏不做之后，我发现自己可能没那么喜欢做游戏。前端学到一半停了，但后来又捡起来了 — 说明我是真的喜欢这个东西，只是当时时机不对。
放弃设计课，是因为我发现我只是觉得”会设计很酷”，并不是真的想做设计。
每一次放弃都在告诉我：什么是我真正在乎的，什么只是凑热闹。
现在怎么看”坚持”
我不再追求”永不放弃”了。那太假了，也不现实。
我现在追求的是：放弃之前，至少搞清楚自己为什么放弃。
是因为真的不感兴趣？还是因为遇到了瓶颈？前者可以放弃，后者再扛一扛。
如果你也经常半途而废，别太责怪自己。重要的不是从来没放弃过，而是放弃之后，你有没有弄清楚自己到底想要什么。
这个博客还在写。我也不知道能写多久。
但至少现在，我还没想放弃。
目录
成长 坚持 自白
又逢雨季
一个走非主流路线的大专生，在迷茫中摸索，在试错中成长。喜欢技术，喜欢记录，喜欢真实的东西。
GitHub
关于我
0
复制链接
Twitter
微信
扫码分享「成长记录 #3：关于「半途而废」这件事」
https://ekegukeku64-blip.github.io/blog/growth-003/
(function(){const slug = "growth-003";
const currentUrl = "https://ekegukeku64-blip.github.io/blog/growth-003/";
const title = "成长记录 #3：关于「半途而废」这件事";
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
const offset = c
