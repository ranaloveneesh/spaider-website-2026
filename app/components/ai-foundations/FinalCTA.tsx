"use client";

import { motion, useReducedMotion } from "motion/react";
import CeramicButton from "@/app/components/ui/button";

const EXPO = [0.16, 1, 0.3, 1] as const;

const V = {
	container: {
		hidden: {},
		show: { transition: { staggerChildren: 0.1 } },
	},
	item: {
		hidden: { opacity: 0, y: 16 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EXPO } },
	},
} as const;

export default function FinalCTA() {
	const reduced = useReducedMotion();

	return (
		<div className="relative w-full overflow-hidden mt-12 sm:mt-16 md:mt-20 lg:mt-24">
			<motion.div
				className="relative z-10 mx-auto flex flex-col items-center px-6 py-10 text-center sm:py-14 md:py-16"
				style={{ maxWidth: "64rem" }}
				variants={V.container}
				initial={reduced ? false : "hidden"}
				whileInView="show"
				viewport={{ once: true, amount: 0.3 }}
			>
				<motion.h2
					variants={V.item}
					className="font-outfit font-medium leading-[0.9] tracking-[-0.03em] text-white"
					style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", maxWidth: "15ch" }}
				>
					Ready to turn enterprise knowledge into action?
				</motion.h2>

				<motion.p
					variants={V.item}
					className="mt-6 text-base leading-7 text-white/45 sm:text-lg sm:leading-8"
					style={{ maxWidth: "48ch" }}
				>
					Connect your internal sources, apply the right controls, and deploy a
					governed AI workspace for your team.
				</motion.p>

				<motion.div
					variants={V.item}
					className="mt-10 flex flex-wrap items-center justify-center gap-4"
				>
					<CeramicButton
						href="/request-demo"
						color="#ffffff"
						textColor="#0a0a0b"
						ringColor="rgba(255,255,255,0.22)"
						borderRadius={8}
						padding="12px 28px"
						fontSize={13}
					>
						REQUEST A DEMO
					</CeramicButton>
					<CeramicButton
						href="/briefs/spaider-onepager.pdf"
						color="rgba(255,255,255,0.05)"
						textColor="#ffffff"
						ringColor="rgba(255,255,255,0.14)"
						borderRadius={8}
						padding="12px 28px"
						fontSize={13}
					>
						READ THE BRIEF
					</CeramicButton>
				</motion.div>
			</motion.div>
		</div>
	);
}
