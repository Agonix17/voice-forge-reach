import { TrendingUp } from "lucide-react";
import { useT } from "@/lib/i18n";
import mrBeastAvatar from "@/assets/avatars/mrbeast.jpg";
import dreamAvatar from "@/assets/avatars/dream.jpg";
import karlAvatar from "@/assets/avatars/karl.jpg";
import athosAvatar from "@/assets/avatars/athos.jpg";
import maizenAvatar from "@/assets/avatars/maizen.jpg";
import mrBeastPreview from "@/assets/previews/mrbeast-preview-1.jpg";
import dreamPreview from "@/assets/previews/dream-preview-1.jpg";
import karlPreview from "@/assets/previews/karl-preview-1.jpg";
import athosPreview from "@/assets/previews/athos-preview-1.jpg";
import maizenPreview from "@/assets/previews/maizen-preview-1.jpg";

type Giant = {
  name: string;
  handle: string;
  avatar: string;
  preview: string;
  videos: { title: string; views: string }[];
};

const GIANTS: Giant[] = [
  {
    name: "MrBeast Gaming",
    handle: "@MrBeastGaming",
    avatar: mrBeastAvatar,
    preview: mrBeastPreview,
    videos: [
      { title: "$1,000,000 Minecraft Battle Royale", views: "82M" },
      { title: "Last to Leave Minecraft Wins $20K", views: "61M" },
      { title: "I Survived 100 Days in Hardcore", views: "44M" },
    ],
  },
  {
    name: "Dream",
    handle: "@Dream",
    avatar: dreamAvatar,
    preview: dreamPreview,
    videos: [
      { title: "Minecraft Manhunt vs 4 Hunters", views: "120M" },
      { title: "Speedrunner vs Hunters Finale", views: "89M" },
      { title: "Beating Minecraft Blindfolded", views: "37M" },
    ],
  },
  {
    name: "Karl Jacobs",
    handle: "@Karl",
    avatar: karlAvatar,
    preview: karlPreview,
    videos: [
      { title: "I Hosted a Minecraft Tournament", views: "12M" },
      { title: "Tales of the SMP Compilation", views: "9.4M" },
      { title: "Last to Leave the Circle", views: "7.8M" },
    ],
  },
  {
    name: "Athos",
    handle: "@Athosgamer",
    avatar: athosAvatar,
    preview: athosPreview,
    videos: [
      { title: "Building the Largest Mob Farm", views: "18M" },
      { title: "Redstone Engineering Marvels", views: "14M" },
      { title: "I Made a Working Computer in MC", views: "11M" },
    ],
  },
  {
    name: "Maizen",
    handle: "@maizenofficial",
    avatar: maizenAvatar,
    preview: maizenPreview,
    videos: [
      { title: "JJ and Mikey Survival Stories", views: "240M" },
      { title: "Mikey vs JJ Build Battle", views: "180M" },
      { title: "Security House Challenge", views: "150M" },
    ],
  },
];

export function Opportunity() {
  const { t } = useT();
  return (
    <section id="opportunity" className="py-14 md:py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            {t("opp.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {t("opp.titleA")} <span className="gradient-text">{t("opp.titleB")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t("opp.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr w-full">
          {GIANTS.map((g, i) => (
            <article
              key={g.name}
              className="group flex flex-col h-full rounded-xl border border-border bg-surface p-5 hover:border-primary/40 transition-colors duration-200"
              style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
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
                    <h3 className="font-semibold text-base leading-tight truncate">{g.name}</h3>
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
                      src={g.preview}
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
                <span className="text-muted-foreground">{t("opp.globalWatch")}</span>
                <span className="font-semibold text-primary">{t("opp.uplift")}</span>
              </div>
            </article>
          ))}

          <article className="flex flex-col items-center justify-center text-center h-full rounded-xl border border-dashed border-primary/40 bg-surface p-5 gradient-border">
            <div className="text-3xl font-bold text-primary mb-2">{t("opp.ctaTitle")}</div>
            <p className="text-sm text-muted-foreground mb-5 max-w-xs">{t("opp.ctaDesc")}</p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center min-h-[44px] rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 transition-all"
            >
              {t("opp.ctaBtn")}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
