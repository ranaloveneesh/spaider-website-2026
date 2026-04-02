"use client";

import { useState } from "react";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-center font-extrabold">
    <span className="bg-gradient-to-r from-[#5ce1e6] to-white bg-clip-text text-transparent text-[clamp(1.5rem,6.8vw,3rem)]">
      Amplifying Expertise Across Your Crew
    </span>
  </h2>
);

type Tab = { id: "pm" | "bd" | "tl" | "exec"; label: string; icon: React.ReactNode; bullets: string[] };

const CircleIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
    {children}
  </div>
);

const tabs: Tab[] = [
  {
    id: "pm",
    label: "Proposal Managers",
    icon: <span className="text-xl">📋</span>,
    bullets: [
      "Control deadlines, requirements and versions with full traceability.",
      "Reduce review cycles while maintaining compliance.",
      "Give leadership real-time visibility on status and risks.",
    ],
  },
  {
    id: "bd",
    label: "Business Development",
    icon: <span className="text-xl">📈</span>,
    bullets: [
      "Pursue more opportunities simultaneously, expanding reach.",
      "Rapidly generate competitive, tailored bid responses.",
      "Leverage past winning proposals and market intel.",
      "Spend more time on client relationships and value propositions.",
    ],
  },
  {
    id: "tl",
    label: "Technical Leads",
    icon: <span className="text-xl">🧠</span>,
    bullets: [
      "Less documentation burden, more design & innovation.",
      "AI-generated technical content aligned with your expertise.",
      "Augment with relevant research and citations.",
    ],
  },
  {
    id: "exec",
    label: "Executives",
    icon: <span className="text-xl">🎯</span>,
    bullets: [
      "Increase proposal throughput without growing headcount.",
      "Forecast risk and win probability across the pipeline.",
      "EU cloud or on-prem deployment with full governance.",
    ],
  },
];

const Check: React.FC = () => (
  <svg className="h-6 w-6 md:h-7 md:w-7 flex-shrink-0" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
    <path d="M7 12.5l3 3 7-7" stroke="#5ce1e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AudienceBenefits() {
  const [active, setActive] = useState<Tab["id"]>("bd"); // default visible

  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="mx-auto w-[98%] max-w-[110rem] px-6 py-16">
      <Title>Amplifying Expertise Across Your Crew</Title>

      {/* Tabs */}
      <div className="mx-auto mt-6 flex w-full max-w-3xl items-center justify-between gap-2 rounded-full bg-white/5 p-1 ring-1 ring-white/10">
        {tabs.map((t) => {
          const on = t.id === active;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={[
                "flex-1 rounded-full px-4 py-2 text-sm font-semibold transition",
                on ? "bg-white/15 text-white" : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        className="mx-auto mt-10 max-w-[110rem] rounded-2xl border border-white/10 bg-black/20 p-6 md:p-10"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)" }}
      >
        <div className="mb-6 flex items-center gap-4">
          <CircleIcon>{current.icon}</CircleIcon>
          <h3 className="text-2xl md:text-[1.75rem] font-semibold">
            {current.label === "Business Development"
              ? "Maximize Win Potential & Market Agility"
              : current.label === "Proposal Managers"
              ? "Deliver Compliant, On-Time Proposals at Scale"
              : current.label === "Technical Leads"
              ? "Focus on Innovation, Not Documentation"
              : "Operational Visibility & Governance"}
          </h3>
        </div>

        <ul className="space-y-5 text-white/90">
          {current.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
