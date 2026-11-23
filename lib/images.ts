// PLACEHOLDER IMAGERY — temporary stock photos for layout/design purposes only.
// Replace every entry below with real Refuge photography (dishes, interior,
// team portraits) before launch. Recommended: host on AWS S3 behind a CDN and
// add that hostname to remotePatterns in next.config.ts.

export const images = {
  hero: "/hero-image.jpg",
  welcomeInterior: "/outside-the-refuge.jpeg",
  welcomeTable: "/Our%20Famous%20Espresso%20Martini.jpeg",
  chef: "/adam-the-chef.jpg",
  // Real Refuge photography. Names marked null are awaiting the real dish
  // names — nothing is invented. Update `name` to label them.
  dishes: [
    { name: null, src: "/Signature%20Dishes%2001.jpeg", alt: "Signature dish at Refuge" },
    { name: null, src: "/Signature%20Dishes%2002.jpeg", alt: "Signature dish at Refuge" },
    { name: null, src: "/Signature%20Dishes%2003.jpeg", alt: "Signature dish at Refuge" },
    { name: null, src: "/Signature%20Dishes%2004.jpeg", alt: "Signature dish at Refuge" },
    { name: null, src: "/Signature%20Dishes%2005.jpeg", alt: "Signature dish at Refuge" },
    { name: null, src: "/Signature%20Dishes%2006.jpeg", alt: "Signature dish at Refuge" },
  ],
  newWines: [
    "/new-wines/wine-01.jpg",
    "/new-wines/wine-02.jpg",
    "/new-wines/wine-03.jpg",
    "/new-wines/wine-04.jpg",
    "/new-wines/wine-05.jpg",
  ],
  gallery: [
    { src: "/gallery/gallery-img-001.jpg", alt: "Dishes and drinks at Refuge", tall: false },
    { src: "/gallery/gallery-img-002.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-003.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-004.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-005.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-006.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-007.jpg", alt: "Inside Refuge", tall: false },
    { src: "/gallery/gallery-img-008.jpg", alt: "Inside Refuge", tall: false },
    { src: "/gallery/gallery-img-009.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-010.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-011.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-012.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-013.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-014.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-015.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-016.jpg", alt: "Inside Refuge", tall: true },
    { src: "/gallery/gallery-img-017.jpg", alt: "Inside Refuge", tall: false },
    { src: "/gallery/gallery-img-018.jpg", alt: "Inside Refuge", tall: true },
  ],
};
