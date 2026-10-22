"""
Render each brochure's cover (page 1) and its "inside" preview (page 2) to
JPEGs for the home page catalogue section, and print the page count and file
size to copy into data/brochures.ts.

The PDFs are image-only, so there is nothing to extract at runtime: render once
here and let next/image serve responsive WebP/AVIF from the JPEGs.

Needs PyMuPDF (pip install pymupdf). Re-run whenever a brochure is replaced:

    python scripts/render-brochure-covers.py

Brochures live in public/brochures as <slug>-<token>.pdf (the token keeps the
file URL unguessable; see app/api/brochures/route.ts). Images are written to
public/image/brochures/<slug>-cover.jpg and <slug>-inside.jpg.
"""

import os
import re
import sys

import pymupdf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "public", "brochures")
OUT = os.path.join(ROOT, "public", "image", "brochures")

WIDTH = 900  # px; cards display at up to ~340px, so this covers 2x screens
QUALITY = 86

PAGES = {"cover": 0, "inside": 1}


def render(page, path):
    zoom = WIDTH / page.rect.width
    pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
    pix.save(path, jpg_quality=QUALITY)


def main():
    os.makedirs(OUT, exist_ok=True)
    files = sorted(f for f in os.listdir(SRC) if f.lower().endswith(".pdf"))
    if not files:
        sys.exit(f"No PDFs found in {SRC}")

    for name in files:
        match = re.match(r"^(.+)-[0-9a-f]{10}\.pdf$", name)
        if not match:
            print(f"  ! skipped {name}: expected <slug>-<10 hex token>.pdf")
            continue
        slug = match.group(1)
        doc = pymupdf.open(os.path.join(SRC, name))
        for label, index in PAGES.items():
            if index < doc.page_count:
                render(doc[index], os.path.join(OUT, f"{slug}-{label}.jpg"))
        size_mb = os.path.getsize(os.path.join(SRC, name)) / 1_000_000
        print(f"  + {slug}: pages={doc.page_count}, sizeMb={size_mb:.1f}")


if __name__ == "__main__":
    main()
