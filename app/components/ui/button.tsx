"use client";

import Link from "next/link";
import { useState, CSSProperties, ReactNode } from "react";

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
export default function CeramicButton({
  children,
  color,
  textColor = "#ffffff",
  ringColor,
  fontSize = 13,
  borderRadius = 6,
  padding = "6px 14px",
  disabled = false,
  onClick,
  href,
  style,
  type = "button",
  centered = false,
}: CeramicButtonProps) {
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
    filter: pressed
      ? "brightness(0.97)"
      : hovered
        ? "brightness(1.1)"
        : "brightness(1)",
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
    background:
      "linear-gradient(to bottom, rgba(255,255,255,0.20), transparent)",
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
