"use client";

import { CalendarIcon, MailIcon } from "lucide-react";
import CeramicButton from "@/app/components/ui/button";
import { CALENDLY_URL, EMAIL_ADDRESS } from "@/app/utils/constants";

type Props = {
	isSubmitting: boolean;
};

export function RequestDemoFormSubmitAndAlternates({ isSubmitting }: Props) {
	return (
		<>
			<CeramicButton color="#ffffff" textColor="#0a0a0b" ringColor="rgba(255,255,255,0.22)" borderRadius={8} padding="11px 24px" fontSize={13} centered style={{ width: "100%", textAlign: "center" }} type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Submitting..." : "Submit"}
			</CeramicButton>

			<div className="my-6 flex items-center gap-3">
				<div className="h-px flex-1 bg-linear-to-r from-transparent via-neutral-300 to-neutral-300 dark:via-neutral-700 dark:to-neutral-700" />
				<span className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">OR</span>
				<div className="h-px flex-1 bg-linear-to-l from-transparent via-neutral-300 to-neutral-300 dark:via-neutral-700 dark:to-neutral-700" />
			</div>
			<div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:gap-4">
				<div className="w-full min-w-0 sm:flex-1">
					<CeramicButton
						type="button"
						color="rgba(255,255,255,0.05)"
						textColor="#ffffff"
						ringColor="rgba(255,255,255,0.14)"
						borderRadius={8}
						padding="11px 24px"
						fontSize={13}
						centered
						aria-label="Schedule on Calendly (opens in a new tab)"
						style={{ width: "100%", justifyContent: "center" }}
						onClick={() => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")}
					>
						<span className="inline-flex items-center gap-2">
							<CalendarIcon className="h-4 w-4 shrink-0" aria-hidden />
							<span>Calendly</span>
						</span>
					</CeramicButton>
				</div>
				<div className="w-full min-w-0 sm:flex-1">
					<CeramicButton
						type="button"
						color="rgba(255,255,255,0.05)"
						textColor="#ffffff"
						ringColor="rgba(255,255,255,0.14)"
						borderRadius={8}
						padding="11px 24px"
						fontSize={13}
						centered
						aria-label={`Send email to ${EMAIL_ADDRESS}`}
						style={{ width: "100%", justifyContent: "center" }}
						onClick={() => {
							window.location.href = `mailto:${EMAIL_ADDRESS}`;
						}}
					>
						<span className="inline-flex items-center gap-2">
							<MailIcon className="h-4 w-4 shrink-0" aria-hidden />
							<span>Mail</span>
						</span>
					</CeramicButton>
				</div>
			</div>
		</>
	);
}
