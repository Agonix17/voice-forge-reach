import { useT } from "@/lib/i18n";

const POINTS = [
  { en: "griefing", ru: "гриферство", noteKey: "why.p1.note" },
  { en: "redstone mechanics", ru: "редстоун-механика", noteKey: "why.p2.note" },
  { en: "OP loot", ru: "имба-лут", noteKey: "why.p3.note" },
  { en: "speedrun PB", ru: "спидран ПБ", noteKey: "why.p4.note" },
];

export function WhyUs() {
  const { t } = useT();
  const stats = [
    { v: "7 yrs", l: t("why.stat1") },
    { v: "200+", l: t("why.stat2") },
    { v: "12B", l: t("why.stat3") },
    { v: "98%", l: t("why.stat4") },
  ];
  return (
    <section id="why" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
              {t("why.eyebrow")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              {t("why.titleA")}
              <br />
              {t("why.titleB")} <span className="gradient-text">{t("why.titleC")}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("why.subtitle")}</p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-bold text-primary">{s.v}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {POINTS.map((p, i) => (
              <div
                key={p.en}
                className="rounded-lg border border-border bg-surface p-5 hover:border-primary/40 transition-colors duration-200"
                style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-base font-mono text-muted-foreground">{p.en}</span>
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span className="text-base font-mono text-primary font-semibold">{p.ru}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t(p.noteKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
