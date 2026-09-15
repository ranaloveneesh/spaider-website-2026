"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import * as THREE from "three";
import { createLineUniverse, createParticleUniverse, lineFragmentShader, lineVertexShader, particleFragmentShader, particleVertexShader } from "./architecture-particles";

export type ArchitecturePlayback = { progress: number; paused: boolean; reducedMotion: boolean };

const CAMERA_STAGES = [
	[0.1, 1.25, 11.7], [0.25, 0.15, 10.45], [0.15, 1.1, 11],
	[0.2, 0.05, 10.2], [0.3, 0.1, 11],
] as const;

export default function ArchitectureParticleScene({ playback }: { playback: RefObject<ArchitecturePlayback> }) {
	const hostRef = useRef<HTMLDivElement>(null);
	const [unavailable, setUnavailable] = useState(false);

	useEffect(() => {
		const host = hostRef.current;
		if (!host) return;
		let renderer: THREE.WebGLRenderer;
		try {
			renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
		} catch {
			setUnavailable(true);
			return;
		}
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35));
		renderer.setClearColor(0x02080c, 0);
		host.appendChild(renderer.domElement);
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 60);
		const group = new THREE.Group();
		scene.add(group);
		const count = window.innerWidth < 768 ? 42000 : 84000;
		const data = createParticleUniverse(count);
		const lineTargets = createLineUniverse(data.targets, count, 520);
		function geometryFor(targets: Float32Array[]) {
			const geometry = new THREE.BufferGeometry();
			targets.forEach((target, index) => geometry.setAttribute(index === 0 ? "position" : `aStage${index}`, new THREE.BufferAttribute(target, 3)));
			return geometry;
		}
		const geometry = geometryFor(data.targets);
		geometry.setAttribute("aToneEarly", new THREE.BufferAttribute(data.earlyTones, 3));
		geometry.setAttribute("aToneLate", new THREE.BufferAttribute(data.lateTones, 2));
		geometry.setAttribute("aSeed", new THREE.BufferAttribute(data.seeds, 1));
		geometry.setAttribute("aSize", new THREE.BufferAttribute(data.sizes, 1));
		const uniforms = {
			uProgress: { value: playback.current.progress }, uTime: { value: 0 },
			uPixelRatio: { value: renderer.getPixelRatio() }, uMotion: { value: 1 },
		};
		const material = new THREE.ShaderMaterial({ vertexShader: particleVertexShader, fragmentShader: particleFragmentShader, uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
		const points = new THREE.Points(geometry, material);
		points.frustumCulled = false;
		group.add(points);
		const lineGeometry = geometryFor(lineTargets);
		const lineMaterial = new THREE.ShaderMaterial({ vertexShader: lineVertexShader, fragmentShader: lineFragmentShader, uniforms: { uProgress: { value: 0 }, uColor: { value: new THREE.Color("#a9aaa8") }, uOpacity: { value: 0.17 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
		const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
		lines.frustumCulled = false;
		group.add(lines);

		let frame = 0;
		let visible = false;
		let contextLost = false;
		let lastTime = 0;
		let elapsed = 0;
		let progress = playback.current.progress;
		let firstFrame = true;
		const pointer = new THREE.Vector2();
		const cameraTarget = new THREE.Vector3();
		const lookAt = new THREE.Vector3(0, 0.25, 0);
		function render(time: number) {
			frame = 0;
			if (!visible || document.hidden || contextLost) return;
			const { paused, reducedMotion } = playback.current;
			const delta = Math.min((time - lastTime) / 1000 || 1 / 60, 0.05);
			lastTime = time;
			if (!paused) {
				const damping = reducedMotion || firstFrame ? 1 : 1 - Math.exp(-delta * 3.25);
				progress += (playback.current.progress - progress) * damping;
				if (!reducedMotion) elapsed += delta;
			}
			uniforms.uProgress.value = progress;
			uniforms.uTime.value = elapsed;
			uniforms.uMotion.value = reducedMotion ? 0 : 1;
			lineMaterial.uniforms.uProgress.value = progress;
			const stage = Math.min(3, Math.floor(progress));
			const blend = THREE.MathUtils.smoothstep(progress - stage, 0, 1);
			const from = CAMERA_STAGES[stage];
			const to = CAMERA_STAGES[stage + 1];
			cameraTarget.set(THREE.MathUtils.lerp(from[0], to[0], blend), THREE.MathUtils.lerp(from[1], to[1], blend), THREE.MathUtils.lerp(from[2], to[2], blend));
			if (!paused || firstFrame) camera.position.lerp(cameraTarget, reducedMotion || firstFrame ? 1 : 1 - Math.exp(-delta * 2.1));
			camera.lookAt(lookAt);
			if (!paused && !reducedMotion) {
				group.rotation.y += (pointer.x * 0.075 + progress * 0.018 - group.rotation.y) * (1 - Math.exp(-delta * 1.8));
				group.rotation.x += (-pointer.y * 0.045 - group.rotation.x) * (1 - Math.exp(-delta * 1.8));
			} else if (reducedMotion) group.rotation.set(0, 0, 0);
			renderer.render(scene, camera);
			firstFrame = false;
			if (!paused && !reducedMotion) schedule();
		}
		function schedule() {
			if (!frame && visible && !document.hidden && !contextLost) frame = requestAnimationFrame(render);
		}
		function resize() {
			const width = host!.clientWidth;
			const height = host!.clientHeight;
			if (!width || !height) return;
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			group.scale.setScalar(Math.min(1, camera.aspect / 1.15));
			schedule();
		}
		function onPointer(event: PointerEvent) {
			const rect = host!.getBoundingClientRect();
			pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, (event.clientY - rect.top) / rect.height * 2 - 1);
		}
		function loseContext(event: Event) {
			event.preventDefault();
			contextLost = true;
			cancelAnimationFrame(frame);
			frame = 0;
			setUnavailable(true);
		}
		function restoreContext() {
			contextLost = false;
			setUnavailable(false);
			firstFrame = true;
			resize();
		}
		const observer = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
			if (visible) schedule();
			else { cancelAnimationFrame(frame); frame = 0; }
		});
		observer.observe(host);
		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(host);
		// Scroll and control changes also request a single frame in reduced-motion mode.
		window.addEventListener("scroll", schedule, { passive: true });
		window.addEventListener("architecture-playback", schedule);
		document.addEventListener("visibilitychange", schedule);
		host.addEventListener("pointermove", onPointer);
		renderer.domElement.addEventListener("webglcontextlost", loseContext);
		renderer.domElement.addEventListener("webglcontextrestored", restoreContext);
		resize();
		return () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
			resizeObserver.disconnect();
			window.removeEventListener("scroll", schedule);
			window.removeEventListener("architecture-playback", schedule);
			document.removeEventListener("visibilitychange", schedule);
			host.removeEventListener("pointermove", onPointer);
			renderer.domElement.removeEventListener("webglcontextlost", loseContext);
			renderer.domElement.removeEventListener("webglcontextrestored", restoreContext);
			geometry.dispose(); lineGeometry.dispose(); material.dispose(); lineMaterial.dispose();
			renderer.dispose();
			renderer.domElement.remove();
		};
	}, [playback]);

	return <div ref={hostRef} style={{ position: "absolute", inset: 0 }} aria-hidden="true">
		{unavailable && <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-sm text-spx-mute">The interactive graphic is unavailable on this device. Explore the five layers using the controls below.</div>}
	</div>;
}
