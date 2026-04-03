type PillProps = {
  children: React.ReactNode;
  variant?: "default" | "outline" | "success" | "danger";
};

export default function Pill({ children, variant = "default" }: PillProps) {
  const base =
    "inline-flex items-center px-4 py-1.5 text-xs font-medium rounded-full";

  const variants = {
    default: "bg-white/10 text-white border border-white/20",
    outline: "bg-transparent text-white border border-white/30",
    success: "bg-green-500/10 text-green-400 border border-green-500/20",
    danger: "bg-red-500/10 text-red-400 border border-red-500/20",
  };

  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
}
