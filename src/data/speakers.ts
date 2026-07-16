export type SpeakerBlock =
  | "Académico"
  | "Comercial y empresarial"
  | "Prospectiva"
  | "Panel"
  | "Reconocimientos";

type Education = {
  institution: string;
  degree: string;
  period?: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

type Reference = {
  name: string;
  role: string;
  phone: string;
  email?: string;
};

export type SpeakerProfile = {
  contact?: {
    email: string;
    phone: string;
    address: string[];
  };
  summary?: string[];
  education?: Education[];
  experience?: Experience[];
  skills?: string[];
  languages?: string[];
  references?: Reference[];
};

export type Speaker = {
  slug: string;
  name: string;
  block: SpeakerBlock;
  professionalTitle: string;
  institution?: string;
  country?: string;
  topic: string;
  description: string;
  image: string;
  imagePosition?: string;
  profile?: SpeakerProfile;
};

export type PanelParticipant = {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
  profileSlug?: string;
};

const placeholder = "/images/speakers/speaker-placeholder.webp";

export const speakers: Speaker[] = [
  {
    slug: "guido-lezama",
    name: "Ing. Andrés Guido Lezama Ortiz",
    block: "Académico",
    professionalTitle: "Ingeniero Zootecnista",
    topic:
      "Crianza tecnificada de cuyes y su valor agregado para la salud humana.",
    description:
      "Consultor internacional especializado en la crianza tecnificada de cuyes, producción pecuaria y aprovechamiento sostenible de recursos.",
    image: "/images/speakers/guido-lezama.jpg",
    imagePosition: "50% 34%",
    profile: {
      summary: [
        "Consultor internacional especializado en la crianza tecnificada de cuyes y en el manejo de pastos tropicales. Cuenta con experiencia en producción pecuaria, asesoramiento técnico y difusión de conocimientos orientados a mejorar la productividad.",
        "Su trabajo pone en valor el aprovechamiento sostenible de los recursos y el aporte nutricional del cuy para la salud humana. Es expositor en congresos y seminarios especializados en producción de cuyes."
      ]
    }
  },
  {
    slug: "jim-cardenas",
    name: "Dr. Jim Cárdenas Rodríguez",
    block: "Académico",
    professionalTitle: "Docente e investigador",
    institution: "Por confirmar",
    topic:
      "Monitoreo automático de las características de comportamiento de alpacas y llamas alimentadas en pastizales de puna húmeda de los Andes centrales.",
    description:
      "Investigación aplicada al monitoreo automático y al análisis de sistemas ganaderos altoandinos.",
    image: "/images/speakers/jim-cardenas.jpg",
    imagePosition: "50% 38%"
  },
  {
    slug: "andres-estrada",
    name: "Ph.D. Andrés Corsino Estrada Zúñiga",
    block: "Académico",
    professionalTitle: "Investigador en pasturas",
    institution: "Por confirmar",
    topic:
      "Monitoreo de la salud y soportabilidad de los pastizales en ecosistemas de puna húmeda utilizando tecnología molecular y sensores remotos.",
    description:
      "Una mirada a la innovación, los sensores remotos y la sostenibilidad de los pastizales altoandinos.",
    image: "/images/speakers/andres-estrada.jpg",
    imagePosition: "50% 28%"
  },
  {
    slug: "javier-pari",
    name: "Javier Pari",
    block: "Comercial y empresarial",
    professionalTitle: "Mg. en Ciencias Empresariales · Ing. Zootecnista",
    institution: "San Fernando S.A.",
    topic: "Gestión de producción avícola y operaciones agroindustriales.",
    description:
      "Gestión de plantas de incubación, producción de broilers, reproductoras y cerdos, con foco en indicadores, equipos y mejora continua.",
    image: "/images/speakers/javier-pari.jpg",
    imagePosition: "50% 22%",
    profile: {
      contact: {
        email: "jpm.pari@gmail.com",
        phone: "984 441 096",
        address: [
          "Calle Loma Bella N.° 102",
          "Urb. Prolongación Benavides",
          "Santiago de Surco, Lima"
        ]
      },
      summary: [
        "Ing. Zootecnista y Mg. en Ciencias Empresariales. Administrador de plantas de incubación, reproductoras pesadas, broilers y cerdos; con conocimiento de la cadena productiva del pollo desde reproductoras hasta la comercialización.",
        "Su trabajo se orienta a la mejora de indicadores de producción, gestión y costos, potenciando el rendimiento de los equipos. Cuenta con sólidos conocimientos técnicos sanitarios en aves, gestión ISO 9000, Seguridad y Salud en el Trabajo y Office a nivel avanzado."
      ],
      education: [
        {
          institution: "Escuela de Post Grado USIL",
          degree: "Magíster en Ciencias Empresariales",
          period: "2018 – 2021"
        },
        {
          institution: "Universidad Católica Sede Sapientiae – DIDATUS Brasil",
          degree: "Diplomado en Nutrición y Fisiología Avícola",
          period: "2010 – 2011"
        },
        {
          institution: "Universidad Nacional Agraria La Molina",
          degree: "Ingeniero Zootecnista",
          period: "1997 – 2002"
        }
      ],
      experience: [
        {
          company: "San Fernando S.A.",
          role: "Administrador de Producción · Plantas de Incubación (Lima-Chancay)",
          period: "2023 – Actualidad",
          description:
            "Administración de plantas de incubación alquiladas mediante el control de KPI de producción. Coordinación con jefes y gerentes de plantas de incubación, y supervisión del procesado de pollo BB."
        },
        {
          company: "San Fernando S.A.",
          role: "Administrador de Producción Broilers · Granjas climatizadas",
          period: "2021 – 2022",
          description:
            "Administración de granjas climatizadas de la zona sur (Pisco-Ica), control de KPI y gestión de recursos. Responsable de programas de producción para 1.6 millones de aves."
        },
        {
          company: "San Fernando S.A.",
          role: "Administrador de Producción Broilers · Granjas franquiciadas",
          period: "2013 – 2020",
          description:
            "Gestión de la franquicia San Fernando mediante KPI de producción, coordinación con gerencias y supervisión de nuevas granjas. Entre 2 y 3.5 millones de aves en producción."
        },
        {
          company: "San Fernando S.A.",
          role: "Asistente de Investigación en Nutrición Avícola",
          period: "Noviembre de 2015 – Febrero de 2016",
          description:
            "Elaboración, ejecución y entrega de informes de pruebas de insumos y productos nutricionales; supervisión de dietas de prueba y reuniones técnicas con proveedores."
        },
        {
          company: "San Fernando S.A.",
          role: "Administrador de Producción Reproductoras Pesadas (Cañete)",
          period: "2011 – 2013",
          description:
            "Administración de centros de producción mediante KPI, con conocimiento de las líneas genéticas Cobb 500 – MX."
        },
        {
          company: "San Fernando S.A.",
          role: "Administrador de Producción Cerdos / Broilers Zona Sur",
          period: "2008 – 2010",
          description:
            "Administración de centros de producción San Fernando mediante el control de KPI de producción."
        }
      ],
      skills: [
        "Liderazgo",
        "Trabajo en equipo",
        "Negociación",
        "Capacidad de análisis",
        "Administración y dirección",
        "Planificación y organización"
      ],
      languages: ["Inglés · Intermedio", "Portugués · Básico"],
      references: [
        {
          name: "Ing. Carlos Collado Pereryra",
          role: "Gerente de Nutrición Pollos · Industrias Bachoco, México – EE. UU.",
          phone: "998 119 285"
        },
        {
          name: "Ing. Pablo Céspedes Espinoza",
          role: "Gerente Territorial ELANCO",
          email: "pcepedes@elanco.com",
          phone: "999 180 483"
        },
        {
          name: "Ing. Pierre Fournier Castillo",
          role: "Coordinador de Producción · San Fernando S.A.",
          email: "pfournierc@san-fernando.com.pe",
          phone: "968 028 827"
        },
        {
          name: "Mg. Sc. – MV. Mercedes Sailer",
          role: "Catedrático – Consultor externo · Universidad Ricardo Palma",
          phone: "998 118 668"
        },
        {
          name: "Ing. Enrique Silva Von Forell",
          role: "Gerente General · Agropecuaria Andre S.A. y Cocorico S.A.",
          phone: "963 346 926"
        },
        {
          name: "MV. Carlos Espinoza Loarte",
          role: "Jefe de Producción · Rico Pollo SAC",
          phone: "958 910 939"
        }
      ]
    }
  },
  {
    slug: "hernan-jauregui",
    name: "Ing. Hernán Jáuregui Valencia",
    block: "Prospectiva",
    professionalTitle: "Ingeniero Zootecnista · Fundador y Gerente General de Pastisal",
    institution: "Lima, Perú",
    topic: "Zootecnistas con poder: educación y negocios.",
    description:
      "Más de 25 años de trayectoria en nutrición animal, asesoramiento técnico y desarrollo de suplementos minerales para la producción pecuaria.",
    image: "/images/speakers/hernan-jauregui.jpg",
    imagePosition: "50% 22%",
    profile: {
      summary: [
        "Ingeniero Zootecnista que convirtió el conocimiento en empresa. Es fundador y Gerente General de Pastisal, con más de 25 años de trayectoria en nutrición animal.",
        "Ha desarrollado y liderado una línea propia de suplementos minerales para diferentes especies, con presencia comercial de Pastisal en diversas regiones del Perú y más del 80 % de participación.",
        "Asesora a productores pecuarios en nutrición mineral y estrategias de alimentación. Asimismo, impulsa nuevas formulaciones para cuyes, bovinos, equinos y porcinos."
      ]
    }
  },
  {
    slug: "alan-villegas",
    name: "Ing. Alan Villegas Peña",
    block: "Prospectiva",
    professionalTitle: "Mg. en Economía Agraria · Doctorando UBA",
    institution: "Universidad de Buenos Aires · Argentina",
    country: "Argentina",
    topic:
      "Perspectiva económica de la zootecnia: fortaleciendo el ejercicio profesional.",
    description:
      "Docente e investigador en economía agraria, especializado en producción animal, innovación tecnológica y valoración económica de recursos naturales.",
    image: "/images/speakers/alan-villegas.jpg",
    imagePosition: "50% 24%",
    profile: {
      summary: [
        "Alan Villegas Peña es Ingeniero Zootecnista por la Universidad Nacional de San Antonio Abad del Cusco (UNSAAC), Magíster en Economía Agraria por la Universidad de Buenos Aires (FAUBA) y doctorando en la misma casa de estudios.",
        "Es docente e investigador en la Cátedra de Economía Agraria de la Universidad de Buenos Aires, donde dicta los cursos de Costos Agrarios, Análisis de Proyectos de Inversión, Economía Agraria y Economía Aplicada al Agro y al Ambiente. También es becario doctoral del CONICET, con sede en el Instituto Nacional de Tecnología Agropecuaria (INTA).",
        "Su actividad científica se centra en la evaluación económica de enfermedades animales y sus estrategias de control, sistemas de innovación tecnológica en la cadena de camélidos sudamericanos, análisis económico de sistemas ganaderos y valoración económica de recursos naturales. Ha publicado en revistas internacionales y participa en proyectos financiados por UBA, INTA, CONICET y FONCyT."
      ],
      education: [
        {
          institution: "Universidad Nacional de San Antonio Abad del Cusco (UNSAAC)",
          degree: "Ingeniero Zootecnista"
        },
        {
          institution: "Universidad de Buenos Aires (FAUBA)",
          degree: "Magíster en Economía Agraria · Doctorando"
        }
      ]
    }
  },
  {
    slug: "jaime-ruiz",
    name: "Ing. Jaime Antonio Ruiz Béjar",
    block: "Prospectiva",
    professionalTitle: "Decano Nacional CIP",
    institution: "Colegio de Ingenieros del Perú",
    topic: "Legislación y ejercicio profesional del Ingeniero Zootecnista.",
    description:
      "Sesión sobre marco profesional, ejercicio ético y fortalecimiento institucional.",
    image: "/images/speakers/jaime-ruiz.jpg",
    imagePosition: "50% 20%"
  },
  {
    slug: "panel-retos",
    name: "Panel de especialistas invitados",
    block: "Panel",
    professionalTitle: "Panel técnico",
    institution: "CIP Cusco",
    topic: "Retos y oportunidades de la Ingeniería Zootécnica.",
    description:
      "Participan ponentes invitados y representantes institucionales del sector.",
    image: "/images/banners/card-panel.png"
  },
  {
    slug: "reconocimiento-profesionales",
    name: "Profesionales destacados",
    block: "Reconocimientos",
    professionalTitle: "Ceremonia institucional",
    institution: "Por confirmar",
    topic: "Reconocimiento a la trayectoria profesional.",
    description:
      "Ceremonia de reconocimiento a profesionales destacados de la Ingeniería Zootécnica.",
    image: placeholder
  }
];

export const panelParticipants: PanelParticipant[] = [
  {
    name: "Ing. Jaime Antonio Ruiz Béjar",
    role: "Decano Nacional CIP",
    image: "/images/speakers/jaime-ruiz.jpg",
    imagePosition: "50% 20%",
    profileSlug: "jaime-ruiz"
  },
  {
    name: "Ing. Alan Villegas Peña",
    role: "Docente e investigador · UBA",
    image: "/images/speakers/alan-villegas.jpg",
    imagePosition: "50% 24%",
    profileSlug: "alan-villegas"
  },
  {
    name: "Ing. Víctor López Durand",
    role: "Decano CIP C.D. Cusco",
    image: "/images/speakers/victor-lopez-durand.jpg",
    imagePosition: "50% 24%"
  },
  {
    name: "Ing. Docente de la UNSAAC",
    role: "Participación por confirmar",
    image: placeholder
  },
  {
    name: "Ing. Félix Boza",
    role: "Participante invitado",
    image: "/images/speakers/felix-boza.jpg",
    imagePosition: "50% 20%"
  }
];

export function getSpeakerBySlug(slug: string | undefined) {
  return speakers.find((speaker) => speaker.slug === slug);
}
