import { useState } from "react";
import { Check, X, Mic } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

type Mode = "original" | "auto" | "vox";

const MODES: Record<Mode, {
  label: string;
  badge: string;
  caption: string;
  waveColor: string;
  ringClass: string;
  badgeClass: string;
  quality: string;
  qualityClass: string;
  vibe: string;
}> = {
  original: {
    label: "Original EN",
    badge: "Source",
    caption: "\"Watch this insane redstone trap I just built — it's actually broken!\"",
    waveColor: "var(--muted-foreground)",
    ringClass: "ring-border",
    badgeClass: "bg-surface-elevated text-muted-foreground border-border",
    quality: "Native Creator Voice",
    qualityClass: "text-muted-foreground",
  },
  auto: {
    label: "YouTube Auto-Dub",
    badge: "Bad Quality",
    caption: "\"Посмотрите эту безумную ловушку из редстоуна, которую я построил.\"",
    waveColor: "var(--destructive)",
    ringClass: "ring-destructive/60",
    badgeClass: "bg-destructive/15 text-destructive border-destructive/40",
    quality: "Robotic · Flat · Wrong slang",
    qualityClass: "text-destructive",
  },
  vox: {
    label: "VoxLocalize Dub",
    badge: "Premium",
    caption: "\"Зацени, какую жёсткую ловушку на редстоуне я заделал — её реально сломать!\"",
    waveColor: "var(--primary)",
    ringClass: "ring-primary",
    badgeClass: "bg-primary/15 text-primary border-primary/40",
    quality: "Cloned voice · Native slang · 99.2% match",
    qualityClass: "text-primary",
  },
};

export function Hero() {
  const [mode, setMode] = useState<Mode>("original");
  const m = MODES[mode];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" width={1920} height={1080} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
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
              Premium AI Dub for Minecraft Creators
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              One Video.
              <br />
              <span className="gradient-text">40 Million</span> New Viewers.
              <br />
              <span className="text-foreground">$75.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Experience the difference between a bot and a localized masterpiece. Toggle the player and hear it for yourself.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-glow transition-all hover:scale-105 shadow-glow">
                Get My Free 60s Demo →
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-8 py-4 text-base font-semibold text-foreground hover:bg-surface-elevated transition-colors">
                See the $75 Pack
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold gradient-text">40M+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">RU Speakers</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold gradient-text">+30%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Watch Time</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold gradient-text">72h</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Turnaround</div>
              </div>
            </div>
          </div>

          {/* Right: Truth Player */}
          <div className="relative" style={{ animation: "var(--animate-scale-in)" }}>
            <div className={`relative rounded-2xl overflow-hidden bg-surface ring-2 transition-all duration-500 ${m.ringClass}`}>
              <div className="aspect-video relative bg-gradient-to-br from-surface-elevated to-background flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />

                {/* Mode badge */}
                <div className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${m.badgeClass}`}>
                  {mode === "vox" && <Check className="w-3 h-3" />}
                  {mode === "auto" && <X className="w-3 h-3" />}
                  {mode === "original" && <Mic className="w-3 h-3" />}
                  {m.badge}
                </div>

                {/* Animated waveform */}
                <div className="flex items-end gap-1 h-24 px-8">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: m.waveColor,
                        height: `${20 + Math.abs(Math.sin((i + (mode === "auto" ? 0 : mode === "vox" ? 2 : 1)) * 0.6)) * 80}%`,
                        opacity: mode === "auto" ? 0.5 : 0.9,
                        animation: `glow-pulse ${1.2 + (i % 5) * 0.2}s ease-in-out infinite`,
                        animationDelay: `${i * 40}ms`,
                      }}
                    />
                  ))}
                </div>

                {/* Caption */}
                <div className="absolute bottom-12 left-0 right-0 px-6 text-center">
                  <div key={mode} className="inline-block bg-background/85 backdrop-blur-sm rounded-md px-4 py-2 text-sm font-medium max-w-md" style={{ animation: "var(--animate-fade-in)" }}>
                    {m.caption}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
                  <div className="h-full transition-all duration-500" style={{ width: "42%", backgroundColor: m.waveColor }} />
                </div>
              </div>

              {/* Quality strip */}
              <div className="px-5 py-3 border-t border-border flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground">02:14 / 05:21</span>
                <span className={`font-semibold ${m.qualityClass}`}>{m.quality}</span>
              </div>

              {/* Toggle row */}
              <div className="grid grid-cols-3 gap-2 p-3 border-t border-border bg-background/40">
                {(Object.keys(MODES) as Mode[]).map((k) => {
                  const active = mode === k;
                  const isVox = k === "vox";
                  const isAuto = k === "auto";
                  return (
                    <button
                      key={k}
                      onClick={() => setMode(k)}
                      className={`group relative flex flex-col items-center gap-1 px-3 py-3 rounded-lg text-xs font-semibold transition-all ${
                        active
                          ? isVox
                            ? "bg-primary text-primary-foreground shadow-glow"
                            : isAuto
                            ? "bg-destructive/20 text-destructive border border-destructive/50"
                            : "bg-surface-elevated text-foreground border border-border"
                          : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {isVox && <Check className="w-3.5 h-3.5" />}
                        {isAuto && <X className="w-3.5 h-3.5" />}
                        {k === "original" && <Mic className="w-3.5 h-3.5" />}
                        {MODES[k].label}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider opacity-80">
                        {MODES[k].badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="absolute -inset-4 -z-10 bg-primary/20 blur-3xl rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
