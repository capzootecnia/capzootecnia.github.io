export type SponsorTier =
  | "principal"
  | "auspiciador"
  | "colaborador"
  | "empresa-expositora";

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
  "empresa-expositora": "Empresas expositoras",
  colaborador: "Colaboradores"
};

export const sponsors: Sponsor[] = [
  {
    id: "cip-cusco",
    name: "CIP Cusco",
    tier: "principal",
    logo: "/images/logos/cip-cusco.webp",
    description: "Sede institucional del congreso."
  },
  {
    id: "capitulo-zootecnia",
    name: "Capítulo de Ingeniería Zootécnica",
    tier: "principal",
    logo: "/images/logos/capitulo-zootecnia.webp",
    description: "Organización académica e institucional."
  },
  {
    id: "san-fernando",
    name: "San Fernando",
    tier: "auspiciador",
    logo: sponsorPlaceholder
  },
  {
    id: "corina",
    name: "Corina",
    tier: "empresa-expositora",
    logo: sponsorPlaceholder
  },
  {
    id: "agp",
    name: "AGP",
    tier: "empresa-expositora",
    logo: sponsorPlaceholder
  },
  {
    id: "agrovet",
    name: "Agrovet",
    tier: "empresa-expositora",
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
