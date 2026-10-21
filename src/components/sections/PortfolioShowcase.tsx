"use client";

import Link from "next/link";
import { Fragment, useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ButtonLink, buttonStyles } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Hot, SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function PortfolioShowcase() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-b border-line bg-ink py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="glow-violet pointer-events-none absolute -bottom-[28%] -left-[18%] h-[65vh] w-[60vw] opacity-50" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Work that ships — and <Hot>keeps working</Hot>.
            </>
          }
          description="Two of these run live for their owners. The rest — three demonstration builds for schools, colleges and training institutes, plus a storefront demo — we designed ourselves and label as such. Each entry describes the product and the problem it addresses."
        />

        <Reveal className="mt-7">
          <p className="flex items-center gap-2.5 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-[#5b6472]">
            <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-violet-soft" />
            Case studies describe the products and the problems they address.
          </p>
        </Reveal>

        <div className="mt-16 space-y-28 md:mt-24 md:space-y-40">
          {projects.map((project, i) => (
            <Fragment key={project.slug}>
              <ProjectEntry project={project} index={i} />
              {i < projects.length - 1 ? (
                <div aria-hidden="true" className="h-px w-full bg-line" />
              ) : null}
            </Fragment>
          ))}
        </div>

        <Reveal className="mt-28 border-t border-line pt-16 text-center md:mt-40 md:pt-24">
          <h3 className="mx-auto max-w-[22ch] text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-[-0.03em] text-paper">
            Have a project in mind? Let&apos;s talk.
          </h3>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <ButtonLink href="/contact">Start a Conversation</ButtonLink>
            <Link
              href="/work"
              className="ulink min-h-11 py-2 text-[0.9375rem] text-steel transition-colors duration-300 hover:text-paper"
            >
              See all work
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------
   Project entry
--------------------------------------------------------------- */

