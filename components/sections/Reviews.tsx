"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/lib/reviews";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const review = reviews[index];

  return (
    <section id="reviews" className="bg-navy py-24 text-ivory md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="eyebrow">Kind Words</p>
        <p className="mt-8 font-display text-[7rem] leading-none text-champagne/40" aria-hidden>
          &ldquo;
        </p>

        <div className="relative -mt-16 min-h-[18rem] sm:min-h-[13rem]">
          <button
            aria-label="Previous review"
            onClick={() => setIndex((index - 1 + reviews.length) % reviews.length)}
            className="absolute -left-16 top-1/2 hidden -translate-y-1/2 rounded-full border border-ivory/25 p-2 text-ivory transition-colors hover:border-champagne hover:text-champagne lg:block"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next review"
            onClick={() => setIndex((index + 1) % reviews.length)}
            className="absolute -right-16 top-1/2 hidden -translate-y-1/2 rounded-full border border-ivory/25 p-2 text-ivory transition-colors hover:border-champagne hover:text-champagne lg:block"
          >
            <ChevronRight size={18} />
          </button>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className="font-display text-2xl italic leading-relaxed text-ivory md:text-3xl">
                {review.quote}
              </p>
              <footer className="mt-6 text-sm tracking-[0.25em] uppercase text-ivory/70">
                — {review.name}
                <span className="ml-2 normal-case tracking-normal text-ivory/50">
                  · {review.source}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 lg:hidden">
          <button
            aria-label="Previous review"
            onClick={() => setIndex((index - 1 + reviews.length) % reviews.length)}
            className="rounded-full border border-ivory/25 p-2 text-ivory transition-colors hover:border-champagne hover:text-champagne"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next review"
            onClick={() => setIndex((index + 1) % reviews.length)}
            className="rounded-full border border-ivory/25 p-2 text-ivory transition-colors hover:border-champagne hover:text-champagne"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {[
            {
              label: "Google Reviews",
              href: "https://www.google.com/maps/search/?api=1&query=Refuge+Bistro+%26+Bar+52+Athol+Street+Douglas",
            },
            {
              label: "Facebook Reviews",
              href: "https://www.facebook.com/refugeiom/reviews",
            },
            {
              label: "Tripadvisor",
              href: "https://www.tripadvisor.co.uk/Restaurant_Review-g190928-d24123335-Reviews-Refuge_Bistro_Bar-Douglas_Isle_of_Man.html",
            },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ivory/60 px-7 py-3 text-sm tracking-[0.2em] uppercase text-ivory transition-colors hover:border-champagne hover:text-champagne"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
