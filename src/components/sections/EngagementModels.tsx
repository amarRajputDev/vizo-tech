import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engagements } from "@/data/engagement";

export function EngagementModels() {
  return (
    <section
      id="engagement"
      className="noise relative overflow-hidden border-b border-line bg-surface py-24 md:py-32"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Engagements"
          title="Ways to work with us"
          description="Every engagement starts with a conversation and a written scope — no prices are published because no two scopes are the same, and a proposal is only useful once it describes your problem."
        />

        <RevealGroup stagger={0.06} className="mt-16 border-t border-line md:mt-24">
          {engagements.map((engagement) => (
            <RevealItem key={engagement.id}>
              <article className="group border-b border-line px-2 py-10 transition-colors duration-500 hover:bg-ink/40 md:px-6 md:py-14">
                <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
                  {/* ------------------------------------------- index + name */}
                  <div className="lg:col-span-5">
                    <div className="flex items-baseline gap-6 md:gap-8">
                      <span
                        aria-hidden="true"
                        className="idx shrink-0 text-[clamp(2rem,4vw,3.25rem)] leading-none text-[#232c3a] transition-colors duration-500 group-hover:text-lime"
                      >
                        {engagement.index}
                      </span>
                      <h3 className="max-w-[16ch] text-[1.375rem] font-medium leading-[1.15] tracking-[-0.025em] text-paper md:text-[1.625rem]">
                        {engagement.name}
                      </h3>
                    </div>
                  </div>

                  {/* ---------------------------------------- summary + detail */}
                  <div className="mt-6 min-w-0 flex-1 lg:col-span-7 lg:mt-0">
                    <p className="max-w-[48ch] text-[1.0625rem] leading-[1.6] text-steel">
                      {engagement.summary}
                    </p>
                    <p className="mt-5 max-w-[62ch] text-[0.96875rem] leading-[1.75] text-steel/85">
                      {engagement.detail}
                    </p>

                    {engagement.suited.length > 0 ? (
                      <ul className="mt-7 flex flex-wrap gap-2">
                        {engagement.suited.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-steel transition-colors duration-500 group-hover:border-[#2c3646]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-14 md:mt-16">
          <div className="flex flex-col gap-8 border-t border-line pt-12 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[38ch] text-[clamp(1.25rem,2vw,1.5rem)] font-medium leading-[1.35] tracking-[-0.02em] text-paper">
              Every engagement starts with a scoped proposal.
            </p>
            <ButtonLink href="/contact" variant="secondary">
              Discuss your requirements
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
