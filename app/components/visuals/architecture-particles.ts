// Five-stage adaptation of the original SPAIDER Visual Lab particle geometry and shaders.
// The AI Foundations and Private Deployment scenes are omitted; all assets live in V2.

export const particleVertexShader = `
  attribute vec3 aStage1;
  attribute vec3 aStage2;
  attribute vec3 aStage3;
  attribute vec3 aStage4;
  attribute vec3 aToneEarly;
  attribute vec2 aToneLate;
  attribute float aSeed;
  attribute float aSize;

  uniform float uProgress;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uMotion;

  varying float vSeed;
  varying float vDepth;
  varying float vStage;
  varying float vTone;

  vec3 stagePosition(float progress) {
    float segment = floor(progress);
    float blend = smoothstep(0.0, 1.0, fract(progress));

    if (segment < 1.0) return mix(position, aStage1, blend);
    if (segment < 2.0) return mix(aStage1, aStage2, blend);
    if (segment < 3.0) return mix(aStage2, aStage3, blend);
    if (segment < 4.0) return mix(aStage3, aStage4, blend);
    return aStage4;
  }

  float stageTone(float progress) {
    float segment = floor(progress);
    float blend = smoothstep(0.0, 1.0, fract(progress));
    float tone0 = aToneEarly.x;
    float tone1 = aToneEarly.y;
    float tone2 = aToneEarly.z;

    if (segment < 1.0) return mix(tone0, tone1, blend);
    if (segment < 2.0) return mix(tone1, tone2, blend);
    if (segment < 3.0) return mix(tone2, aToneLate.x, blend);
    if (segment < 4.0) return mix(aToneLate.x, aToneLate.y, blend);
    return aToneLate.y;
  }

  void main() {
    vec3 transformed = stagePosition(clamp(uProgress, 0.0, 4.0));
    float breathing = sin(uTime * 0.28 + aSeed * 31.0) * 0.018 * uMotion;
    transformed += normalize(transformed + vec3(0.0001)) * breathing;

    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    float anchor = step(0.985, aSeed);
    float ontologyPresence = 1.0 - smoothstep(0.34, 0.84, abs(uProgress - 1.0));
    float modelPresence = 1.0 - smoothstep(0.34, 0.84, abs(uProgress - 2.0));
    float agentPresence = 1.0 - smoothstep(0.34, 0.84, abs(uProgress - 3.0));
    float trustPresence = 1.0 - smoothstep(0.34, 0.84, abs(uProgress - 4.0));
    float pathwayPresence = max(trustPresence, max(ontologyPresence, max(modelPresence, agentPresence)));
    float flowPulse = smoothstep(0.62, 1.0, sin(transformed.x * 2.25 - uTime * 1.35 + transformed.y * 0.72 + aSeed * 4.0));
    float size = mix(0.036, 0.135, anchor) + aSize * 0.024 + flowPulse * pathwayPresence * uMotion * 0.014;
    // Keep the lab's point field readable in the shorter, embedded website canvas.
    gl_PointSize = clamp(size * uPixelRatio * (350.0 / max(1.0, -mvPosition.z)), 1.0, 5.4);
    gl_Position = projectionMatrix * mvPosition;

    vSeed = aSeed;
    vDepth = clamp(1.0 - (-mvPosition.z / 22.0), 0.18, 1.0);
    vStage = uProgress;
    vTone = stageTone(clamp(uProgress, 0.0, 4.0));
  }
`;

export const particleFragmentShader = `
  varying float vSeed;
  varying float vDepth;
  varying float vStage;
  varying float vTone;

  void main() {
    vec2 point = gl_PointCoord - vec2(0.5);
    float distanceToCenter = length(point);
    float halo = smoothstep(0.5, 0.04, distanceToCenter);
    float core = smoothstep(0.16, 0.0, distanceToCenter);
    float anchor = step(0.985, vSeed);
    float ontologyPresence = 1.0 - smoothstep(0.32, 0.84, abs(vStage - 1.0));
    float alpha = (halo * mix(0.075, 0.16, anchor) + core * mix(0.34, 0.86, anchor)) * vDepth;
    alpha *= 1.6 * mix(1.0, 0.74, ontologyPresence);
    if (alpha < 0.018) discard;
    vec3 mineral = vec3(0.83, 0.88, 0.88);
    vec3 cyan = vec3(0.04, 0.55, 0.61);
    vec3 navy = vec3(0.16, 0.36, 0.68);
    vec3 toneColor = vTone < 0.5
      ? mix(mineral, cyan, vTone * 2.0)
      : mix(cyan, navy, (vTone - 0.5) * 2.0);
    float workflowPresence = 1.0 - smoothstep(0.36, 0.86, abs(vStage - 3.0));
    float trustPresence = 1.0 - smoothstep(0.36, 0.86, abs(vStage - 4.0));
    float pulse = 0.86 + 0.14 * sin(vSeed * 77.0 + vStage * 3.0);
    gl_FragColor = vec4(toneColor * mix(1.0, pulse, max(trustPresence, workflowPresence)), alpha);
  }
`;

