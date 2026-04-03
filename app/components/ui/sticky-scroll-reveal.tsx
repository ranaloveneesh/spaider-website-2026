"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/app/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = Math.max(content.length, 1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="relative flex justify-between space-x-10 rounded-md mt-10 pb-32"
      ref={ref}
    >
      <div className="relative flex items-start max-w-xl">
        <div>
          {content.map((item, index) => (
            <div key={item.title + index} className="py-10">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg mt-10 text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "sticky top-32 hidden h-[22rem] w-[32rem] overflow-hidden rounded-xl border border-border bg-card/40 lg:block mt-10",
          contentClassName,
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
