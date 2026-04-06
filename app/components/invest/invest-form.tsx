"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import CeramicButton from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { cn } from "@/app/lib/utils";

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
			const res = await fetch("/api/invest", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			if (!res.ok) {
				throw new Error("Failed to submit form");
			}

			toast.success("Thanks! Your message has been received.");
			setValues(initialValues);
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong while submitting. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-w-0 w-full rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5 md:col-span-1 lg:col-span-2 lg:p-6">
			<form className="my-0 w-full" onSubmit={handleSubmit} noValidate>
				<div className="mb-4 flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
					<LabelInputContainer>
						<Label htmlFor="firstname">
							First name <span className="text-destructive">*</span>
						</Label>
						<Input id="firstname" name="firstname" placeholder="John" type="text" value={values.firstname} onChange={(e) => handleChange("firstname", e.target.value)} onBlur={() => handleBlur("firstname")} aria-invalid={!!errors.firstname} aria-describedby={errors.firstname ? "firstname-error" : undefined} />
						{errors.firstname && (
							<p id="firstname-error" className="text-sm text-destructive" role="alert">
								{errors.firstname}
							</p>
						)}
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor="lastname">
							Last name <span className="text-destructive">*</span>
						</Label>
						<Input id="lastname" name="lastname" placeholder="Doe" type="text" value={values.lastname} onChange={(e) => handleChange("lastname", e.target.value)} onBlur={() => handleBlur("lastname")} aria-invalid={!!errors.lastname} aria-describedby={errors.lastname ? "lastname-error" : undefined} />
						{errors.lastname && (
							<p id="lastname-error" className="text-sm text-destructive" role="alert">
								{errors.lastname}
							</p>
						)}
					</LabelInputContainer>
				</div>

				<div className="mb-4 flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
					<LabelInputContainer>
						<Label htmlFor="email">
							Email <span className="text-destructive">*</span>
						</Label>
						<Input id="email" name="email" placeholder="you@email.com" type="email" value={values.email} onChange={(e) => handleChange("email", e.target.value)} onBlur={() => handleBlur("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
						{errors.email && (
							<p id="email-error" className="text-sm text-destructive" role="alert">
								{errors.email}
							</p>
						)}
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor="phone">Mobile number</Label>
						<Input id="phone" name="phone" placeholder="+352 6x xx xx xx" type="tel" value={values.phone} onChange={(e) => handleChange("phone", e.target.value)} onBlur={() => handleBlur("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
						{errors.phone && (
							<p id="phone-error" className="text-sm text-destructive" role="alert">
								{errors.phone}
							</p>
						)}
					</LabelInputContainer>
				</div>

				<LabelInputContainer className="mb-4">
					<Label htmlFor="message">Message</Label>
					<Textarea id="message" name="message" placeholder="Tell us more..." rows={3} value={values.message} onChange={(e) => handleChange("message", e.target.value)} onBlur={() => handleBlur("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
					{errors.message && (
						<p id="message-error" className="text-sm text-destructive" role="alert">
							{errors.message}
						</p>
					)}
				</LabelInputContainer>

				<CeramicButton color="var(--color-accent)" textColor="var(--color-white)" borderRadius={6} padding="12px" centered style={{ width: "100%", textAlign: "center" }} type="submit" disabled={isSubmitting}>
					{isSubmitting ? "Submitting..." : "Submit"}
				</CeramicButton>
			</form>
		</div>
	);
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <div className={cn("flex w-full min-w-0 flex-col space-y-2 lg:flex-1", className)}>{children}</div>;
};
