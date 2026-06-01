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
  { name: "Aphmau", handle: "@Aphmau", initials: "AP", videos: [
    { title: "Mystreet: Starlight ", views: "58M" },
    { title: "Minecraft Diaries Finale", views: "42M" },
    { title: "Emerald Secret Story", views: "33M" },
  ]},
  { name: "Preston", handle: "@Preston", initials: "PR", videos: [
    { title: "I Found the Rarest Block", views: "29M" },
    { title: "Lucky Block Race", views: "24M" },
    { title: "Minecraft But Everything Is Lava", views: "21M" },
  ]},
  { name: "DanTDM", handle: "@DanTDM", initials: "DT", videos: [
    { title: "100 Days in a Modded World", views: "47M" },
    { title: "The Diamond Minecart", views: "35M" },
    { title: "Hardcore Survival Episode", views: "28M" },
  ]},
  { name: "SSundee", handle: "@SSundee", initials: "SS", videos: [
    { title: "Insane Craft Madness", views: "52M" },
    { title: "Skyblock But OP", views: "40M" },
    { title: "Bedwars Domination", views: "31M" },
  ]},
  { name: "Technoblade", handle: "@Technoblade", initials: "TB", videos: [
    { title: "Dream SMP Finale", views: "98M" },
    { title: "Potato War Saga", views: "76M" },
    { title: "Hardcore 1000 Days", views: "65M" },
  ]},
];

export function Opportunity() {
  const { t } = useT();
  return (
    <section id="opportunity" className="py-24 md:py-32 relative overflow-hidden">
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
      </div>

      {/* Full-bleed horizontal ribbon */}
      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 px-6 md:px-12 pb-4 w-max">
            {GIANTS.map((g, i) => (
              <article
                key={g.name}
                className="snap-start group w-[320px] sm:w-[360px] flex-shrink-0 rounded-2xl border border-border bg-surface p-5 shadow-xl shadow-black/20 hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 ease-out"
                style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
              >
                <header className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-foreground font-semibold text-sm overflow-hidden flex-shrink-0">
                      {g.logo ? (
                        <img src={g.logo} alt={`${g.name} logo`} className="w-full h-full object-cover" />
                      ) : (
                        g.initials
                      )}
                    </div>
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
                      className="aspect-video rounded-md bg-surface-elevated relative overflow-hidden border border-border"
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

            <div className="snap-start w-[320px] sm:w-[360px] flex-shrink-0 rounded-2xl border border-dashed border-primary/40 bg-surface p-5 flex flex-col items-center justify-center text-center shadow-xl shadow-primary/5 hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">{t("opp.ctaTitle")}</div>
              <p className="text-sm text-muted-foreground mb-5 max-w-xs">{t("opp.ctaDesc")}</p>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center min-h-[44px] rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
              >
                {t("opp.ctaBtn")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
