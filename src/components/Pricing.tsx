import { useMemo, useState } from "react";
import { Check, Gift, Plus, Sparkles, Flame } from "lucide-react";
import { useT } from "@/lib/i18n";

const BASE_PRICE = 75;
const UPSELLS = [
  { id: "captions", textKey: "price.u1", priceKey: "price.u1Price", price: 10 },
  { id: "thumb",    textKey: "price.u2", priceKey: "price.u2Price", price: 5 },
  { id: "shorts",   textKey: "price.u3", priceKey: "price.u3Price", price: 15 },
];
const FEATURES: { key: string; gift: boolean }[] = [
  { key: "price.f1", gift: false },
  { key: "price.f2", gift: false },
  { key: "price.f3", gift: false },
  { key: "price.f4", gift: true },
  { key: "price.f5", gift: true },
  { key: "price.f6", gift: false },
];

export function Pricing() {
  const { t } = useT();
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const total = useMemo(
    () => BASE_PRICE + UPSELLS.reduce((acc, u) => acc + (selected[u.id] ? u.price : 0), 0),
    [selected],
  );

  return (
    <section id="pricing" className="py-14 md:py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            {t("price.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {t("price.titleA")} <span className="gradient-text">{t("price.titleB")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t("price.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <div
            className="lg:col-span-3 relative rounded-xl p-5 sm:p-8 md:p-10 bg-surface border border-primary/50"
            style={{ animation: "var(--animate-fade-up)" }}
          >
            <div className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md inline-flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              {t("price.mostPopular")}
            </div>

            <div className="flex items-end justify-between flex-wrap gap-4 mb-2 mt-2">
              <div>
                <h3 className="text-2xl font-semibold mb-1">{t("price.packName")}</h3>
                <p className="text-sm text-muted-foreground">{t("price.packDesc")}</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-primary">{t("price.packPrice")}</span>
                <span className="text-muted-foreground text-sm">{t("price.perVideo")}</span>
              </div>
            </div>

            <div className="my-6 h-px bg-border" />

            <div className="mb-6 rounded-lg border border-border bg-surface-elevated p-4 pt-9 sm:pt-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 inline-flex items-center gap-1 bg-destructive text-destructive-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-bl-md">
                <Flame className="w-3 h-3" />
                {t("price.limited")}
              </div>
              <div className="flex items-start gap-3 sm:pr-24">
                <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-foreground">{t("price.bonusTitle")}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t("price.bonusDesc")}</div>
                </div>
              </div>
            </div>

            <ul className="space-y-2.5 mb-8">
              {FEATURES.map((f) => (
                <li key={f.key} className="flex items-start gap-3 text-sm">
                  {f.gift ? (
                    <Gift className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  )}
                  <span className="text-foreground/90">
                    {t(f.key)}
                    {f.gift && (
                      <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                        {t("price.freeBonus")}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => { try { sessionStorage.setItem("selected_package", t("price.packName")); } catch {} }}
              className="block text-center rounded-md bg-primary text-primary-foreground px-5 py-4 min-h-[52px] text-base font-semibold hover:opacity-90 transition-opacity"
            >
              {t("price.cta")}
            </a>
            <p className="text-xs text-center text-muted-foreground mt-3">{t("price.fineprint")}</p>
          </div>

          <div
            className="lg:col-span-2 rounded-xl border border-border bg-surface p-5 sm:p-8 flex flex-col"
            style={{ animation: "var(--animate-fade-up)", animationDelay: "120ms", animationFillMode: "backwards" }}
          >
            <div className="flex items-center gap-2 mb-1">
              <Plus className="w-4 h-4 text-primary" />
              <h3 className="text-lg font-semibold">{t("price.upsellTitle")}</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-6">{t("price.upsellSub")}</p>

            <ul className="space-y-2.5 flex-1">
              {UPSELLS.map((u) => {
                const on = !!selected[u.id];
                return (
                  <li key={u.id}>
                    <button
                      onClick={() => setSelected((s) => ({ ...s, [u.id]: !s[u.id] }))}
                      className={`w-full flex items-center justify-between gap-3 rounded-md border px-4 py-3 min-h-[52px] text-left text-sm transition-colors ${
                        on
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-surface-elevated text-foreground/90 hover:border-primary/40"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${on ? "bg-primary border-primary" : "border-border"}`}>
                          {on && <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />}
                        </span>
                        <span>{t(u.textKey)}</span>
                      </span>
                      <span className={`font-semibold font-mono ${on ? "text-primary" : "text-muted-foreground"}`}>
                        {t(u.priceKey)}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">{t("price.total")}</span>
                <span className="text-3xl font-bold text-primary">${total}</span>
              </div>
              <a
                href="#contact"
                onClick={() => { try { const addons = UPSELLS.filter(u => selected[u.id]).map(u => t(u.textKey)).join(", "); sessionStorage.setItem("selected_package", `${t("price.packName")} ($${total})${addons ? " + " + addons : ""}`); } catch {} }}
                className="block text-center rounded-md border border-primary/40 bg-primary/10 text-primary px-5 py-3 min-h-[44px] text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {t("price.lockIn")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
