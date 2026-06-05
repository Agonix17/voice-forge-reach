import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Check } from "lucide-react";
import { useT } from "@/lib/i18n";
import { usePackageStore } from "@/lib/selectedPackage";

const SERVICE_ID = "service_osvzh0c";
const TEMPLATE_ID = "template_gd05agv";
const PUBLIC_KEY = "2E_DVenRQODCOAZOp";

export function Contact() {
  const { t } = useT();
  const { selectedPackage, selectedAddons, setSelectedPackage, clearAll } = usePackageStore();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ youtubeUrl: "", email: "", message: "" });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          youtube_url: form.youtubeUrl,
          client_email: form.email,
          selected_package: selectedPackage,
          selected_addons: selectedAddons.join(", "),
          message: form.message,
        },
        PUBLIC_KEY,
      );
      setSubmitted(true);
      try { sessionStorage.removeItem("selected_package"); } catch {}
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-14 md:py-20 relative">
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">{t("contact.channel")}</label>
                <input
                  type="url"
                  required
                  disabled={submitted}
                  value={form.youtubeUrl}
                  onChange={(e) => setForm({ ...form, youtubeUrl: e.target.value })}
                  placeholder={t("contact.channelPh")}
                  className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t("contact.email")}</label>
                <input
                  type="email"
                  required
                  disabled={submitted}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t("contact.emailPh")}
                  className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors disabled:opacity-60"
                />
              </div>

              <div>
                {selectedPackage ? (
                  <div className="rounded-xl border border-primary/40 bg-primary/10 p-4 space-y-3">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      Selected Package
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-semibold text-primary">{selectedPackage}</span>
                    </div>
                    {selectedAddons.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1 border-t border-primary/20">
                        {selectedAddons.map((addon) => (
                          <span key={addon} className="inline-flex items-center gap-1 rounded-md bg-primary/15 border border-primary/30 px-2 py-1 text-xs text-primary font-medium">
                            + {addon}
                          </span>
                        ))}
                      </div>
                    )}
                    <a href="#pricing" className="text-xs text-muted-foreground underline block">
                      Change plan →
                    </a>
                  </div>
                ) : (
                  <div className="rounded-xl border border-border bg-surface p-4 text-muted-foreground text-sm flex items-center justify-between gap-3">
                    <span>No package selected — choose a plan from the pricing section above</span>
                    <a href="#pricing" className="text-xs text-primary underline whitespace-nowrap">Change plan →</a>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t("contact.message")}</label>
                <textarea
                  rows={4}
                  disabled={submitted}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t("contact.messagePh")}
                  className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors resize-none disabled:opacity-60"
                />
              </div>
              {submitted ? (
                <div className="space-y-4 text-center">
                  <div className="text-primary font-semibold flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" /> Заявка отправлена
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Мы свяжемся с вами в течение 24 часов
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ youtubeUrl: "", email: "", message: "" });
                      clearAll();
                      try { sessionStorage.removeItem("selected_package"); } catch {}
                    }}
                    className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
                  >
                    Сбросить и отправить новую заявку
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {loading ? "..." : t("contact.submit")}
                </button>
              )}
              {error && (
                <p className="text-sm text-center text-destructive">Ошибка, попробуйте снова</p>
              )}
              <p className="text-xs text-center text-muted-foreground">{t("contact.fineprint")}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
