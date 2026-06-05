import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useT } from "@/lib/i18n";
import { usePackageStore } from "@/lib/selectedPackage";

const SERVICE_ID = "service_osvzh0c";
const TEMPLATE_ID = "template_gd05agv";
const PUBLIC_KEY = "2E_DVenRQODCOAZOp";

export function Contact() {
  const { t } = useT();
  const { selectedPackage, setSelectedPackage } = usePackageStore();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ youtubeUrl: "", email: "", package: "", message: "" });

  useEffect(() => {
    if (selectedPackage) {
      setForm((f) => ({ ...f, package: selectedPackage }));
      return;
    }
    try {
      const pkg = sessionStorage.getItem("selected_package");
      if (pkg) {
        setForm((f) => ({ ...f, package: pkg }));
        setSelectedPackage(pkg);
      }
    } catch {}
  }, [selectedPackage, setSelectedPackage]);


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
          selected_package: form.package,
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
              {form.package && (
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.package") || "Package"}</label>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                    <span>✓ Selected: {form.package}</span>
                    <button
                      type="button"
                      disabled={submitted}
                      onClick={() => { setForm((f) => ({ ...f, package: "" })); setSelectedPackage(""); try { sessionStorage.removeItem("selected_package"); } catch {} }}
                      className="text-primary/70 hover:text-primary disabled:opacity-50"
                      aria-label="Clear selected package"
                    >
                      ✕
                    </button>
                  </div>
                  <input
                    type="text"
                    disabled={submitted}
                    value={form.package}
                    onChange={(e) => { setForm({ ...form, package: e.target.value }); setSelectedPackage(e.target.value); }}
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors disabled:opacity-60"
                  />
                </div>
              )}

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
              <button
                type="submit"
                disabled={loading || submitted}
                className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-100 disabled:cursor-default"
              >
                {submitted ? "✓ Заявка отправлена" : loading ? "..." : t("contact.submit")}
              </button>
              {submitted && (
                <p className="text-sm text-center text-primary">{t("contact.received.sub")}</p>
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
