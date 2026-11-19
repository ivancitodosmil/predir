/**
 * Contenido editable del sitio. Cambia aquí los textos sin tocar los componentes.
 * Regla: nada de clientes, cifras, títulos ni resultados inventados.
 * Tono: directo, corto, orientado al beneficio del cliente.
 */

export type Problema = { id: string; hoy: string; detalle: string; con: string; icono: string };

export const problemas: Problema[] = [
  {
    id: 'inventario',
    icono: 'box',
    hoy: 'Inventario y ventas en cuadernos o Excel',
    detalle: 'Nadie sabe cuánto queda ni qué se vendió hasta revisarlo todo a mano.',
    con: 'Inventario, ventas y facturas al día en un solo sistema.',
  },
  {
    id: 'informacion',
    icono: 'chart',
    hoy: 'Decides sin datos',
    detalle: 'Saber qué se vende o quién te debe toma horas.',
    con: 'Reportes claros al instante, desde tu celular.',
  },
  {
    id: 'repetitivo',
    icono: 'repeat',
    hoy: 'Las mismas tareas, todos los días',
    detalle: 'Copiar datos, armar reportes y enviar recordatorios uno por uno.',
    con: 'Se hacen solas. Tu equipo se dedica a vender.',
  },
  {
    id: 'digital',
    icono: 'device',
    hoy: 'Tu negocio no se ve profesional en internet',
    detalle: 'Sin web ni catálogo, y con una imagen improvisada.',
    con: 'Una web y una marca coherentes donde te encuentran y te escriben.',
  },
];

export type Servicio = {
  id: string;
  numero: string;
  linea: string;
  titulo: string;
  texto: string;
  incluye: string[];
  visual: 'software' | 'gestion' | 'automatizacion' | 'identidad';
  /** Imagen original generada con IA (public/img/<imagen>-<ancho>.webp). */
  imagen: string;
};

/** Los 6 servicios originales se agrupan en 4 frentes comerciales + la consultoría como puerta de entrada. */
export const servicios: Servicio[] = [
  {
    id: 'gestion',
    numero: '01',
    linea: 'Ordena',
    titulo: 'Sistemas de gestión',
    texto: 'Inventario, ventas, compras y facturación conectados. Sabes qué tienes, qué vendiste y qué falta.',
    incluye: ['Inventario', 'Ventas y caja', 'Compras', 'Facturación', 'Reportes'],
    visual: 'gestion',
    imagen: 'servicio-gestion',
  },
  {
    id: 'automatizacion',
    numero: '02',
    linea: 'Automatiza',
    titulo: 'Automatización de procesos',
    texto: 'Las tareas que tu equipo repite cada día pasan a hacerse solas, sin errores de copia.',
    incluye: ['Reportes automáticos', 'Avisos y recordatorios', 'Integraciones'],
    visual: 'automatizacion',
    imagen: 'servicio-automatizacion',
  },
  {
    id: 'software',
    numero: '03',
    linea: 'Construye',
    titulo: 'Software a medida, web y apps',
    texto: 'Plataformas web, aplicaciones y herramientas internas hechas para tu forma de trabajar.',
    incluye: ['Sistemas web', 'Apps móviles', 'Sitios y catálogos'],
    visual: 'software',
    imagen: 'servicio-software',
  },
  {
    id: 'identidad',
    numero: '04',
    linea: 'Destaca',
    titulo: 'Identidad y línea gráfica',
    texto: 'Logo, colores y piezas listas para usar. Tu marca se ve tan profesional como tu trabajo.',
    incluye: ['Logotipo', 'Manual de marca', 'Redes sociales', 'Papelería'],
    visual: 'identidad',
    imagen: 'servicio-identidad',
  },
];

export const consultoria = {
  titulo: '¿No sabes por dónde empezar?',
  texto: 'Analizamos tu negocio y te decimos qué conviene digitalizar primero. Sin compromiso.',
};

export type Paso = { n: string; fase: string; titulo: string; texto: string; visual: 'descubrir' | 'disenar' | 'desarrollar' | 'desplegar' | 'soporte' };

