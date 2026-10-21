import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Hot } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

const nextSteps = [
  { index: "01", text: "We read your message personally" },
  { index: "02", text: "We reply using your preferred contact method" },
  {
    index: "03",
    text: "If there is a fit, we scope the work and send a written proposal",
  },
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="noise relative overflow-hidden border-b border-line bg-ink py-24 md:py-32"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
      <div className="glow-lime pointer-events-none absolute -bottom-[45%] left-1/2 h-[85vh] w-[130vw] -translate-x-1/2" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* ----------------------------------------------------- pitch */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Start a project</span>

              <h2 className="mt-7 max-w-[15ch] text-[clamp(2.1rem,4.4vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.035em] text-paper">
                Let&apos;s turn your next idea into <Hot>something real</Hot>.
              </h2>

              <p className="mt-7 max-w-[42ch] text-[1.0625rem] leading-[1.7] text-steel">
                Tell us what you&apos;re building, what&apos;s slowing your
                business down, or where technology could make a difference.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-11">
              <ol className="border-t border-line">
                {nextSteps.map((step) => (
                  <li
                    key={step.index}
                    className="flex gap-5 border-b border-line py-4"
                  >
                    <span className="idx pt-[0.2rem] text-[0.75rem] text-lime/80">
                      {step.index}
                    </span>
                    <span className="text-[0.9375rem] leading-[1.6] text-paper/85">
                      {step.text}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            {siteConfig.email ? (
              <Reveal delay={0.14} className="mt-8">
                <p className="text-[0.9375rem] leading-[1.7] text-steel">
                  Prefer email?{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="ulink text-paper"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </Reveal>
            ) : null}

            <Reveal delay={0.18} className="mt-7">
              <p className="font-mono text-[0.75rem] uppercase leading-[1.8] tracking-[0.18em] text-[#5b6472]">
                No sales sequence, no automated follow-ups.
              </p>
            </Reveal>
          </div>

          {/* ----------------------------------------------------- form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
