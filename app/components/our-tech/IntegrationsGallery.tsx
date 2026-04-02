"use client";
import Image from "next/image";
import { useState } from "react";

/* ============ Types & Data ============ */
type Kind = "icon" | "wordmark";
type Integration = {
  name: string;
  src: string;
  href?: string;
  kind?: Kind;
  iconScale?: number; // optical tweak per logo (1 = base)
};

const LOGOS: Integration[] = [
  {
    name: "Python",
    src: "/integrations/python.svg",
    kind: "wordmark",
    iconScale: 1,
  },
  { name: "STK", src: "/integrations/stk.png", kind: "icon", iconScale: 1 },
  { name: "GMAT", src: "/integrations/gmat.png", kind: "icon", iconScale: 1.1 },
  {
    name: "ANSYS",
    src: "/integrations/ansys.svg",
    kind: "wordmark",
    iconScale: 0.95,
  },
  {
    name: "MATLAB",
    src: "/integrations/matlab.svg",
    kind: "wordmark",
    iconScale: 1.1,
  },
  {
    name: "Microsoft Teams",
    src: "/integrations/team.svg",
    kind: "icon",
    iconScale: 1,
  },
  {
    name: "Outlook",
    src: "/integrations/outlook.svg",
    kind: "icon",
    iconScale: 1.1,
  },
  {
    name: "NASA",
    src: "/integrations/nasa.png",
    kind: "icon",
    iconScale: 1.05,
  },
  { name: "Git", src: "/integrations/git.svg", kind: "icon", iconScale: 1 },
  {
    name: "Google Scholar",
    src: "/integrations/scholar.svg",
    kind: "icon",
    iconScale: 1,
  },
  {
    name: "arXiv",
    src: "/integrations/arxiv.svg",
    kind: "wordmark",
    iconScale: 1.0,
  },
  {
    name: "MCP",
    src: "/integrations/mcp.svg",
    kind: "wordmark",
    iconScale: 1.0,
  },
  {
    name: "MongoDB",
    src: "/integrations/mongo.svg",
    kind: "wordmark",
    iconScale: 1.06,
  },
  {
    name: "Word",
    src: "/integrations/word.svg",
    kind: "icon",
    iconScale: 1.05,
  },
  { name: "CSV", src: "/integrations/csv.svg", kind: "icon", iconScale: 1.05 },
  {
    name: "JSON",
    src: "/integrations/json.png",
    kind: "icon",
    iconScale: 1.05,
  },
  { name: "CAD", src: "/integrations/cad.png", kind: "icon", iconScale: 1.05 },
  {
    name: "Excel",
    src: "/integrations/excel.svg",
    kind: "icon",
    iconScale: 1.05,
  },
  { name: "PDF", src: "/integrations/pdf.png", kind: "icon", iconScale: 1.05 },
];

function LogoItem({ item }: { item: Integration }) {
  const [broken, setBroken] = useState(false);
  const kind = item.kind ?? "wordmark";
  const scale = item.iconScale ?? (kind === "icon" ? 1.08 : 1.0);

  return (
    <div
      className="flex w-[160px] shrink-0 items-center justify-center sm:w-[180px] lg:w-[200px]"
      title={item.name}
      aria-label={item.name}
    >
      {!broken ? (
        <div
          className="flex items-center justify-center"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center",
          }}
        >
          <Image
            src={item.src}
            alt={item.name}
            width={360}
            height={120}
            className="h-12 w-auto object-contain md:h-14 lg:h-16"
            onError={() => setBroken(true)}
          />
        </div>
      ) : (
        <div className="text-sm font-semibold text-muted-foreground">
          {item.name}
        </div>
      )}
    </div>
  );
}

export default function IntegrationsGallery() {
  return (
    <section className="mt-28">
      <h2 className="mb-12 text-2xl font-semibold tracking-tight text-muted sm:text-2xl lg:text-3xl font-manrope">
        Seamlessly integrate with your workflow
      </h2>

      <div
        className="relative mx-auto w-full overflow-hidden"
        aria-label="Integrations logo carousel"
        role="region"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent"
        />
        <div className="integrations-marquee-track flex w-max items-center gap-x-10 sm:gap-x-14 lg:gap-x-20">
          {[...LOGOS, ...LOGOS].map((item, i) => (
            <LogoItem key={`${item.name}-${i}`} item={item} />
          ))}
        </div>

        <style jsx>{`
          @keyframes integrationsMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .integrations-marquee-track {
            animation: integrationsMarquee 75s linear infinite;
            will-change: transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .integrations-marquee-track {
              animation: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
