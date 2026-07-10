import Image from "next/image";

type Logo = {
	src: string;
	alt: string;
	name: string;
	scale?: number;
};

const LOGOS: Logo[] = [
	{ src: "/powered/nvidia.png", alt: "NVIDIA Inception program logo", name: "NVIDIA", scale: 1 },
	{ src: "/powered/googlecloud.svg", alt: "Google Cloud logo", name: "Google Cloud", scale: 2.3 },
	{ src: "/powered/aws.png", alt: "Amazon Web Services logo", name: "AWS", scale: 0.6 },
	{ src: "/powered/luxprovide.png", alt: "LuxProvide logo", name: "LuxProvide", scale: 0.8 },
];

export default function PoweredBy() {
	return (
		<section className="mt-[var(--spx-section-gap)] w-full min-w-0">
			<div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
				<h2 className="spx-heading text-foreground">Powered by</h2>
			</div>

			<section className="mx-auto grid w-full grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4" aria-label="Powered by logos">
				{LOGOS.map(({ src, alt, name, scale }) => (
					<div key={`${src}-${alt}`} className="flex flex-col items-center gap-3">
						<div className="flex items-center justify-center" style={{ transform: `scale(${scale ?? 1})`, transformOrigin: "center" }}>
							<Image src={src} alt={alt} width={360} height={120} sizes="(max-width: 640px) 160px, (max-width: 1280px) 200px, 220px" className="h-9 w-auto object-contain filter brightness-0 invert sm:h-10 md:h-12 lg:h-14 xl:h-16" decoding="async" />
						</div>
						<span className="font-geist-mono text-[0.65rem] tracking-[0.08em] text-spx-faint">{name}</span>
					</div>
				))}
			</section>
		</section>
	);
}
