import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const [lang, setLang] = useState<"EN" | "RU">("EN");
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8" style={{ animation: "var(--animate-fade-up)" }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI Voice Localization for Minecraft Creators
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Global Reach
              <br />
              Without the
              <br />
              <span className="gradient-text">Language Barrier.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Scale your Minecraft channel to <span className="text-foreground font-semibold">40M+ Russian speakers</span>. We clone your voice and adapt your slang with AI precision. Zero effort, maximum ROI.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-glow transition-all hover:scale-105 shadow-glow"
              >
                Localize My Channel →
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-8 py-4 text-base font-semibold text-foreground hover:bg-surface-elevated transition-colors"
              >
                See Pricing
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold gradient-text">40M+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">RU Speakers</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold gradient-text">+45%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">View Increase</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold gradient-text">72h</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Turnaround</div>
              </div>
            </div>
          </div>

          {/* Right: Player */}
          <div className="relative" style={{ animation: "var(--animate-scale-in)" }}>
            <div className="relative rounded-2xl overflow-hidden glow-border bg-surface">
              {/* Video placeholder */}
              <div className="aspect-video relative bg-gradient-to-br from-surface-elevated to-background flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />

                {/* Play button */}
                <button
                  onClick={() => setPlaying(!playing)}
                  className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform shadow-glow"
                  aria-label="Play demo"
                >
                  {playing ? (
                    <svg className="w-7 h-7 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                  ) : (
                    <svg className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                {/* Subtitle */}
                <div className="absolute bottom-16 left-0 right-0 text-center px-6">
                  <div className="inline-block bg-background/80 backdrop-blur-sm rounded-md px-4 py-2 text-sm font-medium">
                    {lang === "EN"
                      ? "\"Watch this insane redstone trap I built!\""
                      : "\"Зацени, какую жёсткую ловушку на редстоуне я заделал!\""}
                  </div>
                </div>

                {/* Lang toggle */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full p-1 border border-border">
                  {(["EN", "RU"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                        lang === l
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
                  <div className="h-full bg-primary w-1/3" />
                </div>
              </div>

              {/* Caption */}
              <div className="px-5 py-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Voice Cloning Demo</div>
                    <div className="text-xs text-muted-foreground">Switch language to compare</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-primary">99.2% MATCH</div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 -z-10 bg-primary/20 blur-3xl rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
