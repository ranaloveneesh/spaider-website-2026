import type { Metadata } from "next";
import Image from "next/image";
import TeamShowcase from "@/app/components/about/Team";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "About",
	description: "Spaider Space builds European-sovereign AI infrastructure for aerospace teams.",
	alternates: { canonical: "https://www.spaiderspace.com/about" },
	openGraph: {
		title: "About | SPAIDER Space",
		description: "Spaider Space builds European-sovereign AI infrastructure for aerospace teams.",
		url: "https://www.spaiderspace.com/about",
		siteName: "SPAIDER Space",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "SPAIDER Space - About",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function AboutPage() {
	return (
		<div className="mx-auto w-full min-w-0 max-w-7xl space-y-16 px-4 pb-10 text-left sm:space-y-24 sm:px-6 sm:pb-16 md:space-y-32 lg:px-8">
			{/* ── Hero ── */}
			<Reveal as="header" variant="fade-up" threshold={0.1} className="relative isolate overflow-hidden py-8 sm:py-10 md:flex md:flex-row md:items-center md:justify-between md:gap-8">
				{/* Accent glow behind the logo */}
				<div
					className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full opacity-20"
					style={{
						background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
					}}
					aria-hidden
				/>

				{/* Content */}
				<div className="relative z-10 max-w-2xl space-y-5">
					<h2 className="font-outfit text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">About SPAIDER Space</h2>
					<p className="text-base leading-7 text-muted max-w-[52ch]">
						European-sovereign AI infrastructure, built for the precision and accountability that aerospace demands. European-sovereign AI infrastructure, built for the precision and accountability that aerospace demands. European-sovereign AI infrastructure, built for the precision and accountability that aerospace
						demands. European-sovereign AI infrastructure, built for the precision and accountability that aerospace demands. European-sovereign AI infrastructure, built for the precision and accountability that aerospace demands. European-sovereign AI infrastructure, built for the precision and accountability that
						aerospace demands. European-sovereign AI infrastructure, built for the precision and accountability that aerospace demands. European-sovereign AI infrastructure, built for the precision and accountability that aerospace demands. European-sovereign AI infrastructure, built for the precision and
						accountability that aerospace demands. European-sovereign AI infrastructure, built for the precision and accountability that aerospace demands.
					</p>
				</div>

				{/* Logo - large decorative background element */}
				<div className="pointer-events-none absolute -right-10 -top-6 z-0 opacity-[0.08] select-none sm:-right-4 sm:top-0 md:static md:mr-0 md:ml-8 md:opacity-[0.06]" aria-hidden>
					<Image src="/logo.png" alt="" width={560} height={560} className="h-[160px] w-auto object-contain sm:h-[220px] md:h-[420px] lg:h-[560px]" />
				</div>
			</Reveal>

			{/* ── Our vision ── */}
			<section>
				<Reveal variant="fade-up" threshold={0.1} className="mb-8 sm:mb-12 md:mb-16">
					<div className="flex justify-start md:justify-end">
						<h2 className="font-outfit text-4xl font-medium tracking-tight text-foreground md:text-right sm:text-5xl">Our vision</h2>
					</div>
				</Reveal>
				<Reveal variant="fade-up" threshold={0.1} delayMs={80}>
					<div className="max-w-[65ch] space-y-5 sm:space-y-6 md:ml-auto">
						<p className="max-w-[65ch] text-base leading-7 text-muted/80 sm:leading-8">We see a future where aerospace organisations run on AI that is as dependable as their hardware and as accountable as their processes-built in Europe, for European missions, with data and decisions firmly under their control.</p>
						<p className="max-w-[65ch] text-base leading-7 text-muted/80 sm:leading-8">
							Our vision is to make sovereign, domain-expert AI the default layer for design, test, and operations: technology that speeds up work without cutting corners on safety, export discipline, or trust. Human experts stay authoritative; agents handle retrieval, synthesis, and repetition so teams focus on
							judgment, creativity, and delivery.
						</p>
						<p className="max-w-[65ch] text-base leading-7 text-muted/80 sm:leading-8">SPAIDER Space S.à r.l. is headquartered in Luxembourg. We focus on reliability, security, and auditability: AI that fits how aerospace organisations already operate, not the other way around.</p>
						<p className="max-w-[65ch] text-base leading-7 text-muted/80 sm:leading-8">
							Our platform combines retrieval and tooling with specialised agents for high-value workflows-from documentation and standards to analysis and decision support-so engineers and programme teams spend less time searching and more time on design, safety, and delivery.
						</p>
					</div>
				</Reveal>
			</section>

			{/* ── Our mission ── */}
			<section>
				<Reveal variant="fade-up" threshold={0.1} className="mb-8 sm:mb-12 md:mb-16">
					<div className="flex justify-start">
						<h2 className="font-outfit text-4xl font-medium tracking-tight text-foreground sm:text-5xl">Our mission</h2>
					</div>
				</Reveal>
				<Reveal variant="fade-up" threshold={0.1} delayMs={80}>
					<div className="max-w-[65ch] space-y-5 sm:space-y-6">
						<p className="text-base leading-7 text-muted/80 sm:leading-8">Building the modern email sending platform</p>
						<p className="text-base leading-7 text-muted/80 sm:leading-8">Our mission is to give teams an email platform they can trust for every critical message: fast delivery, clear observability, and infrastructure that scales without operational drama.</p>
						<p className="text-base leading-7 text-muted/80 sm:leading-8">We focus on developer-first tooling with API design, event streams, and workflows that feel intuitive from day one-so product and engineering teams ship reliable communication features faster.</p>
						<p className="text-base leading-7 text-muted/80 sm:leading-8">From transactional notifications to high-volume campaigns, we are building a modern foundation for email that combines performance, control, and confidence at every step.</p>
					</div>
				</Reveal>
			</section>

			{/* ── Team ── */}
			<section>
				<Reveal variant="fade-up" threshold={0.1} className="mb-8 sm:mb-12 md:mb-16">
					<div className="flex justify-start md:justify-end">
						<h2 className="font-outfit text-4xl font-medium tracking-tight text-foreground md:text-right sm:text-5xl">The team behind it</h2>
					</div>
				</Reveal>
				<Reveal variant="fade-up" threshold={0.2}>
					<TeamShowcase />
				</Reveal>
			</section>
		</div>
	);
}
