"use client";

const DEPLOYMENT_ENVS = ["EU cloud", "Private Cloud", "On Prem"] as const;

export default function SecurityCompliance() {
	return (
		<section className="relative mt-6 overflow-hidden sm:mt-8 md:mt-10 lg:mt-12">

			{/* Content */}
			<div className="relative z-10 mx-auto flex flex-col items-center px-4 py-12 text-center sm:py-16 md:py-20">
				<h2
					className="font-outfit text-accent font-medium leading-tight tracking-tight"
					style={{
						backgroundSize: "cover",
						backgroundPosition: "center",
						fontSize: "clamp(2.8rem,5vw,3.75rem)", maxWidth: "24ch"
					}}
				>
					Secure deployment for sensitive aerospace environments
				</h2>

				<p
					className="mt-4 text-sm leading-7 text-muted sm:mt-5 sm:text-base sm:leading-8"
					style={{ maxWidth: "60ch" }}
				>
					Control where your data runs, which sources are approved, and how
					outputs are governed across your organization.
				</p>

				{/* Deployment environment badges */}
				<div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6">
					{DEPLOYMENT_ENVS.map((env) => (
						<span
							key={env}
							className="inline-flex items-center gap-2 rounded-sm border border-accent/45 px-3 py-1.5 font-mono text-sm tracking-wide text-white/80"
						>
							<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
							{env}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
