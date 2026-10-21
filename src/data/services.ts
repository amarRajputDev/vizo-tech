import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Blocks,
  Bot,
  ShoppingCart,
  Database,
  LifeBuoy,
  Palette,
  Workflow,
} from "lucide-react";

export type Service = {
  slug: string;
  index: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  accent: "lime" | "violet" | "steel";
  /** Longer, page-level copy */
  intro: string;
  deliverables: { title: string; detail: string }[];
  useCases: string[];
  approach: { step: string; detail: string }[];
  related: string[];
  /** Bento layout hint for the homepage services grid */
  span: "wide" | "tall" | "standard";
};

export const services: Service[] = [
  {
    slug: "custom-web-development",
    index: "01",
    name: "Custom Web Development",
    short:
      "High-performance marketing sites, business platforms and web apps engineered to load fast and convert attention into action.",
    description:
      "We design and build fast, accessible websites and web applications around a clear business goal — whether that is generating qualified enquiries, explaining a complex product, or running an operation online.",
    icon: AppWindow,
    accent: "lime",
    intro:
      "A website is usually the first serious conversation a business has with a customer. We treat it as a product: clear information architecture, deliberate typography, measurable performance and a foundation that can grow with the business instead of being rebuilt in a year.",
    deliverables: [
      {
        title: "Marketing and business websites",
        detail: "Editorial, conversion-focused sites with a distinctive visual system and a CMS your team can actually use.",
      },
      {
        title: "Web applications",
        detail: "Customer portals, booking flows, dashboards and internal tools built as proper products, not templates.",
      },
      {
        title: "Performance engineering",
        detail: "Core Web Vitals work, image pipelines, caching strategy and runtime budgets that keep pages fast.",
      },
      {
        title: "Accessibility foundations",
        detail: "Semantic structure, keyboard support, contrast and screen-reader considerations built in from the start.",
      },
    ],
    useCases: [
      "A growing business has outgrown a template site and needs something that reflects the quality of its work.",
      "A marketing site loads slowly, ranks poorly or cannot be edited by the team without a developer.",
      "A service business needs a customer-facing web app alongside its existing website.",
      "A startup needs a credible launch site that can be extended into a product later.",
    ],
    approach: [
      { step: "Structure", detail: "Map the pages, messages and conversion paths before any visual design begins." },
      { step: "Design system", detail: "Typography, colour, spacing and components defined once and reused everywhere." },
      { step: "Build", detail: "Component-driven development with performance budgets and review at every milestone." },
      { step: "Measure", detail: "Analytics, search foundations and real-user performance checked after launch." },
    ],
    related: ["ui-ux-product-design", "full-stack-software-development"],
    span: "wide",
  },
  {
    slug: "full-stack-software-development",
    index: "02",
    name: "Full-Stack Software Development",
    short:
      "Custom business applications, APIs and database-driven systems designed for daily operational use.",
    description:
      "From internal tools to customer-facing platforms, we build the application layer behind your business — data models, APIs, interfaces and integrations that hold up under real use.",
    icon: Database,
    accent: "steel",
    intro:
      "Most businesses eventually hit the same wall: spreadsheets, disconnected tools and manual workarounds that no longer match how the company operates. We build the software that replaces that friction — carefully modelled data, clear permissions, sensible workflows and interfaces people can learn quickly.",
    deliverables: [
      {
        title: "Business applications",
        detail: "Operational tools shaped around how your team already works, with roles, permissions and audit trails.",
      },
      {
        title: "APIs and services",
        detail: "Well-documented endpoints, background jobs and integrations that other systems can rely on.",
      },
      {
        title: "Data architecture",
        detail: "Schema design, migrations and reporting layers that keep information trustworthy as you scale.",
      },
      {
        title: "Quality and testing",
        detail: "Automated checks, staging environments and deployment pipelines that make releases uneventful.",
      },
    ],
    useCases: [
      "Critical processes still run on spreadsheets passed between departments.",
      "A SaaS idea needs a working product with authentication, billing and admin tooling.",
      "An existing application is unstable, slow or impossible to extend.",
      "Customers need a self-service portal instead of email-based support.",
    ],
    approach: [
      { step: "Domain modelling", detail: "Understand the real objects and rules of the business before writing code." },
      { step: "Architecture", detail: "Choose a stack that fits the team that will maintain it, not the trend of the month." },
      { step: "Iterative delivery", detail: "Ship usable slices frequently so feedback arrives while changes are still cheap." },
      { step: "Handover", detail: "Documentation, environments and knowledge transfer so the system is never held hostage." },
    ],
    related: ["api-integrations", "crm-business-systems"],
    span: "tall",
  },
  {
    slug: "ai-integration-automation",
    index: "03",
    name: "AI Integration & Intelligent Automation",
    short:
      "Practical AI workflows that remove repetitive work from your team's day — triage, drafting, summarising, routing.",
    description:
      "We integrate AI where it genuinely removes work: classifying and routing incoming requests, summarising conversations, retrieving internal knowledge and connecting tools that otherwise need a human to copy data between them.",
    icon: Bot,
    accent: "violet",
    intro:
      "AI is useful when it is pointed at a specific, repeated, low-judgement task. We start from the workflow — not the model — design a human-reviewable process, and only then choose the technology. Every automation we build is observable, reversible and honest about its confidence.",
    deliverables: [
      {
        title: "Workflow automation",
        detail: "Trigger → process → action pipelines that move data between your tools without manual copying.",
      },
      {
        title: "AI assistants",
        detail: "Internal assistants grounded in your own documents and data, with clear boundaries on what they may do.",
      },
      {
        title: "Intake and triage",
        detail: "Classify, enrich and route incoming enquiries, tickets or documents before a human opens them.",
      },
      {
        title: "Evaluation and safeguards",
        detail: "Test sets, logging and fallback paths so an incorrect model output never silently becomes a business decision.",
      },
    ],
    useCases: [
      "Incoming enquiries are read and sorted by hand every morning.",
      "Meeting and support conversations are summarised inconsistently, if at all.",
      "Staff answer the same internal questions from the same documents repeatedly.",
      "Data is re-keyed between a form, a CRM and a spreadsheet.",
    ],
    approach: [
      { step: "Workflow audit", detail: "Document the current process, its volume, its edge cases and its cost in hours." },
      { step: "Automation design", detail: "Define what the system decides, what a human approves and where it stops." },
      { step: "Build and evaluate", detail: "Implement with real examples, measure accuracy, tune prompts and rules." },
      { step: "Operate", detail: "Monitoring, exception queues and periodic review as inputs change over time." },
    ],
    related: ["crm-business-systems", "api-integrations"],
    span: "standard",
  },
  {
    slug: "ecommerce-solutions",
    index: "04",
    name: "Ecommerce Solutions",
    short:
      "Conversion-focused storefronts, integrations and the operational plumbing that keeps orders moving.",
    description:
      "We build and improve ecommerce experiences — storefront performance, catalogue structure, checkout flow, and the connections to inventory, fulfilment and finance tools behind it.",
    icon: ShoppingCart,
    accent: "lime",
    intro:
      "An online store is two products at once: the experience customers see, and the operational system that has to pick, pack, ship and reconcile every order. We work on both, because a beautiful storefront with broken operations simply moves the problem to your inbox.",
    deliverables: [
      {
        title: "Storefront development",
        detail: "Fast, well-structured product and collection pages with a design system that supports merchandising.",
      },
      {
        title: "Checkout and conversion work",
        detail: "Friction audits across search, product, cart and checkout, then measured improvements.",
      },
      {
        title: "Platform integrations",
        detail: "Payments, inventory, shipping, accounting and marketplace connections that stay in sync.",
      },
      {
        title: "Operational automation",
        detail: "Order routing, customer notifications and back-office workflows that reduce manual handling.",
      },
    ],
    useCases: [
      "A store is slow on mobile and abandoning customers before checkout.",
      "Catalogue data lives in one system while fulfilment runs on another.",
      "The theme can no longer express new campaign or merchandising ideas.",
      "A brand is moving from a marketplace to its own storefront.",
    ],
    approach: [
      { step: "Audit", detail: "Review storefront performance, analytics and the operational path of a real order." },
      { step: "Prioritise", detail: "Rank fixes by impact and effort so the first release already earns its cost." },
      { step: "Build", detail: "Implement experience and integrations together, tested against realistic order data." },
      { step: "Iterate", detail: "Watch real behaviour after release and continue improving what the numbers justify." },
    ],
    related: ["api-integrations", "maintenance-support"],
    span: "standard",
  },
  {
    slug: "crm-business-systems",
    index: "05",
    name: "CRM & Business Systems",
    short:
      "Lead management, pipelines, dashboards and internal software shaped around how your team sells and delivers.",
    description:
      "We design and build customer and operations systems — pipelines, lead tracking, reporting and internal dashboards — either on top of an existing CRM or as bespoke software when the CRM no longer fits.",
    icon: Blocks,
    accent: "steel",
    intro:
      "Off-the-shelf CRMs solve the average case. When your sales process, service delivery or reporting differs from that average, staff work around the system and the data loses value. We configure or build the system so that doing the right thing is also the easiest thing.",
    deliverables: [
      {
        title: "Lead and pipeline workflows",
        detail: "Stages, routing, reminders and follow-up structure that match how your team actually operates.",
      },
      {
        title: "Dashboards and reporting",
        detail: "Operational views for the team and clean summaries for decision-makers, from the same source of truth.",
      },
      {
        title: "CRM configuration and migration",
        detail: "Field design, automation, import and cleanup when moving from spreadsheets or another platform.",
      },
      {
        title: "Bespoke internal software",
        detail: "When the CRM is the wrong tool, we build the right one and integrate with the systems around it.",
      },
    ],
    useCases: [
      "Leads arrive through five channels and land in three different places.",
      "Nobody trusts the pipeline numbers shown in the monthly report.",
      "Onboarding a new team member requires explaining a maze of spreadsheets.",
      "The CRM renewal is due but the team only uses a fraction of it.",
    ],
    approach: [
      { step: "Process mapping", detail: "Sit with the people who do the work and capture the real process, exceptions included." },
      { step: "System design", detail: "Define data, stages, permissions and reports before configuring anything." },
      { step: "Implementation", detail: "Build, migrate and validate against historical data with the team involved." },
      { step: "Adoption", detail: "Training, documentation and a refinement round once the system meets real usage." },
    ],
    related: ["full-stack-software-development", "ai-integration-automation"],
    span: "standard",
  },
  {
    slug: "ui-ux-product-design",
    index: "06",
    name: "UI/UX & Product Design",
    short:
      "Clear user journeys, considered interfaces and design systems that make products easier to use and easier to build.",
    description:
      "We plan the experience before the screen: user journeys, information architecture, interface design, prototypes and reusable design systems that keep products coherent as they grow.",
    icon: Palette,
    accent: "violet",
    intro:
      "Design at Vizo Technology is a decision-making activity. It defines what a product says, in what order, and what it asks of the person using it. The output is not just attractive screens, but a system engineers can build from and teams can extend without redesigning everything.",
    deliverables: [
      {
        title: "Journey and flow design",
        detail: "The path a real customer takes from first visit to completed task, with dead ends removed early.",
      },
      {
        title: "Interface design",
        detail: "Layouts, states, empty screens, errors and edge cases — designed, not left to chance in development.",
      },
      {
        title: "Prototypes",
        detail: "Clickable prototypes for testing an idea internally or with customers before committing engineering time.",
      },
      {
        title: "Design systems",
        detail: "Tokens, components and documentation that keep design and code speaking the same language.",
      },
    ],
    useCases: [
      "A product works but confuses new users during onboarding.",
      "Marketing site and application look like two different companies built them.",
      "Every new feature requires redesigning the same button, table and modal again.",
      "An idea needs a prototype to secure internal buy-in or early customers.",
    ],
    approach: [
      { step: "Understand", detail: "Goals, audience, constraints and the jobs users are actually hiring the product for." },
      { step: "Structure", detail: "Flows and information architecture agreed before visual design begins." },
      { step: "Design", detail: "Interface, states and system, reviewed against real content rather than placeholder text." },
      { step: "Validate", detail: "Prototype testing and a design-to-build handoff with developers in the room." },
    ],
    related: ["custom-web-development", "full-stack-software-development"],
    span: "standard",
  },
  {
    slug: "api-integrations",
    index: "07",
    name: "API & Third-Party Integrations",
    short:
      "Connect the tools you already pay for so data stops being re-entered and starts being trustworthy.",
    description:
      "We connect business systems — payment providers, CRMs, ERPs, marketing tools, spreadsheets and bespoke software — so information moves once and stays consistent everywhere.",
    icon: Workflow,
    accent: "steel",
    intro:
      "Fragmented tooling is one of the most common and most expensive problems in growing businesses. Integration work is unglamorous and disproportionately valuable: fewer mistakes, fewer duplicated hours, and data you can actually report on.",
    deliverables: [
      {
        title: "System integration",
        detail: "Two-way sync, event-driven updates and scheduled jobs with clear handling of failures.",
      },
      {
        title: "Custom API development",
        detail: "Documented, authenticated endpoints that let partners and products talk to your systems safely.",
      },
      {
        title: "Data consolidation",
        detail: "Bring scattered records together into a single reliable source for reporting and operations." ,
      },
      {
        title: "Monitoring",
        detail: "Alerts and dashboards so an integration that silently stops is noticed within minutes, not months." ,
      },
    ],
    useCases: [
      "Orders placed on the website have to be typed into the accounting system.",
      "The sales team maintains the same customer record in two platforms.",
      "A key vendor offers an API but nobody has had time to use it.",
      "Reporting requires exporting four spreadsheets and reconciling them by hand.",
    ],
    approach: [
      { step: "Map the flows", detail: "List every system, the data it owns and the direction it must travel." },
      { step: "Design the contract", detail: "Define payloads, auth, idempotency and error handling before connecting anything." },
      { step: "Implement", detail: "Build with retries, logging and safe failure modes so bad data cannot cascade." },
      { step: "Operate", detail: "Handover with runbooks, plus monitoring and support if you want us to keep watch." },
    ],
    related: ["full-stack-software-development", "maintenance-support"],
    span: "standard",
  },
  {
    slug: "maintenance-support",
    index: "08",
    name: "Maintenance & Technical Support",
    short:
      "Ongoing improvement, fixes and performance work for systems that are already live and already important.",
    description:
      "Software needs attention after launch. We provide ongoing maintenance — bug fixes, performance work, dependency updates and steady feature improvement — for products we have built and systems we have inherited.",
    icon: LifeBuoy,
    accent: "lime",
    intro:
      "The value of maintenance is invisible until it is missing. We keep live systems secure, fast and adaptable, with a clear record of what was changed and why, so improvements compound instead of accumulating as unexplained risk.",
    deliverables: [
      {
        title: "Bug fixing and stability",
        detail: "Reproduce, diagnose and resolve issues, with the underlying cause addressed rather than just the symptom.",
      },
      {
        title: "Performance optimisation",
        detail: "Database queries, rendering, asset pipelines and infrastructure trimmed where measurement shows cost.",
      },
      {
        title: "Updates and hardening",
        detail: "Dependency upgrades, security patches and configuration reviews on a sensible cadence.",
      },
      {
        title: "Feature iteration",
        detail: "Small, regular improvements that keep the product aligned with how the business is changing.",
      },
    ],
    useCases: [
      "A live product has accumulated issues nobody has had time to investigate.",
      "Third-party updates are months behind and creating security exposure.",
      "Performance has degraded gradually as data and traffic have grown.",
      "The original development team is unavailable and the codebase needs a steady hand.",
    ],
    approach: [
      { step: "Baseline", detail: "Audit the codebase, infrastructure, backlog and risk areas before committing to a rhythm." },
      { step: "Stabilise", detail: "Clear high-impact defects and patch urgent security or performance issues first." },
      { step: "Maintain", detail: "A predictable cadence of updates, fixes and small improvements with transparent reporting." },
      { step: "Improve", detail: "Use what maintenance reveals about real usage to prioritise the next meaningful feature." },
    ],
    related: ["full-stack-software-development", "api-integrations"],
    span: "standard",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);

