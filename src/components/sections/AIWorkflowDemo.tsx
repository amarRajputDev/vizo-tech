"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Fragment, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Hot, SectionHeading } from "@/components/ui/SectionHeading";
import { aiCapabilities, aiFlow, type FlowNode } from "@/data/ai";
import { cn } from "@/lib/utils";

/** One honest sentence per stage — what happens there, and what the client sees. */
const stageDetails: Record<string, string> = {
  input:
    "A form submission, a forwarded email or a dropped spreadsheet lands in one place, timestamped, so nothing depends on someone remembering to check an inbox.",
  processing:
    "The incoming item is read, tagged and checked against your rules; anything ambiguous is flagged for a person instead of being quietly guessed at.",
  actions:
    "The clean record is written to the CRM, a task is created and the right channel is notified — each step logged so a run can be replayed when something looks off.",
  output:
    "Your team receives a short, structured brief with the original attached, ready to act on without reopening the whole thread.",
};

const EXAMPLE_STEPS = [
  "Enquiry arrives via web form",
  "Classified + enriched",
  "Logged in the CRM + routed",
  "Team receives a structured brief",
] as const;

export function AIWorkflowDemo() {
  const reduce = useReducedMotion() ?? false;
  const [selected, setSelected] = useState<string | null>(null);

  const toggle = (id: string) =>
    setSelected((current) => (current === id ? null : id));

  return (
    <section
      id="ai"
      className="noise relative overflow-hidden border-b border-line bg-surface py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="glow-violet pointer-events-none absolute -left-[18%] -top-[20%] h-[55vh] w-[55vw] opacity-50" />
      <div className="glow-lime pointer-events-none absolute -bottom-[25%] -right-[15%] h-[50vh] w-[45vw] opacity-40" />

      <Container className="relative">
        <SectionHeading
          eyebrow="AI & automation"
          title={
            <>
              Less repetitive work. More <Hot tone="violet">room to grow</Hot>.
            </>
          }
          description="These are the kinds of workflows we design and build — not a claim that every one already runs in production for a client. What gets automated depends on your systems, your data, and the judgement you want to keep."
        />

        {/* ------------------------------------------------- capabilities */}
        <Reveal className="mt-16 md:mt-20">
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-[#5b6472]">
            Capabilities we build
          </p>
          <ul className="mt-6 border-b border-line md:grid md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
            {aiCapabilities.map((cap, i) => (
              <li
                key={cap.id}
                className="group relative border-t border-line py-6 md:py-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-px w-0 bg-violet transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                />
                <div className="flex gap-5">
                  <span className="idx mt-[3px] w-7 shrink-0 text-[0.6875rem] text-[#5b6472] transition-colors duration-500 group-hover:text-violet">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.0625rem] font-medium tracking-[-0.01em] text-paper">
                      {cap.title}
                    </h3>
                    <p className="mt-2 max-w-[52ch] text-[0.9375rem] leading-[1.65] text-steel">
                      {cap.detail}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---------------------------------------------------- pipeline */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-[#5b6472]">
              How a workflow runs
            </p>
            <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-[1.65] text-steel">
              Four stages, the same on every run. Select one to see what
              happens inside it.
            </p>
          </Reveal>

          <Reveal className="mt-10 md:mt-12">
            <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-start">
              {aiFlow.map((stage, i) => (
                <Fragment key={stage.id}>
                  <StagePanel
                    stage={stage}
                    index={i}
                    total={aiFlow.length}
                    selected={selected === stage.id}
                    onSelect={toggle}
                    reduce={reduce}
                  />
                  {i < aiFlow.length - 1 ? (
                    <FlowConnector
                      tone={
                        aiFlow[i + 1]?.id === "processing" ? "violet" : "lime"
                      }
                      reduce={reduce}
                    />
                  ) : null}
                </Fragment>
              ))}
            </div>
          </Reveal>
        </div>

        {/* --------------------------------------------------- example */}
        <Reveal className="mt-16 md:mt-20">
          <div className="border border-line bg-ink p-6 md:p-8">
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-[#5b6472]">
              One generic example, end to end
            </p>
            <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:gap-3">
              {EXAMPLE_STEPS.map((step, i) => (
                <Fragment key={step}>
                  {i > 0 ? <StepArrow /> : null}
                  <div className="min-w-0 flex-1 rounded-[3px] border border-line bg-elevated/50 px-4 py-3.5">
                    <span className="idx mr-2 text-[0.625rem] text-[#5b6472]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[0.6875rem] uppercase leading-[1.5] tracking-[0.1em] text-paper/85">
                      {step}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ------------------------------------------------------- close */}
        <Reveal className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[38ch] text-[1.0625rem] leading-[1.5] text-paper">
              Every business has a handful of processes that should run
              themselves.
            </p>
            <ButtonLink href="/contact" variant="secondary">
              Have a workflow in mind?
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------
   Pipeline pieces
--------------------------------------------------------------- */

function StagePanel({
  stage,
  index,
  total,
  selected,
  onSelect,
  reduce,
}: {
  stage: FlowNode;
  index: number;
  total: number;
  selected: boolean;
  onSelect: (id: string) => void;
  reduce: boolean;
}) {
  const detailId = `flow-detail-${stage.id}`;
  const isProcessing = stage.id === "processing";
  const detail = stageDetails[stage.id];

  return (
    <div className="min-w-0">
      <button
        type="button"
        onClick={() => onSelect(stage.id)}
        aria-expanded={selected}
        aria-controls={detailId}
        aria-label={`${stage.label} — stage ${index + 1} of ${total}`}
        className={cn(
          "w-full rounded-[4px] border bg-ink/70 p-6 text-left transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "hover:border-violet/45 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-lime",
          selected
            ? "border-violet/60 shadow-[0_0_60px_-20px_rgba(106,92,255,0.7)]"
            : "border-line",
        )}
      >
        <span className="flex items-center justify-between gap-3">
          <span
            className={cn(
              "rounded-[2px] px-2 py-1 font-mono text-[0.625rem] uppercase tracking-[0.18em]",
              isProcessing
                ? "bg-violet/15 text-violet-soft"
                : "bg-lime/10 text-lime",
            )}
          >
            {`Step ${String(index + 1).padStart(2, "0")}`}
          </span>
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className={cn(
              "h-3.5 w-3.5 text-[#5b6472] transition-[transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              selected && "rotate-180 text-violet-soft",
            )}
          >
            <path
              d="M3 6l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="square"
            />
          </svg>
        </span>

        <h3 className="mt-5 text-[1.0625rem] font-medium tracking-[-0.01em] text-paper">
          {stage.label}
        </h3>
        <span className="mt-1.5 block text-[0.8125rem] leading-[1.5] text-steel">
          {stage.caption}
        </span>

        <span role="list" className="mt-4 flex flex-wrap gap-1.5">
          {stage.items.map((item) => (
            <span
              key={item}
              role="listitem"
              className="rounded-[2px] border border-line px-2.5 py-1 text-[0.75rem] leading-[1.4] text-steel"
            >
              {item}
            </span>
          ))}
        </span>

        <span id={detailId} className="block overflow-hidden">
          <AnimatePresence initial={false}>
            {selected && detail ? (
              <motion.span
                key="detail"
                className="block"
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mt-5 block border-t border-line pt-4 text-[0.875rem] leading-[1.7] text-steel">
                  {detail}
                </span>
              </motion.span>
            ) : null}
          </AnimatePresence>
        </span>
      </button>
    </div>
  );
}

function FlowConnector({
  tone,
  reduce,
}: {
  tone: "lime" | "violet";
  reduce: boolean;
}) {
  const stroke = tone === "violet" ? "#6A5CFF" : "#C8FF4D";

  return (
    <Fragment>
      {/* mobile: vertical link between stacked stages */}
      <div className="flex justify-center py-1 lg:hidden" aria-hidden="true">
        <svg viewBox="0 0 8 40" className="h-10 w-2" fill="none">
          <path
            d="M4 0v32"
            stroke={stroke}
            strokeWidth="1"
            strokeDasharray="3 4"
            className={cn(!reduce && "animate-flow")}
          />
          <path
            d="M1.5 31 4 36.5 6.5 31"
            stroke={stroke}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* desktop: horizontal arrow between panels */}
      <div
        className="hidden self-stretch lg:flex lg:w-14 lg:shrink-0 lg:items-center lg:justify-center"
        aria-hidden="true"
      >
        <svg viewBox="0 0 56 10" className="h-2.5 w-14" fill="none">
          <path
            d="M0 5h47"
            stroke={stroke}
            strokeWidth="1"
            strokeDasharray="4 4"
            className={cn(!reduce && "animate-flow")}
          />
          <path
            d="M47.5 1.5 52 5l-4.5 3.5"
            stroke={stroke}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Fragment>
  );
}

function StepArrow() {
  return (
    <span
      className="flex items-center justify-center py-0.5 text-[#5b6472] md:shrink-0 md:px-0.5"
      aria-hidden="true"
    >
      <svg viewBox="0 0 12 14" className="h-3.5 w-3 md:hidden" fill="none">
        <path
          d="M6 1v11m0 0L2.5 8.5M6 12l3.5-3.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
      <svg viewBox="0 0 14 12" className="hidden h-3 w-3.5 md:block" fill="none">
        <path
          d="M1 6h11m0 0L8.5 2.5M12 6l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    </span>
  );
}
