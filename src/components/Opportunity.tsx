import { TrendingUp } from "lucide-react";
import { useT } from "@/lib/i18n";

import mrbeastAvatar from "@/assets/avatars/mrbeast.jpg";
import dreamAvatar from "@/assets/avatars/dream.jpg";
import karlAvatar from "@/assets/avatars/karl.jpg";
import athosAvatar from "@/assets/avatars/athos.jpg";
import maizenAvatar from "@/assets/avatars/maizen.jpg";
import technobladeAvatar from "@/assets/avatars/technoblade.jpg";
import stampyAvatar from "@/assets/avatars/stampy.jpg";
import grianAvatar from "@/assets/avatars/grian.jpg";
import mumboAvatar from "@/assets/avatars/mumbo.jpg";

import mrbeast1 from "@/assets/previews/mrbeast-1.jpg";
import mrbeast2 from "@/assets/previews/mrbeast-2.jpg";
import mrbeast3 from "@/assets/previews/mrbeast-3.jpg";
import dream1 from "@/assets/previews/dream-1.jpg";
import dream2 from "@/assets/previews/dream-2.jpg";
import dream3 from "@/assets/previews/dream-3.jpg";
import karl1 from "@/assets/previews/karl-1.jpg";
import karl2 from "@/assets/previews/karl-2.jpg";
import karl3 from "@/assets/previews/karl-3.jpg";
import athos1 from "@/assets/previews/athos-1.jpg";
import athos2 from "@/assets/previews/athos-2.jpg";
import athos3 from "@/assets/previews/athos-3.jpg";
import maizen1 from "@/assets/previews/maizen-1.jpg";
import maizen2 from "@/assets/previews/maizen-2.jpg";
import maizen3 from "@/assets/previews/maizen-3.jpg";
import techno1 from "@/assets/previews/technoblade-1.jpg";
import techno2 from "@/assets/previews/technoblade-2.jpg";
import techno3 from "@/assets/previews/technoblade-3.jpg";
import stampy1 from "@/assets/previews/stampy-1.jpg";
import stampy2 from "@/assets/previews/stampy-2.jpg";
import stampy3 from "@/assets/previews/stampy-3.jpg";
import grian1 from "@/assets/previews/grian-1.jpg";
import grian2 from "@/assets/previews/grian-2.jpg";
import grian3 from "@/assets/previews/grian-3.jpg";
import mumbo1 from "@/assets/previews/mumbo-1.jpg";
import mumbo2 from "@/assets/previews/mumbo-2.jpg";
import mumbo3 from "@/assets/previews/mumbo-3.jpg";

type Video = { title: string; views: string; thumb: string };
type Giant = { name: string; handle: string; avatar: string; videos: Video[] };

const ROW1: Giant[] = [
  {
    name: "MrBeast Gaming", handle: "@MrBeastGaming", avatar: mrbeastAvatar,
    videos: [
      { title: "$1,000,000 Minecraft Battle Royale", views: "82M", thumb: mrbeast1 },
      { title: "Last to Leave Minecraft Wins $20K", views: "61M", thumb: mrbeast2 },
      { title: "I Survived 100 Days in Hardcore", views: "44M", thumb: mrbeast3 },
    ],
  },
  {
    name: "Dream", handle: "@Dream", avatar: dreamAvatar,
    videos: [
      { title: "Minecraft Manhunt vs 4 Hunters", views: "120M", thumb: dream1 },
      { title: "Speedrunner vs Hunters Finale", views: "89M", thumb: dream2 },
      { title: "Beating Minecraft Blindfolded", views: "37M", thumb: dream3 },
    ],
  },
  {
    name: "Karl Jacobs", handle: "@Karl", avatar: karlAvatar,
    videos: [
      { title: "I Hosted a Minecraft Tournament", views: "12M", thumb: karl1 },
      { title: "Tales of the SMP Compilation", views: "9.4M", thumb: karl2 },
      { title: "Last to Leave the Circle", views: "7.8M", thumb: karl3 },
    ],
  },
  {
    name: "Athos", handle: "@Athosgamer", avatar: athosAvatar,
    videos: [
      { title: "Building the Largest Mob Farm", views: "18M", thumb: athos1 },
      { title: "Redstone Engineering Marvels", views: "14M", thumb: athos2 },
      { title: "I Made a Working Computer in MC", views: "11M", thumb: athos3 },
    ],
  },
  {
    name: "Maizen", handle: "@maizenofficial", avatar: maizenAvatar,
    videos: [
      { title: "JJ and Mikey Survival Stories", views: "240M", thumb: maizen1 },
      { title: "Mikey vs JJ Build Battle", views: "180M", thumb: maizen2 },
      { title: "Security House Challenge", views: "150M", thumb: maizen3 },
    ],
  },
];

