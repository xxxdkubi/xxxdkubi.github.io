---
title: "Astro 博客搭建 #2：项目结构与内容配置"
description: "手把手搭建 Astro 博客 — 目录结构、内容集合、Markdown 配置、路由规则。"
date: 2026-05-26
category: "技术"
tags: [astro, 博客, 前端, 教程]
---

# Astro 博客搭建 #2：项目结构与内容配置

技术
Astro 博客搭建 #2：项目结构与内容配置
手把手搭建 Astro 博客 — 目录结构、内容集合、Markdown 配置、路由规则。
2026年5月26日 · 594 字 · 约 3 分钟阅读 · 0 次阅读
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
Astro 博客搭建 2 / 3
#1 为什么选 Astro
#2 项目结构与内容配置
#3 样式系统与组件设计
上一篇聊了为什么选 Astro。这篇开始动手。
创建项目
npm create astro@latest my-blog
cd my-blog
npm install
选模板的时候选 “Blog”，它会给你一个基础的博客结构。但我建议从空项目开始，这样每一块你都清楚。
目录结构
我的博客最终长这样：
blog/
├── src/
│ ├── content/
│ │ └── posts/ # Markdown 文章
│ ├── layouts/
│ │ ├── BaseLayout.astro # 全局布局
│ │ └── PostLayout.astro # 文章布局
│ ├── components/ # 组件
│ ├── pages/ # 路由页面
│ ├── styles/ # 全局样式
│ └── utils/ # 工具函数
├── public/ # 静态资源（不经过构建处理）
│ ├── hero/ # 文章封面图
│ └── favicon.png
├── astro.config.mjs # 配置文件
└── package.json
重点说几个：
src/content/posts/
这是放文章的地方。每篇文章是一个 Markdown 文件，前面有 frontmatter：
---
title: "文章标题"
description: "文章描述"
pubDate: 2026-05-26
category: "技术"
tags: ["Astro", "教程"]
---
正文内容...
src/content.config.ts
定义文章的类型约束。这样写错字段名时构建会报错，不会静默失败：
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const posts = defineCollection({
loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
schema: z.object({
title: z.string(),
description: z.string(),
pubDate: z.coerce.date(),
category: z.string().default("随笔"),
tags: z.array(z.string()).default([]),
heroImage: z.string().optional(),
featured: z.boolean().default(false),
}),
});
export const collections = { posts };
src/pages/blog/[...slug].astro
路由文件，把 content 里的文章映射到 URL：
---
import { getCollection } from 'astro:content';
import PostLayout from '../../layouts/PostLayout.astro';
export async function getStaticPaths() {
const posts = await getCollection('posts');
return posts.map(post => ({
params: { slug: post.id },
props: { post },
}));
}
const { post } = Astro.props;
const { Content } = await post.render();
---
 
 
 
关键配置
astro.config.mjs 里我踩过坑的几个配置：
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
site: 'https://ekegukeku64-blip.github.io',
base: '/blog', // 子路径部署
trailingSlash: 'always', // 统一尾部斜杠
integrations: [
sitemap(),
mdx(),
tailwind(),
],
markdown: {
shikiConfig: {
theme: 'one-dark-pro', // 代码高亮主题
},
},
});
site：必须填，用于生成 sitemap 和 canonical URL
base：GitHub Pages 子路径部署时必须
trailingSlash：设成 'always' 避免 404
部署到 GitHub Pages
用 GitHub Actions 自动部署。在 .github/workflows/deploy.yml 里配置：
name: Deploy
on:
push:
branches: [main]
permissions:
contents: read
pages: write
id-token: write
jobs:
build:
runs-on: ubuntu-latest
steps:
- uses: actions/checkout@v4
- uses: actions/setup-node@v4
with:
node-version: 20
- run: npm ci
- run: npm run build
- uses: actions/upload-pages-artifact@v3
with:
path: dist
deploy:
needs: build
runs-on: ubuntu-latest
environment:
name: github-pages
url: ${{ steps.deployment.outputs.page_url }}
steps:
- id: deployment
uses: actions/deploy-pages@v4
在仓库 Settings → Pages 里选 “GitHub Actions” 作为 Source 就行。
下一篇会讲怎么让博客好看起来：布局设计、样式系统、组件拆分。
这是「Astro 博客搭建系列」的第二篇。
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
扫码分享「Astro 博客搭建 #2：项目结构与内容配置」
https://ekegukeku64-blip.github.io/blog/astro-blog-02/
(function(){const slug = "astro-blog-02";
const currentUrl = "https://ekegukeku64-blip.github.io/blog/astro-blog-02/";
const title = "Astro 博客搭建 #2：项目结构与内容配置";
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

