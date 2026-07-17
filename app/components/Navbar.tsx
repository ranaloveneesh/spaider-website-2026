"use client";

import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { Button } from "./ui/button";

type DropdownLink = { label: string; href: string; description?: string };

type NavItem = { type: "link"; label: string; href: string } | { type: "dropdown"; label: string; links: DropdownLink[] };

const NAV_ITEMS: NavItem[] = [
	{ type: "link", label: "TECH STACK", href: "/our-tech" },
	{ type: "link", label: "AI FOUNDATIONS", href: "/ai-foundations" },
	{
		type: "dropdown",
		label: "AGENTS",
		links: [{ label: "SAGAN", href: "/agents/sagan" }],
	},
	{ type: "link", label: "PRICING", href: "/pricing" },
	{
		type: "dropdown",
		label: "COMPANY",
		links: [
			{ label: "ABOUT", href: "/about" },
			{ label: "BLOG", href: "/blog" },
			{ label: "INVEST", href: "/invest" },
		],
	},
];

const linkClasses = "group relative inline-flex items-center leading-none font-geist-mono text-[0.8125rem] font-normal uppercase tracking-[0.12em] text-spx-mute transition-colors duration-300 hover:text-spx-ink";
const underlineClasses = "absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-spx-cyan transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100";

