import { cn } from "@/lib/utils";

/**
 * Vizo Technology wordmark — typographic only, no image logo.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "whitespace-nowrap text-[1.0625rem] font-medium tracking-[-0.045em] text-paper",
        className,
      )}
    >
      Vizo Technology
    </span>
  );
}
