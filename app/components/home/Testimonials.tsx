const TESTIMONIALS = [
	{
		quote: "SAGAN has transformed how we handle proposal workflows. What used to take our team weeks now takes days, and the quality of our technical responses has measurably improved across the board.",
		name: "Thomas Richter",
		title: "Head of Proposal Management",
		company: "Airbus Defence & Space",
		initials: "TR",
	},
	{
		quote: "The sovereign data guarantee was the deciding factor for us. We simply cannot send sensitive mission data to US cloud providers. SPAIDER made AI deployment viable for our entire team.",
		name: "Dr. Lena Fischer",
		title: "Chief Technology Officer",
		company: "OHB Digital Solutions",
		initials: "LF",
	},
	{
		quote: "SPAIDER's AI understands aerospace constraints in a way generic models simply don't. It's like having a domain expert on call 24/7, one that actually knows what ECSS compliance means.",
		name: "James Hartley",
		title: "Program Director",
		company: "Surrey Satellite Technology",
		initials: "JH",
	},
	{
		quote: "We piloted SAGAN on three ESA tender submissions. The structured output alone saved us over 40 hours per proposal, and the win rate on those bids improved significantly.",
		name: "Marco Pellegrini",
		title: "Business Development Director",
		company: "Thales Alenia Space",
		initials: "MP",
	},
	{
		quote: "Finally an AI platform that understands our domain. Onboarding was seamless and the SPAIDER team was hands-on throughout. We were generating real value within the first two weeks.",
		name: "Andreea Constantin",
		title: "Chief Technology Officer",
		company: "Astrocast",
		initials: "AC",
	},
	{
		quote: "The accuracy of SAGAN on technical documentation tasks is remarkable. Our engineers trust its outputs in a way they never trusted generic LLMs. It's a fundamentally different product.",
		name: "Dr. Sophia Müller",
		title: "Systems Engineering Lead",
		company: "European Space Agency",
		initials: "SM",
	},
	{
		quote: "We needed AI that could operate inside our infrastructure, not call home to a third-party server. SPAIDER was the only vendor that could deliver that without compromising on capability.",
		name: "Rafael Torres",
		title: "VP Engineering",
		company: "GMV Aerospace",
		initials: "RT",
	},
	{
		quote: "Switching our proposal team to SPAIDER was one of the best decisions we made this year. The time savings are real, but the confidence it gives our junior engineers is the bigger win.",
		name: "Nina Brandt",
		title: "Director of Operations",
		company: "Ruag Space",
		initials: "NB",
	},
] as const;

function TestimonialCard({ quote, name, title, company, initials }: (typeof TESTIMONIALS)[number]) {
	return (
		<li className="w-[320px] shrink-0 md:w-[380px]">
			<div
				className="flex h-full flex-col justify-between rounded-xs border border-white/[0.07] border-b-0 px-6 py-5"
				style={{
					background: "linear-gradient(180deg, rgba(80,80,80,0.13) 0%, rgba(0,0,0,0) 70%)",
				}}
			>
				{/* Quote */}
				<p className="text-sm leading-[1.7] text-muted/80">&ldquo;{quote}&rdquo;</p>

				{/* Author */}
				<div className="mt-5 flex items-center gap-3">
					<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] border border-white/[0.10]">
						<span className="font-montserrat text-[10px] font-medium uppercase tracking-wide text-foreground/70">{initials}</span>
					</div>
					<div className="min-w-0">
						<p className="truncate text-sm font-medium leading-none text-foreground/90 font-montserrat">{name}</p>
						<p className="mt-1 truncate text-[11px] leading-none text-muted/60">
							{title}, {company}
						</p>
					</div>
				</div>
			</div>
		</li>
	);
}

export default function Testimonials() {
	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<h2 className="spx-heading mb-10 text-foreground md:mb-12">
				Trusted by <span className="spx-grad-text">aerospace teams</span>
			</h2>

			{/* Carousel - bleeds to viewport edge regardless of any ancestor max-width container */}
			<div
				className="group relative overflow-hidden"
				style={{
					marginLeft: "calc(50% - 50vw)",
					marginRight: "calc(50% - 50vw)",
					width: "100vw",
					WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
					maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
				}}
			>
				<div className="flex cursor-grab items-start active:cursor-grabbing">
					{/* Track duplicated twice for seamless infinite loop */}
					{([0, 1] as const).map((dup) => (
						<ul key={dup} aria-hidden={dup === 1} className="testimonials-scroll group-hover:[animation-play-state:paused] flex shrink-0 items-start gap-4 px-2">
							{TESTIMONIALS.map((t) => (
								<TestimonialCard key={`${dup}-${t.name}`} {...t} />
							))}
						</ul>
					))}
				</div>
			</div>
		</section>
	);
}
