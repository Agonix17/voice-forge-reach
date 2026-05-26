import { TrendingUp } from "lucide-react";
import mrBeastPreview1 from "@/assets/preview-mrbeast-1.jpg";
import mrBeastLogo from "@/assets/logo-mrbeast.jpeg";
import dreamLogo from "@/assets/dream.jpg";
import karlLogo from "@/assets/Karl.jpg";
import athosLogo from "@/assets/Athos.jpg";
import maizenLogo from "@/assets/Maizen.jpg";
import { useT } from "@/lib/i18n";

type Giant = {
  name: string;
  handle: string;
  initials: string;
  logo?: string;
  videos: { title: string; views: string; thumbnail?: string }[];
};

const GIANTS: Giant[] = [
  {
    name: "MrBeast Gaming",
    handle: "@MrBeastGaming",
    initials: "MB",
    logo: mrBeastLogo,
    videos: [
      { title: "$1,000,000 Minecraft Battle Royale", views: "82M", thumbnail: mrBeastPreview1 },
      { title: "Last to Leave Minecraft Wins $20K", views: "61M" },
      { title: "I Survived 100 Days in Hardcore", views: "44M" },
    ],
  },
  { name: "Dream", handle: "@Dream", initials: "DR", logo: dreamLogo, videos: [
    { title: "Minecraft Manhunt vs 4 Hunters", views: "120M" },
    { title: "Speedrunner vs Hunters Finale", views: "89M" },
    { title: "Beating Minecraft Blindfolded", views: "37M" },
  ]},
  { name: "Karl Jacobs", handle: "@Karl", initials: "KJ", logo: karlLogo, videos: [
    { title: "I Hosted a Minecraft Tournament", views: "12M" },
    { title: "Tales of the SMP Compilation", views: "9.4M" },
    { title: "Last to Leave the Circle", views: "7.8M" },
  ]},
  { name: "Athos", handle: "@Athosgamer", initials: "AT", logo: athosLogo, videos: [
    { title: "Building the Largest Mob Farm", views: "18M" },
    { title: "Redstone Engineering Marvels", views: "14M" },
    { title: "I Made a Working Computer in MC", views: "11M" },
  ]},
  { name: "Maizen", handle: "@maizenofficial", initials: "MZ", logo: maizenLogo, videos: [
    { title: "JJ and Mikey Survival Stories", views: "240M" },
    { title: "Mikey vs JJ Build Battle", views: "180M" },
    { title: "Security House Challenge", views: "150M" },
  ]},
];

export function Opportunity() {
  const { t } = useT();
  return (
    <section id="opportunity" className="py-24 md:py-32 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {GIANTS.map((g, i) => (
            <article
              key={g.name}
              className="group rounded-xl border border-border bg-surface p-5 hover:border-primary/40 transition-colors duration-200"
              style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
            >
              <header className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-foreground font-semibold text-sm overflow-hidden">
                    {g.logo ? (
                      <img src={g.logo} alt={`${g.name} logo`} className="w-full h-full object-cover" />
                    ) : (
                      g.initials
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base leading-tight">{g.name}</h3>
                    <p className="text-xs text-muted-foreground">{g.handle}</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 rounded-md bg-primary/10 border border-primary/30 px-2 py-0.5 text-[10px] font-bold text-primary">
                  <TrendingUp className="w-3 h-3" />
                  +30%
                </div>
              </header>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {g.videos.map((v, idx) => (
                  <div
                    key={idx}
                    className="h-20 rounded-md bg-surface-elevated relative overflow-hidden border border-border"
                  >
                    {v.thumbnail ? (
                      <img src={v.thumbnail} alt={v.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 grid-pattern opacity-40" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                    <div className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-foreground bg-background/80 px-1 py-0.5 rounded">
                      {v.views}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs pt-3 border-t border-border">
                <span className="text-muted-foreground">{t("opp.globalWatch")}</span>
                <span className="font-semibold text-primary">{t("opp.uplift")}</span>
              </div>
            </article>
          ))}

          <div className="rounded-xl border border-dashed border-primary/40 bg-surface p-5 flex flex-col items-center justify-center text-center min-h-[280px]">
            <div className="text-3xl font-bold text-primary mb-2">{t("opp.ctaTitle")}</div>
            <p className="text-sm text-muted-foreground mb-5 max-w-xs">{t("opp.ctaDesc")}</p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center min-h-[44px] rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {t("opp.ctaBtn")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
