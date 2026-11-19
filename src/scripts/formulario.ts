/**
 * Formulario de contacto.
 * - Valida en el cliente con mensajes bajo cada campo.
 * - Si existe PUBLIC_FORM_ENDPOINT, envía por POST (JSON) y solo muestra éxito si el servidor responde 2xx.
 * - Si NO existe, no simula un envío: lo dice claramente y ofrece WhatsApp/correo prellenados si están configurados.
 */
type Datos = Record<string, string | string[]>;

const MSG: Record<string, (el: HTMLInputElement | HTMLTextAreaElement) => string> = {
  nombre: (el) => (el.validity.valueMissing ? 'Escribe tu nombre.' : 'El nombre parece muy corto.'),
  correo: (el) => (el.validity.valueMissing ? 'Necesitamos un correo para responderte.' : 'Revisa el correo: debe tener la forma nombre@dominio.com.'),
  telefono: () => 'Usa solo números, espacios, +, guiones o paréntesis.',
  mensaje: (el) => (el.validity.valueMissing ? 'Cuéntanos brevemente tu caso.' : 'Danos un poco más de detalle (mínimo 15 caracteres).'),
};

function init(form: HTMLFormElement) {
  const endpoint = form.dataset.endpoint?.trim() ?? '';
  const key = form.dataset.key?.trim() ?? '';
  const whatsapp = (form.dataset.whatsapp ?? '').replace(/\D/g, '');
  const email = form.dataset.email?.trim() ?? '';
  const estado = form.querySelector<HTMLElement>('[data-estado]')!;
  const boton = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const etiqueta = form.querySelector<HTMLElement>('[data-submit-label]')!;

  const error = (name: string, texto: string) => {
    const p = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
    if (p) p.textContent = texto;
  };

  const validarCampo = (el: HTMLInputElement | HTMLTextAreaElement): boolean => {
    // minlength nativo solo se evalúa tras edición del usuario; se comprueba siempre aquí.
    el.setCustomValidity('');
    const largo = el.value.trim().length;
    if (largo > 0 && el.minLength > 0 && largo < el.minLength) el.setCustomValidity('corto');
    const ok = el.checkValidity();
    el.setAttribute('aria-invalid', String(!ok));
    error(el.name, ok ? '' : (MSG[el.name]?.(el) ?? 'Revisa este campo.'));
    return ok;
  };

  const validarNecesidad = (): boolean => {
    const ok = form.querySelectorAll('input[name="necesidad"]:checked').length > 0;
    error('necesidad', ok ? '' : 'Elige al menos una opción.');
    return ok;
  };

  const campos = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[name]:not([type="checkbox"]):not([name="sitio_web"]), textarea[name]'));
  campos.forEach((el) => {
    el.addEventListener('blur', () => { if (el.value || el.required) validarCampo(el); });
    el.addEventListener('input', () => { if (el.getAttribute('aria-invalid') === 'true') validarCampo(el); });
  });
  form.querySelectorAll('input[name="necesidad"]').forEach((c) => c.addEventListener('change', validarNecesidad));

  const leer = (): Datos => {
    const fd = new FormData(form);
    return {
      nombre: String(fd.get('nombre') ?? '').trim(),
      correo: String(fd.get('correo') ?? '').trim(),
      telefono: String(fd.get('telefono') ?? '').trim(),
      negocio: String(fd.get('negocio') ?? '').trim(),
      necesidad: fd.getAll('necesidad').map(String),
      mensaje: String(fd.get('mensaje') ?? '').trim(),
    };
  };

  const resumen = (d: Datos) =>
    [
      `Hola Predir, soy ${d.nombre}${d.negocio ? ` de ${d.negocio}` : ''}.`,
      `Necesito: ${(d.necesidad as string[]).join(', ')}.`,
      `${d.mensaje}`,
      `Contacto: ${d.correo}${d.telefono ? ` · ${d.telefono}` : ''}`,
    ].join('\n');

  const mostrar = (tipo: 'ok' | 'error' | 'pendiente', html: string) => {
    estado.dataset.tipo = tipo;
    estado.innerHTML = html;
    estado.hidden = false;
  };

  const cargando = (si: boolean) => {
    form.classList.toggle('is-enviando', si);
    boton.disabled = si;
    boton.setAttribute('aria-busy', String(si));
    etiqueta.textContent = si ? 'Enviando…' : 'Enviar solicitud';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    estado.hidden = true;

    const validos = campos.map(validarCampo);
    const necesidad = validarNecesidad();
    if (validos.includes(false) || !necesidad) {
      const n = validos.filter((v) => !v).length + (necesidad ? 0 : 1);
      mostrar('error', `<p>Revisa ${n === 1 ? 'el campo marcado' : `los ${n} campos marcados`} antes de enviar.</p>`);
      const primero = form.querySelector<HTMLElement>('[aria-invalid="true"]') ?? form.querySelector<HTMLElement>('input[name="necesidad"]');
      primero?.focus();
      return;
    }

    // Trampa antispam: si se llenó, se ignora en silencio.
    if ((form.elements.namedItem('sitio_web') as HTMLInputElement)?.value) return;

    const datos = leer();

    if (!endpoint) {
      const texto = encodeURIComponent(resumen(datos));
      const acciones: string[] = [];
      if (whatsapp) acciones.push(`<a class="btn btn--primario" href="https://wa.me/${whatsapp}?text=${texto}" target="_blank" rel="noopener">Enviar por WhatsApp</a>`);
      if (email) acciones.push(`<a class="btn btn--secundario" href="mailto:${email}?subject=${encodeURIComponent('Solicitud de propuesta')}&body=${texto}">Enviar por correo</a>`);
      mostrar(
        'pendiente',
        `<p><strong>Tu mensaje no se ha enviado.</strong> El formulario todavía no está conectado a un servicio de envío.${
          acciones.length ? ' Puedes mandarlo ahora mismo por estos canales:' : ' Mientras tanto, contáctanos por nuestros canales directos.'
        }</p>${acciones.length ? `<div class="acciones">${acciones.join('')}</div>` : ''}`
      );
      return;
    }

    cargando(true);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...(key ? { access_key: key } : {}),
          subject: `Solicitud de propuesta: ${datos.nombre}${datos.negocio ? ' · ' + datos.negocio : ''}`,
          from_name: 'Web PREDIR',
          ...datos,
          necesidad: (datos.necesidad as string[]).join(', '),
          origen: location.href,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      campos.forEach((c) => c.removeAttribute('aria-invalid'));
      mostrar('ok', '<p><strong>¡Gracias! Recibimos tu solicitud.</strong> Te responderemos al correo que dejaste.</p>');
    } catch {
      mostrar('error', '<p><strong>No pudimos enviar tu mensaje.</strong> Revisa tu conexión e inténtalo de nuevo.</p>');
    } finally {
      cargando(false);
    }
  });
}

document.querySelectorAll<HTMLFormElement>('[data-form]').forEach(init);
