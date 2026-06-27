import json, os, re, html as html_mod

posts = json.load(open('/tmp/scraped/posts.json'))
site_meta = json.load(open('/tmp/scraped/site-meta.json'))

os.makedirs('src/content/blog', exist_ok=True)

def clean_html(text):
    if not text: return ''
    text = html_mod.unescape(text)
    text = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', text, flags=re.DOTALL)
    text = re.sub(r'<br\s*/?>', '\n', text)
    text = re.sub(r'</?(div|p|h[1-6]|li|tr|section|article|header|footer|nav|main|aside)[^>]*>', '\n', text)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()

count = 0
for post in posts:
    slug = post.get('slug', '')
    title = post.get('title', 'Untitled').replace('"', '').replace('\n', ' ')
    date = post.get('date', '')
    category = post.get('category', '')
    tags = post.get('tags', [])
    desc = (post.get('description') or '').replace('"', '')
    content = post.get('content_text', '')
    
    if not slug or not title:
        continue
    
    content = clean_html(content)
    tag_lines = '\n  - '.join([''] + tags) if tags else ''
    
    md = f'---\ntitle: "{title}"\ndescription: "{desc[:200]}"\ndate: {date}\ncategory: "{category or "未分类"}"\ntags: [{tag_lines}\n]\n---\n\n# {title}\n\n{content[:8000]}\n'
    
    fname = os.path.join('src/content/blog', f'{slug}.md')
    with open(fname, 'w') as f:
        f.write(md)
    count += 1

print(f'Generated {count} articles')

# Update site config
with open('src/utils/siteConfig.ts', 'r') as f:
    txt = f.read()

new_title = site_meta.get('title', '墨迹')
new_desc = site_meta.get('bio') or site_meta.get('description', '')
new_bio = new_desc

txt = txt.replace("title: '盘腿修仙'", f"title: '{new_title}'")
txt = txt.replace("subtitle: '修行·技术·生活'", f"subtitle: '{site_meta.get('subtitle','')}'")
old_desc_str = "description: '一个在技术的海洋中修炼身心的小站。分享技术心得、开发经验和生活感悟。'"
txt = txt.replace(old_desc_str, f"description: '{new_desc[:100]}'")
txt = txt.replace("author: 'xxxdkubi'", "author: '又逢雨季'")
txt = txt.replace("bio: '以代码为经，以思想为纬，编织属于自己的修行之路。'", f"bio: '{new_bio[:100]}'")

with open('src/utils/siteConfig.ts', 'w') as f:
    f.write(txt)
print('Site config updated')
