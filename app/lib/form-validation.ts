const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\d\s-]{7,}$/;

export function isValidEmail(value: string): boolean {
	return EMAIL_PATTERN.test(value);
}

export function isValidPhone(value: string): boolean {
	return PHONE_PATTERN.test(value);
}
