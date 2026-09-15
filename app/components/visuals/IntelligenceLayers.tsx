"use client";

import { useEffect, useRef } from "react";
import {
	AdditiveBlending,
	BufferAttribute,
	BufferGeometry,
	Color,
	PerspectiveCamera,
	Points,
	Scene,
	ShaderMaterial,
	Vector2,
	WebGLRenderer,
} from "three";

type IntelligenceLayersProps = {
	className?: string;
	compact?: boolean;
};

const vertexShader = `
attribute float aRole;
attribute float aSeed;
attribute float aTone;

uniform float uTime;
uniform float uPixelRatio;
uniform float uMotion;
uniform vec2 uPointer;

varying float vRole;
varying float vTone;
varying float vPulse;

mat2 rotate2d(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}

float roleMask(float role) {
  return 1.0 - step(0.48, abs(aRole - role));
}

void main() {
  vec3 p = position;
  float time = uTime * uMotion;
  float knowledge = roleMask(0.0);
  float ontology = roleMask(1.0);
  float model = roleMask(2.0);
  float agents = roleMask(3.0);
  float trust = roleMask(4.0);
  float flow = roleMask(5.0);

  p.y += (sin(p.x * 0.7 + p.z * 0.5 + time * 0.28 + aSeed * 8.0) * 0.035) * knowledge;
  p.xz = mix(p.xz, rotate2d(time * 0.016) * p.xz, ontology);

  vec3 modelP = p;
  modelP.xz = rotate2d(time * 0.05) * modelP.xz;
  modelP.xy = rotate2d(sin(time * 0.025) * 0.12) * modelP.xy;
  p = mix(p, modelP, model);

  p.x += sin(time * 0.17 + p.y * 2.0 + aSeed * 12.0) * 0.05 * agents;
  p.y += sin(p.x * 0.8 - time * 0.2 + aSeed * 7.0) * 0.016 * trust;

  float travel = fract(aSeed + time * 0.025);
  float flowY = mix(-4.35, 4.05, travel);
  float funnel = smoothstep(-3.0, -0.6, flowY);
  float fan = smoothstep(1.0, 2.6, flowY);
  float flowX = mix(position.x, position.x * 0.09, funnel);
  flowX = mix(flowX, position.x * 0.83, fan);
  float flowZ = mix(position.z, position.z * 0.1, funnel);
  flowZ = mix(flowZ, position.z * 0.7, fan);
  p = mix(p, vec3(flowX, flowY, flowZ), flow);

  p.x += uPointer.x * (0.14 + abs(p.z) * 0.012);
  p.y -= uPointer.y * 0.08;

  float streamPulse = smoothstep(0.76, 1.0, sin(travel * 82.0 - time * 1.3 + aSeed * 5.0));
  float pulse = flow * streamPulse + trust * 0.08;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float structural = ontology * 0.008 + model * 0.013 + agents * 0.011 + trust * 0.014;
  gl_PointSize = clamp((0.038 + structural + pulse * 0.022) * uPixelRatio * (340.0 / max(1.0, -mv.z)), 0.65, 4.8);
  gl_Position = projectionMatrix * mv;

  vRole = aRole;
  vTone = aTone;
  vPulse = pulse;
}
`;

const fragmentShader = `
varying float vRole;
varying float vTone;
varying float vPulse;

void main() {
  vec2 q = gl_PointCoord - vec2(0.5);
  float radius = length(q);
  float halo = smoothstep(0.5, 0.04, radius);
  float core = smoothstep(0.14, 0.0, radius);
  if (halo < 0.02) discard;

  vec3 mineral = vec3(0.72, 0.80, 0.84);
  vec3 cyan = vec3(0.10, 0.87, 0.91);
  vec3 blue = vec3(0.18, 0.40, 0.96);
  vec3 color = vTone < 0.5
    ? mix(mineral, cyan, vTone * 2.0)
    : mix(cyan, blue, (vTone - 0.5) * 2.0);
  float alpha = halo * 0.16 + core * (0.62 + vPulse * 0.36);
  gl_FragColor = vec4(color * (1.02 + vPulse * 0.76), alpha);
}
`;

function randomFactory(seed = 170726) {
	let value = seed % 2147483647;
	return () => {
		value = (value * 16807) % 2147483647;
		return (value - 1) / 2147483646;
	};
}

function point(array: Float32Array, index: number, x: number, y: number, z: number) {
	const offset = index * 3;
	array[offset] = x;
	array[offset + 1] = y;
	array[offset + 2] = z;
}

