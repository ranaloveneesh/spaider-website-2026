"use client";

import { motion } from "motion/react";
import Image from "next/image";

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

const MARQUEE_LOGOS: MarqueeLogo[] = [...LOGOS.map((l) => ({ ...l, dup: 0 as const })), ...LOGOS.map((l) => ({ ...l, dup: 1 as const }))];

/** Trusted-by logo marquee - sits directly below the hero as its own section. */
export default function TrustedBy() {
	return (
		// Tight to the hero (its coda); the next section's own gap provides the space below.
		<motion.div className="w-full pt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, ease: "easeOut" }}>
			<p className="spx-label mb-6 text-center">Trusted by industry leaders</p>

			<section
				className="relative mx-auto w-full min-w-0 overflow-hidden"
				aria-label="Trusted by logo carousel"
				style={{
					WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
					maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
				}}
			>
				<div className="hero-marquee-track flex w-max items-center gap-x-6 sm:gap-x-10 md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
					{MARQUEE_LOGOS.map(({ src, alt, scale, dup }) => (
						<div key={`${src}-${alt}-${dup}`} className="flex w-[132px] shrink-0 flex-col items-center gap-2 sm:w-[160px] md:w-[180px] lg:w-[200px]">
							<div
								className="flex items-center justify-center"
								style={{
									transform: `scale(${scale ?? 1})`,
									transformOrigin: "center",
								}}
							>
								<Image src={src} alt={alt} width={360} height={120} sizes="(max-width: 640px) 160px, 200px" className="h-9 w-auto object-contain brightness-0 invert opacity-35 transition-opacity duration-300 hover:opacity-65 sm:h-10 md:h-11" decoding="async" />
							</div>
							<span className="font-geist-mono text-[0.65rem] tracking-[0.08em] text-spx-faint">{alt}</span>
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
	);
}
