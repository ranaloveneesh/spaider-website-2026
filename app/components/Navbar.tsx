"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import AnimatedNavLink from "./ui/animated-navlink";
import CeramicButton from "./ui/button";
import { ChevronDownIcon, XIcon } from "lucide-react";

type NavLink = { label: string; href: string };

const PRIMARY_LINKS: NavLink[] = [
	{ label: "OUR TECH", href: "/our-tech" },
	{ label: "AI FOUNDATIONS", href: "/ai-foundations" },
	{ label: "AGENTS", href: "/agents" },
	{ label: "PRICING", href: "/pricing" },
	{ label: "INVEST", href: "/invest" },
	{ label: "BLOG", href: "/blog" },
];

type AgentLink = { label: string; href: string; description: string; comingSoon?: boolean };

const AGENTS_DROPDOWN_LINKS: AgentLink[] = [
	{ label: "SAGAN", href: "/agents/sagan", description: "Autonomous proposal intelligence for aerospace procurement." },
];

const MOBILE_LINKS: NavLink[] = [...PRIMARY_LINKS, { label: "REQUEST A DEMO", href: "/request-demo" }];

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [agentsMenuOpen, setAgentsMenuOpen] = useState(false);
	const [mobileAgentsMenuOpen, setMobileAgentsMenuOpen] = useState(true);
	const agentsNavRef = useRef<HTMLFieldSetElement>(null);
	const [progress, setProgress] = useState(0);

	const closeMobileMenu = useCallback(() => {
		setIsMobileMenuOpen(false);
		setMobileAgentsMenuOpen(true);
	}, []);

	const toggleMobileMenu = useCallback(() => {
		setIsMobileMenuOpen((v) => {
			if (!v) setMobileAgentsMenuOpen(true);
			return !v;
		});
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			if (docHeight <= 0) { setProgress(0); return; }
			const raw = scrollTop / docHeight;
			setProgress(raw >= 0.995 ? 1 : Math.max(0, Math.min(1, raw)));
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (!isMobileMenuOpen) return;
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => { document.body.style.overflow = prevOverflow; };
	}, [isMobileMenuOpen]);

	useEffect(() => {
		if (!isMobileMenuOpen) return;
		const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") closeMobileMenu(); };
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isMobileMenuOpen, closeMobileMenu]);

	return (
		<>
			{/* Floating navbar */}
			<div className="fixed top-5 inset-x-0 z-50 px-4 flex justify-center pointer-events-none">
				<header className="w-full max-w-5xl pointer-events-auto">
					<div className="relative rounded-xl border border-white/[0.07] bg-[#1E1E1E]" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)" }}>
						<div className="flex h-14 items-center justify-between px-5 gap-4">

							{/* Logo */}
							<Link href="/" aria-label="Home" className="select-none flex items-center gap-2 shrink-0">
								<Image src="/logo.png" alt="" width={30} height={60} />
								<span className="text-[17px] font-semibold text-white font-outfit leading-none">SPAIDER Space</span>
							</Link>

							{/* Desktop nav - centered */}
							<nav aria-label="Primary" className="hidden lg:flex flex-1 items-center justify-center gap-6">
								{PRIMARY_LINKS.map((l) =>
									l.label === "AGENTS" ? (
										<fieldset
											key={l.href}
											ref={agentsNavRef}
											className="relative"
											onMouseEnter={() => setAgentsMenuOpen(true)}
											onMouseLeave={() => setAgentsMenuOpen(false)}
											onBlur={(e) => {
												if (!agentsNavRef.current?.contains(e.relatedTarget as Node | null)) {
													setAgentsMenuOpen(false);
												}
											}}
										>
											<legend className="sr-only">Agents menu</legend>
											<button
												type="button"
												className="group relative inline-flex items-center gap-1 cursor-pointer border-0 bg-transparent p-0 font-semibold uppercase text-[12px] tracking-[0.08em] font-montserrat focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring-color)]"
												aria-expanded={agentsMenuOpen}
												aria-haspopup="true"
												aria-controls="nav-agents-submenu"
												aria-label={l.label}
												onFocus={() => setAgentsMenuOpen(true)}
												onMouseEnter={() => setAgentsMenuOpen(true)}
											>
												<span className="relative inline-block overflow-hidden h-4">
													<span className="flex flex-col transition-transform duration-400 ease-out group-hover:-translate-y-1/2">
														<span className="text-muted">{l.label}</span>
														<span className="text-foreground">{l.label}</span>
													</span>
												</span>
												<ChevronDownIcon
													aria-hidden="true"
													className={`w-3 h-3 text-muted transition-transform duration-300 group-hover:text-foreground ${agentsMenuOpen ? "rotate-180" : "rotate-0"}`}
												/>
											</button>

											<div
												id="nav-agents-submenu"
												role="menu"
												aria-label="Agents"
												className={`absolute left-0 top-full z-60 w-[260px] pt-3 ${agentsMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
											>
												<div
													className={`rounded-sm border border-white/[0.07] bg-[#1E1E1E] p-2 transition-all duration-150 ease-out origin-top-left ${agentsMenuOpen
														? "translate-y-0 scale-100 opacity-100"
														: "-translate-y-1 scale-95 opacity-0"
														}`}
													style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)" }}
												>
													{AGENTS_DROPDOWN_LINKS.map((link) => (
														<Link
															key={link.href}
															href={link.href}
															role="menuitem"
															className="group block select-none rounded-sm p-3 transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
														>
															<div className="flex items-center gap-2 leading-none mb-1">
																<span className="font-semibold uppercase text-[12px] tracking-[0.08em] font-montserrat text-foreground/90 group-hover:text-foreground transition-colors">
																	{link.label}
																</span>
																{link.comingSoon && (
																	<span className="rounded-sm bg-white/[0.08] px-1.5 py-0.5 text-[9px] font-medium font-montserrat uppercase tracking-[0.06em] text-muted">
																		Soon
																	</span>
																)}
															</div>
															<p className="text-[11px] leading-snug text-muted/70 group-hover:text-muted transition-colors">
																{link.description}
															</p>
														</Link>
													))}
												</div>
											</div>
										</fieldset>
									) : (
										<AnimatedNavLink key={l.href} href={l.href}>
											{l.label}
										</AnimatedNavLink>
									),
								)}
							</nav>

							{/* Right side */}
							<div className="flex items-center gap-3 shrink-0">
								{/* CTA - white solid button like 0.email "Get Started" */}
								<div className="hidden lg:block">
									<CeramicButton
										href="/request-demo"
										color="#ffffff"
										ringColor="rgba(255,255,255,0.2)"
										textColor="#0a0a0b"
										borderRadius={8}
										padding="7px 14px"
										fontSize={11}
									>
										REQUEST A DEMO
									</CeramicButton>
								</div>

								{/* Mobile hamburger */}
								<button
									type="button"
									className="relative inline-flex h-9 w-9 cursor-pointer items-center justify-center bg-transparent p-0 lg:hidden"
									aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
									aria-expanded={isMobileMenuOpen}
									aria-controls="spx-mobile-menu"
									onClick={toggleMobileMenu}
								>
									<span aria-hidden="true" className={`absolute h-[1.5px] w-5 rounded-full bg-white transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-[5px] rotate-0"}`} />
									<span aria-hidden="true" className={`absolute h-[1.5px] w-5 rounded-full bg-white transition-opacity duration-300 ease-out ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
									<span aria-hidden="true" className={`absolute h-[1.5px] w-5 rounded-full bg-white transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[5px] rotate-0"}`} />
								</button>
							</div>
						</div>

						{/* Scroll progress - 1px accent line at the bottom edge */}
						<div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden rounded-b-xl">
							<div
								style={{
									position: "absolute",
									left: "50%",
									transform: `translateX(-50%) scaleX(${0.15 + 0.85 * progress})`,
									transformOrigin: "center",
									width: "100%",
									height: "100%",
									background: "linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)",
									transition: "transform 0.1s ease-out",
								}}
							/>
						</div>
					</div>
				</header>
			</div>

			{/* Mobile backdrop */}
			<div
				className={`fixed inset-0 z-60 bg-black/60 transition-opacity duration-300 ease-out lg:hidden ${isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
				onClick={closeMobileMenu}
				aria-hidden="true"
			/>

			{/* Mobile drawer */}
			<aside
				id="spx-mobile-menu"
				aria-label="Mobile navigation"
				aria-hidden={!isMobileMenuOpen}
				className={`fixed right-0 top-0 z-70 h-dvh w-[min(360px,86vw)] border-l border-white/[0.07] bg-[#1E1E1E] transition-transform duration-300 ease-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
			>
				{/* Drawer header */}
				<div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-white/[0.06]">
					<Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2">
						<Image src="/logo.png" alt="" width={26} height={52} />
						<span className="text-base font-semibold text-white font-outfit">SPAIDER Space</span>
					</Link>
					<button
						type="button"
						onClick={closeMobileMenu}
						aria-label="Close menu"
						className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted hover:text-white transition-colors"
					>
						<XIcon className="w-4 h-4" />
					</button>
				</div>

				<nav className="px-4 py-4">
					<ul className="flex flex-col">
						{MOBILE_LINKS.map((l) =>
							l.label === "AGENTS" ? (
								<li key={`${l.href}-${l.label}`}>
									<button
										type="button"
										className="group flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 font-semibold uppercase text-[12px] tracking-[0.08em] font-montserrat hover:bg-white/[0.05] transition-colors"
										aria-expanded={mobileAgentsMenuOpen}
										aria-controls="mobile-agents-submenu"
										onClick={() => setMobileAgentsMenuOpen((v) => !v)}
									>
										<span className="text-muted group-hover:text-foreground transition-colors">AGENTS</span>
										<ChevronDownIcon
											aria-hidden="true"
											className={`h-3.5 w-3.5 text-muted transition-transform duration-300 ease-out group-hover:text-foreground ${mobileAgentsMenuOpen ? "rotate-180" : "rotate-0"}`}
										/>
									</button>

									<div
										id="mobile-agents-submenu"
										className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${mobileAgentsMenuOpen ? "mt-1 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}
									>
										<ul className="min-h-0 overflow-hidden pl-2">
											{AGENTS_DROPDOWN_LINKS.map((link) => (
												<li key={`mobile-${link.href}`}>
													<Link
														href={link.href}
														onClick={closeMobileMenu}
														className="group block select-none rounded-lg p-3 transition-colors hover:bg-white/[0.05]"
													>
														<div className="flex items-center gap-2 leading-none mb-1">
															<span className="font-semibold uppercase text-[12px] tracking-[0.08em] font-montserrat text-foreground/80 group-hover:text-foreground transition-colors">
																{link.label}
															</span>
															{link.comingSoon && (
																<span className="rounded-sm bg-white/[0.08] px-1.5 py-0.5 text-[9px] font-medium font-montserrat uppercase tracking-[0.06em] text-muted">
																	Soon
																</span>
															)}
														</div>
														<p className="text-[11px] leading-snug text-muted/60">
															{link.description}
														</p>
													</Link>
												</li>
											))}
										</ul>
									</div>
								</li>
							) : (
								<li key={`${l.href}-${l.label}`}>
									<div className="px-3 py-2.5">
										<AnimatedNavLink href={l.href} onClick={closeMobileMenu}>
											{l.label}
										</AnimatedNavLink>
									</div>
								</li>
							),
						)}
					</ul>
				</nav>
			</aside>
		</>
	);
}
