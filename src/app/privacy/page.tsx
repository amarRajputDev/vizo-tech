import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Vizo Technology handles information submitted through this website: what we collect, why we use it, how long we keep it, and the rights you may have.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: [
      "Vizo Technology is a software development and digital solutions agency. This policy explains how we handle information submitted through this website.",
      "Where this policy refers to “we”, “us” or “Vizo Technology”, it means the team operating this website and responding to enquiries sent through it.",
    ],
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: [
      "When you use the contact form, we receive the information you submit: your name, business email address, company name, the service you are interested in, your budget range, your project description and your preferred contact method.",
      "The form is processed on our server and delivered to a configured inbox. We do not use the form contents to build advertising profiles or audience segments.",
    ],
  },
  {
    id: "how-we-use-it",
    title: "How we use it",
    body: [
      "We use the information you submit solely to respond to your enquiry and, where there is a genuine fit, to prepare a proposal or scope of work.",
      "We do not sell personal information. We do not add people who contact us through the form to marketing lists or newsletters.",
    ],
  },
  {
    id: "hosting-and-analytics",
    title: "Hosting and analytics",
    body: [
      "This website runs on hosting infrastructure configured by us. Like most web servers, the host may retain standard operational logs — such as IP address, browser user agent and the requested path — for security, abuse prevention and debugging.",
      "If analytics are enabled in the future, they will be privacy-respecting and documented on this page at that time.",
    ],
  },
  {
    id: "third-parties",
    title: "Third parties",
    body: [
      "Form submissions are delivered through the transactional email provider configured by us. Only the fields necessary to deliver your message are shared with that provider for the purpose of sending it.",
      "We do not share your enquiry with unrelated third parties.",
    ],
  },
  {
    id: "retention-and-deletion",
    title: "Retention and deletion",
    body: [
      "Enquiry emails are kept for as long as needed to handle the conversation and for legitimate business record-keeping — for example, remembering what was discussed before an engagement begins.",
      "You can ask us to delete your enquiry at any time through the contact page, and we will do so unless a legal obligation requires us to keep it.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: [
      "Depending on where you live — including under UK and EU data protection law and US state privacy laws — you may have rights to access, correct, delete or export the personal data we hold about you, and to object to or restrict certain processing.",
      "To exercise any of these rights, contact us through the contact page and we will respond within the timeframe your local law requires.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    body: [
      "This website does not set non-essential cookies by default. If that changes, this page will be updated to describe what is set and why, before or at the time of the change.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    body: [
      "This policy may be updated as the site, our tooling or the law changes. The date shown below reflects the most recent revision.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "Questions about this policy or about how we handle your information can be sent through the contact page, and a person will reply.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />

      <Container className="relative pt-[8.5rem] pb-24">
        <Reveal className="max-w-[68ch]">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-8 text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.035em] text-paper">
            Privacy Policy
          </h1>
          <p className="mt-6 font-mono text-[0.75rem] tracking-[0.08em] text-steel">
            Last updated — 13 October 2026
          </p>
          <p className="mt-8 text-[1.0625rem] leading-[1.75] text-steel">
            Plain English, no legalese theatre. This page explains what happens
            to information you share with us through this website.
          </p>
        </Reveal>

        {/* table of contents */}
        <Reveal delay={0.06} className="mt-14 max-w-[68ch]">
          <nav aria-label="Privacy policy contents" className="border-y border-line py-8">
            <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-steel">
              Contents
            </h2>
            <ol className="mt-5 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="ulink text-[0.9375rem] text-paper/85 transition-colors hover:text-paper"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>

        <div className="mt-16 max-w-[68ch]">
          {sections.map((section, i) => (
            <Reveal
              key={section.id}
              delay={0.03 * i}
              as="section"
              className="border-t border-line py-10 first:border-t-0 first:pt-0"
            >
              <h2
                id={section.id}
                className="scroll-mt-28 text-[1.375rem] font-medium tracking-[-0.02em] text-paper sm:text-[1.5rem]"
              >
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-[1rem] leading-[1.75] text-steel"
                >
                  {paragraph}
                </p>
              ))}
              {section.id === "contact" ? (
                <p className="mt-5">
                  <Link href="/contact" className="ulink text-lime">
                    Go to the contact page
                  </Link>
                </p>
              ) : null}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
