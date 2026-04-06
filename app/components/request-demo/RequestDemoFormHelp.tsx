"use client";

import { Label } from "@/app/components/ui/label";
import { SelectField } from "@/app/components/ui/select-field";
import { Textarea } from "@/app/components/ui/textarea";
import type { FormErrors, FormValues } from "./form-types-validation";
import { LabelInputContainer } from "./RequestDemoShared";

type Props = {
	values: FormValues;
	errors: FormErrors;
	onChange: (name: keyof FormValues, value: string) => void;
	onBlur: (name: keyof FormValues) => void;
};

export function RequestDemoFormHelp({ values, errors, onChange, onBlur }: Props) {
	return (
		<>
			<LabelInputContainer className="mb-4">
				<Label htmlFor="helpTopic">
					How can we help? <span className="text-destructive">*</span>
				</Label>
				<SelectField id="helpTopic" name="helpTopic" value={values.helpTopic} onChange={(e) => onChange("helpTopic", e.target.value)} onBlur={() => onBlur("helpTopic")} aria-invalid={!!errors.helpTopic} aria-describedby={errors.helpTopic ? "helpTopic-error" : undefined}>
					<option value="Book a product demo">Book a product demo</option>
					<option value="Technical questions">Technical questions</option>
					<option value="Partnership inquiry">Partnership inquiry</option>
				</SelectField>
				{errors.helpTopic && (
					<p id="helpTopic-error" className="text-sm text-destructive" role="alert">
						{errors.helpTopic}
					</p>
				)}
			</LabelInputContainer>

			<LabelInputContainer className="mb-4">
				<Label htmlFor="message">
					Message <span className="text-destructive">*</span>
				</Label>
				<Textarea id="message" name="message" placeholder="Tell us about your use case..." rows={3} value={values.message} onChange={(e) => onChange("message", e.target.value)} onBlur={() => onBlur("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
				{errors.message && (
					<p id="message-error" className="text-sm text-destructive" role="alert">
						{errors.message}
					</p>
				)}
			</LabelInputContainer>
		</>
	);
}
