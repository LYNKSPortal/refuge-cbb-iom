import Image from "next/image";
import Link from "next/link";
import { site, fullAddress } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div>
          <div className="relative h-[71px] w-[200px]">
            <Image
              src="/white-logo.png"
              alt="Refuge — Coffee · Bar · Bistro"
              fill
              sizes="200px"
              className="object-contain object-left"
            />
          </div>
          <p className="mt-4 text-base text-ivory/60">
            Independent restaurant &amp; bar in the heart of Douglas, Isle of Man.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="eyebrow mb-4">Explore</h3>
          <ul className="space-y-2 text-base text-ivory/80">
            {[
              ["Home", "/"],
              ["Our Story", "/#story"],
              ["Lunch Menu", "/menus/lunch"],
              ["Evening Menu", "/menus/evening"],
              ["Gallery", "/#gallery"],
              ["Reviews", "/#reviews"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="transition-colors hover:text-champagne">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="eyebrow mb-4">Opening Hours</h3>
          <ul className="space-y-2 text-base text-ivory/80">
            {site.openingHours.map((o) => (
              <li key={o.day} className="flex justify-between gap-4">
                <span>{o.day}</span>
                <span className="text-ivory/60">{o.hours}</span>
              </li>
            ))}

          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Find Us</h3>
          <address className="text-base not-italic leading-relaxed text-ivory/80">
            {fullAddress}
          </address>
          <a
            href={site.phoneHref}
            className="mt-3 block text-base text-ivory/80 transition-colors hover:text-champagne"
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 block text-base text-ivory/80 transition-colors hover:text-champagne"
          >
            {site.email}
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-base text-ivory/80 transition-colors hover:text-champagne"
          >
            Get directions
          </a>
          <ul className="mt-5 flex gap-5">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-[0.15em] uppercase text-ivory/70 transition-colors hover:text-champagne"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-6 text-center text-sm tracking-[0.15em] uppercase text-ivory/40">
        © {new Date().getFullYear()} Refuge, Douglas — Isle of Man
      </div>
    </footer>
  );
}
