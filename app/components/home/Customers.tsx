"use client";

import Image from "next/image";

type Logo = {
	src: string;
	alt: string;
	scale?: number; // visual scale only
};

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

export default function Customers() {
	return (
		<section className="mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
			<h2 className="mb-6 font-montserrat text-xl font-semibold tracking-tight text-foreground sm:mb-8 sm:text-2xl md:mb-10 lg:mb-12 lg:text-3xl">Trusted by industry leaders</h2>

			<section className="relative mx-auto w-full min-w-0 overflow-hidden" aria-label="Trusted by logo carousel">
				<div className="customer-marquee-track flex w-max items-center gap-x-6 sm:gap-x-10 md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
					{/* Duplicate logos to create a seamless loop */}
					{MARQUEE_LOGOS.map(({ src, alt, scale, dup }) => (
						<div key={`${src}-${alt}-${dup}`} className="flex w-[132px] shrink-0 items-center justify-center sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]">
							<div
								className="flex items-center justify-center"
								style={{
									transform: `scale(${scale ?? 1})`,
									transformOrigin: "center",
								}}
							>
								<Image src={src} alt={alt} width={360} height={120} sizes="(max-width: 640px) 160px, (max-width: 1280px) 200px, 220px" className="h-9 w-auto object-contain filter brightness-0 invert sm:h-10 md:h-12 lg:h-14 xl:h-16" decoding="async" />
							</div>
						</div>
					))}
				</div>

				<style jsx>{`
          @keyframes customerMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .customer-marquee-track {
            animation: customerMarquee 60s linear infinite;
            will-change: transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .customer-marquee-track {
              animation: none;
            }
          }
        `}</style>
			</section>
		</section>
	);
}
