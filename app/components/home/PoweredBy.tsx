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
		<section className="mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
			<h2 className="mb-6 font-outfit text-4xl font-medium tracking-tight text-foreground sm:mb-8 sm:text-5xl md:mb-10 lg:mb-12">Powered by</h2>

			<section className="mx-auto grid w-full grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4" aria-label="Powered by logos">
				{LOGOS.map(({ src, alt, name, scale }) => (
					<div key={`${src}-${alt}`} className="flex flex-col items-center gap-3">
						<div
							className="flex items-center justify-center"
							style={{ transform: `scale(${scale ?? 1})`, transformOrigin: "center" }}
						>
							<Image src={src} alt={alt} width={360} height={120} sizes="(max-width: 640px) 160px, (max-width: 1280px) 200px, 220px" className="h-9 w-auto object-contain filter brightness-0 invert sm:h-10 md:h-12 lg:h-14 xl:h-16" decoding="async" />
						</div>
						<span className="font-montserrat text-[11px] font-medium tracking-wide text-muted/60">{name}</span>
					</div>
				))}
			</section>
		</section>
	);
}
