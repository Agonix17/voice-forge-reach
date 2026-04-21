const stats = [
  {
    metric: "+45%",
    title: "View Increase",
    description: "Through optimized metadata, titles, and thumbnails tuned for the Russian YouTube algorithm.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8m0 0v6m0-6h-6"/>
      </svg>
    ),
  },
  {
    metric: "Tier-1",
    title: "Revenue Regions",
    description: "Targeting CIS expats in the US, Germany & UK — high-CPM markets with massive watch time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.66 0-3 .9-3 2s1.34 2 3 2 3 .9 3 2-1.34 2-3 2m0-8v1m0 7v1m8-5a8 8 0 11-16 0 8 8 0 0116 0z"/>
      </svg>
    ),
  },
  {
    metric: "100%",
    title: "Brand Safety",
    description: "Manual slang & context checks by native Minecraft creators. Zero awkward translations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
];

export function Opportunity() {
  return (
    <section id="opportunity" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            Market Opportunity
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            The Russian Minecraft market is{" "}
            <span className="gradient-text">starving</span> for English content.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We turn your existing library into a second income stream — without you ever touching a microphone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.title}
              className="group relative rounded-2xl border border-border bg-surface p-8 hover:border-primary/40 hover:bg-surface-elevated transition-all"
              style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold gradient-text mb-2 tracking-tight">{stat.metric}</div>
              <div className="text-lg font-semibold mb-2">{stat.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>

              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
