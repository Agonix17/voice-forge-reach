import { useState } from "react";
import { useT } from "@/lib/i18n";

export function Contact() {
  const { t } = useT();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-mono text-primary uppercase tracking-widest mb-4">
              {t("contact.eyebrow")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              {t("contact.titleA")} <span className="gradient-text">{t("contact.titleB")}</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">{t("contact.subtitle")}</p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{t("contact.received")}</h3>
                <p className="text-muted-foreground">{t("contact.received.sub")}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.channel")}</label>
                  <input
                    type="url"
                    required
                    placeholder={t("contact.channelPh")}
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.email")}</label>
                  <input
                    type="email"
                    required
                    placeholder={t("contact.emailPh")}
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.message")}</label>
                  <textarea
                    rows={4}
                    placeholder={t("contact.messagePh")}
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-md hover:opacity-90 transition-opacity"
                >
                  {t("contact.submit")}
                </button>
                <p className="text-xs text-center text-muted-foreground">{t("contact.fineprint")}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
