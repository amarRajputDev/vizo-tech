"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const toggle = (id: string) =>
    setOpenId((current) => (current === id ? null : id));

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-line bg-paper py-24 md:py-32"
    >
      <div className="grid-lines-light pointer-events-none absolute inset-0" />

      <Container className="relative">
        <SectionHeading
          tone="light"
          eyebrow="FAQ"
          title="Questions we hear before the first call"
          description="Straight answers on services, process, pricing and what actually happens after you send a message."
        />

        <Reveal delay={0.08} className="mt-14 md:mt-20">
          <ul className="border-t border-[#d7dde6]">
            {faqs.map((item) => {
              const isOpen = openId === item.id;
              const regionId = `faq-${item.id}`;
              const buttonId = `faq-btn-${item.id}`;

              const content = (
                <p className="max-w-[68ch] pb-6 pr-12 text-[0.9375rem] leading-[1.75] text-[#4d5665] md:pr-20 md:text-[1rem]">
                  {item.answer}
                </p>
              );

              return (
                <li
                  key={item.id}
                  className="group relative border-b border-[#d7dde6]"
                >
                  {/* lime rule that appears on hover / while open */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute -left-4 bottom-6 top-6 w-[2px] origin-top bg-lime transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen
                        ? "scale-y-100"
                        : "scale-y-0 group-hover:scale-y-100",
                    )}
                  />

                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={regionId}
                      onClick={() => toggle(item.id)}
                      className="flex min-h-[4.25rem] w-full items-center justify-between gap-6 py-6 pr-2 text-left focus-visible:shadow-[0_0_0_3px_#0a0d13]"
                    >
                      <span
                        className={cn(
                          "text-[1.0625rem] font-medium tracking-[-0.015em] transition-colors duration-300 md:text-[1.125rem]",
                          isOpen
                            ? "text-onpaper"
                            : "text-onpaper/85 group-hover:text-onpaper",
                        )}
                      >
                        {item.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                          isOpen
                            ? "border-onpaper bg-onpaper text-paper"
                            : "border-[#c3cbd8] text-[#5b6472] group-hover:border-onpaper group-hover:text-onpaper",
                        )}
                      >
                        <svg
                          viewBox="0 0 14 14"
                          fill="none"
                          aria-hidden="true"
                          className={cn(
                            "h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                            isOpen && "rotate-45",
                          )}
                        >
                          <path
                            d="M7 1v12M1 7h12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  {reduce ? (
                    isOpen ? (
                      <div id={regionId} role="region" aria-labelledby={buttonId}>
                        {content}
                      </div>
                    ) : null
                  ) : (
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="region"
                          id={regionId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }}
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
          </ul>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-12 flex flex-col gap-5 border-t border-[#d7dde6] pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[1.0625rem] font-medium tracking-[-0.015em] text-onpaper">
            Still have a question?
          </p>
          <ButtonLink
            href="/contact"
            variant="paper"
            className="self-start focus-visible:shadow-[0_0_0_3px_#0a0d13] sm:self-auto"
          >
            Ask us directly
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