export const lineVertexShader = `
  attribute vec3 aStage1;
  attribute vec3 aStage2;
  attribute vec3 aStage3;
  attribute vec3 aStage4;
  uniform float uProgress;
  varying vec3 vSystemPosition;

  vec3 stagePosition(float progress) {
    float segment = floor(progress);
    float blend = smoothstep(0.0, 1.0, fract(progress));
    if (segment < 1.0) return mix(position, aStage1, blend);
    if (segment < 2.0) return mix(aStage1, aStage2, blend);
    if (segment < 3.0) return mix(aStage2, aStage3, blend);
    if (segment < 4.0) return mix(aStage3, aStage4, blend);
    return aStage4;
  }

  void main() {
    vec3 transformed = stagePosition(clamp(uProgress, 0.0, 4.0));
    vSystemPosition = transformed;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
`;

export const lineFragmentShader = `
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uProgress;
  varying vec3 vSystemPosition;
  void main() {
    float ontologyPresence = 1.0 - smoothstep(0.3, 0.78, abs(uProgress - 1.0));
    float modelPresence = 1.0 - smoothstep(0.3, 0.78, abs(uProgress - 2.0));
    float workflowPresence = 1.0 - smoothstep(0.3, 0.78, abs(uProgress - 3.0));
    float trustPresence = 1.0 - smoothstep(0.3, 0.78, abs(uProgress - 4.0));
    vec3 cyan = vec3(0.04, 0.49, 0.56);
    vec3 navy = vec3(0.14, 0.32, 0.62);
    vec3 spatialAccent = mix(cyan, navy, smoothstep(-3.5, 3.5, vSystemPosition.y));
    float accentWeight = ontologyPresence * 0.72 + modelPresence * 0.62 + workflowPresence * 0.52 + trustPresence * 0.84;
    vec3 lineColor = mix(uColor, spatialAccent, clamp(accentWeight, 0.0, 0.82));
    float semanticDim = max(workflowPresence * 0.52, trustPresence * 0.42);
    float semanticOpacity = uOpacity * (1.0 - semanticDim);
    gl_FragColor = vec4(lineColor, mix(semanticOpacity, 0.15, ontologyPresence));
  }
`;

