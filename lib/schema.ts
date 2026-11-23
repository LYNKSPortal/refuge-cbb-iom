import type { Menu } from "@/lib/menus";
import { site } from "@/lib/site";

export function menuJsonLd(menu: Menu) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${menu.title} — Refuge, Douglas`,
    url: `${site.url}/menus/${menu.slug}`,
    inLanguage: "en-GB",
    hasMenuSection: menu.sections.map((s) => ({
      "@type": "MenuSection",
      name: s.title,
      hasMenuItem: s.items
        .filter((i) => !i.placeholder)
        .map((i) => ({
          "@type": "MenuItem",
          name: i.name,
          ...(i.description ? { description: i.description } : {}),
          ...(i.price && i.price !== "—" && !i.price.includes("/") && !i.price.includes("Bottle")
            ? {
                offers: {
                  "@type": "Offer",
                  price: i.price.replace(/[^\d.]/g, ""),
                  priceCurrency: "GBP",
                },
              }
            : {}),
          ...(i.dietary?.includes("VG")
            ? { suitableForDiet: "https://schema.org/VeganDiet" }
            : i.dietary?.includes("V")
              ? { suitableForDiet: "https://schema.org/VegetarianDiet" }
              : i.dietary?.includes("GF")
                ? { suitableForDiet: "https://schema.org/GlutenFreeDiet" }
                : {}),
        })),
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
