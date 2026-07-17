export type ScheduleBlock =
  | "academico"
  | "comercial"
  | "prospectiva"
  | "panel"
  | "almuerzo"
  | "reconocimiento"
  | "institucional";

export type ScheduleItem = {
  time: string;
  title: string;
  speaker?: string;
  block: ScheduleBlock;
  description?: string;
  section?: string;
};

export type ScheduleDay = {
  id: "day-1" | "day-2";
  label: string;
  date: string;
  theme: string;
  items: ScheduleItem[];
};

export const blockLabels: Record<ScheduleBlock, string> = {
  academico: "Académico",
  comercial: "Comercial",
  prospectiva: "Prospectiva",
  panel: "Panel",
  almuerzo: "Almuerzo",
  reconocimiento: "Reconocimiento",
  institucional: "Institucional"
};

export const schedule: ScheduleDay[] = [
  {
    id: "day-1",
    label: "Día 1",
    date: "Viernes 17 de julio de 2026",
    theme: "Bloques académico, empresarial e investigación",
    items: [
      {
        time: "08:00 - 09:00",
        title: "Registro de participantes",
        speaker: "Comisión Organizadora",
        block: "institucional",
        section: "Bloque académico - empresarial"
      },
      {
        time: "09:00 - 09:10",
        title: "Ceremonia inaugural – Junta Directiva del Capítulo de Ingeniería Zootécnica CIP Cusco",
        speaker: "Junta Directiva",
        block: "institucional"
      },
      {
        time: "09:10 - 09:20",
        title: "Palabras del Decano Nacional del Colegio de Ingenieros del Perú",
        speaker: "Ing. Víctor López Durand",
        block: "institucional"
      },
      {
        time: "09:20 - 09:30",
        title: "Palabras del Decano Nacional del Colegio de Ingenieros del Perú",
        speaker: "Ing. Jaime Antonio Ruiz Béjar (Lima)",
        block: "institucional"
      },
      {
        time: "09:30 - 10:00",
        title: "Monitoreo automático de las características de comportamiento de alpacas y llamas alimentadas en pastizales de puna húmeda de los Andes centrales",
        speaker: "Dr. Jim Cárdenas Rodríguez",
        block: "academico"
      },
      {
        time: "10:00 - 10:30",
        title: "Presentación del Centro Experimental Tecnológico de AGP Semillas en Tinta – Canchis",
        speaker: "Ing. Yony Ernesto Huichi Oliva",
        block: "academico"
      },
      {
        time: "10:30 - 11:15",
        title: "Micronutrientes en la ganadería peruana (experiencia)",
        speaker: "Ing. Hernán Jáuregui Valencia (Lima)",
        block: "comercial"
      },
      {
        time: "11:15 - 11:30",
        title: "Coffee break",
        block: "institucional"
      },
      {
        time: "11:30 - 12:00",
        title: "Micotoxinas, el enemigo oculto, prevención y control",
        speaker: "Ing. Herbert Ortiz Herrera",
        block: "comercial"
      },
      {
        time: "12:00 - 12:30",
        title: "Arranque perfecto: claves de manejo en la primera semana de crianza de aves",
        speaker: "Ing. Javier Pari (Lima)",
        block: "comercial"
      },
      {
        time: "12:30 - 13:00",
        title: "Ceremonia de reconocimiento a Ingenieros Zootecnistas Destacados",
        speaker: "Ing. Jaime Ruiz Béjar",
        block: "reconocimiento"
      },
      {
        time: "14:00 - 14:45",
        title: "Crianza tecnificada de cuyes y su valor nutricional para la salud humana",
        speaker: "Ing. Guido Lezama Ortiz",
        block: "academico",
        section: "Bloque de investigación"
      },
      {
        time: "14:45 - 15:00",
        title: "Ronda de preguntas",
        speaker: "Moderador",
        block: "institucional"
      },
      {
        time: "15:00 - 15:45",
        title: "Monitoreo de la salud y soportabilidad de los pastizales en ecosistemas de puna húmeda utilizando la combinación de tecnología molecular y sensores remotos",
        speaker: "Ph.D. Andrés Corsino Estrada Zúñiga",
        block: "academico"
      },
      {
        time: "15:45 - 16:00",
        title: "Ronda de preguntas",
        speaker: "Moderador",
        block: "institucional"
      }
    ]
  },
  {
    id: "day-2",
    label: "Día 2",
    date: "Sábado 18 de julio de 2026",
    theme: "Prospectiva, panel y cierre institucional",
    items: [
      {
        time: "08:30 - 09:30",
        title: "Registro de participantes",
        speaker: "Comisión Organizadora",
        block: "institucional",
        section: "Bloque prospectiva del Ingeniero Zootecnista"
      },
      {
        time: "09:30 - 10:15",
        title: "Prospectiva del Ingeniero Zootecnista – Universidad de Buenos Aires (UBA)",
        speaker: "Ing. Alan Villegas Peña (Argentina)",
        block: "prospectiva"
      },
      {
        time: "10:15 - 10:30",
        title: "Coffee break",
        speaker: "Comisión Organizadora",
        block: "institucional"
      },
      {
        time: "10:30 - 11:15",
        title: "Legislación y ejercicio profesional del Ingeniero Zootecnista",
        speaker: "Ing. Jaime Antonio Ruiz Béjar (Lima) – Decano CIP Consejo Nacional",
        block: "prospectiva"
      },
      {
        time: "11:15 - 11:30",
        title: "Ronda de preguntas",
        speaker: "Moderador",
        block: "institucional"
      },
      {
        time: "11:30 - 12:30",
        title: "Panel: Retos y oportunidades de la Ingeniería Zootécnica",
        speaker: "Ponentes y panelistas",
        block: "panel",
        section: "Panel: retos y oportunidades de la Ingeniería Zootécnica",
        description: "Participan: Ing. Jaime Antonio Ruiz Béjar (CIP CN), Ing. Alan Villegas Peña (UBA), Ing. Víctor López Durand (CIP Cusco), Mg. Walter Vergara Abad (UNSAAC), Ing. Lizbeth Collazos Paucar (UNAAA) e Ing. Félix Boza Huamán (GORE Cusco)."
      },
      {
        time: "12:30 - 13:00",
        title: "Ceremonia de clausura",
        speaker: "CIP Cusco",
        block: "institucional"
      },
      {
        time: "13:00 - 15:00",
        title: "Almuerzo de confraternidad por el Día del Ingeniero Zootecnista",
        speaker: "Participantes",
        block: "almuerzo",
        description: "Previa inscripción."
      }
    ]
  }
];
