# Etapa 1 · Investigación y auditoría

Fecha: 17 de noviembre de 2026.

## 1. Estado inicial del proyecto

- `Desktop/Predir` estaba **vacío**. No existía código, así que se propuso una arquitectura nueva (ver `04-ARQUITECTURA.md`).
- Ojo: el repositorio git que lo contenía era la carpeta personal completa (`C:\Users\ipgonzalez2`). Se creó un repositorio propio dentro de `Predir` (`git init`, rama `main`) para que el proyecto se versione aparte.

## 2. Carpeta de identidad (`Downloads/Predir-Logo`)

| Carpeta | Contenido real |
|---|---|
| `svg/` | Símbolo en 5 variantes (color, blanco, para fondo oscuro, una tinta blanca, una tinta verde) + ícono de app verde. |
| `png-transparente/` | Símbolo color / blanco / fondo oscuro en 512, 1024 y 2048 px. |
| `logo-horizontal/` | Símbolo + palabra "predir" en PNG (color y blanco), 1137×340. **No hay versión vectorial del logotipo horizontal.** |
| `favicon-web/` | `.ico`, `.svg`, PNG 16→512, `apple-touch-icon`. |
| `iconos-app/` | Android (densidades, redondo, adaptive) e iOS. Fondo adaptive `#2F6D5F`. |
| `LEEME.txt` | Uso de cada archivo y los 4 colores oficiales. |

Colores oficiales (de `LEEME.txt`): verde `#2F6D5F`, coral `#E8836B`, verde claro `#9FD3C5`, tinta `#18282A`.

**Faltantes identificados** (no se inventaron):
- Nombre de la tipografía del logotipo horizontal. Visualmente es una geométrica de terminaciones redondas, parecida a Poppins SemiBold, **sin confirmar**.
- Logotipo horizontal en SVG.
- Tipografías corporativas para textos.
- Significado oficial del símbolo y de sus dos colores.
- Fotografías, estilo fotográfico, iconografía propia.

## 3. Benchmark: empresas de Loja

Sitios leídos: solnustec.com, kradac.com, oficial.clipp.app, oderbiz.com, elementary.ec, lojasoftsolutions.com.ec, alejofaican.com, zapmci.com. Marka593 no tiene sitio web (solo redes).

| Empresa | Qué ofrece | Fortalezas | Debilidades observadas |
|---|---|---|---|
| Solnus | Facturación electrónica, tiendas, branding | CEO y CTO con nombre; reseñas Google | Restos de plantilla ThemeForest, enlaces "#", portafolio con 2 proyectos vacíos |
| Kradac | Movilidad (Ktaxi, Kbus, Clipp) | Productos propios reales, video | ©2018, errores ortográficos, sin formulario ni WhatsApp |
| Oderbiz | Marketing y diseño | Precios públicos, WhatsApp en cada plan, logos (UTPL, Nettplus) | Equipo sin fotos, secciones duplicadas, errores |
| Elementary | Webs WordPress | 12 logos de clientes, FAQ | Sin equipo, sin casos, sin métricas |
| LojaSoft | Outsourcing desarrollo y QA | — | Plantilla antigua, sin titular, mapa roto |
| Alejo Faicán | Freelance web/SEO | Blog técnico activo, tono cercano | Posicionamiento disperso |
| ZAP MCI | Marketing | — | Sitio "en renovación" con foto de stock |

**Patrones comunes en Loja:** WhatsApp como canal principal; propuestas de valor genéricas ("siguiente nivel", "soluciones"); prueba social con logos sin contexto; restos de plantilla y errores; equipos sin rostro; portafolios mínimos sin casos reales.

## 4. Referentes internacionales

- **thoughtbot:** el titular habla del problema del cliente, no del proveedor. Servicios por etapa del negocio.
- **Linear:** interfaz real en lugar de ilustraciones; numeración técnica de secciones.
- **Basement Studio:** cada proyecto con una línea centrada en el resultado.
- **Clay:** FAQ que explica cómo se contrata; cofundadores supervisan cada proyecto.
- **Instrument:** disciplinas claras que ordenan el trabajo.

## 5. Decisiones que tomamos a partir de la investigación

1. **Titular sobre el resultado del cliente**, en una frase concreta: el paso de lo manual a lo digital.
2. **Mostrar la interfaz, no ilustraciones de stock:** el hero enseña un cuaderno de inventario que se convierte en sistema.
3. **Fundadores visibles** con nombre, rol y enfoque, y el argumento "código + marca en un mismo equipo", que ningún competidor local ofrece.
4. **Servicios organizados por necesidad** (construir, ordenar, dar forma) con la consultoría como primer paso.
5. **Proceso numerado** con lo que pasa en cada paso.
6. **Proyectos con estructura de caso** (contexto → problema → solución → resultado), vacíos y marcados hasta tener autorización de cada cliente. Nada inventado.
7. **Dos caminos de contacto:** WhatsApp con mensaje prellenado y un formulario corto que califica el proyecto (tipo de necesidad, plazo).
8. **FAQ sobre cómo cotizamos**, sin publicar precios que aún no existen.
9. **Cuidado técnico visible:** sin enlaces "#", sin plantilla, ortografía revisada, accesible y rápido.
