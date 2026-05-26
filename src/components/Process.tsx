import { Link2, Mic2, Upload } from "lucide-react";
import { useT } from "@/lib/i18n";

export function Process() {
  const { t } = useT();
  const steps = [
    { icon: Link2, title: t("process.step1.title"), desc: t("process.step1.desc") },
    { icon: Mic2, title: t("process.step2.title"), desc: t("process.step2.desc") },
    { icon: Upload, title: t("process.step3.title"), desc: t("process.step3.desc") },
  ];
  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            {t("process.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {t("process.titleA")} <span className="gradient-text">{t("process.titleB")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t("process.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-xl border border-border bg-surface p-6 hover:border-primary/40 transition-colors duration-200"
              style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-md bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                {i + 1}
              </div>
              <div className="w-11 h-11 rounded-md bg-surface-elevated border border-border flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
