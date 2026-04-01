import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Foundations - SPAIDER",
  description:
    "How SPAIDER builds trustworthy, aerospace-grade AI - models, guardrails, and evaluation.",
};

export default function AiFoundationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        AI foundations
      </h1>
    </div>
  );
}
