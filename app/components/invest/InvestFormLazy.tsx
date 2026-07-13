"use client";

import dynamic from "next/dynamic";

export const InvestFormLazy = dynamic(() => import("@/app/components/invest/InvestForm").then((m) => m.InvestForm), {
	ssr: false,
	loading: () => <div className="min-h-[28rem] w-full min-w-0 animate-pulse rounded-xs border border-spx-rule bg-spx-void-2 p-6 sm:p-8" role="status" aria-label="Loading investor form" />,
});
