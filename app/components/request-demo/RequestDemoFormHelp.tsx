"use client";

import { SPX_FIELD, SPX_FORM_LABEL, SpxSelect } from "@/app/components/ui/spx-form";
import { cn } from "@/app/lib/utils";
import type { FormErrors, FormValues } from "./form-types-validation";
import { FieldError, LabelInputContainer } from "./RequestDemoShared";

type Props = {
	values: FormValues;
	errors: FormErrors;
	onChange: (name: keyof FormValues, value: string) => void;
	onBlur: (name: keyof FormValues) => void;
};

export function RequestDemoFormHelp({ values, errors, onChange, onBlur }: Props) {
	return (
		<>
			<LabelInputContainer className="mb-5">
				<label htmlFor="helpTopic" className={SPX_FORM_LABEL}>
					How can we help? <span className="text-destructive">*</span>
				</label>
				<SpxSelect id="helpTopic" name="helpTopic" value={values.helpTopic} onChange={(e) => onChange("helpTopic", e.target.value)} onBlur={() => onBlur("helpTopic")} aria-invalid={!!errors.helpTopic} aria-describedby={errors.helpTopic ? "helpTopic-error" : undefined}>
					<option value="Book a product demo">Book a product demo</option>
					<option value="Technical questions">Technical questions</option>
					<option value="Partnership inquiry">Partnership inquiry</option>
				</SpxSelect>
				{errors.helpTopic && <FieldError id="helpTopic-error">{errors.helpTopic}</FieldError>}
			</LabelInputContainer>

			<LabelInputContainer className="mb-6">
				<label htmlFor="message" className={SPX_FORM_LABEL}>
					Message <span className="text-destructive">*</span>
				</label>
				<textarea
					id="message"
					name="message"
					placeholder="Tell us about your use case..."
					rows={3}
					className={cn(SPX_FIELD, "resize-none")}
					value={values.message}
					onChange={(e) => onChange("message", e.target.value)}
					onBlur={() => onBlur("message")}
					aria-invalid={!!errors.message}
					aria-describedby={errors.message ? "message-error" : undefined}
				/>
				{errors.message && <FieldError id="message-error">{errors.message}</FieldError>}
			</LabelInputContainer>
		</>
	);
}
