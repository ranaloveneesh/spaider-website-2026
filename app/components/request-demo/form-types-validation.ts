export type FormValues = {
	firstname: string;
	lastname: string;
	workEmail: string;
	company: string;
	jobTitle: string;
	country: string;
	phone: string;
	helpTopic: string;
	message: string;
};

export type FormErrors = Partial<Record<keyof FormValues, string>>;

export const initialValues: FormValues = {
	firstname: "",
	lastname: "",
	workEmail: "",
	company: "",
	jobTitle: "",
	country: "Luxembourg",
	phone: "",
	helpTopic: "Book a product demo",
	message: "",
};

const requiredFields: Array<keyof FormValues> = ["firstname", "lastname", "workEmail", "company", "jobTitle", "country", "helpTopic", "message"];

export function validateField(name: keyof FormValues, values: FormValues): string {
	const value = values[name];

	if (requiredFields.includes(name) && typeof value === "string" && !value.trim()) {
		return "This field is required.";
	}

	if (name === "workEmail" && values.workEmail.trim()) {
		const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail);
		if (!isEmailValid) return "Enter a valid email address.";
	}

	if (name === "phone" && values.phone.trim()) {
		const isPhoneValid = /^[+()\d\s-]{7,}$/.test(values.phone);
		if (!isPhoneValid) return "Enter a valid phone number.";
	}

	return "";
}

export function validate(values: FormValues): FormErrors {
	const nextErrors: FormErrors = {};
	(["firstname", "lastname", "workEmail", "company", "jobTitle", "country", "phone", "helpTopic", "message"] as Array<keyof FormValues>).forEach((field) => {
		const error = validateField(field, values);
		if (error) nextErrors[field] = error;
	});
	return nextErrors;
}
