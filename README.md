# Predir · Sitio corporativo

Sitio web de **Predir**, estudio de software y diseño de Loja, Ecuador: software a medida, automatización, sistemas de gestión e identidad visual.

- **Página principal:** `/`. Hero (cuaderno → sistema), Soluciones, Servicios, Proceso, Proyectos y clientes, Nosotros (socios, misión y visión), Preguntas frecuentes y Contacto.
- **Manual de identidad visual:** `/marca`. Logotipo, color, tipografía, elementos gráficos, iconografía, componentes y movimiento. Se puede imprimir o guardar en PDF desde el navegador.

## Empezar

```
npm install
cp .env.example .env   # completar WhatsApp, correo y endpoint del formulario
npm run dev            # http://localhost:4321
npm run build          # sitio estático en dist/
```

Requiere Node ≥ 22.12.

## Documentación

| Documento | Contenido |
|---|---|
| [docs/01-INVESTIGACION.md](docs/01-INVESTIGACION.md) | Auditoría inicial, carpeta de marca, benchmark de empresas de Loja y referentes |
| [docs/02-HERRAMIENTAS.md](docs/02-HERRAMIENTAS.md) | Skills instaladas y cómo se verificaron |
| [docs/03-MCP-AFTER-EFFECTS.md](docs/03-MCP-AFTER-EFFECTS.md) | Estado de la integración MCP con After Effects |
| [docs/04-ARQUITECTURA.md](docs/04-ARQUITECTURA.md) | Estructura, cómo editar, rendimiento, accesibilidad, SEO |
| [docs/05-CORREO-CORPORATIVO.md](docs/05-CORREO-CORPORATIVO.md) | Cómo crear y conectar el Gmail de PREDIR |
| [docs/PENDIENTES.md](docs/PENDIENTES.md) | Información y recursos que faltan |

Todos los textos editables están en `src/data/contenido.ts`.
