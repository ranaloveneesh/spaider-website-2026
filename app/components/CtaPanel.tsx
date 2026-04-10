"use client";
import CeramicButton from "./ui/button";

type Props = {
	title?: string;
	copy?: string;
	ctaHref?: string;
	ctaLabel?: string;
};

export default function CtaPanel({
	title = "Got a use case in mind? Let’s make it real.",
	copy = "Our team of AI experts is just a call away. Whether you're exploring ideas or ready to build, we’ll help you bring your AI agent to life — faster.",
	ctaHref: _ctaHref = "/book-demo",
	ctaLabel: _ctaLabel = "Talk to us",
}: Props) {
	return (
		<div className="mx-auto mt-12 w-full min-w-0 max-w-420 sm:mt-16 md:mt-20 lg:mt-24">
			<div className="relative overflow-hidden rounded-xl border border-border bg-panel px-4 py-6 text-center shadow-md sm:rounded-2xl sm:px-6 sm:py-8 md:px-10 md:py-12">
				<div
					aria-hidden
					className="absolute inset-0 bg-card border-card-border"
				/>
				<div className="relative">
					<h2 className="font-montserrat text-xl font-semibold leading-tight text-foreground sm:text-2xl lg:text-3xl">{title}</h2>

					<p className="mx-auto mt-6 max-w-4xl text-xs leading-6 text-muted sm:text-sm sm:leading-7 lg:text-base lg:leading-7">{copy}</p>

					<div className="mt-6 flex justify-center">
						<div className="w-full sm:w-fit [&_a]:w-full sm:[&_a]:w-auto">
							<CeramicButton href="/request-demo" color="rgba(255, 255, 255, 0.06)" ringColor="rgba(255, 255, 255, 0.22)" textColor="var(--color-white)" borderRadius={9999} padding="8px 16px" centered>
								REQUEST A DEMO
							</CeramicButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
