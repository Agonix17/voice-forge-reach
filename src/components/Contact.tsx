import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
              Get Started
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Ready to <span className="gradient-text">double your audience?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Tell us about your channel. We'll send a personalized localization strategy within 24 hours.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8 md:p-10 glow-border">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message received!</h3>
                <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">YouTube Channel Link</label>
                  <input
                    type="url"
                    required
                    placeholder="https://youtube.com/@yourchannel"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@youremail.com"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Estimated Video Length</label>
                  <select
                    required
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Select average length</option>
                    <option>Under 5 minutes</option>
                    <option>5–10 minutes</option>
                    <option>10–20 minutes</option>
                    <option>20+ minutes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Anything we should know? (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Goals, target regions, current numbers..."
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-lg hover:bg-primary-glow transition-all shadow-glow hover:scale-[1.02]"
                >
                  Get My Strategy →
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  Free analysis. No credit card. No spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
