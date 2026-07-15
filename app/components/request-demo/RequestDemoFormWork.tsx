"use client";

import { SPX_FIELD, SPX_FORM_LABEL } from "@/app/components/ui/spx-form";
import type { FormErrors, FormValues } from "./form-types-validation";
import { FieldError, LabelInputContainer } from "./RequestDemoShared";

type Props = {
	values: FormValues;
	errors: FormErrors;
	onChange: (name: keyof FormValues, value: string) => void;
	onBlur: (name: keyof FormValues) => void;
};

export function RequestDemoFormWork({ values, errors, onChange, onBlur }: Props) {
	return (
		<>
			<LabelInputContainer className="mb-5">
				<label htmlFor="workEmail" className={SPX_FORM_LABEL}>
					Work email <span className="text-destructive">*</span>
				</label>
				<input
					id="workEmail"
					name="workEmail"
					placeholder="you@company.com"
					type="email"
					className={SPX_FIELD}
					value={values.workEmail}
					onChange={(e) => onChange("workEmail", e.target.value)}
					onBlur={() => onBlur("workEmail")}
					aria-invalid={!!errors.workEmail}
					aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
				/>
				{errors.workEmail && <FieldError id="workEmail-error">{errors.workEmail}</FieldError>}
			</LabelInputContainer>
			<div className="mb-5 flex flex-col space-y-5 lg:flex-row lg:space-x-4 lg:space-y-0">
				<LabelInputContainer>
					<label htmlFor="company" className={SPX_FORM_LABEL}>
						Company <span className="text-destructive">*</span>
					</label>
					<input id="company" name="company" placeholder="Acme Corp" type="text" className={SPX_FIELD} value={values.company} onChange={(e) => onChange("company", e.target.value)} onBlur={() => onBlur("company")} aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-error" : undefined} />
					{errors.company && <FieldError id="company-error">{errors.company}</FieldError>}
				</LabelInputContainer>
				<LabelInputContainer>
					<label htmlFor="jobTitle" className={SPX_FORM_LABEL}>
						Job title <span className="text-destructive">*</span>
					</label>
					<input
						id="jobTitle"
						name="jobTitle"
						placeholder="Operations Lead"
						type="text"
						className={SPX_FIELD}
						value={values.jobTitle}
						onChange={(e) => onChange("jobTitle", e.target.value)}
						onBlur={() => onBlur("jobTitle")}
						aria-invalid={!!errors.jobTitle}
						aria-describedby={errors.jobTitle ? "jobTitle-error" : undefined}
					/>
					{errors.jobTitle && <FieldError id="jobTitle-error">{errors.jobTitle}</FieldError>}
				</LabelInputContainer>
			</div>
		</>
	);
}
