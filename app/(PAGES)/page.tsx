import dynamic from "next/dynamic";
import Reveal from "../components/ui/reveal";
import Hero from "../components/home/Hero";

const PoweredBy = dynamic(() => import("../components/home/PoweredBy"), {
	loading: () => (
		<section className="mt-16 min-h-[160px] md:mt-24 md:min-h-[200px]" aria-busy="true">
			<div className="mb-8 h-8 w-56 animate-pulse rounded-md bg-white/10 md:mb-12" />
			<div className="h-14 w-full animate-pulse rounded-md bg-white/5 md:h-16" />
		</section>
	),
});

const Testimonials = dynamic(() => import("../components/home/Testimonials"), {
	loading: () => (
		<section className="mt-16 min-h-[18rem] md:mt-24 md:min-h-[22rem]" aria-busy="true">
			<div className="mb-8 h-8 w-64 animate-pulse rounded-md bg-white/10 md:mb-12" />
			<div className="h-40 w-full animate-pulse rounded-md bg-white/5 md:h-52" />
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

const SecurityCompliance = dynamic(() => import("../components/home/SecurityCompliance"), {
	loading: () => (
		<section className="relative min-h-[18rem] pt-8 pb-12 md:min-h-[22rem] md:pt-30 md:pb-16" aria-busy="true">
			<div className="h-full min-h-[14rem] w-full animate-pulse rounded-[24px] bg-white/5 md:min-h-[18rem]" />
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

const CtaPanel = dynamic(() => import("../components/CtaPanel"), {
	loading: () => <div className="mx-auto mt-20 min-h-[12rem] w-full max-w-420 animate-pulse rounded-2xl bg-white/5 md:mt-32 md:min-h-[14rem]" aria-busy="true" />,
});

export default function Home() {
	return (
		<div className="w-full min-w-0">
			{/* Hero is full-bleed - uses negative margins to escape layout padding */}
			<Hero />

			{/* Remaining sections: max-width container prevents over-stretching on large screens */}
			<div className="overflow-x-hidden">
				<div className="mx-auto w-full max-w-7xl">
					{/* Agents handles its own internal per-element animations */}
					<Agents />
					<Reveal variant="fade-right">
						<WhySpaider />
					</Reveal>
					<Reveal variant="zoom" threshold={0.25}>
						<SecurityCompliance />
					</Reveal>
					<GetStarted />
					<Reveal variant="fade-up">
						<PoweredBy />
					</Reveal>
					<Reveal variant="fade-up">
						<Testimonials />
					</Reveal>
					<Reveal variant="scale">
						<FAQ />
					</Reveal>
					<Reveal variant="scale">
						<CtaPanel title="Got a use case in mind? Let's make it real." ctaHref="/book-demo" ctaLabel="Talk to us" />
					</Reveal>
				</div>
			</div>
		</div>
	);
}
