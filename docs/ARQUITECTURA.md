# Arquitectura de información · SIC Soluciones Integrales Caribe

## Fuentes de contenido

| Fuente | Qué aporta |
|---|---|
| `sicsoluciones.com.co/` (inicio dividido) | Las dos divisiones como puerta de entrada |
| `/sic/` (Suministros y obras) | Texto de la división, tarjetas de producto, marcas, certificados NTC, contadores (100 · 90 · 20) |
| `/product/*`, `/product-category/*` (WooCommerce) | Catálogo: 3 líneas, 32 productos tras la limpieza |
| `/Vidriosyaluminiosenvalledupar/` | Textos de la división, 7 sistemas, 4 proyectos destacados |
| `/galeria-de-imagenes-*` (7 páginas) | 18 fotos propias de SIC (se descartaron 13 de terceros) |
| `/about-us/` | Quiénes somos, Conócenos: Distribuimos · Instalamos · Asesoramos |
| `mapa.sicsoluciones.com.co` | 29 proyectos: 21 de infraestructura, 8 de vivienda |
| `/contact-us/` + pie de página | Correos, teléfonos |

## Mapa del sitio

```
Inicio  (index.html)
├── Nosotros                  nosotros.html
├── Suministros y obras       suministros.html
│   └── Catálogo              #catalogo  (#cat-tubosistemas · #cat-geosistemas · #cat-linea-agua)
├── Vidrio, aluminio y acero  vidrio-aluminio-acero.html
│   └── Sistemas              #sistemas  (#fachadas · #puertas · #barandas · #banos · #oficina · #espejos · #aluminio)
├── Proyectos                 proyectos.html
│   └── Mapa y portafolio     #mapa
└── Contacto                  contacto.html   (único formulario de cotización)
```

Una página por intención: entender quién es SIC, comprar suministros, encargar un sistema en vidrio, comprobar experiencia y pedir cotización. Antes todo vivía en una sola página larga.

## Navegación

- **Encabezado** (todas las páginas): Nosotros · Suministros · Vidrio y aluminio · Proyectos · Contacto, más el botón **Cotizar** → `contacto.html`. La página actual se marca con `aria-current="page"`.
- **Migas de pan** en todas las páginas internas.
- **Pie de página**: mapa del sitio completo, con enlaces directos a las tres líneas del catálogo y los datos de contacto.
- **WhatsApp flotante** en todas las páginas.
- **Cierre de página**: banda de llamado a la acción en todas las páginas salvo Contacto.

## Recorridos principales

1. **Contratista que necesita tubería.** Inicio → índice de divisiones (Tubosistemas) → `suministros.html#cat-tubosistemas` → busca o filtra → *Cotizar* en el producto → `contacto.html?division=suministros&interes=…` con el formulario ya diligenciado → WhatsApp o correo.
2. **Arquitecto o propietario que quiere una fachada.** Inicio → mitad *Vidrio, aluminio y acero* → sistema → galería de fotos → *Cotizar este sistema* → Contacto prellenado.
3. **Cliente que evalúa a SIC.** Proyectos (mapa, 29 obras, clientes) o Nosotros (servicios, proceso, cifras) → Contacto.

## Contenido compartido (una sola fuente)

| Bloque | Archivo | Se usa en |
|---|---|---|
| Encabezado | `partials/header.html` | todas |
| Pie, WhatsApp y script | `partials/footer.html` | todas |
| Cifras | `partials/facts.html` | Inicio, Nosotros, Proyectos |
| Proyectos destacados | `partials/featured-projects.html` | Inicio, Vidrio, Proyectos |
| Clientes | `partials/clients.html` | Inicio, Nosotros, Proyectos |
| Banda de llamado a la acción | `partials/cta.html` | todas salvo Contacto |
| Catálogo | `tools/catalog.json` | Suministros |

`python3 tools/build.py` copia los bloques en cada página, marca la navegación activa, genera el catálogo y versiona CSS y JS.

## Redirecciones del sitio anterior (`.htaccess`)

| URL anterior | Nueva |
|---|---|
| `/sic/` | `/suministros.html` |
| `/Vidriosyaluminiosenvalledupar/` | `/vidrio-aluminio-acero.html` |
| `/about-us/` | `/nosotros.html` |
| `/contact-us/` | `/contacto.html` |
| `/mapa/` | `/proyectos.html#mapa` |
| `/galeria-de-imagenes-<sistema>/` | `/vidrio-aluminio-acero.html#<sistema>` |
| `/product/*`, `/product-category/*` | `/suministros.html#catalogo` |
