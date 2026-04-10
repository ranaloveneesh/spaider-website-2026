"use client";

import { Linkedin, Mail, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EMAIL_ADDRESS, LINKEDIN_URL, YOUTUBE_URL } from "@/app/utils/constants";

function Footer() {
	const year = new Date().getFullYear();

	const path = usePathname();

	const isHome = path === "/";

	if (!isHome) {
		return null;
	}

	return (
		<footer className="relative mt-12 w-full min-w-0 overflow-hidden border-t border-white/10 bg-black/20 backdrop-blur-md shadow-[60px_60px_140px_rgba(0,112,192,0.18)] sm:mt-16 md:mt-20">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,112,192,0.28),transparent_55%),radial-gradient(circle_at_20%_40%,rgba(78,167,252,0.12),transparent_45%)]" />
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[32px_32px] opacity-60 sm:bg-size-[40px_40px] md:bg-size-[48px_48px]" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[rgba(0,112,192,0.22)] to-transparent sm:h-32" />

			<div className="relative mx-auto w-full min-w-0 max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-9 lg:grid-cols-4 lg:gap-10">
					<div className="min-w-0 sm:col-span-2 lg:col-span-2">
						<div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
							<Image src="/logo.png" alt="" width={80} height={100} className="h-10 w-auto sm:h-11 lg:h-12" priority />
							<div className="min-w-0">
								<p className="font-montserrat text-xs font-semibold tracking-wide text-foreground sm:text-base"><span className="uppercase mr-1">Spaider</span>
									Space</p>
								<p className="text-xs leading-6 text-muted font-inter sm:text-sm sm:leading-7">The Sovereign AI Layer for Aerospace.</p>
							</div>
						</div>

						<p className="mt-4 text-xs leading-6 text-muted font-inter sm:mt-5 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
							SPAIDER Space S.à r.l.
							<br />
							9, avenue des Hauts Fourneaux 4362, Esch sur Alzette, Luxembourg
							<br />
							VAT: LU36772970
						</p>
					</div>

					<nav className="min-w-0" aria-label="Footer — Platform">
						<h2 className="m-0 font-montserrat text-xs font-semibold uppercase tracking-wide text-foreground sm:text-sm">Platform</h2>
						<ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
							<li>
								<Link href="/our-tech" className="text-xs leading-6 text-foreground transition-colors font-inter hover:text-foreground sm:text-sm sm:leading-7 lg:text-base">
									Our Tech
								</Link>
							</li>
							<li>
								<Link href="/ai-foundations" className="text-xs leading-6 text-foreground transition-colors font-inter hover:text-foreground sm:text-sm sm:leading-7 lg:text-base">
									AI Foundations
								</Link>
							</li>
							<li>
								<Link href="/agents/sagan" className="text-xs leading-6 text-foreground transition-colors font-inter hover:text-foreground sm:text-sm sm:leading-7 lg:text-base">
									SAGAN
								</Link>
							</li>
						</ul>
					</nav>

					<nav className="min-w-0" aria-label="Footer — Company">
						<h2 className="m-0 font-montserrat text-xs font-semibold uppercase tracking-wide text-foreground sm:text-sm">Company</h2>
						<ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
							<li>
								<Link href="/invest" className="text-xs leading-6 text-foreground transition-colors font-inter hover:text-foreground sm:text-sm sm:leading-7 lg:text-base">
									Invest
								</Link>
							</li>
							<li>
								<Link href="/blog" className="text-xs leading-6 text-foreground transition-colors font-inter hover:text-foreground sm:text-sm sm:leading-7 lg:text-base">
									Blog
								</Link>
							</li>
							<li>
								<Link href="/request-demo" className="text-xs leading-6 text-foreground transition-colors font-inter hover:text-foreground sm:text-sm sm:leading-7 lg:text-base">
									Request a demo
								</Link>
							</li>
							<li>
								<Link href="/about" className="text-xs leading-6 text-foreground transition-colors font-inter hover:text-foreground sm:text-sm sm:leading-7 lg:text-base">
									About
								</Link>
							</li>
							<li>
								<Link href="/privacy-policy" className="text-xs leading-6 text-foreground transition-colors font-inter hover:text-foreground sm:text-sm sm:leading-7 lg:text-base">
									Privacy Policy
								</Link>
							</li>
						</ul>
					</nav>

					<section className="min-w-0 sm:col-span-2 lg:row-start-2 lg:col-start-3 lg:col-span-2" aria-labelledby="footer-contact-heading">
						<h2 id="footer-contact-heading" className="m-0 font-montserrat text-xs font-semibold uppercase tracking-wide text-foreground sm:text-sm">
							CONTACT US
						</h2>
						<ul className="mt-3 flex list-none flex-wrap gap-4 p-0 sm:mt-4 sm:gap-6 md:gap-8">
							<li>
								<a href={`mailto:${EMAIL_ADDRESS}`} className="flex min-h-10 min-w-10 items-center justify-center rounded-md text-foreground transition-opacity hover:opacity-90" aria-label={`Email ${EMAIL_ADDRESS}`}>
									<Mail className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
								</a>
							</li>
							<li>
								<a href={LINKEDIN_URL} className="flex min-h-10 min-w-10 items-center justify-center rounded-md text-foreground transition-opacity hover:opacity-90" aria-label="Spaider Space on LinkedIn (opens in a new tab)" target="_blank" rel="noopener noreferrer">
									<Linkedin className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
								</a>
							</li>
							<li>
								<a href={YOUTUBE_URL} className="flex min-h-10 min-w-10 items-center justify-center rounded-md text-foreground transition-opacity hover:opacity-90" aria-label="Spaider Space on YouTube (opens in a new tab)" target="_blank" rel="noopener noreferrer">
									<Youtube className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
								</a>
							</li>
						</ul>
					</section>
				</div>

				<div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-center sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pt-6 sm:text-left">
					<p className="text-xs leading-6 text-muted font-inter sm:text-sm sm:leading-7">Built for mission-ready, European-sovereign AI.</p>
					<p className="text-xs leading-6 text-muted font-inter sm:text-sm sm:leading-7">© {year} Spaider Space. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
