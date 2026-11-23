import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { menus } from "@/lib/menus";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...menus.map((m) => ({
      url: `${site.url}/menus/${m.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
