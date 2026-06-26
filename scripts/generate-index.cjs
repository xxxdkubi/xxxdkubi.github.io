// scripts/generate-index.cjs
// Generates /public/blog/index.json from content/blog/*.md

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'content', 'blog');
const outDir = path.join(__dirname, '..', 'public', 'blog');
const posts = [];

if (fs.existsSync(blogDir)) {
  for (const file of fs.readdirSync(blogDir)) {
    if (!file.endsWith('.md')) continue;
    const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const frontmatter = parseFrontmatter(content);
    const slug = file.replace('.md', '');
    posts.push({
      slug,
      title: frontmatter.title || slug,
      description: frontmatter.description || '',
      date: frontmatter.date || '',
      category: frontmatter.category || '',
      tags: frontmatter.tags || [],
    });
  }
}

posts.sort((a, b) => b.date.localeCompare(a.date));

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.json'), JSON.stringify(posts, null, 2));
console.log(`Generated index with ${posts.length} posts`);

function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.*)/);
    if (m) {
      let val = m[2].trim();
      if (val.startsWith('[') && val.endsWith(']')) {
        val = val.slice(1, -1).split(',').map(s => s.trim().replace(/['"]/g, ''));
      }
      fm[m[1]] = val;
    }
  }
  return fm;
}
