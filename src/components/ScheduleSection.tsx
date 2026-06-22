import { useState } from "react";
import { blockLabels, schedule, type ScheduleBlock } from "../data/schedule";

const blockStyles: Record<ScheduleBlock, string> = {
  academico: "bg-cip-mist text-cip-blue border-[#C9D7CE]",
  comercial: "bg-[#FFF1D8] text-[#7A4B22] border-[#E1C899]",
  prospectiva: "bg-[#E5EEE4] text-cip-green border-[#C8D8C5]",
  panel: "bg-[#E8ECEF] text-cip-ink border-[#CDD4DB]",
  feria: "bg-[#EFEEDB] text-[#65713F] border-[#D8D5AE]",
  almuerzo: "bg-[#F6E5D9] text-cip-clay border-[#E2C4B3]",
  reconocimiento: "bg-[#F3E6DC] text-[#815033] border-[#DDC7B9]",
  institucional: "bg-cip-warm text-cip-ink border-cip-border"
};

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(schedule[0].id);
  const day = schedule.find((item) => item.id === activeDay) ?? schedule[0];

  return (
    <section id="cronograma" className="section-divider bg-cip-cream py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="luxury-kicker">Agenda del encuentro</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-cip-navy sm:text-4xl">
              Ponencias, feria, panel y cierre institucional en dos jornadas.
            </h2>
          </div>

          <div className="flex rounded-[1.4rem] border border-cip-border bg-cip-warm p-2 shadow-soft" role="tablist">
            {schedule.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeDay === item.id}
                onClick={() => setActiveDay(item.id)}
                className={`focus-ring flex-1 rounded-2xl px-4 py-3 text-sm font-black transition duration-300 ${
                  activeDay === item.id
                    ? "bg-cip-navy text-cip-cream shadow-soft"
                    : "text-cip-body hover:bg-cip-paper hover:text-cip-navy"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-cip-border bg-cip-paper/90 p-4 shadow-lift sm:p-6">
          <div className="mb-7 rounded-3xl bg-cip-navy p-6 text-white">
            <p className="text-sm font-black uppercase tracking-wide text-cip-maize">{day.date}</p>
            <h3 className="mt-2 text-2xl font-black">{day.theme}</h3>
          </div>

          <div className="hidden overflow-hidden rounded-3xl border border-cip-border bg-cip-cream lg:block">
            <div className="grid grid-cols-[150px_170px_1fr] bg-cip-warm px-5 py-4 text-sm font-black text-cip-navy">
              <span>Hora</span>
              <span>Bloque</span>
              <span>Actividad</span>
            </div>
            {day.items.map((item, index) => (
              <div
                key={`${item.time}-${index}`}
                className="grid grid-cols-[150px_170px_1fr] gap-4 border-t border-cip-border/70 px-5 py-5 transition hover:bg-white/60"
              >
                <span className="font-black text-cip-navy">{item.time}</span>
                <span className={`h-fit w-fit rounded-full border px-3 py-1 text-xs font-black ${blockStyles[item.block]}`}>
                  {blockLabels[item.block]}
                </span>
                <div>
                  <p className="font-bold text-cip-ink">{item.title}</p>
                  {item.speaker && <p className="mt-1 text-sm font-bold text-cip-blue">{item.speaker}</p>}
                  {item.description && <p className="mt-2 text-sm leading-6 text-cip-body">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 lg:hidden">
            {day.items.map((item, index) => (
              <article key={`${item.time}-${index}`} className="relative border-l-2 border-cip-gold pl-5">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-cip-paper bg-cip-gold shadow-sm"></span>
                <div className="rounded-3xl border border-cip-border bg-cip-cream p-4 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-black text-cip-navy">{item.time}</span>
                    <span className={`rounded-full border px-3 py-1 text-xs font-black ${blockStyles[item.block]}`}>
                      {blockLabels[item.block]}
                    </span>
                  </div>
                  <h4 className="mt-3 font-black leading-snug text-cip-ink">{item.title}</h4>
                  {item.speaker && <p className="mt-2 text-sm font-bold text-cip-blue">{item.speaker}</p>}
                  {item.description && <p className="mt-2 text-sm leading-6 text-cip-body">{item.description}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
