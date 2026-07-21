import type { Metadata } from "next";
import CareersHero from "@/app/components/careers/CareersHero";
import JobListings from "@/app/components/careers/JobListings";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Careers",
	description: "Join SPAIDER Space and help build the sovereign AI layer for aerospace.",
	alternates: { canonical: "https://www.spaiderspace.com/careers" },
	openGraph: {
		title: "Careers | SPAIDER Space",
		description: "Join SPAIDER Space and help build the sovereign AI layer for aerospace.",
		url: "https://www.spaiderspace.com/careers",
		siteName: "SPAIDER Space",
		images: [
			{
				url: "/og.png",
				width: 1731,
				height: 909,
				alt: "SPAIDER Space - Careers",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

const VALUES = [
	{
		number: "/ 01",
		title: "Precision over speed",
		body: "We build for aerospace, where accuracy and reliability are non-negotiable. We move deliberately, verify rigorously, and never trade correctness for velocity.",
	},
	{
		number: "/ 02",
		title: "Deep domain respect",
		body: "Aerospace is a discipline earned over decades. We approach domain experts with humility, building AI that amplifies their judgment, never replacing it.",
	},
	{
		number: "/ 03",
		title: "Transparent and accountable",
		body: "We build AI that explains itself. Internally, we operate the same way: open communication, clear decisions, and accountability at every level.",
	},
];

export default function CareersPage() {
	return (
		<div className="w-full min-w-0 overflow-x-clip">
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)]" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				<CareersHero />

				<section id="open-roles" className="mt-[var(--spx-section-gap)] scroll-mt-28">
					<Reveal variant="fade-up" threshold={0.1} className="mb-10 sm:mb-12">
						<h2 className="spx-heading text-foreground">Open roles</h2>
					</Reveal>
					<Reveal variant="fade-up" threshold={0.05} delayMs={80}>
						<JobListings />
					</Reveal>
				</section>

				<section className="mt-[var(--spx-section-gap)]">
					<Reveal variant="fade-up" threshold={0.1} className="mb-8 sm:mb-12 md:mb-16">
						<h2 className="spx-heading text-foreground">
							How we work.
							<br />
							<span className="spx-grad-text">Why it matters.</span>
						</h2>
					</Reveal>

					<div className="grid gap-x-10 border-t border-spx-rule md:grid-cols-3 lg:gap-x-14">
						{VALUES.map((v, i) => (
							<Reveal key={v.number} variant="fade-up" threshold={0.1} delayMs={i * 55}>
								<div className="border-b border-spx-rule py-8 md:border-b-0 md:border-r md:border-spx-rule md:py-10 md:pr-8 md:last:border-r-0 md:last:pr-0">
									<span className="spx-index">{v.number}</span>
									<h3 className="spx-h3 mt-14 text-foreground">{v.title}</h3>
									<p className="spx-body mt-4 max-w-[34ch]">{v.body}</p>
								</div>
							</Reveal>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
