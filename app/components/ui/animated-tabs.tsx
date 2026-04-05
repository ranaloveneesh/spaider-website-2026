import { useId, useState, type ReactNode } from "react";
import { cn } from "@/app/lib/utils";
import { motion } from "motion/react";

interface AnimatedTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  /** Accessible name for the tab list (e.g. "Product areas") */
  ariaLabel?: string;
}

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

export const AnimatedTabs = ({
  tabs,
  defaultTab,
  className,
  ariaLabel = "Tabs",
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);
  const baseId = useId();
  const tabPrefix = `${baseId}-tab`;
  const panelPrefix = `${baseId}-panel`;

  if (!tabs?.length) return null;

  return (
    <div className={cn("flex w-full min-w-0 flex-col gap-y-1", className)}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="flex w-full min-w-0 flex-row gap-1 rounded-md border border-white/30 bg-black bg-opacity-50 backdrop-blur-sm sm:gap-2"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`${tabPrefix}-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`${panelPrefix}-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative w-full rounded-sm px-2 py-1.5 text-xs font-medium text-white outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-3 sm:py-2 sm:text-sm",
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-sm! bg-[linear-gradient(135deg,#3a3a3d_0%,#111113_25%,#111113_75%,#3a3a3d_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(255,255,255,0.06),0_10px_24px_rgba(0,0,0,0.5)]"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-2 h-full min-w-0 rounded-md border border-border bg-transparent p-2 text-white shadow-[0_0_20px_rgba(0,0,0,0.2)] sm:p-3 min-h-100">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`${panelPrefix}-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`${tabPrefix}-${tab.id}`}
            hidden={activeTab !== tab.id}
          >
            {activeTab === tab.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: -10,
                  filter: "blur(10px)",
                }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
                transition={{
                  duration: 0.5,
                  ease: "circInOut",
                  type: "spring",
                }}
              >
                {tab.content}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
