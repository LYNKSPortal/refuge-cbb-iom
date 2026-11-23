import type { Metadata } from "next";
import MenuPage from "@/components/MenuPage";
import { menus } from "@/lib/menus";

export const metadata: Metadata = {
  alternates: { canonical: "/menus/lunch" },
  title: "Lunch Menu",
  description:
    "Lunch at Refuge, Douglas — seasonal dishes made with locally sourced Isle of Man produce. Served Tuesday to Friday, 12–4 PM.",
};

export default function LunchPage() {
  return <MenuPage menu={menus.find((m) => m.slug === "lunch")!} />;
}
