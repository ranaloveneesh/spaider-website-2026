"use client";

import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";
import type React from "react";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef } from "react";

type SmoothScrollContextValue = {
	/**
	 * Scroll to a target using Lenis. Accepts:
	 * - A CSS selector string (e.g. "#pricing")
	 * - An Element
	 * - A number (Y position in px)
	 */
	scrollTo: (target: string | number | Element, options?: Record<string, unknown>) => void;
	/** Pause Lenis scrolling (e.g. while a modal/overlay is open). */
	stop: () => void;
	/** Resume Lenis scrolling after `stop`. */
	start: () => void;
	/** Direct access to the Lenis instance (may be null until mounted). */
	lenis: Lenis | null;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null);

export function useSmoothScroll(): SmoothScrollContextValue {
	const ctx = useContext(SmoothScrollContext);
	if (!ctx) {
		throw new Error("useSmoothScroll must be used within SmoothScrollProvider");
	}
	return ctx;
}

type SmoothScrollProviderProps = {
	children: React.ReactNode;
	/**
	 * Smooth scroll interpolation amount. Lower = smoother/floatier, higher = snappier.
	 * Ignored when `duration` is set (Lenis uses duration-based easing instead).
	 */
	lerp?: number;
	/** Eased scroll duration in seconds. Takes precedence over `lerp` when set. */
	duration?: number;
	/** Smooth mouse wheel scrolling. */
	smoothWheel?: boolean;
	/** Smooth touch scrolling (often better left false for native feel). */
	smoothTouch?: boolean;
};

/**
 * Client-only Lenis bootstrapper for Next.js App Router.
 *
 * - Initializes Lenis only on the client
 * - Runs a requestAnimationFrame loop
 * - Prevents multiple instances
 * - Cleans up on unmount to avoid memory leaks
 * - Makes hash links (#section) work with Lenis (initial load + hash changes + clicks)
 */
export default function SmoothScrollProvider({ children, lerp, duration, smoothWheel = true, smoothTouch = false }: SmoothScrollProviderProps) {
	const lenisRef = useRef<Lenis | null>(null);
	const rafIdRef = useRef<number | null>(null);
	const pathname = usePathname();
	const prevPathnameRef = useRef(pathname);
	const isPopStateRef = useRef(false);

	const scrollTo = useCallback((target: string | number | Element, options?: Record<string, unknown>) => {
		const lenis = lenisRef.current;
		if (!lenis) return;
		// Lenis types vary across versions; keep options flexible and forward them.
		(lenis as any).scrollTo(target as any, options as any);
	}, []);

	const stop = useCallback(() => {
		lenisRef.current?.stop();
	}, []);

	const start = useCallback(() => {
		lenisRef.current?.start();
	}, []);

	const contextValue = useMemo<SmoothScrollContextValue>(
		() => ({
			scrollTo,
			stop,
			start,
			lenis: lenisRef.current,
		}),
		[scrollTo, stop, start],
	);

	// Back/forward navigations must keep Next's scroll restoration, so flag
	// them and skip the scroll-to-top reset below. The flag self-clears in
	// case the popstate never produces a pathname change (hash-only history).
	useEffect(() => {
		let clearTimer: number | undefined;
		const onPopState = () => {
			isPopStateRef.current = true;
			window.clearTimeout(clearTimer);
			clearTimer = window.setTimeout(() => {
				isPopStateRef.current = false;
			}, 1000);
		};
		window.addEventListener("popstate", onPopState);
		return () => {
			window.clearTimeout(clearTimer);
			window.removeEventListener("popstate", onPopState);
		};
	}, []);

	// Route changes: Lenis keeps its own scroll position across App Router
	// navigations (this provider lives in a persistent layout), so Next's
	// built-in scroll-to-top gets overridden on the next animation frame.
	// Reset Lenis to the top on every pathname change instead.
	useEffect(() => {
		// Compare instead of a first-run flag: also absorbs StrictMode's
		// dev-only double effect run on mount.
		if (prevPathnameRef.current === pathname) return;
		prevPathnameRef.current = pathname;

		if (isPopStateRef.current) {
			isPopStateRef.current = false;
			return;
		}

		const lenis = lenisRef.current;
		if (!lenis) return;

		const hash = window.location.hash;
		if (hash) {
			const el = document.getElementById(decodeURIComponent(hash.slice(1)));
			if (el) {
				// Cross-page hash link: let layout settle, then scroll to the target.
				window.requestAnimationFrame(() => scrollTo(el, { offset: -72, immediate: false }));
				return;
			}
		}

		(lenis as any).scrollTo(0, { immediate: true, force: true });
	}, [pathname, scrollTo]);

	useEffect(() => {
		// Guard: only create once, even if React re-runs effects in dev.
		if (lenisRef.current) return;

		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		const lenis = new Lenis({
			...(duration != null ? { duration } : { lerp: lerp ?? 0.1 }),
			smoothWheel: smoothWheel && !prefersReducedMotion,
			// `smoothTouch` isn't part of the installed LenisOptions type.
			// The equivalent option in this version is `syncTouch`.
			syncTouch: smoothTouch,
		});

		lenisRef.current = lenis;

		const raf = (time: number) => {
			lenis.raf(time);
			rafIdRef.current = window.requestAnimationFrame(raf);
		};
		rafIdRef.current = window.requestAnimationFrame(raf);

		const scrollToHash = (hash: string) => {
			if (!hash) return;
			const id = hash.startsWith("#") ? hash.slice(1) : hash;
			if (!id) return;

			const el = document.getElementById(decodeURIComponent(id));
			if (!el) return;

			// Offset by header height if you use a fixed header.
			// You can tweak this later (e.g., read CSS var --header-height).
			scrollTo(el, { offset: -72, immediate: false });
		};

		// Initial load: if URL has a hash, scroll once after paint.
		// (Using rAF ensures layout is settled for most pages.)
		const initialHash = window.location.hash;
		if (initialHash) {
			window.requestAnimationFrame(() => scrollToHash(initialHash));
		}

		// Hash changes (e.g., browser back/forward or manual edits).
		const onHashChange = () => scrollToHash(window.location.hash);
		window.addEventListener("hashchange", onHashChange, { passive: true });

		// Click interception for in-page anchors: <a href="#section">.
		const onClick = (e: MouseEvent) => {
			const target = e.target as Element | null;
			if (!target) return;

			const anchor = target.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
			if (!anchor) return;

			const href = anchor.getAttribute("href");
			if (!href || href === "#") return;

			// Allow modifiers/new tab behavior.
			if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
			if (anchor.target && anchor.target !== "_self") return;

			e.preventDefault();

			// Update URL hash without jumping natively.
			history.pushState(null, "", href);
			scrollToHash(href);
		};
		document.addEventListener("click", onClick);

		return () => {
			document.removeEventListener("click", onClick);
			window.removeEventListener("hashchange", onHashChange);

			if (rafIdRef.current != null) {
				window.cancelAnimationFrame(rafIdRef.current);
				rafIdRef.current = null;
			}

			lenis.destroy();
			lenisRef.current = null;
		};
	}, [lerp, duration, smoothWheel, smoothTouch, scrollTo]);

	return <SmoothScrollContext.Provider value={contextValue}>{children}</SmoothScrollContext.Provider>;
}
