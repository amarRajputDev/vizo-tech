/**
 * Selected work.
 *
 * Facts below are based on the live products referenced by each project.
 * The education entries are clearly-labelled demonstration builds prepared for
 * schools, colleges and training institutes — they carry visual: "representative".
 * Results / metrics are intentionally left empty until they can be verified —
 * do not add numbers here without a source.
 */

export type ProjectStat = { label: string; value: string; note?: string };

export type Project = {
  slug: string;
  name: string;
  industry: string;
  category: "Web Platform" | "Product Engineering" | "Ecommerce" | "AI & Automation" | "Business Systems";
  year: string;
  tagline: string;
  problem: string;
  solution: string;
  services: string[];
  technologies: string[];
  /** Live URL. Leave empty when not yet published — the UI hides the link. */
  liveUrl: string;
  /** "real" = based on the live product. "representative" = illustrative mockup. */
  visual: "real" | "representative";
  accent: "lime" | "violet" | "steel";
  /** Optional verified outcomes only. Empty by default. */
  results: ProjectStat[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "vizotool",
    name: "VizoTool",
    industry: "Productivity · Developer & SEO Tools",
    category: "Product Engineering",
    year: "2025",
    tagline: "A growing ecosystem of 40+ browser-based tools that never uploads a file.",
    problem:
      "Everyday image, PDF, developer and SEO tasks are scattered across ad-heavy websites that upload private files to a server. The product needed to offer a wide range of utilities while keeping processing entirely on the user's device.",
    solution:
      "A unified Next.js application with a shared tool registry, consistent interface patterns across every utility, and client-side processing so documents and images stay on the device. A common design and engineering system allows new tools to ship without redesigning the experience each time.",
    services: ["custom-web-development", "ui-ux-product-design"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase"],
    liveUrl: "https://vizotool.com/portfolio",
    visual: "real",
    accent: "lime",
    results: [],
    highlights: [
      "40+ browser-based tools across image, PDF, developer and SEO categories",
      "Client-side processing — files are not uploaded to a server",
      "Shared tool registry so new utilities inherit the same navigation and layout system",
      "Search, category browsing and cross-linking designed for discovery",
    ],
  },
  {
    slug: "dinelyy",
    name: "Dinelyy",
    industry: "Hospitality · Restaurant Operations",
    category: "Web Platform",
    year: "2025",
    tagline: "A connected restaurant platform: QR ordering, kitchen display, tables and payments on one screen.",
    problem:
      "Restaurants juggle paper order tickets, a separate QR ordering tool, table tracking and payment verification. Information moves between screens and people by hand, which slows service and makes end-of-day reconciliation unreliable.",
    solution:
      "A single operations platform where guest QR orders, kitchen display, floor state and payment verification share one live data model. Role-specific views give owners, cashiers, kitchen staff and waiters only what they need, and guided onboarding digitises the menu so a venue can go live quickly.",
    services: ["custom-web-development", "full-stack-software-development", "ui-ux-product-design"],
    technologies: ["Next.js", "React", "Realtime data", "QR ordering", "Payments integration"],
    liveUrl: "https://dinelyy.com",
    visual: "real",
    accent: "violet",
    results: [],
    highlights: [
      "Guests order from their own phone by scanning a QR code — no app download",
      "Orders fire to a live kitchen board with timing, notes and payment status",
      "Floor view shows every table's state in real time",
      "Separate views for owner, cashier, kitchen and waiting staff",
    ],
  },
  {
    slug: "edulearn-lms",
    name: "EduLearn LMS",
    industry: "Education · Schools, Colleges & Training Institutes",
    category: "Web Platform",
    year: "—",
    tagline:
      "A learning platform for institutes: courses, live classes, assignments and progress on one dashboard.",
    problem:
      "Institutes deliver lessons across WhatsApp groups, shared drives and separate video links. Students lose track of what is due, faculty have no single view of attendance or submissions, and administrators cannot see how a batch is progressing without asking for screenshots.",
    solution:
      "A demonstration learning management platform for education institutions, covering course and batch structure, live and recorded classes, assignments and quizzes, attendance, and progress dashboards for students, faculty and administrators. Built as a representative demo that shows how an institute's day-to-day teaching operations can live in one system.",
    services: ["custom-web-development", "full-stack-software-development", "ui-ux-product-design"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Video & notification integration"],
    liveUrl: "",
    visual: "representative",
    accent: "lime",
    results: [],
    highlights: [
      "Course, batch and module structure with a single student home screen",
      "Live and recorded classes alongside assignments, quizzes and submissions",
      "Attendance and progress views for students, faculty and administrators",
      "Role-specific dashboards so each person sees only what they need",
    ],
  },
  {
    slug: "campus-erp",
    name: "CampusERP",
    industry: "Education · School & College Administration",
    category: "Business Systems",
    year: "—",
    tagline:
      "Admissions, attendance, timetables, fees and reports for schools and colleges in one admin system.",
    problem:
      "Admission enquiries, attendance registers, fee records and timetable changes usually sit in separate registers and spreadsheets. Office staff re-enter the same information, reports are assembled by hand, and parents or students call for updates that the system already knows.",
    solution:
      "A demonstration campus management system covering enquiry and admission tracking, student records, attendance, timetables, fee tracking and printable reports. It is structured as the operations core of a school or college, with permissions so office, finance and teaching staff each work inside the same record.",
    services: ["full-stack-software-development", "crm-business-systems", "custom-web-development"],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Role-based access"],
    liveUrl: "",
    visual: "representative",
    accent: "violet",
    results: [],
    highlights: [
      "Admission pipeline from enquiry to enrolment in one record",
      "Attendance, timetable and fee tracking without parallel spreadsheets",
      "Reports generated from live data instead of assembled by hand",
      "Permission model for office, finance and teaching staff",
    ],
  },
  {
    slug: "studymate-ai",
    name: "StudyMate AI",
    industry: "Education · AI Study Assistant",
    category: "AI & Automation",
    year: "—",
    tagline:
      "An AI tutor that answers from your own syllabus, notes and past papers — with sources.",
    problem:
      "Students ask generic chatbots questions that are answered from the open internet, which is often wrong for a specific syllabus, textbook or marking scheme. Faculty, meanwhile, spend repeated hours answering the same administrative and revision questions.",
    solution:
      "A demonstration AI study assistant that answers questions strictly from the institute's own uploaded material — syllabus, notes, worksheets and past papers — and shows the passage each answer came from. It also drafts practice questions and summaries for revision, keeping a human review step for anything it is unsure about.",
    services: ["ai-integration-automation", "custom-web-development", "api-integrations"],
    technologies: ["Next.js", "React", "TypeScript", "LLM APIs", "Vector search"],
    liveUrl: "",
    visual: "representative",
    accent: "steel",
    results: [],
    highlights: [
      "Answers grounded in the institute's own material, with cited sources",
      "Practice questions and revision summaries generated from the syllabus",
      "Human-review step for uncertain answers instead of silent guessing",
      "Representative interface mockups — not production screenshots",
    ],
  },
  {
    slug: "wine-store",
    name: "Wine Store Commerce Demo",
    industry: "Ecommerce · Specialty Retail",
    category: "Ecommerce",
    year: "—",
    tagline: "A conversion-focused storefront demo exploring catalogue structure and checkout flow.",
    problem:
      "Specialty retailers often inherit storefronts that are slow on mobile, hard to merchandise and awkward to integrate with inventory and fulfilment systems. This demo explores how a modern specialty store can be structured from the ground up.",
    solution:
      "An ecommerce demonstration covering catalogue architecture, product storytelling, cart and checkout flow, and the integration points an operational store would need. It is presented as a demonstration build, not a client engagement.",
    services: ["ecommerce-solutions", "ui-ux-product-design"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Commerce APIs"],
    // TODO(setup): add the real demo URL via NEXT_PUBLIC_WINE_STORE_URL or by editing this value.
    liveUrl: process.env.NEXT_PUBLIC_WINE_STORE_URL ?? "",
    visual: "representative",
    accent: "steel",
    results: [],
    highlights: [
      "Catalogue and collection structure designed for browsing, not just searching",
      "Product pages composed for story, specification and confidence",
      "Cart and checkout flow mapped against a realistic fulfilment path",
      "Representative interface mockups — not production screenshots",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectSlugs = projects.map((p) => p.slug);
