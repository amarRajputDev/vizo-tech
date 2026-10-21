import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { principles } from "@/data/principles";
import { processStages } from "@/data/process";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Vizo Technology works: product thinking, design, engineering and practical automation applied to real business problems — for small and growing businesses in the US, UK and beyond.",
  alternates: { canonical: "/about" },
};

const commitments = [
  {
    number: "01",
    title: "We will not sell you AI where a simpler fix works.",
    detail:
      "Automation is a tool, not a pitch. If the real answer is a change to a form, a process or a piece of software you already own, that is what we will recommend — even when it is a smaller engagement.",
  },
  {
    number: "02",
    title: "We will not pad a proposal with work the project does not need.",
    detail:
      "Scope exists to protect both sides. We write proposals that include what the outcome requires and leave out what it does not, and we will say so plainly when a request is unlikely to earn its cost.",
  },
  {
    number: "03",
    title: "We will not leave you with a system you cannot maintain.",
    detail:
      "Every build ends with documentation, environments and a real handover. Keeping us on for maintenance should be a choice you make, never a position you are left in.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="noise relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
        <div className="glow-violet pointer-events-none absolute -top-[25%] right-[-10%] h-[65vh] w-[70vw] opacity-60" />

        <Container className="relative pt-[8.5rem] pb-16 sm:pb-20">
          <Reveal>
            <span className="eyebrow">About</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-[18ch] text-[clamp(2.4rem,5.4vw,4.6rem)] font-medium leading-[1] tracking-[-0.04em] text-paper">
              Good technology starts with understanding people.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-steel sm:text-[1.125rem]">
              Vizo Technology combines product thinking, design, engineering and
              practical automation to solve real business problems. We help
              companies build the websites, software and workflows they
              actually need — with the technology chosen for the problem, not
              the trend.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---------------------------------------------------- positioning */}
      <section className="border-b border-line bg-surface">
        <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-[1.15] tracking-[-0.03em] text-paper">
                We work with businesses that have outgrown their workarounds —
                and need technology that finally keeps up.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.06}>
              <p className="text-[1rem] leading-[1.75] text-steel">
                Vizo Technology works with small and growing businesses, startups, and
                ecommerce and service companies across the US, UK and
                international markets. Our clients are usually past the point
                where spreadsheets, disconnected tools and manual handoffs can
                keep up — and are looking for a partner, not an enterprise
                consultancy with enterprise timelines.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-[1rem] leading-[1.75] text-steel">
                We design, build and improve digital products: marketing sites
                and web applications, custom business software, ecommerce
                systems, integrations and practical AI automation. Some
                engagements start with a defined project; many continue as an
                ongoing partnership where we keep the system healthy and moving
                forward as the business changes.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-[1rem] leading-[1.75] text-steel">
                We measure success by whether the business runs better
                afterwards: fewer manual steps, faster answers for customers,
                data people trust, and a system your team is willing to rely
                on. Traffic spikes, awards and vanity metrics do not appear in
                our definition of done.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------- how we think */}
      <section className="border-b border-line">
        <Container className="py-20 lg:py-28">
          <Reveal>
            <span className="eyebrow">How we think</span>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(1.9rem,3.8vw,3.1rem)] font-medium leading-[1.05] tracking-[-0.035em] text-paper">
              Six principles that shape every engagement.
            </h2>
          </Reveal>

          <div className="mt-14 lg:mt-20">
            {principles.map((principle, i) => (
              <Reveal
                key={principle.id}
                delay={0.04 * i}
                className={`border-t border-line py-10 md:py-12 ${
                  i % 2 === 1 ? "md:pl-[8%] lg:pl-[12%]" : ""
                }`}
              >
                <div className="grid gap-4 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-2">
                    <span className="idx text-[1.5rem] leading-none text-[#2b3543] sm:text-[2rem]">
                      {principle.number}
                    </span>
                  </div>
                  <div className="md:col-span-10 lg:col-span-9">
                    <h3 className="text-[1.25rem] font-medium tracking-[-0.02em] text-paper sm:text-[1.375rem]">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-[1.0625rem] leading-[1.6] text-lime/90">
                      {principle.statement}
                    </p>
                    <p className="mt-4 max-w-[62ch] text-[0.9375rem] leading-[1.75] text-steel">
                      {principle.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-line" />
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------- how we work */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 lg:py-28">
          <Reveal>
            <span className="eyebrow">How we work</span>
            <h2 className="mt-6 max-w-[24ch] text-[clamp(1.9rem,3.8vw,3.1rem)] font-medium leading-[1.05] tracking-[-0.035em] text-paper">
              A process built for clarity, not ceremony.
            </h2>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-px border-t border-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-6 lg:border-t-0">
            {processStages.map((stage) => (
              <RevealItem
                key={stage.id}
                className="group border-b border-line pt-6 pb-2 lg:border-t lg:pt-8 lg:pb-10"
              >
                <div className="flex items-baseline gap-3 lg:block">
                  <span className="idx text-[0.8125rem] tracking-[0.12em] text-lime">
                    {stage.number}
                  </span>
                  <h3 className="text-[1.0625rem] font-medium tracking-[-0.02em] text-paper lg:mt-4">
                    {stage.name}
                  </h3>
                </div>
                <p className="mt-3 max-w-[34ch] text-[0.875rem] leading-[1.7] text-steel lg:mt-3">
                  {stage.summary}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ------------------------------------------- honesty band (light) */}
      <section className="bg-paper text-onpaper grid-lines-light">
        <Container className="py-20 lg:py-28">
          <Reveal>
            <span className="eyebrow eyebrow-dark">What we will not do</span>
            <h2 className="mt-6 max-w-[22ch] text-[clamp(1.9rem,3.8vw,3.1rem)] font-medium leading-[1.05] tracking-[-0.035em] text-onpaper">
              Straight answers, even when they are inconvenient.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px border-t border-[#d3dae4] lg:mt-20 lg:grid-cols-3">
            {commitments.map((item, i) => (
              <Reveal
                key={item.number}
                delay={0.06 * i}
                className="border-b border-[#d3dae4] py-10 lg:border-b-0 lg:border-r lg:pr-10 lg:last:border-r-0 lg:[&:not(:first-child)]:pl-10"
              >
                <span className="idx text-[0.8125rem] tracking-[0.12em] text-[#5b6472]">
                  {item.number}
                </span>
                <h3 className="mt-5 max-w-[24ch] text-[1.125rem] font-medium leading-[1.35] tracking-[-0.02em] text-onpaper">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[42ch] text-[0.9375rem] leading-[1.75] text-[#4d5665]">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------------- CTA */}
      <section className="relative overflow-hidden border-t border-line">
        <div className="glow-lime pointer-events-none absolute left-1/2 top-0 h-[50vh] w-[90vw] -translate-x-1/2 -translate-y-1/3 opacity-50" />
        <Container className="relative py-20 lg:py-28">
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.035em] text-paper">
              Tell us what you are working on.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" size="lg">
                Start a conversation
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary" size="lg">
                See our work
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
