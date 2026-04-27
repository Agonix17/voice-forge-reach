const points = [
  {
    en: "griefing",
    ru: "гриферство",
    note: "Not just \"vandalism\" — the culture, the chaos, the meme.",
  },
  {
    en: "redstone mechanics",
    ru: "редстоун-механика",
    note: "Native technical vocabulary that actual RU builders use.",
  },
  {
    en: "OP loot",
    ru: "имба-лут",
    note: "Slang that lands. Not literal. Not awkward.",
  },
  {
    en: "speedrun PB",
    ru: "спидран ПБ",
    note: "Community jargon preserved. Subscribers feel at home.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
              Why VoxLocalize
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              We don't translate words.
              <br />
              We translate the <span className="gradient-text">vibe.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Generic translation services give you a textbook. We give you a fluent Russian streamer who happens to sound exactly like you. From "griefing" to "redstone mechanics" — we speak the player's language.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <div className="text-3xl font-bold gradient-text">7 yrs</div>
                <div className="text-sm text-muted-foreground mt-1">In Minecraft creator economy</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">200+</div>
                <div className="text-sm text-muted-foreground mt-1">Channels localized</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">12B</div>
                <div className="text-sm text-muted-foreground mt-1">Cumulative views unlocked</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Client retention rate</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {points.map((p, i) => (
              <div
                key={p.en}
                className="group rounded-xl border border-border bg-surface p-5 hover:border-primary/40 hover:bg-surface-elevated transition-all"
                style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-base font-mono text-muted-foreground">{p.en}</span>
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                  <span className="text-base font-mono text-primary font-semibold">{p.ru}</span>
                </div>
                <p className="text-sm text-muted-foreground">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
