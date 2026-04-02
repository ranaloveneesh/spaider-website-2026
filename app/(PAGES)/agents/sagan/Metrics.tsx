"use client";

import { useEffect, useState } from "react";

type Metric = {
  prefix?: string;
  value: number;
  suffix: string;
  title: string;
  copy: string;
};

const METRICS: Metric[] = [
  {
    prefix: "Up to ",
    value: 2,
    suffix: "×",
    title: "Increase in Proposal Throughput",
    copy: "Submit significantly more high-quality, compliant proposals with the same team by automating ~65% of manual effort.",
  },
  {
    prefix: "Up to ",
    value: 50,
    suffix: "%",
    title: "Reduction in Proposal Cycle Time",
    copy: "Compress timelines from RFP release to submission by accelerating research, drafting, and compliance checks.",
  },
  {
    value: 70,
    suffix: "%+",
    title: "Expert Time Reclaimed",
    copy: "Free your experts from tedious tasks to focus on solution design and strategy.",
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const update = () => setReduced(!!mq.matches);
    update();

    // Safari fallback
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  return reduced;
}

const Big: React.FC<{
  prefix?: string;
  value: number;
  suffix: string;
}> = ({ prefix, value, suffix }) => {
  const reducedMotion = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(value);
      return;
    }

    const durationMs = 950;
    const start = performance.now();

    let raf = 0;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(t);
      const current = Math.round(value * eased);
      setDisplay(current);

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion, value]);

  return (
    <div className="text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold font-manrope bg-linear-to-r from-[#5ce1e6] to-[#67f0ff] bg-clip-text text-transparent">
      {prefix}
      {display}
      {suffix}
    </div>
  );
};

export default function Metrics() {
  return (
    <section className="mx-auto mt-12">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl font-manrope md:mb-10 lg:mb-12">
        Measurable Advantage: Accelerate Wins, Scale Ambition
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {METRICS.map((m) => (
          <div
            key={m.title}
            className={[
              "rounded-2xl border border-white/10 p-8 text-center shadow-sm",
              "bg-gradient-to-b from-black/70 via-black/35 to-black/70",
              "transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-md",
            ].join(" ")}
          >
            <div className="relative">
              <Big prefix={m.prefix} value={m.value} suffix={m.suffix} />
              <div className="mt-3 text-xl font-semibold tracking-tight font-manrope">
                {m.title}
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed font-inter">
                {m.copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
