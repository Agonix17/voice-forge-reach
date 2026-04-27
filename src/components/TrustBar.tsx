import { Clock, Languages, Youtube } from "lucide-react";

const ITEMS = [
  { icon: Clock, label: "24h Delivery", sub: "Rush turnaround" },
  { icon: Languages, label: "Native Fluency", sub: "Real RU streamers" },
  { icon: Youtube, label: "YouTube Partner Ready", sub: "Multi-audio compliant" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {ITEMS.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">{label}</div>
                <div className="text-xs text-muted-foreground">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
