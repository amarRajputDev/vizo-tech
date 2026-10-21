"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ButtonLink, buttonStyles } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/config/site";
import {
  budgetOptions,
  contactMethodOptions,
  serviceOptions,
} from "@/data/contact";
import {
  buildEmailBody,
  validateContactPayload,
  type ContactFields,
  type ContactPayload,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";
type CopyState = "idle" | "copied" | "failed";

type ValueKey =
  | "name"
  | "email"
  | "company"
  | "service"
  | "budget"
  | "description"
  | "contactMethod"
  | "website";

type Values = Record<ValueKey, string>;

/** DOM order — used to focus the first invalid control. */
const FIELD_ORDER: ValueKey[] = [
  "name",
  "email",
  "company",
  "service",
  "budget",
  "description",
  "contactMethod",
];

const EMPTY_VALUES: Values = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  description: "",
  contactMethod: "",
  website: "",
};

const CONTACT_METHOD_FALLBACK = "Please choose how you would prefer us to reply.";

type ServerResponse = {
  ok?: boolean;
  error?: string;
  fields?: ContactFields;
  code?: string;
};

export function ContactForm({ className }: { className?: string }) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const pendingFocus = useRef<ValueKey | null>(null);

  const [values, setValues] = useState<Values>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactFields>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [draft, setDraft] = useState<ContactPayload | null>(null);

  // Focus the first invalid control once the error state has committed.
  useEffect(() => {
    const key = pendingFocus.current;
    if (!key) return;
    pendingFocus.current = null;
    const form = formRef.current;
    if (!form) return;
    const control =
      key === "contactMethod"
        ? form.querySelector<HTMLElement>('input[name="contactMethod"]')
        : form.querySelector<HTMLElement>(`#${key}`);
    control?.focus();
  }, [errors]);

  const update = (key: ValueKey, value: string) => {
    setValues((prev) => {
      const next: Values = { ...prev };
      next[key] = value;
      return next;
    });
    setErrors((prev) => {
      if (prev[key] === undefined) return prev;
      const next: ContactFields = { ...prev };
      delete next[key];
      return next;
    });
    if (message) setMessage("");
    if (status === "error") setStatus("idle");
  };

  const focusFirstInvalid = (fields: ContactFields) => {
    const first = FIELD_ORDER.find((key) => fields[key]);
    pendingFocus.current = first ?? null;
    setErrors(fields);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const result = validateContactPayload(values);
    const fields: ContactFields = { ...(result.fields ?? {}) };
    if (!fields.contactMethod && !values.contactMethod) {
      fields.contactMethod = CONTACT_METHOD_FALLBACK;
    }

    if (!result.ok || !result.payload || Object.keys(fields).length > 0) {
      setMessage("");
      setStatus("idle");
      focusFirstInvalid(fields);
      return;
    }

    const payload = result.payload;
    setErrors({});
    setMessage("");
    setDraft(payload);
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data: ServerResponse = {};
      try {
        data = (await response.json()) as ServerResponse;
      } catch {
        data = {};
      }

      if (response.ok && data.ok) {
        setStatus("success");
        return;
      }

      if (response.status === 503 || data.code === "not_configured") {
        setMessage(data.error ?? "");
        setStatus("unconfigured");
        return;
      }

      if (data.fields && Object.keys(data.fields).length > 0) {
        const merged: ContactFields = { ...errors, ...data.fields };
        focusFirstInvalid(merged);
      }

      setStatus("error");
      setMessage(
        data.error ??
          "We could not send your message. Please try again in a moment.",
      );
    } catch {
      setStatus("error");
      setMessage(
        "We could not reach the server. Please check your connection and try again.",
      );
    }
  }

  const panelClass = cn(
    "rounded-[4px] border border-line bg-ink/60 p-6 md:p-10",
    className,
  );

  // Composed once per submission — used by the honest fallback panel.
  const fallbackBody = useMemo(
    () => (draft ? buildEmailBody(draft) : ""),
    [draft],
  );

  if (status === "success") {
    return (
      <div className={panelClass}>
        <SuccessPanel />
      </div>
    );
  }

  if (status === "unconfigured") {
    return (
      <div className={panelClass}>
        <UnconfiguredPanel body={fallbackBody} />
      </div>
    );
  }

  return (
    <div className={panelClass}>
      <form
        ref={formRef}
        noValidate
        onSubmit={handleSubmit}
        aria-label="Project enquiry form"
      >
        {/* ------------------------------------------------------- intro */}
        <div className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <p className="max-w-[54ch] text-[0.9375rem] leading-[1.7] text-steel">
            We reply to every serious enquiry. Nothing you send is used for
            anything except responding to you.
          </p>
          <Link
            href="/privacy"
            className="ulink shrink-0 text-[0.875rem] text-paper"
          >
            Privacy Policy
          </Link>
        </div>

        {status === "error" && message ? (
          <p
            role="alert"
            className="mt-6 rounded-[3px] border border-[#ff6b6b]/40 bg-[#ff6b6b]/10 px-4 py-3.5 text-[0.9375rem] leading-[1.6] text-[#ffb4b4]"
          >
            {message}
          </p>
        ) : null}

        {/* ------------------------------------------------------ fields */}
        <div className="mt-8 grid gap-x-5 gap-y-6 sm:grid-cols-2">
          {/* full name */}
          <div>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="field block"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            <FieldError id="name-error" message={errors.name} />
          </div>

          {/* business email */}
          <div>
            <FieldLabel htmlFor="email">Business email</FieldLabel>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="field block"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            <FieldError id="email-error" message={errors.email} />
          </div>

          {/* company */}
          <div>
            <FieldLabel htmlFor="company" optional>
              Company
            </FieldLabel>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="field block"
              value={values.company}
              onChange={(e) => update("company", e.target.value)}
              aria-invalid={errors.company ? true : undefined}
              aria-describedby={errors.company ? "company-error" : undefined}
            />
            <FieldError id="company-error" message={errors.company} />
          </div>

          {/* service */}
          <div>
            <FieldLabel htmlFor="service">Service required</FieldLabel>
            <select
              id="service"
              name="service"
              required
              className="field block"
              value={values.service}
              onChange={(e) => update("service", e.target.value)}
              aria-invalid={errors.service ? true : undefined}
              aria-describedby={errors.service ? "service-error" : undefined}
            >
              <option value="">Select a service…</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FieldError id="service-error" message={errors.service} />
          </div>

          {/* budget */}
          <div>
            <FieldLabel htmlFor="budget" optional>
              Approximate budget
            </FieldLabel>
            <select
              id="budget"
              name="budget"
              className="field block"
              value={values.budget}
              onChange={(e) => update("budget", e.target.value)}
              aria-invalid={errors.budget ? true : undefined}
              aria-describedby={errors.budget ? "budget-error" : undefined}
            >
              <option value="">Select a range…</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FieldError id="budget-error" message={errors.budget} />
          </div>

          {/* preferred contact method */}
          <fieldset
            className="min-w-0"
            aria-describedby={
              errors.contactMethod ? "contactMethod-error" : undefined
            }
          >
            <legend className="mb-2 block p-0 text-[0.8125rem] leading-[1.4] text-steel">
              Preferred contact method{" "}
              <span className="text-[#5b6472]">(required)</span>
            </legend>

            <div className="flex flex-wrap gap-2">
              {contactMethodOptions.map((option) => {
                const selected = values.contactMethod === option.value;
                return (
                  <span key={option.value} className="relative inline-flex">
                    <input
                      id={`contactMethod-${option.value}`}
                      type="radio"
                      name="contactMethod"
                      value={option.value}
                      required
                      checked={selected}
                      onChange={(e) => update("contactMethod", e.target.value)}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={`contactMethod-${option.value}`}
                      className={cn(
                        "inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-[0.875rem] transition-colors duration-300",
                        selected
                          ? "border-lime bg-lime font-medium text-ink"
                          : "border-line text-steel hover:border-[#2c3543] hover:text-paper",
                        "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-lime",
                      )}
                    >
                      {option.label}
                    </label>
                  </span>
                );
              })}
            </div>

            <FieldError
              id="contactMethod-error"
              message={errors.contactMethod}
            />
          </fieldset>

          {/* project description */}
          <div className="sm:col-span-2">
            <FieldLabel htmlFor="description">Project description</FieldLabel>
            <textarea
              id="description"
              name="description"
              rows={6}
              required
              placeholder="What are you building, what is slowing the business down, and what would a good outcome look like?"
              className="field block resize-y"
              value={values.description}
              onChange={(e) => update("description", e.target.value)}
              aria-invalid={errors.description ? true : undefined}
              aria-describedby={
                errors.description ? "description-error" : undefined
              }
            />
            <FieldError id="description-error" message={errors.description} />
          </div>
        </div>

        {/* honeypot — never shown to people */}
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          aria-hidden="true"
          autoComplete="off"
          className="sr-only"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />

        {/* ----------------------------------------------------- actions */}
        <div className="mt-8 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "submitting"}
            aria-busy={status === "submitting"}
            className={cn(
              buttonStyles({ variant: "primary", size: "lg" }),
              "w-full sm:w-auto",
              status === "submitting" && "cursor-wait opacity-70",
            )}
          >
            {status === "submitting" ? (
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="h-4 w-4 animate-spin"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="6.5"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                />
                <path
                  d="M8 1.5A6.5 6.5 0 0 1 14.5 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : null}
            <span>{status === "submitting" ? "Sending…" : "Send enquiry"}</span>
          </button>

          <p className="max-w-[34ch] text-[0.8125rem] leading-[1.6] text-[#5b6472] sm:text-right">
            Fields marked (required) must be completed before sending.
          </p>
        </div>
      </form>
    </div>
  );
}

/* ------------------------------------------------------------- pieces */

function FieldLabel({
  htmlFor,
  optional,
  children,
}: {
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[0.8125rem] leading-[1.4] text-steel"
    >
      {children}{" "}
      <span className="text-[#5b6472]">
        {optional ? "(optional)" : "(required)"}
      </span>
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-[0.8125rem] leading-[1.5] text-[#ff8f8f]">
      {message}
    </p>
  );
}

function SuccessPanel() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      role="status"
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[3px] border border-lime/30 bg-lime/[0.05] p-6 sm:p-8"
    >
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-lime/40 bg-lime/10 text-lime">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-7 w-7"
        >
          <path
            d="M5 12.5 9.7 17.2 19 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <h3 className="mt-6 text-[clamp(1.375rem,2.4vw,1.875rem)] font-medium leading-[1.15] tracking-[-0.03em] text-paper">
        Thank you — your enquiry is on its way.
      </h3>

      <p className="mt-4 max-w-[46ch] text-[1rem] leading-[1.7] text-steel">
        We read every enquiry personally and will reply using your preferred
        contact method.
      </p>

      <div className="mt-8 border-t border-lime/20 pt-6">
        <ButtonLink href="/work" variant="secondary">
          Meanwhile, explore our work
        </ButtonLink>
      </div>
    </motion.div>
  );
}

