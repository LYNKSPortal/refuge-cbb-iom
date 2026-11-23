import type { Metadata } from "next";
import MenuPage from "@/components/MenuPage";
import { menus } from "@/lib/menus";

export const metadata: Metadata = {
  alternates: { canonical: "/menus/evening" },
  title: "Evening Menu",
  description:
    "Evening dining at Refuge, Douglas — seasonal, ethical and locally sourced dishes. Served Thursday to Saturday evenings.",
};

export default function EveningPage() {
  return <MenuPage menu={menus.find((m) => m.slug === "evening")!} />;
}
