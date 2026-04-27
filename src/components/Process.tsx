import { Link2, Mic2, Upload } from "lucide-react";

const STEPS = [
  {
    icon: Link2,
    title: "Send your link",
    desc: "Drop your YouTube URL. We handle the rest — no files to export, no back-and-forth.",
  },
  {
    icon: Mic2,
    title: "AI Voice Cloning & Slang Check",
    desc: "We clone your voice, then a native RU Minecraft creator polishes the slang and delivery.",
  },
  {
    icon: Upload,
    title: "Upload & Scale",
    desc: "Get a multi-audio track ready file. Upload, watch your global watch time climb +30%.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            From link to <span className="gradient-text">launch in 24 hours.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Three steps. Zero friction. One global audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-border bg-surface p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
              style={{ animation: "var(--animate-fade-up)", animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
            >
              <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-glow text-sm">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
