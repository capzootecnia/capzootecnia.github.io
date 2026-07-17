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

type GeneralInfo = {
  birthDate?: string;
  email?: string;
  cipNumber?: string;
};

export type SpeakerProfile = {
  generalInfo?: GeneralInfo;
  contact?: {
    email: string;
    phone: string;
    address: string[];
  };
  summary?: string[];
  education?: Education[];
  experience?: Experience[];
  additionalInfo?: string[];
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
  topic?: string;
  description: string;
  image: string;
  imagePosition?: string;
  profileImage?: string;
  profileImagePosition?: string;
  showInSpeakers?: boolean;
  organizationLogo?: {
    src: string;
    alt: string;
  };
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
    institution: "Universidad Nacional de San Antonio Abad del Cusco",
    topic:
      "Monitoreo de la salud y soportabilidad de los pastizales en ecosistemas de puna húmeda utilizando tecnología molecular y sensores remotos.",
    description:
      "Una mirada a la innovación, los sensores remotos y la sostenibilidad de los pastizales altoandinos.",
    image: "/images/speakers/andres-estrada.webp",
    imagePosition: "50% 28%",
    profile: {
      generalInfo: {
        birthDate: "04 de febrero de 1965",
        email: "andres.estrada@unsaac.edu.pe"
      },
      summary: [
        "Ingeniero Zootecnista, magíster en Gestión en Desarrollo Sustentable y doctor en Desarrollo Humano y Sustentable. Su trayectoria integra investigación, docencia e innovación tecnológica para el desarrollo pecuario y territorial.",
        "Actualmente es docente asociado a dedicación exclusiva en la Universidad Nacional de San Antonio Abad del Cusco."
      ],
      education: [
        {
          institution: "Universidad Católica de Temuco",
          degree: "Magíster en Gestión en Desarrollo Sustentable"
        },
        {
          institution: "Universidad Bolivariana, República de Chile",
          degree: "Doctor en Desarrollo Humano y Sustentable"
        },
        {
          institution: "Universidad Nacional de San Antonio Abad del Cusco",
          degree: "Ingeniero Zootecnista"
        },
        {
          institution: "Universidad Nacional de San Antonio Abad del Cusco",
          degree: "Bachiller en Ciencias Agrarias"
        }
      ],
      experience: [
        {
          company: "Universidad Nacional de San Antonio Abad del Cusco",
          role: "Docente asociado a dedicación exclusiva",
          period: "Mayo de 2010 – Actualidad",
          description: "Investigación y docencia universitaria."
        },
        {
          company: "Centro Bartolomé de las Casas",
          role: "Investigador",
          period: "2009",
          description: "Investigación en praderas naturales, agua, territorio y cambio climático."
        },
        {
          company: "Intercooperation Fundación Suiza para el Desarrollo y la Cooperación Internacional",
          role: "Asesor en innovación tecnológica",
          period: "Agosto de 2001 – Diciembre de 2009",
          description: "Responsable del área de innovación tecnológica del proyecto MASAL, en el marco del convenio COSUDE–MINAG."
        },
        {
          company: "PISA-COPASA y PDR COPASA",
          role: "Responsable del área de innovación tecnológica pecuaria",
          period: "Febrero de 1991 – Julio de 2001",
          description: "Responsable de investigación pecuaria y del desarrollo de I+D+i en puna seca."
        }
      ]
    }
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
    image: "/images/speakers/ing.javier pari - produss.webp",
    imagePosition: "50% 22%",
    profileImage: "/images/speakers/ing-javier-pari-perfil.webp",
    profileImagePosition: "50% 30%",
    organizationLogo: {
      src: "/images/banners/banner-produss.webp",
      alt: "Logo de Produss"
    },
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
    slug: "herbert-ortiz",
    name: "Herbert Ortiz Herrera",
    block: "Comercial y empresarial",
    professionalTitle: "Ingeniero Zootecnista · Gerente de Nutrición",
    institution: "LevAnia SAC",
    topic: "Micotoxinas: el enemigo oculto, prevención y control.",
    description:
      "Especialista en nutrición animal y asesoría técnico-comercial, con 31 años de trayectoria profesional.",
    image: "/images/speakers/ing-herbert-ortiz-card.webp",
    imagePosition: "50% 22%",
    profileImage: "/images/speakers/Ing-Herbert-ortiz.webp",
    profileImagePosition: "50% 30%",
    organizationLogo: {
      src: "/images/banners/banner-levania.webp",
      alt: "Logo de LevAnia"
    },
    profile: {
      summary: [
        "Ingeniero Zootecnista egresado hace 31 años de la Universidad Nacional Agraria La Molina. Actualmente es Gerente de Nutrición de LevAnia SAC.",
        "Su trabajo se enfoca en el manejo de micotoxinas, su prevención y control, así como en la asesoría técnica y comercial para la producción animal."
      ],
      education: [
        {
          institution: "Universidad Nacional Agraria La Molina",
          degree: "Ingeniero Zootecnista",
          period: "31 años de trayectoria profesional"
        }
      ],
      experience: [
        {
          company: "LevAnia SAC",
          role: "Gerente de Nutrición",
          period: "Actualidad",
          description: "Especialista en prevención y control de micotoxinas en producción animal."
        },
        {
          company: "GLOBALVET SAC · PHARTEC SAC · AGRIBRANDS PURINA",
          role: "Asesor técnico comercial",
          period: "Trayectoria profesional",
          description: "Asesoría técnica y comercial orientada a la nutrición y producción animal."
        },
        {
          company: "PRONAMACHCS Yauyos · Gloria SA Huacho · INIA Illpa Puno · Agro Puno · CARE Perú · Avícola Cocorico (Avinca)",
          role: "Especialista y responsable de producción pecuaria",
          period: "Trayectoria profesional",
          description: "Experiencia en asistencia técnica, desarrollo productivo y gestión pecuaria."
        }
      ]
    }
  },
  {
    slug: "lizbeth-collazos",
    name: "Ing. Lizbeth Lourdes Collazos Paucar",
    block: "Panel",
    professionalTitle: "Mg. en Ciencia Animal · Doctora en Calidad y Productividad Animal",
    institution: "Universidad Nacional Autónoma de Alto Amazonas",
    description:
      "Docente investigadora especializada en nutrición de rumiantes, sistemas sostenibles de producción y mitigación del cambio climático.",
    image: "/images/speakers/lizbeth-collazos.webp",
    imagePosition: "50% 20%",
    showInSpeakers: false,
    profile: {
      summary: [
        "Ingeniera Zootecnista con maestría en Ciencia Animal y doctorado en Calidad y Productividad Animal. Su trayectoria combina investigación, innovación, docencia y vinculación con el sector productivo para fortalecer la competitividad de la producción pecuaria sostenible y resiliente frente al cambio climático.",
        "Cuenta con experiencia en ciencia animal, nutrición de rumiantes, manejo y conservación de pastos y forrajes, sistemas silvopastoriles e integrados de producción, digestión y metabolismo ruminal, emisiones de gases de efecto invernadero y ganadería climáticamente inteligente.",
        "Realizó una estancia de investigación en Agriculture and Agri-Food Canada, en Lethbridge, Canadá."
      ],
      education: [
        {
          institution: "Universidad de São Paulo",
          degree: "Doctora en Ciencias en Zootecnia · Área de especialización: Calidad y Productividad Animal",
          period: "Brasil"
        },
        {
          institution: "Universidade Estadual do Norte Fluminense Darcy Ribeiro",
          degree: "Magíster en Ciencia Animal · Área de especialización: Nutrición y Producción Animal",
          period: "Brasil"
        },
        {
          institution: "Universidad Nacional Agraria de la Selva",
          degree: "Ingeniera Zootecnista",
          period: "Perú"
        },
        {
          institution: "Universidad Nacional Agraria de la Selva",
          degree: "Bachiller en Ciencias Pecuarias",
          period: "Perú"
        }
      ],
      experience: [
        {
          company: "Universidad Nacional Autónoma de Alto Amazonas",
          role: "Docente investigadora",
          period: "Julio de 2023 – Actualidad",
          description: "Docencia e investigación vinculadas a I+D+i."
        },
        {
          company: "Universidad Nacional Autónoma de Alto Amazonas",
          role: "Directora de I+D+i",
          period: "Enero de 2026 – Actualidad",
          description: "Dirección de investigación, desarrollo e innovación."
        },
        {
          company: "Fundo Marishquilo S.A.C.",
          role: "Asesora",
          period: "Marzo de 2021 – Actualidad",
          description: "Asesoría técnica especializada."
        },
        {
          company: "Universidad Nacional de Educación Enrique Guzmán y Valle",
          role: "Docente de posgrado",
          period: "Abril de 2020 – Julio de 2023",
          description: "Docencia de posgrado vinculada a I+D+i."
        },
        {
          company: "Universidad Nacional del Callao",
          role: "Docente investigadora",
          period: "Mayo de 2020 – Julio de 2023",
          description: "Docencia e investigación vinculadas a I+D+i."
        },
        {
          company: "Universidad Nacional Mayor de San Marcos",
          role: "Investigadora postdoctoral",
          period: "Agosto de 2020 – Junio de 2022",
          description: "Investigación postdoctoral vinculada a I+D+i."
        },
        {
          company: "Universidad Alas Peruanas S.A.",
          role: "Docente",
          period: "Marzo de 2018 – Diciembre de 2019",
          description: "Docencia universitaria vinculada a I+D+i."
        },
        {
          company: "Instituto Nacional de Innovación Agraria",
          role: "Consultora",
          period: "Julio de 2019 – Diciembre de 2019",
          description: "Consultoría especializada vinculada a I+D+i."
        },
        {
          company: "Universidade de São Paulo",
          role: "Investigadora",
          period: "Abril de 2013 – Abril de 2017",
          description: "Investigación con dedicación exclusiva."
        },
        {
          company: "Agriculture and Agri-Food Canada",
          role: "Investigadora",
          period: "Abril de 2016 – Agosto de 2016",
          description: "Estancia de investigación en Lethbridge, Canadá."
        },
        {
          company: "Universidade Estadual do Norte Fluminense Darcy Ribeiro",
          role: "Investigadora",
          period: "Febrero de 2009 – Diciembre de 2010",
          description: "Investigación con dedicación exclusiva."
        },
        {
          company: "Proyecto Especial Alto Huallaga",
          role: "Jefa del área de créditos en especie",
          period: "Febrero de 2007 – Diciembre de 2008",
          description: "Gestión del área de créditos en especie."
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
    description:
      "Sesión sobre marco profesional, ejercicio ético y fortalecimiento institucional.",
    image: "/images/speakers/jaime-ruiz.jpg",
    imagePosition: "50% 20%",
    profile: {
      generalInfo: {
        birthDate: "18 de enero de 1968 · Lima",
        cipNumber: "56888"
      },
      summary: [
        "Doctor en Ciencias Veterinarias, magíster en Producción Animal e Ingeniero Zootecnista. Cuenta con una amplia trayectoria académica y de gestión universitaria, así como en la representación institucional de la profesión.",
        "Ha ejercido cargos directivos en universidades y en el Colegio de Ingenieros del Perú, impulsando la investigación, la formación de posgrado y el desarrollo de la zootecnia."
      ],
      education: [
        {
          institution: "Universidad Austral de Chile",
          degree: "Doctor en Ciencias Veterinarias",
          period: "2010"
        },
        {
          institution: "Universidad Nacional Agraria La Molina",
          degree: "Magíster en Producción Animal",
          period: "1999"
        },
        {
          institution: "Universidad Nacional Agraria La Molina",
          degree: "Ingeniero Zootecnista",
          period: "1997"
        },
        {
          institution: "Universidad Nacional Agraria La Molina",
          degree: "Bachiller en Ciencias: Zootecnia",
          period: "1992"
        },
        {
          institution: "Conservatorio Nacional de Música",
          degree: "Especialidad: Trompeta",
          period: "1986 – 1990"
        },
        {
          institution: "CEP Peruano Chino 10 de Octubre",
          degree: "Educación secundaria",
          period: "1980 – 1984"
        },
        {
          institution: "CEP Nuestra Señora de la Merced",
          degree: "Educación primaria",
          period: "1974"
        }
      ],
      experience: [
        {
          company: "Universidad Nacional de Huancavelica",
          role: "Director de la Escuela de Posgrado",
          period: "2024 – Actualidad",
          description: "Dirección de la Escuela de Posgrado de la UNH."
        },
        {
          company: "Universidad Nacional de Huancavelica · Escuela Profesional de Zootecnia",
          role: "Docente principal",
          period: "1997 – Actualidad",
          description: "Docencia universitaria en la Escuela Profesional de Zootecnia."
        },
        {
          company: "Universidad Nacional de Moquegua",
          role: "Vicepresidente de Investigación",
          period: "2021 – 2023",
          description: "Gestión y promoción de la investigación universitaria."
        },
        {
          company: "Universidad Nacional Autónoma de Huanta",
          role: "Vicepresidente de Investigación",
          period: "2018 – 2019",
          description: "Gestión de la investigación institucional."
        },
        {
          company: "Colegio de Ingenieros del Perú",
          role: "Director tesorero nacional",
          period: "2022 – 2024",
          description: "Gestión institucional a nivel nacional."
        },
        {
          company: "Colegio de Ingenieros del Perú",
          role: "Director protesorero nacional",
          period: "2019 – 2021",
          description: "Gestión institucional a nivel nacional."
        },
        {
          company: "CIP Consejo Departamental Huancavelica",
          role: "Decano",
          period: "2013 – 2015",
          description: "Representación y gestión del consejo departamental."
        },
        {
          company: "Capítulo de Zootecnia · CIP CD Huancavelica",
          role: "Presidente",
          period: "2008 – 2009",
          description: "Dirección del capítulo profesional de zootecnia."
        }
      ],
      additionalInfo: [
        "Investigador RENACYT Nivel III (CONCYTEC).",
        "Director del Departamento Académico de Zootecnia de la UNH en tres oportunidades.",
        "Director del Centro Preuniversitario de la UNH (2011).",
        "Docente de posgrado en la Universidad Nacional del Altiplano, Universidad Nacional Hermilio Valdizán, Universidad Nacional Agraria La Molina y Universidad Nacional de Huancavelica."
      ]
    }
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
    image: "/images/banners/card-panel.webp"
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
    name: "Ing. Lizbeth Lourdes Collazos Paucar",
    role: "Docente investigadora · UNAAA",
    image: "/images/speakers/lizbeth-collazos.webp",
    imagePosition: "50% 20%",
    profileSlug: "lizbeth-collazos"
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
