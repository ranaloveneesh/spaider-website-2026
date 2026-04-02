"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  initialValues,
  validate,
  validateField,
  type FormErrors,
  type FormValues,
} from "./form-types-validation";
import { RequestDemoFormContact } from "./RequestDemoFormContact";
import { RequestDemoFormHelp } from "./RequestDemoFormHelp";
import { RequestDemoFormPersonal } from "./RequestDemoFormPersonal";
import { RequestDemoFormSubmitAndAlternates } from "./RequestDemoFormSubmitAndAlternates";
import { RequestDemoFormWork } from "./RequestDemoFormWork";

export function RequestDemoForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    console.log("Form submitted", values);
  };

  const fieldProps = { values, errors, onChange: handleChange, onBlur: handleBlur };

  return (
    <div className="col-span-2 w-full rounded-2xl border border-border bg-card p-4 shadow-sm md:p-4">
      <form className="my-0 w-full" onSubmit={handleSubmit} noValidate>
        <RequestDemoFormPersonal {...fieldProps} />
        <RequestDemoFormWork {...fieldProps} />
        <RequestDemoFormContact {...fieldProps} />
        <RequestDemoFormHelp {...fieldProps} />
        <RequestDemoFormSubmitAndAlternates />
      </form>
    </div>
  );
}
