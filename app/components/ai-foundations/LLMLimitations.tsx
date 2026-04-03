"use client";

const ITEMS = [
  {
    t: "More than just a RAG",
    d: "We don't make a simple RAG pipeline, we develop an Agentic RAG Platform with knowledge graph, vectorDB and websearch",
  },
  {
    t: "Interactive & Agentic",
    d: "You can send commands and query your Agentic RAG via chat or email like you would do with a co-worker",
  },
  {
    t: "Auto Database Management",
    d: "Agentic RAG help you maintain and grow your database with trusted sources and instructions that you provide",
  },
  {
    t: "Local Deployment Option",
    d: "Upon request we provide a local deployment option for sensitive data and high compliance needs",
  },
  {
    t: "Proprietary Models",
    d: "Your RAG Platform will gives you access to our propriety models fine-tuned on domain-specific data",
  },
  {
    t: "High Accuracy and Awareness",
    d: "Your Platform will be aware of your data and context, providing accurate and compliant answers with sources",
  },
];

export default function LLMLimitations() {
  return (
    <section className="relative mx-auto pt-8 pb-16 md:pt-10">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl font-manrope">
        What you get with SPAIDER&apos;s Foundations
      </h2>

      <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {ITEMS.map((it, i) => (
          <div key={i} className="flex items-start gap-3 text-left">
            <span
              aria-hidden
              className="shrink-0 select-none opacity-90"
              style={{
                fontSize: "8rem",
                fontWeight: 700,
                lineHeight: 0.75,
                letterSpacing: "-0.05em",
                color: "var(--color-accent)",
                textShadow: "0 0 14px rgba(17, 45, 199, 0.25)",
                marginRight: "-8px",
                clipPath: "inset(0 16% 0 0)",
              }}
            >
              {i + 1}
            </span>
            <div className="pt-2">
              <h3 className="font-medium leading-snug text-foreground sm:text-xl font-manrope">
                {it.t}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground font-inter">
                {it.d}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
