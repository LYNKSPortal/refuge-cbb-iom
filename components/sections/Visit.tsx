import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Visit() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Visit Refuge</p>
          <h2 className="mt-5 font-display text-4xl font-medium sm:text-5xl">
            FIND US IN DOUGLAS
          </h2>
          <address className="mt-8 text-xl font-normal not-italic leading-relaxed text-navy/80">
            <MapPin className="mb-1 mr-2 inline text-champagne" size={18} />
            {site.address.street}
            <br />
            <span className="ml-7">
              {site.address.city}, {site.address.postcode}
            </span>
            <br />
            <span className="ml-7">{site.address.country}</span>
          </address>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-navy px-7 py-3 text-sm tracking-[0.2em] uppercase text-navy transition-colors hover:bg-navy hover:text-ivory"
            >
              Open in Maps <ExternalLink size={13} />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-navy px-7 py-3 text-sm tracking-[0.2em] uppercase text-navy transition-colors hover:bg-navy hover:text-ivory"
            >
              <Phone size={13} /> {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 border border-navy px-7 py-3 text-sm tracking-[0.2em] uppercase text-navy transition-colors hover:bg-navy hover:text-ivory"
            >
              <Mail size={13} /> Email Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border border-navy/10 bg-white p-8 md:p-10">
            <h3 className="eyebrow mb-6">Opening Hours</h3>
            <ul className="divide-y divide-navy/10 text-base">
              {site.openingHours.map((o) => (
                <li key={o.day} className="flex justify-between py-3">
                  <span className="tracking-[0.15em] uppercase text-navy/70">
                    {o.day}
                  </span>
                  <span className={o.hours === "Closed" ? "text-navy/40" : "text-navy"}>
                    {o.hours}
                  </span>
                </li>
              ))}

            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
