import { TrendingUp } from "lucide-react";
import mrBeastPreview1 from "@/assets/preview-mrbeast-1.jpg";
import mrBeastLogo from "@/assets/logo-mrbeast.jpeg";
import dreamLogo from "@/assets/dream.jpg";
import karlLogo from "@/assets/Karl.jpg";
import athosLogo from "@/assets/Athos.jpg";
import maizenLogo from "@/assets/Maizen.jpg";

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
  {
    name: "Dream",
    handle: "@Dream",
    initials: "DR",
    logo: dreamLogo,
    videos: [
      { title: "Minecraft Manhunt vs 4 Hunters", views: "120M" },
      { title: "Speedrunner vs Hunters Finale", views: "89M" },
      { title: "Beating Minecraft Blindfolded", views: "37M" },
    ],
  },
  {
    name: "Karl Jacobs",
    handle: "@Karl",
    initials: "KJ",
    logo: karlLogo,
    videos: [
      { title: "I Hosted a Minecraft Tournament", views: "12M" },
      { title: "Tales of the SMP Compilation", views: "9.4M" },
      { title: "Last to Leave the Circle", views: "7.8M" },
    ],
  },
  {
    name: "Athos",
    handle: "@Athosgamer",
    initials: "AT",
    logo: athosLogo,
    videos: [
      { title: "Building the Largest Mob Farm", views: "18M" },
      { title: "Redstone Engineering Marvels", views: "14M" },
      { title: "I Made a Working Computer in MC", views: "11M" },
    ],
  },
  {
    name: "Maizen",
    handle: "@maizenofficial",
    initials: "MZ",
    logo: maizenLogo,
    videos: [
      { title: "JJ and Mikey Survival Stories", views: "240M" },
      { title: "Mikey vs JJ Build Battle", views: "180M" },
      { title: "Security House Challenge", views: "150M" },
    ],
  },
];

export function Opportunity() {
  return (
    <section id="opportunity" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            Proof
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            The Best Are Already <span className="gradient-text">Dominating the Russian Market</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Top creators quietly localize their videos and unlock 8-figure view counts. You can too.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {GIANTS.map((g, i) => (
            <article
              key={g.name}
              className="group rounded-2xl border border-border bg-surface p-5 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
              style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
            >
              <header className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold text-sm overflow-hidden">
                    {g.logo ? (
                      <img src={g.logo} alt={`${g.name} logo`} className="w-full h-full object-cover" />
                    ) : (
                      g.initials
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-tight">{g.name}</h3>
                    <p className="text-xs text-muted-foreground">{g.handle}</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-primary/15 border border-primary/30 px-2.5 py-1 text-[10px] font-bold text-primary">
                  <TrendingUp className="w-3 h-3" />
                  +30%
                </div>
              </header>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {g.videos.map((v, idx) => (
                  <div
                    key={idx}
                    className="h-20 rounded-md bg-gradient-to-br from-surface-elevated to-background relative overflow-hidden border border-border group-hover:border-primary/30 transition-colors"
                  >
                    {v.thumbnail ? (
                      <img
                        src={v.thumbnail}
                        alt={v.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 grid-pattern opacity-40" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-primary bg-background/80 px-1 py-0.5 rounded">
                      {v.views}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-background/70 flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs pt-3 border-t border-border">
                <span className="text-muted-foreground">Global Watch Time</span>
                <span className="font-bold text-primary">+30% uplift</span>
              </div>
            </article>
          ))}

          {/* CTA card */}
          <div className="rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 p-5 flex flex-col items-center justify-center text-center min-h-[280px]">
            <div className="text-4xl font-bold gradient-text mb-2">You're Next</div>
            <p className="text-sm text-muted-foreground mb-5 max-w-xs">
              Stop leaving 40M viewers on the table. Join the giants for $75.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center min-h-[44px] rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition-all hover:scale-105 shadow-glow"
            >
              Claim Your Pack →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
