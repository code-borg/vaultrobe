import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Insights } from "@/components/sections/Insights";
import { Outfits } from "@/components/sections/Outfits";
import { EasyStart } from "@/components/sections/EasyStart";
import { Privacy } from "@/components/sections/Privacy";
import { GettingStarted } from "@/components/sections/GettingStarted";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Insights />
        <Outfits />
        <EasyStart />
        <Privacy />
        <GettingStarted />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
