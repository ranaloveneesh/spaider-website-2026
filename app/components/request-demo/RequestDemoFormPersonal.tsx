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

export function RequestDemoFormPersonal({
  values,
  errors,
  onChange,
  onBlur,
}: Props) {
  return (
    <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
      <LabelInputContainer>
        <Label htmlFor="firstname">
          First name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="firstname"
          name="firstname"
          placeholder="John"
          type="text"
          value={values.firstname}
          onChange={(e) => onChange("firstname", e.target.value)}
          onBlur={() => onBlur("firstname")}
          aria-invalid={!!errors.firstname}
          aria-describedby={errors.firstname ? "firstname-error" : undefined}
        />
        {errors.firstname && (
          <p
            id="firstname-error"
            className="text-sm text-destructive"
            role="alert"
          >
            {errors.firstname}
          </p>
        )}
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="lastname">
          Last name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="lastname"
          name="lastname"
          placeholder="Doe"
          type="text"
          value={values.lastname}
          onChange={(e) => onChange("lastname", e.target.value)}
          onBlur={() => onBlur("lastname")}
          aria-invalid={!!errors.lastname}
          aria-describedby={errors.lastname ? "lastname-error" : undefined}
        />
        {errors.lastname && (
          <p
            id="lastname-error"
            className="text-sm text-destructive"
            role="alert"
          >
            {errors.lastname}
          </p>
        )}
      </LabelInputContainer>
    </div>
  );
}