const ROW2_GIANTS: Giant[] = [
  {
    name: "Technoblade", handle: "@Technoblade", avatar: technobladeAvatar,
    videos: [
      { title: "Minecraft Mondays Domination", views: "55M", thumb: techno1 },
      { title: "SMP Earth Highlights", views: "42M", thumb: techno2 },
      { title: "Potato War Finale", views: "38M", thumb: techno3 },
    ],
  },
  {
    name: "Stampy", handle: "@stampylonghead", avatar: stampyAvatar,
    videos: [
      { title: "Stampy's Lovely World Ep.500", views: "31M", thumb: stampy1 },
      { title: "Mini-Games with Friends", views: "24M", thumb: stampy2 },
      { title: "Building the Cake Town", views: "19M", thumb: stampy3 },
    ],
  },
  {
    name: "Grian", handle: "@Grian", avatar: grianAvatar,
    videos: [
      { title: "Hermitcraft Megabase Tour", views: "28M", thumb: grian1 },
      { title: "Build Swap Challenge", views: "21M", thumb: grian2 },
      { title: "Empires SMP Season Recap", views: "17M", thumb: grian3 },
    ],
  },
  {
    name: "Mumbo Jumbo", handle: "@ThatMumboJumbo", avatar: mumboAvatar,
    videos: [
      { title: "Insane Redstone Contraption", views: "22M", thumb: mumbo1 },
      { title: "Hermitcraft Industrial District", views: "18M", thumb: mumbo2 },
      { title: "Automatic Everything Base", views: "15M", thumb: mumbo3 },
    ],
  },
];

function GiantCard({ g, i }: { g: Giant; i: number }) {
  const { t } = useT();
  return (
    <article
      className="group flex flex-col w-[280px] flex-shrink-0 rounded-xl border border-border bg-surface p-5 hover:border-primary/40 transition-colors duration-200"
      style={{ animation: "var(--animate-fade-up)", animationDelay: `${(i % 5) * 60}ms`, animationFillMode: "backwards" }}
    >
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={g.avatar}
            alt={g.name}
            loading="lazy"
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover border border-border flex-shrink-0 bg-surface-elevated"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = "hidden"; }}
          />
          <div className="min-w-0">
            <h3 className="font-semibold text-sm leading-tight truncate">{g.name}</h3>
            <p className="text-xs text-muted-foreground truncate">{g.handle}</p>
          </div>
        </div>
        <div className="inline-flex items-center gap-1 rounded-md bg-primary/10 border border-primary/30 px-2 py-0.5 text-[10px] font-bold text-primary flex-shrink-0">
          <TrendingUp className="w-3 h-3" />
          +30%
        </div>
      </header>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {g.videos.map((v, idx) => (
          <div key={idx} className="aspect-video rounded-md relative overflow-hidden border border-border bg-surface-elevated">
            <img
              src={v.thumb}
              alt={v.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = "hidden"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
            <div className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-foreground bg-background/80 px-1 py-0.5 rounded">
              {v.views}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs pt-3 border-t border-border mt-auto">
        <span className="text-muted-foreground truncate">{t("opp.globalWatch")}</span>
        <span className="font-semibold text-primary">{t("opp.uplift")}</span>
      </div>
    </article>
  );
}

function CtaCard() {
  const { t } = useT();
  return (
    <article className="flex flex-col items-center justify-center text-center w-[280px] flex-shrink-0 rounded-xl border border-dashed border-primary/40 bg-surface p-5 gradient-border">
      <div className="text-2xl font-bold text-primary mb-2">{t("opp.ctaTitle")}</div>
      <p className="text-sm text-muted-foreground mb-5 max-w-xs">{t("opp.ctaDesc")}</p>
      <a
        href="#pricing"
        className="inline-flex items-center justify-center min-h-[44px] rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 transition-all"
      >
        {t("opp.ctaBtn")}
      </a>
    </article>
  );
}

export function Opportunity() {
  const { t } = useT();

  return (
    <section id="opportunity" className="py-14 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            {t("opp.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {t("opp.titleA")} <span className="gradient-text">{t("opp.titleB")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t("opp.subtitle")}</p>
        </div>
      </div>

      {/* Wide 2-row tape; cards peek out of edges */}
      <div className="space-y-5">
        <div className="flex gap-5 px-6" style={{ transform: "translateX(-60px)" }}>
          {ROW1.map((g, i) => (
            <GiantCard key={`r1-${i}`} g={g} i={i} />
          ))}
        </div>
        <div className="flex gap-5 px-6" style={{ transform: "translateX(-140px)" }}>
          {ROW2_GIANTS.map((g, i) => (
            <GiantCard key={`r2-${i}`} g={g} i={i} />
          ))}
          <CtaCard />
        </div>
      </div>
    </section>
  );
}
