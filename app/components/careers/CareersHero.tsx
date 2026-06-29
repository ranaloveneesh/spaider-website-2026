"use client";
import { motion } from "motion/react";
import Image from "next/image";
import CeramicButton from "@/app/components/ui/button";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const headingVar = {
	hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.85, ease: EASE_EXPO },
	},
};

const fadeVar = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: EASE_EXPO },
	},
};

export default function CareersHero() {
	return (
		<motion.header
			className="relative isolate flex min-h-[46vh] flex-col items-center justify-center py-16 text-center md:min-h-[54vh]"
			variants={container}
			initial="hidden"
			animate="show"
		>
			{/* ── Background decoration ── */}

			{/* Dot grid with radial fade at edges */}
			<div
				className="pointer-events-none absolute inset-0 select-none"
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
					backgroundSize: "32px 32px",
					WebkitMaskImage:
						"radial-gradient(ellipse 75% 90% at 50% 50%, black 20%, transparent 100%)",
					maskImage:
						"radial-gradient(ellipse 75% 90% at 50% 50%, black 20%, transparent 100%)",
				}}
				aria-hidden
			/>

			{/* Accent radial glow - center */}
			<div
				className="pointer-events-none absolute rounded-full"
				style={{
					width: 520,
					height: 520,
					top: "50%",
					left: "50%",
					marginTop: -260,
					marginLeft: -260,
					background:
						"radial-gradient(circle, color-mix(in srgb, var(--color-accent) 15%, transparent) 0%, transparent 65%)",
				}}
				aria-hidden
			/>

			{/* Orbit ring - outer (clockwise) */}
			<motion.div
				className="pointer-events-none absolute rounded-full"
				style={{
					width: 440,
					height: 440,
					top: "50%",
					left: "50%",
					marginTop: -220,
					marginLeft: -220,
					border: "1px solid rgba(29, 99, 232, 0.14)",
				}}
				animate={{ rotate: 360 }}
				transition={{ duration: 35, ease: "linear", repeat: Infinity }}
				aria-hidden
			>
				<span
					className="absolute -top-[4px] left-1/2 -ml-[4px] block h-2 w-2 rounded-full bg-accent"
					style={{
						boxShadow:
							"0 0 8px var(--color-accent), 0 0 20px color-mix(in srgb, var(--color-accent) 55%, transparent)",
					}}
				/>
			</motion.div>

			{/* Orbit ring - inner (counter-clockwise) */}
			<motion.div
				className="pointer-events-none absolute rounded-full"
				style={{
					width: 290,
					height: 290,
					top: "50%",
					left: "50%",
					marginTop: -145,
					marginLeft: -145,
					border: "1px solid rgba(29, 99, 232, 0.22)",
				}}
				animate={{ rotate: -360 }}
				transition={{ duration: 22, ease: "linear", repeat: Infinity }}
				aria-hidden
			>
				<span
					className="absolute -top-[3px] left-1/2 -ml-[3px] block h-[6px] w-[6px] rounded-full"
					style={{
						background: "color-mix(in srgb, var(--color-accent) 90%, white)",
						boxShadow:
							"0 0 6px var(--color-accent), 0 0 14px color-mix(in srgb, var(--color-accent) 45%, transparent)",
					}}
				/>
			</motion.div>

			{/* Logo - ghosted, slow breathing */}
			<motion.div
				className="pointer-events-none absolute select-none"
				style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
				animate={{ opacity: [0.1, 0.16, 0.1], scale: [1, 1.04, 1] }}
				transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
				aria-hidden
			>
				<Image
					src="/logo.png"
					alt=""
					width={320}
					height={320}
					className="h-[180px] w-auto sm:h-[250px] md:h-[320px]"
				/>
			</motion.div>

			{/* ── Content ── */}
			<div className="relative z-10 flex flex-col items-center gap-6">
				<motion.h1
					variants={headingVar}
					className="mx-auto max-w-[18ch] font-outfit text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
				>
					We&apos;re solving AI solution for Aerospace Teams once and for all.
				</motion.h1>

				<motion.div variants={fadeVar} className="pt-1">
					<CeramicButton
						href="#open-roles"
						color="#ffffff"
						textColor="#0a0a0b"
						ringColor="rgba(255,255,255,0.22)"
						borderRadius={8}
						padding="11px 24px"
						fontSize={12}
					>
						JOIN US
					</CeramicButton>
				</motion.div>
			</div>
		</motion.header>
	);
}
