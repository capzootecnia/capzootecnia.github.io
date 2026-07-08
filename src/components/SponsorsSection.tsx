import { event } from "../data/event";
import { sponsors, sponsorTierLabels, type SponsorTier } from "../data/sponsors";

const tierOrder: SponsorTier[] = [
  "principal",
  "auspiciador",
  "empresa-aliada",
  "colaborador"
];

export default function SponsorsSection() {
  return (
    <section id="auspiciadores" className="section-divider bg-cip-warm py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="luxury-kicker">Instituciones y marcas aliadas</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-cip-navy sm:text-4xl">
              Presencia empresarial e institucional vinculada al sector pecuario.
            </h2>
            <p className="mt-5 text-base leading-8 text-cip-body">
              El congreso abre un espacio para auspiciadores, empresas aliadas, laboratorios, productores y organizaciones del rubro.
            </p>
            <a
              href={event.whatsapp.url}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-7 inline-flex rounded-full bg-cip-navy px-6 py-4 text-sm font-black text-cip-cream shadow-soft transition hover:-translate-y-0.5 hover:bg-cip-green"
            >
              Sé parte como auspiciador o aliado
            </a>
          </div>

          <div className="rounded-[2rem] border border-cip-border bg-cip-paper/80 p-5 shadow-soft">
            <div className="space-y-8">
              {tierOrder.map((tier) => {
                const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === tier);

                return (
                  <div key={tier}>
                    <h3 className="text-sm font-black uppercase tracking-[0.16em] text-cip-gold">
                      {sponsorTierLabels[tier]}
                    </h3>
                    <div className={`mt-4 grid gap-4 ${tier === "principal" ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
                      {tierSponsors.map((sponsor) => (
                        <article
                          key={sponsor.id}
                          className={`rounded-3xl border border-cip-border bg-cip-cream p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft ${
                            tier === "principal" ? "min-h-44" : "min-h-32"
                          }`}
                        >
                          <img
                            src={sponsor.logo}
                            alt={`Logo de ${sponsor.name}`}
                            className="mx-auto h-16 w-full object-contain"
                            loading="lazy"
                          />
                          <p className="mt-4 font-black text-cip-navy">{sponsor.name}</p>
                          {sponsor.description && (
                            <p className="mt-2 text-sm leading-6 text-cip-body">{sponsor.description}</p>
                          )}
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