export const proceso: Paso[] = [
  { n: '01', fase: 'Descubrimiento', titulo: 'Conocemos tu negocio', texto: 'Vemos cómo se trabaja hoy y dónde se pierde tiempo.', visual: 'descubrir' },
  { n: '02', fase: 'Diseño', titulo: 'Prototipo de la solución', texto: 'Ves las pantallas y el alcance antes de escribir código.', visual: 'disenar' },
  { n: '03', fase: 'Desarrollo', titulo: 'Construcción por etapas', texto: 'Programamos y te entregamos avances para que los pruebes.', visual: 'desarrollar' },
  { n: '04', fase: 'Implementación', titulo: 'Puesta en marcha', texto: 'Publicamos el sistema, migramos tus datos y capacitamos a tu equipo.', visual: 'desplegar' },
  { n: '05', fase: 'Soporte', titulo: 'Acompañamiento continuo', texto: 'Medimos, corregimos y sumamos lo que tu negocio necesite.', visual: 'soporte' },
];

export type Socio = {
  id: string;
  nombre: string;
  cargo: string;
  enfoque: string[];
  bio: string;
  /** Base de la foto en /public/equipo/ (se sirven <base>-480.webp y <base>-960.webp, 4:5). Vacío = marco provisional. */
  foto: string;
  /** WhatsApp en formato internacional sin "+" (Ecuador: 593 + número sin el 0 inicial). */
  whatsapp: string;
  mitad: 'verde' | 'coral';
};

export const socios: Socio[] = [
  {
    id: 'ivan',
    nombre: 'Iván González',
    cargo: 'Desarrollador de Software',
    enfoque: ['Desarrollo de sistemas', 'Arquitectura de software', 'Automatización', 'Soluciones tecnológicas'],
    bio: 'Diseña la arquitectura de cada sistema, lo programa y automatiza lo que antes se hacía a mano.',
    foto: '/equipo/ivan-gonzalez',
    whatsapp: '593993060553',
    mitad: 'verde',
  },
  {
    id: 'fabian',
    nombre: 'Fabián Galarza',
    cargo: 'Director de Diseño y Línea Gráfica',
    enfoque: ['Identidad visual', 'Diseño gráfico', 'Branding', 'Dirección creativa'],
    bio: 'Crea identidades visuales y dirige el diseño de cada interfaz para que se vea y se use bien.',
    foto: '/equipo/fabian-galarza',
    whatsapp: '593979629635',
    mitad: 'coral',
  },
];

/** Proyectos: vacío a propósito hasta tener material y autorización de cada cliente. */
export type Proyecto = {
  cliente: string;
  sector: string;
  titulo: string;
  problema: string;
  solucion: string;
  resultado: string;
  imagen: string;
  servicios: string[];
};
export const proyectos: Proyecto[] = [];

/**
 * Logos de clientes en /public/clientes/, mostrados tal cual (con su nombre y su fondo original).
 * `fondo` = color del borde del logo, para rellenar el recuadro sin recortar nada.
 * `ejemplo: true` = logo de relleno diseñado por Predir a pedido; confirmar que es cliente real
 * o reemplazarlo antes de publicar el sitio.
 */
export type Cliente = { nombre: string; logo: string; ancho: number; alto: number; fondo: string; ejemplo?: boolean };
export const clientes: Cliente[] = [
  { nombre: 'Ferre Vertikal G&L, ferretería y materiales de construcción', logo: '/clientes/ferre-vertikal-gl.webp', ancho: 640, alto: 320, fondo: '#FEFEFE' },
  { nombre: 'Galarza Armijos & Asociados', logo: '/clientes/galarza-armijos.webp', ancho: 660, alto: 305, fondo: '#0B0B0C' },
  { nombre: "Restobar D'Vlas, cocina, música y tragos", logo: '/clientes/restobar-dvlas.webp', ancho: 305, alto: 280, fondo: '#6B0F1A' },
  { nombre: 'Picantería Andrea', logo: '/clientes/picanteria-andrea.svg', ancho: 480, alto: 240, fondo: '#FBF1E3', ejemplo: true },
  { nombre: 'Boutique Cariñosas', logo: '/clientes/boutique-carinosas.svg', ancho: 480, alto: 240, fondo: '#F7E3E8', ejemplo: true },
  { nombre: 'Peluquería Estilo', logo: '/clientes/peluqueria-estilo.svg', ancho: 480, alto: 240, fondo: '#141414', ejemplo: true },
];

