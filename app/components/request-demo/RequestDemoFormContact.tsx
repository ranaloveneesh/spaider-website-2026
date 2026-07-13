"use client";

import { SPX_FIELD, SPX_FORM_LABEL, SpxSelect } from "@/app/components/ui/spx-form";
import type { FormErrors, FormValues } from "./form-types-validation";
import { FieldError, LabelInputContainer } from "./RequestDemoShared";

type Props = {
	values: FormValues;
	errors: FormErrors;
	onChange: (name: keyof FormValues, value: string) => void;
	onBlur: (name: keyof FormValues) => void;
};

export function RequestDemoFormContact({ values, errors, onChange, onBlur }: Props) {
	return (
		<div className="mb-5 flex flex-col space-y-5 lg:flex-row lg:space-x-4 lg:space-y-0">
			<LabelInputContainer>
				<label htmlFor="country" className={SPX_FORM_LABEL}>
					Country <span className="text-destructive">*</span>
				</label>
				<SpxSelect id="country" name="country" value={values.country} onChange={(e) => onChange("country", e.target.value)} onBlur={() => onBlur("country")} aria-invalid={!!errors.country} aria-describedby={errors.country ? "country-error" : undefined}>
					<option value="Luxembourg">Luxembourg</option>
					<option value="France">France</option>
					<option value="Germany">Germany</option>
					<option value="Belgium">Belgium</option>
					<option value="Netherlands">Netherlands</option>
				</SpxSelect>
				{errors.country && <FieldError id="country-error">{errors.country}</FieldError>}
			</LabelInputContainer>
			<LabelInputContainer>
				<label htmlFor="phone" className={SPX_FORM_LABEL}>
					Mobile number
				</label>
				<input id="phone" name="phone" placeholder="+352 6x xx xx xx" type="tel" className={SPX_FIELD} value={values.phone} onChange={(e) => onChange("phone", e.target.value)} onBlur={() => onBlur("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
				{errors.phone && <FieldError id="phone-error">{errors.phone}</FieldError>}
			</LabelInputContainer>
		</div>
	);
}
