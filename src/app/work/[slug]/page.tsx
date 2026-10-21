import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { getProject, projects, projectSlugs } from "@/data/projects";
import { getService } from "@/data/services";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Case study not found" };
  }
  const description = project.tagline;
  return {
    title: `${project.name} — Case Study`,
    description,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `${project.name} — Case Study`,
      description,
      url: `/work/${slug}`,
      siteName: "Vizo Technology",
      type: "article",
    },
  };
}

export default async function CaseStudyPage(
  props: PageProps<"/work/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const hasResults = project.results.length > 0;
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];
  const hasNext = next && next.slug !== project.slug;
  const caption =
    project.visual === "representative"
      ? "Representative mockup — an illustrative interface composition, not a production screenshot."
      : project.liveUrl
        ? `Live product — ${project.liveUrl}`
        : "Live product";

  const contents = [
    { id: "problem", label: "The problem" },
    { id: "solution", label: "What we delivered" },
    { id: "technology", label: "Technology" },
    { id: "highlights", label: "Highlights" },
    ...(hasResults ? [{ id: "results", label: "Results" }] : []),
  ];

  return (
    <>
      <section className="noise relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
        <div className="glow-lime pointer-events-none absolute -top-[35%] left-1/2 h-[65vh] w-[110vw] -translate-x-1/2 opacity-60" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent" />

        <Container className="relative pt-[8.5rem] pb-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.75rem] text-steel">
              <li>
                <Link
                  href="/work"
                  className="transition-colors duration-300 hover:text-paper"
                >
                  Work
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#3a4453]">
                /
              </li>
              <li className="text-paper/85">{project.name}</li>
            </ol>
          </nav>

          <p className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#5b6472]">
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

          <h1 className="mt-6 max-w-[16ch] text-[clamp(2.4rem,5.2vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.042em] text-paper">
            {project.name}
          </h1>

          <p className="mt-7 max-w-[48ch] text-[1.375rem] leading-[1.35] text-paper/90 md:text-[1.625rem]">
            {project.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            {project.liveUrl ? (
              <ButtonLink href={project.liveUrl} external size="lg">
                Visit live site
              </ButtonLink>
            ) : null}
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Build something like this
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-12 md:py-16">
          <Reveal>
            <ProjectVisual project={project} />
          </Reveal>
          <p className="mt-5 font-mono text-[0.6875rem] leading-[1.7] tracking-[0.14em] text-[#5b6472]">
            {caption}
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="hidden lg:col-span-3 lg:block">
              <nav aria-label="Case study contents" className="sticky top-28">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-[#5b6472]">
                  Contents
                </p>
                <ul className="mt-5 border-t border-line">
                  {contents.map((item, i) => (
                    <li key={item.id} className="border-b border-line">
                      <a
                        href={`#${item.id}`}
                        className="group flex items-baseline justify-between gap-3 py-3.5 font-mono text-[0.75rem] tracking-[0.08em] text-steel transition-colors duration-300 hover:text-paper"
                      >
                        <span>{item.label}</span>
                        <span className="idx text-[0.6875rem] text-[#3a4453] transition-colors duration-300 group-hover:text-lime">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="flex flex-col gap-16 lg:col-span-9 lg:gap-24">
              <section id="problem">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-lime">
                  01 / Context
                </p>
                <h2 className="mt-5 text-[clamp(1.6rem,2.8vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.035em] text-paper">
                  The problem
                </h2>
                <p className="mt-6 max-w-[68ch] text-[1.0625rem] leading-[1.75] text-steel">
                  {project.problem}
                </p>
              </section>

              <section id="solution">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-lime">
                  02 / Delivery
                </p>
                <h2 className="mt-5 text-[clamp(1.6rem,2.8vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.035em] text-paper">
                  What we delivered
                </h2>
                <p className="mt-6 max-w-[68ch] text-[1.0625rem] leading-[1.75] text-steel">
                  {project.solution}
                </p>
              </section>

              <section id="technology">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-lime">
                  03 / Stack
                </p>
                <h2 className="mt-5 text-[clamp(1.6rem,2.8vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.035em] text-paper">
                  Technology
                </h2>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line bg-surface px-4 py-2 font-mono text-[0.75rem] tracking-[0.06em] text-paper/85"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-9 font-mono text-[0.625rem] uppercase tracking-[0.22em] text-[#5b6472]">
                  Services involved
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                  {project.services.map((serviceSlug) => {
                    const service = getService(serviceSlug);
                    if (!service) return null;
                    return (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="ulink text-[0.9375rem] text-paper transition-colors duration-300 hover:text-lime"
                        >
                          {service.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>

              <section id="highlights">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-lime">
                  04 / Detail
                </p>
                <h2 className="mt-5 text-[clamp(1.6rem,2.8vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.035em] text-paper">
                  Highlights
                </h2>
                <ul className="mt-7 flex flex-col gap-4 border-t border-line pt-7">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-4 text-[1.0625rem] leading-[1.6] text-paper/85"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-lime"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>

              {hasResults ? (
                <section id="results">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-lime">
                    05 / Outcomes
                  </p>
                  <h2 className="mt-5 text-[clamp(1.6rem,2.8vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.035em] text-paper">
                    Results
                  </h2>
                  <dl className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {project.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-[4px] border border-line bg-surface p-6"
                      >
                        <dt className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5b6472]">
                          {result.label}
                        </dt>
                        <dd className="mt-4 text-[2rem] font-medium leading-none tracking-[-0.03em] text-lime">
                          {result.value}
                        </dd>
                        {result.note ? (
                          <p className="mt-3 text-[0.8125rem] leading-[1.6] text-steel">
                            {result.note}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </dl>
                </section>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {hasNext ? (
        <section className="border-y border-line bg-surface">
          <Container>
            <Link
              href={`/work/${next.slug}`}
              className="group -mx-4 flex flex-col gap-6 px-4 py-14 transition-colors duration-500 hover:bg-elevated/60 md:-mx-6 md:px-6 md:flex-row md:items-end md:justify-between md:py-16"
            >
              <div>
                <span className="eyebrow">Next project</span>
                <h2 className="mt-6 text-[clamp(1.75rem,3.6vw,2.9rem)] font-medium leading-[1.05] tracking-[-0.04em] text-paper transition-colors duration-300 group-hover:text-lime">
                  {next.name}
                </h2>
                <p className="mt-4 max-w-[54ch] text-[1.0625rem] leading-[1.6] text-steel">
                  {next.tagline}
                </p>
              </div>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-ink text-paper transition-colors duration-500 group-hover:border-lime/50 group-hover:text-lime">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </Link>
          </Container>
        </section>
      ) : null}
    </>
  );
}
