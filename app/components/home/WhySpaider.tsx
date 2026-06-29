"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/app/components/ui/reveal";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

const STEP_MS = 5000;
/** Shared easing for progress + accordion micro-interactions */
const EASE_IN_OUT = "cubic-bezier(0.45, 0, 0.55, 1)" as const;

interface AccordionItem {
    t: string;
    d: React.ReactNode;
    content?: React.ReactNode;
}

const DEFAULT_ITEMS: AccordionItem[] = [
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

export default function WhySpaider({
    items,
    title,
    subtitle,
}: {
    items?: AccordionItem[];
    title?: React.ReactNode;
    subtitle?: string;
} = {}) {
    const activeItems = items ?? DEFAULT_ITEMS;
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [sectionMinH, setSectionMinH] = useState<number | undefined>();

    // After fonts load, snapshot the section height with item 0 open (the
    // default and tallest state). This value becomes a floor so that
    // switching to shorter accordion items never shrinks the section and
    // shifts content below it.
    useEffect(() => {
        document.fonts.ready.then(() => {
            if (sectionRef.current) {
                setSectionMinH(sectionRef.current.offsetHeight);
            }
        });
    }, []);

    useEffect(() => {
        const id = window.setTimeout(() => {
            setOpenIndex((prev) => {
                const current = prev ?? -1;
                return (current + 1) % activeItems.length;
            });
        }, STEP_MS);
        return () => window.clearTimeout(id);
    }, [openIndex, activeItems.length]);

    const hasPerItemContent = activeItems.some((item) => item.content != null);

    return (
        <section ref={sectionRef} style={{ minHeight: sectionMinH }} className="relative mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-20">

                {/* ── Left: heading + accordion ── */}
                <div>
                    <Reveal
                        as="h2"
                        variant="fade-up"
                        threshold={0.35}
                        className="font-outfit text-4xl font-medium leading-tight tracking-tight sm:text-5xl"
                    >
                        {title ?? (
                            <>
                                <span className="text-foreground">Why choose</span>{" "}
                                <span className="text-accent">SPAIDER</span>
                            </>
                        )}
                    </Reveal>

                    {subtitle && (
                        <Reveal as="p" variant="fade-up" threshold={0.35} delayMs={80} className="mt-3 text-sm leading-7 text-muted sm:text-base">
                            {subtitle}
                        </Reveal>
                    )}

                    {/* Accordion list */}
                    <div className="mt-10 sm:mt-12">
                        {activeItems.map((item, i) => (
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
                                            onClick={() => setOpenIndex(i)}
                                            className="group flex w-full items-center justify-between py-[1.1rem] text-left"
                                            aria-expanded={openIndex === i}
                                        >
                                            <span
                                                className="font-outfit text-base text-foreground transition-colors duration-200 ease-in-out sm:text-lg group-hover:text-foreground"
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
                                                ? "max-h-72 pb-5 opacity-100"
                                                : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className="text-sm leading-7 text-muted sm:text-base">
                                                {item.d}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right: per-item content or static logo ── */}
                <Reveal
                    variant="fade-up"
                    threshold={0.2}
                    delayMs={80}
                    className="hidden items-center justify-center md:flex"
                >
                    {hasPerItemContent ? (
                        <div className="relative h-80 w-full overflow-hidden rounded-xl lg:h-96">
                            {activeItems.map((item, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${openIndex === i ? "opacity-100" : "opacity-0"}`}
                                >
                                    {item.content}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <Image src="/logo.png" alt="SPAIDER 3D Slab" width={500} height={500} className="logo-3d" />
                    )}
                </Reveal>
            </div>
        </section>
    );
}