function createField(count: number) {
	const random = randomFactory();
	const positions = new Float32Array(count * 3);
	const roles = new Float32Array(count);
	const seeds = new Float32Array(count);
	const tones = new Float32Array(count);

	const knowledgeEnd = Math.floor(count * 0.3);
	const ontologyEnd = Math.floor(count * 0.45);
	const modelEnd = Math.floor(count * 0.69);
	const agentsEnd = Math.floor(count * 0.87);
	const trustEnd = Math.floor(count * 0.96);

	for (let index = 0; index < count; index += 1) {
		const seed = random();
		seeds[index] = seed;

		if (index < knowledgeEnd) {
			roles[index] = 0;
			const band = index % 8;
			const x = (random() - 0.5) * 10.4;
			const z = (random() - 0.5) * 4.8;
			point(positions, index, x, -3.4 + band * 0.1 + Math.sin(x * 0.5 + z) * 0.07, z);
			tones[index] = 0.08 + random() * 0.25;
			continue;
		}

		if (index < ontologyEnd) {
			roles[index] = 1;
			const pattern = index % 3;
			if (pattern === 0) {
				const lane = Math.floor(random() * 13) - 6;
				point(positions, index, lane * 0.39, -1.76, (random() - 0.5) * 3.4);
			} else if (pattern === 1) {
				const lane = Math.floor(random() * 9) - 4;
				point(positions, index, (random() - 0.5) * 9.6, -1.73, lane * 0.34);
			} else {
				const node = index % 9;
				const angle = (node / 8) * Math.PI * 2;
				const travel = random();
				point(positions, index, Math.cos(angle) * 4.0 * travel, -1.69, Math.sin(angle) * 1.45 * travel);
			}
			tones[index] = 0.18 + random() * 0.28;
			continue;
		}

		if (index < modelEnd) {
			roles[index] = 2;
			const theta = random() * Math.PI * 2;
			const cosPhi = random() * 2 - 1;
			const sinPhi = Math.sqrt(1 - cosPhi * cosPhi);
			const shell = index % 4;
			const radius = 0.72 + shell * 0.25;
			point(positions, index, radius * sinPhi * Math.cos(theta), radius * cosPhi, radius * sinPhi * Math.sin(theta));
			tones[index] = 0.38 + shell * 0.11 + random() * 0.08;
			continue;
		}

		if (index < agentsEnd) {
			roles[index] = 3;
			const workflow = index % 7;
			const x = (random() - 0.5) * 9.6;
			point(positions, index, x, 2.25 + workflow * 0.11 + Math.sin(x * 0.75 + workflow) * 0.16, (workflow - 3) * 0.18);
			tones[index] = 0.2 + (workflow % 5) * 0.14;
			continue;
		}

		if (index < trustEnd) {
			roles[index] = 4;
			const x = (random() - 0.5) * 10.2;
			const z = (random() - 0.5) * 4.0;
			point(positions, index, x, 3.72 + (random() - 0.5) * 0.15, z);
			tones[index] = 0.03 + random() * 0.22;
			continue;
		}

		roles[index] = 5;
		const lane = index % 7;
		point(positions, index, -4.35 + lane * 1.45 + (random() - 0.5) * 0.16, -4.35, (lane - 3) * 0.3);
		tones[index] = 0.26 + (lane % 4) * 0.14;
	}

	return { positions, roles, seeds, tones };
}

export default function IntelligenceLayers({ className = "", compact = false }: IntelligenceLayersProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const mobile = window.innerWidth < 760;
		const count = mobile ? 30000 : compact ? 52000 : 76000;
		const field = createField(count);

		const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "high-performance" });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35));
		renderer.setClearColor(new Color("#07080c"), 0);

		const scene = new Scene();
		const camera = new PerspectiveCamera(42, 1, 0.1, 50);
		camera.position.set(0, 0.05, 13.3);

		const geometry = new BufferGeometry();
		geometry.setAttribute("position", new BufferAttribute(field.positions, 3));
		geometry.setAttribute("aRole", new BufferAttribute(field.roles, 1));
		geometry.setAttribute("aSeed", new BufferAttribute(field.seeds, 1));
		geometry.setAttribute("aTone", new BufferAttribute(field.tones, 1));

		const pointer = new Vector2();
		const pointerTarget = new Vector2();
		const material = new ShaderMaterial({
			vertexShader,
			fragmentShader,
			transparent: true,
			depthWrite: false,
			blending: AdditiveBlending,
			uniforms: {
				uTime: { value: 0 },
				uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.35) },
				uMotion: { value: reducedMotion ? 0 : 1 },
				uPointer: { value: pointer },
			},
		});
		const particles = new Points(geometry, material);
		particles.scale.setScalar(mobile ? 0.68 : compact ? 0.82 : 0.94);
		particles.position.y = mobile ? 0.2 : 0;
		scene.add(particles);

		let visible = true;
		let frame = 0;
		const started = performance.now();

		const resize = () => {
			const width = canvas.clientWidth;
			const height = canvas.clientHeight;
			renderer.setSize(width, height, false);
			camera.aspect = width / Math.max(height, 1);
			camera.updateProjectionMatrix();
		};

		const onPointerMove = (event: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			pointerTarget.set((event.clientX - rect.left) / rect.width - 0.5, (event.clientY - rect.top) / rect.height - 0.5);
		};

		const observer = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
		});
		observer.observe(canvas);
		canvas.addEventListener("pointermove", onPointerMove, { passive: true });
		window.addEventListener("resize", resize);
		resize();

		const render = () => {
			frame = window.requestAnimationFrame(render);
			if (!visible) return;
			pointer.lerp(pointerTarget, 0.035);
			material.uniforms.uTime.value = (performance.now() - started) / 1000;
			material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 1.35);
			renderer.render(scene, camera);
		};
		render();

		return () => {
			window.cancelAnimationFrame(frame);
			observer.disconnect();
			canvas.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("resize", resize);
			geometry.dispose();
			material.dispose();
			renderer.dispose();
		};
	}, [compact]);

	return <canvas ref={canvasRef} className={`h-full w-full ${className}`} aria-label="Animated particle visualization of SPAIDER's five-layer intelligence architecture" />;
}
