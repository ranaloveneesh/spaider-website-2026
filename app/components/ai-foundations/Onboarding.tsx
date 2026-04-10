"use client";

import Image from "next/image";
import Reveal from "../ui/reveal";

const steps = [
    {
        title: "Connect your sources",
        desc: "Add the documents, tools, and approved data sources your team already uses.",
        imgSrc: "/foundations/inforag1.png",
        imgAlt: "Connect your sources",
    },
    {
        title: "Configure the workspace",
        desc: "Set permissions, source rules, instructions, and the workflows you want the system to support.",
        imgSrc: "/foundations/inforag2.png",
        imgAlt: "Configure the workspace",
    },
    {
        title: "Start working with your knowledge",
        desc: "Search, query, and interact with your data through a governed AI interface.",
        imgSrc: "/foundations/inforag3.png",
        imgAlt: "Start working with your knowledge",
    },
] as const;

export default function Onboarding() {
    return (
        <section
            id="how-we-work"
            className="how-we-work-section relative w-full text-foreground"
        >
            <div className="mx-auto w-full max-w-7xl py-0">
                <div className="flex flex-col items-start justify-between">
                    <Reveal as="h2" variant="fade-up" threshold={0.35} className="font-montserrat text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                        Get started in 3 steps
                    </Reveal>


                    <Reveal as="p" variant="fade-up" threshold={0.35} delayMs={80} className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                        A simple path from source setup to a working knowledge workspace.
                    </Reveal>
                </div>

                <div className="relative mt-4 overflow-hidden px-40">
                    <div className="timeline-wrapper hidden md:block">
                        <div className="timeline-line" />
                    </div>

                    <div className="space-y-0">
                        {steps.map((item, index) => {
                            const even = index % 2 === 1;
                            return (
                                <div key={item.title} className="relative flex flex-col items-center justify-between md:flex-row">
                                    <div
                                        className="timeline-dot absolute left-1/2 hidden -translate-x-1/2 md:block"
                                        style={{ top: "1.25rem" }}
                                    />

                                    <div className={`${even ? "order-2" : "order-1"} flex w-full flex-col items-start gap-2 md:w-2/5`}>
                                        <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-montserrat">
                                            {item.title}
                                        </h3>
                                        <p className="text-left text-xs leading-6 text-muted font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className={`${even ? "order-1" : "order-2"} relative z-10 hidden h-32 w-full items-center justify-center md:flex md:h-72 md:w-1/2`}>
                                        <Image
                                            alt={item.imgAlt}
                                            src={item.imgSrc}
                                            width={300}
                                            height={300}
                                            loading="lazy"
                                            className="drop-shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_55%,transparent)] w-auto h-full object-contain"
                                            sizes="(min-width:1280px) 380px, 280px"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}