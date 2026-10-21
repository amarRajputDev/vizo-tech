"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getService, type Service } from "@/data/services";
import { solutions } from "@/data/solutions";
import { cn } from "@/lib/utils";

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const monoLabel =
  "font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#5b6472]";

export function SolutionsExplorer() {
  const reduce = useReducedMotion();
  const [selectedId, setSelectedId] = useState(solutions[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedIndex = solutions.findIndex((s) => s.id === selectedId);
  const solution = solutions[selectedIndex];

  function select(index: number, moveFocus = false) {
    const next = solutions[index];
    if (!next) return;
    setSelectedId(next.id);
    if (moveFocus) tabRefs.current[index]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const count = solutions.length;
    let next: number | null = null;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = (selectedIndex + 1) % count;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = (selectedIndex - 1 + count) % count;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = count - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    select(next, true);
  }

  return (
    <section
      id="solutions"
      className="relative overflow-hidden border-b border-line bg-paper py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines-light opacity-70" />

      <Container className="relative">
        <SectionHeading
          tone="light"
          eyebrow="Solutions"
          title={
            <>
              Technology should solve something that{" "}
              <span className="box-decoration-clone bg-lime px-1.5 text-onpaper">
                matters
              </span>
              .
            </>
          }
          description="We start from the business problem — the hours lost, the growth stalled, the friction nobody has had time to remove — and only then decide which technology earns its place."
        />

        <div className="mt-14 grid items-start gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          {/* ------------------------------------------------ challenge tabs */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className={cn(monoLabel, "mb-5")}>Pick the closest match</p>
            </Reveal>
            <Reveal delay={0.06}>
              <div
                role="tablist"
                aria-orientation="vertical"
                aria-label="Common business challenges"
                onKeyDown={onKeyDown}
                className="border-t border-[#e2e7ee]"
              >
                {solutions.map((item, i) => {
                  const selected = item.id === selectedId;
                  return (
                    <button
                      key={item.id}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      type="button"
                      role="tab"
                      id={`solution-tab-${item.id}`}
                      aria-selected={selected}
                      aria-controls="solution-panel"
                      tabIndex={selected ? 0 : -1}
                      onClick={() => select(i)}
                      className={cn(
                        "relative flex w-full items-baseline gap-4 border-b border-[#e2e7ee] py-3.5 pr-3 pl-5 text-left transition-colors duration-300 md:py-4",
                        "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-onpaper",
                        selected
                          ? "text-onpaper"
                          : "text-[#5b6472] hover:text-onpaper",
                      )}
                    >
                      {selected ? (
                        reduce ? (
                          <span
                            aria-hidden="true"
                            className="absolute inset-y-0 left-0 w-[2px] bg-lime"
                          />
                        ) : (
                          <motion.span
                            aria-hidden="true"
                            layoutId="solutions-indicator"
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-y-0 left-0 w-[2px] bg-lime"
                          />
                        )
                      ) : null}
                      <span
                        className={cn(
                          "idx shrink-0 text-[0.6875rem] transition-colors duration-300",
                          selected ? "text-onpaper" : "text-[#5b6472]",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[1.0625rem] font-medium leading-snug tracking-[-0.01em]">
                        {item.challenge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* -------------------------------------------------- outcome panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={solution.id}
                role="tabpanel"
                id="solution-panel"
                aria-labelledby={`solution-tab-${solution.id}`}
                tabIndex={0}
                variants={panelVariants}
                initial={reduce ? false : "hidden"}
                animate="show"
                exit={reduce ? { opacity: 1 } : "exit"}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="min-h-[24rem] rounded-[4px] border border-[#d7dde6] bg-white p-8 shadow-[0_30px_60px_-40px_rgba(10,13,19,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-onpaper md:p-10 lg:min-h-[30rem]"
              >
                <p className={monoLabel}>The challenge</p>
                <p className="mt-3 max-w-[62ch] text-[1rem] leading-[1.7] text-[#4d5665]">
                  {solution.symptom}
                </p>

                <div className="my-8 h-px bg-[#e4e9f0]" />

                <p className={monoLabel}>The outcome</p>
                <p className="mt-3 max-w-[26ch] text-[1.5rem] font-medium leading-[1.2] tracking-[-0.03em] text-onpaper md:text-[1.75rem]">
                  {solution.outcome}
                </p>
                <p className="mt-5 max-w-[62ch] text-[0.9375rem] leading-[1.75] text-[#4d5665]">
                  {solution.detail}
                </p>

                <div className="mt-8">
                  <p className={monoLabel}>Recommended services</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {solution.recommended
                      .map((slug) => getService(slug))
                      .filter((s): s is Service => Boolean(s))
                      .map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="inline-flex min-h-[44px] items-center rounded-[2px] border border-[#d7dde6] px-3 py-1.5 text-[0.8125rem] text-onpaper transition-colors duration-300 hover:border-onpaper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-onpaper md:min-h-0"
                        >
                          {service.name}
                        </Link>
                      ))}
                  </div>
                </div>

                <div className="mt-8">
                  <ButtonLink href={solution.cta.href} variant="paper">
                    {solution.cta.label}
                  </ButtonLink>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
