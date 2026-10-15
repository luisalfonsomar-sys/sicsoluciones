"""Render tools/catalog.json into the catalog block on suministros.html.

Normally run through tools/build.py, which builds every page.
"""
import html
import json
import pathlib
import re
import urllib.parse

ROOT = pathlib.Path(__file__).resolve().parent.parent
START, END = "<!-- catalog:start -->", "<!-- catalog:end -->"

e = lambda s: html.escape(s, quote=True)


def product(p, group):
    out = [f'            <article class="product" data-group="{group["id"]}" data-search="{e(" ".join([p["name"], group["name"], p.get("desc", ""), " ".join(p.get("specs", []))]).lower())}">']
    out.append(f'              <span class="product__group">{e(group["name"])}</span>')
    out.append(f'              <h4>{e(p["name"])}</h4>')
    if p.get("desc"):
        out.append(f'              <p class="product__desc">{e(p["desc"])}</p>')
    if p.get("points"):
        items = "".join(f"<li>{e(x)}</li>" for x in p["points"])
        out.append(f'              <details class="product__more"><summary>Características</summary><ul>{items}</ul></details>')
    if p.get("specs"):
        out.append('              <ul class="tags">' + "".join(f"<li>{e(s)}</li>" for s in p["specs"]) + "</ul>")
    if not p.get("desc"):
        out.append('              <p class="product__note">Solicite la ficha técnica con el asesor.</p>')
    href = "contacto.html?" + urllib.parse.urlencode({"division": "suministros", "interes": p["name"]})
    out.append(f'              <a class="product__quote" href="{e(href)}">Cotizar <span aria-hidden="true">→</span></a>')
    out.append("            </article>")
    return "\n".join(out)


def render(catalog):
    total = sum(len(g["products"]) for c in catalog for g in c["groups"])
    lines = [START, '        <div class="catalog reveal" id="catalogo">', '          <header class="catalog__head">',
             f'            <div><span class="portfolio__kicker">Catálogo de productos</span><h3>{total} productos en {len(catalog)} líneas</h3></div>',
             '            <label class="catalog__search"><span class="sr-only">Buscar producto</span><input type="search" placeholder="Buscar producto…" autocomplete="off"></label>',
             '          </header>', '          <div class="catalog__tabs" role="tablist" aria-label="Líneas de producto">']
    for i, c in enumerate(catalog):
        n = sum(len(g["products"]) for g in c["groups"])
        lines.append(f'            <button role="tab" id="tab-{c["id"]}" aria-controls="cat-{c["id"]}" aria-selected="{"true" if i == 0 else "false"}">{e(c["name"])} <span>{n}</span></button>')
    lines.append("          </div>")
    for i, c in enumerate(catalog):
        n = sum(len(g["products"]) for g in c["groups"])
        lines.append(f'          <section class="catalog__panel" id="cat-{c["id"]}" role="tabpanel" aria-labelledby="tab-{c["id"]}"{"" if i == 0 else " hidden"}>')
        lines.append(f'            <p class="catalog__intro">{e(c["intro"])}</p>')
        chips = [f'<button class="is-active" data-group="all">Todos <span>{n}</span></button>']
        chips += [f'<button data-group="{g["id"]}">{e(g["name"])} <span>{len(g["products"])}</span></button>' for g in c["groups"]]
        lines.append(f'            <div class="catalog__chips" role="group" aria-label="Subcategorías de {e(c["name"])}">{"".join(chips)}</div>')
        lines.append('            <div class="catalog__grid">')
        lines += [product(p, g) for g in c["groups"] for p in g["products"]]
        lines.append("            </div>")
        lines.append("          </section>")
    lines += ['          <p class="catalog__empty" role="status" hidden>No encontramos productos con esa búsqueda. <a href="contacto.html?division=suministros">Pregúntenos</a> y lo conseguimos.</p>',
              "        </div>", "        " + END]
    return "\n".join(lines)


def load():
    return json.loads((ROOT / "tools/catalog.json").read_text(encoding="utf-8"))


def main():
    catalog = load()
    index = ROOT / "suministros.html"
    s = index.read_text(encoding="utf-8")
    block = render(catalog)
    if START in s:
        s = re.sub(re.escape(START) + r".*?" + re.escape(END), lambda _: block, s, flags=re.S)
    else:
        anchor = '        <div class="trust reveal">'
        assert s.count(anchor) == 1, "trust block not found"
        s = s.replace(anchor, "        " + block + "\n\n" + anchor)
    index.write_text(s, encoding="utf-8")
    print(f"catalog: {sum(len(g['products']) for c in catalog for g in c['groups'])} products")


if __name__ == "__main__":
    main()
