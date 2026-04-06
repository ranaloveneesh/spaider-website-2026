"use client";

import { CalendarIcon, MailIcon } from "lucide-react";
import CeramicButton from "@/app/components/ui/button";
import { CALENDLY_URL, EMAIL_ADDRESS } from "@/app/utils/constants";
import { BottomGradient } from "./RequestDemoShared";

type Props = {
	isSubmitting: boolean;
};

export function RequestDemoFormSubmitAndAlternates({ isSubmitting }: Props) {
	return (
		<>
			<CeramicButton color="var(--color-accent)" textColor="var(--color-white)" borderRadius={6} padding="12px" centered style={{ width: "100%", textAlign: "center" }} type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Submitting..." : "Book demo"}
			</CeramicButton>

			<div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
			<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
				<button
					type="button"
					className="group/btn shadow-input relative flex h-10 w-full cursor-pointer items-center justify-start space-x-2 rounded-md border-0 bg-gray-50 px-4 text-start font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
					aria-label="Schedule on Calendly (opens in a new tab)"
					onClick={() => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")}
				>
					<span className="text-sm text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
						<CalendarIcon className="h-4 w-4 shrink-0 text-neutral-800 dark:text-neutral-300" aria-hidden />
						Calendly
					</span>
					<BottomGradient />
				</button>
				<button
					type="button"
					className="group/btn shadow-input relative flex h-10 w-full cursor-pointer items-center justify-start space-x-2 rounded-md border-0 bg-gray-50 px-4 text-start font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
					aria-label={`Send email to ${EMAIL_ADDRESS}`}
					onClick={() => {
						window.location.href = `mailto:${EMAIL_ADDRESS}`;
					}}
				>
					<span className="text-sm text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
						<MailIcon className="h-4 w-4 shrink-0 text-neutral-800 dark:text-neutral-300" aria-hidden />
						Mail
					</span>
					<BottomGradient />
				</button>
			</div>
		</>
	);
}
