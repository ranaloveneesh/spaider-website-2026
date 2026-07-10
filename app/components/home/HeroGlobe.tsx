"use client";

import { useEffect, useRef } from "react";
import { AdditiveBlending, BufferGeometry, Color, Float32BufferAttribute, Group, PerspectiveCamera, Points, PointsMaterial, Scene, WebGLRenderer } from "three";

/**
 * Port of source's three.js hero field (`startGL` in spaiderwebsite/src/main.js):
 * a fibonacci-sphere particle globe (cyan, additive) offset to the right, plus a
 * faint dust field, with slow auto-rotation and pointer parallax. Pauses when
 * offscreen; respects prefers-reduced-motion (no auto-rotation, parallax only).
 */
export default function HeroGlobe() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

		const scene = new Scene();
		const cam = new PerspectiveCamera(55, 1, 0.1, 100);
		cam.position.z = 26;
		const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
		renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));

		const group = new Group();
		scene.add(group);

		// Globe: N points distributed on a sphere via the golden-angle spiral
		const N = 2600;
		const R = 13;
		const pos = new Float32Array(N * 3);
		const phi = Math.PI * (3 - Math.sqrt(5));
		for (let i = 0; i < N; i++) {
			const y = 1 - (i / (N - 1)) * 2;
			const rad = Math.sqrt(1 - y * y);
			const th = phi * i;
			pos[i * 3] = Math.cos(th) * rad * R;
			pos[i * 3 + 1] = y * R;
			pos[i * 3 + 2] = Math.sin(th) * rad * R;
		}
		const geo = new BufferGeometry();
		geo.setAttribute("position", new Float32BufferAttribute(pos, 3));
		const globeMat = new PointsMaterial({
			size: 0.055,
			sizeAttenuation: true,
			transparent: true,
			opacity: 0.75,
			color: new Color("#59e8f5"),
			blending: AdditiveBlending,
			depthWrite: false,
		});
		group.add(new Points(geo, globeMat));

		// Dust field
		const N2 = 900;
		const pos2 = new Float32Array(N2 * 3);
		for (let i = 0; i < N2; i++) {
			pos2[i * 3] = (Math.random() - 0.5) * 70;
			pos2[i * 3 + 1] = (Math.random() - 0.5) * 40;
			pos2[i * 3 + 2] = (Math.random() - 0.5) * 30 - 6;
		}
		const geo2 = new BufferGeometry();
		geo2.setAttribute("position", new Float32BufferAttribute(pos2, 3));
		const dustMat = new PointsMaterial({
			size: 0.04,
			transparent: true,
			opacity: 0.35,
			color: new Color("#b9c0cd"),
			blending: AdditiveBlending,
			depthWrite: false,
		});
		const dust = new Points(geo2, dustMat);
		scene.add(dust);

		group.position.x = innerWidth > 900 ? 12 : 0;
		group.position.y = -1.5;

		let mx = 0,
			my = 0,
			tx = 0,
			ty = 0,
			visible = true;
		const t0 = performance.now();

		const onMove = (e: PointerEvent) => {
			tx = (e.clientX / innerWidth - 0.5) * 0.35;
			ty = (e.clientY / innerHeight - 0.5) * 0.22;
		};
		addEventListener("pointermove", onMove, { passive: true });

		const size = () => {
			renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
			cam.aspect = canvas.clientWidth / canvas.clientHeight;
			cam.updateProjectionMatrix();
			group.position.x = innerWidth > 900 ? 12 : 0;
		};
		size();
		addEventListener("resize", size);

		const io = new IntersectionObserver(
			(es) => {
				visible = es[0].isIntersecting;
			},
			{ threshold: 0 },
		);
		io.observe(canvas);

		renderer.setAnimationLoop(() => {
			if (!visible) return;
			const t = (performance.now() - t0) / 1000;
			mx += (tx - mx) * 0.045;
			my += (ty - my) * 0.045;
			group.rotation.y = t * (reduce ? 0 : 0.05) + mx;
			group.rotation.x = my;
			dust.rotation.y = t * (reduce ? 0 : 0.008);
			renderer.render(scene, cam);
		});

		return () => {
			renderer.setAnimationLoop(null);
			io.disconnect();
			removeEventListener("resize", size);
			removeEventListener("pointermove", onMove);
			geo.dispose();
			geo2.dispose();
			globeMat.dispose();
			dustMat.dispose();
			renderer.dispose();
		};
	}, []);

	// Pinned to the first viewport-height like source's #gl (the hero section
	// itself can grow taller than 100svh when content wraps).
	return <canvas ref={canvasRef} className="absolute inset-x-0 top-0 h-[100svh] w-full" />;
}
