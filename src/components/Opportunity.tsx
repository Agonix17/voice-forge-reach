import { TrendingUp } from "lucide-react";
import { useT } from "@/lib/i18n";

// Avatars
import mrbeastAvatar from "@/assets/avatars/mrbeast.jpg";
import dreamAvatar from "@/assets/avatars/dream.jpg";
import karlAvatar from "@/assets/avatars/karl.jpg";
import athosAvatar from "@/assets/avatars/athos.jpg";
import maizenAvatar from "@/assets/avatars/maizen.jpg";
import technobladeAvatar from "@/assets/avatars/technoblade.jpg";
import stampyAvatar from "@/assets/avatars/stampy.jpg";
import grianAvatar from "@/assets/avatars/grian.jpg";
import mumboAvatar from "@/assets/avatars/mumbo.jpg";
import popularmmosAvatar from "@/assets/avatars/popularmmos.jpg";
import captainsparklezAvatar from "@/assets/avatars/captainsparklez.jpg";
import aphmauAvatar from "@/assets/avatars/aphmau.jpg";
import prestonplayzAvatar from "@/assets/avatars/prestonplayz.jpg";
import ssundeeAvatar from "@/assets/avatars/ssundee.jpg";

// Previews
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
import popularmmos1 from "@/assets/previews/popularmmos-1.jpg";
import popularmmos2 from "@/assets/previews/popularmmos-2.jpg";
import popularmmos3 from "@/assets/previews/popularmmos-3.jpg";
import captainsparklez1 from "@/assets/previews/captainsparklez-1.jpg";
import captainsparklez2 from "@/assets/previews/captainsparklez-2.jpg";
import captainsparklez3 from "@/assets/previews/captainsparklez-3.jpg";
import aphmau1 from "@/assets/previews/aphmau-1.jpg";
import aphmau2 from "@/assets/previews/aphmau-2.jpg";
import aphmau3 from "@/assets/previews/aphmau-3.jpg";
import prestonplayz1 from "@/assets/previews/prestonplayz-1.jpg";
import prestonplayz2 from "@/assets/previews/prestonplayz-2.jpg";
import prestonplayz3 from "@/assets/previews/prestonplayz-3.jpg";
import ssundee1 from "@/assets/previews/ssundee-1.jpg";
import ssundee2 from "@/assets/previews/ssundee-2.jpg";
import ssundee3 from "@/assets/previews/ssundee-3.jpg";

type Preview = { thumbnail: string; views: string };
type Giant = {
  name: string;
  handle: string;
  logo: string;
  uplift: string;
  globalWatchTime: string;
  previews: [Preview, Preview, Preview];
};

const ROW1: Giant[] = [
  {
    name: "MrBeast Gaming", handle: "@MrBeastGaming", logo: mrbeastAvatar, uplift: "+30%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: mrbeast1, views: "82M" },
      { thumbnail: mrbeast2, views: "61M" },
      { thumbnail: mrbeast3, views: "44M" },
    ],
  },
  {
    name: "Dream", handle: "@Dream", logo: dreamAvatar, uplift: "+35%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: dream1, views: "120M" },
      { thumbnail: dream2, views: "89M" },
      { thumbnail: dream3, views: "37M" },
    ],
  },
  {
    name: "Karl Jacobs", handle: "@Karl", logo: karlAvatar, uplift: "+25%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: karl1, views: "12M" },
      { thumbnail: karl2, views: "9.4M" },
      { thumbnail: karl3, views: "7.8M" },
    ],
  },
  {
    name: "Athos", handle: "@Athosgamer", logo: athosAvatar, uplift: "+29%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: athos1, views: "18M" },
      { thumbnail: athos2, views: "14M" },
      { thumbnail: athos3, views: "11M" },
    ],
  },
  {
    name: "Maizen", handle: "@maizenofficial", logo: maizenAvatar, uplift: "+40%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: maizen1, views: "240M" },
      { thumbnail: maizen2, views: "180M" },
      { thumbnail: maizen3, views: "150M" },
    ],
  },
  {
    name: "PopularMMOs", handle: "@PopularMMOs", logo: popularmmosAvatar, uplift: "+28%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: popularmmos1, views: "26M" },
      { thumbnail: popularmmos2, views: "19M" },
      { thumbnail: popularmmos3, views: "14M" },
    ],
  },
  {
    name: "Ssundee", handle: "@Ssundee", logo: ssundeeAvatar, uplift: "+29%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: ssundee1, views: "44M" },
      { thumbnail: ssundee2, views: "31M" },
      { thumbnail: ssundee3, views: "22M" },
    ],
  },
];

