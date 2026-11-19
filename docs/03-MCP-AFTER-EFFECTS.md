# Integración MCP con After Effects

## Veredicto

**El servidor MCP compila y responde, pero no puede funcionar todavía: Adobe After Effects no está instalado en esta máquina.**

Por eso **no se registró** en Claude Code: hacerlo dejaría herramientas que se quedan esperando un programa que no existe. Todo lo demás está preparado.

## 1. Repositorio elegido

- **Dakkshin/after-effects-mcp:** https://github.com/Dakkshin/after-effects-mcp
  - Es el original y el más usado (≈ 895 ★, licencia MIT).
  - Último commit `88d5fbf` del 2026-04-01.
- **Alternativa descartada: kumoproductions/mcp-aftereffects.**
  - Exige Node ≥ 24, y aquí hay Node 22.23.2.

## 2. Requisitos

| Requisito | Estado en esta máquina |
|---|---|
| Windows o macOS | ✅ Windows 11 |
| Node ≥ 14 | ✅ 22.23.2 |
| After Effects 2022–2026 | ❌ **No instalado.** En `C:\Program Files\Adobe` solo están Creative Cloud y Creative Cloud Experience |
| Preferencia "Allow Scripts to Write Files and Access Network" | ⏳ Se activa dentro de AE |
| Permisos de administrador para copiar el panel | ⏳ Se piden al instalar el puente (UAC) |

## 3. Lo que ya se hizo y se comprobó

```
git clone --depth 1 https://github.com/Dakkshin/after-effects-mcp.git C:\Users\ipgonzalez2\tools\after-effects-mcp
cd C:\Users\ipgonzalez2\tools\after-effects-mcp
npm install            # compila con esbuild → build/index.js (27 KB) y build/scripts/*.jsx
```

**Prueba del protocolo MCP** (stdio, sin After Effects):
- Se enviaron `initialize` y `tools/list`.
- El servidor respondió `serverInfo: AfterEffectsServer 1.0.0` con capacidades de tools, resources y prompts.
- Listó sus herramientas: `run-script`, `get-results`, `get-help`, `create-composition`, `setLayerKeyframe`, `setLayerExpression`, `apply-effect`, `apply-effect-template`, entre otras.

## 4. Cómo funciona el puente

1. Claude Code ejecuta `node build/index.js`.
2. El servidor escribe `ae_command.json` en `%USERPROFILE%\Documents\ae-mcp-bridge\`.
3. Dentro de After Effects, el panel `mcp-bridge-auto.jsx` (con "Auto-run commands" activo) revisa esa carpeta, ejecuta el comando y deja `ae_mcp_result.json`.

**After Effects y el panel deben estar abiertos** para que funcione.

## 5. ⚠️ Problema detectado: rutas distintas por OneDrive

- **Lado del servidor:** usa `C:\Users\ipgonzalez2\Documents\ae-mcp-bridge`.
- **Lado del panel:** usa `Folder.myDocuments`, y en esta cuenta "Documentos" está redirigido a OneDrive: `C:\Users\ipgonzalez2\OneDrive - Universidad Técnica Particular de Loja - UTPL\Documentos`.
- **Consecuencia:** cada lado leería una carpeta diferente y los comandos nunca llegarían.
- **Solución recomendada:** después de instalar AE, crear un enlace (junction) para que ambas rutas apunten a la misma carpeta.

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\Documents\ae-mcp-bridge"
New-Item -ItemType Junction -Path "$env:OneDrive\Documentos\ae-mcp-bridge" -Target "$env:USERPROFILE\Documents\ae-mcp-bridge"
```

También conviene excluir esa carpeta de la sincronización de OneDrive.

## 6. Pasos pendientes, cuando se instale After Effects

1. Instalar After Effects (2022–2026) desde Creative Cloud. Requiere licencia.
2. Ejecutar el puente (pide permisos de administrador) y crear la junction del punto 5:
   ```powershell
   cd C:\Users\ipgonzalez2\tools\after-effects-mcp; npm run install-bridge
   ```
3. En AE: *Edit › Preferences › Scripting & Expressions* → activar **Allow Scripts to Write Files and Access Network**. Reiniciar AE.
4. Abrir *Window › mcp-bridge-auto.jsx* y marcar "Auto-run commands".
5. Registrar el servidor en Claude Code (alcance de usuario):
   ```powershell
   claude mcp add --scope user AfterEffectsMCP -- node "C:\Users\ipgonzalez2\tools\after-effects-mcp\build\index.js"
   ```
6. Comprobar la conexión: `claude mcp list` debe mostrarlo conectado. Después, desde Claude, pedir `get-help` y `run-script` con `listCompositions` sobre un proyecto `.aep` de prueba.

## 7. Riesgos

- Los scripts modifican el proyecto abierto: trabajar siempre con copias de respaldo.
- La preferencia de AE permite que cualquier script escriba archivos y acceda a la red. Desactivarla cuando no se use.
- Mantenimiento irregular: hay 26 issues abiertos y el README no coincide del todo con el código.
- **Alternativa ya operativa para motion:** HyperFrames (instalado y verificado) produce video desde HTML sin depender de After Effects.
