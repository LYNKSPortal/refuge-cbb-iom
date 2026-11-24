import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Dishes from "@/components/sections/Dishes";
import MenusTeaser from "@/components/sections/MenusTeaser";
import NewWines from "@/components/sections/NewWines";
import Reviews from "@/components/sections/Reviews";
import GallerySection from "@/components/sections/GallerySection";
import Reservations from "@/components/sections/Reservations";
import Faq from "@/components/sections/Faq";
import Visit from "@/components/sections/Visit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Dishes />
      <MenusTeaser />
      <NewWines />
      <Reviews />
      <GallerySection />
      <Reservations />
      <Faq />
      <Visit />
    </>
  );
}
