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
// Si todavía no hay foto confirmada, conserva este placeholder.
const placeholder = "/images/speakers/speaker-placeholder.webp";

export const speakerBlocks: Record<SpeakerBlock, string> = {
  academico: "Académico",
  comercial: "Comercial y Empresarial",
  prospectiva: "Prospectiva",
  panel: "Panel",
  reconocimiento: "Reconocimientos"
};

export const speakers: Speaker[] = [
  {
    id: "jim-cardenas",
    name: "Dr. Jim Cárdenas Rodríguez",
    block: "academico",
    title: "Docente / Investigador",
    institution: "Por confirmar",
    topic:
      "Monitoreo automático de las características de comportamiento de alpacas y llamas alimentadas en pastizales de puna húmeda de los Andes centrales.",
    description:
      "Ponencia orientada al uso de monitoreo automático y análisis aplicado en sistemas altoandinos.",
    image: placeholder,
    featured: true
  },
  {
    id: "andres-estrada",
    name: "Ph.D. Andrés Corsino Estrada Zúñiga",
    block: "academico",
    title: "Investigador en pasturas",
    institution: "Por confirmar",
    topic:
      "Monitoreo de la salud y soportabilidad de los pastizales en ecosistemas de puna húmeda utilizando tecnología molecular y sensores remotos.",
    description:
      "Tema enfocado en innovación, sensores remotos y sostenibilidad de pastizales de puna húmeda.",
    image: placeholder,
    featured: true
  },
  {
    id: "guido-lezama",
    name: "Ing. Guido Lezama",
    block: "academico",
    title: "Especialista invitado",
    institution: "Por confirmar",
    topic: "Producción y manejo técnico de cuyes.",
    description:
      "Sesión técnica sobre criterios de manejo productivo para sistemas de cuyes.",
    image: placeholder
  },
  {
    id: "omar-apaza",
    name: "Ing. Omar Apaza",
    block: "academico",
    title: "Especialista invitado",
    institution: "Por confirmar",
    topic: "Sistemas de producción de cuyes.",
    description:
      "Exposición dedicada a modelos productivos, eficiencia y buenas prácticas.",
    image: placeholder
  },
  {
    id: "consuelo-san-fernando",
    name: "Sra. Consuelo / San Fernando",
    block: "comercial",
    title: "Representante comercial",
    institution: "San Fernando",
    topic: "Tema por confirmar.",
    description:
      "Espacio empresarial para compartir soluciones y perspectivas del sector.",
    image: placeholder
  },
  {
    id: "hernan-jauregui",
    name: "Ing. Hernán Jauregui",
    block: "prospectiva",
    title: "Ponente invitado",
    institution: "Por confirmar",
    topic: "Micronutrientes en pastizales.",
    description:
      "Perspectiva técnica sobre la nutrición de pastizales y su impacto en producción animal.",
    image: placeholder,
    phone: "+51 999 929 222",
    featured: true
  },
  {
    id: "alan-villegas",
    name: "Ing. Alan Villegas Peña",
    block: "prospectiva",
    title: "Ponente invitado",
    institution: "UBA / Argentina",
    country: "Argentina",
    topic: "Prospectiva del Ingeniero Zootecnista a nivel internacional.",
    description:
      "Mirada internacional sobre oportunidades profesionales y evolución de la Ingeniería Zootécnica.",
    image: placeholder,
    phone: "+54 9 11 2872-4167",
    featured: true
  },
  {
    id: "jaime-ruiz",
    name: "Ing. Jaime Antonio Ruiz Béjar",
    block: "prospectiva",
    title: "Decano Nacional CIP",
    institution: "Colegio de Ingenieros del Perú",
    topic: "Legislación y ejercicio profesional del Ingeniero Zootecnista.",
    description:
      "Sesión sobre marco profesional, ejercicio ético y fortalecimiento institucional.",
    image: placeholder,
    phone: "+51 945 385 501",
    featured: true
  },
  {
    id: "panel-retos",
    name: "Panel de especialistas invitados",
    block: "panel",
    title: "Panel técnico",
    institution: "CIP Cusco",
    topic: "Retos y oportunidades de la Ingeniería Zootécnica.",
    description:
      "Participan ponentes invitados e Ing. Víctor López, Decano del Colegio de Ingenieros del Perú - Consejo Departamental Cusco.",
    image: placeholder
  },
  {
    id: "walter-antezana",
    name: "Ing. Walter Antezana",
    block: "reconocimiento",
    title: "Profesional destacado",
    institution: "Por confirmar",
    topic: "Reconocimiento a trayectoria profesional.",
    description:
      "Ceremonia de reconocimiento a profesionales destacados de la Ingeniería Zootécnica.",
    image: placeholder
  },
  {
    id: "dante-astete",
    name: "Ing. Dante Astete Canal",
    block: "reconocimiento",
    title: "Profesional destacado",
    institution: "Por confirmar",
    topic: "Reconocimiento a trayectoria profesional.",
    description:
      "Ceremonia de reconocimiento a profesionales destacados de la Ingeniería Zootécnica.",
    image: placeholder
  }
];
