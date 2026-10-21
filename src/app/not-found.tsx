import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: { absolute: "Page not found — Vizo Technology" },
};

export default function NotFound() {
  return (
    <section className="noise relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="glow-lime pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 opacity-50" />

      <Container className="relative py-24">
        <div className="flex flex-col items-center text-center">
          <span
            aria-hidden="true"
            className="idx select-none text-[clamp(4rem,14vw,10rem)] leading-none text-[#1f2733]"
          >
            404
          </span>

          <h1 className="mt-6 text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-[-0.03em] text-paper">
            This page does not exist.
          </h1>

          <p className="mt-5 max-w-[46ch] text-[1rem] leading-[1.7] text-steel">
            The link may be outdated, or the page may have moved. The rest of
            the site is right where you left it.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/work" variant="secondary">
              Explore our work
            </ButtonLink>
          </div>

          <p className="mt-8 text-[0.9375rem] text-steel">
            Still stuck?{" "}
            <Link href="/contact" className="ulink text-paper">
              Contact us
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
