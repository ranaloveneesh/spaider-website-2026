"use client";

import dynamic from "next/dynamic";

export const RequestDemoFormLazy = dynamic(
  () =>
    import("@/app/components/request-demo/request-demo-form").then(
      (m) => m.RequestDemoForm,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="col-span-2 w-full min-h-[28rem] rounded-2xl border border-border bg-card p-4 shadow-sm animate-pulse md:p-4"
        role="status"
        aria-label="Loading demo request form"
      />
    ),
  },
);
