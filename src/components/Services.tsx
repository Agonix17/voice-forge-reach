import { useT } from "@/lib/i18n";

const ICONS = {
  voice: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  thumb: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  seo: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  caption: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>
  ),
};

export function Services() {
  const { t } = useT();
  const services = [
    { key: "s1", name: "Vox-Voice", tag: "Core", icon: ICONS.voice },
    { key: "s2", name: "Visual Localize", tag: "Visual", icon: ICONS.thumb },
    { key: "s3", name: "Meta-Data SEO", tag: "Growth", icon: ICONS.seo },
    { key: "s4", name: "Smart Captions", tag: "Engagement", icon: ICONS.caption },
  ];

  return (
    <section id="services" className="py-14 md:py-20 relative">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mb-16">
          <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            {t("svc.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {t("svc.titleA")} <span className="gradient-text">{t("svc.titleB")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t("svc.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={s.key}
              className="relative rounded-xl border border-border bg-surface p-7 hover:border-primary/40 transition-colors duration-200"
              style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-md bg-surface-elevated border border-border text-primary flex items-center justify-center">
                  {s.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-border rounded-md px-2 py-0.5">
                  {s.tag}
                </span>
              </div>

              <div className="text-xs font-mono text-primary mb-1">{s.name}</div>
              <h3 className="text-xl font-semibold mb-2">{t(`svc.${s.key}.title`)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t(`svc.${s.key}.desc`)}</p>

              <ul className="space-y-1.5">
                {["f1", "f2", "f3"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {t(`svc.${s.key}.${f}`)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
