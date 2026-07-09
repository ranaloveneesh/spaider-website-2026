"use client";

import { LogOut, RefreshCw, Rocket, Users } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
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
		return <div className="flex min-h-screen items-center justify-center text-sm text-muted">Loading...</div>;
	}

	if (!isAdmin) {
		return (
			<div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 px-4 text-center">
				<p className="max-w-sm text-sm text-muted">{user?.status !== "approved" ? `This account is ${user?.status}. Admin access requires an approved admin account.` : "This account does not have admin access."}</p>
				<Button variant="outline" onClick={signOut}>
					Sign out
				</Button>
			</div>
		);
	}

	const tabs: { id: TabId; label: string; count: number }[] = [
		{ id: "invest", label: "Invest", count: investData.length },
		{ id: "request-demo", label: "Request Demo", count: demoData.length },
	];

	const statTiles = [
		{ id: "invest", label: "Invest submissions", count: investData.length, icon: Rocket, accent: "text-blue-400 bg-blue-400/10" },
		{ id: "request-demo", label: "Request demo submissions", count: demoData.length, icon: Users, accent: "text-emerald-400 bg-emerald-400/10" },
	];

	return (
		<div className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE_OUT }}>
				<div className="mb-8 flex flex-wrap items-end justify-between gap-4">
					<div>
						<h1 className="font-outfit text-2xl font-medium text-foreground sm:text-3xl">Form submissions</h1>
						<p className="mt-1.5 text-sm text-muted">
							Signed in as <span className="text-foreground">{user?.username}</span> <span className="ml-1 rounded-full border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-xs tracking-wide text-neutral-300 uppercase">{user?.role}</span>
						</p>
					</div>
					<div className="flex gap-2">
						<Button variant="outline" onClick={loadSubmissions} disabled={isLoading} className="gap-2 transition-transform duration-150 ease-out active:scale-[0.97]">
							<RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
							{isLoading ? "Refreshing..." : "Refresh"}
						</Button>
						<Button variant="outline" onClick={signOut} className="gap-2 transition-transform duration-150 ease-out active:scale-[0.97]">
							<LogOut size={16} />
							Sign out
						</Button>
					</div>
				</div>

				<div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
					{statTiles.map((tile) => (
						<div key={tile.id} className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg shadow-black/20">
							<div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${tile.accent}`}>
								<tile.icon size={20} />
							</div>
							<div>
								<p className="text-2xl font-semibold text-foreground">{tile.count}</p>
								<p className="text-sm text-muted">{tile.label}</p>
							</div>
						</div>
					))}
				</div>

				<div className="mb-4 inline-flex rounded-full border border-neutral-800 bg-neutral-900 p-1">
					{tabs.map((tab) => (
						<button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${activeTab === tab.id ? "text-white" : "text-neutral-400 hover:text-neutral-200"}`}>
							{activeTab === tab.id && <motion.span layoutId="admin-active-tab" className="absolute inset-0 rounded-full bg-neutral-700" transition={{ type: "spring", duration: 0.5, bounce: 0.15 }} />}
							<span className="relative z-10">
								{tab.label} <span className="text-xs text-neutral-400">{tab.count}</span>
							</span>
						</button>
					))}
				</div>

				<div className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-lg shadow-black/20">
					{activeTab === "invest" ? (
						<SubmissionsTable columns={investColumns} rows={investData} isLoading={isLoading} error={loadError} emptyMessage="No invest submissions yet." getRowKey={(row) => row.id} />
					) : (
						<SubmissionsTable columns={requestDemoColumns} rows={demoData} isLoading={isLoading} error={loadError} emptyMessage="No request-demo submissions yet." getRowKey={(row) => row.id} />
					)}
				</div>
			</motion.div>
		</div>
	);
}
