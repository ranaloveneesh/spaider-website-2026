"use client";

import dynamic from "next/dynamic";

export const InvestFormLazy = dynamic(() => import("@/app/components/invest/InvestForm").then((m) => m.InvestForm), {
	ssr: false,
	loading: () => <div className="min-w-0 w-full min-h-[28rem] rounded-2xl border border-border  p-4 shadow-sm animate-pulse sm:p-5 md:col-span-1 lg:col-span-2 lg:p-6" role="status" aria-label="Loading investor form" />,
});
