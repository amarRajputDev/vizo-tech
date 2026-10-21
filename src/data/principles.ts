export type Principle = {
  id: string;
  number: string;
  title: string;
  statement: string;
  detail: string;
};

export const principles: Principle[] = [
  {
    id: "business-first",
    number: "01",
    title: "Solutions aligned with business needs",
    statement: "The brief is a starting point, not a specification.",
    detail:
      "We ask what the business is actually trying to change before agreeing what to build. That sometimes means recommending a smaller solution than the one originally imagined — and saying so.",
  },
  {
    id: "engineering",
    number: "02",
    title: "Thoughtful, maintainable engineering",
    statement: "Code is read far more often than it is written.",
    detail:
      "We build systems the next developer can understand: sensible structure, meaningful names, tests where they earn their place, and documentation for anything non-obvious.",
  },
  {
    id: "communication",
    number: "03",
    title: "Clear communication throughout delivery",
    statement: "No black boxes, no surprise invoices.",
    detail:
      "You always know what is being worked on, what is blocked, what decisions are needed from you and what the implications are. Difficult news arrives early, with options.",
  },
  {
    id: "quality",
    number: "04",
    title: "Performance, usability and responsive design",
    statement: "Quality is not a phase at the end.",
    detail:
      "Fast pages, keyboard-accessible interfaces and layouts that genuinely work on a phone are part of the definition of done, not a later improvement we hope to get to.",
  },
  {
    id: "practical-ai",
    number: "05",
    title: "Practical AI, not AI for its own sake",
    statement: "A tool should earn its place in the workflow.",
    detail:
      "We use AI where it removes real repetitive work and skip it where a simpler approach is more reliable. Every automated step is something you can inspect, correct and switch off.",
  },
  {
    id: "evolution",
    number: "06",
    title: "Systems designed to evolve",
    statement: "Your business will be different in two years.",
    detail:
      "We favour architecture and design systems that absorb change gracefully, so the next feature is an addition rather than a rewrite.",
  },
];
