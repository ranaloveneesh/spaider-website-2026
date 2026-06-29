"use client";
import CeramicButton from "./ui/button";

type Props = {
	title?: string;
	copy?: string;
	ctaHref?: string;
	ctaLabel?: string;
};

export default function CtaPanel({
	title = "Got a use case in mind? Let's make it real.",
	copy,
	ctaHref: _ctaHref = "/request-demo",
	ctaLabel: _ctaLabel = "Talk to us",
}: Props) {
	return (
		<div className="relative w-full overflow-hidden mt-12 sm:mt-16 md:mt-20 lg:mt-24">
			{/* Content */}
			<div
				className="relative z-10 mx-auto flex flex-col items-center px-6 py-10 text-center sm:py-14 md:py-16"
				style={{ maxWidth: "64rem" }}
			>
				<h2
					className="font-outfit font-medium leading-[0.9] tracking-[-0.03em] text-white"
					style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", maxWidth: "15ch" }}
				>
					{title}
				</h2>

				<p
					className="mt-6 text-base leading-7 text-white/45 sm:text-lg sm:leading-8"
					style={{ maxWidth: "48ch" }}
				>
					{copy}
				</p>

				<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
						href="/invest"
						color="rgba(255,255,255,0.05)"
						textColor="#ffffff"
						ringColor="rgba(255,255,255,0.14)"
						borderRadius={8}
						padding="12px 28px"
						fontSize={13}
					>
						INVEST
					</CeramicButton>
				</div>
			</div>
		</div>
	);
}
