import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Opportunity } from "@/components/Opportunity";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { WhyUs } from "@/components/WhyUs";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VoxLocalize — One Video. 40M New Viewers. $75." },
      { name: "description", content: "Premium AI voice cloning + native Russian dub for Minecraft YouTubers. The $75 Full Access Pack: pro dub, free localized thumbnail, free SEO meta-data." },
      { property: "og:title", content: "VoxLocalize — One Video. 40M New Viewers. $75." },
      { property: "og:description", content: "Hear the difference between YouTube auto-dub and a real human-grade localization. $75 full access pack for Minecraft creators." },
    ],
  }),
});

import { LanguageProvider } from "@/lib/i18n";

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <TrustBar />
          <Opportunity />
          <Process />
          <Services />
          <Pricing />
          <WhyUs />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

