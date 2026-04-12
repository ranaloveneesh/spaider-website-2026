// src/app/agents/sagan/SaganCTA.tsx
"use client";

import Link from "next/link";
import CeramicButton from "@/app/components/ui/button";
import Reveal from "@/app/components/ui/reveal";

export default function SaganCTA() {
	return (
		<section className="mx-auto mt-12 w-full min-w-0 max-w-420 sm:mt-16 md:mt-20 lg:mt-24">
			<Reveal variant="scale" threshold={0.25} className="relative overflow-hidden rounded-xl border border-border bg-panel px-4 py-6 text-center shadow-md sm:rounded-2xl sm:px-6 sm:py-8 md:px-10 md:py-12">
				<div
					aria-hidden
					className="absolute inset-0 bg-card border-card-border"
				/>

				<div className="relative">
					<h3 className="font-outfit text-2xl font-medium leading-tight text-foreground sm:text-3xl lg:text-4xl">Activate Your Strategic Proposal Engine</h3>

					<p className="mx-auto mt-4 max-w-4xl text-xs leading-6 text-muted sm:mt-5 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">See how SAGAN transforms your aerospace bid process. Schedule a focused demo tailored to your challenges and opportunities.</p>

					<div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center">
						<div className="w-full sm:w-fit [&_a]:w-full sm:[&_a]:w-auto">
							<CeramicButton href="/book-demo" color="rgba(255, 255, 255, 0.06)" ringColor="rgba(255, 255, 255, 0.22)" textColor="var(--color-white)" borderRadius={9999} padding="8px 16px" centered>
								REQUEST SAGAN DEMO
							</CeramicButton>
						</div>

						<Link href="/briefs/sagan-onepager.pdf" target="_blank" rel="noopener" className="inline-flex min-h-9 w-full items-center justify-center rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/5 sm:min-h-10 sm:w-auto sm:px-6 sm:text-sm uppercase">
							Read the brief
						</Link>
					</div>
				</div>
			</Reveal>
		</section>
	);
}
