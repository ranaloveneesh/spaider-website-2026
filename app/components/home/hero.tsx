import Image from "next/image";
import CeramicButton from "../ui/button";

const hero = () => {
	return (
		<section aria-labelledby="hero-heading" className="flex min-w-0 flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between mt-12">
			<div className="w-full min-w-0 flex-1 lg:max-w-[560px]">
				<div className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6 lg:items-start">
					<h1 id="hero-heading" className="text-center font-manrope text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl lg:text-left lg:text-3xl">
						Your Domain Trained
						<span className="font-playfair-italic mt-1 block">Co-Pilot</span>
					</h1>

					<p className="max-w-lg text-center text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-left lg:text-base lg:leading-7">Make complex work simple with our Special Purpose AI assistants. Cut repetitive work, integrate with your tools, and unlock new levels of productivity.</p>

					<div className="flex w-full max-w-md flex-col items-stretch gap-3 pt-1 sm:max-w-none sm:flex-row sm:items-center sm:pt-2 lg:max-w-none">
						<div className="w-full sm:w-fit [&_a]:w-full sm:[&_a]:w-auto">
							<CeramicButton href="/request-demo" color="rgba(255, 255, 255, 0.06)" ringColor="rgba(255, 255, 255, 0.22)" textColor="var(--color-white)" borderRadius={9999} padding="8px 16px" centered>
								REQUEST DEMO
							</CeramicButton>
						</div>
					</div>
				</div>
			</div>

			<div className="relative w-full min-w-0 flex-1 overflow-hidden rounded-2xl sm:rounded-3xl lg:ml-auto lg:flex lg:justify-end">
				<div className="relative h-[min(52vw,280px)] w-full min-w-0 overflow-hidden border border-border p-2 sm:h-[min(48vw,360px)] sm:rounded-2xl sm:p-3 md:h-[400px] md:rounded-3xl md:p-4 lg:h-[min(520px,55vh)] xl:h-[min(600px,60vh)]">
					<Image src="/demo.png" alt="Dashboard preview" fill priority sizes="(max-width: 1023px) 100vw, 560px" className="rounded-lg object-cover object-left sm:rounded-xl md:rounded-2xl" />
				</div>
			</div>
		</section>
	);
};

export default hero;