export const faq = [
  {
    q: '¿Cuánto cuesta un sistema a medida?',
    a: 'Depende de los procesos que abarque. Tras una conversación y un diagnóstico te enviamos una propuesta con alcance, etapas y valor cerrado.',
  },
  {
    q: '¿Trabajan con negocios pequeños?',
    a: 'Sí. Ferreterías, tiendas, distribuidoras, consultorios y emprendimientos: diseñamos a la escala de cada negocio.',
  },
  {
    q: '¿Qué pasa con mi información en Excel o en papel?',
    a: 'La migramos al nuevo sistema. No empiezas de cero.',
  },
  {
    q: '¿Puedo contratar solo el diseño de marca?',
    a: 'Sí. Y si luego necesitas un sistema o una web, ya tendrá tu marca aplicada.',
  },
];

/** Misión y visión (versión final, revisada con /humanizer y /remove-ai-marks). */
export const mision = {
  borrador: false,
  mision:
    'Desarrollamos software a medida e identidades visuales para que los negocios de Loja y del Ecuador dejen los procesos manuales y tomen decisiones con información confiable.',
  vision:
    'Ser el estudio de software y diseño al que acuden los negocios del sur del Ecuador cuando deciden digitalizarse.',
};

/**
 * Tecnologías con las que trabajamos (logos oficiales en /public/tech/).
 * Revisar la lista y dejar solo las que el equipo usa de verdad.
 */
export type Tec = { nombre: string; icono: string; w: number; h: number };
export const tecnologias: { grupo: string; items: Tec[] }[] = [
  { grupo: 'Frontend', items: [
    { nombre: 'React', icono: 'react', w: 40, h: 36 },
    { nombre: 'Astro', icono: 'astro', w: 32, h: 40 },
    { nombre: 'TypeScript', icono: 'typescript', w: 40, h: 40 },
    { nombre: 'JavaScript', icono: 'javascript', w: 40, h: 40 },
    { nombre: 'Tailwind CSS', icono: 'tailwindcss', w: 40, h: 24 },
  ] },
  { grupo: 'Backend y bases de datos', items: [
    { nombre: 'Node.js', icono: 'nodejs', w: 35, h: 40 },
    { nombre: 'Python', icono: 'python', w: 40, h: 40 },
    { nombre: 'PostgreSQL', icono: 'postgres', w: 39, h: 40 },
    { nombre: 'Supabase', icono: 'supabase', w: 39, h: 40 },
    { nombre: 'Firebase', icono: 'firebase', w: 32, h: 40 },
  ] },
  { grupo: 'Nube y despliegue', items: [
    { nombre: 'AWS', icono: 'aws', w: 40, h: 24 },
    { nombre: 'Docker', icono: 'docker', w: 40, h: 29 },
    { nombre: 'GitHub', icono: 'github', w: 40, h: 39 },
    { nombre: 'Vercel', icono: 'vercel', w: 40, h: 35 },
  ] },
  { grupo: 'Apps móviles e IA', items: [
    { nombre: 'React Native', icono: 'react', w: 40, h: 36 },
    { nombre: 'Expo', icono: 'expo', w: 40, h: 36 },
    { nombre: 'Gemini', icono: 'gemini', w: 40, h: 40 },
  ] },
  { grupo: 'Datos y BI', items: [
    { nombre: 'Power BI', icono: 'power-bi', w: 30, h: 40 },
    { nombre: 'Tableau', icono: 'tableau', w: 40, h: 39 },
    { nombre: 'Excel', icono: 'xlsx', w: 40, h: 40 },
    { nombre: 'Streamlit', icono: 'streamlit', w: 40, h: 22 },
  ] },
  { grupo: 'Diseño', items: [
    { nombre: 'Figma', icono: 'figma', w: 27, h: 40 },
    { nombre: 'Illustrator', icono: 'illustrator', w: 40, h: 39 },
    { nombre: 'Photoshop', icono: 'photoshop', w: 40, h: 39 },
  ] },
];
