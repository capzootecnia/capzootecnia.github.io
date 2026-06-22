export type ScheduleBlock =
  | "academico"
  | "comercial"
  | "prospectiva"
  | "panel"
  | "feria"
  | "almuerzo"
  | "reconocimiento"
  | "institucional";

export type ScheduleItem = {
  time: string;
  title: string;
  speaker?: string;
  block: ScheduleBlock;
  description?: string;
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
  feria: "Feria",
  almuerzo: "Almuerzo",
  reconocimiento: "Reconocimiento",
  institucional: "Institucional"
};

export const schedule: ScheduleDay[] = [
  {
    id: "day-1",
    label: "Día 1",
    date: "Viernes 17 de julio de 2026",
    theme: "Ponencias Magistrales",
    items: [
      {
        time: "08:00 - 09:00",
        title: "Registro de participantes",
        block: "institucional"
      },
      {
        time: "09:00 - 09:20",
        title:
          "Ceremonia inaugural - Palabras del presidente del Capítulo Ingeniería Zootécnica CIP Cusco",
        block: "institucional"
      },
      {
        time: "09:20 - 09:30",
        title: "Palabras del Decano Departamental Cusco CIP",
        block: "institucional"
      },
      {
        time: "09:30 - 10:15",
        title:
          "Monitoreo automático de alpacas y llamas alimentadas en pastizales de puna húmeda",
        speaker: "Dr. Jim Cárdenas Rodríguez",
        block: "academico"
      },
      {
        time: "10:15 - 11:00",
        title:
          "Monitoreo de salud y soportabilidad de pastizales con tecnología molecular y sensores remotos",
        speaker: "Ph.D. Andrés Corsino Estrada Zúñiga",
        block: "academico"
      },
      {
        time: "11:00 - 11:15",
        title: "Receso Coffee Break",
        block: "institucional"
      },
      {
        time: "11:15 - 12:00",
        title: "Producción y manejo técnico de cuyes",
        speaker: "Ing. Guido Lezama",
        block: "academico"
      },
      {
        time: "12:00 - 12:45",
        title: "Sistemas de producción de cuyes",
        speaker: "Ing. Omar Apaza",
        block: "academico"
      },
      {
        time: "12:45 - 13:00",
        title: "Ronda de preguntas",
        block: "academico"
      },
      {
        time: "14:30 - 15:15",
        title: "San Fernando / tema por confirmar",
        block: "comercial"
      },
      {
        time: "15:15 - 16:00",
        title: "Espacio comercial por confirmar",
        block: "comercial"
      },
      {
        time: "16:00 - 16:15",
        title: "Receso",
        block: "institucional"
      },
      {
        time: "18:00 - 18:30",
        title: "Ronda de preguntas",
        block: "comercial"
      },
      {
        time: "18:30 - 19:30",
        title:
          "Ceremonia de reconocimiento a profesionales destacados de la Ingeniería Zootécnica",
        block: "reconocimiento",
        description:
          "Reconocimiento al Ing. Walter Antezana y al Ing. Dante Astete Canal."
      }
    ]
  },
  {
    id: "day-2",
    label: "Día 2",
    date: "Sábado 18 de julio de 2026",
    theme: "Feria, Prospectiva y Almuerzo",
    items: [
      {
        time: "08:30 - 09:15",
        title: "Micronutrientes en pastizales",
        speaker: "Ing. Hernán Jauregui",
        block: "prospectiva"
      },
      {
        time: "09:00 - 10:00",
        title:
          "Feria por el Día del Ingeniero Zootecnista - Apertura e inauguración",
        block: "feria"
      },
      {
        time: "09:15 - 10:15",
        title:
          "Prospectiva del Ingeniero Zootecnista a nivel internacional",
        speaker: "Ing. Alan Villegas Peña",
        block: "prospectiva"
      },
      {
        time: "10:00 - 13:00",
        title:
          "Desarrollo de la feria: stands institucionales, empresas del sector, laboratorios veterinarios y productores locales",
        block: "feria"
      },
      {
        time: "10:15 - 10:30",
        title: "Receso Coffee Break",
        block: "institucional"
      },
      {
        time: "10:30 - 11:30",
        title:
          "Legislación y ejercicio profesional del Ingeniero Zootecnista",
        speaker: "Ing. Jaime Antonio Ruiz Béjar",
        block: "prospectiva"
      },
      {
        time: "11:30 - 12:30",
        title: "Panel: Retos y oportunidades de la Ingeniería Zootécnica",
        block: "panel",
        description:
          "Participan Ing. Jaime Antonio Ruiz Béjar, Ing. Alan Villegas Peña, demás ponentes invitados e Ing. Víctor López."
      },
      {
        time: "13:00 - 15:00",
        title:
          "Almuerzo de confraternidad por el Día del Ingeniero Zootecnista",
        block: "almuerzo"
      },
      {
        time: "15:00 - 15:30",
        title: "Clausura CIP Cusco",
        block: "institucional"
      }
    ]
  }
];
