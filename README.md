# SIC — Soluciones Integrales Caribe

Redesign of [sicsoluciones.com.co](https://sicsoluciones.com.co) for Soluciones Integrales
Caribe (Valledupar, Cesar): suministros y obras civiles, y sistemas de vidrio, aluminio y acero.

Rebuilt from the original WordPress site's content, structure, and imagery — same two business
lines, same projects and brands, new front end. Plain HTML, CSS, and JS — no build step, no
framework, no dependencies.

## Structure

```
index.html                    Home
nosotros.html                 About / company
suministros-y-obras.html      Suministros y Obras division
vidrio-aluminio-acero.html    Vidrio, Aluminio y Acero division, with project portfolio
contacto.html                 Contact form (opens a pre-filled email; no backend)
css/styles.css                All styles
js/main.js                    Nav, scroll-reveal, contact form validation
assets/images/                Photos, logos, brand marks
assets/favicon.png
```

## Run locally

Any static file server works. From this folder:

```bash
python3 -m http.server 5555
```

Then open `http://localhost:5555`. Opening `index.html` directly from the filesystem also
works, since there's no build step and no fetch of local files.

## Deploy

Upload the folder as-is to any static host (Netlify, Vercel, GitHub Pages, S3, or a plain
nginx/Apache server) — there's nothing to build. See the project's deployment notes for an
example nginx config.
