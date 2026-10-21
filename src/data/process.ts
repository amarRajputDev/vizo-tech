export type ProcessStage = {
  id: string;
  number: string;
  name: string;
  summary: string;
  detail: string;
  outputs: string[];
};

export const processStages: ProcessStage[] = [
  {
    id: "discover",
    number: "01",
    name: "Discover",
    summary: "Understand the business, audience, challenges and objectives.",
    detail:
      "We start by listening. Who are the customers, what are they trying to accomplish, where does the current process break down, and what would a good outcome actually look like for the business? This phase produces clarity, not deliverables for their own sake.",
    outputs: ["Stakeholder conversations", "Current-state audit", "Success criteria"],
  },
  {
    id: "define",
    number: "02",
    name: "Define",
    summary: "Establish requirements, scope, priorities and the technical approach.",
    detail:
      "Findings become a written scope: what is in, what is deliberately out, which risks matter, and the order in which work should happen. You receive a proposal with a clear shape, timeline range and the assumptions behind both.",
    outputs: ["Scoped requirements", "Prioritised backlog", "Technical approach"],
  },
  {
    id: "design",
    number: "03",
    name: "Design",
    summary: "Plan the experience, user journeys, interface and architecture.",
    detail:
      "Flows and information architecture come before screens. We design the states that usually get skipped — empty views, errors, edge cases — and agree the system that development will build from, so design and engineering stay in step.",
    outputs: ["User journeys", "Interface design", "System architecture"],
  },
  {
    id: "build",
    number: "04",
    name: "Build",
    summary: "Develop, integrate, test and refine the solution.",
    detail:
      "Work is delivered in reviewable slices on a staging environment, so you see progress weekly rather than at the end. Integrations, data migration and automated checks are built in as the product grows, not bolted on before launch.",
    outputs: ["Working increments", "Staging releases", "Automated checks"],
  },
  {
    id: "launch",
    number: "05",
    name: "Launch",
    summary: "Deploy carefully, validate the experience and resolve launch issues.",
    detail:
      "Launch is a planned event: deployment checklist, data validation, redirects, analytics, monitoring and a rollback path. We stay close through the first days of real traffic and fix what real usage reveals.",
    outputs: ["Production deployment", "Validation checklist", "Monitoring in place"],
  },
  {
    id: "improve",
    number: "06",
    name: "Improve",
    summary: "Support ongoing optimisation, new features and changing requirements.",
    detail:
      "Businesses change, and so should their software. Whether through a maintenance partnership or focused feature engagements, we keep improving what is live — informed by usage, measurement and the next set of priorities.",
    outputs: ["Prioritised improvements", "Performance review", "Roadmap refresh"],
  },
];
