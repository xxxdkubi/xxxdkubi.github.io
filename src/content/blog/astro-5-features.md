---
title: "Astro 5 到 6：内容层、服务端岛屿与更多"
description: "梳理 Astro 5 到 6 的核心更新，包括 Content Layer、Server Islands、SVG 组件等重要特性。"
date: 2026-05-23
category: "技术"
tags: [astro, 前端, 框架, 性能]
---

# Astro 5 到 6：内容层、服务端岛屿与更多

技术
Astro 5 到 6：内容层、服务端岛屿与更多
梳理 Astro 5 到 6 的核心更新，包括 Content Layer、Server Islands、SVG 组件等重要特性。
2026年5月23日 · 664 字 · 约 3 分钟阅读 · 0 次阅读
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
Astro 从 5.0 到 6.x 带来了大量更新。这篇文章梳理最值得关注的核心特性。
Content Layer 内容层
这是 Astro 5 最重要的更新。Content Layer 提供了统一的、类型安全的内容管理 API，让你从任意数据源加载内容。
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const posts = defineCollection({
loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
schema: z.object({
title: z.string(),
pubDate: z.date(),
}),
});
以前只能用 type: 'content' 加载本地 Markdown，现在可以通过 loader 接入 REST API、CMS、数据库等任何数据源。性能方面：Markdown 构建速度提升最高 5 倍，内存占用降低 25-50%。
Server Islands 服务端岛屿
将岛屿架构延伸到服务端。同一页面中可以混合静态缓存和动态渲染的内容。
---
// 用户头像 — 动态部分
const user = await getUser(Astro.cookies.get('userId'));
---
 
 

欢迎回来

 
 

加载中...

 
 
 
 
典型场景：用户头像、购物车、个性化推荐。每个岛屿独立加载，支持缓存头控制，props 自动加密保障隐私。
简化预渲染
Astro 5 取消了 hybrid 输出模式，将其合并到默认的 static 模式中。只需添加适配器并设置 prerender = false：
// astro.config.mjs
import node from '@astrojs/node';
export default defineConfig({
output: 'static', // 默认模式
adapter: node(),
});
---
// src/pages/api/data.ts
export const prerender = false; // 这个页面按需渲染
---
astro:env 类型安全环境变量
新增 astro:env 模块，区分客户端/服务端变量，启动时自动校验：
import { DATABASE_URL, PUBLIC_API_KEY } from 'astro:env';
// DATABASE_URL — 服务端密钥，启动时校验是否存在
// PUBLIC_API_KEY — 客户端可用，自动注入到前端
支持 string/number/boolean/enum 类型，启动时校验必填项，避免部署后才发现缺少环境变量。
SVG 组件
直接导入 .png 文件作为组件使用：
---
import Logo from '../assets/logo.png';
---
 
SVG 变成真正的 Astro 组件，可以传 props、控制属性，不再需要手动复制 SVG 代码。
其他亮点
响应式图片：自动生成 srcset 和 sizes，适配多屏幕
图片裁剪：支持 fit 和 position 属性
CSP 支持：原生内容安全策略头配置
Vite 6：搭载全新 Environment API
高级路由（6.x 实验性）：通过 Hono 中间件自定义请求管线
升级建议
如果你还在用 Astro 4.x：
先升级到 5.x，迁移 Content Layer（改动最大）
检查 type: 'content' 是否改为 glob() loader
更新 src/content/config.ts 为 src/content.config.ts（新路径）
测试构建和运行，确认无误后再考虑 6.x
Astro 的迭代速度很快，但核心理念没变：内容优先，零 JavaScript 默认。这是它最大的竞争力。
目录
Astro 前端 框架 性能
又逢雨季
一个走非主流路线的大专生，在迷茫中摸索，在试错中成长。喜欢技术，喜欢记录，喜欢真实的东西。
GitHub
关于我
0
复制链接
Twitter
微信
扫码分享「Astro 5 到 6：内容层、服务端岛屿与更多」
https://ekegukeku64-blip.github.io/blog/astro-5-features/
(function(){const slug = "astro-5-features";
const currentUrl = "https://ekegukeku64-blip.github.io/blog/astro-5-features/";
const title = "Astro 5 到 6：内容层、服务端岛屿与更多";
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
ta.value = currentUrl
