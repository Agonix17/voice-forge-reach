import { useEffect, useState } from "react";
import { useT, type Lang } from "@/lib/i18n";

function LanguageSwitcher() {
  const { lang, setLang } = useT();
  const next: Lang = lang === "en" ? "ru" : "en";
  const flags: Record<Lang, string> = { en: "🇺🇸", ru: "🇷🇺" };
  const labels: Record<Lang, string> = { en: "EN", ru: "RU" };
  return (
    <button
      onClick={() => setLang(next)}
      title={next === "ru" ? "Switch to Russian" : "Switch to English"}
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1.5 text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
    >
      <span className="text-base leading-none">{flags[next]}</span>
      <span className="uppercase tracking-wider">{labels[next]}</span>
    </button>
  );
}

export function Navigation() {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="glass rounded-xl flex items-center justify-between gap-3 px-3 sm:px-5 py-2.5 sm:py-3">
          <a href="#" className="flex items-center gap-2 group min-w-0">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center font-bold text-primary-foreground flex-shrink-0">
              V
            </div>
            <span className="font-semibold text-base sm:text-lg tracking-tight truncate">VoxLocalize</span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#opportunity" className="hover:text-foreground transition-colors">{t("nav.giants")}</a>
            <a href="#services" className="hover:text-foreground transition-colors">{t("nav.services")}</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">{t("nav.pricing")}</a>
            <a href="#why" className="hover:text-foreground transition-colors">{t("nav.why")}</a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-3 sm:px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold text-primary-foreground hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-out whitespace-nowrap"
            >
              <span className="hidden sm:inline">{t("nav.cta")}</span>
              <span className="sm:hidden">{t("nav.ctaShort")}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
