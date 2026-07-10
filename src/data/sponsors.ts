export type SponsorTier =
  | "principal"
  | "auspiciador"
  | "colaborador"
  | "empresa-aliada";

export type Sponsor = {
  id: string;
  name: string;
  tier: SponsorTier;
  logo: string;
  description?: string;
  website?: string;
};

// Cambia cada logo por el archivo real subido a public/images/sponsors o public/images/logos.
// Si todavía no hay logo confirmado, conserva este placeholder.
const sponsorPlaceholder = "/images/sponsors/sponsor-placeholder.webp";

export const sponsorTierLabels: Record<SponsorTier, string> = {
  principal: "Auspiciador principal",
  auspiciador: "Auspiciadores",
  "empresa-aliada": "Empresas aliadas",
  colaborador: "Colaboradores"
};

export const sponsors: Sponsor[] = [
  {
    id: "cip-cusco",
    name: "CIP Cusco",
    tier: "principal",
    logo: "/images/logos/cip-cusco.png",
    description: "Sede institucional del congreso."
  },
  {
    id: "capitulo-zootecnia",
    name: "Capítulo de Ingeniería Zootécnica",
    tier: "principal",
    logo: "/images/logos/cap-zootecnia.jpg",
    description: "Organización académica e institucional."
  },
  {
    id: "san-fernando",
    name: "San Fernando",
    tier: "auspiciador",
    logo: "/images/logos/san-fernando.png"
  },
  {
    id: "corina",
    name: "Corina",
    tier: "empresa-aliada",
    logo: "/images/logos/corina.png"
  },
  {
    id: "agp",
    name: "AGP",
    tier: "empresa-aliada",
    logo: sponsorPlaceholder
  },
  {
    id: "agrovet",
    name: "Agrovet",
    tier: "empresa-aliada",
    logo: sponsorPlaceholder
  },
  {
    id: "nuevo-auspiciador",
    name: "Nuevo auspiciador",
    tier: "colaborador",
    logo: sponsorPlaceholder,
    description: "Espacio disponible para nuevos aliados."
  }
];
