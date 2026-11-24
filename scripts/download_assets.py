import os
import json
import urllib.request
import urllib.parse

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

os.makedirs('public/assets/fonts', exist_ok=True)
os.makedirs('public/assets/videos', exist_ok=True)
os.makedirs('public/assets/images', exist_ok=True)
os.makedirs('public/assets/posters', exist_ok=True)

FONTS = [
    ('oranienbaum-regular.woff2', 'https://cdn.prod.website-files.com/6aa3d0584b139441c99e6df5/6adb8447621eeed9347f74f4_oranienbaum-v16-latin-regular.woff2'),
    ('bellefair-regular.woff2', 'https://cdn.prod.website-files.com/6aa3d0584b139441c99e6df5/6aec0e526a2dae34abd3f52d_bellefair-v15-latin-regular.woff2'),
    ('manrope-400.woff2', 'https://cdn.prod.website-files.com/6aa3d0584b139441c99e6df5/6adb848df4f1fe03ed2cfb04_manrope-v20-latin-regular.woff2'),
    ('manrope-500.woff2', 'https://cdn.prod.website-files.com/6aa3d0584b139441c99e6df5/6adb848d99d9a751f731beff_manrope-v20-latin-500.woff2'),
    ('manrope-600.woff2', 'https://cdn.prod.website-files.com/6aa3d0584b139441c99e6df5/6adb848df4f1fe03ed2cfb00_manrope-v20-latin-600.woff2'),
    ('manrope-700.woff2', 'https://cdn.prod.website-files.com/6aa3d0584b139441c99e6df5/6adb848dd88314661b231664_manrope-v20-latin-700.woff2'),
]

VIDEOS = [
    ('villa-hero.mp4', 'https://cdn.prod.website-files.com/6aa3d0584b139441c99e6df5%2F6ad9aafdc75db4aa20f41b20_Cinematic%20Video_mp4.mp4'),
    ('villa-scroll-showcase.mp4', 'https://cdn.prod.website-files.com/6aa3d0584b139441c99e6df5%2F6ae3171ccd60ec7b0e0135e6_Coll%20Wavebreak%20People_mp4.mp4'),
    ('villa-tour.mp4', 'https://cdn.prod.website-files.com/6aa3d0584b139441c99e6df5%2F6adb0430422b06155eb1d2d9_People%20Diverse%20Couple_mp4.mp4'),
]

POSTERS = [
    ('hero-poster.jpg', 'https://cdn.prod.website-files.com/6aa3d0584b139441c99e6df5%2F6ad9aafdc75db4aa20f41b20_Cinematic%20Video_poster.0000000.jpg'),
    ('showcase-poster.jpg', 'https://cdn.prod.website-files.com/6aa3d0584b139441c99e6df5%2F6ae3171ccd60ec7b0e0135e6_Coll%20Wavebreak%20People_poster.0000000.jpg'),
    ('tour-poster.jpg', 'https://cdn.prod.website-files.com/6aa3d0584b139441c99e6df5%2F6adb0430422b06155eb1d2d9_People%20Diverse%20Couple_poster.0000000.jpg'),
]

print("Downloading fonts...")
for fname, url in FONTS:
    path = os.path.join('public/assets/fonts', fname)
    if not os.path.exists(path):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req) as r, open(path, 'wb') as f:
                f.write(r.read())
            print(f"  Downloaded font: {fname}")
        except Exception as e:
            print(f"  Error font {fname}: {e}")

print("Downloading videos...")
for fname, url in VIDEOS:
    path = os.path.join('public/assets/videos', fname)
    if not os.path.exists(path):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req) as r, open(path, 'wb') as f:
                f.write(r.read())
            print(f"  Downloaded video: {fname} ({os.path.getsize(path)} bytes)")
        except Exception as e:
            print(f"  Error video {fname}: {e}")

print("Downloading posters...")
for fname, url in POSTERS:
    path = os.path.join('public/assets/posters', fname)
    if not os.path.exists(path):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req) as r, open(path, 'wb') as f:
                f.write(r.read())
            print(f"  Downloaded poster: {fname}")
        except Exception as e:
            print(f"  Error poster {fname}: {e}")

# Download all images
print("Downloading images from manifest...")
with open('docs/all_images.json', 'r', encoding='utf-8') as f:
    images = json.load(f)

image_map = {}
for img in images:
    url = img['src']
    if not url.startswith('http'):
        continue
    # determine clean filename
    parsed = urllib.parse.urlparse(url)
    basename = os.path.basename(urllib.parse.unquote(parsed.path))
    # sanitize filename
    clean_name = basename.split('?')[-1]
    # remove leading hash prefix like 6adb..._
    if '_' in clean_name:
        clean_name = clean_name.split('_', 1)[-1]
    clean_name = clean_name.replace(' ', '-').replace('%20', '-').lower()
    if not clean_name or clean_name.startswith('.'):
        clean_name = f"asset-{abs(hash(url))}.webp"
        
    local_path = os.path.join('public/assets/images', clean_name)
    image_map[url] = f"/assets/images/{clean_name}"
    
    if not os.path.exists(local_path):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=15) as r, open(local_path, 'wb') as out_f:
                out_f.write(r.read())
            print(f"  Downloaded img: {clean_name}")
        except Exception as e:
            print(f"  Error downloading {url}: {e}")

with open('docs/image_url_map.json', 'w', encoding='utf-8') as f:
    json.dump(image_map, f, indent=2)

print("Asset download process completed!")
