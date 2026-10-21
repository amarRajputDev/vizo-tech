"use client";

import { Cpu } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { marqueeWords } from "@/data/trust";
import { cn } from "@/lib/utils";

const NODES = [
  { id: "web", label: "Web experiences", x: 20, y: 18, w: 178, depth: 1.4 },
  { id: "ai", label: "AI agents", x: 80, y: 22, w: 156, depth: 1.1 },
  { id: "flow", label: "Automated workflows", x: 17, y: 74, w: 148, depth: 1.7 },
  { id: "data", label: "Business dashboards", x: 82, y: 71, w: 156, depth: 1.25 },
  { id: "shop", label: "Ecommerce systems", x: 50, y: 92, w: 168, depth: 1.5 },
] as const;

export function HeroSection() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 55, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [4, -4]), spring);

  useEffect(() => {
    if (reduce) return;
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      px.set((e.clientX - r.left) / r.width - 0.5);
      py.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => {
      px.set(0);
      py.set(0);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [px, py, reduce]);

  return (
    <section className="noise relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
      <div className="glow-lime pointer-events-none absolute -top-[30%] left-1/2 h-[70vh] w-[110vw] -translate-x-1/2 opacity-70" />
      <div className="glow-violet pointer-events-none absolute -right-[20%] top-[35%] h-[60vh] w-[60vw] opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent" />

      <Container className="relative pb-16 pt-[3.5rem] sm:pb-20 lg:pb-24 lg:pt-[4.5rem]">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8 xl:gap-4">
          {/* ---------------------------------------------------- copy */}
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="eyebrow">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-lime" />
                </span>
                Software · AI · Digital transformation
              </span>
            </motion.div>

            <h1 className="mt-8 max-w-[15ch] text-[clamp(2.6rem,5.6vw,5.15rem)] font-medium leading-[0.98] tracking-[-0.045em] text-paper">
              {["We turn ambitious", "ideas into", null].map((line, i) =>
                line === null ? null : (
                  <span key={i} className="block overflow-hidden">
                    <motion.span
                      className="block"
                      initial={reduce ? false : { y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1,
                        delay: 0.08 * i,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ),
              )}
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-lime">intelligent</span> digital
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                >
                  products.
                </motion.span>
              </span>
            </h1>

            <motion.p
              className="mt-8 max-w-[48ch] text-[1.0625rem] leading-[1.7] text-steel sm:text-[1.125rem]"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              From high-performance websites and custom software to AI-powered
              workflows, Vizo Technology helps ambitious businesses build,
              automate and grow — with technology chosen for the problem, not
              the trend.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <ButtonLink href="/contact" size="lg">
                Let&apos;s Build Something
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary" size="lg">
                Explore Our Work
              </ButtonLink>
            </motion.div>

            <motion.dl
              className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {[
                { t: "Based", d: "Remote · US & UK time zones" },
                { t: "Focus", d: "Businesses, startups & education institutions" },
                { t: "Engagements", d: "Projects · Partnerships · Advisory" },
              ].map((item) => (
                <div key={item.t}>
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-[#5b6472]">
                    {item.t}
                  </dt>
                  <dd className="mt-1.5 text-[0.875rem] text-paper/85">{item.d}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ------------------------------------------------- visual */}
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.div
              ref={wrapRef}
              className="relative mx-auto aspect-[4/4.4] w-full max-w-[38rem] sm:aspect-[4/3.5]"
              style={
                reduce ? undefined : { rotateX, rotateY, transformPerspective: 1200 }
              }
            >
              <svg
                viewBox="0 0 400 350"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#929AA8" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#6A5CFF" stopOpacity="0.35" />
                  </linearGradient>
                </defs>
                <circle
                  cx="200"
                  cy="175"
                  r="86"
                  fill="none"
                  stroke="#1f2733"
                  strokeWidth="1"
                  strokeDasharray="3 7"
                  className={cn(!reduce && "animate-orbit")}
                  style={{ transformOrigin: "200px 175px" }}
                />
                {NODES.map((n) => {
                  const mx = (200 + n.x * 4) / 2;
                  const my = (175 + n.y * 3.5) / 2;
                  const cx = mx + (n.x < 50 ? 26 : -26);
                  const cy = my + (n.y < 50 ? 18 : -22);
                  return (
                    <path
                      key={n.id}
                      d={`M200 175 Q ${cx} ${cy} ${n.x * 4} ${n.y * 3.5}`}
                      fill="none"
                      stroke="url(#lineFade)"
                      strokeWidth="1"
                      strokeDasharray="2 6"
                      className={cn(
                        !reduce && "animate-flow",
                        n.id === "shop" && "hidden sm:block",
                      )}
                    />
                  );
                })}
              </svg>

              {/* centre node */}
              <motion.div
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-[10px] border border-lime/25 bg-elevated shadow-[0_0_60px_-10px_rgba(200,255,77,0.35)] sm:h-28 sm:w-28">
                  <div className="glow-lime absolute -inset-8 -z-10" />
                  <Cpu
                    aria-hidden="true"
                    className="h-9 w-9 text-lime sm:h-12 sm:w-12"
                    strokeWidth={1.4}
                  />
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-lime shadow-[0_0_12px_2px_rgba(200,255,77,0.6)]" />
                </div>
                <p className="mt-3 text-center font-mono text-[0.625rem] uppercase tracking-[0.24em] text-lime">
                  Vizo Technology
                </p>
              </motion.div>

              {/* floating mini interfaces */}
              {NODES.map((n, i) => (
                <div
                  key={n.id}
                  className={cn(
                    "absolute z-20 -translate-x-1/2 -translate-y-1/2 scale-[0.68] sm:scale-100",
                    n.id === "shop" && "hidden sm:block",
                  )}
                  style={{ left: `${n.x}%`, top: `${n.y}%`, width: n.w }}
                >
                  <motion.div
                    initial={reduce ? false : { opacity: 0, y: 22, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.35 + i * 0.09,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={cn(!reduce && "animate-float-slow")}
                    style={{ animationDelay: `${i * 1.4}s` }}
                  >
                    <MiniCard id={n.id} label={n.label} />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>

      {/* keyword marquee */}
      <div className="marquee relative border-t border-line bg-surface/40 py-4">
        <div className="marquee-track gap-10 pr-10">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={`${w}-${i}`}
              className="flex shrink-0 items-center gap-10 font-mono text-[0.75rem] uppercase tracking-[0.22em] text-[#5b6472]"
            >
              {w}
              <span className="h-1 w-1 rotate-45 bg-lime/70" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniCard({ id, label }: { id: string; label: string }) {
  const shell =
    "overflow-hidden rounded-[6px] border border-[#242d3b] bg-[rgba(17,21,29,0.92)] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md";

  if (id === "web") {
    return (
      <div className={shell} role="img" aria-label={label}>
        <div className="flex items-center gap-1.5 border-b border-[#242d3b] px-2.5 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3a4453]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#3a4453]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#3a4453]" />
          <span className="ml-1.5 h-3 flex-1 rounded-[2px] bg-[#1a212c]" />
        </div>
        <div className="space-y-2 p-3">
          <div className="h-2 w-4/5 rounded-[2px] bg-paper/80" />
          <div className="h-2 w-3/5 rounded-[2px] bg-paper/40" />
          <div className="flex items-center gap-2 pt-1">
            <span className="h-4 w-14 rounded-[2px] bg-lime" />
            <span className="h-4 w-10 rounded-[2px] border border-[#33404f]" />
          </div>
        </div>
      </div>
    );
  }

  if (id === "ai") {
    return (
      <div className={shell} role="img" aria-label={label}>
        <div className="flex items-center justify-between border-b border-[#242d3b] px-3 py-2">
          <span className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-violet-soft">
            AI agent
          </span>
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-violet" />
        </div>
        <div className="space-y-2 p-3">
          <div className="h-1.5 w-full rounded-[2px] bg-[#26303d]" />
          <div className="h-1.5 w-4/5 rounded-[2px] bg-[#26303d]" />
          <div className="flex items-center gap-1.5 pt-1 font-mono text-[0.5rem] uppercase tracking-[0.16em] text-steel">
            <span className="rounded-[2px] bg-lime/15 px-1.5 py-0.5 text-lime">
              triaged
            </span>
            <span className="rounded-[2px] border border-[#33404f] px-1.5 py-0.5">
              3 actions
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (id === "flow") {
    return (
      <div className={cn(shell, "p-3")} role="img" aria-label={label}>
        <div className="flex items-center justify-between gap-1">
          {["In", "AI", "Out"].map((t, i) => (
            <div key={t} className="flex items-center gap-1">
              <span className="flex h-7 w-7 items-center justify-center rounded-[3px] border border-[#2c3646] bg-[#151b25] font-mono text-[0.5rem] uppercase tracking-[0.1em] text-steel">
                {t}
              </span>
              {i < 2 ? (
                <svg viewBox="0 0 12 6" className="h-1.5 w-3 overflow-visible">
                  <path
                    d="M0 3h12"
                    stroke="#C8FF4D"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                    className="animate-flow"
                  />
                </svg>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-2 font-mono text-[0.5rem] uppercase tracking-[0.16em] text-[#5b6472]">
          Automated workflow
        </p>
      </div>
    );
  }

  if (id === "data") {
    return (
      <div className={cn(shell, "p-3")} role="img" aria-label={label}>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.5rem] uppercase tracking-[0.16em] text-steel">
            Dashboard
          </span>
          <span className="h-1.5 w-8 rounded-[2px] bg-[#26303d]" />
        </div>
        <div className="mt-3 flex h-12 items-end gap-1.5">
          {[34, 52, 40, 68, 46, 82, 58].map((h, i) => (
            <span
              key={i}
              className={cn(
                "flex-1 rounded-[1px]",
                i === 5 ? "bg-lime" : "bg-[#2b3543]",
              )}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(shell, "flex items-center gap-3 p-3")} role="img" aria-label={label}>
      <span className="h-10 w-10 shrink-0 rounded-[3px] bg-gradient-to-br from-[#2c3646] to-[#161c26]" />
      <span className="min-w-0 flex-1">
        <span className="block h-1.5 w-4/5 rounded-[2px] bg-paper/70" />
        <span className="mt-1.5 block h-1.5 w-2/5 rounded-[2px] bg-[#2b3543]" />
        <span className="mt-2 inline-block rounded-[2px] bg-lime/15 px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-lime">
          in stock
        </span>
      </span>
    </div>
  );
}
