import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useT } from "@/lib/i18n";

const SERVICE_ID = "service_osvzh0c";
const TEMPLATE_ID = "template_gd05agv";
const PUBLIC_KEY = "2E_DVenRQODCOAZOp";

export function Contact() {
  const { t } = useT();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ youtubeUrl: "", email: "", package: "", message: "" });

  useEffect(() => {
    try {
      const pkg = sessionStorage.getItem("selected_package");
      if (pkg) setForm((f) => ({ ...f, package: pkg }));
    } catch {}
  }, []);

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
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.channel")}</label>
                  <input
                    type="url"
                    required
                    value={form.youtubeUrl}
                    onChange={(e) => setForm({ ...form, youtubeUrl: e.target.value })}
                    placeholder={t("contact.channelPh")}
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.email")}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t("contact.emailPh")}
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
                {form.package && (
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("contact.package") || "Package"}</label>
                    <input
                      type="text"
                      value={form.package}
                      onChange={(e) => setForm({ ...form, package: e.target.value })}
                      className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.message")}</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t("contact.messagePh")}
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "..." : t("contact.submit")}
                </button>
                {error && (
                  <p className="text-sm text-center text-destructive">Ошибка, попробуйте снова</p>
                )}
                <p className="text-xs text-center text-muted-foreground">{t("contact.fineprint")}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
