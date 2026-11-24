import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function MenusTeaser() {
  return (
    <section id="menus" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mb-14 text-center">
        <p className="eyebrow">Menus</p>
        <h2 className="mt-5 font-display text-4xl font-medium sm:text-5xl">
          LUNCH &amp; EVENINGS
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            href: "/menus/winter-lunch",
            title: "Winter Lunch Menu",
            sub: "Tue–Fri, 12–4 PM",
          },
          {
            href: "/menus/winter-evening",
            title: "Winter Evening Menu",
            sub: "Thu–Sat evenings",
          },
          {
            href: "/menus/drinks",
            title: "Drinks Menu",
            sub: "Cocktails · Wine · Coffee",
          },
        ].map((m, i) => (
          <Reveal key={m.href} delay={i * 0.1}>
            <Link
              href={m.href}
              className="group flex items-center justify-between border border-navy/15 bg-white p-8 transition-colors hover:border-champagne md:p-12"
            >
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-navy/50">
                  {m.sub}
                </p>
                <h3 className="mt-3 font-display text-3xl transition-colors group-hover:text-champagne md:text-4xl">
                  {m.title}
                </h3>
              </div>
              <ArrowRight
                className="text-champagne transition-transform duration-300 group-hover:translate-x-1"
                size={28}
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
