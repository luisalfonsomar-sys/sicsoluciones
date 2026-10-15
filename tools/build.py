"""Assemble the static pages.

For every *.html page in the site root:
  1. Replace each  <!-- include:NAME --> ... <!-- /include:NAME -->  block with partials/NAME.html.
  2. Mark the current page in the navigation (aria-current="page"), using <body data-page="KEY">.
  3. Render the product catalog (tools/catalog.json) between the catalog markers.
  4. Stamp styles.css and main.js with a content hash so browsers never serve a stale copy.

Usage: python3 tools/build.py
"""
import hashlib
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
import build_catalog  # noqa: E402

INCLUDE = re.compile(r"(?P<indent>[ \t]*)<!-- include:(?P<name>[\w-]+) -->.*?<!-- /include:(?P=name) -->", re.S)


def asset_hash(rel):
    return hashlib.sha1((ROOT / rel).read_bytes()).hexdigest()[:8]


def build_page(path, partials, versions, catalog_html):
    s = path.read_text(encoding="utf-8")
    page = re.search(r'<body[^>]*data-page="([\w-]+)"', s)
    key = page.group(1) if page else None

    def include(m):
        name, indent = m.group("name"), m.group("indent")
        if name not in partials:
            raise SystemExit(f"{path.name}: unknown partial '{name}'")
        body = partials[name].rstrip("\n")
        if key:
            body = re.sub(rf'data-nav="{key}"', f'data-nav="{key}" aria-current="page"', body)
        return f"{indent}<!-- include:{name} -->\n{body}\n{indent}<!-- /include:{name} -->"

    s = INCLUDE.sub(include, s)
    if build_catalog.START in s:
        s = re.sub(re.escape(build_catalog.START) + r".*?" + re.escape(build_catalog.END), lambda _: catalog_html, s, flags=re.S)
    for rel, v in versions.items():
        s = re.sub(rf'({re.escape(rel)})\?v=[\w]+', rf"\1?v={v}", s)
    path.write_text(s, encoding="utf-8")
    return key


def main():
    partials = {p.stem: p.read_text(encoding="utf-8") for p in (ROOT / "partials").glob("*.html")}
    versions = {rel: asset_hash(rel) for rel in ("assets/css/styles.css", "assets/js/main.js")}
    catalog_html = build_catalog.render(build_catalog.load())
    pages = sorted(p for p in ROOT.glob("*.html"))
    for p in pages:
        key = build_page(p, partials, versions, catalog_html)
        print(f"built {p.name:30} page={key}")


if __name__ == "__main__":
    main()
