/**
 * POST /api/contact — delivers project enquiries to the configured inbox.
 *
 * Required environment variables:
 * - RESEND_API_KEY     API key for the transactional email provider (Resend HTTP API).
 * - CONTACT_TO_EMAIL   Inbox that receives enquiries.
 * - CONTACT_FROM_EMAIL Optional sender identity.
 *                      Defaults to "Vizo Technology Website <onboarding@resend.dev>".
 *
 * Without these variables the endpoint does not pretend to succeed: it
 * degrades to an honest 503 "not configured" response so the form can tell
 * the visitor to use the contact details in the footer instead.
 */

import { buildEmailBody, validateContactPayload } from "@/lib/contact";

export const maxDuration = 30;

/**
 * Simple in-memory rate limit, keyed by client IP: 5 requests per 10 minutes.
 * This state lives per-instance and is adequate for a single-instance
 * deployment; if the site is scaled horizontally, move this to a shared
 * store (e.g. Redis or the platform's KV) so limits apply across instances.
 */
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const rateLimitHits = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const hits = (rateLimitHits.get(ip) ?? []).filter((t) => t > windowStart);

  if (hits.length >= RATE_LIMIT_MAX) {
    rateLimitHits.set(ip, hits);
    return true;
  }

  hits.push(now);
  rateLimitHits.set(ip, hits);

  if (rateLimitHits.size > 1000) {
    for (const [key, times] of rateLimitHits) {
      if (times.every((t) => t <= windowStart)) rateLimitHits.delete(key);
    }
  }

  return false;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const result = validateContactPayload(body);
  if (!result.ok || !result.payload) {
    return Response.json(
      {
        ok: false,
        error: "Please check the highlighted fields.",
        fields: result.fields,
      },
      { status: 400 },
    );
  }
  const payload = result.payload;

  // Honeypot tripped: report success without sending anything.
  if (payload.website) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Vizo Technology Website <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    return Response.json(
      {
        ok: false,
        code: "not_configured",
        error:
          "The form is not connected to an inbox yet. Please use the contact details in the footer, or the email link shown below.",
      },
      { status: 503 },
    );
  }

  if (isRateLimited(getClientIp(request))) {
    return Response.json(
      {
        ok: false,
        error:
          "Too many submissions from this device. Please try again in a little while, or email us directly.",
      },
      { status: 429 },
    );
  }

  const subject = `Project enquiry — ${payload.service}${
    payload.company ? ` — ${payload.company}` : ""
  }`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email,
        subject,
        text: buildEmailBody(payload),
      }),
    });

    if (!res.ok) {
      console.error(`[contact] Email provider responded with status ${res.status}`);
      return Response.json(
        {
          ok: false,
          error:
            "Something went wrong sending your message. Please try again, or email us directly.",
        },
        { status: 500 },
      );
    }
  } catch (err) {
    console.error(
      "[contact] Failed to send enquiry:",
      err instanceof Error ? err.message : "network error",
    );
    return Response.json(
      {
        ok: false,
        error:
          "Something went wrong sending your message. Please try again, or email us directly.",
      },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
