"use client";

import Image from "next/image";
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

			{/* Radial vignette - reveals galaxy centre, dark at edges */}
			{/* <div
				className="absolute inset-0"
				aria-hidden
				style={{
					background:
						"radial-gradient(ellipse at 62% 48%, transparent 18%, rgba(0,0,0,0.5) 52%, rgba(0,0,0,0.88) 88%)",
				}}
			/> */}

			{/* Top gradient - keeps the floating navbar readable */}
			<div
				className="pointer-events-none absolute left-0 right-0 top-0 h-52"
				aria-hidden
				style={{
					background:
						"linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.38) 55%, transparent 100%)",
				}}
			/>

			{/* Bottom gradient - dissolves into the page background */}
			{/* <div
				className="pointer-events-none absolute bottom-0 left-0 right-0 h-72"
				aria-hidden
				style={{
					background:
						"linear-gradient(to top, #0f0f0f 0%, #0f0f0f 12%, rgba(15,15,15,0.72) 55%, transparent 100%)",
				}}
			/> */}

			{/* ── Hero content ── */}
			<div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-36 pb-10 text-center">

				{/* Headline */}
				<h1
					className="hero-scale-in font-outfit font-medium leading-[1] tracking-[-0.025em] text-white"
					style={{
						fontSize: "clamp(3.5rem, 7vw, 6rem)",
						maxWidth: "16ch",
						animationDelay: "80ms",
					}}
				>
					Sovereign AI<br />
					Operating Layer<br />
					for{" "}
					<span className="hero-illuminated-word">Aerospace Teams</span>
				</h1>

				{/* Sub-headline */}
				<p
					className="hero-scale-in mt-7 text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
					style={{ maxWidth: "52ch", animationDelay: "160ms" }}
				>
					Deploy domain-expert AI models and agents in your workflows - securely, compliantly, mission-ready from day one.
				</p>

				{/* CTA row */}
				<div
					className="hero-scale-in mt-10 flex flex-wrap items-center justify-center gap-4"
					style={{ animationDelay: "240ms" }}
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
				</div>
			</div>

			{/* ── Trusted-by strip (merged from Customers) ── */}
			<div className="relative z-10 w-full pb-14 pt-2">
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
			</div>
		</section>
	);
}
