import { useT } from "@/lib/i18n";
import { useCountUp, useInViewOnce } from "@/lib/useCountUp";

const POINTS = [
  { en: "griefing", ru: "гриферство", noteKey: "why.p1.note" },
  { en: "redstone mechanics", ru: "редстоун-механика", noteKey: "why.p2.note" },
  { en: "OP loot", ru: "имба-лут", noteKey: "why.p3.note" },
  { en: "speedrun PB", ru: "спидран ПБ", noteKey: "why.p4.note" },
];

const STAT_DEFS = [
  { target: 7, prefix: "", suffix: " yrs", labelKey: "why.stat1" },
  { target: 200, prefix: "", suffix: "+", labelKey: "why.stat2" },
  { target: 12, prefix: "", suffix: "B", labelKey: "why.stat3" },
  { target: 98, prefix: "", suffix: "%", labelKey: "why.stat4" },
];

function StatItem({ target, prefix, suffix, label, start }: { target: number; prefix: string; suffix: string; label: string; start: boolean }) {
  const v = useCountUp(target, { start });
  return (
    <div>
      <div className="text-3xl font-bold text-primary tabular-nums">{prefix}{v}{suffix}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export function WhyUs() {
  const { t } = useT();
  const [sectionRef, inView] = useInViewOnce<HTMLElement>();
  return (
    <section ref={sectionRef} id="why" className="py-14 md:py-20 relative overflow-hidden">
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
              {STAT_DEFS.map((s) => (
                <StatItem key={s.labelKey} target={s.target} prefix={s.prefix} suffix={s.suffix} label={t(s.labelKey)} start={inView} />
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
