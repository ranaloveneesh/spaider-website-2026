"use client";

import { useState } from "react";

import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import CeramicButton from "@/app/components/ui/button";
import { SelectField } from "@/app/components/ui/select-field";
import { Textarea } from "@/app/components/ui/textarea";
import { cn } from "@/app/lib/utils";
import { CalendarIcon, MailIcon } from "lucide-react";

type FormValues = {
  firstname: string;
  lastname: string;
  workEmail: string;
  company: string;
  jobTitle: string;
  country: string;
  phone: string;
  helpTopic: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  firstname: "",
  lastname: "",
  workEmail: "",
  company: "",
  jobTitle: "",
  country: "Luxembourg",
  phone: "",
  helpTopic: "Book a product demo",
  message: "",
};

const requiredFields: Array<keyof FormValues> = [
  "firstname",
  "lastname",
  "workEmail",
  "company",
  "jobTitle",
  "country",
  "helpTopic",
  "message",
];

function validateField(name: keyof FormValues, values: FormValues): string {
  const value = values[name];

  if (
    requiredFields.includes(name) &&
    typeof value === "string" &&
    !value.trim()
  ) {
    return "This field is required.";
  }

  if (name === "workEmail" && values.workEmail.trim()) {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail);
    if (!isEmailValid) return "Enter a valid email address.";
  }

  if (name === "phone" && values.phone.trim()) {
    const isPhoneValid = /^[+()\d\s-]{7,}$/.test(values.phone);
    if (!isPhoneValid) return "Enter a valid phone number.";
  }

  return "";
}

function validate(values: FormValues): FormErrors {
  const nextErrors: FormErrors = {};
  (
    [
      "firstname",
      "lastname",
      "workEmail",
      "company",
      "jobTitle",
      "country",
      "phone",
      "helpTopic",
      "message",
    ] as Array<keyof FormValues>
  ).forEach((field) => {
    const error = validateField(field, values);
    if (error) nextErrors[field] = error;
  });
  return nextErrors;
}

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    console.log("Form submitted", values);
  };

  return (
    <div className="col-span-2 w-full rounded-2xl border border-border bg-card p-4 shadow-sm md:p-4">
      <form className="my-0 w-full" onSubmit={handleSubmit} noValidate>
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
              onChange={(e) => handleChange("firstname", e.target.value)}
              onBlur={() => handleBlur("firstname")}
              aria-invalid={!!errors.firstname}
              aria-describedby={
                errors.firstname ? "firstname-error" : undefined
              }
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
              onChange={(e) => handleChange("lastname", e.target.value)}
              onBlur={() => handleBlur("lastname")}
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

        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="workEmail">
              Work email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="workEmail"
              name="workEmail"
              placeholder="you@company.com"
              type="email"
              value={values.workEmail}
              onChange={(e) => handleChange("workEmail", e.target.value)}
              onBlur={() => handleBlur("workEmail")}
              aria-invalid={!!errors.workEmail}
              aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
            />
            {errors.workEmail && (
              <p
                id="workEmail-error"
                className="text-sm text-destructive"
                role="alert"
              >
                {errors.workEmail}
              </p>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="company">
              Company <span className="text-destructive">*</span>
            </Label>
            <Input
              id="company"
              name="company"
              placeholder="Acme Corp"
              type="text"
              value={values.company}
              onChange={(e) => handleChange("company", e.target.value)}
              onBlur={() => handleBlur("company")}
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "company-error" : undefined}
            />
            {errors.company && (
              <p
                id="company-error"
                className="text-sm text-destructive"
                role="alert"
              >
                {errors.company}
              </p>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="jobTitle">
              Job title <span className="text-destructive">*</span>
            </Label>
            <Input
              id="jobTitle"
              name="jobTitle"
              placeholder="Operations Lead"
              type="text"
              value={values.jobTitle}
              onChange={(e) => handleChange("jobTitle", e.target.value)}
              onBlur={() => handleBlur("jobTitle")}
              aria-invalid={!!errors.jobTitle}
              aria-describedby={errors.jobTitle ? "jobTitle-error" : undefined}
            />
            {errors.jobTitle && (
              <p
                id="jobTitle-error"
                className="text-sm text-destructive"
                role="alert"
              >
                {errors.jobTitle}
              </p>
            )}
          </LabelInputContainer>
        </div>

        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="country">
              Country <span className="text-destructive">*</span>
            </Label>
            <SelectField
              id="country"
              name="country"
              value={values.country}
              onChange={(e) => handleChange("country", e.target.value)}
              onBlur={() => handleBlur("country")}
              aria-invalid={!!errors.country}
              aria-describedby={errors.country ? "country-error" : undefined}
            >
              <option value="Luxembourg">Luxembourg</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Belgium">Belgium</option>
              <option value="Netherlands">Netherlands</option>
            </SelectField>
            {errors.country && (
              <p
                id="country-error"
                className="text-sm text-destructive"
                role="alert"
              >
                {errors.country}
              </p>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phone">Mobile number</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+352 6x xx xx xx"
              type="tel"
              value={values.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p
                id="phone-error"
                className="text-sm text-destructive"
                role="alert"
              >
                {errors.phone}
              </p>
            )}
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="helpTopic">
            How can we help? <span className="text-destructive">*</span>
          </Label>
          <SelectField
            id="helpTopic"
            name="helpTopic"
            value={values.helpTopic}
            onChange={(e) => handleChange("helpTopic", e.target.value)}
            onBlur={() => handleBlur("helpTopic")}
            aria-invalid={!!errors.helpTopic}
            aria-describedby={errors.helpTopic ? "helpTopic-error" : undefined}
          >
            <option value="Book a product demo">Book a product demo</option>
            <option value="Technical questions">Technical questions</option>
            <option value="Partnership inquiry">Partnership inquiry</option>
          </SelectField>
          {errors.helpTopic && (
            <p
              id="helpTopic-error"
              className="text-sm text-destructive"
              role="alert"
            >
              {errors.helpTopic}
            </p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your use case..."
            rows={3}
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p
              id="message-error"
              className="text-sm text-destructive"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </LabelInputContainer>

        <CeramicButton
          href="/request-demo"
          color="var(--color-accent)"
          textColor="var(--color-white)"
          borderRadius={6}
          padding="12px"
          centered
          style={{ width: "100%", textAlign: "center" }}
        >
          Book demo
        </CeramicButton>

        <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        <div className="flex flex-row gap-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <span className="text-sm text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              Calendly
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <span className="text-sm text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
              <MailIcon className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              Mail
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
