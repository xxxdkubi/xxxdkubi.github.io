---
title: "2025 年，为什么你应该学 Rust"
description: "从所有权到 WebAssembly，聊聊 Rust 的核心理念、应用场景和入门路径。"
date: 2026-05-21
category: "技术"
tags: [rust, 编程语言, 系统编程, webassembly]
---

# 2025 年，为什么你应该学 Rust

技术
2025 年，为什么你应该学 Rust
从所有权到 WebAssembly，聊聊 Rust 的核心理念、应用场景和入门路径。
2026年5月21日 · 698 字 · 约 3 分钟阅读 · 0 次阅读
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
Rust 连续多年蝉联 Stack Overflow “最受喜爱语言”榜首。微软、谷歌、亚马逊、Linux 内核都在用。它到底有什么魔力？
核心卖点：编译期内存安全
大多数语言的内存问题（空指针、数据竞争、悬垂引用）只能在运行时发现。Rust 把这些检查提前到编译期 — 代码能编译通过，就意味着没有这类 bug。
没有垃圾回收器，性能媲美 C/C++，却不需要手动管理内存。这是 Rust 最本质的吸引力。
三个核心概念
所有权（Ownership）
每个值只有一个所有者。赋值即”移动”，原变量失效。
let s1 = String::from("hello");
let s2 = s1; // s1 的所有权转移到 s2
// println!("{}", s1); // 编译错误！s1 已失效
借用（Borrowing）
用 & 引用而不转移所有权。不可变引用可多个共存，可变引用同一时间只能有一个。
fn calculate_length(s: &String) -> usize {
s.len() // 借用，不获取所有权
}
let s = String::from("hello");
let len = calculate_length(&s); // s 仍然可用
生命周期（Lifetimes）
编译器确保引用不会比数据活得更久。大多数情况自动推断，少数场景需手动标注 'a。
初学者建议：先跳过高级生命周期，把所有权和借用的基本规则吃透，能解决 90% 的编译错误。
主流应用场景
命令行工具
ripgrep、fd、bat、eza — 这些爆款工具都是 Rust 写的。单二进制分发，性能碾压 Python/Node 同类。
# 比 grep 快 10 倍的搜索
rg "pattern" --type rust
# 比 ls 好看的文件列表
eza --icons --tree
WebAssembly
Rust 是 Wasm 编译的首选语言，适用于边缘计算（Cloudflare Workers）和浏览器高性能场景。
后端服务
Axum + Tokio 异步生态成熟，Discord、AWS、Dropbox 已在生产环境使用。
系统编程
Linux 内核已接纳 Rust 模块，嵌入式和游戏引擎（Bevy）也在快速增长。
推荐学习路径
入门：The Rust Book + Rustlings 练习题，边读边练
进阶：Zero To Production In Rust 用实战项目学后端开发
社区：r/rust、This Week in Rust 周刊
视频：YouTube 搜 “Let’s Get Rusty” 入门系列
实用建议
不要试图一次学完所有概念。先用 Rust 写一个 CLI 小工具（比如文件搜索、Markdown 转换器），在实战中理解所有权和错误处理。
遇到编译报错不要怕 — Rust 编译器的错误信息是所有语言中最友好的，认真读报错本身就是在学习。
# 初始化一个新项目
cargo new my-tool
cd my-tool
cargo run
最好的学习方式是造轮子。用 Rust 重写一个你用其他语言写过的小项目，收获最大。
目录
Rust 编程语言 系统编程 WebAssembly
又逢雨季
一个走非主流路线的大专生，在迷茫中摸索，在试错中成长。喜欢技术，喜欢记录，喜欢真实的东西。
GitHub
关于我
0
复制链接
Twitter
微信
扫码分享「2025 年，为什么你应该学 Rust」
https://ekegukeku64-blip.github.io/blog/rust-guide-2025/
(function(){const slug = "rust-guide-2025";
const currentUrl = "https://ekegukeku64-blip.github.io/blog/rust-guide-2025/";
const title = "2025 年，为什么你应该学 Rust";
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
// 使用黑白方块矩
