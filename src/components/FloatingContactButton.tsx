import { useState } from "react";
import { event } from "../data/event";

const actions = [
  {
    label: "WhatsApp",
    href: event.whatsapp.url,
    target: "_blank",
    icon: "/images/icons/whatsapp.svg"
  },
  {
    label: "Llamar",
    href: event.whatsapp.phoneHref,
    icon: "/images/icons/phone.svg"
  },
  {
    label: "Inscribirme",
    href: "#registro",
    icon: "/images/icons/certificate.svg"
  },
  {
    label: "Facebook",
    href: event.socials.facebook,
    target: "_blank",
    icon: "/images/icons/facebook.svg"
  }
];

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <div
        className={`flex flex-col items-end gap-2 transition duration-300 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target={action.target}
            rel={action.target ? "noreferrer" : undefined}
            className="focus-ring inline-flex items-center gap-3 rounded-full border border-cip-border bg-cip-cream px-4 py-3 text-sm font-black text-cip-navy shadow-lift transition hover:-translate-y-0.5 hover:bg-cip-warm"
          >
            <img src={action.icon} alt="" className="h-5 w-5" />
            {action.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        aria-label={open ? "Cerrar opciones de contacto" : "Abrir opciones de contacto"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="focus-ring flex h-16 w-16 items-center justify-center rounded-full border border-cip-gold/45 bg-cip-navy text-2xl font-black text-white shadow-gold transition hover:-translate-y-0.5 hover:bg-cip-green"
      >
        {open ? "×" : <img src="/images/icons/whatsapp.svg" alt="" className="h-8 w-8" />}
      </button>
    </div>
  );
}
