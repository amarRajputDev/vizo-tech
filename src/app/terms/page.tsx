import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply to use of the Vizo Technology website, including how proposals and engagements are governed.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    id: "using-this-website",
    title: "Using this website",
    body: [
      "The content of this website is provided for general information about Vizo Technology and the work we do. Service descriptions, examples and contact details may change over time without notice.",
      "You may browse and link to this website freely. You may not misuse it — for example, by attempting to disrupt the site, probe its infrastructure or submit unlawful content through its forms.",
    ],
  },
  {
    id: "no-warranty-of-results",
    title: "No warranty of results",
    body: [
      "Descriptions of our services and examples of past work are illustrative. Every business, market and technical situation is different, and we do not guarantee specific outcomes such as revenue, search rankings, conversion rates or funding from any engagement.",
      "Where a page describes a result achieved for a particular project, that result belonged to that project and its context.",
    ],
  },
  {
    id: "proposals-and-agreements",
    title: "Proposals and agreements",
    body: [
      "Any actual engagement is governed by a separate written proposal or agreement between the parties, covering scope, timeline, fees, responsibilities and intellectual property.",
      "Nothing on this website forms a contract, an offer or an acceptance of an offer. A conversation, a form submission or a meeting does not create an engagement until a written proposal is agreed by both sides.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: [
      "The design, copy, brand and code of this website belong to Vizo Technology unless stated otherwise. You may not reproduce substantial portions of it without permission.",
      "Third-party products, platforms and client work shown on the site remain the property of their respective owners. Their appearance here is for reference and does not transfer any rights.",
    ],
  },
  {
    id: "external-links",
    title: "External links",
    body: [
      "This website may link to client products, demonstration sites or other external resources. Those links are provided for reference and convenience.",
      "We are not responsible for the content, availability or practices of external sites we do not control.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, this website is provided as-is, without warranties of any kind, and we are not liable for losses arising solely from its use or from reliance on its content.",
      "Nothing in these terms excludes or limits liability that cannot be excluded or limited under applicable law.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: [
      "The governing law and venue for any engagement are defined in the written proposal or agreement for that engagement.",
      "These website terms are interpreted under the laws applicable where the agency operates, without prejudice to any mandatory consumer protections that apply in your place of residence.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "Questions about these terms can be sent through the contact page and a person will reply.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />

      <Container className="relative pt-[8.5rem] pb-24">
        <Reveal className="max-w-[68ch]">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-8 text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.035em] text-paper">
            Terms of Service
          </h1>
          <p className="mt-6 font-mono text-[0.75rem] tracking-[0.08em] text-steel">
            Last updated — 13 October 2026
          </p>
          <p className="mt-8 text-[1.0625rem] leading-[1.75] text-steel">
            The short version: this site describes what we do. Actual work is
            governed by a written agreement, not by this page.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-14 max-w-[68ch]">
          <nav aria-label="Terms of service contents" className="border-y border-line py-8">
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
