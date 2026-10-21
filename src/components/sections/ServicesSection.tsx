"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Hot, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { services, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

const accentStyles = {
  lime: {
    tile: "text-lime",
    hoverBorder: "group-hover:border-lime/40",
    color: "#C8FF4D",
  },
  violet: {
    tile: "text-violet",
    hoverBorder: "group-hover:border-violet/45",
    color: "#6A5CFF",
  },
  steel: {
    tile: "text-steel",
    hoverBorder: "group-hover:border-[#3a4556]",
    color: "#929AA8",
  },
} as const;

const SPAN_CLASSES: Record<Service["span"], string> = {
  wide: "lg:col-span-7",
  tall: "lg:col-span-5",
  standard: "lg:col-span-4",
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-line bg-surface py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="glow-violet pointer-events-none absolute -right-[18%] -top-[22%] h-[55vh] w-[55vw] opacity-50" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything you need to <Hot>build, launch and grow</Hot>.
            </>
          }
          description="Design, engineering and automation under one roof: we shape the experience, build the software and wire the workflows around it, so one team stays accountable from first sketch to live system."
        />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-12"
        >
          {services.map((service) => (
            <RevealItem
              key={service.slug}
              className={cn("h-full", SPAN_CLASSES[service.span])}
            >
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-16 flex flex-col items-center gap-5 text-center md:mt-20 md:flex-row md:justify-center md:gap-7">
          <p className="text-[0.9375rem] text-steel">
            Not sure which service you need?
          </p>
          <ButtonLink href="/contact" variant="secondary">
            Describe your project
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const accent = accentStyles[service.accent];

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-[4px] border border-line bg-ink/60 p-7 md:p-8",
        "transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:-translate-y-[2px] hover:bg-ink/80",
        accent.hoverBorder,
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime",
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "grid h-10 w-10 place-items-center rounded-[3px] border border-line bg-elevated/70",
            accent.tile,
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <span className="idx text-[0.6875rem] text-[#5b6472]">
          {service.index}
        </span>
      </div>

      <h3 className="mt-7 text-[1.25rem] font-medium tracking-[-0.02em] text-paper">
        {service.name}
      </h3>
      <p className="mt-3 text-[0.9375rem] leading-[1.65] text-steel">
        {service.short}
      </p>

      <div
        aria-hidden="true"
        className={cn(
          "mt-7",
          service.span === "wide" ? "h-16" : "h-12",
        )}
      >
        <ServiceMotif slug={service.slug} accent={accent.color} />
      </div>

      <div className="mt-auto pt-7">
        <span className="ulink text-[0.875rem] font-medium text-lime transition-colors duration-300 group-hover:text-paper">
          Explore Service
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
          >
            <path
              d="M2.5 8h11m0 0L9 3.5M13.5 8 9 12.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

/* ---------------------------------------------------------------
   Distinct miniature motif per service — small, monochrome,
   with a single accent colour. Purely decorative.
--------------------------------------------------------------- */

const LINE = "#2f3a49";
const DIM = "#242e3b";

const hoverShiftX =
  "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1";
const hoverShiftY =
  "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[-2px]";

function ServiceMotif({ slug, accent }: { slug: string; accent: string }) {
  const common = {
    viewBox: "0 0 144 48",
    fill: "none",
    className: "h-full w-auto max-w-full",
    "aria-hidden": true as const,
  };

  switch (slug) {
    /* browser frame with content bars and a CTA */
    case "custom-web-development":
      return (
        <svg {...common}>
          <rect x="0.5" y="0.5" width="143" height="47" rx="3" stroke={LINE} />
          <path d="M0.5 11.5h143" stroke={LINE} />
          <circle cx="9" cy="6" r="1.5" fill="#3a4554" />
          <circle cx="15" cy="6" r="1.5" fill="#3a4554" />
          <circle cx="21" cy="6" r="1.5" fill="#3a4554" />
          <rect x="10" y="19" width="52" height="4" rx="1" fill="#3a4554" />
          <rect x="10" y="27" width="36" height="3" rx="1" fill={DIM} />
          <rect
            x="10"
            y="34"
            width="26"
            height="7"
            rx="1.5"
            fill={accent}
            fillOpacity="0.9"
            className={hoverShiftY}
          />
          <rect
            x="96"
            y="17"
            width="38"
            height="24"
            rx="2"
            stroke={accent}
            strokeOpacity="0.55"
            fill={accent}
            fillOpacity="0.08"
            className={hoverShiftY}
          />
        </svg>
      );

    /* stacked database cylinders beside a code bracket */
    case "full-stack-software-development":
      return (
        <svg {...common}>
          <ellipse cx="26" cy="9" rx="18" ry="5.5" stroke={LINE} />
          <path d="M8 9v11c0 3 8.1 5.5 18 5.5s18-2.5 18-5.5V9" stroke={LINE} />
          <path d="M8 20v11c0 3 8.1 5.5 18 5.5s18-2.5 18-5.5V20" stroke={LINE} />
          <path
            d="M8 31v6c0 3 8.1 5.5 18 5.5s18-2.5 18-5.5v-6"
            stroke={accent}
            strokeOpacity="0.85"
          />
          <g className={hoverShiftX}>
            <path
              d="M86 16l-8 8 8 8"
              stroke={LINE}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M110 16l8 8-8 8"
              stroke={LINE}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M100 13l-8 22"
              stroke={accent}
              strokeOpacity="0.9"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        </svg>
      );

    /* agent hub with satellite nodes */
    case "ai-integration-automation":
      return (
        <svg {...common}>
          <path
            d="M72 24L34 12M72 24 34 38M72 24l44-10"
            stroke={LINE}
            strokeDasharray="3 4"
          />
          <circle
            cx="72"
            cy="24"
            r="7.5"
            fill={accent}
            fillOpacity="0.16"
            stroke={accent}
          />
          <circle cx="28" cy="11" r="4" stroke={LINE} />
          <circle cx="28" cy="39" r="4" stroke={LINE} />
          <circle
            cx="120"
            cy="12"
            r="4"
            fill={accent}
            fillOpacity="0.85"
            className={hoverShiftX}
          />
        </svg>
      );

    /* cart with a confirmation tick */
    case "ecommerce-solutions":
      return (
        <svg {...common}>
          <path
            d="M4 8h4l3.6 18.4a2 2 0 0 0 2 1.6h16.8"
            stroke={LINE}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.8 14h29.6l-3.2 10.5a1.5 1.5 0 0 1-1.4 1H16.4"
            stroke={LINE}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="19" cy="37" r="2.6" stroke={LINE} />
          <circle cx="33" cy="37" r="2.6" stroke={LINE} />
          <rect
            x="21"
            y="18"
            width="9"
            height="6"
            rx="1"
            fill={accent}
            fillOpacity="0.9"
            className={hoverShiftY}
          />
          <path
            d="M76 25l8 8 20-20"
            stroke={accent}
            strokeOpacity="0.9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={hoverShiftX}
          />
        </svg>
      );

    /* pipeline columns with a card in motion */
    case "crm-business-systems":
      return (
        <svg {...common}>
          <rect x="6.5" y="6.5" width="34" height="35" rx="2" stroke={LINE} />
          <rect x="54.5" y="6.5" width="34" height="35" rx="2" stroke={LINE} />
          <rect x="102.5" y="6.5" width="34" height="35" rx="2" stroke={LINE} />
          <rect x="12" y="12" width="23" height="7" rx="1.5" fill={DIM} />
          <rect x="12" y="23" width="23" height="7" rx="1.5" fill={DIM} />
          <rect
            x="60"
            y="12"
            width="23"
            height="7"
            rx="1.5"
            stroke={accent}
            strokeOpacity="0.85"
            fill={accent}
            fillOpacity="0.12"
            className={hoverShiftX}
          />
          <rect x="60" y="23" width="23" height="7" rx="1.5" fill={DIM} />
          <rect x="108" y="12" width="23" height="7" rx="1.5" fill={DIM} />
          <path
            d="M44 24h6m0 0-2.5-2.5M50 24l-2.5 2.5M92 24h6m0 0-2.5-2.5M98 24l-2.5 2.5"
            stroke={LINE}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    /* wireframe frame, selection handles and a cursor */
    case "ui-ux-product-design":
      return (
        <svg {...common}>
          <rect x="14.5" y="5.5" width="92" height="34" rx="2" stroke={LINE} />
          <path d="M14.5 14.5h92" stroke={LINE} />
          <rect x="22" y="21" width="30" height="3" rx="1" fill={DIM} />
          <rect x="22" y="28" width="20" height="3" rx="1" fill={DIM} />
          <rect
            x="62"
            y="20"
            width="28"
            height="13"
            rx="1"
            stroke={accent}
            strokeOpacity="0.9"
            fill={accent}
            fillOpacity="0.08"
          />
          <g fill={accent}>
            <rect x="60" y="18" width="4" height="4" />
            <rect x="88" y="18" width="4" height="4" />
            <rect x="60" y="31" width="4" height="4" />
            <rect x="88" y="31" width="4" height="4" />
          </g>
          <path
            d="M106 24l12 16-4.6-1-2.4 5.4-2.6-11.4-5-4z"
            fill={accent}
            className={hoverShiftX}
          />
        </svg>
      );

    /* two connected systems with a sync point */
    case "api-integrations":
      return (
        <svg {...common}>
          <rect x="6.5" y="13.5" width="36" height="21" rx="2.5" stroke={LINE} />
          <rect
            x="101.5"
            y="13.5"
            width="36"
            height="21"
            rx="2.5"
            stroke={LINE}
          />
          <circle cx="14" cy="21" r="1.6" fill="#3a4554" />
          <circle cx="20" cy="21" r="1.6" fill="#3a4554" />
          <circle cx="26" cy="21" r="1.6" fill="#3a4554" />
          <rect x="13" y="28" width="22" height="2.5" rx="1" fill={DIM} />
          <rect x="108" y="28" width="22" height="2.5" rx="1" fill={DIM} />
          <path d="M42.5 24h59" stroke={LINE} strokeDasharray="4 5" />
          <path d="M42.5 20v8M101.5 20v8" stroke={LINE} />
          <circle
            cx="72"
            cy="24"
            r="5.5"
            fill={accent}
            fillOpacity="0.16"
            stroke={accent}
            className="transition-opacity duration-500 group-hover:opacity-100 opacity-80"
          />
        </svg>
      );

    /* monitored pulse line with a shield */
    default:
      return (
        <svg {...common}>
          <rect x="0.5" y="8.5" width="98" height="31" rx="3" stroke={LINE} />
          <path
            d="M10 24h14l5-10 7 20 5-10h15"
            stroke={accent}
            strokeOpacity="0.9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={hoverShiftX}
          />
          <path
            d="M122 12l11 4v7.5c0 5.5-4.6 9.6-11 11.5-6.4-1.9-11-6-11-11.5V16z"
            stroke={LINE}
          />
          <path
            d="M117 24.5l3.5 3.5 7-7"
            stroke={accent}
            strokeOpacity="0.9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
