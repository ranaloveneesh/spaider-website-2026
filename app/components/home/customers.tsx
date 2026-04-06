"use client";

import Image from "next/image";

type Logo = {
	src: string;
	alt: string;
	scale?: number; // visual scale only
};

const LOGOS: Logo[] = [
	{ src: "/trusted/esa.svg", alt: "ESA", scale: 0.6 },
	{ src: "/trusted/technoport.svg", alt: "Technoport", scale: 0.7 },
	{ src: "/trusted/mirores.svg", alt: "Mirores", scale: 0.8 },
	{ src: "/trusted/esric.png", alt: "ESRIC", scale: 0.7 },
	{ src: "/trusted/esa.svg", alt: "SES", scale: 0.6 },
	{ src: "/trusted/esa.svg", alt: "SREC", scale: 0.6 },
	{ src: "/trusted/esa.svg", alt: "OHB", scale: 0.6 },
];

export default function Customers() {
	return (
		<section className="mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
			<h2 className="mb-6 font-manrope text-xl font-semibold tracking-tight text-foreground sm:mb-8 sm:text-2xl md:mb-10 lg:mb-12 lg:text-3xl">They trust us</h2>

			<div className="relative mx-auto w-full min-w-0 overflow-hidden" aria-label="Trusted by logo carousel" role="region">
				{/* Edge fades to make the infinite loop less noticeable */}
				<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#08090a] to-transparent sm:w-16 lg:w-20" />
				<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#08090a] to-transparent sm:w-16 lg:w-20" />
				<div className="customer-marquee-track flex w-max items-center gap-x-6 sm:gap-x-10 md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
					{/* Duplicate logos to create a seamless loop */}
					{[...LOGOS, ...LOGOS].map(({ src, alt, scale }, i) => (
						<div key={`${src}-${i}`} className="flex w-[132px] shrink-0 items-center justify-center sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]">
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
            animation: customerMarquee 30s linear infinite;
            will-change: transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .customer-marquee-track {
              animation: none;
            }
          }
        `}</style>
			</div>
		</section>
	);
}
