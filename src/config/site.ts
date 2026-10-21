/**
 * ---------------------------------------------------------------
 * Vizo Technology — central site configuration
 * ---------------------------------------------------------------
 * Everything a non-developer may need to change lives here or in
 * `src/data/*`. No secrets belong in this file: private credentials
 * must go in environment variables (see README).
 */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL;

/** Production domain. Set NEXT_PUBLIC_SITE_URL in the environment. */
export const baseUrl = (() => {
  if (rawUrl && /^https?:\/\//.test(rawUrl)) {
    return rawUrl.replace(/\/+$/, "");
  }
  // TODO(setup): replace with the real production domain before launch.
  return "https://vizotechnology.example.com";
})();

export const siteConfig = {
  name: "Vizo Technology",
  legalName: "Vizo Technology",
  tagline: "Big ideas. Intelligent technology. Real business impact.",
  description:
    "Vizo Technology is a software development and digital solutions agency building custom web platforms, learning systems, full-stack applications, AI-powered workflows and business automation for growing businesses, startups and education institutions in the US, UK and beyond.",
  keywords: [
    "software development agency",
    "custom web development",
    "education software development",
    "school management system",
    "LMS development",
    "AI automation",
    "full-stack development",
    "ecommerce development",
    "business automation",
    "product design",
  ],
  baseUrl,
  locale: "en-US",
  /** Shown only when a real, monitored address exists. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  phone: "",
  address: "",
  social: [] as { label: string; href: string }[],
  nav: [
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Our Work", href: "/work" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Start a Project", href: "/contact" },
} as const;

export const footerNote =
  "Vizo Technology partners with small and growing businesses and education institutions to design, build and improve digital products.";
