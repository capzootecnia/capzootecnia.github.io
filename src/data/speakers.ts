export type SpeakerBlock =
  | "academico"
  | "comercial"
  | "prospectiva"
  | "panel"
  | "reconocimiento";

export type Speaker = {
  id: string;
  name: string;
  block: SpeakerBlock;
  title?: string;
  institution?: string;
  country?: string;
  topic: string;
  description: string;
  image: string;
  phone?: string;
  featured?: boolean;
};

// Cambia cada imagen por el archivo real subido a public/images/speakers.
// Si todavia no hay foto confirmada, conserva este placeholder.
const placeholder = "/images/speakers/speaker-placeholder.webp";

export const speakerBlocks: Record<SpeakerBlock, string> = {
  academico: "Academico",
  comercial: "Comercial y Empresarial",
  prospectiva: "Prospectiva",
  panel: "Panel",
  reconocimiento: "Reconocimientos"
};

export const speakers: Speaker[] = [
  {
    id: "jim-cardenas",
    name: "Dr. Jim Cardenas Rodriguez",
    block: "academico",
    title: "Docente / Investigador",
    institution: "Por confirmar",
    topic:
      "Monitoreo automatico de las caracteristicas de comportamiento de alpacas y llamas alimentadas en pastizales de puna humeda de los Andes centrales.",
    description:
      "Ponencia orientada al uso de monitoreo automatico y analisis aplicado en sistemas altoandinos.",
    image: placeholder,
    featured: true
  },
  {
    id: "andres-estrada",
    name: "Ph.D. Andres Corsino Estrada Zuniga",
    block: "academico",
    title: "Investigador en pasturas",
    institution: "Por confirmar",
    topic:
      "Monitoreo de la salud y soportabilidad de los pastizales en ecosistemas de puna humeda utilizando tecnologia molecular y sensores remotos.",
    description:
      "Tema enfocado en innovacion, sensores remotos y sostenibilidad de pastizales de puna humeda.",
    image: placeholder,
    featured: true
  },
  {
    id: "san-fernando",
    name: "San Fernando",
    block: "comercial",
    title: "Empresa invitada",
    institution: "San Fernando",
    topic: "Tema por confirmar.",
    description:
      "Espacio empresarial para compartir soluciones y perspectivas del sector.",
    image: placeholder
  },
  {
    id: "hernan-jauregui",
    name: "Ing. Hernan Jauregui",
    block: "prospectiva",
    title: "Ponente invitado",
    institution: "Por confirmar",
    topic: "Micronutrientes en pastizales.",
    description:
      "Perspectiva tecnica sobre la nutricion de pastizales y su impacto en produccion animal.",
    image: placeholder,
    phone: "+51 999 929 222",
    featured: true
  },
  {
    id: "alan-villegas",
    name: "Ing. Alan Villegas Pena",
    block: "prospectiva",
    title: "Ponente invitado",
    institution: "UBA / Argentina",
    country: "Argentina",
    topic: "Prospectiva del Ingeniero Zootecnista a nivel internacional.",
    description:
      "Mirada internacional sobre oportunidades profesionales y evolucion de la Ingenieria Zootecnica.",
    image: placeholder,
    phone: "+54 9 11 2872-4167",
    featured: true
  },
  {
    id: "jaime-ruiz",
    name: "Ing. Jaime Antonio Ruiz Bejar",
    block: "prospectiva",
    title: "Decano Nacional CIP",
    institution: "Colegio de Ingenieros del Peru",
    topic: "Legislacion y ejercicio profesional del Ingeniero Zootecnista.",
    description:
      "Sesion sobre marco profesional, ejercicio etico y fortalecimiento institucional.",
    image: placeholder,
    phone: "+51 945 385 501",
    featured: true
  },
  {
    id: "panel-retos",
    name: "Panel de especialistas invitados",
    block: "panel",
    title: "Panel tecnico",
    institution: "CIP Cusco",
    topic: "Retos y oportunidades de la Ingenieria Zootecnica.",
    description:
      "Participan ponentes invitados y representantes institucionales del sector.",
    image: placeholder
  },
  {
    id: "reconocimiento-profesionales",
    name: "Profesionales destacados",
    block: "reconocimiento",
    title: "Ceremonia institucional",
    institution: "Por confirmar",
    topic: "Reconocimiento a la trayectoria profesional.",
    description:
      "Ceremonia de reconocimiento a profesionales destacados de la Ingenieria Zootecnica.",
    image: placeholder
  }
];
