
"use client";


import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Braces, Briefcase, CalendarCheck, ChevronLeft, ChevronRight, Network } from "lucide-react";
import { useState } from 'react';
import Reveal from '../ui/reveal';

interface Card {
	id: number;
	src: string;
	alt: string;
	title: string;
	description: string;
	prompt: string;
	Icon: React.ElementType;
}

export default function UseCases() {

	const initialCards: Card[] = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
			alt: "Business Development",
			title: "Business Development",
			description: "Search contracts, proposals, and internal records to track pipeline, renewals, and next actions.",
			prompt: "Which contracts renew in the next 30 days, what is blocked, and what needs action?",
			Icon: Briefcase,
		},
		{
			id: 2,
			src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop",
			alt: "Engineering",
			title: "Engineering",
			description: "Query repositories, logs, and technical records across subsystems with context.",
			prompt: "Show open telemetry issues and the most recent related commits.",
			Icon: Braces,
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
			alt: "Project Management",
			title: "Project Management",
			description: "Connect planning and reporting data to generate structured status updates and risk summaries.",
			prompt: "Draft this week’s project update with key risks, mitigations, and schedule changes.",
			Icon: CalendarCheck,
		},
		{
			id: 4,
			src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop",
			alt: "Systems Engineering",
			title: "Systems Engineering",
			description: "Explore requirements, interfaces, and verification links with traceable context.",
			prompt: "For this requirement, show linked tests, status, and impacted interfaces.",
			Icon: Network,
		}
	];

	const [cards, setCards] = useState<Card[]>(initialCards);
	const isDark = true;
	const [dragDirection, setDragDirection] = useState<'up' | 'down' | null>(null);
	const [showInfo] = useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);

	const dragY = useMotionValue(0);
	const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);

	// Configuration
	const offset = 10;
	const scaleStep = 0.06;
	const dimStep = 0.15;
	const stiff = 170;
	const damp = 26;
	const borderRadius = 12;
	const swipeThreshold = 50;

	const spring = {
		type: 'spring' as const,
		stiffness: stiff,
		damping: damp
	};

	const moveToEnd = () => {
		setCards(prev => [...prev.slice(1), prev[0]]);
		setCurrentIndex((prev) => (prev + 1) % initialCards.length);
	};

	const moveToStart = () => {
		setCards(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
		setCurrentIndex((prev) => (prev - 1 + initialCards.length) % initialCards.length);
	};

	const handleDragEnd = (_: any, info: any) => {
		const velocity = info.velocity.y;
		const offset = info.offset.y;

		if (Math.abs(offset) > swipeThreshold || Math.abs(velocity) > 500) {
			if (offset < 0 || velocity < 0) {
				setDragDirection('up');
				setTimeout(() => {
					moveToEnd();
					setDragDirection(null);
				}, 150);
			} else {
				setDragDirection('down');
				setTimeout(() => {
					moveToStart();
					setDragDirection(null);
				}, 150);
			}
		}
		dragY.set(0);
	};

	// Theme configuration
	const theme = {
		dark: {
			bg: 'bg-gradient-to-br from-gray-900 via-black to-gray-900',
			text: 'text-white',
			textSecondary: 'text-gray-400',
			toggleBg: 'bg-gray-800/80 hover:bg-gray-700/80',
			toggleBorder: 'border-gray-700',
			infoBox: 'bg-gray-900/90 border-gray-700',
			shadowCard: '0 25px 50px rgba(0, 0, 0, 0.7)',
			shadowCardBack: '0 15px 30px rgba(0, 0, 0, 0.4)',
			cardBorder: 'border-2 border-gray-700',
			controlBg: 'bg-gray-800/80 hover:bg-gray-700/80',
			cardInfoBg: 'bg-gradient-to-t from-black/80 to-transparent'
		},
		light: {
			bg: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
			text: 'text-gray-900',
			textSecondary: 'text-gray-600',
			toggleBg: 'bg-white/80 hover:bg-gray-100/80',
			toggleBorder: 'border-gray-300',
			infoBox: 'bg-white/90 border-gray-300',
			shadowCard: '0 25px 50px rgba(0, 0, 0, 0.15)',
			shadowCardBack: '0 15px 30px rgba(0, 0, 0, 0.08)',
			cardBorder: 'border-2 border-gray-300',
			controlBg: 'bg-white/80 hover:bg-gray-100/80',
			cardInfoBg: 'bg-gradient-to-t from-white/90 to-transparent'
		}
	};

	const currentTheme = isDark ? theme.dark : theme.light;

	return (
		<>
			<Reveal as="h2" variant="fade-up" threshold={0.35} className="mb-2 font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
				Example workflows
			</Reveal>

			<Reveal as="p" variant="fade-up" threshold={0.35} delayMs={60} className="mt-0 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
				See how teams can use SPAIDER Foundations across business and technical operations.
			</Reveal>
			<div className={`w-full py-16 flex items-center justify-center transition-all duration-500 relative overflow-hidden`}>
				{/* Navigation Buttons */}
				<motion.button
					onClick={moveToStart}
					className={`absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full ${currentTheme.controlBg} border ${currentTheme.toggleBorder} backdrop-blur-sm transition-colors duration-200 z-20`}
					whileHover={{ scale: 1.1, x: -5 }}
					whileTap={{ scale: 0.9 }}
				>
					<ChevronLeft className={`w-6 h-6 ${currentTheme.text}`} />
				</motion.button>

				<motion.button
					onClick={moveToEnd}
					className={`absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full ${currentTheme.controlBg} border ${currentTheme.toggleBorder} backdrop-blur-sm transition-colors duration-200 z-20`}
					whileHover={{ scale: 1.1, x: 5 }}
					whileTap={{ scale: 0.9 }}
				>
					<ChevronRight className={`w-6 h-6 ${currentTheme.text}`} />
				</motion.button>

				{/* Card Stack Container */}
				<div className="relative w-lg aspect-video overflow-visible z-10">
					<ul className="relative w-full h-full m-0 p-0">
						<AnimatePresence>
							{cards.map(({ id, src, alt, title, description, prompt, Icon }, i) => {
								const isFront = i === 0;
								const brightness = Math.max(0.3, 1 - i * dimStep);
								const baseZ = cards.length - i;

								return (
									<motion.li
										key={id}
										className={`absolute w-full h-full list-none overflow-hidden ${currentTheme.cardBorder}`}
										style={{
											borderRadius: `${borderRadius}px`,
											cursor: isFront ? 'grab' : 'auto',
											touchAction: 'none',
											boxShadow: isFront
												? currentTheme.shadowCard
												: currentTheme.shadowCardBack,
											rotateX: isFront ? rotateX : 0,
											transformPerspective: 1000
										}}
										animate={{
											top: `${i * -offset}%`,
											scale: 1 - i * scaleStep,
											filter: `brightness(${brightness})`,
											zIndex: baseZ,
											opacity: dragDirection && isFront ? 0 : 1
										}}
										exit={{
											opacity: 0,
											scale: 0.8,
											transition: { duration: 0.2 }
										}}
										transition={spring}
										drag={isFront ? 'y' : false}
										dragConstraints={{ top: 0, bottom: 0 }}
										dragElastic={0.7}
										onDrag={(_, info) => {
											if (isFront) {
												dragY.set(info.offset.y);
											}
										}}
										onDragEnd={handleDragEnd}
										whileDrag={
											isFront
												? {
													zIndex: cards.length + 1,
													cursor: 'grabbing',
													scale: 1.05,
												}
												: {}
										}
									>
										<img
											src={src}
											alt={alt}
											className="w-full h-full object-cover pointer-events-none select-none"
											draggable={false}
										/>

										{/* Card Info Overlay */}
										<motion.div
											className={`absolute bottom-0 left-0 right-0 p-4 ${currentTheme.cardInfoBg}`}
											initial={{ opacity: 0, y: 20 }}
											animate={{
												opacity: isFront && showInfo ? 1 : 0,
												y: isFront && showInfo ? 0 : 20
											}}
											transition={{ duration: 0.2 }}
										>
											<div className="flex items-start gap-3">
												<div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black/25 ring-1 ring-white/15 backdrop-blur">
													<Icon className="h-5 w-5 text-white/90" />
												</div>

												<div className="min-w-0">
													<h3 className="text-white font-semibold text-base sm:text-lg leading-snug">
														{title}
													</h3>
													<p className="mt-1 text-white/80 text-sm leading-6">
														{description}
													</p>
												</div>
											</div>

											<div className="mt-3 rounded-lg bg-black/20 p-2.5 ring-1 ring-white/10 backdrop-blur">
												<p className="text-[0.72rem] font-semibold tracking-wide text-white/75">
													PROMPT
												</p>
												<p className="mt-1 text-white/90 text-sm italic leading-6">
													“{prompt}”
												</p>
											</div>
										</motion.div>
									</motion.li>
								);
							})}
						</AnimatePresence>
					</ul>
				</div>

				{/* Progress Indicator */}
				<div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
					{initialCards.map((_, i) => (
						<motion.div
							key={i}
							className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex % initialCards.length
								? `${isDark ? 'bg-white' : 'bg-gray-900'} w-8`
								: `${isDark ? 'bg-gray-700' : 'bg-gray-300'} w-1.5`
								}`}
							whileHover={{ scale: 1.2 }}
						/>
					))}
				</div>

			</div>

		</>
	);
}