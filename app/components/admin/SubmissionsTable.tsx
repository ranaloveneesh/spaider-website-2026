"use client";

import { AlertCircle, Inbox, Loader2 } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/app/lib/utils";

export interface Column<T> {
	key: string;
	header: string;
	render: (row: T) => ReactNode;
}

interface SubmissionsTableProps<T> {
	columns: Column<T>[];
	rows: T[];
	isLoading: boolean;
	error: string | null;
	emptyMessage: string;
	getRowKey: (row: T) => string | number;
}

function StateMessage({ icon, children, tone = "muted" }: { icon: ReactNode; children: ReactNode; tone?: "muted" | "destructive" }) {
	return (
		<div className={`flex flex-col items-center gap-3 px-4 py-16 text-center text-sm ${tone === "destructive" ? "text-destructive" : "text-spx-mute"}`} role={tone === "destructive" ? "alert" : undefined}>
			{icon}
			<p>{children}</p>
		</div>
	);
}

// Tracks whether the table's horizontal scroll container has more content
// past either edge, so the fade/scrollbar affordance only shows when it's
// actually needed (9-column request-demo table vs. 5-column invest table).
function useScrollEdges<T extends HTMLElement>() {
	const ref = useRef<T>(null);
	const [atStart, setAtStart] = useState(true);
	const [atEnd, setAtEnd] = useState(true);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const update = () => {
			setAtStart(el.scrollLeft <= 1);
			setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
		};

		update();
		el.addEventListener("scroll", update, { passive: true });
		const observer = new ResizeObserver(update);
		observer.observe(el);
		return () => {
			el.removeEventListener("scroll", update);
			observer.disconnect();
		};
	}, []);

	return { ref, atStart, atEnd };
}

export function SubmissionsTable<T>({ columns, rows, isLoading, error, emptyMessage, getRowKey }: SubmissionsTableProps<T>) {
	const { ref: scrollRef, atStart, atEnd } = useScrollEdges<HTMLDivElement>();

	if (isLoading) {
		return <StateMessage icon={<Loader2 size={22} className="animate-spin text-spx-mute" />}>Loading submissions...</StateMessage>;
	}

	if (error) {
		return (
			<StateMessage icon={<AlertCircle size={22} />} tone="destructive">
				{error}
			</StateMessage>
		);
	}

	if (rows.length === 0) {
		return <StateMessage icon={<Inbox size={22} className="text-spx-faint" />}>{emptyMessage}</StateMessage>;
	}

	const [primary, ...rest] = columns;

	return (
		<>
			{/* Mobile / tablet: stacked cards, full field text visible without horizontal scroll */}
			<div className="divide-y divide-spx-rule md:hidden">
				{rows.map((row) => (
					<div key={getRowKey(row)} className="space-y-3 px-4 py-5">
						<p className="text-[0.95rem] font-medium text-spx-ink">{primary.render(row)}</p>
						<dl className="space-y-2.5">
							{rest.map((col) => (
								<div key={col.key}>
									<dt className="font-geist-mono text-[0.65rem] tracking-[0.14em] text-spx-faint uppercase">{col.header}</dt>
									<dd className="mt-0.5 text-sm whitespace-pre-wrap text-spx-ink-2">{col.render(row)}</dd>
								</div>
							))}
						</dl>
					</div>
				))}
			</div>

			{/* Desktop: table with a scroll-edge fade + visible thin scrollbar, since wider
			    submission types (9 columns) don't fit without horizontal scroll. */}
			<div className="relative hidden md:block">
				<section
					ref={scrollRef}
					aria-label="Submissions table, scroll horizontally for more columns"
					// biome-ignore lint/a11y/noNoninteractiveTabindex: keyboard-scrollable region per WCAG 2.1.1 - arrow keys need to scroll it
					tabIndex={0}
					className="w-full overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-spx-rule-2 [&::-webkit-scrollbar-track]:bg-transparent"
					style={{ scrollbarWidth: "thin", scrollbarColor: "var(--spx-rule-2) transparent" }}
				>
					<table className="w-full min-w-max border-collapse text-left text-sm">
						<thead>
							<tr className="border-b border-spx-rule">
								{columns.map((col) => (
									<th key={col.key} className="font-geist-mono text-[0.7rem] font-normal tracking-[0.14em] text-spx-mute uppercase whitespace-nowrap px-4 py-3">
										{col.header}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{rows.map((row) => (
								<tr key={getRowKey(row)} className="border-b border-spx-rule/60 transition-colors duration-150 last:border-0 hover:bg-spx-void">
									{columns.map((col) => (
										<td key={col.key} className="max-w-xs px-4 py-3 align-top whitespace-pre-wrap text-spx-ink-2">
											{col.render(row)}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</section>
				<div aria-hidden="true" className={cn("pointer-events-none absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-spx-void-2 to-transparent transition-opacity duration-200", atEnd ? "opacity-0" : "opacity-100")} />
				<div aria-hidden="true" className={cn("pointer-events-none absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-spx-void-2 to-transparent transition-opacity duration-200", atStart ? "opacity-0" : "opacity-100")} />
			</div>
		</>
	);
}
