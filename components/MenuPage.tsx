import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { dietaryLegend, menus, type Menu } from "@/lib/menus";
import { menuJsonLd, breadcrumbJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export default function MenuPage({ menu }: { menu: Menu }) {
  const otherMenus = menus.filter((m) => m.slug !== menu.slug);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd(menu)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: site.url },
              { name: "Menus", url: `${site.url}/#menus` },
              { name: menu.title, url: `${site.url}/menus/${menu.slug}` },
            ])
          ),
        }}
      />
      <header className="relative flex min-h-[55svh] items-center justify-center text-center">
        <Image
          src={menu.banner}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <Reveal className="relative z-10 px-5 pt-16">
          <p className="eyebrow">Refuge — {menu.title}</p>
          <h1 className="mt-5 font-display text-5xl font-medium text-ivory md:text-6xl">
            {menu.title.toUpperCase()}
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base font-normal leading-relaxed text-ivory/80">
            {menu.intro}
          </p>
        </Reveal>
      </header>

      <div className="mx-auto max-w-3xl px-5 pb-28 pt-16">

      <div className="mt-16 space-y-14">
        {menu.sections.map((section, si) => (
          <Reveal key={section.title} delay={si * 0.05}>
            <h2 className="text-center font-display text-3xl italic text-champagne md:text-4xl">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="mt-2 text-center text-sm tracking-[0.2em] uppercase text-navy/50">
                {section.subtitle}
              </p>
            )}
            <ul className="mt-8 space-y-7">
              {section.items.map((item, i) => (
                <li key={i} className="text-center">
                  <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
                    <h3 className="font-display text-2xl tracking-wide">
                      {item.name}
                    </h3>
                    {item.dietary?.map((d) => (
                      <span
                        key={d}
                        title={dietaryLegend[d]}
                        className="border border-champagne/60 px-1.5 py-0.5 text-[10px] tracking-widest text-champagne"
                      >
                        {d}
                      </span>
                    ))}
                    {item.price && (
                      <span className="text-base text-navy/60">£{item.price}</span>
                    )}
                  </div>
                  {item.description && (
                    <p className="mx-auto mt-1.5 max-w-md text-base font-normal text-navy/60">
                      {item.description}
                      {item.placeholder && (
                        <span className="ml-2 align-middle text-[10px] tracking-[0.2em] uppercase text-champagne">
                          Placeholder
                        </span>
                      )}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {menu.note && (
        <p className="mt-16 text-center text-base font-normal italic text-navy/60">
          {menu.note}
        </p>
      )}

      <div className="mt-12 border-t border-navy/10 pt-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-navy/50">
          All Menus
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {otherMenus.map((m) => (
            <Link
              key={m.slug}
              href={`/menus/${m.slug}`}
              className="border border-navy px-5 py-2.5 text-xs tracking-[0.18em] uppercase text-navy transition-colors hover:bg-navy hover:text-ivory"
            >
              {m.title}
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          {menu.pdf && (
            <a
              href={menu.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-navy px-7 py-3 text-sm tracking-[0.2em] uppercase text-navy transition-colors hover:bg-navy hover:text-ivory"
            >
              View PDF Version
            </a>
          )}
          <a
            href={site.bookingUrl ?? site.phoneHref}
            {...(site.bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="bg-navy px-7 py-3 text-sm tracking-[0.2em] uppercase text-ivory transition-colors hover:bg-navy-deep"
          >
            Book a Table
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}
