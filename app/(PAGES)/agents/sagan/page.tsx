import type { Metadata } from "next";
import AgentsHero from "@/app/components/sagan/AgentsHero";
import RfpChallenge from "../../../components/sagan/RfpChallenge";
import KeyFeatures from "../../../components/sagan/KeyFeatures";
import OnboardingTimeline from "../../../components/sagan/OnboardingTimeline";
import Metrics from "../../../components/sagan/Metrics";
import SaganCTA from "../../../components/sagan/SaganCTA";

export const metadata: Metadata = {
  title: "Sagan - SPAIDER",
  description:
    "SAGAN - SPAIDER agent capabilities for aerospace programs and technical collaboration.",
};

export default function SaganPage() {
  return (
    <div className="space-y-8 pb-12 md:space-y-10 mt-6">
      <AgentsHero />
      <RfpChallenge />
      <KeyFeatures />
      <OnboardingTimeline />
      <Metrics />
      <SaganCTA />
    </div>
  );
}
