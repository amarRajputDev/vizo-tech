import Link from "next/link";
import { siteConfig, footerNote } from "@/config/site";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

/** Cached so the prerender stays deterministic while the year stays current. */
async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const yearLinks = services.slice(0, 4);
  const moreServices = services.slice(4);

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />

      <Container className="relative">
        <div className="grid gap-14 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Link href="/" aria-label="Vizo Technology — home" className="inline-flex">
              <span className="text-[1.5rem] font-medium tracking-[-0.045em]">
                Vizo Technology
              </span>
            </Link>
            <p className="mt-6 max-w-[38ch] text-[0.9375rem] leading-[1.7] text-steel">
              {footerNote}
            </p>
            <p className="mt-6 max-w-[34ch] font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[#5b6472]">
              {siteConfig.tagline}
            </p>

            {(siteConfig.email || siteConfig.phone || siteConfig.address) && (
              <div className="mt-8 space-y-2 text-[0.9375rem] text-steel">
                {siteConfig.email ? (
                  <p>
                    <a className="ulink text-paper" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </p>
                ) : null}
                {siteConfig.phone ? <p>{siteConfig.phone}</p> : null}
                {siteConfig.address ? <p>{siteConfig.address}</p> : null}
              </div>
            )}

            {siteConfig.social.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-3">
                {siteConfig.social.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center rounded-[3px] border border-line px-3.5 text-[0.8125rem] text-steel transition-colors duration-300 hover:border-lime/50 hover:text-paper"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Services" className="md:col-span-3">
            <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#5b6472]">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {yearLinks.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="ulink text-steel hover:text-paper">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-3 space-y-3 text-[0.9375rem]">
              {moreServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="ulink text-steel hover:text-paper">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="md:col-span-2">
            <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#5b6472]">
              Company
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="ulink text-steel hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#5b6472]">
              Legal
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="ulink text-steel hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#5b6472]">
              Start
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              <li>
                <Link href="/contact" className="ulink text-lime hover:text-paper">
                  Start a project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col gap-6 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-[#5b6472]">
            © {await getCopyrightYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-[0.8125rem] text-[#5b6472]">
            Built with care — designed, engineered and maintained by Vizo
            Technology.
          </p>
        </div>
      </Container>

      {/* Visual signature: oversized wordmark + drifting grid */}
      <div className="relative select-none overflow-hidden">
        <div className="mx-auto flex max-w-[88rem] items-end px-5 pb-6 sm:px-8 lg:px-12 xl:px-16">
          <span
            aria-hidden="true"
            className="block bg-gradient-to-b from-[#151a23] to-[#090b10] bg-clip-text text-[clamp(2.5rem,8vw,8rem)] font-medium leading-[0.85] tracking-[-0.06em] text-transparent"
          >
            Vizo Technology
          </span>
        </div>
      </div>
    </footer>
  );
}
