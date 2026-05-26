import { Clock, Languages, Youtube } from "lucide-react";
import { useT } from "@/lib/i18n";

export function TrustBar() {
  const { t } = useT();
  const items = [
    { icon: Clock, label: t("trust.delivery"), sub: t("trust.deliverySub") },
    { icon: Languages, label: t("trust.fluency"), sub: t("trust.fluencySub") },
    { icon: Youtube, label: t("trust.youtube"), sub: t("trust.youtubeSub") },
  ];
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {items.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-md bg-surface-elevated border border-border flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">{label}</div>
                <div className="text-xs text-muted-foreground">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
