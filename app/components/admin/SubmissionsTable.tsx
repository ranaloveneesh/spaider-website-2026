import { AlertCircle, Inbox, Loader2 } from "lucide-react";
import type { ReactNode } from "react";

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
		<div className={`flex flex-col items-center gap-3 px-4 py-16 text-center text-sm ${tone === "destructive" ? "text-destructive" : "text-muted"}`} role={tone === "destructive" ? "alert" : undefined}>
			{icon}
			<p>{children}</p>
		</div>
	);
}

export function SubmissionsTable<T>({ columns, rows, isLoading, error, emptyMessage, getRowKey }: SubmissionsTableProps<T>) {
	if (isLoading) {
		return <StateMessage icon={<Loader2 size={22} className="animate-spin text-neutral-500" />}>Loading submissions...</StateMessage>;
	}

	if (error) {
		return (
			<StateMessage icon={<AlertCircle size={22} />} tone="destructive">
				{error}
			</StateMessage>
		);
	}

	if (rows.length === 0) {
		return <StateMessage icon={<Inbox size={22} className="text-neutral-600" />}>{emptyMessage}</StateMessage>;
	}

	return (
		<div className="w-full overflow-x-auto rounded-xl">
			<table className="w-full min-w-max border-collapse text-left text-sm">
				<thead>
					<tr className="border-b border-neutral-800">
						{columns.map((col) => (
							<th key={col.key} className="whitespace-nowrap px-4 py-3 text-xs font-medium tracking-wide text-neutral-500 uppercase">
								{col.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr key={getRowKey(row)} className="border-b border-neutral-800/60 transition-colors duration-150 last:border-0 hover:bg-neutral-800/50">
							{columns.map((col) => (
								<td key={col.key} className="max-w-xs px-4 py-3 align-top whitespace-pre-wrap text-foreground">
									{col.render(row)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
