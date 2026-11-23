"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative flex min-h-svh items-center justify-center text-center">
      <Image
        src={images.hero}
        alt="Candlelit dishes on a Refuge dining table"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      <div className="relative z-10 px-5">
        <motion.p {...fade(0.1)} className="eyebrow">
          Douglas, Isle of Man
        </motion.p>
        <motion.h1
          {...fade(0.25)}
          className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-wide text-ivory sm:text-7xl lg:text-8xl"
        >
          YOUR TABLE.
          <br />
          YOUR REFUGE.
        </motion.h1>
        <motion.p
          {...fade(0.4)}
          className="mx-auto mt-6 max-w-md text-lg font-normal leading-relaxed text-ivory/80 sm:text-xl"
        >
          Exceptional food. Thoughtful drinks. Good company. In the heart of
          Douglas.
        </motion.p>
        <motion.div
          {...fade(0.55)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={site.bookingUrl ?? "#reservations"}
            {...(site.bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="w-full max-w-xs bg-champagne px-8 py-3 text-center text-sm tracking-[0.2em] uppercase text-navy transition-colors hover:bg-champagne-light sm:w-auto"
          >
            Book a Table
          </a>
          <Link
            href="/#menus"
            className="w-full max-w-xs border border-ivory/60 px-8 py-3 text-center text-sm tracking-[0.2em] uppercase text-ivory transition-colors hover:border-champagne hover:text-champagne sm:w-auto"
          >
            Explore Our Menus
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#story"
        aria-label="Scroll to our story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="block"
        >
          <ChevronDown size={26} />
        </motion.span>
      </motion.a>
    </section>
  );
}
