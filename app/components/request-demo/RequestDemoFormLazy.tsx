"use client";

import dynamic from "next/dynamic";

export const RequestDemoFormLazy = dynamic(() => import("@/app/components/request-demo/RequestDemoForm").then((m) => m.RequestDemoForm), {
	ssr: false,
	loading: () => <div className="min-h-[28rem] w-full min-w-0 animate-pulse rounded-xs border border-spx-rule bg-spx-void-2 p-6 sm:p-8" role="status" aria-label="Loading demo request form" />,
});
