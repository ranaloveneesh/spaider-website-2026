"use client";

import { useEffect, useState } from "react";
import Reveal from "@/app/components/ui/reveal";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

const STEP_MS = 5000;
/** Shared easing for progress + accordion micro-interactions */
const EASE_IN_OUT = "cubic-bezier(0.45, 0, 0.55, 1)" as const;

const ITEMS = [
    {
        t: "Aerospace-native intelligent automation",
        d: "Domain-expert AI Models, powering domain-trained AI Agents for deep technical & operational aerospace workflows.",
    },
    {
        t: "Grounded and governed data analysis",
        d: "Outputs stay tied to approved data, sources, and internal knowledge.",
    },
    {
        t: "Deployable in sensitive environments",
        d: "Run on EU cloud, private cloud, or on-prem with controlled access and data handling.",
    },
];

export default function WhySpaider() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        const id = window.setTimeout(() => {
            setOpenIndex((prev) => {
                const current = prev ?? -1;
                return (current + 1) % ITEMS.length;
            });
        }, STEP_MS);
        return () => window.clearTimeout(id);
    }, [openIndex]);

    return (
        <section className="relative mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-20">

                {/* ── Left: heading + accordion + CTA ── */}
                <div>
                    <Reveal
                        as="h2"
                        variant="fade-up"
                        threshold={0.35}
                        className="font-outfit text-4xl font-medium leading-tight tracking-tight sm:text-5xl"
                    >
                        <span className="text-foreground">Why choose</span>{" "}
                        <span className="text-accent">SPAIDER</span>
                    </Reveal>

                    {/* Accordion list */}
                    <div className="mt-10 sm:mt-12">
                        {ITEMS.map((item, i) => (
                            <div key={item.t} className="relative">
                                {/* Top rule: muted baseline, accent grows along it (open step only) */}
                                <div className="h-px w-full bg-border/60" aria-hidden />
                                {openIndex === i ? (
                                    <div
                                        className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-px overflow-hidden"
                                        aria-hidden
                                    >
                                        <div
                                            key={`${i}-${openIndex}`}
                                            className="why-spaider-step-bar h-full max-w-full bg-accent"
                                            style={{
                                                width: "0%",
                                                animation: `why-spaider-bar-fill ${STEP_MS}ms ${EASE_IN_OUT} forwards`,
                                            }}
                                        />
                                    </div>
                                ) : null}
                                <Reveal variant="fade-up" threshold={0.2} delayMs={i * 60}>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                            className="group flex w-full items-center justify-between py-[1.1rem] text-left"
                                            aria-expanded={openIndex === i}
                                        >
                                            <span
                                                className={`font-outfit text-base text-foreground transition-colors duration-200 ease-in-out sm:text-lg group-hover:text-foreground`}
                                            >
                                                {item.t}
                                            </span>
                                            <span
                                                aria-hidden
                                                className={`ml-5 shrink-0 text-xl font-light leading-none transition-all duration-300 ease-in-out ${openIndex === i
                                                    ? "rotate-180"
                                                    : "text-muted/50 group-hover:text-muted"
                                                    }`}
                                            >
                                                <ChevronDownIcon className="size-5" />
                                            </span>
                                        </button>

                                        <div
                                            className={`overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out ${openIndex === i
                                                ? "max-h-48 pb-5 opacity-100"
                                                : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <p className="text-sm leading-7 text-muted sm:text-base">
                                                {item.d}
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        ))}
                    </div>


                </div>

                {/* ── Right: 3-D slab stack (desktop only) ── */}
                <Reveal
                    variant="fade-up"
                    threshold={0.2}
                    delayMs={80}
                    className="hidden items-center justify-center md:flex"
                >
                    <Image src="/logo.png" alt="SPAIDER 3D Slab" width={500} height={500} className="logo-3d" />
                </Reveal>
            </div>
        </section>
    );
}


