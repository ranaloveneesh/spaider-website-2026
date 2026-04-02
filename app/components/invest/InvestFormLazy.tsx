"use client";

import dynamic from "next/dynamic";

export const InvestFormLazy = dynamic(
  () => import("@/app/components/invest/invest-form").then((m) => m.InvestForm),
  {
    ssr: false,
    loading: () => (
      <div
        className="col-span-2 w-full min-h-[28rem] rounded-2xl border border-border bg-card p-4 shadow-sm animate-pulse md:p-4"
        role="status"
        aria-label="Loading investor form"
      />
    ),
  },
);
