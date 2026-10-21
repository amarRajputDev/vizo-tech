import { budgetOptions, serviceOptions, type ContactMethod } from "@/data/contact";

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  description: string;
  contactMethod: ContactMethod;
  /** Honeypot — must be empty. */
  website?: string;
};

export type ContactFields = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactPayload(input: unknown): {
  ok: boolean;
  payload?: ContactPayload;
  fields?: ContactFields;
} {
  const raw = (typeof input === "object" && input !== null ? input : {}) as Record<
    string,
    unknown
  >;

  const str = (key: string) =>
    typeof raw[key] === "string" ? (raw[key] as string).trim() : "";

  const payload: ContactPayload = {
    name: str("name"),
    email: str("email"),
    company: str("company"),
    service: str("service"),
    budget: str("budget"),
    description: str("description"),
    contactMethod: (str("contactMethod") || "email") as ContactMethod,
    website: str("website"),
  };

  const fields: ContactFields = {};

  if (payload.name.length < 2) fields.name = "Please enter your name.";
  if (!EMAIL_RE.test(payload.email)) {
    fields.email = "Please enter a valid business email address.";
  }
  if (!payload.service) fields.service = "Please choose a service.";
  else if (!(serviceOptions as readonly string[]).includes(payload.service)) {
    fields.service = "Please choose one of the listed services.";
  }
  if (payload.budget && !(budgetOptions as readonly string[]).includes(payload.budget)) {
    fields.budget = "Please choose one of the listed ranges.";
  }
  if (payload.description.length < 20) {
    fields.description =
      "Please describe your project in a little more detail (at least 20 characters).";
  }
  if (payload.description.length > 4000) {
    fields.description = "Please keep the description under 4,000 characters.";
  }
  if (!["email", "phone", "either"].includes(payload.contactMethod)) {
    fields.contactMethod = "Please choose a contact method.";
  }

  if (Object.keys(fields).length > 0) return { ok: false, fields };

  // Honeypot tripped: pretend success without storing anything.
  if (payload.website) return { ok: true, payload };

  return { ok: true, payload };
}

export function buildEmailBody(payload: ContactPayload): string {
  const lines = [
    "New project enquiry — Vizo Technology website",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "—"}`,
    `Service: ${payload.service}`,
    `Budget: ${payload.budget || "—"}`,
    `Preferred contact: ${payload.contactMethod}`,
    "",
    "Project description:",
    payload.description,
    "",
    `Received: ${new Date().toISOString()}`,
  ];
  return lines.join("\n");
}
