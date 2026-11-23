export const site = {
  name: "Refuge",
  tagline: "Restaurant & Bar, Douglas, Isle of Man",
  address: {
    street: "52 Athol Street",
    city: "Douglas",
    postcode: "IM1 1JB",
    country: "Isle of Man",
  },
  phone: "01624 616584",
  phoneHref: "tel:+441624616584",
  email: "hello@refuge.co.im",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=52+Athol+Street+Douglas+IM1+1JB+Isle+of+Man",
  // Booking provider is configurable. When unset the UI falls back to phone booking.
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ??
    "https://dazzler.app/isle-of-man/douglas/refuge-d99r/book-a-table",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://refuge.im",
  openingHours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "12–4 PM" },
    { day: "Wednesday", hours: "12–4 PM" },
    { day: "Thursday", hours: "12–11 PM" },
    { day: "Friday", hours: "12–11 PM" },
    { day: "Saturday", hours: "5:30–11 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/refugeiom" },
    {
      label: "Tripadvisor",
      href: "https://www.tripadvisor.co.uk/Restaurant_Review-g190928-d24123335-Reviews-Refuge_Bistro_Bar-Douglas_Isle_of_Man.html",
    },
  ],
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.postcode}, ${site.address.country}`;
