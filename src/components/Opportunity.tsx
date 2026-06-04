import { TrendingUp } from "lucide-react";
import { useT } from "@/lib/i18n";
import mrBeastAvatar from "@/assets/avatars/mrbeast.jpg";
import dreamAvatar from "@/assets/avatars/dream.jpg";
import karlAvatar from "@/assets/avatars/karl.jpg";
import athosAvatar from "@/assets/avatars/athos.jpg";
import maizenAvatar from "@/assets/avatars/maizen.jpg";
import mrBeastP1 from "@/assets/previews/mrbeast-preview-1.jpg";
import mrBeastP2 from "@/assets/previews/mrbeast-preview-2.jpg";
import mrBeastP3 from "@/assets/previews/mrbeast-preview-3.jpg";
import dreamP1 from "@/assets/previews/dream-preview-1.jpg";
import dreamP2 from "@/assets/previews/dream-preview-2.jpg";
import dreamP3 from "@/assets/previews/dream-preview-3.jpg";
import karlP1 from "@/assets/previews/karl-preview-1.jpg";
import karlP2 from "@/assets/previews/karl-preview-2.jpg";
import karlP3 from "@/assets/previews/karl-preview-3.jpg";
import athosP1 from "@/assets/previews/athos-preview-1.jpg";
import athosP2 from "@/assets/previews/athos-preview-2.jpg";
import athosP3 from "@/assets/previews/athos-preview-3.jpg";
import maizenP1 from "@/assets/previews/maizen-preview-1.jpg";
import maizenP2 from "@/assets/previews/maizen-preview-2.jpg";
import maizenP3 from "@/assets/previews/maizen-preview-3.jpg";

type Video = { title: string; views: string; thumb: string };
type Giant = {
  name: string;
  handle: string;
  avatar: string;
  videos: Video[];
};

const GIANTS: Giant[] = [
  {
    name: "MrBeast Gaming",
    handle: "@MrBeastGaming",
    avatar: mrBeastAvatar,
    videos: [
      { title: "$1,000,000 Minecraft Battle Royale", views: "82M", thumb: mrBeastP1 },
      { title: "Last to Leave Minecraft Wins $20K", views: "61M", thumb: mrBeastP2 },
      { title: "I Survived 100 Days in Hardcore", views: "44M", thumb: mrBeastP3 },
    ],
  },
  {
    name: "Dream",
    handle: "@Dream",
    avatar: dreamAvatar,
    videos: [
      { title: "Minecraft Manhunt vs 4 Hunters", views: "120M", thumb: dreamP1 },
      { title: "Speedrunner vs Hunters Finale", views: "89M", thumb: dreamP2 },
      { title: "Beating Minecraft Blindfolded", views: "37M", thumb: dreamP3 },
    ],
  },
  {
    name: "Karl Jacobs",
    handle: "@Karl",
    avatar: karlAvatar,
    videos: [
      { title: "I Hosted a Minecraft Tournament", views: "12M", thumb: karlP1 },
      { title: "Tales of the SMP Compilation", views: "9.4M", thumb: karlP2 },
      { title: "Last to Leave the Circle", views: "7.8M", thumb: karlP3 },
    ],
  },
  {
    name: "Athos",
    handle: "@Athosgamer",
    avatar: athosAvatar,
    videos: [
      { title: "Building the Largest Mob Farm", views: "18M", thumb: athosP1 },
      { title: "Redstone Engineering Marvels", views: "14M", thumb: athosP2 },
      { title: "I Made a Working Computer in MC", views: "11M", thumb: athosP3 },
    ],
  },
  {
    name: "Maizen",
    handle: "@maizenofficial",
    avatar: maizenAvatar,
    videos: [
      { title: "JJ and Mikey Survival Stories", views: "240M", thumb: maizenP1 },
      { title: "Mikey vs JJ Build Battle", views: "180M", thumb: maizenP2 },
      { title: "Security House Challenge", views: "150M", thumb: maizenP3 },
    ],
  },
];

function GiantCard({ g, i }: { g: Giant; i: number }) {
  const { t } = useT();
  return (
    <article
      className="group flex flex-col w-[290px] flex-shrink-0 rounded-xl border border-border bg-surface p-5 hover:border-primary/40 transition-colors duration-200"
      style={{ animation: "var(--animate-fade-up)", animationDelay: `${(i % 6) * 60}ms`, animationFillMode: "backwards" }}
    >
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={g.avatar}
            alt={g.name}
            loading="lazy"
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover border border-border flex-shrink-0"
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
          <div
            key={idx}
            className="aspect-video rounded-md relative overflow-hidden border border-border bg-surface-elevated"
          >
            <img
              src={v.thumb}
              alt={v.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
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
    <article className="flex flex-col items-center justify-center text-center w-[290px] flex-shrink-0 rounded-xl border border-dashed border-primary/40 bg-surface p-5 gradient-border">
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

  // Build two rows: tripled giants with CTA inserted mid-tape
  const tripled = [...GIANTS, ...GIANTS, ...GIANTS];
  const row1 = tripled;
  const row2 = [...GIANTS, ...GIANTS, ...GIANTS];

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

      {/* Infinite-tape rows: overflow visible so cards peek from both edges */}
      <div className="space-y-5">
        <div className="flex gap-5 px-6 -mx-6" style={{ transform: "translateX(-80px)" }}>
          {row1.map((g, i) => (
            <GiantCard key={`r1-${i}`} g={g} i={i} />
          ))}
        </div>
        <div className="flex gap-5 px-6 -mx-6" style={{ transform: "translateX(-180px)" }}>
          {row2.slice(0, 4).map((g, i) => (
            <GiantCard key={`r2a-${i}`} g={g} i={i} />
          ))}
          <CtaCard />
          {row2.slice(4).map((g, i) => (
            <GiantCard key={`r2b-${i}`} g={g} i={i + 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
