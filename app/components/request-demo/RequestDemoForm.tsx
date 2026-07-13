"use client";

import { motion } from "motion/react";
import type { FormEvent } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

import { type FormErrors, type FormValues, initialValues, validate, validateField } from "./form-types-validation";
import { RequestDemoFormContact } from "./RequestDemoFormContact";
import { RequestDemoFormHelp } from "./RequestDemoFormHelp";
import { RequestDemoFormPersonal } from "./RequestDemoFormPersonal";
import { RequestDemoFormSubmitAndAlternates } from "./RequestDemoFormSubmitAndAlternates";
import { RequestDemoFormWork } from "./RequestDemoFormWork";

export function RequestDemoForm() {
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

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const nextErrors = validate(values);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) return;
		setIsSubmitting(true);

		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/website/request-demo`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			if (!res.ok) {
				throw new Error("Failed to submit form");
			}

			toast.success("Thanks! Your request has been received.");
			setValues(initialValues);
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong while submitting. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const fieldProps = { values, errors, onChange: handleChange, onBlur: handleBlur };

	return (
		<motion.div className="w-full min-w-0 rounded-xs border border-spx-rule bg-spx-void-2 p-6 sm:p-8" initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, ease: EASE_OUT }}>
			<form className="my-0 w-full" onSubmit={handleSubmit} noValidate>
				<RequestDemoFormPersonal {...fieldProps} />
				<RequestDemoFormWork {...fieldProps} />
				<RequestDemoFormContact {...fieldProps} />
				<RequestDemoFormHelp {...fieldProps} />
				<RequestDemoFormSubmitAndAlternates isSubmitting={isSubmitting} />
			</form>
		</motion.div>
	);
}
