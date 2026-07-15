"use client";

import { LogOut, RefreshCw, Rocket, Users } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { type CSSProperties, useCallback, useEffect, useState } from "react";
import { type Column, SubmissionsTable } from "@/app/components/admin/SubmissionsTable";
import { Button } from "@/app/components/ui/button";
import { ApiError, getInvestSubmissions, getRequestDemoSubmissions, type InvestSubmission, type RequestDemoSubmission } from "@/app/lib/admin/api";
import { useAuth } from "@/app/lib/admin/auth-context";
import { formatSubmittedAt } from "@/app/lib/admin/format";

// Strong ease-out - starts fast, feels immediately responsive
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

type TabId = "invest" | "request-demo";

const investColumns: Column<InvestSubmission>[] = [
	{ key: "name", header: "Name", render: (row) => `${row.firstname} ${row.lastname}` },
	{ key: "email", header: "Email", render: (row) => row.email },
	{ key: "phone", header: "Phone", render: (row) => row.phone ?? "-" },
	{ key: "message", header: "Message", render: (row) => row.message },
	{ key: "created_at", header: "Submitted", render: (row) => formatSubmittedAt(row.created_at) },
];

const requestDemoColumns: Column<RequestDemoSubmission>[] = [
	{ key: "name", header: "Name", render: (row) => `${row.firstname} ${row.lastname}` },
	{ key: "work_email", header: "Work email", render: (row) => row.work_email },
	{ key: "company", header: "Company", render: (row) => row.company },
	{ key: "job_title", header: "Job title", render: (row) => row.job_title },
	{ key: "country", header: "Country", render: (row) => row.country },
	{ key: "phone", header: "Phone", render: (row) => row.phone ?? "-" },
	{ key: "help_topic", header: "Help topic", render: (row) => row.help_topic },
	{ key: "message", header: "Message", render: (row) => row.message },
	{ key: "created_at", header: "Submitted", render: (row) => formatSubmittedAt(row.created_at) },
];

