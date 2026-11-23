"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

export default function Dishes() {
  const [selected, setSelected] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const dishes = images.dishes;

  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setSelected((s) =>
        s === null ? null : (s + dir + dishes.length) % dishes.length
      ),
    [dishes.length]
  );

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, close, step]);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Signature Dishes</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-5xl">
              FROM OUR KITCHEN
            </h2>
          </div>
          <Link
            href="/#menus"
            className="border border-navy px-7 py-3 text-sm tracking-[0.2em] uppercase text-navy transition-colors hover:bg-navy hover:text-ivory"
          >
            View Our Menus
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {dishes.map((d, i) => (
            <Reveal key={d.src} delay={i * 0.08}>
              <button
                onClick={() => setSelected(i)}
                className="group block w-full text-left"
                aria-label={`View image: ${d.alt}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={d.src}
                    alt={d.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-deep/0 transition-colors duration-500 group-hover:bg-navy-deep/30" />
                </div>
                {d.name && (
                  <h3 className="mt-4 font-display text-2xl transition-colors group-hover:text-champagne">
                    {d.name}
                  </h3>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/95 p-4"
            onClick={close}
          >
            <button
              aria-label="Close viewer"
              onClick={close}
              className="absolute right-5 top-5 p-2 text-ivory hover:text-champagne"
            >
              <X size={28} />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-ivory hover:text-champagne md:left-8"
            >
              <ChevronLeft size={34} />
            </button>
            <motion.div
              key={selected}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[75vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={dishes[selected].src}
                alt={dishes[selected].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-ivory hover:text-champagne md:right-8"
            >
              <ChevronRight size={34} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
