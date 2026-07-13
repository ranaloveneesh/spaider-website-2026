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

export function RequestDemoFormPersonal({ values, errors, onChange, onBlur }: Props) {
	return (
		<div className="mb-5 flex flex-col space-y-5 lg:flex-row lg:space-x-4 lg:space-y-0">
			<LabelInputContainer>
				<label htmlFor="firstname" className={SPX_FORM_LABEL}>
					First name <span className="text-destructive">*</span>
				</label>
				<input id="firstname" name="firstname" placeholder="John" type="text" className={SPX_FIELD} value={values.firstname} onChange={(e) => onChange("firstname", e.target.value)} onBlur={() => onBlur("firstname")} aria-invalid={!!errors.firstname} aria-describedby={errors.firstname ? "firstname-error" : undefined} />
				{errors.firstname && <FieldError id="firstname-error">{errors.firstname}</FieldError>}
			</LabelInputContainer>
			<LabelInputContainer>
				<label htmlFor="lastname" className={SPX_FORM_LABEL}>
					Last name <span className="text-destructive">*</span>
				</label>
				<input id="lastname" name="lastname" placeholder="Doe" type="text" className={SPX_FIELD} value={values.lastname} onChange={(e) => onChange("lastname", e.target.value)} onBlur={() => onBlur("lastname")} aria-invalid={!!errors.lastname} aria-describedby={errors.lastname ? "lastname-error" : undefined} />
				{errors.lastname && <FieldError id="lastname-error">{errors.lastname}</FieldError>}
			</LabelInputContainer>
		</div>
	);
}
