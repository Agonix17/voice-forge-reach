import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ITEMS = [
  {
    q: "Is it safe for my channel?",
    a: "Yes — 100% YouTube compliant. We deliver clean audio tracks designed for YouTube's official Multi-Language Audio feature. No copyright strikes, no monetization risk, no shady workarounds.",
  },
  {
    q: "Do I get separate audio files?",
    a: "Yes. You get a clean, isolated Russian audio track ready to upload as a YouTube Multi-Audio Track — your original video stays untouched, viewers just pick the language.",
  },
  {
    q: "How fast is delivery?",
    a: "Standard turnaround is 24-72 hours from link submission. Rush delivery available on request.",
  },
  {
    q: "What if I'm not happy with the voice?",
    a: "Free revisions included. We'll re-tune the voice clone or rework the slang until it sounds exactly like a native RU version of you.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Quick answers, <span className="gradient-text">no fluff.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary py-5 min-h-[44px]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
