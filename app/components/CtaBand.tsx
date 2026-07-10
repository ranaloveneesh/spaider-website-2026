import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils";

// Port of source's mini CTA band (`.cta-band`): bordered strip on void-2,
// heading + sub on the left, solid button on the right.
type Props = {
	title: React.ReactNode;
	copy?: string;
	ctaLabel: string;
	ctaHref: string;
	/** Override the default full section gap (e.g. half gap after another band) */
	className?: string;
};

export default function CtaBand({ title, copy, ctaLabel, ctaHref, className }: Props) {
	return (
		<section className={cn("mt-[var(--spx-section-gap)] w-full min-w-0", className)}>
			<div className="flex flex-wrap items-center justify-between gap-[1.875rem] border border-spx-rule-2 bg-spx-void-2 px-6 py-8 sm:px-11 sm:py-10">
				<div>
					<h2 className="font-outfit text-[clamp(1.5rem,3vw,2.3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">{title}</h2>
					{copy && <p className="mt-2.5 max-w-[44ch] text-[1.02rem] leading-[1.65] text-spx-mute">{copy}</p>}
				</div>
				<Button asChild variant="solid">
					<Link href={ctaHref}>{ctaLabel}</Link>
				</Button>
			</div>
		</section>
	);
}
