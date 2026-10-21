export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "services",
    question: "What services does Vizo Technology provide?",
    answer:
      "We work across custom web development, full-stack software, AI integration and automation, ecommerce, CRM and business systems, UI/UX and product design, API and third-party integrations, and ongoing maintenance. Most projects combine two or more of these — a website project often includes design and performance work, for example.",
  },
  {
    id: "businesses",
    question: "What types of businesses do you work with?",
    answer:
      "Primarily small and growing businesses, startups and service companies in the US, UK and international markets — including ecommerce businesses, teams that have outgrown spreadsheets and off-the-shelf tooling, and education institutions such as schools, colleges and training institutes. The common factor is not industry; it is a real operational problem worth solving properly.",
  },
  {
    id: "from-scratch",
    question: "Can you build a custom application from scratch?",
    answer:
      "Yes. Discovery, design and full-stack delivery are core parts of what we do. We will also tell you honestly when a proven existing platform would serve you better than a custom build — that conversation is part of the first phase, not an upsell.",
  },
  {
    id: "ai-existing-workflow",
    question: "Can you integrate AI into an existing business workflow?",
    answer:
      "Yes, and it is usually the most valuable place to start. We document the current process first, identify the steps that are frequent and structured, then automate those with clear human-review points. Where AI is not the right tool, we use simpler automation instead.",
  },
  {
    id: "improve-existing",
    question: "Can you improve an existing website or application?",
    answer:
      "Yes. We regularly inherit live systems — whether we built them or not. Typical starting points are a technical audit, a performance review and a prioritised list of fixes, after which we can work on improvements incrementally.",
  },
  {
    id: "process",
    question: "How does your project process work?",
    answer:
      "Six stages: Discover, Define, Design, Build, Launch and Improve. In practice they are iterative rather than strictly linear — you will see working software early and often, and priorities can be re-sequenced as understanding improves.",
  },
  {
    id: "pricing",
    question: "How are project requirements and pricing determined?",
    answer:
      "Through conversation and a written scope. We discuss the problem, the constraints and what a good outcome looks like, then prepare a proposal with the scope, assumptions, timeline range and price. Fixed-scope projects are quoted as a fixed price; longer relationships are structured around planned cycles.",
  },
  {
    id: "getting-started",
    question: "How can we get started?",
    answer:
      "Send a short description of what you are building or what is slowing the business down through the contact form. We will respond to arrange an initial conversation, and if there is a fit, follow up with a scoped proposal. If we are not the right partner for your project, we will say so.",
  },
];
