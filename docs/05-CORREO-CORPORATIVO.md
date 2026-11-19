# Correo corporativo de PREDIR (Gmail)

## Estado: listo (19/11/2026)

- Cuenta: **contacto.predir@gmail.com**.
- Formularios conectados a Web3Forms (formulario "Web PREDIR"). La clave pública está en `src/config/site.ts` y se puede sobrescribir con `.env`.
- Se envió una prueba desde "Solicitar propuesta" y otra desde "Agendar diagnóstico"; ambas aparecen en el panel de Web3Forms.
- Cuando haya dominio propio, actualiza la URL del sitio en el panel de Web3Forms.

## Historial: primer intento

**Hasta dónde llegué (17/11/2026):**
1. Abrí el registro de Google en tu Chrome y escribí **PREDIR** como nombre.
2. Google pidió **fecha de nacimiento y género** antes de dejar elegir la dirección.

Son datos personales, así que me detuve ahí. Por eso **no pude comprobar la disponibilidad de ninguna dirección**: Google solo la muestra en el paso siguiente.

La pestaña quedó abierta en tu Chrome, en el paso "Información básica".

**El sitio no publica ningún correo** hasta que la cuenta exista. Hoy los botones de correo se muestran como "Correo por confirmar".

## Direcciones a probar, en orden de preferencia

| # | Dirección | Por qué |
|---|---|---|
| 1 | `contacto.predir@gmail.com` | Dice para qué sirve; ideal para recibir solicitudes |
| 2 | `predir.ec@gmail.com` | Corta y con país; buena para tarjetas y redes |
| 3 | `predir.software@gmail.com` | Refuerza el servicio principal |
| 4 | `predir.soluciones@gmail.com` | Más amplia (software + diseño) |
| 5 | `hola.predir@gmail.com` | Tono cercano, alternativa si las anteriores están tomadas |
| 6 | `predir.loja@gmail.com` | Local, fácil de recordar |
| 7 | `predirec@gmail.com` | Sin punto, por si Google exige otra forma |

Gmail ignora los puntos: `predir.ec` y `predirec` son la misma cuenta. Si una está ocupada, su variante sin punto también lo estará.

## Pasos

1. En la pestaña abierta (o en https://accounts.google.com/signup):
   - Nombre: **PREDIR**.
   - Fecha de nacimiento y género: los tuyos (cuenta administrada por ti).
2. En "Elige tu dirección de Gmail" → **Crear tu propia dirección** → probar la lista de arriba en orden.
3. Crear una contraseña segura (guárdala en un gestor de contraseñas) y verificar tu teléfono.
4. **Recomendado:** activar la verificación en dos pasos y agregar a Fabián como correo de recuperación o contacto de confianza.

## Publicar el correo en la web (1 minuto)

Crea el archivo `.env` en la raíz del proyecto (o edítalo si ya existe):

```
PUBLIC_EMAIL=contacto.predir@gmail.com
```

Luego ejecuta `npm run build`. El correo aparecerá automáticamente, clicable con `mailto:`, en:
- la sección **Contacto** (canal Correo);
- el **pie de página**;
- el botón **Enviar por correo** del formulario, cuando aún no haya un servicio de envío.

## Siguiente nivel (opcional)

Cuando registren el dominio, un correo `contacto@predir.ec` (Google Workspace o Zoho Mail) da más confianza que Gmail. El sitio solo necesita cambiar `PUBLIC_EMAIL`.

## Recibir los formularios en el correo (Web3Forms)

El sitio tiene dos formularios:
- **Solicitar propuesta**, en Contacto.
- **Agendar diagnóstico**, una ventana con empresa, a qué se dedica, ubicación, día y hora de visita, nombre, WhatsApp y correo.

Ambos envían a **Web3Forms**, un servicio gratuito que reenvía cada envío al correo que registres. No necesita servidor propio.

1. Con el Gmail ya creado, entra a https://web3forms.com y escribe ese correo en "Create your Access Key".
2. Web3Forms te enviará la clave (*Access Key*) a ese correo. Es pública por diseño, no es una contraseña.
3. Crea o edita el archivo `.env` en la raíz del proyecto:
   ```
   PUBLIC_EMAIL=contacto.predir@gmail.com
   PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
   PUBLIC_FORM_ACCESS_KEY=la-clave-que-te-llegó
   ```
4. Ejecuta `npm run build` (o reinicia `npm run dev`) y envía una prueba desde cada formulario.

**Qué llega en cada correo:**
- **Asunto:** "Agenda de diagnóstico: <empresa>" o "Solicitud de propuesta: <nombre>".
- **Contenido:** todos los campos, con la fecha de visita escrita en palabras.

**Mientras no esté configurado,** los formularios no fingen enviar: avisan y ofrecen mandar la solicitud por WhatsApp a Iván con los datos ya escritos.

## Cómo pedírselo a Claude Code

Hay pasos que solo puedes hacer tú: los datos personales, la contraseña, la verificación del teléfono y los CAPTCHA. Claude se detiene ahí por seguridad.

**Paso 1: crear la cuenta.** Mensaje sugerido:
> Abre en mi Chrome el registro de Google y prepara una cuenta Gmail para PREDIR. Prueba en orden contacto.predir, predir.ec, predir.software y predir.soluciones. Cuando Google pida fecha de nacimiento, género, contraseña, teléfono o un código, detente y avísame para completarlo yo.

**Paso 2: cuando la cuenta exista.** Mensaje sugerido:
> Ya creé el correo X@gmail.com. Ahora: 1) ábreme web3forms.com para generar la Access Key con ese correo; 2) cuando te pase la clave, configura .env con PUBLIC_EMAIL, PUBLIC_FORM_ENDPOINT y PUBLIC_FORM_ACCESS_KEY; 3) compila y envía una prueba desde "Solicitar propuesta" y otra desde "Agendar diagnóstico"; 4) confirma que ambas llegaron al correo.

En el paso 2, Claude te pedirá que copies la clave desde tu bandeja de entrada.
