"use client";

import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { SelectField } from "@/app/components/ui/select-field";
import type { FormErrors, FormValues } from "./form-types-validation";
import { LabelInputContainer } from "./RequestDemoShared";

type Props = {
	values: FormValues;
	errors: FormErrors;
	onChange: (name: keyof FormValues, value: string) => void;
	onBlur: (name: keyof FormValues) => void;
};

export function RequestDemoFormContact({ values, errors, onChange, onBlur }: Props) {
	return (
		<div className="mb-4 flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
			<LabelInputContainer>
				<Label htmlFor="country">
					Country <span className="text-destructive">*</span>
				</Label>
				<SelectField id="country" name="country" value={values.country} onChange={(e) => onChange("country", e.target.value)} onBlur={() => onBlur("country")} aria-invalid={!!errors.country} aria-describedby={errors.country ? "country-error" : undefined}>
					<option value="Luxembourg">Luxembourg</option>
					<option value="France">France</option>
					<option value="Germany">Germany</option>
					<option value="Belgium">Belgium</option>
					<option value="Netherlands">Netherlands</option>
				</SelectField>
				{errors.country && (
					<p id="country-error" className="text-sm text-destructive" role="alert">
						{errors.country}
					</p>
				)}
			</LabelInputContainer>
			<LabelInputContainer>
				<Label htmlFor="phone">Mobile number</Label>
				<Input id="phone" name="phone" placeholder="+352 6x xx xx xx" type="tel" value={values.phone} onChange={(e) => onChange("phone", e.target.value)} onBlur={() => onBlur("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
				{errors.phone && (
					<p id="phone-error" className="text-sm text-destructive" role="alert">
						{errors.phone}
					</p>
				)}
			</LabelInputContainer>
		</div>
	);
}
