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
  registrationUrls: {
    professionals: "https://forms.gle/STMSJv81zwkXfWux7",
    students: "https://forms.gle/NHKQ6WaiFatrMg649"
  },
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
      id: "certificate-professionals",
      label: "Profesionales y público en General",
      amount: "S/ 40.00",
      description: "Costo del certificado para profesionales y público en general.",
      highlight: "Profesionales y público en general"
    },
    {
      id: "certificate-students",
      label: "Certificado Estudiantes",
      amount: "S/ 20.00",
      description: "Costo del certificado para estudiantes.",
      highlight: "Estudiantes"
    },
    {
      id: "lunch",
      label: "Almuerzo de Confraternidad",
      amount: "S/ 50.00",
      description:
        "Costo independiente para quienes deseen participar del almuerzo.",
      highlight: "Opcional"
    }
  ] satisfies PriceItem[],
  lunchNote:
    "El almuerzo es independiente del certificado y es opcional para quienes deseen participar."
};
