import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { commonChallenges, testimonials, workingPrinciples } from "@/data/testimonials";

export function CredibilitySection() {
  return (
    <section
      id="credibility"
      className="relative overflow-hidden border-b border-line bg-paper py-24 md:py-32"
    >
      <div className="grid-lines-light pointer-events-none absolute inset-0" />

      <Container className="relative">
        <SectionHeading
          tone="light"
          eyebrow="Working together"
          title="What working with us actually feels like"
          description="Most of what clients remember is not the launch date — it is how the weeks in between felt, and whether anyone told them the truth when it mattered."
        />

        {/* ------------------------------------------ testimonials (ready to fill) */}
        {testimonials.length > 0 ? (
          <RevealGroup className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <RevealItem key={testimonial.id}>
                <figure className="flex h-full flex-col rounded-[4px] border border-[#d7dde6] bg-white p-7 md:p-8">
                  <svg
                    viewBox="0 0 24 18"
                    aria-hidden="true"
                    className="h-4 w-5 text-violet/50"
                  >
                    <path
                      d="M0 18V9.5C0 4.2 3.1 1 8.4 0l.9 2.3C6.4 3.3 5 5.2 5 7.7h3.6V18H0Zm14.7 0V9.5C14.7 4.2 17.8 1 23.1 0l.9 2.3c-2.9 1-4.3 2.9-4.3 5.4H23V18h-8.3Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote className="mt-6 flex-1 text-[1.0625rem] leading-[1.65] text-onpaper">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 border-t border-[#e2e7ee] pt-5">
                    <span className="block text-[0.9375rem] font-medium tracking-[-0.01em] text-onpaper">
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] leading-[1.5] text-[#5b6472]">
                      {testimonial.role} · {testimonial.company}
                    </span>
                    {testimonial.project ? (
                      <Link
                        href={testimonial.project}
                        className="ulink mt-4 inline-flex text-[0.8125rem] font-medium text-violet"
                      >
                        View the project
                      </Link>
                    ) : null}
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        ) : null}

        {/* ------------------------------------- working principles (always) */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <span className="eyebrow eyebrow-dark">How engagements run</span>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3 md:gap-6">
            {workingPrinciples.map((principle) => (
              <RevealItem key={principle.id}>
                <article className="h-full rounded-[4px] border border-[#d7dde6] bg-white p-7 md:p-8">
                  <h3 className="text-[1.125rem] font-medium leading-[1.3] tracking-[-0.02em] text-onpaper">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-[1.7] text-[#4d5665]">
                    {principle.detail}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* ---------------------------------------- common challenges (always) */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <span className="eyebrow eyebrow-dark">What we hear often</span>
          </Reveal>

          <RevealGroup className="mt-8 border-t border-[#d7dde6] md:mt-10">
            {commonChallenges.map((challenge, i) => (
              <RevealItem key={challenge.id}>
                <article className="grid gap-3 border-b border-[#d7dde6] py-8 md:grid-cols-12 md:gap-8 md:py-10">
                  <div className="md:col-span-2">
                    <span
                      aria-hidden="true"
                      className="idx text-[0.8125rem] tracking-[0.14em] text-violet"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="max-w-[34ch] text-[1.25rem] font-medium leading-[1.4] tracking-[-0.015em] text-onpaper">
                      {challenge.title}
                    </h3>
                    <p className="mt-3.5 max-w-[62ch] text-[0.96875rem] leading-[1.7] text-[#4d5665]">
                      {challenge.detail}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.05} className="mt-16 md:mt-20">
          <div className="flex flex-col gap-8 border-t border-[#d7dde6] pt-12 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[46ch] text-[1.0625rem] leading-[1.65] text-[#4d5665]">
              We do not publish unverified praise. References from past
              engagements — including a conversation with the people who ran
              them — can be provided on request.
            </p>
            <ButtonLink href="/contact" variant="paper">
              Start a conversation
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
