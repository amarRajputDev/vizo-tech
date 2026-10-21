import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getService, serviceSlugs, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service not found" };
  }
  const description = service.short;
  return {
    title: service.name,
    description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.name,
      description,
      url: `/services/${slug}`,
      siteName: "Vizo Technology",
      type: "website",
    },
  };
}

const glowByAccent: Record<Service["accent"], string> = {
  lime: "glow-lime",
  violet: "glow-violet",
  steel:
    "bg-[radial-gradient(50%_50%_at_50%_50%,rgba(146,154,168,0.16)_0%,rgba(146,154,168,0)_70%)]",
};

const lineByAccent: Record<Service["accent"], string> = {
  lime: "via-lime/40",
  violet: "via-violet/50",
  steel: "via-steel/40",
};

const iconByAccent: Record<Service["accent"], string> = {
  lime: "text-lime",
  violet: "text-violet-soft",
  steel: "text-steel",
};

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item): item is Service => item !== undefined);

  return (
    <>
      <section className="noise relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
        <div
          className={cn(
            "pointer-events-none absolute -top-[35%] left-1/2 h-[70vh] w-[120vw] -translate-x-1/2 opacity-70",
            glowByAccent[service.accent],
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
            lineByAccent[service.accent],
          )}
        />

        <Container className="relative pt-[8.5rem] pb-16 md:pb-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.75rem] text-steel">
              <li>
                <Link
                  href="/services"
                  className="transition-colors duration-300 hover:text-paper"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#3a4453]">
                /
              </li>
              <li className="text-paper/85">{service.name}</li>
            </ol>
          </nav>

          <div className="mt-9 flex flex-wrap items-center justify-between gap-6">
            <span className="eyebrow">
              {service.index} — Service
            </span>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[5px] border border-line bg-elevated shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] md:h-16 md:w-16">
              <Icon
                className={cn("h-7 w-7 md:h-8 md:w-8", iconByAccent[service.accent])}
                aria-hidden="true"
              />
            </span>
          </div>

          <h1 className="mt-8 max-w-[18ch] text-[clamp(2.2rem,4.8vw,4rem)] font-medium leading-[1.04] tracking-[-0.04em] text-paper">
            {service.name}
          </h1>
          <p className="mt-7 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-steel">
            {service.intro}
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-24">
          <div className="max-w-[62ch]">
            <span className="eyebrow">What we deliver</span>
            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.035em] text-paper">
              Concrete outputs, defined before the work begins.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
            {service.deliverables.map((item) => (
              <Reveal key={item.title}>
                <div className="h-full rounded-[4px] border border-line bg-surface p-7 transition-colors duration-500 hover:border-lime/30">
                  <span
                    aria-hidden="true"
                    className="block h-2 w-2 bg-lime"
                  />
                  <h3 className="mt-6 text-[1.125rem] font-medium tracking-[-0.02em] text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.65] text-steel">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="eyebrow">Where it helps</span>
              <h2 className="mt-6 max-w-[16ch] text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.035em] text-paper">
                Situations this service is built for.
              </h2>
            </div>

            <ol className="border-t border-line lg:col-span-8">
              {service.useCases.map((useCase, i) => (
                <li
                  key={useCase}
                  className="grid gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-6 md:py-7"
                >
                  <span className="idx text-[0.75rem] text-[#3a4453] md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-[62ch] text-[1.0625rem] leading-[1.55] tracking-[-0.015em] text-paper/90 md:col-span-11">
                    {useCase}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-24">
          <div className="max-w-[62ch]">
            <span className="eyebrow">How we approach it</span>
            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.035em] text-paper">
              A sequence that keeps feedback cheap.
            </h2>
          </div>

          <ol className="mt-11 grid gap-0 lg:grid-cols-4">
            {service.approach.map((step, i) => (
              <li
                key={step.step}
                className="relative border-l border-line py-5 pl-6 lg:border-l-0 lg:border-t lg:py-0 lg:pl-0 lg:pr-8 lg:pt-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[3px] top-[26px] h-1.5 w-1.5 rotate-45 bg-lime/70 lg:hidden"
                />
                <span
                  aria-hidden="true"
                  className="absolute -left-[3px] -top-[3px] hidden h-1.5 w-1.5 rotate-45 bg-lime/70 lg:block"
                />
                <span className="idx block text-[0.6875rem] tracking-[0.18em] text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[1.125rem] font-medium tracking-[-0.02em] text-paper">
                  {step.step}
                </h3>
                <p className="mt-3 max-w-[38ch] text-[0.9375rem] leading-[1.65] text-steel">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-line bg-surface">
          <Container className="py-16 md:py-24">
            <div className="max-w-[62ch]">
              <span className="eyebrow">Related services</span>
              <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.035em] text-paper">
                Often paired with this work.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
              {related.map((item) => {
                const RelatedIcon = item.icon;
                return (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="group flex items-start gap-5 rounded-[4px] border border-line bg-elevated/50 p-7 transition-colors duration-500 hover:border-lime/40 hover:bg-elevated"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] border border-line bg-surface text-steel transition-colors duration-500 group-hover:text-lime">
                      <RelatedIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <h3 className="text-[1.125rem] font-medium tracking-[-0.02em] text-paper transition-colors duration-300 group-hover:text-lime">
                        {item.name}
                      </h3>
                      <span className="mt-3 block text-[0.9375rem] leading-[1.6] text-steel">
                        {item.short}
                      </span>
                      <span className="ulink mt-4 inline-flex font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-paper">
                        Explore
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="relative overflow-hidden border-t border-line">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
        <div
          className={cn(
            "pointer-events-none absolute -bottom-[45%] left-1/2 h-[60vh] w-[100vw] -translate-x-1/2 opacity-50",
            glowByAccent[service.accent],
          )}
        />

        <Container className="relative py-20 md:py-28">
          <Reveal>
            <div className="flex flex-col gap-9 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Start here</span>
                <h2 className="mt-6 max-w-[18ch] text-[clamp(1.9rem,4vw,3.1rem)] font-medium leading-[1.05] tracking-[-0.04em] text-paper">
                  Talk to us about {service.name}
                </h2>
                <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-steel">
                  Every engagement starts with a written scope: what we will build,
                  what we will not, the assumptions behind it and the shape of the
                  timeline. No work begins without it.
                </p>
              </div>
              <div className="shrink-0">
                <ButtonLink href="/contact" size="lg">
                  Describe your project
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