function NavAnchor({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
	return (
		<Link href={href} onClick={onClick} className={linkClasses}>
			{children}
			<span aria-hidden="true" className={underlineClasses} />
		</Link>
	);
}

function NavDropdown({ label, links }: { label: string; links: DropdownLink[] }) {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLFieldSetElement>(null);
	const menuId = `nav-${label.toLowerCase()}-submenu`;

	return (
		<fieldset
			ref={ref}
			className="relative m-0 border-0 p-0"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			onBlur={(e) => {
				if (!ref.current?.contains(e.relatedTarget as Node | null)) setOpen(false);
			}}
		>
			<legend className="sr-only">{label} menu</legend>
			<button
				type="button"
				className={`${linkClasses} inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring-color)]`}
				aria-expanded={open}
				aria-haspopup="true"
				aria-controls={menuId}
				aria-label={label}
				onFocus={() => setOpen(true)}
				onMouseEnter={() => setOpen(true)}
			>
				{label}
				<ChevronDownIcon aria-hidden="true" className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`} />
				<span aria-hidden="true" className={`${underlineClasses} ${open ? "scale-x-100 origin-left" : ""}`} />
			</button>

			<div id={menuId} role="menu" aria-label={label} className={`absolute left-0 top-full z-60 w-60 pt-3.5 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
				<div className={`rounded-xs border border-spx-rule bg-spx-void-2 p-2 transition-all duration-150 ease-out ${open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"}`}>
					{links.map((link) => (
						<Link key={link.href} href={link.href} role="menuitem" className="group block select-none rounded-xs p-3 transition-colors hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
							<div className="mb-1 flex items-center gap-2 leading-none">
								<span className="font-geist-mono text-[0.8125rem] font-normal uppercase tracking-[0.14em] text-spx-mute group-hover:text-spx-ink transition-colors">{link.label}</span>
							</div>
							{link.description && <p className="text-xs leading-snug text-spx-ink-2/70 group-hover:text-spx-ink-2 transition-colors">{link.description}</p>}
						</Link>
					))}
				</div>
			</div>
		</fieldset>
	);
}

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const { stop: stopLenis, start: startLenis } = useSmoothScroll();

	const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
	const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((v) => !v), []);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 12);
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Lock scrolling while the menu is open. `overflow: hidden` alone isn't
	// enough - Lenis drives scrolling from wheel/touch events itself, so it
	// must also be paused or the page keeps scrolling behind the overlay.
	useEffect(() => {
		if (!isMobileMenuOpen) return;
		const prevBodyOverflow = document.body.style.overflow;
		// html too: iOS Safari ignores overflow:hidden set only on body for touch scrolling.
		const prevHtmlOverflow = document.documentElement.style.overflow;
		document.body.style.overflow = "hidden";
		document.documentElement.style.overflow = "hidden";
		stopLenis();
		return () => {
			document.body.style.overflow = prevBodyOverflow;
			document.documentElement.style.overflow = prevHtmlOverflow;
			startLenis();
		};
	}, [isMobileMenuOpen, stopLenis, startLenis]);

	useEffect(() => {
		if (!isMobileMenuOpen) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeMobileMenu();
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isMobileMenuOpen, closeMobileMenu]);

	// The burger/close buttons are CSS-hidden above the `xl` breakpoint (desktop nav
	// shows instead) - without this, a menu left open through a resize/orientation
	// change has no visible control to close it, stranding body's overflow:hidden lock
	// forever and making the whole page appear stuck/unscrollable.
	useEffect(() => {
		const mql = window.matchMedia("(min-width: 1280px)");
		const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
			if (e.matches) closeMobileMenu();
		};
		onChange(mql);
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, [closeMobileMenu]);

	return (
		<>
			{/* Full-width bar - transparent until scrolled, then solid + blurred */}
			<header className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-6 border-b px-6 py-5.5 transition-colors duration-400 sm:px-10 ${isScrolled ? "border-spx-rule bg-spx-void/82 backdrop-blur-md" : "border-transparent bg-transparent"}`}>
				{/* Logo */}
				<Link href="/" aria-label="Home" className="flex shrink-0 select-none items-center gap-2">
					<Image src="/logo.png" alt="" width={36} height={72} />
					<span className="font-outfit text-lg font-semibold leading-none text-white">SPAIDER Space</span>
				</Link>

				{/* Desktop nav */}
				<nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
					{NAV_ITEMS.map((item) =>
						item.type === "dropdown" ? (
							<NavDropdown key={item.label} label={item.label} links={item.links} />
						) : (
							<NavAnchor key={item.href} href={item.href}>
								{item.label}
							</NavAnchor>
						),
					)}
				</nav>

				{/* Right side */}
				<div className="flex shrink-0 items-center gap-3">
					<Button asChild variant="solid" className="hidden px-5 py-3 tracking-[0.08em] xl:inline-flex">
						<Link href="/request-trial">REQUEST A TRIAL</Link>
					</Button>

					{/* Burger */}
					<button type="button" className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xs border border-spx-rule-2 bg-transparent text-spx-ink xl:hidden" aria-label="Open menu" aria-expanded={isMobileMenuOpen} aria-controls="spx-mobile-menu" onClick={toggleMobileMenu}>
						<MenuIcon className="h-4.5 w-4.5" aria-hidden="true" />
					</button>
				</div>
			</header>

			{/* Mobile full-screen overlay menu */}
			<div
				id="spx-mobile-menu"
				aria-hidden={!isMobileMenuOpen}
				className={`fixed inset-0 z-[100] flex flex-col justify-center gap-1 bg-spx-void/97 px-6 backdrop-blur-md transition-opacity duration-300 ease-out sm:px-10 xl:hidden ${isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
			>
				<Link href="/" aria-label="Home" onClick={closeMobileMenu} className="absolute left-6 top-6 flex shrink-0 select-none items-center gap-2 sm:left-10">
					<Image src="/logo.png" alt="" width={36} height={72} />
					<span className="font-outfit text-lg font-semibold leading-none text-white">SPAIDER Space</span>
				</Link>

				<button type="button" onClick={closeMobileMenu} aria-label="Close menu" className="absolute right-6 top-5 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xs border border-spx-rule-2 bg-transparent text-spx-ink sm:right-10">
					<XIcon className="h-4 w-4" aria-hidden="true" />
				</button>

				{NAV_ITEMS.map((item) =>
					item.type === "dropdown" ? (
						<div key={item.label}>
							<span className="block border-b border-spx-rule py-2.5 font-geist-mono text-[0.875rem] font-normal uppercase tracking-[0.06em] text-spx-ink sm:text-[1.4rem]">{item.label}</span>
							{item.links.map((link) => (
								<Link key={link.href} href={link.href} onClick={closeMobileMenu} className="block border-b border-spx-rule py-2.5 pl-5 font-geist-mono text-[0.8rem] font-normal uppercase tracking-[0.06em] text-spx-mute sm:text-[1.1rem]">
									{link.label}
								</Link>
							))}
						</div>
					) : (
						<Link key={item.href} href={item.href} onClick={closeMobileMenu} className="block border-b border-spx-rule py-2.5 font-geist-mono text-[0.875rem] font-normal uppercase tracking-[0.06em] text-spx-ink sm:text-[1.4rem]">
							{item.label}
						</Link>
					),
				)}

				<Link href="/request-trial" onClick={closeMobileMenu} className="block border-b border-spx-rule py-2.5 font-geist-mono text-[0.875rem] font-normal uppercase tracking-[0.06em] text-spx-ink sm:text-[1.4rem]">
					REQUEST A TRIAL
				</Link>
			</div>
		</>
	);
}
