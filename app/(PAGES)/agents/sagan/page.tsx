import type { Metadata } from "next";
import AgentsHero from "@/app/components/sagan/AgentsHero";
import RfpChallenge from "../../../components/sagan/RfpChallenge";
import KeyFeatures from "../../../components/sagan/KeyFeatures";
import OnboardingTimeline from "../../../components/sagan/OnboardingTimeline";
import Metrics from "../../../components/sagan/Metrics";
import SaganCTA from "../../../components/sagan/SaganCTA";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
  title: "Sagan - SPAIDER",
  description:
    "SAGAN - SPAIDER agent capabilities for aerospace programs and technical collaboration.",
};

export default function SaganPage() {
  return (
    <div className="mt-4 w-full min-w-0 space-y-8 pb-10 sm:mt-6 sm:space-y-10 sm:pb-12 md:space-y-12">
      <Reveal variant="scale" threshold={0.35}>
        <AgentsHero />
      </Reveal>
      <Reveal variant="fade-up">
        <RfpChallenge />
      </Reveal>
      <Reveal variant="fade-up">
        <KeyFeatures />
      </Reveal>
      <Reveal variant="fade-up">
        <OnboardingTimeline />
      </Reveal>
      <Reveal variant="fade-up">
        <Metrics />
      </Reveal>
      <Reveal variant="scale" threshold={0.25}>
        <SaganCTA />
      </Reveal>
    </div>
  );
}
