# Sistema de diseño · SIC Soluciones Integrales Caribe

Todo vive en `assets/css/styles.css`. Los tokens están en `:root`. Ningún componente debe usar un color, tamaño de letra o radio que no sea un token, salvo los degradados de las ilustraciones CSS (`.glass-art`, `.project__art`), que son arte, no interfaz.

## Auditoría (antes de la reestructuración)

| Categoría | Antes | Después |
|---|---|---|
| Colores fuera de tokens | 33 valores hex distintos (103 usos) | 0 en interfaz; solo quedan 11 paradas de degradado en ilustraciones |
| Blancos translúcidos | 23 opacidades distintas | 6 tokens (`--on-dark-1…3`, `--fill-dark`, `--line-dark`, `--surface-frosted`) |
| Tamaños de letra | 32 valores en px | escala de 14 pasos (`--fs-2xs` → `--fs-7xl`); solo `clamp()` fluidos y el número decorativo de 110 px quedan sueltos |
| Radios | 9 valores, 4 sueltos | 5 tokens (`--radius-sm/md/·/lg/pill`) |
| Navegación activa | por scroll dentro de una sola página | `aria-current="page"`, marcado por `tools/build.py` |

## Tokens

### Color

| Token | Valor | Uso |
|---|---|---|
| `--ink` / `--ink-2` / `--ink-deep` | #0c1a30 · #13284a · #050c18 | Títulos, superficies oscuras, fondo del visor |
| `--text` / `--muted` | #233148 · #5d6b82 | Texto de párrafo y secundario |
| `--line` / `--paper` / `--white` | #e3e8f0 · #f6f7f9 · #fff | Bordes, secciones teñidas, tarjetas |
| `--brand` / `--brand-2` / `--brand-50` | #2456ad · #2f6fe0 · #eaf0fb | Azul SIC: acciones principales, foco, selección |
| `--supply` / `-soft` / `-200` / `-600` | #d9692e … | Acento de **División 01** (terracota de la tubería) |
| `--glass` / `-soft` | #3aa6c9 · #e5f4f9 | Acento de **División 02** (cian vidrio) |
| `--danger` | #c8402f | Errores de formulario |
| `--wa` | #25d366 | Solo WhatsApp |
| `--steel-100…900`, `--map-*` | | Ilustraciones y mapa |

Regla de división: cada página usa un solo acento. Suministros usa `--supply`, Vidrio usa `--glass` y el resto `--brand`.

### Tipografía

- Títulos: **Archivo** 700–800, `letter-spacing: -0.02em` a `-0.035em`.
- Texto: **Manrope** 400–700.
- Escala: `--fs-2xs` 11 · `xs` 12 · `sm` 13.5 · `md` 14.5 · `base` 15.5 · `body` 16 · `lg` 18 · `xl` 20 · `2xl` 24 · `3xl` 28 · `4xl` 34 · `5xl` 40 · `6xl` 48 · `7xl` 64.
- Los títulos grandes usan `clamp()` entre dos pasos de la escala.

### Forma, profundidad, movimiento y layout

- Radios: `--radius-sm` 8 · `--radius-md` 12 · `--radius` 14 · `--radius-lg` 22 · `--radius-pill`.
- Sombras: `--shadow` (tarjetas), `--shadow-lg` (elementos flotantes y medios destacados).
- Movimiento: `--ease` cubic-bezier(.2,.7,.2,1); `--dur-fast` .2s · `--dur` .3s · `--dur-slow` .6s. Solo `transform` y `opacity`. Con `prefers-reduced-motion` todo se desactiva.
- Layout: `--wrap` 1200 · `--gutter` 20 · `--section-y` clamp(72–128 px) · `--nav-h` 72.

## Componentes

| Componente | Clase | Variantes | Estados |
|---|---|---|---|
| Botón | `.btn` | `--accent` (principal), `--supply`, `--glass-solid`, `--on-dark`, `--ghost`, `--light`, `--wa`, `--sm` | hover sube 2 px; active `scale(.98)`; foco visible con `--brand-2` |
| Enlace de sección | `.section-link`, `.card__link` | — | la flecha se desplaza en hover |
| Encabezado de página | `.page-hero` | `--supply`, `--glass`, `--brand`, `--compact` (sin imagen) | — |
| Migas de pan | `.crumbs` | — | página actual con `aria-current` |
| Encabezado de sección | `.division__head` + `.division__aside` | eyebrow `--dark`, `--accent`, `--glass` | — |
| Cifras | `.facts` | — | animación de conteo al entrar en pantalla |
| Tarjeta de división | `.division-card` | `--supply`, `--glass` | los enlaces se desplazan en hover |
| Tarjeta de producto | `.product` | con o sin descripción, con o sin «Características» | hover; oculta por filtro o búsqueda |
| Catálogo | `.catalog` | — | pestañas, filtros, búsqueda, vacío (`.catalog__empty`) |
| Sistemas | `.systems` | con galería (≥ 2 fotos), con 1 foto, solo ilustración | cambio de pestaña con transición; visor `.lightbox` |
| Proyecto | `.project` | foto o ilustración | oculto por filtro |
| Mapa | `.map` | marcador `--infra`, `--home`, `--mixed` | hover, foco y toque fijan el tooltip |
| Formulario | `.form` | — | error por campo (`.is-invalid`) y resumen (`.form__error`) |
| Banda de llamado | `.band` | — | — |

## Accesibilidad

- Pestañas (`.systems__tabs`, `.catalog__tabs`) con `role="tab"` y navegación con flechas.
- Navegación activa y miga actual con `aria-current="page"`.
- El visor usa `<dialog>` nativo: cierra con Esc, flechas para avanzar.
- Marcadores del mapa enfocables, con `aria-label` que dice ciudad y número de proyectos.
- Enlace «Saltar al contenido» en todas las páginas.

## Reglas al agregar contenido

1. Un componente nuevo usa tokens existentes. Si falta uno, se agrega a `:root` con comentario de uso.
2. Contenido que aparece en más de una página va en `partials/` y se inserta con `<!-- include:nombre -->`.
3. Productos: editar `tools/catalog.json`. Nunca editar el HTML del catálogo a mano.
4. Fotos de galería: solo fotos propias de SIC, en `assets/img/galeria/<sistema>-N.jpg`, máximo 1400 px. Actualizar el conteo `gallery` en `assets/js/main.js`.
5. Después de cualquier cambio: `python3 tools/build.py`.
