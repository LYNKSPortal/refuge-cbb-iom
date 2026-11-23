import type { Metadata } from "next";
import MenuPage from "@/components/MenuPage";
import { menus } from "@/lib/menus";

export const metadata: Metadata = {
  title: "Winter Evening Menu",
  description:
    "Winter 2026 evening dining at Refuge, Douglas — seasonal, ethical and locally sourced dishes.",
};

export default function WinterEveningPage() {
  return <MenuPage menu={menus.find((m) => m.slug === "winter-evening")!} />;
}
