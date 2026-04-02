import type { Metadata } from "next";
import AgentsHero from "@/app/components/AgentsHero";
import RfpChallenge from "./RfpChallenge";
import KeyFeatures from "./KeyFeatures";
import AudienceBenefits from "./AudienceBenefits";
import OnboardingTimeline from "./OnboardingTimeline";
import Metrics from "./Metrics";
import SaganCTA from "./SaganCTA";

export const metadata: Metadata = {
  title: "Sagan - SPAIDER",
  description:
    "SAGAN - SPAIDER agent capabilities for aerospace programs and technical collaboration.",
};

export default function SaganPage() {
  return (
    <div className="">
      <AgentsHero />

      <RfpChallenge />

      <KeyFeatures />

      <OnboardingTimeline />

      <Metrics />

      <SaganCTA />
    </div>
  );
}
