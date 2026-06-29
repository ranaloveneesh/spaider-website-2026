import type { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

export function LabelInputContainer({ children, className }: { children: ReactNode; className?: string }) {
	return <div className={cn("flex w-full min-w-0 flex-col space-y-2 lg:flex-1", className)}>{children}</div>;
}

export function BottomGradient() {
	return (
		<>
			<span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
			<span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
		</>
	);
}
