export function formatSubmittedAt(iso: string): string {
	const hasTimezone = iso.endsWith("Z") || /[+-]\d{2}:?\d{2}$/.test(iso);
	const date = new Date(hasTimezone ? iso : `${iso}Z`);
	return date.toLocaleString(undefined, {
		dateStyle: "medium",
		timeStyle: "short",
	});
}
