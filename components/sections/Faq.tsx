import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const faqs = [
  {
    q: "Where is Refuge located?",
    a: "Refuge is at 52 Athol Street, Douglas, IM1 1JB, on the Isle of Man — right in the heart of Douglas town centre.",
  },
  {
    q: "What are your opening hours?",
    a: "We're open Tuesday and Wednesday 12–4 PM, Thursday and Friday 12–11 PM, and Saturday 5:30–11 PM. We're closed on Sundays and Mondays.",
  },
  {
    q: "How do I book a table?",
    a: `You can book online through our reservations page, or call us on ${site.phone}. Booking ahead is highly recommended, especially on weekends.`,
  },
  {
    q: "Do you cater for dietary requirements?",
    a: "Yes — our menus include vegetarian, vegan and gluten-free dishes, clearly labelled. Please always tell your server about any allergies or intolerances before ordering.",
  },
  {
    q: "Do you host private events?",
    a: "Yes — we offer private hire for birthday celebrations, corporate functions and special occasions, with bespoke cocktails and tailored dining. Ask at the bar or get in touch for details.",
  },
  {
    q: "What's Refuge known for?",
    a: "Seasonal, locally sourced Manx produce, signature cocktails — including our famous espresso martini — and a warm, stylish atmosphere in the heart of Douglas.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  return (
    <section className="bg-white py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">Good to Know</p>
          <h2 className="mt-5 font-display text-4xl font-medium sm:text-5xl">
            FREQUENTLY ASKED
          </h2>
        </Reveal>
        <dl className="mt-14 space-y-8">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="border-b border-navy/10 pb-8">
                <dt className="font-display text-2xl text-navy">{f.q}</dt>
                <dd className="mt-3 text-base font-normal leading-relaxed text-navy/70">
                  {f.a}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
