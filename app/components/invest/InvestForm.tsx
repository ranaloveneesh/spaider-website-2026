"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/app/components/ui/button";
import { SPX_FIELD as FIELD_CLASSES, SPX_FORM_LABEL as LABEL_CLASSES } from "@/app/components/ui/spx-form";
import { cn } from "@/app/lib/utils";

// Strong ease-out - starts fast, feels immediately responsive (Emil principle)
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

type FormValues = {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
	firstname: "",
	lastname: "",
	email: "",
	phone: "",
	message: "",
};

const requiredFields: Array<keyof FormValues> = ["firstname", "lastname", "email"];

function validateField(name: keyof FormValues, values: FormValues): string {
	const value = values[name];
	if (requiredFields.includes(name) && typeof value === "string" && !value.trim()) {
		return "This field is required.";
	}
	if (name === "email" && values.email.trim()) {
		const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
		if (!isEmailValid) return "Enter a valid email address.";
	}
	if (name === "phone" && values.phone.trim()) {
		const isPhoneValid = /^[+()\d\s-]{7,}$/.test(values.phone);
		if (!isPhoneValid) return "Enter a valid phone number.";
	}
	return "";
}

function validate(values: FormValues): FormErrors {
	const nextErrors: FormErrors = {};
	(["firstname", "lastname", "email", "phone", "message"] as Array<keyof FormValues>).forEach((field) => {
		const error = validateField(field, values);
		if (error) nextErrors[field] = error;
	});
	return nextErrors;
}

export function InvestForm() {
	const [values, setValues] = useState<FormValues>(initialValues);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (name: keyof FormValues, value: string) => {
		setValues((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => {
			if (!prev[name]) return prev;
			const next = { ...prev };
			delete next[name];
			return next;
		});
	};

	const handleBlur = (name: keyof FormValues) => {
		const error = validateField(name, values);
		setErrors((prev) => ({ ...prev, [name]: error || undefined }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const nextErrors = validate(values);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) return;
		setIsSubmitting(true);
		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/website/invest`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});
			if (!res.ok) throw new Error("Failed to submit form");
			toast.success("Thanks! Your message has been received.");
			setValues(initialValues);
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong while submitting. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const fieldError = (name: keyof FormValues) => (
		<AnimatePresence>
			{errors[name] && (
				<motion.p key={`${name}-error`} id={`${name}-error`} className="text-[0.8rem] text-destructive" role="alert" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15, ease: "easeOut" }}>
					{errors[name]}
				</motion.p>
			)}
		</AnimatePresence>
	);

	return (
		// Card entry: fade-up + scale from 0.98 (nothing appears from nothing - Emil)
		<motion.div className="w-full min-w-0 rounded-xs border border-spx-rule bg-spx-void-2 p-6 sm:p-8" initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, ease: EASE_OUT }}>
			<form className="my-0 w-full" onSubmit={handleSubmit} noValidate>
				{/* Row 1 - Name fields */}
				<motion.div className="mb-5 flex flex-col space-y-5 sm:flex-row sm:space-x-4 sm:space-y-0" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.2 }}>
					<LabelInputContainer>
						<label htmlFor="firstname" className={LABEL_CLASSES}>
							First name <span className="text-destructive">*</span>
						</label>
						<input
							id="firstname"
							name="firstname"
							placeholder="John"
							type="text"
							className={FIELD_CLASSES}
							value={values.firstname}
							onChange={(e) => handleChange("firstname", e.target.value)}
							onBlur={() => handleBlur("firstname")}
							aria-invalid={!!errors.firstname}
							aria-describedby={errors.firstname ? "firstname-error" : undefined}
						/>
						{fieldError("firstname")}
					</LabelInputContainer>
					<LabelInputContainer>
						<label htmlFor="lastname" className={LABEL_CLASSES}>
							Last name <span className="text-destructive">*</span>
						</label>
						<input
							id="lastname"
							name="lastname"
							placeholder="Doe"
							type="text"
							className={FIELD_CLASSES}
							value={values.lastname}
							onChange={(e) => handleChange("lastname", e.target.value)}
							onBlur={() => handleBlur("lastname")}
							aria-invalid={!!errors.lastname}
							aria-describedby={errors.lastname ? "lastname-error" : undefined}
						/>
						{fieldError("lastname")}
					</LabelInputContainer>
				</motion.div>

				{/* Row 2 - Email + Phone */}
				<motion.div className="mb-5 flex flex-col space-y-5 sm:flex-row sm:space-x-4 sm:space-y-0" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.27 }}>
					<LabelInputContainer>
						<label htmlFor="email" className={LABEL_CLASSES}>
							Email <span className="text-destructive">*</span>
						</label>
						<input id="email" name="email" placeholder="you@email.com" type="email" className={FIELD_CLASSES} value={values.email} onChange={(e) => handleChange("email", e.target.value)} onBlur={() => handleBlur("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
						{fieldError("email")}
					</LabelInputContainer>
					<LabelInputContainer>
						<label htmlFor="phone" className={LABEL_CLASSES}>
							Mobile number
						</label>
						<input id="phone" name="phone" placeholder="+352 6x xx xx xx" type="tel" className={FIELD_CLASSES} value={values.phone} onChange={(e) => handleChange("phone", e.target.value)} onBlur={() => handleBlur("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
						{fieldError("phone")}
					</LabelInputContainer>
				</motion.div>

				{/* Row 3 - Message */}
				<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.34 }}>
					<LabelInputContainer className="mb-6">
						<label htmlFor="message" className={LABEL_CLASSES}>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							placeholder="Tell us more..."
							rows={3}
							className={cn(FIELD_CLASSES, "resize-none")}
							value={values.message}
							onChange={(e) => handleChange("message", e.target.value)}
							onBlur={() => handleBlur("message")}
							aria-invalid={!!errors.message}
							aria-describedby={errors.message ? "message-error" : undefined}
						/>
						{fieldError("message")}
					</LabelInputContainer>
				</motion.div>

				{/* Row 4 - Submit (whileTap scale - Emil button press rule) */}
				<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.41 }} whileTap={isSubmitting ? undefined : { scale: 0.97 }}>
					<Button variant="solid" type="submit" disabled={isSubmitting} className="h-auto w-full">
						{isSubmitting ? "Submitting..." : "Submit"}
					</Button>
				</motion.div>
			</form>
		</motion.div>
	);
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <div className={cn("flex w-full min-w-0 flex-col space-y-2.5 sm:flex-1", className)}>{children}</div>;
};
