"use client";

import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import type { FormErrors, FormValues } from "./form-types-validation";
import { LabelInputContainer } from "./RequestDemoShared";

type Props = {
	values: FormValues;
	errors: FormErrors;
	onChange: (name: keyof FormValues, value: string) => void;
	onBlur: (name: keyof FormValues) => void;
};

export function RequestDemoFormWork({ values, errors, onChange, onBlur }: Props) {
	return (
		<div className="mb-4 flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
			<LabelInputContainer>
				<Label htmlFor="workEmail">
					Work email <span className="text-destructive">*</span>
				</Label>
				<Input id="workEmail" name="workEmail" placeholder="you@company.com" type="email" value={values.workEmail} onChange={(e) => onChange("workEmail", e.target.value)} onBlur={() => onBlur("workEmail")} aria-invalid={!!errors.workEmail} aria-describedby={errors.workEmail ? "workEmail-error" : undefined} />
				{errors.workEmail && (
					<p id="workEmail-error" className="text-sm text-destructive" role="alert">
						{errors.workEmail}
					</p>
				)}
			</LabelInputContainer>
			<LabelInputContainer>
				<Label htmlFor="company">
					Company <span className="text-destructive">*</span>
				</Label>
				<Input id="company" name="company" placeholder="Acme Corp" type="text" value={values.company} onChange={(e) => onChange("company", e.target.value)} onBlur={() => onBlur("company")} aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-error" : undefined} />
				{errors.company && (
					<p id="company-error" className="text-sm text-destructive" role="alert">
						{errors.company}
					</p>
				)}
			</LabelInputContainer>
			<LabelInputContainer>
				<Label htmlFor="jobTitle">
					Job title <span className="text-destructive">*</span>
				</Label>
				<Input id="jobTitle" name="jobTitle" placeholder="Operations Lead" type="text" value={values.jobTitle} onChange={(e) => onChange("jobTitle", e.target.value)} onBlur={() => onBlur("jobTitle")} aria-invalid={!!errors.jobTitle} aria-describedby={errors.jobTitle ? "jobTitle-error" : undefined} />
				{errors.jobTitle && (
					<p id="jobTitle-error" className="text-sm text-destructive" role="alert">
						{errors.jobTitle}
					</p>
				)}
			</LabelInputContainer>
		</div>
	);
}
