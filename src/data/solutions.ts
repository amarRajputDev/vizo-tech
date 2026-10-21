export type Solution = {
  id: string;
  challenge: string;
  /** What the business is experiencing, in its own words. */
  symptom: string;
  outcome: string;
  detail: string;
  recommended: string[];
  cta: { label: string; href: string };
};

export const solutions: Solution[] = [
  {
    id: "slow-site",
    challenge: "Our website is slow and doesn't do much",
    symptom:
      "Pages take too long to load on mobile, the design no longer reflects the business, and enquiries arrive through a contact form nobody has looked at in months.",
    outcome: "A faster, more effective digital experience",
    detail:
      "We rebuild the structure, performance and message of the site around what visitors actually need to decide. That usually means fewer pages doing more work, a design system your team can extend, performance budgets that keep things fast, and analytics that tell you whether the site is doing its job.",
    recommended: ["custom-web-development", "ui-ux-product-design"],
    cta: { label: "Talk about your website", href: "/contact" },
  },
  {
    id: "scattered-tools",
    challenge: "Our tools don't talk to each other",
    symptom:
      "The same customer exists in three systems. Orders typed into one platform are re-keyed into another, and nobody is certain which spreadsheet is current.",
    outcome: "Connected workflows and integrated systems",
    detail:
      "We map every system, what each one owns, and where data should travel. Then we build the integrations — syncs, event-driven updates and background jobs — with logging and failure handling, so information moves once and stays consistent everywhere it is used.",
    recommended: ["api-integrations", "crm-business-systems"],
    cta: { label: "Map your systems with us", href: "/contact" },
  },
  {
    id: "manual-tasks",
    challenge: "Too much of the day is repetitive manual work",
    symptom:
      "Invoices, enquiries, documents and follow-ups are processed by hand every morning. It works, but it consumes hours that should be going to customers.",
    outcome: "Intelligent automation of the repeated parts",
    detail:
      "We look for tasks that are frequent, structured and low-judgement — then automate the sequence: read the input, classify it, extract what matters, and push it to the right tool. Humans stay in the loop wherever judgement is genuinely required, and every run is logged.",
    recommended: ["ai-integration-automation", "api-integrations"],
    cta: { label: "Find what to automate", href: "/contact" },
  },
  {
    id: "customer-data",
    challenge: "Customer information is disconnected",
    symptom:
      "Sales, support and operations each hold a partial view of the same customer, so handovers are clumsy and the team answers questions with incomplete context.",
    outcome: "Better-organised customer workflows",
    detail:
      "We design the data model first — what a customer record means, who owns which fields, and what each role needs to see. Then we configure or build the system around it, with pipelines, reminders and dashboards that make the complete view the default view.",
    recommended: ["crm-business-systems", "full-stack-software-development"],
    cta: { label: "Discuss your customer data", href: "/contact" },
  },
  {
    id: "ecommerce-friction",
    challenge: "Selling online has become operationally painful",
    symptom:
      "The storefront is slow, the catalogue is hard to manage, and every order triggers a chain of manual steps behind the scenes.",
    outcome: "Streamlined commerce operations",
    detail:
      "We work on the storefront and the operation together: page performance, catalogue structure and checkout flow on the customer side; inventory, fulfilment and accounting connections on the internal side. Improvements are prioritised by measured impact, not assumption.",
    recommended: ["ecommerce-solutions", "api-integrations"],
    cta: { label: "Review your store", href: "/contact" },
  },
  {
    id: "idea-to-product",
    challenge: "We have an idea but no product yet",
    symptom:
      "There is a clear opportunity, a rough understanding of the customer, and no agreement on what to build first — or how to build it without wasting budget.",
    outcome: "A structured path from concept to launch",
    detail:
      "We start with a discovery phase that turns ambition into scope: audience, core journeys, the smallest version worth launching, and the technical approach behind it. From there we design, build in reviewable slices, and launch deliberately rather than all at once.",
    recommended: ["ui-ux-product-design", "full-stack-software-development"],
    cta: { label: "Start the conversation", href: "/contact" },
  },
];
