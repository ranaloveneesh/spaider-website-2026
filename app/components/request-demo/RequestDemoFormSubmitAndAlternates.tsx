"use client";

import { CalendarIcon, MailIcon } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { CALENDLY_URL, EMAIL_ADDRESS } from "@/app/utils/constants";

type Props = {
	isSubmitting: boolean;
};

export function RequestDemoFormSubmitAndAlternates({ isSubmitting }: Props) {
	return (
		<>
			<Button variant="solid" type="submit" disabled={isSubmitting} className="h-auto w-full">
				{isSubmitting ? "Submitting..." : "Submit"}
			</Button>

			<div className="my-6 flex items-center gap-4">
				<div className="h-px flex-1 bg-spx-rule" />
				<span className="font-geist-mono text-[0.65rem] uppercase tracking-[0.16em] text-spx-faint">or</span>
				<div className="h-px flex-1 bg-spx-rule" />
			</div>

			<div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:gap-4">
				<Button variant="line" type="button" className="h-auto w-full min-w-0 px-5 py-3 sm:flex-1" aria-label="Schedule on Calendly (opens in a new tab)" onClick={() => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")}>
					<CalendarIcon className="h-4 w-4 shrink-0" aria-hidden />
					Calendly
				</Button>
				<Button
					variant="line"
					type="button"
					className="h-auto w-full min-w-0 px-5 py-3 sm:flex-1"
					aria-label={`Send email to ${EMAIL_ADDRESS}`}
					onClick={() => {
						window.location.href = `mailto:${EMAIL_ADDRESS}`;
					}}
				>
					<MailIcon className="h-4 w-4 shrink-0" aria-hidden />
					Mail
				</Button>
			</div>
		</>
	);
}
