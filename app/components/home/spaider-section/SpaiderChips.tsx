"use client";

import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-panel/40 px-2.5 py-1.5 shadow-sm border border-border/40">
      <span className="text-[13px] font-semibold text-foreground">
        {children}
      </span>
      <span className="grid h-5 w-5 place-items-center rounded-full border border-border/40">
        ✓
      </span>
    </div>
  );
}

export function MiniPill({
  children,
  right,
}: {
  children: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-panel/40 px-3 py-2.5 shadow-sm border border-border/40">
      <span className="text-[14px] font-semibold text-foreground">
        {children}
      </span>
      {right ? <span className="ml-3 flex items-center">{right}</span> : null}
    </div>
  );
}
