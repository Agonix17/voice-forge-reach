import { useT } from "@/lib/i18n";
import logo from "@/assets/logo/logo.png";
import youtubeIcon from "@/assets/socials/youtube.svg";
import discordIcon from "@/assets/socials/discord.svg";
import twitterIcon from "@/assets/socials/twitter.svg";
import linkedinIcon from "@/assets/socials/linkedin.svg";
import emailIcon from "@/assets/socials/email.svg";

// ── Edit social links here ──────────────────────────────
const SOCIAL_LINKS = [
  { label: "YouTube", url: "https://youtube.com/@voxlocalize", icon: youtubeIcon },
  { label: "Discord", url: "https://discord.gg/voxlocalize", icon: discordIcon },
  { label: "X / Twitter", url: "https://twitter.com/voxlocalize", icon: twitterIcon },
  { label: "LinkedIn", url: "https://linkedin.com/company/voxlocalize", icon: linkedinIcon },
  { label: "Email", url: "mailto:hello@voxlocalize.com", icon: emailIcon },
];


// ── Edit product links here ─────────────────────────────
const PRODUCT_LINKS = [
  { labelKey: "nav.services", href: "#services" },
  { labelKey: "nav.pricing", href: "#pricing" },
  { labelKey: "nav.why", href: "#why" },
] as const;

const COMPANY_NAME = "VoxLocalize";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={logo} alt={COMPANY_NAME} className="h-8 w-8 rounded-lg object-cover" />
              <span className="font-semibold text-lg tracking-tight">{COMPANY_NAME}</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm">{t("footer.tagline")}</p>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">{t("footer.product")}</div>
            <ul className="space-y-2 text-sm">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/70 hover:text-primary transition-colors">{t(l.labelKey)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">{t("footer.connect")}</div>
            <ul className="space-y-2 text-sm">
              {SOCIAL_LINKS.map(({ label, url, icon }) => (
                <li key={label}>
                  <a
                    href={url}
                    target={url.startsWith("http") ? "_blank" : undefined}
                    rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <img
                      src={icon}
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        const t = e.currentTarget as HTMLImageElement;
                        t.style.background = "hsl(var(--muted))";
                        t.removeAttribute("src");
                      }}
                    />
                    {label}
                  </a>
                </li>
              ))}

            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>{t("footer.copyright")}</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
