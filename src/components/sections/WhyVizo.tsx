import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles } from "@/data/principles";
import { cn } from "@/lib/utils";

export function WhyVizo() {
  return (
    <section
      id="why"
      className="relative overflow-hidden border-b border-line bg-mist py-24 md:py-32"
    >
      <div className="grid-lines-light pointer-events-none absolute inset-0" />

      <Container className="relative">
        <SectionHeading
          tone="light"
          eyebrow="Why Vizo Technology"
          title={
            <>
              A technology partner, not just{" "}
              <span className="relative inline-block">
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full bg-lime"
                />
                another vendor
              </span>
              .
            </>
          }
          description="We take responsibility for the outcome — asking why before agreeing what, saying when something is not worth building, and leaving you with systems your own team can carry forward."
        />

        <div className="mt-16 md:mt-24 lg:grid lg:grid-cols-12 lg:gap-16 xl:gap-24">
          {/* ------------------------------------------------- statement */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal delay={0.05}>
                <p
                  aria-hidden="true"
                  className="select-none font-mono text-[2.5rem] leading-[0.6] text-[#c9d1dc]"
                >
                  &ldquo;
                </p>
                <blockquote className="mt-4 text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.25] tracking-[-0.03em] text-onpaper">
                  Most projects do not fail on technology. They fail on
                  assumptions.
                </blockquote>
                <p className="mt-5 max-w-[36ch] text-[0.9375rem] leading-[1.7] text-[#5b6472]">
                  So we spend the first hours making the assumptions explicit —
                  then write them down where everyone can argue with them.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mt-10">
                <ButtonLink href="/about" variant="paper">
                  More about Vizo Technology
                </ButtonLink>
              </Reveal>
            </div>
          </div>

          {/* ------------------------------------------------ principles */}
          <div className="mt-16 lg:col-span-8 lg:mt-0">
            <RevealGroup
              stagger={0.08}
              className="border-t border-[#d7dde6]"
            >
              {principles.map((principle, i) => (
                <RevealItem key={principle.id}>
                  <article
                    className={cn(
                      "border-b border-[#d7dde6] py-9 md:py-11",
                      i % 2 === 1 && "md:ml-16",
                    )}
                  >
                    <div className="flex flex-col gap-5 md:flex-row md:gap-8">
                      <span
                        aria-hidden="true"
                        className="idx shrink-0 text-[2rem] leading-none text-[#b6bec9] md:w-16 md:pt-1.5"
                      >
                        {principle.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3 className="max-w-[28ch] text-[1.375rem] font-medium leading-[1.2] tracking-[-0.02em] text-onpaper">
                          {principle.title}
                        </h3>
                        <p className="mt-2.5 text-[1.0625rem] italic leading-[1.55] tracking-[-0.01em] text-[#4d5665]">
                          {principle.statement}
                        </p>
                        <p className="mt-4 max-w-[54ch] text-[0.96875rem] leading-[1.7] text-[#4d5665]">
                          {principle.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
