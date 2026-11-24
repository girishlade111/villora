import os
import json
import time
from playwright.sync_api import sync_playwright

BASE_URL = "https://villora.webflow.io"
PAGES = [
    ("", "home"),
    ("/about", "about"),
    ("/activities", "activities"),
    ("/facilities", "facilities"),
    ("/vouchers", "vouchers"),
    ("/blog", "blog"),
    ("/gallery", "gallery"),
    ("/booking", "booking"),
    ("/contact", "contact"),
    ("/instructions", "instructions"),
    ("/style-guide", "style-guide"),
    ("/licenses", "licenses"),
]

os.makedirs("docs/screenshots", exist_ok=True)
os.makedirs("docs/raw_html", exist_ok=True)

audit_data = {}

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context(
        viewport={"width": 1440, "height": 900},
        user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    )
    page = context.new_page()

    for path, name in PAGES:
        url = f"{BASE_URL}{path}"
        print(f"Auditing: {url} -> {name}")
        try:
            page.goto(url, wait_until="networkidle", timeout=30000)
            time.sleep(2)  # wait for any intro animations
            
            # Save raw HTML
            html = page.content()
            with open(f"docs/raw_html/{name}.html", "w", encoding="utf-8") as f:
                f.write(html)
            
            # Viewport screenshot
            page.screenshot(path=f"docs/screenshots/{name}-viewport.png")
            
            # Full page screenshot
            page.screenshot(path=f"docs/screenshots/{name}-full.png", full_page=True)
            
            # Extract basic data
            title = page.title()
            
            # Get all images
            images = page.evaluate('''() => {
                return Array.from(document.querySelectorAll('img')).map(img => ({
                    src: img.src,
                    alt: img.alt,
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                    className: img.className
                }));
            }''')
            
            # Get all videos
            videos = page.evaluate('''() => {
                return Array.from(document.querySelectorAll('video, iframe, [data-video-url]')).map(v => ({
                    tag: v.tagName,
                    src: v.src || v.getAttribute('src') || v.getAttribute('data-video-url'),
                    className: v.className
                }));
            }''')
            
            # Get links
            links = page.evaluate('''() => {
                return Array.from(document.querySelectorAll('a')).map(a => ({
                    text: a.innerText.trim(),
                    href: a.href,
                    className: a.className
                }));
            }''')

            # Get computed styles of body and main containers
            styles = page.evaluate('''() => {
                const bodyStyle = window.getComputedStyle(document.body);
                return {
                    backgroundColor: bodyStyle.backgroundColor,
                    color: bodyStyle.color,
                    fontFamily: bodyStyle.fontFamily,
                    fontSize: bodyStyle.fontSize
                };
            }''')
            
            audit_data[name] = {
                "url": url,
                "title": title,
                "styles": styles,
                "images_count": len(images),
                "images": images[:20],
                "videos": videos,
                "links": [l for l in links if "villora" in l.get("href", "")][:30]
            }
            
            # On home page, try opening menu
            if name == "home":
                try:
                    # Look for hamburger button or menu button
                    menu_btn = page.query_selector(".w-nav-button, [data-w-id*='menu'], button[aria-label*='menu'], .menu-button, .nav-menu-btn, .hamburger")
                    if not menu_btn:
                        # find element with menu in class or role
                        menu_btn = page.query_selector(".nav_menu-trigger, .nav-btn, .menu-icon, .nav_button")
                    if menu_btn:
                        menu_btn.click()
                        time.sleep(1)
                        page.screenshot(path="docs/screenshots/menu-expanded.png")
                        print("Menu clicked and captured!")
                except Exception as e:
                    print("Menu click error:", e)
                    
        except Exception as e:
            print(f"Error on {url}:", e)
            
    browser.close()

with open("docs/audit_summary.json", "w", encoding="utf-8") as f:
    json.dump(audit_data, f, indent=2)

print("Audit completed successfully!")
