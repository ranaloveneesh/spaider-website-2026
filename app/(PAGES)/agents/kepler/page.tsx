import type { Metadata } from "next";
import type { CSSProperties } from "react";
import AgentDetail from "@/app/components/agents/AgentDetail";
import { KeplerVisual } from "@/app/components/agents/AgentVisuals";

export const metadata: Metadata = {
	title: "KEPLER - Mission Operations Agent",
	description: "KEPLER is SPAIDER's mission operations agent for operational context, procedure support, anomaly investigation, and mission knowledge.",
	alternates: { canonical: "https://www.spaiderspace.com/agents/kepler" },
};

export default function KeplerPage() {
	return <div style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}><AgentDetail
		name="KEPLER"
		role="Mission Operations Agent"
		headline="Operational context from mission data, procedures, events, constraints, and operator knowledge."
		description="KEPLER helps mission operators retrieve procedures, correlate events, investigate anomalies, and maintain a traceable operational record."
		visual={<KeplerVisual />}
		capabilities={[
			{ title: "Operational knowledge", body: "Structure procedures, flight rules, constraints, subsystem context, mission logs, and lessons learned for retrieval and reuse." },
			{ title: "Procedure support", body: "Identify relevant procedures and prerequisite context for a mission event while preserving the approved operational source." },
			{ title: "Anomaly investigation", body: "Correlate telemetry observations, events, logs, known conditions, and prior resolutions to support operator analysis." },
			{ title: "Mission continuity", body: "Maintain a structured, searchable record of operational context, decisions, evidence, and unresolved follow-up work." },
		]}
		workflow={[
			{ title: "Observe", body: "Receive selected telemetry, event, schedule, and operator context." },
			{ title: "Correlate", body: "Connect the event to mission state, systems, constraints, and prior records." },
			{ title: "Retrieve", body: "Find relevant approved procedures, rules, and operational evidence." },
			{ title: "Assess", body: "Present possible explanations, gaps, and supporting evidence." },
			{ title: "Review", body: "Record operator assessment, action, approval, and follow-up state." },
		]}
		inputs={["Selected telemetry and events", "Operational procedures", "Flight rules and constraints", "Mission schedules and plans", "Logs and operator records"]}
		outputs={["Contextual event summary", "Relevant procedure set", "Evidence-backed anomaly hypotheses", "Operator review package", "Structured mission record"]}
		trustSignals={["Timestamped provenance for telemetry, procedures, logs, and retrieved evidence.", "Consistency checks across mission state, operational rules, and recorded context.", "Confidence and evidence coverage attached to each proposed explanation.", "Operator authorization remains required for consequential mission actions."]}
		boundary="KEPLER supports operator decisions. The mission team retains authority over operational actions and spacecraft commands."
	/></div>;
}
