import Image from "next/image";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

export default function Chef() {
  return (
    <section className="bg-navy py-24 text-ivory md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-5 lg:gap-20">
        <Reveal className="lg:col-span-3">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.chef}
              alt="Chef Adam at work in the Refuge kitchen"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2 lg:-ml-24 lg:mt-24">
          <div className="bg-navy-deep p-8 md:p-10">
            <p className="eyebrow">Meet the Chef</p>
            <h2 className="mt-4 font-display text-4xl font-medium">ADAM</h2>
            <div className="mt-6 space-y-4 text-base font-normal leading-relaxed text-ivory/80">
              <p>
                With 26 years in professional kitchens — including rosette and
                Michelin-starred restaurants — Adam brings a rare depth of craft
                to the Refuge kitchen.
              </p>
              <p>
                His cooking is guided by the seasons and by a commitment to
                ethical, locally sourced ingredients from across the Isle of
                Man.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
