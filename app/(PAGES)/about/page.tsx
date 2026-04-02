import type { Metadata } from "next";
import TeamShowcase from "@/app/components/about/team";

export const metadata: Metadata = {
  title: "About - SPAIDER",
  description:
    "Spaider Space builds European-sovereign AI infrastructure for aerospace teams.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto space-y-8 pb-12">
      <header className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight text-muted sm:text-3xl lg:text-4xl font-manrope">
          About <span className="font-manrope uppercase">Spaider</span> Space
        </h1>
        <p className="text-base leading-7 text-muted-foreground">
          We are building the sovereign AI layer for aerospace—so your team can
          work with domain-expert agents on your own data, with deployment and
          compliance choices that fit European missions and enterprises.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl font-manrope">
          Our vision
        </h2>
        <p className="text-base leading-7 text-muted-foreground">
          We see a future where aerospace organisations run on AI that is as
          dependable as their hardware and as accountable as their
          processes—built in Europe, for European missions, with data and
          decisions firmly under their control.
        </p>
        <p className="text-base leading-7 text-muted-foreground">
          Our vision is to make sovereign, domain-expert AI the default layer
          for design, test, and operations: technology that speeds up work
          without cutting corners on safety, export discipline, or trust. Human
          experts stay authoritative; agents handle retrieval, synthesis, and
          repetition so teams focus on judgment, creativity, and delivery.
        </p>
      </section>

      <section className="space-y-4 text-base leading-7 text-muted-foreground">
        <p>
          SPAIDER Space S.à r.l. is headquartered in Luxembourg. We focus on
          reliability, security, and auditability: AI that fits how aerospace
          organisations already operate, not the other way around.
        </p>
        <p>
          Our platform combines retrieval and tooling with specialised agents
          for high-value workflows—from documentation and standards to analysis
          and decision support—so engineers and programme teams spend less time
          searching and more time on design, safety, and delivery.
        </p>
      </section>

      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl font-manrope">
        Our Team
      </h2>
      <TeamShowcase />
    </div>
  );
}
