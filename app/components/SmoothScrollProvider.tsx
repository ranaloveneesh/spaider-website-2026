"use client";

import Lenis from "@studio-freight/lenis";
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
	 * Recommended around 0.1 for most marketing sites.
	 */
	lerp?: number;
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
export default function SmoothScrollProvider({ children, lerp = 0.1, smoothWheel = true, smoothTouch = false }: SmoothScrollProviderProps) {
	const lenisRef = useRef<Lenis | null>(null);
	const rafIdRef = useRef<number | null>(null);

	const scrollTo = useCallback((target: string | number | Element, options?: Record<string, unknown>) => {
		const lenis = lenisRef.current;
		if (!lenis) return;
		// Lenis types vary across versions; keep options flexible and forward them.
		(lenis as any).scrollTo(target as any, options as any);
	}, []);

	const contextValue = useMemo<SmoothScrollContextValue>(
		() => ({
			scrollTo,
			lenis: lenisRef.current,
		}),
		[scrollTo],
	);

	useEffect(() => {
		// Guard: only create once, even if React re-runs effects in dev.
		if (lenisRef.current) return;

		const lenis = new Lenis({
			lerp,
			smoothWheel,
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
	}, [lerp, smoothWheel, smoothTouch, scrollTo]);

	return <SmoothScrollContext.Provider value={contextValue}>{children}</SmoothScrollContext.Provider>;
}
