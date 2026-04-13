"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CeramicButton from "../ui/button";

type Logo = { src: string; alt: string; scale?: number };
type MarqueeLogo = Logo & { dup: 0 | 1 };

const LOGOS: Logo[] = [
	{ src: "/trusted/esa.svg", alt: "ESA", scale: 0.5 },
	{ src: "/trusted/technoport.svg", alt: "Technoport", scale: 0.6 },
	{ src: "/trusted/mirores.svg", alt: "Mirores", scale: 0.7 },
	{ src: "/trusted/esric.png", alt: "ESRIC", scale: 0.6 },
	{ src: "/trusted/ses.png", alt: "SES", scale: 1.5 },
	{ src: "/trusted/ohb.png", alt: "OHB", scale: 0.5 },
];

const MARQUEE_LOGOS: MarqueeLogo[] = [
	...LOGOS.map((l) => ({ ...l, dup: 0 as const })),
	...LOGOS.map((l) => ({ ...l, dup: 1 as const })),
];

// ─── Animation constants ──────────────────────────────────────────────────────
// Expo-out easing — Emil Kowalski's preferred curve for cinematic UI
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

/** Outer content container: staggers h1 block → sub-headline → CTAs */
const heroContainer = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.18,
			delayChildren: 0.1,
		},
	},
};

/** h1 wrapper: staggers the three headline lines */
const headlineContainer = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.09 },
	},
};

/** Each headline line: blur + fade + lift — feels like a sensor acquiring lock */
const headlineLine = {
	hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.85, ease: EASE_EXPO },
	},
};

/** Sub-headline and CTA row: clean fade + lift, no blur */
const heroItem = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, ease: EASE_EXPO },
	},
};
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
	return (
		<section
			className="relative flex min-h-screen flex-col overflow-hidden bg-black"
			style={{
				marginTop: "-7rem",
				marginLeft: "-1rem",
				marginRight: "-1rem",
				width: "calc(100% + 2rem)",
			}}
		>
			{/* ── Background image ── */}
			<Image
				src="/space.png"
				alt=""
				fill
				priority
				className="object-cover object-[center_-10%]"
				sizes="100vw"
			/>

			{/* Dark base overlay */}
			<div className="absolute inset-0 bg-black/50" aria-hidden />

			{/* Top gradient - keeps the floating navbar readable */}
			<div
				className="pointer-events-none absolute left-0 right-0 top-0 h-52"
				aria-hidden
				style={{
					background:
						"linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.38) 55%, transparent 100%)",
				}}
			/>

			{/* ── Hero content ── */}
			<motion.div
				className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-36 pb-10 text-center"
				variants={heroContainer}
				initial="hidden"
				animate="show"
			>
				{/* Headline — three lines stagger in with blur-to-sharp */}
				<motion.h1
					variants={headlineContainer}
					className="font-outfit font-medium leading-[1] tracking-[-0.025em] text-white"
					style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)", maxWidth: "16ch" }}
				>
					<motion.span variants={headlineLine} style={{ display: "block" }}>
						Sovereign AI
					</motion.span>
					<motion.span variants={headlineLine} style={{ display: "block" }}>
						Operating Layer
					</motion.span>
					<motion.span variants={headlineLine} style={{ display: "block" }}>
						for{" "}
						<span className="hero-illuminated-word">Aerospace Teams</span>
					</motion.span>
				</motion.h1>

				{/* Sub-headline */}
				<motion.p
					variants={heroItem}
					className="mt-7 text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
					style={{ maxWidth: "52ch" }}
				>
					Deploy domain-expert AI models and agents in your workflows - securely,
					compliantly, mission-ready from day one.
				</motion.p>

				{/* CTA row */}
				<motion.div
					variants={heroItem}
					className="mt-10 flex flex-wrap items-center justify-center gap-4"
				>
					<CeramicButton
						href="/request-demo"
						color="#ffffff"
						textColor="#0a0a0b"
						ringColor="rgba(255,255,255,0.22)"
						borderRadius={8}
						padding="11px 24px"
						fontSize={13}
					>
						Request a Demo
					</CeramicButton>
					<CeramicButton
						href="/our-tech"
						color="rgba(255,255,255,0.05)"
						textColor="#ffffff"
						ringColor="rgba(255,255,255,0.14)"
						borderRadius={8}
						padding="11px 24px"
						fontSize={13}
					>
						Explore Our Tech
					</CeramicButton>
				</motion.div>
			</motion.div>

			{/* ── Trusted-by strip — fades in after the main content settles ── */}
			<motion.div
				className="relative z-10 w-full pb-14 pt-2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
			>
				<p className="mb-6 text-center font-montserrat text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
					Trusted by industry leaders
				</p>

				<section
					className="relative mx-auto w-full min-w-0 overflow-hidden"
					aria-label="Trusted by logo carousel"
					style={{
						WebkitMaskImage:
							"linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
						maskImage:
							"linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
					}}
				>
					<div className="hero-marquee-track flex w-max items-center gap-x-6 sm:gap-x-10 md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
						{MARQUEE_LOGOS.map(({ src, alt, scale, dup }) => (
							<div
								key={`${src}-${alt}-${dup}`}
								className="flex w-[132px] shrink-0 items-center justify-center sm:w-[160px] md:w-[180px] lg:w-[200px]"
							>
								<div
									className="flex items-center justify-center"
									style={{ transform: `scale(${scale ?? 1})`, transformOrigin: "center" }}
								>
									<Image
										src={src}
										alt={alt}
										width={360}
										height={120}
										sizes="(max-width: 640px) 160px, 200px"
										className="h-9 w-auto object-contain brightness-0 invert opacity-35 transition-opacity duration-300 hover:opacity-65 sm:h-10 md:h-11"
										decoding="async"
									/>
								</div>
							</div>
						))}
					</div>
				</section>

				<style jsx>{`
          @keyframes heroMarquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .hero-marquee-track {
            animation: heroMarquee 60s linear infinite;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-marquee-track { animation: none; }
          }
        `}</style>
			</motion.div>
		</section>
	);
}
