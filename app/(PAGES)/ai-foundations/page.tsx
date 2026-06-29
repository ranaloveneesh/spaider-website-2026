import type { Metadata } from "next";
import FoundationsPageClient from "./FoundationsPageClient";

export const metadata: Metadata = {
	title: "AI Foundations",
	description:
		"Sovereign AI infrastructure for aerospace organisations. Turn your internal and approved external knowledge into a governed, AI-ready layer - deployed on your infrastructure.",
};

export default function FoundationsPage() {
	return <FoundationsPageClient />;
}
