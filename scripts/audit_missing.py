import os
import json
import time
from playwright.sync_api import sync_playwright

BASE_URL = "https://villora.webflow.io"
PAGES = [
    ("", "home"),
    ("/booking", "booking"),
    ("/contact", "contact"),
    ("/instructions", "instructions"),
    ("/style-guide", "style-guide"),
    ("/licenses", "licenses"),
]

os.makedirs("docs/screenshots", exist_ok=True)
os.makedirs("docs/raw_html", exist_ok=True)

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
        for attempt in range(3):
            try:
                page.goto(url, wait_until="domcontentloaded", timeout=25000)
                page.wait_for_timeout(3000)
                
                # Save raw HTML
                html = page.content()
                with open(f"docs/raw_html/{name}.html", "w", encoding="utf-8") as f:
                    f.write(html)
                
                # Viewport screenshot
                page.screenshot(path=f"docs/screenshots/{name}-viewport.png")
                
                # Full page screenshot
                page.screenshot(path=f"docs/screenshots/{name}-full.png", full_page=True)
                print(f"Success for {name}")
                
                if name == "home":
                    try:
                        # Try to click hamburger menu
                        # Let's inspect buttons
                        btns = page.query_selector_all("button, [role='button'], .w-nav-button, a, div")
                        for b in btns:
                            cls = b.get_attribute("class") or ""
                            aria = b.get_attribute("aria-label") or ""
                            if "menu" in cls.lower() or "menu" in aria.lower() or "hamburger" in cls.lower() or "nav" in cls.lower():
                                b_box = b.bounding_box()
                                if b_box and b_box['width'] > 0 and b_box['y'] < 100:
                                    print(f"Found menu button candidate: class={cls}, aria={aria}, box={b_box}")
                                    b.click()
                                    page.wait_for_timeout(1000)
                                    page.screenshot(path="docs/screenshots/menu-expanded.png")
                                    print("Captured menu-expanded.png!")
                                    break
                    except Exception as me:
                        print("Menu capture error:", me)
                break
            except Exception as e:
                print(f"Attempt {attempt+1} failed for {url}:", e)
                page.wait_for_timeout(2000)
                
    browser.close()

print("Finished missing pages audit!")
