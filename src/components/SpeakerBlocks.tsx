import { useMemo, useState } from "react";
import SpeakerCard from "./SpeakerCard";
import { speakerBlocks, speakers, type SpeakerBlock } from "../data/speakers";

const blockOrder: SpeakerBlock[] = [
  "academico",
  "comercial",
  "prospectiva",
  "panel",
  "reconocimiento"
];

export default function SpeakerBlocks() {
  const [activeBlock, setActiveBlock] = useState<SpeakerBlock>("academico");
  const visibleSpeakers = useMemo(
    () => speakers.filter((speaker) => speaker.block === activeBlock),
    [activeBlock]
  );

  return (
    <section id="ponentes" className="section-divider bg-cip-paper py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="luxury-kicker">Ponentes y bloques</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-cip-navy sm:text-4xl">
              Voces academicas, empresariales e institucionales en una agenda curada.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-cip-body">
            Navega por los bloques del congreso y revisa temas, instituciones y detalles de cada participacion.
          </p>
        </div>

        <div
          className="mt-10 flex gap-2 overflow-x-auto rounded-[1.6rem] border border-cip-border bg-cip-warm/80 p-2 shadow-soft"
          role="tablist"
          aria-label="Bloques de ponentes"
        >
          {blockOrder.map((block) => (
            <button
              key={block}
              type="button"
              role="tab"
              aria-selected={activeBlock === block}
              onClick={() => setActiveBlock(block)}
              className={`focus-ring shrink-0 rounded-2xl px-4 py-3 text-sm font-black transition duration-300 ${
                activeBlock === block
                  ? "bg-cip-navy text-cip-cream shadow-soft"
                  : "text-cip-body hover:bg-cip-paper hover:text-cip-navy"
              }`}
            >
              {speakerBlocks[block]}
            </button>
          ))}
        </div>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
