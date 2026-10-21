import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const pageDescription =
  "Selected work from Vizo Technology — live products and clearly-labelled demonstration builds, including education platforms built for schools, colleges and training institutes, each case study documenting the problem, the delivery and the technology behind it.";

export const metadata: Metadata = {
  title: "Our Work",
  description: pageDescription,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work",
    description: pageDescription,
    url: "/work",
    siteName: "Vizo Technology",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <>
      <section className="noise relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
        <div className="glow-violet pointer-events-none absolute -top-[30%] right-[-10%] h-[70vh] w-[80vw] opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/50 to-transparent" />

        <Container className="relative pt-[8.5rem] pb-14 md:pb-20">
          <Reveal>
            <span className="eyebrow">Our work</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-7 max-w-[16ch] text-[clamp(2.5rem,5.4vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.042em] text-paper">
              Products in the wild — and demonstration builds.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[60ch] text-[1.0625rem] leading-[1.7] text-steel sm:text-[1.125rem]">
              This selection includes live products alongside demonstration
              builds — including platforms designed for schools, colleges and
              training institutes. Each case study covers the same ground: the
              problem the product addresses, what was delivered and the
              technology it runs on — nothing padded, nothing borrowed.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-9 max-w-[70ch] border-t border-line pt-6 font-mono text-[0.6875rem] leading-[1.8] tracking-[0.14em] text-[#5b6472]">
              Case studies describe the products and the problems they address.
              Verified metrics are added only when they can be sourced.
            </p>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-14 md:py-20">
          <ol className="border-b border-line">
            {projects.map((project, i) => {
              const reversed = i % 2 === 1;
              return (
                <li key={project.slug}>
                  <Reveal>
                    <Link
                      href={`/work/${project.slug}`}
                      className="group -mx-4 block border-t border-line px-4 py-12 transition-colors duration-500 hover:bg-surface/40 md:-mx-6 md:px-6 md:py-16"
                    >
                      <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-8 lg:gap-12">
                        <div
                          className={cn(
                            "md:col-span-7",
                            reversed && "md:order-2",
                          )}
                        >
                          <ProjectVisual project={project} size="md" />
                        </div>

                        <div
                          className={cn(
                            "md:col-span-5",
                            reversed && "md:order-1",
                          )}
                        >
                          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#5b6472]">
                            <span className="idx text-lime">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span aria-hidden="true" className="text-[#3a4453]">
                              ·
                            </span>
                            <span>{project.year}</span>
                            <span aria-hidden="true" className="text-[#3a4453]">
                              ·
                            </span>
                            <span>{project.category}</span>
                            <span aria-hidden="true" className="text-[#3a4453]">
                              ·
                            </span>
                            <span>{project.industry}</span>
                          </p>

                          <h2 className="mt-5 text-[clamp(1.6rem,2.6vw,2.4rem)] font-medium leading-[1.08] tracking-[-0.035em] text-paper transition-colors duration-300 group-hover:text-lime">
                            {project.name}
                          </h2>

                          <p className="mt-4 max-w-[46ch] text-[1.0625rem] leading-[1.6] text-steel">
                            {project.tagline}
                          </p>

                          <ul className="mt-7 flex flex-col gap-3 border-t border-line pt-6">
                            {project.highlights.slice(0, 3).map((highlight) => (
                              <li
                                key={highlight}
                                className="flex gap-3 text-[0.9375rem] leading-[1.6] text-paper/80"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-[0.5em] h-1.5 w-1.5 shrink-0 bg-lime"
                                />
                                {highlight}
                              </li>
                            ))}
                          </ul>

                          <span className="ulink mt-7 inline-flex font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-paper">
                            View case study
                            <ArrowUpRight
                              aria-hidden="true"
                              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-line bg-surface">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
        <div className="glow-lime pointer-events-none absolute -bottom-[45%] left-1/2 h-[60vh] w-[100vw] -translate-x-1/2 opacity-50" />

        <Container className="relative py-20 md:py-28">
          <Reveal>
            <div className="flex flex-col gap-9 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Next step</span>
                <h2 className="mt-6 max-w-[16ch] text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.03] tracking-[-0.04em] text-paper">
                  Have a project in mind? Let&apos;s talk.
                </h2>
                <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-steel">
                  Send a short description of what you are trying to build. You will
                  get a written scope, an honest view of the trade-offs and a clear
                  answer about whether we are the right team for it.
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
