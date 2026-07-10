"use client";

import { Braces, Briefcase, CalendarCheck, ChevronLeft, ChevronRight, Network } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import Reveal from "../ui/reveal";

interface Card {
	id: number;
	texture: string;
	title: string;
	description: string;
	prompt: string;
	Icon: React.ElementType;
}

const initialCards: Card[] = [
	{
		id: 1,
		texture: "/textures/1.png",
		title: "Business Development",
		description: "Search contracts, proposals, and internal records to track pipeline, renewals, and next actions.",
		prompt: "Which contracts renew in the next 30 days, what is blocked, and what needs action?",
		Icon: Briefcase,
	},
	{
		id: 2,
		texture: "/textures/2.png",
		title: "Engineering",
		description: "Query repositories, logs, and technical records across subsystems with context.",
		prompt: "Show open telemetry issues and the most recent related commits.",
		Icon: Braces,
	},
	{
		id: 3,
		texture: "/textures/3.png",
		title: "Project Management",
		description: "Connect planning and reporting data to generate structured status updates and risk summaries.",
		prompt: "Draft this week's project update with key risks, mitigations, and schedule changes.",
		Icon: CalendarCheck,
	},
	{
		id: 4,
		texture: "/textures/4.png",
		title: "Systems Engineering",
		description: "Explore requirements, interfaces, and verification links with traceable context.",
		prompt: "For this requirement, show linked tests, status, and impacted interfaces.",
		Icon: Network,
	},
];

const SPRING = { type: "spring" as const, stiffness: 170, damping: 26 };
const CARD_OFFSET = 10;
const SCALE_STEP = 0.06;
const DIM_STEP = 0.15;
const BORDER_RADIUS = 12;
const SWIPE_THRESHOLD = 50;

export default function UseCases() {
	const [cards, setCards] = useState<Card[]>(initialCards);
	const [dragDirection, setDragDirection] = useState<"up" | "down" | null>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const dragY = useMotionValue(0);
	const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);

	const moveToEnd = () => {
		setCards((prev) => [...prev.slice(1), prev[0]]);
		setCurrentIndex((prev) => (prev + 1) % initialCards.length);
	};

	const moveToStart = () => {
		setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
		setCurrentIndex((prev) => (prev - 1 + initialCards.length) % initialCards.length);
	};

	const handleDragEnd = (_: unknown, info: { velocity: { y: number }; offset: { y: number } }) => {
		const { velocity, offset } = info;
		if (Math.abs(offset.y) > SWIPE_THRESHOLD || Math.abs(velocity.y) > 500) {
			if (offset.y < 0 || velocity.y < 0) {
				setDragDirection("up");
				setTimeout(() => {
					moveToEnd();
					setDragDirection(null);
				}, 150);
			} else {
				setDragDirection("down");
				setTimeout(() => {
					moveToStart();
					setDragDirection(null);
				}, 150);
			}
		}
		dragY.set(0);
	};

	return (
		<section className="w-full min-w-0 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
			<Reveal as="h2" variant="fade-up" threshold={0.35} className="font-outfit text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
				Example workflows
			</Reveal>

			<Reveal as="p" variant="fade-up" threshold={0.35} delayMs={60} className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">
				See how teams can use SPAIDER Foundations across business and technical operations.
			</Reveal>

			<div className="mt-10 flex flex-col items-center gap-5">
				{/* Nav + card stack row */}
				<div className="relative flex w-full items-center justify-center">
					<motion.button onClick={moveToStart} className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black p-3 transition-colors duration-200 cursor-pointer hover:bg-white/5 hidden sm:flex" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Previous card">
						<ChevronLeft className="h-5 w-5 text-muted" />
					</motion.button>

					<motion.button onClick={moveToEnd} className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black p-3 transition-colors duration-200 cursor-pointer hover:bg-white/5 hidden sm:flex" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Next card">
						<ChevronRight className="h-5 w-5 text-muted" />
					</motion.button>

					{/* Card stack */}
					<div className="relative z-10 w-full max-w-sm sm:max-w-lg h-[300px] sm:h-auto sm:aspect-[16/10] overflow-visible">
						<ul className="relative m-0 h-full w-full p-0 mt-8 sm:mt-16">
							<AnimatePresence>
								{cards.map(({ id, texture, title, description, prompt, Icon }, i) => {
									const isFront = i === 0;
									return (
										<motion.li
											key={id}
											className="absolute h-full w-full list-none overflow-hidden border border-white/[0.12] bg-white/[0.06] backdrop-blur-xl"
											style={{
												borderRadius: BORDER_RADIUS,
												cursor: isFront ? "grab" : "auto",
												touchAction: "none",
												boxShadow: isFront ? "0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)" : "0 15px 30px rgba(0,0,0,0.3)",
												rotateX: isFront ? rotateX : 0,
												transformPerspective: 1000,
											}}
											animate={{
												top: `${i * -CARD_OFFSET}%`,
												scale: 1 - i * SCALE_STEP,
												filter: `brightness(${Math.max(0.3, 1 - i * DIM_STEP)})`,
												zIndex: cards.length - i,
												opacity: dragDirection && isFront ? 0 : 1,
											}}
											exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
											transition={SPRING}
											drag={isFront ? "y" : false}
											dragConstraints={{ top: 0, bottom: 0 }}
											dragElastic={0.7}
											onDrag={(_, info) => {
												if (isFront) dragY.set(info.offset.y);
											}}
											onDragEnd={handleDragEnd}
											whileDrag={isFront ? { zIndex: cards.length + 1, cursor: "grabbing", scale: 1.05 } : {}}
										>
											{/* Subtle texture grain */}
											<img src={texture} alt="" aria-hidden="true" draggable={false} className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-[0.06] mix-blend-overlay" />

											<div className="relative flex h-full flex-col p-4 sm:p-6">
												{/* Icon */}
												<Icon className="h-5 w-5 text-accent" />

												{/* Title + description */}
												<div className="mt-5">
													<h3 className="font-outfit text-lg sm:text-xl font-medium leading-snug text-foreground">{title}</h3>
													<p className="mt-2 text-sm leading-6 text-muted">{description}</p>
												</div>

												{/* Prompt box */}
												<div className="mt-6 rounded-lg bg-black/20 p-3 ring-1 ring-white/[0.10] backdrop-blur-sm">
													<p className="font-montserrat text-[0.65rem] font-medium uppercase tracking-[0.12em] text-accent">Prompt</p>
													<p className="mt-1.5 text-xs sm:text-sm italic leading-5 sm:leading-6 text-foreground/75">"{prompt}"</p>
												</div>
											</div>
										</motion.li>
									);
								})}
							</AnimatePresence>
						</ul>
					</div>
				</div>
				{/* end nav + stack row */}

				{/* Progress dots */}
				<div className="flex flex-col items-center gap-2">
					<div className="flex gap-2">
						{initialCards.map((_, i) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: initialCards is a static, fixed-length list of progress dots
							<motion.div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex % initialCards.length ? "w-8 bg-white" : "w-1.5 bg-white/20"}`} whileHover={{ scale: 1.2 }} />
						))}
					</div>
					<p className="text-xs text-muted/40 sm:hidden">Swipe to browse</p>
				</div>
			</div>
			{/* end flex col */}
		</section>
	);
}
