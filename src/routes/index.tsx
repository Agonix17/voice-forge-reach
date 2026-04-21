import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Opportunity } from "@/components/Opportunity";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VoxLocalize — AI Video Localization for Minecraft Creators" },
      { name: "description", content: "Scale your Minecraft channel to 40M+ Russian speakers with AI voice cloning, native thumbnails, and SEO. Premium localization for top YouTube creators." },
      { property: "og:title", content: "VoxLocalize — Global Reach Without the Language Barrier" },
      { property: "og:description", content: "AI voice cloning, slang adaptation, and full meta-data SEO for Minecraft YouTubers expanding into the Russian market." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Opportunity />
        <Services />
        <Pricing />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
