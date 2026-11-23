import { Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Reservations() {
  return (
    <section id="reservations" className="bg-navy py-28 text-center text-ivory md:py-36">
      <Reveal className="mx-auto max-w-3xl px-5">
        <p className="eyebrow">Reservations</p>
        <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] sm:text-6xl">
          GOOD TIMES START
          <br />
          AT THE TABLE.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base font-normal leading-relaxed text-ivory/70">
          Reserve your table at Refuge — we can&apos;t wait to welcome you.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {site.bookingUrl ? (
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-champagne px-9 py-3.5 text-sm tracking-[0.2em] uppercase text-navy transition-colors hover:bg-champagne-light"
            >
              Book a Table
            </a>
          ) : (
            <a
              href={site.phoneHref}
              className="bg-champagne px-9 py-3.5 text-sm tracking-[0.2em] uppercase text-navy transition-colors hover:bg-champagne-light"
            >
              Book a Table
            </a>
          )}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 border border-ivory/40 px-9 py-3.5 text-sm tracking-[0.2em] uppercase text-ivory transition-colors hover:border-champagne hover:text-champagne"
          >
            <Phone size={14} /> {site.phone}
          </a>
        </div>
        {!site.bookingUrl && (
          <p className="mt-6 text-xs text-ivory/50">
            Online booking coming soon — please call to reserve.
          </p>
        )}
      </Reveal>
    </section>
  );
}
