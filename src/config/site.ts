/**
 * Configuración central del sitio.
 * Todo dato de contacto que aún no existe se deja vacío ('') y la interfaz
 * lo muestra como "pendiente" en lugar de inventarlo.
 * Lista completa de pendientes: docs/PENDIENTES.md
 */

/** WhatsApp comercial principal (Iván González). Se puede sobrescribir con PUBLIC_WHATSAPP. */
const WHATSAPP_PRINCIPAL = '593993060553';

export const site = {
  name: 'Predir',
  legalName: 'Predir', // TODO(razón social): confirmar nombre legal cuando se constituya la empresa.
  tagline: 'Software a medida, automatización e identidad visual',
  description:
    'Predir transforma procesos manuales en sistemas digitales: inventario, ventas, facturación, automatización, web, apps e identidad visual para negocios de Loja y Ecuador.',
  locale: 'es_EC',
  city: 'Loja',
  country: 'Ecuador',
  contact: {
    /** Número de WhatsApp en formato internacional sin "+" ni espacios. */
    whatsapp: import.meta.env.PUBLIC_WHATSAPP || WHATSAPP_PRINCIPAL,
    /** Mensaje inicial del botón flotante y de los enlaces generales. */
    whatsappMensaje: 'Hola, estoy interesado en conocer más sobre las soluciones tecnológicas de PREDIR.',
    /** Correo comercial (cuenta creada el 19/11/2026). Se puede sobrescribir con PUBLIC_EMAIL. */
    email: import.meta.env.PUBLIC_EMAIL || 'contacto.predir@gmail.com',
    /**
     * Endpoint que recibe el formulario (POST JSON). Ej.: Formspree, Web3Forms, una
     * función serverless propia… Si está vacío, el formulario NO simula un envío:
     * avisa que el envío aún no está conectado y ofrece WhatsApp/correo.
     */
    formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || 'https://api.web3forms.com/submit',
    /**
     * Clave pública de Web3Forms (https://web3forms.com): se envía como "access_key" y hace que
     * los formularios lleguen directamente al correo registrado. Es pública por diseño (no es secreta).
     * Con Web3Forms: PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
     */
    formAccessKey: import.meta.env.PUBLIC_FORM_ACCESS_KEY || 'a3ef98aa-8a56-48ff-b5e4-00adbeeb520d', // Web3Forms · formulario "Web PREDIR" (contacto.predir@gmail.com)
  },
  social: {
    instagram: '', // TODO(redes): agregar URL cuando existan.
    linkedin: '',
    facebook: '',
  },
} as const;

export const nav = [
  { href: '/#soluciones', label: 'Soluciones' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#proceso', label: 'Proceso' },
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/#nosotros', label: 'Nosotros' },
] as const;

/** Enlace wa.me con mensaje prellenado. Por defecto usa el número principal. */
export function whatsappLink(message: string = site.contact.whatsappMensaje, numero: string = site.contact.whatsapp): string | null {
  const n = numero.replace(/\D/g, '');
  if (!n) return null;
  return `https://wa.me/${n}?text=${encodeURIComponent(message)}`;
}

/** Convierte 593993060553 → "099 306 0553" (formato local de Ecuador). */
export function telefonoLocal(numeroIntl: string): string {
  const d = numeroIntl.replace(/\D/g, '').replace(/^593/, '0');
  return d.length === 10 ? `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}` : d;
}