function UnconfiguredPanel({ body }: { body: string }) {
  const reduce = useReducedMotion();
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const copyTimer = useRef<number | null>(null);
  const email = siteConfig.email;

  const mailtoHref = useMemo(() => {
    if (!email) return "";
    const subject = encodeURIComponent("Project enquiry");
    return `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }, [email, body]);

  useEffect(() => {
    return () => {
      if (copyTimer.current) window.clearTimeout(copyTimer.current);
    };
  }, []);

  const copyMessage = async () => {
    if (!body) return;
    const ok = await writeToClipboard(body);
    setCopyState(ok ? "copied" : "failed");
    if (copyTimer.current) window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopyState("idle"), 2600);
  };

  const copyLabel =
    copyState === "copied"
      ? "Copied"
      : copyState === "failed"
        ? "Copy failed"
        : "Copy your message";

  return (
    <motion.div
      role="status"
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[3px] border border-[#f2b544]/35 bg-[#f2b544]/[0.06] p-6 sm:p-8"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f2b544]/45 text-[#f2b544]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            d="M12 3.5 21.2 20H2.8L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 9.5v4.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="16.6" r="1" fill="currentColor" />
        </svg>
      </span>

      <h3 className="mt-6 text-[clamp(1.35rem,2.2vw,1.75rem)] font-medium leading-[1.2] tracking-[-0.03em] text-paper">
        This form is not connected to an inbox yet
      </h3>

      <p className="mt-4 max-w-[54ch] text-[1rem] leading-[1.7] text-steel">
        The site is live, but no form endpoint has been configured. You can
        still reach us directly:
      </p>

      {email ? (
        <p className="mt-5 text-[1rem] leading-[1.7]">
          <a href={mailtoHref} className="ulink break-words text-lime">
            {email}
          </a>
          <span className="mt-1.5 block text-[0.875rem] text-[#5b6472]">
            Opens your mail app with subject &ldquo;Project enquiry&rdquo; and
            this message already written.
          </span>
        </p>
      ) : (
        <p className="mt-5 max-w-[54ch] text-[0.9375rem] leading-[1.7] text-[#5b6472]">
          Use the contact details published in the footer of this page.
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-[#f2b544]/25 pt-6">
        <button
          type="button"
          onClick={copyMessage}
          className={cn(
            buttonStyles({ variant: "secondary", size: "md" }),
            "min-h-11",
          )}
        >
          <span aria-hidden="true">
            {copyState === "copied" ? (
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  d="M3 8.5 6.4 12 13 4.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <rect
                  x="5.25"
                  y="5.25"
                  width="8"
                  height="8"
                  rx="1.25"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M10.75 5.25v-1.5a1.5 1.5 0 0 0-1.5-1.5h-6a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h1.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
          <span>{copyLabel}</span>
        </button>

        <span className="text-[0.8125rem] text-[#5b6472]">
          Nothing you typed is lost — the message stays with you.
        </span>
      </div>

      <span aria-live="polite" className="sr-only">
        {copyState === "copied" ? "Message copied to the clipboard." : ""}
        {copyState === "failed"
          ? "Copying to the clipboard failed. Select and copy the message manually."
          : ""}
      </span>
    </motion.div>
  );
}

async function writeToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall back to the legacy path below */
  }

  try {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.setAttribute("aria-hidden", "true");
    field.style.position = "fixed";
    field.style.top = "-1000px";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(field);
    return copied;
  } catch {
    return false;
  }
}
