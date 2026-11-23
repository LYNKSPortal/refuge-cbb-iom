import type { Metadata } from "next";
import MenuPage from "@/components/MenuPage";
import { menus } from "@/lib/menus";

export const metadata: Metadata = {
  alternates: { canonical: "/menus/drinks" },
  title: "Drinks Menu",
  description:
    "Drinks at Refuge, Douglas — cocktails, wines, spirits and coffee, including the island's famous espresso martini.",
};

export default function DrinksPage() {
  return <MenuPage menu={menus.find((m) => m.slug === "drinks")!} />;
}
