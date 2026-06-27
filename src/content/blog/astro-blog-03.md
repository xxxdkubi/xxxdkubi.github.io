---
title: "Astro 博客搭建 #3：样式系统与组件设计"
description: "用 Tailwind CSS 打造个人博客的视觉风格 — 设计系统、主题切换、组件拆分实战。"
date: 2026-05-26
category: "技术"
tags: [astro, css, 前端, 设计]
---

# Astro 博客搭建 #3：样式系统与组件设计

技术
Astro 博客搭建 #3：样式系统与组件设计
用 Tailwind CSS 打造个人博客的视觉风格 — 设计系统、主题切换、组件拆分实战。
2026年5月26日 · 531 字 · 约 2 分钟阅读 · 0 次阅读
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
Astro 博客搭建 3 / 3
#1 为什么选 Astro
#2 项目结构与内容配置
#3 样式系统与组件设计
框架选好了，项目搭好了，现在让它好看起来。
为什么用 Tailwind
写 CSS 有很多种方式。我选 Tailwind 的原因很简单：不用起名字。
给 class 起名是前端最痛苦的事情之一。card-wrapper、card-container、card-box…… 用 Tailwind 直接写 class="rounded-xl border p-6" 就完事了。
而且 Tailwind 的 utility class 是原子化的，不会出现样式覆盖的噩梦。
设计系统
先定义设计 token，不要到处写魔法值：
/* src/styles/tokens.css */
:root {
/* 颜色 */
--color-surface: oklch(97% 0.01 80);
--color-text: oklch(20% 0.02 260);
--color-text-muted: oklch(45% 0.02 260);
--color-accent: oklch(55% 0.2 25);
--color-border: oklch(85% 0.01 80);
/* 暗色主题 */
--color-dark-surface: oklch(15% 0.01 260);
--color-dark-text: oklch(90% 0.01 80);
--color-dark-accent: oklch(65% 0.2 25);
/* 排版 */
--text-base: clamp(1rem, 0.92rem + 0.4vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.6vw, 1.35rem);
--text-2xl: clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);
--text-4xl: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);
/* 间距 */
--space-section: clamp(3rem, 2rem + 5vw, 8rem);
/* 动画 */
--duration-normal: 300ms;
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
在 tailwind.config.mjs 里引用这些 token：
export default {
darkMode: 'class',
theme: {
extend: {
colors: {
surface: 'var(--color-surface)',
text: 'var(--color-text)',
accent: 'var(--color-accent)',
},
},
},
};
主题切换
用 CSS 变量 + class="dark" 实现：
// 切换主题
function toggleTheme() {
const isDark = document.documentElement.classList.toggle('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
// 初始化（放在 里，避免闪烁）
(function() {
const theme = localStorage.getItem('theme') ?? 'dark';
document.documentElement.classList.toggle('dark', theme === 'dark');
})();
关键：初始化脚本要放在 里，用 避免 Astro 的模块处理。这样页面加载时不会闪一下白色再变暗。
组件拆分
Astro 组件是 .astro 文件，分两部分：--- 里是逻辑（JS/TS），下面是模板（HTML）。
我把博客拆成这些组件：
components/
├── Header.astro # 顶部导航
├── Footer.astro # 页脚
├── PostCard.astro # 文章卡片（列表页用）
├── TagCloud.astro # 标签云
├── Comment.astro # 评论组件
├── BackToTop.astro # 回到顶部按钮
├── ReadingProgress.astro # 阅读进度条
└── TOC.astro # 目录导航
原则：一个组件只做一件事。超过 100 行就该考虑拆分。
PostCard 示例
---
interface Props {
title: string;
description: string;
pubDate: Date;
slug: string;
tags: string[];
}
const { title, description, pubDate, slug, tags } = Astro.props;
---
 
 {pubDate.toLocaleDateString('zh-CN')} 

{title}

{description}

{tags.map(tag => {tag} )}

 
文章排版
Tailwind 有个 @tailwindcss/typography 插件，用 prose class 给 Markdown 内容自动排版：
npm install @tailwindcss/typography

 

然后可以覆盖默认样式：
.prose h2 {
@apply mt-12 mb-4 text-2xl font-bold;
}
.prose code {
@apply px-1.5 py-0.5 rounded bg-accent/10 text-accent text-sm;
}
下一篇会讲进阶功能：搜索、评论、RSS、SEO 优化。
这是「Astro 博客搭建系列」的第三篇。
目录
Astro CSS 前端 设计
又逢雨季
一个走非主流路线的大专生，在迷茫中摸索，在试错中成长。喜欢技术，喜欢记录，喜欢真实的东西。
GitHub
关于我
0
复制链接
Twitter
微信
扫码分享「Astro 博客搭建 #3：样式系统与组件设计」
https://ekegukeku64-blip.github.io/blog/astro-blog-03/
(function(){const slug = "astro-blog-03";
const currentUrl = "https://ekegukeku64-blip.github.io/blog/astro-blog-03/";
const title = "Astro 博客搭建 #3：样式系统与组件设计";
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
localStorag
