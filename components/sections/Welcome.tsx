import Image from "next/image";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

export default function Welcome() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Welcome to Refuge</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl">
            A PLACE TO
            <br />
            FEEL AT HOME.
          </h2>
          <div className="mt-8 space-y-5 text-lg font-normal leading-relaxed text-navy/75">
            <p className="font-display text-2xl italic text-navy">
              An elegant spot in the heart of Athol Street, Douglas.
            </p>
            <p>
              We&apos;re Rob and Tamara, the faces behind this dream, excited
              for you to make our Refuge, your own. Our journey started in
              Subiaco, Western Australia. The memories and the friends we made
              left an imprint on us and after deciding to return to the Island
              to make a life together, we had to bring that feeling back. A
              feeling of friendship and a determination to bring local produce
              and local people together in comfortable and stylish surroundings.
            </p>
            <p>
              Join us and immerse yourself in Refuge. Make your own cherished
              memories, new connections and enjoy the fusion of wonderful drinks
              and fabulous food alongside even better company.
            </p>
          </div>
          <p className="mt-10 font-display text-3xl italic text-champagne">
            — Tamara &amp; Rob
          </p>
        </Reveal>

        <div className="relative">
          <Reveal delay={0.15}>
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={images.welcomeInterior}
                alt="Outside Refuge on Athol Street, Douglas"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.3} className="absolute -bottom-10 -left-6 hidden w-2/5 md:block">
            <div className="relative aspect-square overflow-hidden border-8 border-ivory shadow-xl">
              <Image
                src={images.welcomeTable}
                alt="Refuge's famous espresso martini"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
