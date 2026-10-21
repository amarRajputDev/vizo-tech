import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Hot, SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { principles } from "@/data/principles";

const featuredPrinciples = principles.slice(0, 4);

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-line bg-surface py-24 md:py-32"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="glow-violet pointer-events-none absolute -left-[22%] -top-[30%] h-[80vh] w-[75vw] opacity-70" />

      <Container className="relative">
        <SectionHeading
          eyebrow="About Vizo Technology"
          title={
            <>
              Good technology starts with understanding{" "}
              <Hot tone="violet">people</Hot>.
            </>
          }
          description="Vizo Technology combines product thinking, thoughtful design, software engineering and practical automation to help businesses and education institutions solve real problems."
        />

        {/* ------------------------------------------------------ lead */}
        <Reveal delay={0.06} className="mt-14 md:mt-16">
          <p className="max-w-[62ch] text-[1.125rem] leading-[1.65] text-paper/90 md:text-[1.25rem]">
            Vizo Technology works with small and growing businesses, startups
            and education institutions that have real operational problems — not
            just software wishes. Some need a website that finally reflects the
            quality of the work; others need the manual steps between a
            spreadsheet, an inbox and a CRM to quietly disappear, or a learning
            platform their students and faculty actually use. The work spans
            design, engineering and automation, because the useful answer rarely
            belongs to a single discipline. We judge every project by one
            measure: does the business run better afterwards?
          </p>
        </Reveal>

        {/* -------------------------------------------------- composition */}
        <div className="mt-14 grid gap-8 md:mt-20 lg:grid-cols-12 lg:gap-10">
          {/* brand panel */}
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[4px] border border-line bg-ink/60 p-6 md:p-8">
              <div className="grid-lines-fine pointer-events-none absolute inset-0 opacity-70" />

              <div className="relative flex items-start justify-between gap-4">
                <span className="text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.02] tracking-[-0.04em] text-paper">
                  Vizo
                  <br />
                  Technology
                </span>
                <span className="idx text-[0.6875rem] uppercase tracking-[0.22em] text-lime/70">
                  Software
                  <br />
                  AI
                  <br />
                  Digital
                </span>
              </div>

              <p className="relative mt-auto border-t border-line pt-6 font-mono text-[0.75rem] uppercase leading-[1.9] tracking-[0.18em] text-steel">
                {siteConfig.tagline}
              </p>
            </div>
          </Reveal>

          {/* principles in practice */}
          <Reveal delay={0.16} className="lg:col-span-8">
            <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#5b6472]">
              Principles in practice
            </h3>

            <ul className="mt-6 border-t border-line">
              {featuredPrinciples.map((principle) => (
                <li
                  key={principle.id}
                  className="grid gap-2 border-b border-line py-6 sm:grid-cols-[2.75rem_1fr] sm:gap-6 md:py-7"
                >
                  <span className="idx pt-[0.2rem] text-[0.75rem] text-lime/80">
                    {principle.number}
                  </span>
                  <div>
                    <h4 className="text-[1.0625rem] leading-[1.4] tracking-[-0.015em] text-paper">
                      {principle.title}
                    </h4>
                    <p className="mt-2 max-w-[52ch] text-[0.9375rem] leading-[1.7] text-steel">
                      {principle.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* --------------------------------------------------------- cta */}
        <Reveal
          delay={0.1}
          className="mt-16 flex flex-col gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:gap-5"
        >
          <ButtonLink href="/contact" size="lg">
            Discuss a project
          </ButtonLink>
          <ButtonLink href="/about" variant="secondary" size="lg">
            More about us
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
