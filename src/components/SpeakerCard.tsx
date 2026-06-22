import { useState } from "react";
import type { Speaker } from "../data/speakers";

type Props = {
  speaker: Speaker;
};

export default function SpeakerCard({ speaker }: Props) {
  const [expanded, setExpanded] = useState(false);
  const descriptionId = `${speaker.id}-description`;

  return (
    <article
      className="group relative flex min-h-[440px] overflow-hidden rounded-[1.7rem] border border-cip-border bg-cip-cream shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setExpanded(false);
        }
      }}
    >
      <div className="flex w-full flex-col">
        <div className="relative h-52 overflow-hidden bg-cip-warm">
          <img
            src={speaker.image}
            alt={`Foto de ${speaker.name}`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cip-navy/60 to-transparent" />
          {speaker.featured && (
            <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-cip-maize px-3 py-1 text-xs font-black uppercase tracking-wide text-cip-ink shadow-soft">
              Destacado
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cip-green">
            {speaker.title ?? "Por confirmar"}
          </p>
          <h3 className="mt-3 text-xl font-black leading-tight text-cip-navy">
            {speaker.name}
          </h3>
          <p className="mt-2 text-sm font-bold text-cip-body">
            {speaker.institution ?? "Por confirmar"}
            {speaker.country ? ` · ${speaker.country}` : ""}
          </p>
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-cip-body">
            {speaker.topic}
          </p>

          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={descriptionId}
            onClick={() => setExpanded((value) => !value)}
            className="focus-ring mt-auto inline-flex w-fit rounded-full border border-cip-maize/50 bg-cip-paper px-4 py-2 text-sm font-black text-cip-ink transition hover:bg-cip-maize"
          >
            {expanded ? "Ocultar" : "Ver mas"}
          </button>
        </div>
      </div>

      <div
        id={descriptionId}
        className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-br from-cip-navy/95 via-cip-blue/95 to-cip-green/90 p-6 text-white transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100 ${
          expanded ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <p className="text-sm font-black uppercase tracking-[0.16em] text-cip-maize">
          Tema
        </p>
        <h4 className="mt-3 text-xl font-black leading-tight">{speaker.topic}</h4>
        <p className="mt-4 text-sm leading-6 text-cip-cream/90">{speaker.description}</p>
        {speaker.phone && (
          <p className="mt-4 text-sm font-bold text-cip-maize">Referencia: {speaker.phone}</p>
        )}
        <button
          type="button"
          onClick={() => setExpanded(false)}
          className="focus-ring mt-6 w-fit rounded-full bg-cip-copper px-4 py-2 text-sm font-black text-white hover:bg-cip-maize hover:text-cip-ink"
        >
          Cerrar
        </button>
      </div>
    </article>
  );
}
