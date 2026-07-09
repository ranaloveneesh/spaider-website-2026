"use client";

import { Eye, EyeOff, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { type FocusEvent, type FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { ApiError } from "@/app/lib/admin/api";
import { useAuth } from "@/app/lib/admin/auth-context";
import { cn } from "@/app/lib/utils";

// Strong ease-out - starts fast, feels immediately responsive
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

interface FormValues {
	identifier: string;
	password: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

function validateField(name: keyof FormValues, values: FormValues): string | undefined {
	if (name === "identifier" && !values.identifier.trim()) return "Email or username is required";
	if (name === "password" && !values.password.trim()) return "Password is required";
	return undefined;
}

function describeLoginError(error: unknown): string {
	if (error instanceof ApiError) {
		if (error.status === 401) return "Invalid username or password.";
		if (error.status === 403) {
			if (error.message === "EMAIL_NOT_VERIFIED") return "Please verify your email address before logging in.";
			if (error.message.includes("pending approval")) return "Your account is pending admin approval.";
			return error.message;
		}
		return error.message;
	}
	return "Login failed. Please try again.";
}

function FieldError({ id, message }: { id: string; message?: string }) {
	return (
		<AnimatePresence>
			{message && (
				<motion.p key={id} id={id} className="text-sm text-destructive" role="alert" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15, ease: "easeOut" }}>
					{message}
				</motion.p>
			)}
		</AnimatePresence>
	);
}

export default function AdminLoginPage() {
	const router = useRouter();
	const { status, user, login } = useAuth();
	const [values, setValues] = useState<FormValues>({ identifier: "", password: "" });
	const [errors, setErrors] = useState<FormErrors>({});
	const [showPassword, setShowPassword] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (status === "authenticated" && user?.role === "admin" && user?.status === "approved") {
			router.replace("/admin/submissions");
		}
	}, [status, user, router]);

	const handleChange = (name: keyof FormValues, value: string) => {
		setValues((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
		const name = e.target.name as keyof FormValues;
		setErrors((prev) => ({ ...prev, [name]: validateField(name, values) }));
	};

	const validate = (): boolean => {
		const nextErrors: FormErrors = {
			identifier: validateField("identifier", values),
			password: validateField("password", values),
		};
		setErrors(nextErrors);
		return !nextErrors.identifier && !nextErrors.password;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validate()) return;

		setIsSubmitting(true);
		try {
			const response = await login(values.identifier.trim(), values.password);
			if (response.role !== "admin") {
				toast.error("This account does not have admin access.");
				return;
			}
			toast.success("Logged in.");
			router.replace("/admin/submissions");
		} catch (err) {
			toast.error(describeLoginError(err));
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900 px-4">
			<motion.div className="relative w-full max-w-md" initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, ease: EASE_OUT }}>
				<motion.div className="mb-6 flex flex-col items-center gap-2" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.1 }}>
					<Image src="/logo.png" alt="" width={28} height={56} />
					<span className="font-outfit text-sm font-semibold tracking-wide text-white/80">SPAIDER Space</span>
				</motion.div>

				<div className="w-full space-y-7 rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl sm:p-9" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.35)" }}>
					<motion.div className="space-y-1.5 text-center" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.16 }}>
						<h1 className="font-outfit text-2xl font-medium text-foreground">Admin login</h1>
						<p className="text-sm text-muted">Enter your credentials to access the admin dashboard.</p>
					</motion.div>

					<form onSubmit={handleSubmit} className="space-y-5" noValidate>
						<motion.div className="space-y-2" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.22 }}>
							<Label htmlFor="identifier">Email or username</Label>
							<Input
								id="identifier"
								name="identifier"
								type="text"
								autoComplete="username"
								placeholder="Enter your email or username"
								value={values.identifier}
								onChange={(e) => handleChange("identifier", e.target.value)}
								onBlur={handleBlur}
								className={cn(errors.identifier && "border-destructive focus-visible:ring-destructive")}
								aria-invalid={!!errors.identifier}
								aria-describedby={errors.identifier ? "identifier-error" : undefined}
							/>
							<FieldError id="identifier-error" message={errors.identifier} />
						</motion.div>

						<motion.div className="space-y-2" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.28 }}>
							<Label htmlFor="password">Password</Label>
							<div className="relative">
								<Input
									id="password"
									name="password"
									type={showPassword ? "text" : "password"}
									autoComplete="current-password"
									placeholder="Enter your password"
									value={values.password}
									onChange={(e) => handleChange("password", e.target.value)}
									onBlur={handleBlur}
									className={cn("pr-10", errors.password && "border-destructive focus-visible:ring-destructive")}
									aria-invalid={!!errors.password}
									aria-describedby={errors.password ? "password-error" : undefined}
								/>
								<button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-[color,transform] duration-150 ease-out hover:text-foreground active:scale-90" onClick={() => setShowPassword((prev) => !prev)} aria-label={showPassword ? "Hide password" : "Show password"}>
									{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
								</button>
							</div>
							<FieldError id="password-error" message={errors.password} />
						</motion.div>

						<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.34 }}>
							<Button type="submit" size="lg" className="w-full gap-2 transition-transform duration-150 ease-out active:scale-[0.97]" disabled={isSubmitting}>
								{isSubmitting && <Loader2 size={16} className="animate-spin" />}
								{isSubmitting ? "Logging in..." : "Login"}
							</Button>
						</motion.div>
					</form>
				</div>
			</motion.div>
		</div>
	);
}
