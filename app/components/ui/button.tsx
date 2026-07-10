"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";
import { type CSSProperties, type ReactNode, useState } from "react";
import { cn } from "@/app/lib/utils";

// ─────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────
interface CeramicButtonProps {
	/** Button label or any ReactNode */
	children: ReactNode;

	/** Main background color of the button - hex, rgb, hsl, etc.
	 *  @example "#6c47ff" | "rgb(99,102,241)" | "hsl(250,80%,55%)"
	 */
	color: string;

	/** Text color. Defaults to "#ffffff" */
	textColor?: string;

	/** Border/ring color. Defaults to same as `color` */
	ringColor?: string;

	/** Font size in px. Defaults to 13 */
	fontSize?: number;

	/** Border radius in px. Defaults to 6 (0.375rem) */
	borderRadius?: number;

	/** Padding as CSS shorthand string. Defaults to "6px 14px" */
	padding?: string;

	/** Whether the button is disabled */
	disabled?: boolean;

	/** Click handler */
	onClick?: () => void;

	/** When set, renders as a Next.js link (same visuals as the button). */
	href?: string;

	/** Extra inline styles */
	style?: CSSProperties;

	/** HTML button type */
	type?: "button" | "submit" | "reset";

	/** Center label content */
	centered?: boolean;
}

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
export default function CeramicButton({ children, color, textColor = "#ffffff", ringColor, fontSize = 13, borderRadius = 6, padding = "6px 14px", disabled = false, onClick, href, style, type = "button", centered = false }: CeramicButtonProps) {
	const [hovered, setHovered] = useState(false);
	const [pressed, setPressed] = useState(false);

	const ring = ringColor ?? color;

	const baseStyle: CSSProperties = {
		display: "inline-flex",
		minWidth: "fit-content",
		flexShrink: 0,
		userSelect: "none",
		position: "relative",
		overflow: "hidden",
		borderRadius: `${borderRadius}px`,
		border: "none",
		cursor: disabled ? "not-allowed" : "pointer",
		textAlign: "start",
		justifyContent: "flex-start",
		backgroundColor: color,
		color: textColor,
		opacity: disabled ? 0.4 : 1,
		pointerEvents: disabled ? "none" : "auto",
		transform: pressed ? "scale(0.98)" : "scale(1)",
		filter: pressed ? "brightness(0.97)" : hovered ? "brightness(1.1)" : "brightness(1)",
		boxShadow: hovered
			? `inset 0 1px 1px 0 rgba(255,255,255,0.12),
         0 2px 2px -1px rgba(0,0,0,0.2),
         0 4px 8px -2px rgba(0,0,0,0.3),
         0 0 0 1px ${ring},
         0 0 16px ${ring}66`
			: `inset 0 1px 1px 0 rgba(255,255,255,0.12),
         0 2px 2px -1px rgba(0,0,0,0.16),
         0 4px 4px -2px rgba(0,0,0,0.24),
         0 0 0 1px ${ring}`,
		transition: "filter 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease",
		textDecoration: "none",
		...style,
	};

	const sheenStyle: CSSProperties = {
		content: '""',
		position: "absolute",
		inset: 0,
		width: "100%",
		height: "100%",
		background: "linear-gradient(to bottom, rgba(255,255,255,0.20), transparent)",
		opacity: pressed ? 0 : 1,
		transition: "opacity 0.15s ease",
		pointerEvents: "none",
	};

	const innerStyle: CSSProperties = {
		display: "flex",
		width: "100%",
		alignItems: "center",
		alignSelf: "stretch",
		justifyContent: centered ? "center" : "flex-start",
		whiteSpace: "nowrap",
		padding,
		filter: hovered ? "none" : "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
		transition: "filter 0.15s ease",
		fontFamily: "var(--font-montserrat), system-ui, sans-serif",
		fontSize: `${fontSize}px`,
		fontWeight: 600,
		letterSpacing: "-0.01em",
		color: textColor,
		gap: "6px",
		position: "relative",
		zIndex: 1,
	};

	const sheen = <span style={sheenStyle} aria-hidden="true" />;
	const label = <span style={innerStyle}>{children}</span>;

	if (href) {
		return (
			<Link
				href={href}
				style={baseStyle}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => {
					setHovered(false);
					setPressed(false);
				}}
				onMouseDown={() => setPressed(true)}
				onMouseUp={() => setPressed(false)}
			>
				{sheen}
				{label}
			</Link>
		);
	}

	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => {
				setHovered(false);
				setPressed(false);
			}}
			onMouseDown={() => setPressed(true)}
			onMouseUp={() => setPressed(false)}
			style={baseStyle}
		>
			{sheen}
			{label}
		</button>
	);
}

// ─────────────────────────────────────────────
// shadcn-compatible Button (named export)
// ─────────────────────────────────────────────
const buttonVariants = cva(
	"group inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90",
				destructive: "bg-destructive text-destructive-foreground shadow-sm shadow-black/5 hover:bg-destructive/90",
				outline: "border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground",
				secondary: "bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				solid: "gap-3 rounded-xs bg-spx-ink font-geist-mono text-[0.8125rem] font-normal uppercase tracking-[0.12em] text-spx-void hover:bg-spx-cyan",
				line: "gap-3 rounded-xs bg-transparent font-geist-mono text-[0.8125rem] font-normal uppercase tracking-[0.12em] text-spx-ink shadow-[inset_0_0_0_1px_var(--spx-rule-2)] hover:bg-spx-cyan/8 hover:text-white hover:shadow-[inset_0_0_0_1px_var(--spx-cyan)]",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 rounded-lg px-3 text-xs",
				lg: "h-10 rounded-lg px-8",
				icon: "h-9 w-9",
			},
		},
		compoundVariants: [
			// solid/line have their own fixed padding (source's .btn), independent of `size`
			{ variant: ["solid", "line"], className: "h-auto px-[1.625rem] py-4" },
		],
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	/** Append a trailing arrow that nudges right on hover (solid/line variants) */
	arrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, arrow = false, children, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
			{arrow && !asChild ? (
				<>
					{children}
					<span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
						→
					</span>
				</>
			) : (
				children
			)}
		</Comp>
	);
});
Button.displayName = "Button";

export { Button, buttonVariants };
