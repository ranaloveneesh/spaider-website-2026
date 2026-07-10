"use client";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
	title?: React.ReactNode;
	copy?: string;
	ctaHref?: string;
	ctaLabel?: string;
};

export default function CtaPanel({ title = "Got a use case in mind? Let's make it real.", copy, ctaHref: _ctaHref = "/request-demo", ctaLabel: _ctaLabel = "Talk to us" }: Props) {
	return (
		<div className="relative w-full overflow-hidden mt-[var(--spx-section-gap)]">
			{/* Content */}
			<div className="relative z-10 mx-auto flex flex-col items-center px-6 py-10 text-center sm:py-14 md:py-16" style={{ maxWidth: "64rem" }}>
				<h2 className="spx-heading text-white">{title}</h2>

				<p className="spx-lede mt-6">{copy}</p>

				<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
					<Button asChild variant="solid">
						<Link href="/request-demo">REQUEST A DEMO</Link>
					</Button>
					<Button asChild variant="line">
						<Link href="/invest">INVEST</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
