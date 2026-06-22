export type PriceItem = {
  id: string;
  label: string;
  amount: string;
  description: string;
  highlight?: string;
};

export const event = {
  name: "Congreso Macrorregional de Ingeniería Zootecnia 2026",
  subtitle: "Prospectiva del Ingeniero Zootecnista",
  motto: "Innovación y sostenibilidad en la producción animal de la región sur",
  dates: "17 y 18 de julio de 2026",
  place: "Sede institucional CIP Cusco",
  address: "Urb. Larapa Grande A-1, San Jerónimo, Cusco",
  modality: "Presencial",
  certificate: "Certificado de participación",
  // Reemplaza esta URL cuando el formulario oficial de Google Forms esté listo.
  registrationUrl: "https://forms.gle/STMSJv81zwkXfWux7",
  whatsapp: {
    label: "+51 949 311 461",
    url: "https://wa.me/51949311461",
    phoneHref: "tel:+51949311461"
  },
  socials: {
    facebook:
      "https://www.facebook.com/people/Congreso-Macro-Regional-de-Ingenier%C3%ADa-Zootecnia-2026/61590411372914/"
  },
  prices: [
    {
      id: "early",
      label: "Inscripción temprana",
      amount: "S/ 50.00",
      description: "Disponible hasta el 30 de junio de 2026.",
      highlight: "Hasta el 30 de junio"
    },
    {
      id: "regular",
      label: "Inscripción regular",
      amount: "S/ 70.00",
      description: "Vigente desde el 1 de julio de 2026.",
      highlight: "Desde el 1 de julio"
    },
    {
      id: "lunch",
      label: "Almuerzo de confraternidad",
      amount: "S/ 50.00",
      description:
        "Costo independiente para quienes deseen participar del almuerzo.",
      highlight: "Opcional"
    }
  ] satisfies PriceItem[],
  lunchNote:
    "El almuerzo es independiente de la inscripción. El participante puede inscribirse solo al congreso o al congreso + almuerzo."
};
