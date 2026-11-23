"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setSelected((s) =>
        s === null ? null : (s + dir + images.gallery.length) % images.gallery.length
      ),
    []
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
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mb-14">
        <p className="eyebrow">Gallery</p>
        <h2 className="mt-5 font-display text-4xl font-medium sm:text-5xl">
          MOMENTS AT REFUGE
        </h2>
      </Reveal>

      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {images.gallery.map((g, i) => (
          <Reveal key={g.src} delay={(i % 3) * 0.08}>
            <button
              onClick={() => setSelected(i)}
              className="group relative block w-full overflow-hidden"
              aria-label={`View image: ${g.alt}`}
            >
              <div className={`relative w-full ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-deep/0 transition-colors duration-500 group-hover:bg-navy-deep/30" />
              </div>
            </button>
          </Reveal>
        ))}
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
                src={images.gallery[selected].src}
                alt={images.gallery[selected].alt}
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
