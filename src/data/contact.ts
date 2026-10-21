export const serviceOptions = [
  "Custom Web Development",
  "Full-Stack Software Development",
  "AI Integration & Automation",
  "Ecommerce Solutions",
  "CRM & Business Systems",
  "UI/UX & Product Design",
  "API & Third-Party Integrations",
  "Maintenance & Technical Support",
  "Technical Consultation",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $40,000",
  "$40,000 – $100,000",
  "$100,000+",
  "Ongoing / retainer",
  "Prefer not to say",
] as const;

export const contactMethodOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone call" },
  { value: "either", label: "Either is fine" },
] as const;

export type ContactMethod = (typeof contactMethodOptions)[number]["value"];

export const serviceFieldId = "service";
export const budgetFieldId = "budget";
