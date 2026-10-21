import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you are building, what is slowing your business down, or where technology could make a difference. Vizo Technology replies to every serious enquiry personally.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  {
    number: "01",
    title: "We read every enquiry ourselves",
    detail:
      "No ticket queue and no auto-responder. A person who builds software reads what you send.",
  },
  {
    number: "02",
    title: "We reply using your preferred contact method",
    detail:
      "Email, phone, or either — we follow what you choose, usually within one or two business days.",
  },
  {
    number: "03",
    title: "If there is a fit, we scope the work and send a written proposal",
    detail:
      "A short discovery conversation, then a proposal with scope, a timeline range and the assumptions behind both — before any commitment.",
  },
] as const;

const goodToInclude = [
  "The problem behind the request — what is not working today, not just the feature you have in mind.",
  "Any deadline or event the work needs to meet.",
  "The tools you already use, and anything they must connect to.",
  "Roughly what budget range you have in mind, so we can be honest about fit.",
] as const;

export default function ContactPage() {
  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="noise relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
        <div className="glow-lime pointer-events-none absolute -top-[30%] left-1/2 h-[70vh] w-[110vw] -translate-x-1/2 opacity-70" />

        <Container className="relative pt-[8.5rem] pb-12">
          <Reveal>
            <span className="eyebrow">Contact</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-[18ch] text-[clamp(2.4rem,5.4vw,4.6rem)] font-medium leading-[1] tracking-[-0.04em] text-paper">
              Let&apos;s turn your next idea into something real.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-[58ch] text-[1.0625rem] leading-[1.7] text-steel sm:text-[1.125rem]">
              Tell us what you&apos;re building, what&apos;s slowing your
              business down, or where technology could make a difference.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* --------------------------------------------------------- the form */}
      <section className="border-b border-line">
        <Container className="grid gap-14 py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          {/* ------------------------------------------------ left rail */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-[1.375rem] font-medium tracking-[-0.025em] text-paper">
                What happens next
              </h2>
              <ol className="mt-8">
                {nextSteps.map((step) => (
                  <li
                    key={step.number}
                    className="border-t border-line py-6 last:border-b"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="idx text-[0.8125rem] tracking-[0.12em] text-lime">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-[1rem] font-medium leading-[1.4] tracking-[-0.015em] text-paper">
                          {step.title}
                        </h3>
                        <p className="mt-2 max-w-[46ch] text-[0.9375rem] leading-[1.7] text-steel">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-14 text-[1.125rem] font-medium tracking-[-0.02em] text-paper">
                Good to include
              </h2>
              <ul className="mt-6 flex flex-col gap-4">
                {goodToInclude.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-1.5 w-1.5 flex-none rotate-45 bg-lime/80"
                    />
                    <span className="max-w-[48ch] text-[0.9375rem] leading-[1.7] text-steel">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {siteConfig.email ? (
              <Reveal delay={0.12}>
                <p className="mt-12 border-t border-line pt-8 text-[0.9375rem] leading-[1.7] text-steel">
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
          </div>

          {/* ----------------------------------------------- right: form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.06}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- closing note */}
      <section className="border-b border-line bg-surface">
        <Container className="py-10">
          <p className="font-mono text-[0.75rem] leading-[1.8] tracking-[0.04em] text-[#5b6472]">
            We respond to serious enquiries. We do not add you to a mailing
            list.{" "}
            <Link href="/privacy" className="ulink text-steel">
              How we handle your information
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
