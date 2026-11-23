import type { Metadata } from "next";
import MenuPage from "@/components/MenuPage";
import { menus } from "@/lib/menus";

export const metadata: Metadata = {
  title: "Winter Lunch Menu",
  description:
    "Winter 2026 lunch at Refuge, Douglas — seasonal dishes made with locally sourced Isle of Man produce.",
};

export default function WinterLunchPage() {
  return <MenuPage menu={menus.find((m) => m.slug === "winter-lunch")!} />;
}
