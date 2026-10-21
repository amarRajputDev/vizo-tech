import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "paper";
type Size = "md" | "lg" | "sm";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-[3px] font-medium tracking-[-0.01em] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-lime";

const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-ink hover:bg-paper hover:text-ink shadow-[0_0_0_0_rgba(200,255,77,0)] hover:shadow-[0_10px_40px_-12px_rgba(200,255,77,0.55)]",
  secondary:
    "border border-line bg-transparent text-paper hover:border-lime/60 hover:bg-lime/5 hover:text-paper",
  ghost:
    "border border-transparent bg-transparent text-steel hover:text-paper",
  paper:
    "bg-ink text-paper hover:bg-elevated border border-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-[3.25rem] px-8 text-[1rem]",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...rest
}: Props) {
  const isExternal = external ?? href.startsWith("http");
  const content = (
    <>
      <span>{children}</span>
      <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyles({ variant, size, className })}
        {...(rest as object)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonStyles({ variant, size, className })} {...rest}>
      {content}
    </Link>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("h-3.5 w-3.5", className)}
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
