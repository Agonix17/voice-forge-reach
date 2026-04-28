import { useMemo, useState } from "react";
import { Check, Gift, Plus, Sparkles, Flame } from "lucide-react";

const FEATURES = [
  { label: "Pro AI Voice Cloning (99.2% match)", gift: false },
  { label: "Native Russian script + slang adaptation", gift: false },
  { label: "Full mix · cleaned audio · ready to upload", gift: false },
  { label: "Localized Thumbnail (designed for RU CTR)", gift: true },
  { label: "SEO Meta-Data: title, description, tags", gift: true },
  { label: "72h delivery · revisions included", gift: false },
];

type Upsell = { id: string; label: string; price: number };

const UPSELLS: Upsell[] = [
  { id: "captions", label: "Add Dynamic Captions (burned-in)", price: 10 },
  { id: "thumb", label: "Extra Thumbnail variant for A/B test", price: 5 },
  { id: "shorts", label: "3 Shorts cut from the main video", price: 15 },
];

export function Pricing() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const total = useMemo(
    () => 75 + UPSELLS.reduce((acc, u) => acc + (selected[u.id] ? u.price : 0), 0),
    [selected],
  );

  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            One price. <span className="gradient-text">Zero brain damage.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A no-brainer pack designed to pay for itself before your first weekend.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Main pack */}
          <div
            className="lg:col-span-3 relative rounded-2xl p-5 sm:p-8 md:p-10 bg-surface-elevated border-2 border-primary shadow-glow"
            style={{ animation: "var(--animate-fade-up)" }}
          >
            <div className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              Full Access Pack
            </div>

            <div className="flex items-end justify-between flex-wrap gap-4 mb-2">
              <div>
                <h3 className="text-2xl font-bold mb-1">$75 Full Access Pack</h3>
                <p className="text-sm text-muted-foreground">Everything you need to publish your first localized hit.</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold gradient-text">$75</span>
                <span className="text-muted-foreground text-sm">/ video</span>
              </div>
            </div>

            <div className="my-6 h-px bg-border" />

            {/* Limited time bonus banner */}
            <div className="mb-6 rounded-xl border border-primary/40 bg-gradient-to-r from-primary/15 to-primary/5 p-4 pt-9 sm:pt-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 inline-flex items-center gap-1 bg-destructive text-destructive-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-bl-lg">
                <Flame className="w-3 h-3" />
                Limited Time
              </div>
              <div className="flex items-start gap-3 sm:pr-24">
                <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-foreground">2 FREE Bonuses included this month</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Localized Thumbnail (worth $35) + SEO Meta-Data (worth $20) — yours free with every $75 pack.
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {FEATURES.map((f) => (
                <li key={f.label} className="flex items-start gap-3 text-sm">
                  {f.gift ? (
                    <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  )}
                  <span className="text-foreground/90">
                    {f.label}
                    {f.gift && (
                      <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-destructive bg-destructive/15 border border-destructive/40 px-1.5 py-0.5 rounded">
                        Free Bonus
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block text-center rounded-lg bg-primary text-primary-foreground px-5 py-4 min-h-[52px] text-base font-bold hover:bg-primary-glow transition-all hover:scale-[1.02] shadow-glow"
            >
              Get the $75 Pack →
            </a>
            <p className="text-xs text-center text-muted-foreground mt-3">
              No subscription. No hidden fees. Pay per video.
            </p>
          </div>

          {/* Upsells */}
          <div
            className="lg:col-span-2 rounded-2xl border border-border bg-surface p-5 sm:p-8 flex flex-col"
            style={{ animation: "var(--animate-fade-up)", animationDelay: "120ms", animationFillMode: "backwards" }}
          >
            <div className="flex items-center gap-2 mb-1">
              <Plus className="w-4 h-4 text-primary" />
              <h3 className="text-lg font-bold">Small Upsells</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-6">Optional add-ons for max impact.</p>

            <ul className="space-y-3 flex-1">
              {UPSELLS.map((u) => {
                const on = !!selected[u.id];
                return (
                  <li key={u.id}>
                    <button
                      onClick={() => setSelected((s) => ({ ...s, [u.id]: !s[u.id] }))}
                      className={`w-full flex items-center justify-between gap-3 rounded-lg border px-4 py-3 min-h-[52px] text-left text-sm transition-all ${
                        on
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-surface-elevated text-foreground/90 hover:border-primary/40"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                            on ? "bg-primary border-primary" : "border-border"
                          }`}
                        >
                          {on && <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />}
                        </span>
                        <span>{u.label}</span>
                      </span>
                      <span className={`font-bold font-mono ${on ? "text-primary" : "text-muted-foreground"}`}>
                        +${u.price}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Your total</span>
                <span className="text-3xl font-bold gradient-text">${total}</span>
              </div>
              <a
                href="#contact"
                className="block text-center rounded-lg border border-primary/40 bg-primary/10 text-primary px-5 py-3 min-h-[44px] text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Lock in this build →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
