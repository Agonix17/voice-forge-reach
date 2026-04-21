import { useState } from "react";

type Plan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

const oneTime: Plan[] = [
  {
    name: "Starter",
    price: "$100",
    period: "/ video",
    tagline: "Perfect for testing the waters.",
    features: ["1 Video", "Voice Cloning", "SEO Meta-data", "Basic captions", "72h delivery"],
    cta: "Start Small",
  },
  {
    name: "Expansion",
    price: "$150",
    period: "/ video",
    tagline: "Full localization stack.",
    features: ["1 Video", "Voice Cloning", "Thumbnail re-design", "Smart Captions", "SEO Meta-data", "Slang & vibe check", "48h priority delivery"],
    featured: true,
    cta: "Most Popular",
  },
  {
    name: "Partner",
    price: "$500",
    period: "/ month",
    tagline: "Recurring growth engine.",
    features: ["4 Videos / month", "Everything in Expansion", "Priority queue", "Dedicated PM", "Channel growth report", "24h turnaround"],
    cta: "Become a Partner",
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<"oneTime" | "monthly">("oneTime");

  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Transparent pricing. <span className="gradient-text">Insane ROI.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            One Russian video typically pays for itself within 7 days of upload.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 bg-surface border border-border rounded-full p-1">
            <button
              onClick={() => setBilling("oneTime")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                billing === "oneTime"
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Per Video
            </button>
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                billing === "monthly"
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
              <span className="text-[10px] font-mono bg-background/30 rounded px-1.5 py-0.5">SAVE 20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {oneTime.map((plan, i) => (
            <div
              key={plan.name}
              className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "bg-surface-elevated border-2 border-primary shadow-glow md:scale-105"
                  : "bg-surface border border-border hover:border-primary/40"
              }`}
              style={{ animation: `var(--animate-fade-up)`, animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Featured
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className={`text-5xl font-bold ${plan.featured ? "gradient-text" : ""}`}>
                  {billing === "monthly" && plan.name !== "Partner"
                    ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}`
                    : plan.price}
                </span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <a
                href="#contact"
                className={`block text-center rounded-lg px-5 py-3 text-sm font-semibold transition-all mb-8 ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary-glow"
                    : "bg-surface-elevated border border-border text-foreground hover:border-primary/40 hover:bg-surface"
                }`}
              >
                {plan.cta} →
              </a>

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-foreground/90">{f}</span>
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