function seededRandom(seed: number) {
  let value = seed % 2147483647;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function normalish(random: () => number) {
  return (random() + random() + random() + random() - 2) * 0.5;
}

function setPoint(target: Float32Array, index: number, x: number, y: number, z: number) {
  const offset = index * 3;
  target[offset] = x;
  target[offset + 1] = y;
  target[offset + 2] = z;
}

const ontologyLevelCounts = [1, 3, 6, 10] as const;

function ontologyNodePosition(level: number, node: number): [number, number, number] {
  const count = ontologyLevelCounts[level];
  const span = level === 0 ? 0 : 2.8 + level * 1.45;
  const x = count === 1 ? 0 : (node / (count - 1) - 0.5) * span;
  const y = 2.25 - level * 1.25;
  const z = level === 0 ? 0 : ((node % 2) - 0.5) * (0.18 + level * 0.16);
  return [x, y, z];
}

export function createParticleUniverse(count: number) {
  const random = seededRandom(16072026);
  const targets = Array.from({ length: 5 }, () => new Float32Array(count * 3));
  const tones = Array.from({ length: 5 }, () => new Float32Array(count));
  const earlyTones = new Float32Array(count * 3);
  const lateTones = new Float32Array(count * 2);
  const seeds = new Float32Array(count);
  const sizes = new Float32Array(count);

  for (let index = 0; index < count; index += 1) {
    const seed = random();
    seeds[index] = seed;
    sizes[index] = random();

    // 01 — Four semantically colored enterprise streams entering a white data basin.
    if (seed < 0.12) {
      const stream = index % 4;
      const travel = random();
      setPoint(
        targets[0],
        index,
        (stream - 1.5) * 1.05 + normalish(random) * 0.075,
        4.85 - travel * 6.05,
        (stream % 2 === 0 ? -0.42 : 0.42) + normalish(random) * 0.07
      );
      tones[0][index] = [0.4, 0.56, 0.74, 0.96][stream];
    } else {
      const angle = random() * Math.PI * 2;
      const radius = Math.sqrt(random()) * 4.7;
      const normalized = radius / 4.7;
      setPoint(
        targets[0],
        index,
        Math.cos(angle) * radius,
        -1.85 + normalized * normalized * 2.45 + normalish(random) * 0.12,
        Math.sin(angle) * radius * 0.66
      );
      tones[0][index] = 0.015;
    }

    // 02 — A schema scaffold supporting a taxonomy of classes, entities, and typed relationships.
    if (seed < 0.54) {
      const level = index % 4;
      const node = Math.floor(index / 4) % ontologyLevelCounts[level];
      const [nodeX, nodeY, nodeZ] = ontologyNodePosition(level, node);
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      const radius = Math.pow(random(), 0.54) * (0.16 + level * 0.025);
      setPoint(
        targets[1],
        index,
        nodeX + Math.sin(phi) * Math.cos(theta) * radius,
        nodeY + Math.cos(phi) * radius,
        nodeZ + Math.sin(phi) * Math.sin(theta) * radius * 0.72
      );
      tones[1][index] = level === 0 ? 0.92 : level === 1 ? 0.58 : level === 2 ? 0.28 : 0.045;
    } else if (seed < 0.76) {
      const parentLevel = index % 3;
      const childLevel = parentLevel + 1;
      const childCount = ontologyLevelCounts[childLevel];
      const parentCount = ontologyLevelCounts[parentLevel];
      const child = Math.floor(index / 3) % childCount;
      const parent = Math.min(parentCount - 1, Math.floor(child * parentCount / childCount));
      const [startX, startY, startZ] = ontologyNodePosition(parentLevel, parent);
      const [endX, endY, endZ] = ontologyNodePosition(childLevel, child);
      const travel = random();
      const inverse = 1 - travel;
      const controlX = (startX + endX) * 0.5;
      const controlY = (startY + endY) * 0.5 + 0.18;
      const controlZ = (startZ + endZ) * 0.5 + (child % 2 === 0 ? 0.38 : -0.38);
      setPoint(
        targets[1],
        index,
        inverse * inverse * startX + 2 * inverse * travel * controlX + travel * travel * endX + normalish(random) * 0.018,
        inverse * inverse * startY + 2 * inverse * travel * controlY + travel * travel * endY + normalish(random) * 0.018,
        inverse * inverse * startZ + 2 * inverse * travel * controlZ + travel * travel * endZ + normalish(random) * 0.018
      );
      tones[1][index] = 0.34 + parentLevel * 0.25;
    } else if (seed < 0.9) {
      const rule = index % 2;
      if (rule === 0) {
        const level = Math.floor(index / 2) % 4;
        const [, ruleY] = ontologyNodePosition(level, 0);
        const span = level === 0 ? 1.5 : 3.1 + level * 1.45;
        setPoint(targets[1], index, (random() - 0.5) * span, ruleY, -0.72 + normalish(random) * 0.018);
      } else {
        const column = Math.floor(index / 2) % 11;
        setPoint(targets[1], index, (column - 5) * 0.72, -1.65 + random() * 4.15, -0.72 + normalish(random) * 0.018);
      }
      tones[1][index] = 0.025;
    } else {
      const entity = index % ontologyLevelCounts[3];
      const [endX, endY, endZ] = ontologyNodePosition(3, entity);
      const travel = random();
      const inverse = 1 - travel;
      const laneY = -2.85 + (entity % 4) * 0.18;
      const controlX = -3.75 + entity * 0.28;
      const controlY = laneY - 0.15;
      setPoint(
        targets[1],
        index,
        inverse * inverse * -5.0 + 2 * inverse * travel * controlX + travel * travel * endX + normalish(random) * 0.022,
        inverse * inverse * laneY + 2 * inverse * travel * controlY + travel * travel * endY + normalish(random) * 0.018,
        inverse * inverse * 0.15 + 2 * inverse * travel * -0.25 + travel * travel * endZ
      );
      tones[1][index] = 0.48 + (entity % 4) * 0.14;
    }

    // 03 — A multi-shell model sphere crossed by colored reasoning pathways.
    if (seed < 0.18) {
      const pathway = index % 6;
      const travel = random();
      const radius = 0.42 + travel * 2.52;
      const latitude = -0.82 + pathway * 0.328;
      const longitude = pathway * 0.82 + travel * Math.PI * 1.45;
      const latitudeScale = Math.cos(latitude);
      setPoint(
        targets[2],
        index,
        Math.cos(longitude) * latitudeScale * radius,
        Math.sin(latitude) * radius,
        Math.sin(longitude) * latitudeScale * radius * 0.84
      );
      tones[2][index] = 0.36 + pathway * 0.125;
    } else {
      const shell = index % 4;
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      const radius = 0.88 + shell * 0.66 + normalish(random) * 0.045;
      setPoint(
        targets[2],
        index,
        Math.sin(phi) * Math.cos(theta) * radius,
        Math.cos(phi) * radius,
        Math.sin(phi) * Math.sin(theta) * radius * 0.84
      );
      tones[2][index] = seed > 0.9 ? 0.28 + shell * 0.2 : 0.025;
    }

    // 04 — Knowledge sources converge into the collaborative expert-agent field.
    if (seed < 0.17) {
      const angle = random() * Math.PI * 2;
      const radius = Math.sqrt(random()) * 1.05;
      const normalized = radius / 1.05;
      setPoint(
        targets[3],
        index,
        -2.35 + Math.cos(angle) * radius,
        2.0 - normalized * normalized * 0.48 + normalish(random) * 0.035,
        Math.sin(angle) * radius * 0.58
      );
      tones[3][index] = 0.08;
    } else if (seed < 0.34) {
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      const radius = seed < 0.29 ? 0.84 + normalish(random) * 0.035 : Math.pow(random(), 0.5) * 0.78;
      setPoint(
        targets[3],
        index,
        -2.28 + Math.sin(phi) * Math.cos(theta) * radius,
        0.02 + Math.cos(phi) * radius,
        Math.sin(phi) * Math.sin(theta) * radius * 0.78
      );
      tones[3][index] = 0.5;
    } else if (seed < 0.51) {
      const ring = index % 3;
      const angle = random() * Math.PI * 2;
      const radius = 0.35 + ring * 0.3 + normalish(random) * 0.045;
      setPoint(
        targets[3],
        index,
        -2.28 + Math.cos(angle) * radius,
        -2.02 + (ring - 1) * 0.16 + normalish(random) * 0.025,
        Math.sin(angle) * radius * 0.62
      );
      tones[3][index] = 0.96;
    } else if (seed < 0.69) {
      const branch = index % 3;
      const sourceY = 2.0 - branch * 2.02;
      const travel = random();
      const inverse = 1 - travel;
      const startX = -1.28;
      const controlX = -0.25;
      const endX = 0.72;
      const controlY = sourceY * 0.54;
      setPoint(
        targets[3],
        index,
        inverse * inverse * startX + 2 * inverse * travel * controlX + travel * travel * endX + normalish(random) * 0.035,
        inverse * inverse * sourceY + 2 * inverse * travel * controlY + normalish(random) * 0.04,
        normalish(random) * (0.04 + travel * 0.12)
      );
      tones[3][index] = branch === 0 ? 0.1 : branch === 1 ? 0.5 : 0.94;
    } else if (seed < 0.88) {
      const ring = index % 4;
      const angle = random() * Math.PI * 2;
      const radius = 0.42 + ring * 0.34 + normalish(random) * 0.055;
      setPoint(
        targets[3],
        index,
        1.45 + Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.68,
        (ring - 1.5) * 0.18 + normalish(random) * 0.08
      );
      tones[3][index] = 0.28 + ring * 0.18;
    } else {
      const cell = index % 4;
      const cellAngle = cell * Math.PI * 0.5 + Math.PI * 0.25;
      const localAngle = random() * Math.PI * 2;
      const localRadius = Math.pow(random(), 0.62) * 0.36;
      setPoint(
        targets[3],
        index,
        1.45 + Math.cos(cellAngle) * 2.15 + Math.cos(localAngle) * localRadius,
        Math.sin(cellAngle) * 1.45 + Math.sin(localAngle) * localRadius,
        normalish(random) * 0.18
      );
      tones[3][index] = cell / 3;
    }

    // 05 — Trust membranes crossed by evidence paths and observable checkpoints.
    if (seed < 0.58) {
      const layer = index % 3;
      const x = (random() - 0.5) * 7.6;
      const z = (random() - 0.5) * 3.4;
      setPoint(
        targets[4],
        index,
        x,
        (layer - 1) * 1.45 + Math.sin(x * 0.78 + z * 0.45) * 0.055 + normalish(random) * 0.024,
        z
      );
      tones[4][index] = index % 13 === 0 ? 0.42 + layer * 0.22 : 0.022;
    } else if (seed < 0.83) {
      const path = index % 5;
      const travel = random();
      const fromLayer = path % 3;
      const toLayer = (path + 1 + (path % 2)) % 3;
      const fromY = (fromLayer - 1) * 1.45;
      const toY = (toLayer - 1) * 1.45;
      const inverse = 1 - travel;
      const direction = path % 2 === 0 ? 1 : -1;
      setPoint(
        targets[4],
        index,
        direction * (-4.15 + travel * 8.3) + normalish(random) * 0.025,
        inverse * fromY + travel * toY + Math.sin(travel * Math.PI) * (path % 2 === 0 ? 0.34 : -0.34),
        (path - 2) * 0.34 + Math.sin(travel * Math.PI * 2) * 0.16 + normalish(random) * 0.024
      );
      tones[4][index] = 0.36 + path * 0.14;
    } else if (seed < 0.95) {
      const checkpoint = index % 5;
      const angle = random() * Math.PI * 2;
      const layer = Math.floor(random() * 3);
      const radius = 0.3 + checkpoint * 0.025;
      setPoint(
        targets[4],
        index,
        (checkpoint - 2) * 1.55 + Math.cos(angle) * radius,
        (layer - 1) * 1.45 + normalish(random) * 0.025,
        Math.sin(angle) * radius * 0.72
      );
      tones[4][index] = 0.5 + checkpoint * 0.11;
    } else {
      const pillar = index % 3;
      const travel = random();
      const angle = travel * Math.PI * 8 + pillar * Math.PI * 0.66;
      setPoint(
        targets[4],
        index,
        (pillar - 1) * 2.25 + Math.cos(angle) * 0.12,
        -1.62 + travel * 3.24,
        Math.sin(angle) * 0.12
      );
      tones[4][index] = 0.62 + pillar * 0.16;
    }

    const earlyToneOffset = index * 3;
    earlyTones[earlyToneOffset] = tones[0][index];
    earlyTones[earlyToneOffset + 1] = tones[1][index];
    earlyTones[earlyToneOffset + 2] = tones[2][index];
    const lateToneOffset = index * 2;
    lateTones[lateToneOffset] = tones[3][index];
    lateTones[lateToneOffset + 1] = tones[4][index];
  }

  return { targets, earlyTones, lateTones, seeds, sizes };
}

export function createLineUniverse(particleTargets: Float32Array[], particleCount: number, segmentCount: number) {
  const random = seededRandom(901772);
  return particleTargets.map((target) => {
    const lines = new Float32Array(segmentCount * 2 * 3);

    for (let segment = 0; segment < segmentCount; segment += 1) {
      const first = Math.floor(random() * particleCount);
      let second = Math.floor(random() * particleCount);
      let bestDistance = Number.POSITIVE_INFINITY;

      for (let attempt = 0; attempt < 7; attempt += 1) {
        const candidate = Math.floor(random() * particleCount);
        const ax = target[first * 3];
        const ay = target[first * 3 + 1];
        const az = target[first * 3 + 2];
        const bx = target[candidate * 3];
        const by = target[candidate * 3 + 1];
        const bz = target[candidate * 3 + 2];
        const distance = (ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2;
        if (distance < bestDistance && distance > 0.08) {
          bestDistance = distance;
          second = candidate;
        }
      }

      const lineOffset = segment * 6;
      const firstOffset = first * 3;
      const secondOffset = second * 3;
      lines[lineOffset] = target[firstOffset];
      lines[lineOffset + 1] = target[firstOffset + 1];
      lines[lineOffset + 2] = target[firstOffset + 2];
      lines[lineOffset + 3] = target[secondOffset];
      lines[lineOffset + 4] = target[secondOffset + 1];
      lines[lineOffset + 5] = target[secondOffset + 2];
    }

    return lines;
  });
}
