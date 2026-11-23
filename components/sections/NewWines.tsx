import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

export default function NewWines() {
  const [main, offset, ...rest] = images.newWines;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">New Drinks List</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] sm:text-5xl">
              NEW POURS,
              <br />
              OLD FAVOURITES.
            </h2>
            <div className="mt-8 space-y-5 text-lg font-normal leading-relaxed text-navy/75">
              <p>
                It&apos;s new drinks list day. We&apos;ve revamped our wines,
                adding multiple bottles of real quality across our reds,
                whites, rosés and champagnes — plus some new whiskies and, of
                course, new cocktails.
              </p>
            </div>
            <Link
              href="/menus/drinks"
              className="mt-10 inline-block border border-navy px-8 py-3.5 text-sm tracking-[0.2em] uppercase text-navy transition-colors hover:bg-navy hover:text-ivory"
            >
              View Drinks Menu
            </Link>
          </Reveal>

          <div className="relative">
            <Reveal delay={0.15}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={main}
                  alt="New wines at Refuge"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            {offset && (
              <Reveal delay={0.3} className="absolute -bottom-10 -right-4 hidden w-2/5 md:block">
                <div className="relative aspect-[4/5] overflow-hidden border-8 border-white shadow-xl">
                  <Image
                    src={offset}
                    alt="New wine bottles at Refuge"
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            )}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-4 md:gap-6">
          {rest.map((src, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={src}
                  alt="From the new Refuge drinks list"
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
