import type { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

export function LabelInputContainer({ children, className }: { children: ReactNode; className?: string }) {
	return <div className={cn("flex w-full min-w-0 flex-col space-y-2.5 lg:flex-1", className)}>{children}</div>;
}

export function FieldError({ id, children }: { id: string; children: ReactNode }) {
	return (
		<p id={id} className="text-[0.8rem] text-destructive" role="alert">
			{children}
		</p>
	);
}
