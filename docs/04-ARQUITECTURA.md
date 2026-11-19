# Arquitectura del sitio

## Decisión

**Astro 6 (sitio estático) + CSS propio con tokens + TypeScript mínimo.** No hay framework de interfaz ni librerías de animación.

**Por qué:**
- Un sitio corporativo es contenido. Astro genera HTML estático y envía 0 KB de JavaScript de framework.
- Sus componentes `.astro` son reutilizables y fáciles de mantener.
- Escala bien: blog, casos de estudio o idiomas se agregan como páginas o *content collections*.
- Ya se usó en otro proyecto del equipo.

**Por qué Astro 6 y no 7:** Astro 7.4 exige Node ≥ 22.23.4 y esta máquina tiene 22.23.2. Si se actualiza Node, se puede subir a Astro 7 sin cambiar código.

## Estructura

```
Predir/
├─ public/
│  ├─ brand/          ← archivos oficiales de Predir-Logo (+ recortes y tamaños web)
│  ├─ equipo/         ← fotos de los socios (pendiente, ver LEEME.md)
│  ├─ clientes/       ← logos de clientes (pendiente, ver LEEME.md)
│  ├─ proyectos/      ← imágenes de casos (pendiente, ver LEEME.md)
│  ├─ og.png          ← tarjeta para compartir (1200×630)
│  └─ favicon.*, apple-touch-icon, site.webmanifest
├─ src/
│  ├─ config/site.ts  ← nombre, contacto (WhatsApp, correo, endpoint), navegación
│  ├─ data/contenido.ts ← TODOS los textos editables: problemas, servicios, proceso, socios, FAQ, misión
│  ├─ styles/
│  │  ├─ tokens.css   ← colores corporativos + derivados, tipografía, espacio, radios, movimiento
│  │  └─ global.css   ← base, retícula, botones, etiquetas, foco, entrada del hero
│  ├─ components/     ← Header, Footer, Hero, HeroDemo, Soluciones, Servicios, ServicioVisual,
│  │                     Proceso, Proyectos, Nosotros, Faq, Contacto, Logo, Simbolo, Icon
│  ├─ scripts/formulario.ts ← validación y envío del formulario
│  ├─ layouts/Base.astro ← <head> SEO, Open Graph, JSON-LD, cabecera y pie
│  └─ pages/
│     ├─ index.astro  ← página principal
│     ├─ marca.astro  ← manual de identidad visual (/marca), imprimible a PDF
│     ├─ 404.astro, robots.txt.ts, sitemap.xml.ts
│     └─ og-tarjeta.astro ← plantilla de la imagen og.png (noindex)
└─ docs/              ← investigación, herramientas, MCP, arquitectura, pendientes
```

## Cómo editar

| Quiero… | Archivo |
|---|---|
| Cambiar un texto, un servicio o una pregunta frecuente | `src/data/contenido.ts` |
| Poner WhatsApp, correo o el endpoint del formulario | `.env` (copiar de `.env.example`) |
| Agregar la foto de un socio | `public/equipo/` + campo `foto` en `contenido.ts` |
| Agregar un proyecto o un cliente | `proyectos` / `clientes` en `contenido.ts` |
| Ajustar un color o un tamaño | `src/styles/tokens.css` (los corporativos no se tocan) |
| Cambiar el dominio | `site` en `astro.config.mjs` |

## Comandos

```
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/ (sitio estático listo para subir)
npm run preview
```

Para desplegar, `dist/` se sube a cualquier hosting estático: Netlify, Vercel, Cloudflare Pages o un hosting tradicional.

## Rendimiento, accesibilidad y SEO

**Rendimiento** (medido con `perf.mjs`):
- Página principal: **188 KB** en total. Fuentes 127 KB, CSS 12 KB, imágenes 16 KB.
- 13 peticiones, 0 cambios de diseño al cargar (CLS 0,000).
- Las fuentes se sirven desde el propio sitio (Fontsource), solo el subconjunto latino, con `font-display: swap`.

