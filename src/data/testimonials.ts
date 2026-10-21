/**
 * Client feedback.
 *
 * This structure is ready for real testimonials. Nothing here is invented —
 * entries are only rendered when they exist, with a named, verifiable source.
 *
 * Example of a filled entry:
 * {
 *   id: "acme",
 *   quote: "Vizo Technology rebuilt our ordering workflow end to end…",
 *   name: "Jane Doe",
 *   role: "Operations Director",
 *   company: "Acme Ltd",
 *   project: "/work/acme",
 * }
 */
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  project?: string;
};

export const testimonials: Testimonial[] = [];

/** Rendered instead of testimonials until real ones are added. */
export const workingPrinciples = [
  {
    id: "clarity",
    title: "You always know where the work stands",
    detail:
      "Every engagement has a written scope, a visible backlog and a regular rhythm of updates. If something changes — a risk, a delay, a better idea — you hear it from us first, with options rather than excuses.",
  },
  {
    id: "ownership",
    title: "You own everything we build",
    detail:
      "Code, designs, documentation and infrastructure live in accounts you control. There is no proprietary lock-in and no dependency on us that you did not choose.",
  },
  {
    id: "honesty",
    title: "We say when something is not worth doing",
    detail:
      "The most useful answer is sometimes a smaller one. If a request would not earn its cost, or an existing tool already solves it, we will recommend the alternative.",
  },
];

export const commonChallenges = [
  {
    id: "rebuild",
    title: "\u201cWe were quoted a rebuild we didn't fully understand\u201d",
    detail:
      "Large proposals are hard to evaluate without knowing which parts are essential. A short discovery engagement turns a vague number into a list of decisions you can actually compare.",
  },
  {
    id: "handover",
    title: "\u201cOur last developer disappeared mid-project\u201d",
    detail:
      "It is more common than it should be. We work in your repositories with documentation written for whoever comes next, so progress never depends on a single person's memory.",
  },
  {
    id: "ai-pressure",
    title: "\u201cEveryone says we need AI, but we don't know where\u201d",
    detail:
      "Usually there is one repeated workflow eating hours every week. Finding that workflow — and automating it well — is a better use of budget than a broad \u201cAI strategy\u201d document.",
  },
];
