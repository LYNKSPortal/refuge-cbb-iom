"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/#story", label: "Our Story" },
  { href: "/#menus", label: "Menus" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#reviews", label: "Reviews" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const book = site.bookingUrl ? (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden bg-champagne px-6 py-2.5 text-sm tracking-[0.2em] uppercase text-navy transition-colors hover:bg-champagne-light sm:inline-block"
    >
      Book a Table
    </a>
  ) : (
    <a
      href={site.phoneHref}
      className="hidden bg-champagne px-6 py-2.5 text-sm tracking-[0.2em] uppercase text-navy transition-colors hover:bg-champagne-light sm:inline-block"
    >
      Book a Table
    </a>
  );

  const headerEl = (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-navy shadow-lg"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="Refuge — home" className="relative block h-[50px] w-[140px] md:h-[71px] md:w-[200px]">
          <Image
            src="/white-logo.png"
            alt="Refuge — Coffee · Bar · Bistro"
            fill
            priority
            sizes="300px"
            className="object-contain object-left"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-sm tracking-[0.2em] uppercase text-ivory/80 transition-colors hover:text-champagne"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {book}
          <button
            className="p-2 text-ivory lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="flex items-center gap-2">
              <span className="text-sm tracking-[0.25em] uppercase">Menu</span>
              {open ? <X size={22} /> : <Menu size={22} />}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );

  return (
    <>
      {headerEl}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col bg-navy lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 md:px-8">
              <Link
                href="/"
                aria-label="Refuge — home"
                onClick={() => setOpen(false)}
                className="relative block h-[50px] w-[140px]"
              >
                <Image
                  src="/white-logo.png"
                  alt="Refuge — Coffee · Bar · Bistro"
                  fill
                  sizes="140px"
                  className="object-contain object-left"
                />
              </Link>
              <button
                className="flex items-center gap-2 p-2 text-ivory"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <span className="text-sm tracking-[0.25em] uppercase">Close</span>
                <X size={26} />
              </button>
            </div>

            <ul className="flex flex-1 flex-col items-center justify-center gap-8 px-5">
              {links.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-ivory transition-colors hover:text-champagne"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * links.length }}
                className="mt-4"
              >
                <a
                  href={site.bookingUrl ?? site.phoneHref}
                  {...(site.bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setOpen(false)}
                  className="border border-champagne px-8 py-3.5 text-sm tracking-[0.25em] uppercase text-champagne"
                >
                  Book a Table
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
