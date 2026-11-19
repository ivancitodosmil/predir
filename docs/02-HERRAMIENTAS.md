# Etapa 2 · Herramientas y Skills

Verificado el 17 de noviembre de 2026 en esta máquina (Windows 11, Node 22.23.2, Python 3.13).
"Verificado" quiere decir que se comprobó el archivo instalado **y** que la herramienta funcionó o la cargó Claude Code. No basta con que el comando de instalación termine.

| Herramienta | Estado | Cómo se comprobó | Uso en este proyecto |
|---|---|---|---|
| **Frontend Design** (`anthropics/skills@frontend-design`) | ✅ Instalada y operativa | `~/.claude/skills/frontend-design/SKILL.md`, registrada en `~/.agents/.skill-lock.json`, aparece en la lista de Skills de Claude Code | Criterio de dirección visual: evitar el look de plantilla |
| **Taste Skill** (`Leonxlnx/taste-skill`, v2.5.1) | ✅ Instalada y operativa | `~/.claude/skills/design-taste-frontend`, cargada en la sesión. Sus scripts se ejecutaron: `shoot.mjs`, `perf.mjs`, `check.mjs`, `consistency.mjs`, `copy-lint.mjs` | Reglas de retícula y bordes, hero, movimiento, copy y **todas las pruebas de la Etapa 5** |
| **UI UX Pro Max** (plugin `ui-ux-pro-max@ui-ux-pro-max-skill`, v2.15.0) | ✅ Instalada y operativa | `installed_plugins.json` + 7 skills cargadas (`ui-ux-pro-max`, `brand`, `design-system`, …). Su buscador `search.py` respondió consultas de UX de formularios | Pautas de formularios: errores anunciados, estado de envío, resumen de errores |
| **Impeccable** (`npx impeccable install`, skill v4.9.2, CLI 0.1.25) | ✅ Instalada | `~/.claude/skills/impeccable/SKILL.md` + `~/.impeccable/bin`, aparece en la lista de Skills | Referencia para la auditoría de accesibilidad y pulido |
| **HyperFrames** (`heygen-com/hyperframes`) | ✅ Instalada en esta sesión | `npx skills add heygen-com/hyperframes -g -y -a claude-code` → 9 skills en `~/.claude/skills/` (`hyperframes`, `hyperframes-cli`, `hyperframes-registry`, `media-use`, …). CLI `hyperframes` 0.9.64 y `hyperframes doctor`: **FFmpeg 9.0.2 ✓, Chrome ✓** | Disponible para piezas de video y motion (presentación de marca, reels). Aún no se usó en el sitio |

### Avisos de `hyperframes doctor` (opcionales, no bloquean)

- **Memoria baja** en el momento de la prueba (1,3 GB libres de 15,8 GB): los renders largos pueden fallar si hay muchas apps abiertas.
- No están instalados (solo se necesitan para funciones extra):
  - `whisper-cpp`: para transcribir.
  - Kokoro: voz local.
  - MusicGen: música local.
  - Docker: renders en contenedor.

## Cómo se usaron las Skills (y qué no se siguió, a propósito)

- **Taste Skill:**
  - **Se adoptaron** sus reglas de:
    - Bordes iguales y retícula de 12 columnas.
    - Hero que llena la primera pantalla en escritorio.
    - Entrada única del hero y uno o dos "momentos" por página.
    - Micro-interacciones al pasar el cursor.
    - Nada que aparezca al hacer scroll bloque por bloque.
    - Foco visible.
  - **No se adoptaron** dos reglas, por decisión explícita:
    1. *"Cada sección mide exactamente 1 o 2 pantallas"*. Para un sitio corporativo con mucho contenido (6 problemas, 4 servicios, 5 pasos, socios), forzar alturas exactas obligaba a recortar contenido útil.
    2. *"Usar fotos de stock como sustitutas"*. Choca con la instrucción del brief de no usar fotografías ficticias como si fueran reales. En su lugar hay marcos marcados como pendientes.
  - **No se cambió la tipografía:** la skill prohíbe Poppins como fuente de la web, y no se usa. El logotipo, que parece Poppins, se mantiene como imagen.
- **UI UX Pro Max:** se aplicaron sus pautas de formularios (errores anunciados, estados de carga, éxito y error, resumen de errores).
- **Frontend Design / Impeccable:** criterio general de composición, jerarquía y pulido.
