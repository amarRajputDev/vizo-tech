"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Hot, SectionHeading } from "@/components/ui/SectionHeading";
import { processStages } from "@/data/process";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 45%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.04, 1]);

  const toggle = (i: number) => {
    setOpenIndex((current) => (current === i ? null : i));
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-line bg-ink py-24 md:py-32"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
      <div className="glow-lime pointer-events-none absolute -right-[20%] -top-[18%] h-[55vh] w-[55vw] opacity-50" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              Six stages. One clear path from idea to <Hot>improvement</Hot>.
            </>
          }
          description="The process is iterative rather than linear: you see working software early, each stage produces something you can react to, and what we learn feeds straight back into the plan."
        />

        {/* ------------------------------------------ horizontal rail (lg+) */}
        <nav aria-label="Process stages" className="relative mt-16 hidden lg:block">
          <div aria-hidden="true" className="absolute inset-x-0 top-[18px] h-px bg-line" />
          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 top-[18px] h-px origin-left bg-lime"
            style={reduce ? { scaleX: 1 } : { scaleX }}
          />
          <ol className="relative grid grid-cols-6">
            {processStages.map((stage, i) => {
              const open = openIndex === i;
              return (
                <li key={stage.id} className="flex justify-center">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`stage-${stage.id}`}
                    onClick={() => toggle(i)}
                    className="group flex min-h-11 flex-col items-center gap-4 text-center"
                  >
                    <span
                      className={cn(
                        "idx relative z-10 flex h-9 w-9 items-center justify-center rounded-[3px] border text-[0.8125rem] transition-colors duration-300",
                        open
                          ? "border-lime bg-lime text-ink"
                          : "border-line bg-ink text-steel group-hover:border-lime/50",
                      )}
                    >
                      {stage.number}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[0.6875rem] uppercase tracking-[0.18em] transition-colors duration-300",
                        open ? "text-lime" : "text-[#5b6472]",
                      )}
                    >
                      {stage.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* ------------------------------------------------- stage accordion */}
        <ol className="mt-10 border-t border-line lg:mt-20">
          {processStages.map((stage, i) => {
            const open = openIndex === i;
            const regionId = `stage-${stage.id}`;
            const buttonId = `stage-button-${stage.id}`;

            const content = (
              <div className="pb-9 pl-[3.5rem] md:pl-14">
                <p className="max-w-[62ch] text-[1rem] leading-[1.75] text-steel">
                  {stage.detail}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {stage.outputs.map((output) => (
                    <li
                      key={output}
                      className="rounded-[2px] border border-line px-2.5 py-1 font-mono text-[0.75rem] text-steel"
                    >
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            );

            return (
              <li key={stage.id} className="relative border-b border-line">
                {/* mobile vertical rail */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-[17px] top-0 w-px bg-line lg:hidden"
                />

                <h3 className="font-normal">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={regionId}
                    onClick={() => toggle(i)}
                    className="group relative flex w-full items-start gap-5 py-6 pr-2 text-left md:py-7"
                  >
                    <span
                      className={cn(
                        "idx relative z-10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[3px] border text-[0.8125rem] transition-colors duration-300 lg:hidden",
                        open
                          ? "border-lime bg-lime text-ink"
                          : "border-line bg-ink text-steel group-hover:border-lime/50",
                      )}
                    >
                      {stage.number}
                    </span>
                    <span
                      className={cn(
                        "idx hidden w-9 shrink-0 pt-1 text-center text-[0.875rem] transition-colors duration-300 lg:block",
                        open ? "text-lime" : "text-[#5b6472]",
                      )}
                    >
                      {stage.number}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "block text-[1.25rem] font-medium tracking-[-0.02em] transition-colors duration-300",
                          open ? "text-lime" : "text-paper group-hover:text-paper",
                        )}
                      >
                        {stage.name}
                      </span>
                      <span className="mt-1.5 hidden max-w-[56ch] text-[0.9375rem] leading-[1.6] text-steel md:block">
                        {stage.summary}
                      </span>
                    </span>

                    <svg
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="mt-2 h-4 w-4 shrink-0 text-steel transition-colors duration-300 group-hover:text-paper"
                    >
                      <path
                        d="M2 8h12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                      <path
                        d="M8 2v12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                        className={cn(
                          "origin-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                          open ? "scale-y-0" : "scale-y-100",
                        )}
                      />
                    </svg>
                  </button>
                </h3>

                {reduce ? (
                  open ? (
                    <div id={regionId} role="region" aria-labelledby={buttonId}>
                      {content}
                    </div>
                  ) : null
                ) : (
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        key="region"
                        id={regionId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        {content}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                )}
              </li>
            );
          })}
        </ol>

        <Reveal delay={0.1} className="mt-14 border-t border-line pt-14">
          <ButtonLink href="/contact" variant="secondary">
            Talk us through your project
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
