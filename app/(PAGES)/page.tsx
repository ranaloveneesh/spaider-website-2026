import type { Metadata } from "next";
import dynamic from "next/dynamic";
import type { CSSProperties } from "react";
import Hero from "../components/home/Hero";
import TrustedBy from "../components/home/TrustedBy";
import Reveal from "../components/ui/reveal";

export const metadata: Metadata = {
	title: { absolute: "SPAIDER Space - Sovereign AI for Aerospace" },
	description: "SPAIDER provides European-sovereign AI infrastructure for aerospace. Deploy domain-expert AI agents that collaborate with your team on your data - securely, compliantly, and at scale.",
};

const PoweredBy = dynamic(() => import("../components/home/PoweredBy"), {
	loading: () => (
		<section className="mt-16 min-h-[160px] md:mt-24 md:min-h-[200px]" aria-busy="true">
			<div className="mb-8 h-8 w-56 animate-pulse rounded-md bg-white/10 md:mb-12" />
			<div className="h-14 w-full animate-pulse rounded-md bg-white/5 md:h-16" />
		</section>
	),
});

const FAQ = dynamic(() => import("../components/home/Faq"), {
	loading: () => (
		<section className="mt-16 min-h-[22rem] md:mt-24 md:min-h-[28rem]" aria-busy="true">
			<div className="mb-6 h-9 w-40 animate-pulse rounded-md bg-white/10 md:mb-10 md:h-10" />
			<div className="h-64 w-full animate-pulse rounded-3xl bg-white/5 md:h-80" />
		</section>
	),
});

const WhySpaider = dynamic(() => import("../components/home/WhySpaider"), {
	loading: () => <div className="mt-16 min-h-[18rem] w-full animate-pulse rounded-[22px] bg-white/5 md:mt-24 md:min-h-[24rem]" aria-busy="true" />,
});

const Fleet = dynamic(() => import("../components/home/Fleet"), {
	loading: () => (
		<section className="mt-16 min-h-[24rem] md:mt-24 md:min-h-[30rem]" aria-busy="true">
			<div className="mb-8 h-10 w-72 max-w-full animate-pulse rounded-md bg-white/10 md:mb-12" />
			<div className="h-72 w-full animate-pulse rounded-md bg-white/5 md:h-96" />
		</section>
	),
});

const Agents = dynamic(() => import("../components/home/Agents"), {
	loading: () => (
		<section className="mt-16 min-h-[16rem] md:mt-24 md:min-h-[20rem]" aria-busy="true">
			<div className="mb-6 h-8 w-64 max-w-full animate-pulse rounded-md bg-white/10 md:mb-8" />
			<div className="h-56 w-full animate-pulse rounded-md bg-white/5 md:h-72" />
		</section>
	),
});

const GetStarted = dynamic(() => import("../components/home/GetStarted"), {
	loading: () => <div className="mt-20 min-h-[10rem] animate-pulse rounded-xl bg-white/5 md:mt-32 md:min-h-[12rem]" aria-busy="true" />,
});

const NextStep = dynamic(() => import("../components/home/NextStep"), {
	loading: () => (
		<section className="mt-20 min-h-[20rem] md:mt-32 md:min-h-[26rem]" aria-busy="true">
			<div className="mb-10 h-24 w-96 max-w-full animate-pulse rounded-md bg-white/10 md:h-36" />
			<div className="h-48 w-full animate-pulse rounded-md bg-white/5" />
		</section>
	),
});

export default function Home() {
	return (
		// Homepage-scoped accent override: cyan (source's palette) instead of the
		// site-wide blue. Everything below using text-accent/bg-accent/var(--color-accent)
		// picks it up via CSS custom-property inheritance.
		<div className="w-full min-w-0" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}>
			{/* Hero is full-bleed - uses negative margins to escape layout padding */}
			<Hero />

			{/* Trusted-by marquee - its own section, directly below the hero */}
			<TrustedBy />

			{/* Remaining sections: full-bleed, no max-width cap - edge padding scales with
			    viewport via --spx-gutter instead of centering content in a fixed column.
			    clip, not hidden - "hidden" would make this a scroll container and break
			    position:sticky for descendants (e.g. GetStarted's pinned section). */}
			<div className="overflow-x-clip">
				<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)]" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
					{/* Agents handles its own internal per-element animations */}
					<Agents />
					<Fleet />
					<Reveal variant="fade-right">
						<WhySpaider subtitle="Sovereign by design, traceable by default, and built for aerospace from the start." />
					</Reveal>
					<GetStarted />
					<Reveal variant="fade-up">
						<PoweredBy />
					</Reveal>
					<Reveal variant="scale">
						<FAQ />
					</Reveal>
					<NextStep />
				</div>
			</div>
		</div>
	);
}
