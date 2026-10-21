import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", tone === "light" && "eyebrow-dark")}>
          {eyebrow}
        </span>
      ) : null}
      <Heading
        className={cn(
          "max-w-[22ch] text-[clamp(2.1rem,4.6vw,3.9rem)] font-medium leading-[1.02] tracking-[-0.035em]",
          align === "center" && "max-w-[26ch]",
          tone === "dark" ? "text-paper" : "text-onpaper",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "max-w-[54ch] text-[1.0625rem] leading-[1.65]",
            tone === "dark" ? "text-steel" : "text-[#4d5665]",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

/** Highlighted word inside a headline. */
export function Hot({
  children,
  tone = "lime",
}: {
  children: React.ReactNode;
  tone?: "lime" | "violet";
}) {
  return (
    <span
      className={cn(
        "relative inline-block",
        tone === "lime" ? "text-lime" : "text-violet",
      )}
    >
      {children}
    </span>
  );
}
