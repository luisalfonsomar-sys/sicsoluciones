# SIC · Soluciones Integrales Caribe

Sitio web de Soluciones Integrales Caribe (sicsoluciones.com.co): suministros y obras, y vidrio, aluminio y acero en Valledupar y la región Caribe.

Sitio estático (HTML, CSS y JavaScript). Las páginas publicadas ya están construidas; Python solo se necesita para regenerarlas con `tools/build.py`.

## Ver localmente

```bash
python3 -m http.server 5173
```

Luego abrir http://localhost:5173.

## Páginas

| Página | Archivo |
|---|---|
| Inicio | `index.html` |
| Nosotros | `nosotros.html` |
| Suministros y obras (con catálogo) | `suministros.html` |
| Vidrio, aluminio y acero | `vidrio-aluminio-acero.html` |
| Proyectos (con mapa) | `proyectos.html` |
| Contacto (formulario de cotización) | `contacto.html` |

El mapa del sitio, los recorridos y las redirecciones están en [`docs/ARQUITECTURA.md`](docs/ARQUITECTURA.md). Los tokens y componentes están en [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md).

## Construir

Encabezado, pie, cifras, proyectos destacados, clientes y la banda final viven en `partials/`. El catálogo vive en `tools/catalog.json`. Después de editar cualquiera de ellos, o el CSS y el JS:

```bash
python3 tools/build.py
```

El script inserta los bloques compartidos en cada página, marca la página activa en la navegación, genera el catálogo y versiona `styles.css` y `main.js`.

## Estructura

- `*.html`: páginas listas para publicar
- `partials/`: bloques compartidos
- `assets/css/styles.css`: tokens y estilos
- `assets/js/main.js`: menú, pestañas, galería, catálogo, mapa y formulario
- `assets/img/`: logo, fotos y galerías
- `tools/`: catálogo y script de construcción
- `.htaccess`: redirecciones desde las URL del sitio anterior