export default function AdminSubmissionsPage() {
	const router = useRouter();
	const reduceMotion = useReducedMotion();
	const { status, token, user, logout } = useAuth();

	const [activeTab, setActiveTab] = useState<TabId>("invest");
	const [investData, setInvestData] = useState<InvestSubmission[]>([]);
	const [demoData, setDemoData] = useState<RequestDemoSubmission[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [loadError, setLoadError] = useState<string | null>(null);

	const isAdmin = user?.role === "admin" && user?.status === "approved";

	const signOut = useCallback(() => {
		logout();
		router.replace("/admin/login");
	}, [logout, router]);

	const loadSubmissions = useCallback(async () => {
		if (!token) return;
		setIsLoading(true);
		setLoadError(null);
		try {
			const [invest, demo] = await Promise.all([getInvestSubmissions(token), getRequestDemoSubmissions(token)]);
			setInvestData(invest);
			setDemoData(demo);
		} catch (err) {
			if (err instanceof ApiError && err.status === 401) {
				signOut();
				return;
			}
			setLoadError(err instanceof ApiError ? err.message : "Failed to load submissions.");
		} finally {
			setIsLoading(false);
		}
	}, [token, signOut]);

	useEffect(() => {
		if (status === "unauthenticated") {
			router.replace("/admin/login");
		}
	}, [status, router]);

	useEffect(() => {
		if (status === "authenticated" && isAdmin) {
			loadSubmissions();
		}
	}, [status, isAdmin, loadSubmissions]);

	if (status === "loading" || status === "unauthenticated") {
		return <div className="flex min-h-screen items-center justify-center bg-spx-void text-sm text-spx-mute">Loading...</div>;
	}

	if (!isAdmin) {
		return (
			<div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-spx-void px-4 text-center">
				<p className="max-w-sm text-sm text-spx-mute">{user?.status !== "approved" ? `This account is ${user?.status}. Admin access requires an approved admin account.` : "This account does not have admin access."}</p>
				<Button variant="line" onClick={signOut} className="h-auto px-5 py-2.5 text-destructive shadow-[inset_0_0_0_1px_var(--color-destructive)] hover:bg-destructive/10 hover:text-destructive">
					Sign out
				</Button>
			</div>
		);
	}

	const tabs: { id: TabId; label: string; count: number }[] = [
		{ id: "invest", label: "Invest", count: investData.length },
		{ id: "request-demo", label: "Request Trial", count: demoData.length },
	];

	const statTiles = [
		{ id: "invest", label: "Invest submissions", count: investData.length, icon: Rocket },
		{ id: "request-demo", label: "Request trial submissions", count: demoData.length, icon: Users },
	];

	return (
		<div className="min-h-screen w-full bg-spx-void px-4 py-8 sm:px-6 sm:py-12 lg:px-8" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}>
			<motion.div className="mx-auto w-full max-w-7xl" initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: EASE_OUT }}>
				<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
					<div>
						<h1 className="font-outfit text-2xl font-medium text-spx-ink sm:text-3xl">Form submissions</h1>
						<p className="mt-1.5 text-sm text-spx-mute">
							Signed in as <span className="text-spx-ink-2">{user?.username}</span>
						</p>
					</div>
					<div className="grid grid-cols-2 gap-2 sm:flex sm:w-auto">
						<Button variant="line" onClick={loadSubmissions} disabled={isLoading} className="h-auto gap-2 px-4 py-2.5 transition-transform duration-150 ease-out active:scale-[0.97]">
							<RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
							{isLoading ? "Refreshing..." : "Refresh"}
						</Button>
						<Button variant="line" onClick={signOut} className="h-auto gap-2 px-4 py-2.5 text-destructive shadow-[inset_0_0_0_1px_var(--color-destructive)] transition-transform duration-150 ease-out hover:bg-destructive/10 hover:text-destructive active:scale-[0.97]">
							<LogOut size={16} />
							Sign out
						</Button>
					</div>
				</div>

				<div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
					{statTiles.map((tile) => (
						<div key={tile.id} className="flex items-center gap-4 rounded-xs border border-spx-rule bg-spx-void-2 p-5">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs bg-spx-cyan/10 text-spx-cyan">
								<tile.icon size={20} />
							</div>
							<div>
								<p className="text-2xl font-semibold text-spx-ink">{tile.count}</p>
								<p className="text-sm text-spx-mute">{tile.label}</p>
							</div>
						</div>
					))}
				</div>

				<div className="mb-4 inline-flex rounded-xs border border-spx-rule bg-spx-void-2 p-1">
					{tabs.map((tab) => (
						<button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`relative rounded-xs px-4 py-2 font-geist-mono text-[0.7rem] tracking-[0.1em] uppercase transition-colors duration-150 ${activeTab === tab.id ? "text-spx-cyan" : "text-spx-mute hover:text-spx-ink"}`}>
							{activeTab === tab.id && <motion.span layoutId="admin-active-tab" className="absolute inset-0 rounded-xs bg-spx-cyan/10" transition={{ type: "spring", duration: 0.5, bounce: 0.15 }} />}
							<span className="relative z-10">
								{tab.label} <span className="text-spx-faint">{tab.count}</span>
							</span>
						</button>
					))}
				</div>

				<div className="rounded-xs border border-spx-rule bg-spx-void-2">
					{activeTab === "invest" ? (
						<SubmissionsTable columns={investColumns} rows={investData} isLoading={isLoading} error={loadError} emptyMessage="No invest submissions yet." getRowKey={(row) => row.id} />
					) : (
						<SubmissionsTable columns={requestDemoColumns} rows={demoData} isLoading={isLoading} error={loadError} emptyMessage="No request-trial submissions yet." getRowKey={(row) => row.id} />
					)}
				</div>
			</motion.div>
		</div>
	);
}
