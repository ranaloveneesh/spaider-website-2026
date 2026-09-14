"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDown, ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSmoothScroll } from "@/app/components/SmoothScrollProvider";
import type { ArchitecturePlayback } from "@/app/components/visuals/ArchitectureParticleScene";
import styles from "./ArchitectureVisual.module.css";

const ParticleScene = dynamic(() => import("@/app/components/visuals/ArchitectureParticleScene"), {
	ssr: false,
	loading: () => <div className={styles.loading}>Loading architecture visualization…</div>,
});

const LAYERS = [
	{ name: "Knowledge", title: "Aerospace knowledge.", body: "Documents, standards, project history, and operational records provide the source material for technical work. Source metadata stays connected to the information.", terms: ["Technical documents", "Standards", "Program records"] },
	{ name: "Ontologies", title: "Technical meaning and relationships.", body: "Aerospace ontologies connect requirements, systems, interfaces, evidence, and mission context. These relationships give the system a consistent structure for interpreting technical information.", terms: ["Domain concepts", "Typed relationships", "Knowledge graphs"] },
	{ name: "Models", title: "Domain models for technical work.", body: "Domain-adapted components and routed foundation models support extraction, classification, retrieval, and reasoning across aerospace workflows.", terms: ["Domain adaptation", "Model routing", "Technical reasoning"] },
	{ name: "Agents", title: "Expert agents for space workflows.", body: "SAGAN, SPOCK, and KEPLER connect knowledge and tools across proposals, systems engineering, and mission operations, with defined workflows and approval points.", terms: ["SAGAN", "SPOCK", "KEPLER"] },
	{ name: "Trust", title: "Verification and explainability.", body: "The Trust Layer connects outputs to evidence, checks consistency, and records confidence and review state. These mechanisms operate across the architecture, not only at the final output.", terms: ["Provenance", "Consistency checks", "Human review"] },
] as const;

export default function ArchitectureVisual() {
	const sectionRef = useRef<HTMLElement>(null);
	const frameRef = useRef<HTMLDivElement>(null);
	const endRef = useRef<HTMLDivElement>(null);
	const playback = useRef<ArchitecturePlayback>({ progress: 0, paused: false, reducedMotion: false });
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);
	const [reducedMotion, setReducedMotion] = useState(false);
	const [ready, setReady] = useState(false);
	const { scrollTo } = useSmoothScroll();

	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const onPreference = () => {
			playback.current.reducedMotion = media.matches;
			setReducedMotion(media.matches);
			updateProgress();
			window.dispatchEvent(new Event("architecture-playback"));
		};
		function updateProgress() {
			const section = sectionRef.current;
			const frame = frameRef.current;
			if (!section || !frame || playback.current.paused) return;
			// Account for the fixed site header and this section's document position.
			const top = parseFloat(getComputedStyle(frame).top) || 0;
			const travel = Math.max(1, section.offsetHeight - frame.offsetHeight);
			const exact = Math.max(0, Math.min(1, (top - section.getBoundingClientRect().top) / travel)) * (LAYERS.length - 1);
			const selected = Math.round(exact);
			playback.current.progress = playback.current.reducedMotion ? selected : exact;
			setActive(previous => previous === selected ? previous : selected);
		}
		onPreference();
		window.addEventListener("scroll", updateProgress, { passive: true });
		window.addEventListener("resize", updateProgress);
		window.addEventListener("architecture-playback", updateProgress);
		media.addEventListener("change", onPreference);
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) { setReady(true); observer.disconnect(); }
		}, { rootMargin: "400px" });
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", updateProgress);
			window.removeEventListener("resize", updateProgress);
			window.removeEventListener("architecture-playback", updateProgress);
			media.removeEventListener("change", onPreference);
		};
	}, []);

	function selectLayer(index: number) {
		const section = sectionRef.current;
		const frame = frameRef.current;
		if (!section || !frame) return;
		playback.current.paused = false;
		setPaused(false);
		const top = parseFloat(getComputedStyle(frame).top) || 0;
		const travel = section.offsetHeight - frame.offsetHeight;
		const destination = window.scrollY + section.getBoundingClientRect().top - top + travel * index / (LAYERS.length - 1);
		scrollTo(destination, { immediate: playback.current.reducedMotion, duration: 1.1 });
		window.dispatchEvent(new Event("architecture-playback"));
	}

	function togglePause() {
		playback.current.paused = !playback.current.paused;
		setPaused(playback.current.paused);
		window.dispatchEvent(new Event("architecture-playback"));
	}

	return (
		<>
			<section ref={sectionRef} id="intelligence-architecture" className={styles.journey} aria-label="SPAIDER five-layer intelligence architecture">
				<div ref={frameRef} className={styles.frame} data-layer={LAYERS[active].name} data-paused={paused}>
					<div className={styles.scene}>{ready && <ParticleScene playback={playback} />}</div>
					<header className={styles.header}>
						<div><span className="spx-eyebrow">SPAIDER technology</span><h2>Five-layer intelligence architecture</h2></div>
						<div className={styles.controls}>
							{!reducedMotion && <button type="button" onClick={togglePause} aria-pressed={paused} aria-label={paused ? "Resume architecture animation" : "Pause architecture animation"}>{paused ? <Play size={14} /> : <Pause size={14} />}<span>{paused ? "Resume" : "Pause"}</span></button>}
							<button type="button" onClick={() => endRef.current && scrollTo(endRef.current, { offset: -96, immediate: reducedMotion })} aria-label="Skip visualization to technical layer details"><span>Skip</span><ArrowDown size={14} /></button>
						</div>
					</header>
					<div className={styles.copy}>
						{LAYERS.map((layer, index) => (
							<article key={layer.name} hidden={active !== index} aria-labelledby={`architecture-layer-${index}`}>
								<span className={styles.index}>0{index + 1} / 05 — {layer.name}</span>
								<h3 id={`architecture-layer-${index}`}>{layer.title}</h3>
								<p>{layer.body}</p>
								<ul>{layer.terms.map(term => <li key={term}>{term}</li>)}</ul>
								{index === 4 && <Link href="/trust-layer" className={styles.trustLink}>Explore the Trust Layer <ArrowRight size={15} /></Link>}
							</article>
						))}
					</div>
					<div className={styles.footer}>
						<p className={styles.hint}>{paused ? "Animation paused. Resume or select a layer to continue." : reducedMotion ? "Select a layer or scroll to explore." : "Scroll to explore, or select a layer."}</p>
						<nav className={styles.navigation} aria-label="Architecture layers">
							{LAYERS.map((layer, index) => <button key={layer.name} type="button" onClick={() => selectLayer(index)} aria-current={active === index ? "step" : undefined} aria-label={`Explore layer ${index + 1}: ${layer.name}`}><span>0{index + 1}</span><strong>{layer.name}</strong><i aria-hidden="true" /></button>)}
						</nav>
					</div>
				</div>
			</section>
			<div ref={endRef} id="technical-layer-details" className={styles.end} />
		</>
	);
}
