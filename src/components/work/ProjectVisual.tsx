import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function hostFromUrl(url: string): string {
  if (!url) return "preview.local";
  try {
    return new URL(url).hostname;
  } catch {
    return "preview.local";
  }
}

function Glyph({ variant, accent }: { variant: number; accent: boolean }) {
  if (variant === 0) {
    return (
      <span className="flex h-4 items-end gap-[3px] sm:h-5">
        <span className={cn("h-2 w-1.5 rounded-[1px] sm:h-3 sm:w-2", accent ? "bg-lime" : "bg-[#2f3947]")} />
        <span className={cn("h-4 w-1.5 rounded-[1px] sm:h-5 sm:w-2", accent ? "bg-lime/70" : "bg-[#3b4657]")} />
        <span className={cn("h-3 w-1.5 rounded-[1px] sm:h-4 sm:w-2", accent ? "bg-lime/40" : "bg-[#2f3947]")} />
      </span>
    );
  }
  if (variant === 1) {
    return (
      <span className="flex h-4 w-4 items-center justify-center rounded-full border sm:h-5 sm:w-5">
        <span className={cn("h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2", accent ? "bg-lime" : "bg-[#3b4657]")} />
      </span>
    );
  }
  return (
    <span className="flex h-4 flex-col justify-center gap-[3px] sm:h-5">
      <span className={cn("block h-[2px] w-6 rounded-full sm:w-7", accent ? "bg-lime" : "bg-[#3b4657]")} />
      <span className={cn("block h-[2px] w-4 rounded-full", accent ? "bg-lime/60" : "bg-[#2f3947]")} />
      <span className={cn("block h-[2px] w-5 rounded-full", accent ? "bg-lime/35" : "bg-[#2b3543]")} />
    </span>
  );
}

