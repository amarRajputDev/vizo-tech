export type Engagement = {
  id: string;
  index: string;
  name: string;
  summary: string;
  detail: string;
  suited: string[];
};

export const engagements: Engagement[] = [
  {
    id: "fixed-scope",
    index: "01",
    name: "Fixed-scope projects",
    summary:
      "A defined outcome, a defined timeline, and a proposal built around the scope we agree together.",
    detail:
      "Best when the problem is well understood and the deliverable can be described clearly — a website, a specific application, an integration or a redesign. You receive a written scope, a delivery plan and a fixed price for that scope. Changes are handled openly rather than absorbed silently.",
    suited: ["Marketing and business websites", "Defined applications", "Integrations and migrations"],
  },
  {
    id: "ongoing-partnership",
    index: "02",
    name: "Ongoing development partnerships",
    summary:
      "A continuous engineering relationship for businesses that need steady, reliable technical progress.",
    detail:
      "Suited to companies without an in-house development team that still need regular releases, maintenance and new capability. Work is planned in cycles with a clear priority list, so effort goes to whatever is most valuable that month.",
    suited: ["Continuous improvement", "Maintenance and updates", "Technical ownership"],
  },
  {
    id: "dedicated-features",
    index: "03",
    name: "Dedicated feature development",
    summary:
      "Focused delivery of a specific feature or module inside a product you already run.",
    detail:
      "When you have a product and a roadmap but not the capacity to deliver a particular piece, we integrate into your process — your repository, your review conventions, your release rhythm — and ship that feature properly.",
    suited: ["New product modules", "Internal tools", "Customer-facing features"],
  },
  {
    id: "ai-automation",
    index: "04",
    name: "AI & automation implementation",
    summary:
      "Targeted automation of a repeated workflow, from audit through to a monitored, running system.",
    detail:
      "We identify a workflow worth automating, design the process including human review points, implement it against real examples, and leave it observable. Automation engagements usually start small and expand once the first workflow proves itself.",
    suited: ["Intake and triage", "Document and conversation processing", "Tool-to-tool automation"],
  },
  {
    id: "consultation",
    index: "05",
    name: "Technical consultation & discovery",
    summary:
      "A structured working session or short engagement to decide what to build, rebuild or leave alone.",
    detail:
      "Often the highest-value first step. We review your situation, challenge assumptions, outline realistic options with their trade-offs, and give you a written recommendation you can take to any development partner — including your own team.",
    suited: ["Build vs buy decisions", "Architecture reviews", "Scoping before a larger project"],
  },
];
