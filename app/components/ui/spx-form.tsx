import type { SelectHTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";

// Plain hairline form fields in the spx language. Deliberately NOT the shared
// ui/input + ui/textarea primitives: those carry a hardcoded blue hover glow
// and rounded-lg wrapper that clash with the void/hairline style. Used by the
// invest and request-trial forms.
export const SPX_FIELD = "w-full rounded-xs border border-spx-rule bg-spx-void px-4 py-3 text-[0.95rem] text-spx-ink outline-none transition-colors duration-300 placeholder:text-spx-faint hover:border-spx-rule-2 focus:border-spx-cyan aria-invalid:border-destructive";

export const SPX_FORM_LABEL = "font-geist-mono text-[0.7rem] font-normal uppercase tracking-[0.16em] text-spx-mute";

export function SpxSelect({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
	return (
		<div className="relative w-full min-w-0">
			<select className={cn(SPX_FIELD, "appearance-none pr-10", className)} {...props}>
				{children}
			</select>
			<span aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[0.7rem] text-spx-faint">
				▾
			</span>
		</div>
	);
}
