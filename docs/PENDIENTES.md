# Pendientes: información y recursos que faltan

Nada de esto se inventó. En el sitio, cada hueco se ve marcado con una etiqueta coral punteada ("Fotografía pendiente", "Caso por publicar", "Borrador por validar", "por confirmar").

## Para publicar el sitio

- [ ] **Dominio** definitivo → `astro.config.mjs` (`site`).
- [x] **WhatsApp comercial**: Iván 099 306 0553 (botón flotante, contacto y pie) y Fabián 097 962 9635 (su tarjeta). Configurado en `src/config/site.ts` y `src/data/contenido.ts`.
- [x] **Correo comercial**: contacto.predir@gmail.com (en `src/config/site.ts`).
- [x] **Formularios al correo**: Web3Forms (formulario "Web PREDIR", cuenta contacto.predir@gmail.com). Probado el 19/11 con un envío de cada formulario. Plan gratuito: 250 envíos al mes.
- [ ] **Tecnologías**: revisar la lista de `tecnologias` en `contenido.ts` y dejar solo las que el equipo usa.
- [ ] **Redes sociales**, si existen → `src/config/site.ts` `social`.
- [ ] **Razón social**, cuando se constituya → `src/config/site.ts` `legalName`.

## Contenido

- [x] **Fotografías** de Iván y Fabián → `public/equipo/` (recortadas 4:5, WebP 480/960).
- [x] **Logotipos de clientes**: Ferre Vertikal G&L, Galarza Armijos & Asociados y Restobar D'Vlas (reales, con su fondo original).
- [ ] **Logos de relleno** (Picantería Andrea, Boutique Cariñosas, Peluquería Estilo): diseñados a pedido, marcados `ejemplo: true` en `contenido.ts`. Confirmar que son clientes reales o reemplazarlos antes de publicar.
- [ ] **Casos de proyectos** con problema, solución y resultado reales → `public/proyectos/` + `contenido.ts`.
  - *Sugerencia:* trabajos previos que podrían ser candidatos, si los clientes lo autorizan y se presentan como lo que son: el sitio de Ferromarket León, CotizaYa (cotizaciones para ferreterías) y la app de transporte escolar VSL.
- [x] **Misión y visión**: versión final publicada.
- [ ] **Biografías** de los socios: hoy son descripciones breves del enfoque que se proporcionó. Pueden ampliarse con información real.

## Marca (para Fabián)

- [ ] Logotipo horizontal en **vector** (SVG / AI).
- [ ] **Tipografía** del logotipo (¿Poppins SemiBold?).
- [ ] **Significado** del símbolo, de sus dos colores y del nombre "Predir".
- [ ] Valores **CMYK y Pantone** para impresión.
- [ ] Validar las propuestas del manual (`/marca`):
  - Tipografías web.
  - Personalidad.
  - Área de protección y tamaños mínimos.
  - Elementos gráficos, iconografía y movimiento.

## Herramientas

- [ ] Instalar **After Effects** y completar la integración MCP (`docs/03-MCP-AFTER-EFFECTS.md`).

## Google (19/11/2026)

- [x] **Dominio**: www.predirsoft.com (comprado en Vercel, renovación automática).
- [x] **Google Search Console**: propiedad `https://www.predirsoft.com/` verificada con la cuenta contacto.predir@gmail.com mediante el archivo `public/google15947f97a41da045.html`. **No borrar ese archivo**: si desaparece, se pierde la verificación.
- [x] Sitemap enviado (`sitemap.xml`) e indexación de la página principal solicitada.
- [ ] **Perfil de Empresa de Google** (Google Maps) con ubicación en Loja.
- [ ] **Web3Forms**: cambiar la URL del sitio de `localhost` a `www.predirsoft.com`.