const ROW2: Giant[] = [
  {
    name: "Technoblade", handle: "@Technoblade", logo: technobladeAvatar, uplift: "+32%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: techno1, views: "55M" },
      { thumbnail: techno2, views: "42M" },
      { thumbnail: techno3, views: "38M" },
    ],
  },
  {
    name: "Stampy", handle: "@stampylonghead", logo: stampyAvatar, uplift: "+26%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: stampy1, views: "31M" },
      { thumbnail: stampy2, views: "24M" },
      { thumbnail: stampy3, views: "19M" },
    ],
  },
  {
    name: "Grian", handle: "@Grian", logo: grianAvatar, uplift: "+34%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: grian1, views: "28M" },
      { thumbnail: grian2, views: "21M" },
      { thumbnail: grian3, views: "17M" },
    ],
  },
  {
    name: "Mumbo Jumbo", handle: "@ThatMumboJumbo", logo: mumboAvatar, uplift: "+24%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: mumbo1, views: "22M" },
      { thumbnail: mumbo2, views: "18M" },
      { thumbnail: mumbo3, views: "15M" },
    ],
  },
  {
    name: "CaptainSparklez", handle: "@CaptainSparklez", logo: captainsparklezAvatar, uplift: "+33%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: captainsparklez1, views: "48M" },
      { thumbnail: captainsparklez2, views: "36M" },
      { thumbnail: captainsparklez3, views: "29M" },
    ],
  },
  {
    name: "Aphmau", handle: "@Aphmau", logo: aphmauAvatar, uplift: "+31%", globalWatchTime: "Global Watch Time",
    previews: [
      { thumbnail: aphmau1, views: "72M" },
      { thumbnail: aphmau2, views: "58M" },
      { thumbnail: aphmau3, views: "41M" },
    ],
  },
];

function GiantCard({ g, i }: { g: Giant; i: number }) {
  return (
    <article
      className="group flex flex-col w-[280px] flex-shrink-0 rounded-xl border border-border bg-surface p-5 hover:border-primary/40 transition-colors duration-200"
      style={{ animation: "var(--animate-fade-up)", animationDelay: `${(i % 6) * 60}ms`, animationFillMode: "backwards" }}
    >
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={g.logo}
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
          {g.uplift}
        </div>
      </header>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {g.previews.map((v, idx) => (
          <div key={idx} className="aspect-video rounded-md relative overflow-hidden border border-border bg-surface-elevated">
            <img
              src={v.thumbnail}
              alt={`${g.name} preview ${idx + 1}`}
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
        <span className="text-muted-foreground truncate">{g.globalWatchTime}</span>
        <span className="font-semibold text-primary">{g.uplift}</span>
      </div>
    </article>
  );
}

function CtaCard() {
  const { t } = useT();
  return (
    <article className="relative overflow-hidden flex flex-col items-center justify-center text-center w-[280px] flex-shrink-0 rounded-xl border border-dashed border-primary/40 bg-surface p-5 gradient-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)" }}
      />
      <div className="relative text-2xl font-bold gradient-text mb-2">{t("opp.ctaTitle")}</div>
      <p className="relative text-sm text-muted-foreground mb-5 max-w-xs">{t("opp.ctaDesc")}</p>
      <a
        href="#pricing"
        className="relative inline-flex w-full items-center justify-center min-h-[44px] rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 transition-all"
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

      <div className="space-y-5">
        <div className="flex gap-5 px-6" style={{ transform: "translateX(-60px)" }}>
          {ROW1.map((g, i) => (
            <GiantCard key={`r1-${i}`} g={g} i={i} />
          ))}
        </div>
        <div className="flex gap-5 px-6" style={{ transform: "translateX(-140px)" }}>
          {ROW2.map((g, i) => (
            <Fragment key={`r2-${i}`}>
              {i === 3 && <CtaCard />}
              <GiantCard g={g} i={i} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
