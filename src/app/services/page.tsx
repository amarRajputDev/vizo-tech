import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { processStages } from "@/data/process";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const pageDescription =
  "Eight services — custom web development, full-stack software, AI integration and automation, ecommerce, CRM systems, UI/UX design, API integrations and ongoing maintenance — scoped around the outcome, not the technology.";

export const metadata: Metadata = {
  title: "Services",
  description: pageDescription,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services",
    description: pageDescription,
    url: "/services",
    siteName: "Vizo Technology",
    type: "website",
  },
};

function accentText(accent: "lime" | "violet" | "steel") {
  if (accent === "violet") return "text-violet-soft";
  if (accent === "steel") return "text-steel";
  return "text-lime";
}

export default function ServicesPage() {
  return (
    <>
      <section className="noise relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
        <div className="glow-lime pointer-events-none absolute -top-[35%] left-1/2 h-[70vh] w-[120vw] -translate-x-1/2 opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent" />

        <Container className="relative pt-[8.5rem] pb-16 md:pb-20">
          <Reveal>
            <span className="eyebrow">Services</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-7 max-w-[17ch] text-[clamp(2.5rem,5.4vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.042em] text-paper">
              Services built around the outcome, not the technology.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[60ch] text-[1.0625rem] leading-[1.7] text-steel sm:text-[1.125rem]">
              Every engagement starts with a business problem, not a stack. These
              eight services stand on their own or combine into a single program of
              work — scoped in writing, delivered in reviewable slices, measured
              against the thing you actually needed to change.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-line pt-6">
              {services.map((service, i) => (
                <li key={service.slug} className="flex items-center gap-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[#7d8694] transition-colors duration-300 hover:text-lime"
                  >
                    {service.name}
                  </Link>
                  {i < services.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 rotate-45 bg-lime/80"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-20">
          <ul>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <li key={service.slug}>
                  <Reveal>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group -mx-4 grid gap-5 border-t border-line px-4 py-9 transition-colors duration-500 hover:bg-surface/40 md:-mx-6 md:grid-cols-12 md:items-start md:gap-6 md:px-6 md:py-11 lg:gap-8"
                    >
                      <span className="idx text-[0.75rem] text-[#3a4453] transition-colors duration-300 group-hover:text-lime md:col-span-1">
                        {service.index}
                      </span>

                      <div className="flex items-start gap-4 md:col-span-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] border border-line bg-elevated transition-colors duration-500 group-hover:border-lime/40">
                          <Icon
                            className={cn(
                              "h-5 w-5 transition-colors duration-500",
                              accentText(service.accent),
                            )}
                            aria-hidden="true"
                          />
                        </span>
                        <h2 className="text-[1.375rem] font-medium leading-[1.2] tracking-[-0.025em] text-paper transition-colors duration-300 group-hover:text-lime md:text-[1.5rem]">
                          {service.name}
                        </h2>
                      </div>

                      <p className="text-[0.9375rem] leading-[1.65] text-steel md:col-span-4">
                        {service.short}
                      </p>

                      <div className="md:col-span-3">
                        <ul className="flex flex-col gap-2">
                          {service.deliverables.slice(0, 3).map((item) => (
                            <li
                              key={item.title}
                              className="flex gap-2.5 font-mono text-[0.6875rem] leading-[1.5] tracking-[0.06em] text-[#5b6472]"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[0.45em] h-1 w-1 shrink-0 rotate-45 bg-lime/70"
                              />
                              {item.title}
                            </li>
                          ))}
                        </ul>
                        <span className="ulink mt-5 inline-flex font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-paper">
                          Explore
                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-line" />
        </Container>
      </section>

      <section className="border-y border-line bg-surface">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">How we work</span>
              <h2 className="mt-6 max-w-[18ch] text-[clamp(1.75rem,3.4vw,2.6rem)] font-medium leading-[1.06] tracking-[-0.035em] text-paper">
                Six stages, one continuous thread.
              </h2>
            </div>
            <p className="max-w-[46ch] text-[0.9375rem] leading-[1.7] text-steel">
              The same sequence runs through every engagement, scaled to the size of
              the problem — so you always know what stage you are in and what comes
              out of it.
            </p>
          </div>

          <ol className="mt-10 grid grid-cols-2 gap-px border border-line bg-line md:mt-12 lg:grid-cols-3">
            {processStages.map((stage) => (
              <li
                key={stage.id}
                className="flex flex-col gap-3 bg-surface p-5 transition-colors duration-500 hover:bg-elevated md:p-6"
              >
                <span className="idx text-[0.6875rem] text-lime">{stage.number}</span>
                <span className="text-[1.125rem] font-medium tracking-[-0.02em] text-paper">
                  {stage.name}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
        <div className="glow-lime pointer-events-none absolute -bottom-[45%] left-1/2 h-[60vh] w-[100vw] -translate-x-1/2 opacity-50" />

        <Container className="relative py-20 md:py-28">
          <Reveal>
            <div className="flex flex-col gap-9 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Next step</span>
                <h2 className="mt-6 max-w-[14ch] text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.03] tracking-[-0.04em] text-paper">
                  Not sure what you need?
                </h2>
                <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-steel">
                  Describe the problem in your own words. We will tell you which
                  services actually fit, what we would leave out, and what the
                  engagement would look like — before anything is built.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg">
                  Describe your project
                </ButtonLink>
                <ButtonLink href="/work" variant="secondary" size="lg">
                  See our work
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
