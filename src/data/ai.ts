export type AICapability = {
  id: string;
  title: string;
  detail: string;
};

export const aiCapabilities: AICapability[] = [
  {
    id: "intake",
    title: "Organise incoming business inquiries",
    detail:
      "Read every enquiry that arrives — form, email or inbox — classify it, enrich it with context and route it to the right person or system.",
  },
  {
    id: "qualification",
    title: "Assist with lead qualification",
    detail:
      "Score and summarise incoming requests against criteria your team defines, so attention goes to the conversations that fit.",
  },
  {
    id: "summaries",
    title: "Summarise customer conversations",
    detail:
      "Turn long email threads, call notes and support transcripts into short briefs with actions, owners and open questions.",
  },
  {
    id: "connect",
    title: "Connect business tools and data",
    detail:
      "Move information between your CRM, inbox, documents and spreadsheets automatically, with a clear record of every run.",
  },
  {
    id: "workflows",
    title: "Automate repetitive workflows",
    detail:
      "Multi-step processes — document handling, reporting preparation, onboarding checklists — executed consistently without manual copy-paste.",
  },
  {
    id: "knowledge",
    title: "Support internal knowledge retrieval",
    detail:
      "Let your team ask questions of your own documents and get answers with sources, instead of searching folders and chat history.",
  },
  {
    id: "access",
    title: "Help teams access information faster",
    detail:
      "Surface the right record, order or ticket at the moment it is needed, inside the tools your team already uses.",
  },
];

export type FlowNode = {
  id: string;
  label: string;
  caption: string;
  items: string[];
};

/** Business Input → Intelligent Processing → Connected Actions → Useful Output */
export const aiFlow: FlowNode[] = [
  {
    id: "input",
    label: "Business Input",
    caption: "Where work begins",
    items: ["Web forms", "Email & inboxes", "Documents", "CRM records", "Spreadsheets"],
  },
  {
    id: "processing",
    label: "Intelligent Processing",
    caption: "Where the judgement-lite work happens",
    items: ["Classify & tag", "Extract key fields", "Summarise", "Check against rules", "Flag exceptions"],
  },
  {
    id: "actions",
    label: "Connected Actions",
    caption: "Where your tools take over",
    items: ["Update the CRM", "Notify the right team", "Create a task", "Draft a reply", "File the record"],
  },
  {
    id: "output",
    label: "Useful Output",
    caption: "What your team actually receives",
    items: ["A structured brief", "A routed enquiry", "A ready-to-review draft", "An updated dashboard", "An exception queue"],
  },
];
