import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { trustItems } from "@/data/trust";
import { cn } from "@/lib/utils";

export function TrustStrip() {
  return (
    <section id="trust" className="relative border-b border-line bg-ink">
      {/* full-bleed hairline with a single travelling lime highlight */}
      <div
        aria-hidden="true"
        className="relative h-px w-full overflow-hidden bg-line"
      >
        <Reveal className="absolute inset-0" x={-240} y={0}>
          <div className="absolute inset-y-0 right-0 w-[38%] bg-gradient-to-r from-transparent via-lime/50 to-transparent" />
        </Reveal>
      </div>

      <Container className="py-14 md:py-20">
        <Reveal>
          <h2 className="eyebrow">Why teams choose Vizo Technology</h2>
        </Reveal>

        <RevealGroup
          stagger={0.07}
          className="mt-9 grid grid-cols-1 border-t border-line sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-5 lg:gap-x-0 lg:border-t-0"
        >
          {trustItems.map((item, i) => (
            <RevealItem
              key={item.label}
              className={cn(
                "border-b border-line py-5 last:border-b-0 sm:py-6 lg:border-b-0 lg:py-0",
                i < trustItems.length - 1 && "lg:pr-6",
                i > 0 && "lg:border-l lg:border-line lg:pl-6",
              )}
            >
              <span className="idx text-[0.6875rem] text-[#5b6472]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[0.9375rem] tracking-[-0.01em] text-paper">
                {item.label}
              </p>
              <p className="mt-1.5 max-w-[36ch] text-[0.8125rem] leading-relaxed text-steel">
                {item.detail}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