**Accesibilidad:**
- Enlace "Saltar al contenido".
- Foco visible con contraste de al menos 3:1: verde sobre claro, verde claro sobre oscuro.
- Menú móvil con `aria-expanded` que se cierra con Escape.
- Encabezados en orden, textos alternativos y contraste AA en todos los textos.
- Errores del formulario bajo cada campo y anunciados.
- `prefers-reduced-motion` respetado: todo queda quieto y visible.

**SEO:**
- Título y descripción por página, URL canónica, Open Graph y Twitter Card.
- JSON-LD `ProfessionalService` con los fundadores.
- `sitemap.xml`, `robots.txt` y `lang="es-EC"`.

## Recursos gráficos

**Imágenes originales generadas con IA** (Figma AI, modelo gpt-image-2.5-flare, 17/11/2026):
- Hay 8. Ninguna tiene texto, logotipos ni interfaces con palabras; se revisaron a resolución completa.
- La paleta es la de la marca.

**Dónde están:**
- **Originales PNG:** `recursos/ia-original/`.
- **Versiones web:** `public/img/<nombre>-{640,1024,1536}.webp`, que el componente `Imagen.astro` sirve de forma responsiva.
- **Archivo de Figma** con todas las imágenes: "Predir · Recursos gráficos web", en el equipo personal de Iván.

**Dónde se usa cada una:**

| Imagen | Sección |
|---|---|
| `hero-formas-3d` | **Retirada** el 18/11: no comunicaba el servicio. El hero ahora usa una laptop y un celular construidos en HTML/CSS, con motion graphics |
| `soluciones-manual-digital` | Soluciones |
| `servicio-gestion`, `servicio-automatizacion`, `servicio-software`, `servicio-identidad` | Tarjetas de Servicios, cada una con un componente HTML real encima |
| `proceso-pista` | Banda de Proceso |
| `nosotros-mesa-compartida` | Nosotros |

## WhatsApp

- **Número principal:** `WHATSAPP_PRINCIPAL` en `src/config/site.ts` (Iván, 593993060553).
  - Lo usan el botón flotante (`WhatsappFlotante.astro`), el canal de Contacto, el pie de página y el panel de clientes.
  - Mensaje inicial: `whatsappMensaje`.
- **Números de cada socio:** campo `whatsapp` en `src/data/contenido.ts`.

## Integraciones pendientes (no simuladas)

- **Formulario:** envía por POST (JSON) a `PUBLIC_FORM_ENDPOINT`. Sin endpoint **no finge un envío**: avisa que no está conectado y ofrece WhatsApp o correo si existen.
  - Probado contra un servidor local: estado "Enviando…", éxito solo con una respuesta 2xx, y error que conserva lo escrito.
  - Opciones para conectarlo: Formspree, Web3Forms o una función serverless propia.
- **Correo:** `PUBLIC_EMAIL`. Mientras esté vacío, se muestra como "por confirmar" (ver `docs/05-CORREO-CORPORATIVO.md`).
- **Dominio:** `astro.config.mjs` usa `https://predir.example` como provisional.

## Motion graphics

Todo está hecho en CSS y SVG, sin librerías ni video.

| Dónde | Animación |
|---|---|
| Hero | La demo alterna "A mano" ↔ "Con sistema" cada 5 s (al hacer clic, el ciclo se reinicia), circuito de datos con pulsos, gráfico de ventas que se dibuja en el celular, celular que flota |
| Cinta bajo el hero | Servicios en desplazamiento continuo; se pausa al pasar el cursor |
| Servicios | Barras que crecen, check que late, niveles de stock que se llenan |
| Proceso | Pista que se dibuja una vez al entrar en pantalla |

**Accesibilidad:** con `prefers-reduced-motion` no se mueve nada y la demo queda fija en "Con sistema". Por decisión de diseño no hay botón de pausa visible.

## Clientes

Los logotipos reales van en `public/clientes/` y se registran en `clientes` dentro de `src/data/contenido.ts`. Se muestran sobre blanco, con sus colores originales.

| Cliente | Archivo | Fecha |
|---|---|---|
| Ferre Vertikal G&L | `ferre-vertikal-gl.webp` | 18/11, fondo blanco recortado |
