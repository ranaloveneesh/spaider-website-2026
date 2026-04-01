import { InvestForm } from "../../components/invest-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invest - SPAIDER",
  description:
    "Investor information for SPAIDER - European sovereign AI for aerospace.",
};

export default function InvestPage() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start">
      <div className="space-y-6 lg:pr-8">
        <h2 className="text-2xl font-semibold tracking-tight text-muted sm:text-3xl lg:text-4xl font-manrope">
          Invest
        </h2>

        <p className="text-base leading-7 text-muted-foreground">
          Become an early shareholder and help launch SPAIDER's AI in Space.
        </p>
        <p className="text-base leading-7 text-muted-foreground">
          Register to receive the investor brief, timeline, and terms for our
          private raise. For qualified investors; this is a non-binding
          expression of interest.
        </p>
      </div>

      <InvestForm />
    </div>
  );
}
