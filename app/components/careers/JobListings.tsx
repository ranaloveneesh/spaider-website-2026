"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import CeramicButton from "@/app/components/ui/button";

type Job = {
	title: string;
	department: string;
	location: string;
	type: string;
	descriptionLink: string;
	applyLink: string;
};

const JOBS: Job[] = [];

const DEPARTMENTS = ["All", ...Array.from(new Set(JOBS.map((j) => j.department)))];

export default function JobListings() {
	const [active, setActive] = useState("All");
	const filtered = active === "All" ? JOBS : JOBS.filter((j) => j.department === active);

	return (
		<div>
			{/* Department tabs */}
			{JOBS.length > 0 && (
				<div className="flex flex-wrap gap-2 border-b border-white/8 pb-4 mb-8 sm:pb-5 sm:mb-10">
					{DEPARTMENTS.map((dept) => (
						<motion.button
							key={dept}
							type="button"
							onClick={() => setActive(dept)}
							className={["relative font-montserrat text-[11px] font-medium uppercase tracking-[0.08em] px-3 py-1.5 rounded-sm cursor-pointer transition-colors duration-150", active === dept ? "text-foreground" : "text-muted hover:text-foreground"].join(" ")}
							whileTap={{ scale: 0.94 }}
						>
							{active === dept && <motion.span layoutId="active-dept" className="absolute inset-0 rounded-sm border border-white/18 bg-white/10" transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }} />}
							<span className="relative z-10">
								{dept}
								{dept !== "All" && <span className="ml-1.5 text-[10px] opacity-50">{JOBS.filter((j) => j.department === dept).length}</span>}
							</span>
						</motion.button>
					))}
				</div>
			)}

			{/* Job rows */}
			<div className="overflow-hidden">
				<AnimatePresence mode="popLayout" initial={false}>
					{filtered.map((job, i) => (
						<motion.div
							key={job.title}
							layout
							initial={{ opacity: 0, y: -6 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 6 }}
							transition={{
								duration: 0.18,
								ease: [0.25, 1, 0.5, 1],
								delay: i * 0.03,
							}}
							className={["group grid grid-cols-1 items-center gap-y-3 px-4 py-4 transition-colors duration-150 sm:grid-cols-[minmax(0,1.6fr)_minmax(120px,0.7fr)_minmax(95px,0.45fr)_auto] sm:gap-4 sm:px-5 sm:py-6", "bg-transparent hover:bg-white/3", i < filtered.length - 1 ? "border-b border-white/10" : ""].join(" ")}
						>
							<div className="min-w-0">
								<p className="truncate text-base font-medium tracking-tight text-foreground/95 sm:text-[1.06rem]">{job.title}</p>
								{/* Mobile-only condensed meta */}
								<p className="mt-0.5 text-xs text-foreground/50 sm:hidden">
									{job.location} &middot; {job.type}
								</p>
							</div>

							<p className="hidden text-sm text-foreground/80 sm:block sm:text-[0.94rem]">{job.location}</p>
							<p className="hidden text-sm text-foreground/80 sm:block sm:text-[0.94rem]">{job.type}</p>

							<div className="flex items-center gap-4 self-start sm:self-center">
								<div className="hidden sm:block">
									<CeramicButton href={job.descriptionLink} color="rgba(255,255,255,0.05)" textColor="#ffffff" ringColor="rgba(255,255,255,0.14)" borderRadius={8} padding="11px 16px" fontSize={12}>
										Job Description
									</CeramicButton>
								</div>
								<CeramicButton href={job.applyLink} color="#ffffff" textColor="#0a0a0b" ringColor="rgba(255,255,255,0.22)" borderRadius={8} padding="11px 18px" fontSize={12}>
									Apply
								</CeramicButton>
							</div>
						</motion.div>
					))}
				</AnimatePresence>

				{filtered.length === 0 && (
					<div className="py-14 text-center">
						<p className="text-muted/60">No open roles right now. Check back soon.</p>
					</div>
				)}
			</div>
		</div>
	);
}
