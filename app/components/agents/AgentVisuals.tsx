import Image from "next/image";

export function SaganVisual({ compact = false }: { compact?: boolean }) {
	return (
		<div className="relative h-full min-h-[22rem] overflow-hidden bg-[#090b10]">
			<Image src="/sagan/sagan_preview.png" alt="SAGAN proposal workspace" fill className="object-cover" sizes={compact ? "(max-width: 900px) 100vw, 33vw" : "(max-width: 900px) 100vw, 70vw"} />
			<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
		</div>
	);
}

const requirements = [
	{ id: "SYS-014", label: "Attitude knowledge", status: "linked" },
	{ id: "SYS-021", label: "Safe-mode entry", status: "review" },
	{ id: "IF-006", label: "Power interface", status: "linked" },
	{ id: "VER-032", label: "Thermal evidence", status: "open" },
] as const;

export function SpockVisual({ compact = false }: { compact?: boolean }) {
	return (
		<div className={`relative h-full overflow-hidden bg-[#080b11] p-4 sm:p-6 ${compact ? "min-h-[22rem]" : "min-h-[32rem]"}`}>
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(89,232,245,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(89,232,245,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />
			<div className="relative flex items-center justify-between border-b border-spx-rule pb-4 font-geist-mono text-[0.6rem] uppercase tracking-[0.14em] text-spx-mute sm:text-[0.68rem]">
				<span>SPOCK / SYSTEM MODEL</span><span className="text-spx-cyan">Trace state · 84%</span>
			</div>

			<div className="relative mt-5 grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
				<div className="border border-spx-rule bg-spx-void/74 p-4 backdrop-blur-sm">
					<div className="mb-4 flex items-center justify-between"><span className="spx-label text-spx-mute">Requirements</span><span className="font-geist-mono text-[0.62rem] text-spx-cyan">128 items</span></div>
					{requirements.map((requirement) => (
						<div key={requirement.id} className="border-t border-spx-rule py-3">
							<div className="flex items-center justify-between gap-3"><span className="font-geist-mono text-[0.64rem] text-spx-cyan">{requirement.id}</span><span className={`h-1.5 w-1.5 rounded-full ${requirement.status === "linked" ? "bg-spx-green" : requirement.status === "review" ? "bg-spx-amber" : "bg-spx-faint"}`} /></div>
							<p className="mt-1 text-xs text-spx-ink-2 sm:text-sm">{requirement.label}</p>
						</div>
					))}
				</div>

				<div className="relative min-h-[18rem] border border-spx-rule bg-spx-void/65 p-4 backdrop-blur-sm">
					<div className="flex items-center justify-between"><span className="spx-label text-spx-mute">Architecture graph</span><span className="font-geist-mono text-[0.6rem] text-spx-green">evidence connected</span></div>
					<svg aria-label="System architecture and requirements trace graph" viewBox="0 0 480 280" className="mt-3 h-auto w-full">
						<g stroke="rgba(89,232,245,.36)" strokeWidth="1">
							<path d="M74 65 L237 48 L402 84 M74 65 L151 193 L237 48 L305 195 L402 84 M151 193 L305 195" />
						</g>
						{[
							[74, 65, "REQ"], [237, 48, "SYS"], [402, 84, "IF"], [151, 193, "SUB"], [305, 195, "VER"],
						].map(([x, y, label]) => (
							<g key={String(label)} transform={`translate(${x} ${y})`}>
								<circle r="24" fill="#0b111a" stroke={label === "SYS" ? "#59e8f5" : "rgba(203,211,225,.34)"} />
								<circle r="4" fill={label === "VER" ? "#eeb95c" : "#59e8f5"} className="motion-safe:animate-pulse" />
								<text y="42" textAnchor="middle" fill="rgba(203,211,225,.72)" fontSize="11" fontFamily="monospace">{label}</text>
							</g>
						))}
					</svg>
				</div>
			</div>

			<div className="relative mt-4 grid grid-cols-3 gap-px bg-spx-rule">
				{[["Evidence", "96 sources"], ["Conflicts", "03 flagged"], ["Review", "2 pending"]].map(([label, value]) => <div key={label} className="bg-spx-void-2 p-3"><span className="block font-geist-mono text-[0.55rem] uppercase tracking-[0.1em] text-spx-mute">{label}</span><strong className="mt-1 block font-geist-mono text-xs font-medium text-foreground sm:text-sm">{value}</strong></div>)}
			</div>
		</div>
	);
}

export function KeplerVisual({ compact = false }: { compact?: boolean }) {
	return (
		<div className={`relative h-full overflow-hidden bg-[#070a10] p-4 sm:p-6 ${compact ? "min-h-[22rem]" : "min-h-[32rem]"}`}>
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_44%,rgba(29,99,232,0.2),transparent_28%),radial-gradient(circle_at_68%_44%,rgba(89,232,245,0.08),transparent_52%)]" />
			<div className="relative flex items-center justify-between border-b border-spx-rule pb-4 font-geist-mono text-[0.6rem] uppercase tracking-[0.14em] text-spx-mute sm:text-[0.68rem]">
				<span>KEPLER / MISSION CONTEXT</span><span className="text-spx-green">Pass active</span>
			</div>

			<div className="relative mt-5 grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
				<div className="relative min-h-[20rem] overflow-hidden border border-spx-rule bg-spx-void/55">
					<div className="absolute left-[61%] top-[49%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#102341] shadow-[0_0_50px_rgba(29,99,232,0.4)]"><div className="absolute inset-2 rounded-full border border-spx-cyan/25" /></div>
					{["h-28 w-52 rotate-[-12deg]", "h-40 w-72 rotate-[14deg]", "h-52 w-[25rem] rotate-[-4deg]"].map((size, index) => <div key={size} className={`absolute left-[61%] top-[49%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border ${index === 1 ? "border-spx-cyan/50" : "border-white/10"} ${size}`} />)}
					<div className="absolute left-[19%] top-[28%] h-2 w-2 rounded-full bg-spx-cyan shadow-[0_0_14px_#59e8f5] motion-safe:animate-pulse" />
					<div className="absolute left-4 top-4"><span className="spx-label">Orbital context</span><p className="mt-2 font-geist-mono text-xs text-spx-cyan">T+ 04:18:32</p></div>
					<div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2">
						{[["AOS", "12:48:06"], ["Range", "1,284 km"], ["Mode", "NOMINAL"]].map(([label, value]) => <div key={label} className="border border-spx-rule bg-spx-void/75 p-2 backdrop-blur"><span className="block font-geist-mono text-[0.52rem] uppercase text-spx-mute">{label}</span><strong className="mt-1 block font-geist-mono text-[0.68rem] font-normal text-foreground">{value}</strong></div>)}
					</div>
				</div>

				<div className="border border-spx-rule bg-spx-void/65 p-4">
					<span className="spx-label">Operations timeline</span>
					<div className="mt-4">
						{[
							["12:41", "Telemetry acquired", "complete"],
							["12:44", "Thermal deviation", "flag"],
							["12:46", "Procedure matched", "active"],
							["12:50", "Operator review", "pending"],
						].map(([time, event, state]) => <div key={time} className="grid grid-cols-[3rem_1fr_auto] items-center gap-2 border-t border-spx-rule py-3"><span className="font-geist-mono text-[0.62rem] text-spx-faint">{time}</span><span className="text-xs text-spx-ink-2">{event}</span><span className={`h-1.5 w-1.5 rounded-full ${state === "complete" ? "bg-spx-green" : state === "flag" ? "bg-spx-amber" : state === "active" ? "bg-spx-cyan motion-safe:animate-pulse" : "bg-spx-faint"}`} /></div>)}
					</div>
				</div>
			</div>

			<div className="relative mt-4 flex flex-wrap items-center gap-2 border border-spx-rule bg-spx-void/65 p-3 font-geist-mono text-[0.58rem] uppercase tracking-[0.08em] text-spx-mute sm:text-[0.64rem]"><span className="text-spx-cyan">Evidence bundle</span><span>·</span><span>Telemetry 42</span><span>Procedure OPS-17</span><span>Log entries 06</span><span className="ml-auto text-spx-amber">Review required</span></div>
		</div>
	);
}