function ToolsGrid() {
  return (
    <div className="absolute inset-0 flex flex-col p-[4%]">
      <div className="flex shrink-0 items-center justify-between gap-3">
        <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-[#6b7482] sm:text-[0.5625rem]">
          All tools
        </span>
        <span className="h-2 w-[22%] max-w-24 rounded-full bg-[#1f2733]" />
      </div>
      <div className="mt-[3%] grid min-h-0 flex-1 grid-cols-3 grid-rows-3 gap-[3%]">
        {Array.from({ length: 9 }).map((_, i) => {
          const accent = i === 0;
          return (
            <div
              key={i}
              className={cn(
                "flex min-h-0 flex-col justify-between overflow-hidden rounded-[4px] border p-[7%]",
                accent ? "border-lime/40 bg-lime/10" : "border-line bg-[#11151c]",
              )}
            >
              <Glyph variant={i % 3} accent={accent} />
              {accent ? (
                <span className="font-mono text-[0.5rem] uppercase tracking-[0.16em] text-lime sm:text-[0.5625rem]">
                  Image
                </span>
              ) : (
                <span className="block h-[3px] w-[55%] rounded-full bg-[#232c38]" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ORDER_COLUMNS = ["New", "Prep", "Ready"] as const;
const ORDER_PILLS: number[] = [3, 2, 2];

function OrderBoard() {
  return (
    <div className="absolute inset-0 flex gap-[3%] p-[4%]">
      {ORDER_COLUMNS.map((label, ci) => (
        <div
          key={label}
          className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-[4px] border border-line bg-[#10141b] p-[6%]"
        >
          <span className="shrink-0 font-mono text-[0.5rem] uppercase tracking-[0.18em] text-[#6b7482] sm:text-[0.5625rem]">
            {label}
          </span>
          <span className="mt-1 block h-px w-full bg-line" />
          <div className="mt-2.5 flex min-h-0 flex-1 flex-col gap-2 sm:gap-2.5">
            {Array.from({ length: ORDER_PILLS[ci] }).map((_, pi) => {
              const violet = ci === 0 && pi === 1;
              return (
                <span
                  key={pi}
                  className={cn(
                    "flex items-center justify-between gap-2 rounded-[3px] border px-2 py-1.5 sm:py-2",
                    violet ? "border-violet/50 bg-violet/15" : "border-line bg-[#171d27]",
                  )}
                >
                  <span
                    className={cn(
                      "h-[3px] flex-1 rounded-full",
                      violet ? "bg-violet/60" : "bg-[#2b3543]",
                    )}
                  />
                  <span
                    className={cn(
                      "h-1.5 w-1.5 shrink-0 rounded-full",
                      violet ? "bg-violet-soft" : ci === 2 ? "bg-lime/70" : "bg-[#3b4657]",
                    )}
                  />
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductPanel() {
  return (
    <div className="absolute inset-0 flex flex-col p-[4%]">
      <div className="flex shrink-0 items-center justify-between gap-3">
        <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-[#6b7482] sm:text-[0.5625rem]">
          Shop / Reds
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-8 rounded-full bg-[#1f2733]" />
          <span className="h-2 w-8 rounded-full bg-[#1f2733]" />
        </span>
      </div>
      <div className="mt-[3%] flex min-h-0 flex-1 gap-[4%]">
        <div className="relative w-[42%] shrink-0 overflow-hidden rounded-[4px] border border-line bg-gradient-to-br from-[#3a2340] via-[#241a2f] to-[#141a24]">
          <span className="absolute inset-x-[26%] bottom-[12%] top-[14%] rounded-[3px] border border-white/10 bg-white/5" />
          <span className="absolute bottom-[6%] left-[8%] h-[3px] w-[30%] rounded-full bg-white/15" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2.5 sm:gap-3">
          <span className="block h-3 w-[88%] rounded-[2px] bg-paper/85 sm:h-3.5" />
          <span className="block h-2 w-[62%] rounded-full bg-[#2b3543]" />
          <span className="block h-2 w-[74%] rounded-full bg-[#232c38]" />
          <span className="block h-2 w-[48%] rounded-full bg-[#1f2733]" />
          <div className="mt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="block h-3.5 w-14 rounded-[2px] bg-paper/70 sm:h-4 sm:w-16" />
            <span className="inline-flex items-center rounded-full bg-lime px-3 py-1.5 font-mono text-[0.5rem] uppercase tracking-[0.12em] text-ink sm:text-[0.5625rem]">
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseGrid() {
  const courses = [
    { accent: false, progress: 62 },
    { accent: true, progress: 84 },
    { accent: false, progress: 38 },
    { accent: false, progress: 71 },
    { accent: false, progress: 24 },
    { accent: false, progress: 55 },
  ];

  return (
    <div className="absolute inset-0 flex flex-col p-[4%]">
      <div className="flex shrink-0 items-center justify-between gap-3">
        <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-[#6b7482] sm:text-[0.5625rem]">
          My courses
        </span>
        <span className="h-2 w-[18%] max-w-20 rounded-full bg-[#1f2733]" />
      </div>
      <div className="mt-[3%] grid min-h-0 flex-1 grid-cols-2 grid-rows-3 gap-[3%]">
        {courses.map((course, i) => (
          <div
            key={i}
            className={cn(
              "flex min-h-0 flex-col justify-between overflow-hidden rounded-[4px] border p-[7%]",
              course.accent ? "border-lime/40 bg-lime/10" : "border-line bg-[#11151c]",
            )}
          >
            <span className="space-y-[6%]">
              <span
                className={cn(
                  "block h-[3px] w-[75%] rounded-full",
                  course.accent ? "bg-lime/70" : "bg-paper/60",
                )}
              />
              <span className="mt-1 block h-[3px] w-[45%] rounded-full bg-[#232c38]" />
            </span>
            <span className="block h-[4px] w-full rounded-full bg-[#1e2531]">
              <span
                className={cn(
                  "block h-[4px] rounded-full",
                  course.accent ? "bg-lime" : "bg-[#3b4657]",
                )}
                style={{ width: `${course.progress}%` }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TutorChat() {
  return (
    <div className="absolute inset-0 flex flex-col p-[4%]">
      <div className="flex shrink-0 items-center justify-between gap-3">
        <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-[#6b7482] sm:text-[0.5625rem]">
          StudyMate · syllabus mode
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-lime/80" />
      </div>
      <div className="mt-[3%] flex min-h-0 flex-1 flex-col gap-[3%]">
        <span className="ml-auto block h-[14%] w-[55%] rounded-[6px] rounded-br-[2px] bg-[#232c38]" />
        <span className="block h-[26%] w-[74%] rounded-[6px] rounded-bl-[2px] border border-lime/35 bg-lime/10" />
        <span className="block h-[4px] w-[64%] rounded-full bg-[#1e2531]" />
        <span className="block h-[4px] w-[48%] rounded-full bg-[#1e2531]" />
        <span className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-violet/45 bg-violet/12 px-2 py-1 font-mono text-[0.4375rem] uppercase tracking-[0.14em] text-violet-soft sm:text-[0.5rem]">
            source · unit 4
          </span>
          <span className="rounded-full border border-line px-2 py-1 font-mono text-[0.4375rem] uppercase tracking-[0.14em] text-[#6b7482] sm:text-[0.5rem]">
            checked
          </span>
        </span>
        <span className="mt-auto flex items-center gap-2 rounded-full border border-line bg-[#11151c] px-3 py-2">
          <span className="h-[3px] flex-1 rounded-full bg-[#232c38]" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-lime/80" />
        </span>
      </div>
    </div>
  );
}

function DashboardMotif() {
  return (
    <div className="absolute inset-0 flex">
      <div className="hidden w-[24%] shrink-0 flex-col gap-2.5 border-r border-line bg-[#10141b] p-[4%] sm:flex">
        <span className="block h-2.5 w-[70%] rounded-full bg-[#2b3543]" />
        <span className="mt-1 block h-[3px] w-[85%] rounded-full bg-lime/60" />
        <span className="block h-[3px] w-[75%] rounded-full bg-[#232c38]" />
        <span className="block h-[3px] w-[65%] rounded-full bg-[#232c38]" />
        <span className="block h-[3px] w-[80%] rounded-full bg-[#232c38]" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-[4%]">
        <div className="flex shrink-0 items-center justify-between gap-3">
          <span className="block h-3 w-[34%] rounded-[2px] bg-paper/80" />
          <span className="block h-5 w-16 rounded-full border border-line bg-[#171d27]" />
        </div>
        <div className="mt-[4%] grid shrink-0 grid-cols-3 gap-[3%]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="flex flex-col gap-2 rounded-[4px] border border-line bg-[#11151c] p-[8%]">
              <span className="block h-[3px] w-[60%] rounded-full bg-[#232c38]" />
              <span className={cn("block h-3 w-[75%] rounded-[2px]", i === 1 ? "bg-lime/70" : "bg-paper/70")} />
            </span>
          ))}
        </div>
        <div className="mt-[4%] flex min-h-0 flex-1 items-end gap-[3%] border-b border-line pb-[2%]">
          {[42, 58, 36, 72, 48, 84, 61, 54].map((h, i) => (
            <span
              key={i}
              className={cn("flex-1 rounded-t-[2px]", i === 5 ? "bg-lime/80" : "bg-[#28323f]")}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({
  project,
  className,
  size = "lg",
}: {
  project: Project;
  className?: string;
  size?: "lg" | "md";
}) {
  const host = hostFromUrl(project.liveUrl);
  const real = project.visual === "real";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex aspect-[16/10] w-full flex-col overflow-hidden rounded-[6px] border border-line bg-elevated shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-2 border-b border-line bg-[#12161d]",
          size === "lg" ? "px-3 py-2 sm:gap-3 sm:px-4" : "px-2.5 py-1.5 sm:gap-3 sm:px-3",
        )}
      >
        <span className="flex shrink-0 items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#39424f]" />
          <span className="h-2 w-2 rounded-full bg-[#39424f]" />
          <span className="h-2 w-2 rounded-full bg-[#39424f]" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-full border border-line bg-ink px-3 py-1 font-mono text-[0.5625rem] tracking-[0.06em] text-[#6b7482] sm:text-[0.625rem]">
          {host}
        </span>
        <span
          className={cn(
            "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 font-mono uppercase tracking-[0.14em]",
            size === "lg" ? "text-[0.5rem] sm:text-[0.5625rem]" : "text-[0.5rem]",
            real ? "border-lime/40 bg-lime/10 text-lime" : "border-line bg-[#171d27] text-steel",
          )}
        >
          <span className={cn("h-1 w-1 rounded-full", real ? "bg-lime" : "bg-steel")} />
          {real ? "Live product" : "Representative mockup"}
        </span>
      </div>

      <div className="relative min-h-0 flex-1 bg-ink">
        {project.slug === "vizotool" ? (
          <ToolsGrid />
        ) : project.slug === "dinelyy" ? (
          <OrderBoard />
        ) : project.slug === "wine-store" ? (
          <ProductPanel />
        ) : project.slug === "edulearn-lms" ? (
          <CourseGrid />
        ) : project.slug === "studymate-ai" ? (
          <TutorChat />
        ) : (
          <DashboardMotif />
        )}
      </div>
    </div>
  );
}
