import type { Metadata } from "next";
import Image from "next/image";
import CtaPanel from "@/app/components/CtaPanel";
import IntegrationsGallery from "@/app/components/our-tech/IntegrationsGallery";
import AnimatedHeader from "@/app/components/our-tech/AnimatedHeader";
import AnimatedCardText from "@/app/components/our-tech/AnimatedCardText";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Our Tech - SPAIDER",
	description: "European-sovereign AI infrastructure for aerospace - platform architecture, security, and deployment.",
};

type Sec = {
	title: string;
	subtitle: string;
	body: string;
	img: string;
};

const SECTIONS: Sec[] = [
	{
		title: "AI that knows aerospace",
		subtitle: "Understands physics, standards, and mission workflows",
		body: "Built with aerospace knowledge from day one. SPAIDER keeps your terminology, constraints, and context so answers are accurate, cited, and useful across design, test, and operations. Teams get reliable support without changing how they work.",
		img: "/tech/infotech1.svg?v=2",
	},
	{
		title: "Adopt AI step by step",
		subtitle: "Start with your data. Add agents when ready",
		body: "First we set up a secure retrieval layer (RAG) over your documents and tools. Then we plug in ready-made agents for high-value tasks (like RFP analysis). When you need more, you customise and orchestrate on the same base-no rework, no new pipelines.",
		img: "/tech/infotech2.svg",
	},
	{
		title: "You choose where it runs",
		subtitle: "EU cloud or on-prem. Full audit and access control",
		body: "The stack is modular and containerised. Run in your VPC or inside your network, even in isolated environments. You keep control of data, identities, permissions, and logs-with clean integration into your existing systems and no vendor lock-in.",
		img: "/tech/infotech3.svg",
	},
	{
		title: "Decide faster, with less risk",
		subtitle: "Clean inputs. Clear answers. With sources",
		body: "Agents handle ingestion and retrieval, then return answers with sources and history. Less time searching and formatting; more time on design, safety, and delivery. Consistent, repeatable outputs your teams can stand behind.",
		img: "/tech/infotech4.svg",
	},
];

export default function OurTechPage() {
	return (
		<div className="min-w-0 mx-auto w-full max-w-7xl">
			<AnimatedHeader />

			<main className="relative min-w-0 text-foreground">
				{/* 4 repeated sections */}
				<section className="mx-auto w-full min-w-0 max-w-5xl space-y-5 sm:space-y-6 md:space-y-8">
					{SECTIONS.map((s, i) => {
						const isSvg = s.img.toLowerCase().endsWith(".svg");
						return (
							<article key={s.title} className="grid min-w-0 grid-cols-1 items-stretch gap-4 rounded-xl border border-border-card bg-card p-4 shadow-sm sm:gap-5 sm:p-5 md:grid-cols-2 md:gap-6 md:p-5">
								{/* Image left */}
								<Reveal variant={i % 2 === 0 ? "fade-right" : "fade-left"} threshold={0.25} className="relative min-w-0 overflow-hidden rounded-lg border border-border/70 bg-background/40 sm:rounded-xl">
									<div
										aria-hidden
										className="absolute inset-0 z-0"
										style={{
											background: `
                        radial-gradient(900px 450px at 15% 10%, rgba(78,167,252,0.14), transparent 60%),
                        radial-gradient(800px 400px at 90% 20%, rgba(0,112,192,0.12), transparent 60%),
                        linear-gradient(180deg, rgba(15,16,17,0.55), rgba(8,9,10,0.45))
                      `,
										}}
									/>

									{/* Image layer */}
									{isSvg ? (
										<div
											className="relative z-10 aspect-4/3 bg-center bg-no-repeat md:aspect-3/2"
											style={{
												backgroundImage: `url(${s.img})`,
												backgroundSize: i === 0 ? "110% auto" : "cover",
												backgroundBlendMode: "normal",
												filter: "none",
											}}
											aria-label={s.title}
											role="img"
										/>
									) : (
										<div className="relative z-10 aspect-4/3 md:aspect-3/2">
											<Image src={s.img} alt={s.title} fill className="object-cover" sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 512px" priority={i === 0} quality={80} />
										</div>
									)}
								</Reveal>

								{/* Text right panel */}
								<AnimatedCardText title={s.title} subtitle={s.subtitle} body={s.body} />
							</article>
						);
					})}
				</section>

				<Reveal variant="fade-up" threshold={0.2}>
					<IntegrationsGallery />
				</Reveal>

				{/* CTA PANEL (BEFORE FOOTER) */}
				<Reveal variant="scale" threshold={0.25} className="mt-12 sm:mt-16 md:mt-20">
					<CtaPanel title="Got a use case in mind? Let's make it real." copy="Our team of AI experts is just a call away. Whether you're exploring ideas or ready to build, we'll help you bring your AI agent to life - faster." ctaHref="/book-demo" ctaLabel="Talk to us" />
				</Reveal>
			</main>
		</div>
	);
}