function ProjectEntry({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

  const visualFirst = index % 2 === 0;

  return (
    <Reveal
      as="article"
      className="grid gap-y-10 md:grid-cols-12 md:items-center md:gap-x-10 lg:gap-x-16"
    >
      {/* ------------------------------------------------------ visual */}
      <div
        className={cn(
          "min-w-0",
          visualFirst
            ? "md:col-span-7 md:col-start-1"
            : "md:col-span-7 md:col-start-6",
        )}
      >
        <motion.div
          ref={frameRef}
          className="origin-center"
          style={reduce ? undefined : { y, scale }}
        >
          <BrowserFrame host={hostnameOf(project.liveUrl)}>
            {renderMockup(project.slug)}
          </BrowserFrame>
          <p className="mt-3.5 flex items-center gap-2 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-[#5b6472]">
            <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-current" />
            {project.visual === "representative"
              ? "Representative mockup"
              : "Live product"}
          </p>
        </motion.div>
      </div>

      {/* -------------------------------------------------------- text */}
      <div
        className={cn(
          "min-w-0",
          visualFirst
            ? "md:col-span-5 md:col-start-8"
            : "md:col-span-5 md:col-start-1",
        )}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5b6472]">
          <span className="idx text-lime/85">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span aria-hidden="true" className="h-px w-5 bg-line" />
          <span>{project.year}</span>
          <span aria-hidden="true" className="h-px w-5 bg-line" />
          <span>{project.category}</span>
          <span aria-hidden="true" className="h-px w-5 bg-line" />
          <span className="tracking-[0.12em] text-steel">{project.industry}</span>
        </div>

        <h3 className="mt-4 text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.035em] text-paper">
          {project.name}
        </h3>

        <p className="mt-3.5 max-w-[46ch] text-[1.0625rem] leading-[1.5] text-paper/85">
          {project.tagline}
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <h4 className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5b6472]">
              The problem
            </h4>
            <p className="mt-2.5 max-w-[58ch] text-[0.9375rem] leading-[1.7] text-steel">
              {project.problem}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5b6472]">
              What we delivered
            </h4>
            <p className="mt-2.5 max-w-[58ch] text-[0.9375rem] leading-[1.7] text-steel">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-7">
          <h4 className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-[#5b6472]">
            Technologies
          </h4>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-[2px] border border-line px-2.5 py-1 font-mono text-[0.6875rem] leading-[1.5] text-steel"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {project.highlights.length > 0 ? (
          <ul className="mt-7 space-y-2.5">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-[0.9375rem] leading-[1.6] text-steel"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 bg-lime"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {project.results.length > 0 ? (
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-3">
            {project.results.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-[#5b6472]">
                  {stat.label}
                </dt>
                <dd className="mt-1.5 text-[1.375rem] font-medium tracking-[-0.02em] text-paper">
                  {stat.value}
                </dd>
                {stat.note ? (
                  <dd className="mt-0.5 text-[0.75rem] leading-[1.5] text-[#5b6472]">
                    {stat.note}
                  </dd>
                ) : null}
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-line pt-5">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ulink min-h-11 py-2 text-[0.875rem] font-medium text-lime"
            >
              Visit live site
              <ExternalIcon />
            </a>
          ) : (
            <span className="min-h-11 py-2 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-[#5b6472]">
              Live URL coming soon
            </span>
          )}
          <Link
            href={`/work/${project.slug}`}
            className={buttonStyles({ variant: "secondary", size: "sm" })}
          >
            <span>View case study</span>
            <MiniArrow />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

function hostnameOf(url: string): string {
  if (!url) return "preview.local";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "preview.local";
  }
}

function renderMockup(slug: string) {
  switch (slug) {
    case "vizotool":
      return <ToolsGridMockup />;
    case "dinelyy":
      return <OrderBoardMockup />;
    case "wine-store":
      return <ProductPanelMockup />;
    case "edulearn-lms":
      return <CourseGridMockup />;
    case "campus-erp":
      return <CampusDashboardMockup />;
    case "studymate-ai":
      return <TutorChatMockup />;
    default:
      return <GenericMockup />;
  }
}

/* ---------------------------------------------------------------
   Browser frame + representative interface compositions
--------------------------------------------------------------- */

function BrowserFrame({
  host,
  children,
}: {
  host: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[6px] border border-line bg-elevated shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-line px-3.5 py-3">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#333d4c]" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#333d4c]" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#333d4c]" />
        <span className="ml-2 flex h-6 min-w-0 flex-1 items-center gap-1.5 rounded-[3px] bg-ink/80 px-2.5 font-mono text-[0.625rem] text-steel">
          <svg
            viewBox="0 0 10 12"
            aria-hidden="true"
            fill="none"
            className="h-2.5 w-2 shrink-0 opacity-70"
          >
            <rect x="1" y="5.5" width="8" height="5.5" rx="1" stroke="currentColor" strokeWidth="1" />
            <path d="M3 5.5V3.8a2 2 0 1 1 4 0v1.7" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span className="truncate">{host}</span>
        </span>
      </div>
      <div className="relative aspect-[16/10] w-full bg-ink/60" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

/** VizoTool — a grid of browser tools, one highlighted tile. */
function ToolsGridMockup() {
  return (
    <div className="absolute inset-0 flex flex-col gap-2.5 p-3.5 sm:p-4">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-12 rounded-full bg-paper/25" />
        <span className="h-1.5 w-7 rounded-full bg-[#242c39]" />
        <span className="ml-auto h-4 w-16 rounded-[2px] border border-line bg-ink/50" />
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 grid-rows-3 gap-1.5 sm:gap-2">
        {Array.from({ length: 9 }).map((_, i) => {
          const accent = i === 4;
          return (
            <div
              key={i}
              className={cn(
                "flex min-h-0 flex-col items-center justify-center gap-1 rounded-[3px] border",
                accent
                  ? "border-lime/45 bg-lime/10"
                  : "border-line bg-ink/45",
              )}
            >
              <ToolGlyph kind={i} accent={accent} />
              <span
                className={cn(
                  "h-1 w-3/5 max-w-[2.25rem] rounded-full",
                  accent ? "bg-lime/70" : "bg-[#2b3543]",
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ToolGlyph({ kind, accent }: { kind: number; accent: boolean }) {
  const c = accent ? "#C8FF4D" : "#5b6472";
  const s = {
    fill: "none",
    stroke: c,
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const shape = kind % 5;

  return (
    <svg viewBox="0 0 14 14" aria-hidden="true" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
      {shape === 0 ? (
        <path d="M2 5V2h3M12 2H9M12 5V2M2 9v3h3M12 9v3H9" {...s} />
      ) : null}
      {shape === 1 ? (
        <>
          <rect x="2" y="3" width="10" height="8" rx="1" {...s} />
          <circle cx="5" cy="6" r="0.9" fill={c} />
          <path d="M3 10.2 6.5 7l2.4 2.4L11 8.4" {...s} />
        </>
      ) : null}
      {shape === 2 ? <path d="M5 4 2.5 7 5 10M9 4l2.5 3L9 10" {...s} /> : null}
      {shape === 3 ? (
        <>
          <rect x="3" y="2" width="8" height="10" rx="1" {...s} />
          <path d="M5.5 5.5h3M5.5 8h3" {...s} />
        </>
      ) : null}
      {shape === 4 ? (
        <path d="M2 5h8m0 0L7.5 2.5M10 5 7.5 7.5M12 9H4m0 0 2.5-2.5M4 9l2.5 2.5" {...s} />
      ) : null}
    </svg>
  );
}

/** Dinelyy — a live kitchen / order board with three columns. */
function OrderBoardMockup() {
  const columns = [
    { label: "New", count: 2, accent: false },
    { label: "Preparing", count: 3, accent: true },
    { label: "Ready", count: 2, accent: false },
  ];

  return (
    <div className="absolute inset-0 flex flex-col gap-2.5 p-3.5 sm:p-4">
      <div className="flex items-center justify-between">
        <span className="h-1.5 w-14 rounded-full bg-paper/25" />
        <span className="flex items-center gap-1.5 font-mono text-[0.5rem] uppercase tracking-[0.18em] text-violet-soft">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-violet" />
          live
        </span>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-1.5 sm:gap-2">
        {columns.map((col) => (
          <div
            key={col.label}
            className="flex min-h-0 flex-col gap-1.5 rounded-[3px] border border-line bg-ink/45 p-1.5 sm:p-2"
          >
            <div className="flex items-center justify-between gap-1">
              <span className="truncate font-mono text-[0.5rem] uppercase tracking-[0.16em] text-steel">
                {col.label}
              </span>
              <span
                className={cn(
                  "idx text-[0.5rem]",
                  col.accent ? "text-violet-soft" : "text-[#5b6472]",
                )}
              >
                {String(col.count).padStart(2, "0")}
              </span>
            </div>
            {Array.from({ length: col.count }).map((_, pi) => {
              const hot = col.accent && pi === 0;
              return (
                <div
                  key={pi}
                  className={cn(
                    "rounded-[2px] border p-1.5",
                    hot ? "border-violet/55 bg-violet/12" : "border-line bg-elevated/60",
                  )}
                >
                  <span
                    className={cn(
                      "block h-1 rounded-full",
                      hot ? "w-4/5 bg-violet-soft/90" : "w-3/5 bg-[#2b3543]",
                    )}
                  />
                  <span
                    className={cn(
                      "mt-1 block h-1 w-2/5 rounded-full",
                      hot ? "bg-violet/50" : "bg-[#242c39]",
                    )}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Wine store demo — a product page with price row and add-to-cart. */
function ProductPanelMockup() {
  return (
    <div className="absolute inset-0 flex gap-2.5 p-3.5 sm:gap-3 sm:p-4">
      <div className="relative w-[38%] shrink-0 rounded-[3px] border border-line bg-gradient-to-br from-[#222a37] to-[#12171f]">
        <svg
          viewBox="0 0 48 96"
          aria-hidden="true"
          fill="none"
          className="absolute inset-0 m-auto h-3/4 w-auto"
        >
          <rect x="20" y="3" width="8" height="6" rx="1" fill="#4a5568" />
          <path
            d="M20 9h8v11c0 3.5 5 6.5 5 13v47a5 5 0 0 1-5 5H20a5 5 0 0 1-5-5V33c0-6.5 5-9.5 5-13V9z"
            fill="#2c3644"
          />
          <rect x="15" y="46" width="18" height="22" rx="1.5" fill="#39455a" />
          <path d="M18 52h12M18 56h8" stroke="#4d5a70" strokeWidth="1.2" />
        </svg>
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5">
        <span className="h-2 w-4/5 rounded-full bg-paper/75" />
        <span className="h-1 w-1/2 rounded-full bg-[#2b3543]" />
        <div className="mt-1 flex items-center gap-2">
          <span className="h-2 w-12 rounded-full bg-paper/90" />
          <span className="h-1 w-7 rounded-full bg-[#242c39]" />
        </div>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          <span className="rounded-full bg-lime px-2.5 py-1 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-ink">
            Add to cart
          </span>
          <span className="h-4 w-4 rounded-[2px] border border-line" />
          <span className="h-4 w-4 rounded-[2px] border border-line" />
        </div>
      </div>
    </div>
  );
}

/** EduLearn LMS — a course grid with progress, one course in focus. */
function CourseGridMockup() {
  const courses = [
    { accent: false, progress: 62 },
    { accent: true, progress: 84 },
    { accent: false, progress: 38 },
    { accent: false, progress: 71 },
    { accent: false, progress: 24 },
    { accent: false, progress: 55 },
  ];

  return (
    <div className="absolute inset-0 flex flex-col gap-2.5 p-3.5 sm:p-4">
      <div className="flex items-center justify-between">
        <span className="h-1.5 w-16 rounded-full bg-paper/25" />
        <span className="flex items-center gap-1.5 font-mono text-[0.5rem] uppercase tracking-[0.18em] text-lime">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-lime" />
          semester
        </span>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-3 gap-1.5 sm:gap-2">
        {courses.map((course, i) => (
          <div
            key={i}
            className={cn(
              "flex min-h-0 flex-col justify-between overflow-hidden rounded-[3px] border p-2 sm:p-2.5",
              course.accent
                ? "border-lime/45 bg-lime/10"
                : "border-line bg-ink/45",
            )}
          >
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-1.5 w-4/5 rounded-full",
                  course.accent ? "bg-lime/80" : "bg-paper/60",
                )}
              />
              <span className="block h-1 w-2/5 rounded-full bg-[#242c39]" />
            </div>
            <div className="space-y-1">
              <span className="block h-1 w-full rounded-full bg-[#1e2531]">
                <span
                  className={cn(
                    "block h-1 rounded-full",
                    course.accent ? "bg-lime" : "bg-[#3b4657]",
                  )}
                  style={{ width: `${course.progress}%` }}
                />
              </span>
              <span className="block font-mono text-[0.4375rem] uppercase tracking-[0.14em] text-[#5b6472]">
                {course.progress}% complete
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** CampusERP — administration dashboard with stat cards and a records table. */
function CampusDashboardMockup() {
  return (
    <div className="absolute inset-0 flex flex-col gap-2 p-3.5 sm:p-4">
      <div className="flex items-center justify-between">
        <span className="h-1.5 w-14 rounded-full bg-paper/25" />
        <span className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-violet-soft">
          admin
        </span>
      </div>
      <div className="grid shrink-0 grid-cols-3 gap-1.5 sm:gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-[3px] border border-line bg-ink/45 p-1.5 sm:p-2"
          >
            <span className="block h-1 w-3/5 rounded-full bg-[#242c39]" />
            <span
              className={cn(
                "mt-1.5 block h-2.5 w-2/5 rounded-[2px]",
                i === 1 ? "bg-violet/70" : "bg-paper/70",
              )}
            />
          </div>
        ))}
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-1 rounded-[3px] border border-line bg-ink/45 p-1.5 sm:p-2">
        <div className="flex items-center gap-2 border-b border-[#1c232e] pb-1.5">
          <span className="h-1 w-1/4 rounded-full bg-[#2b3543]" />
          <span className="h-1 w-1/5 rounded-full bg-[#2b3543]" />
          <span className="ml-auto h-1 w-1/6 rounded-full bg-violet/60" />
        </div>
        {[0, 1, 2, 3].map((row) => (
          <div
            key={row}
            className="flex flex-1 items-center gap-2 border-b border-[#161c25] last:border-b-0"
          >
            <span
              className={cn(
                "h-1 w-1/4 rounded-full",
                row === 1 ? "bg-violet/50" : "bg-paper/45",
              )}
            />
            <span className="h-1 w-1/6 rounded-full bg-[#242c39]" />
            <span className="h-1 w-1/5 rounded-full bg-[#242c39]" />
            <span className="ml-auto h-2 w-6 rounded-full border border-[#33404f]" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** StudyMate AI — a grounded answer with a cited source chip. */
function TutorChatMockup() {
  return (
    <div className="absolute inset-0 flex flex-col gap-2 p-3.5 sm:p-4">
      <div className="flex items-center justify-between">
        <span className="h-1.5 w-12 rounded-full bg-paper/25" />
        <span className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-steel">
          syllabus mode
        </span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-1.5">
        <span className="ml-auto block h-4 w-[55%] rounded-[6px] rounded-br-[2px] bg-[#232c38]" />
        <span className="block h-4 w-[72%] rounded-[6px] rounded-bl-[2px] border border-lime/35 bg-lime/10" />
        <span className="block h-1.5 w-[64%] rounded-full bg-[#1e2531]" />
        <span className="block h-1.5 w-[48%] rounded-full bg-[#1e2531]" />
        <span className="mt-1 flex flex-wrap items-center gap-1.5">
          <span className="rounded-full border border-violet/45 bg-violet/12 px-2 py-0.5 font-mono text-[0.4375rem] uppercase tracking-[0.14em] text-violet-soft">
            source · unit 4
          </span>
          <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[0.4375rem] uppercase tracking-[0.14em] text-[#5b6472]">
            checked
          </span>
        </span>
      </div>
      <div className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-ink/70 px-3 py-1.5">
        <span className="h-1.5 flex-1 rounded-full bg-[#242c39]" />
        <span className="h-3 w-3 rounded-full bg-lime/80" />
      </div>
    </div>
  );
}

/** Fallback composition for projects without a bespoke motif. */
function GenericMockup() {
  return (
    <div className="absolute inset-0 flex flex-col gap-2 p-3.5 sm:p-4">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-10 rounded-full bg-paper/25" />
        <span className="ml-auto h-3.5 w-12 rounded-[2px] bg-[#242c39]" />
      </div>
      <div className="flex min-h-0 flex-1 gap-2">
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 rounded-[3px] border border-line bg-ink/45 p-2.5">
          <span className="h-2 w-3/4 rounded-full bg-paper/60" />
          <span className="h-1 w-full rounded-full bg-[#242c39]" />
          <span className="h-1 w-4/5 rounded-full bg-[#242c39]" />
          <span className="mt-1 h-4 w-16 rounded-[2px] bg-lime/80" />
        </div>
        <div className="hidden w-[38%] shrink-0 flex-col gap-1.5 rounded-[3px] border border-line bg-ink/45 p-2.5 sm:flex">
          <span className="h-1 w-3/5 rounded-full bg-[#2b3543]" />
          <span className="h-8 rounded-[2px] bg-gradient-to-t from-[#222a37] to-[#2c3644]" />
          <span className="h-1 w-4/5 rounded-full bg-[#242c39]" />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   Inline icons
--------------------------------------------------------------- */

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <path
        d="M5.5 2.5h-3v9h9v-3M8 2.5h3.5V6M11.5 2.5 6 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="square"
      />
    </svg>
  );
}

function MiniArrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
    >
      <path
        d="M2.5 8h11m0 0L9 3.5M13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
