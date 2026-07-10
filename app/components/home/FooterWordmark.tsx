"use client";

import { useRef } from "react";

export default function FooterWordmark() {
	const spotlightRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current || !spotlightRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left - 100; // offset by half spotlight width
		const y = e.clientY - rect.top - 100; // offset by half spotlight height
		spotlightRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
	};

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: decorative cursor-follow spotlight, not a keyboard-operable control
		<div ref={containerRef} className="group relative hidden overflow-hidden sm:block" onMouseMove={handleMouseMove}>
			{/* Ambient under-glow - makes text barely visible at rest */}
			<div
				className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out"
				style={{
					background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)",
				}}
			/>

			<img alt="" aria-hidden width={3000} height={750} decoding="async" className="pointer-events-none mx-auto w-full select-none" style={{ opacity: 0.7, filter: "brightness(1.4)" }} src="/spaider-logo-footer.png" />

			{/* Cursor spotlight */}
			<div
				ref={spotlightRef}
				className="pointer-events-none absolute opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
				style={{
					top: "-100px",
					left: "-100px",
					width: "200px",
					height: "200px",
					borderRadius: "9999px",
					mixBlendMode: "soft-light",
					backgroundImage: "radial-gradient(100px, rgba(255,255,255,0.8), rgba(255,255,255,0))",
					willChange: "transform",
				}}
			/>
		</div>
	);
}
