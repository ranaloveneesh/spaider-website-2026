import React from "react";
import CeramicButton from "../ui/button";

// Inline Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "secondary" | "ghost" | "gradient";
    size?: "default" | "sm" | "lg";
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = "default", size = "default", className = "", children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            default: "bg-white text-black hover:bg-gray-100",
            secondary: "bg-gray-800 text-white hover:bg-gray-700",
            ghost: "hover:bg-gray-800/50 text-white",
            gradient: "bg-gradient-to-b from-white via-white/95 to-white/60 text-black hover:scale-105 active:scale-95"
        };

        const sizes = {
            default: "h-10 px-4 py-2 text-sm",
            sm: "h-10 px-5 text-sm",
            lg: "h-12 px-8 text-base"
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default function AIFoundationsHero() {
    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-start"
            style={{
                animation: "fadeIn 0.6s ease-out"
            }}
        >
            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

            <span className="glass-btn text-left">Talk to your data</span>

            <h1
                className="text-4xl md:text-5xl lg:text-6xl font-medium text-center max-w-3xl px-6 leading-tight mb-6 mt-2"
                style={{
                    background: "linear-gradient(to bottom, #ffffff, #ffffff, rgba(255, 255, 255, 0.6))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.05em"
                }}
            >
                AI Foundations           </h1>

            <p className="max-w-lg text-center text-xs leading-6 text-muted sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
                Turn your documents, internal , and approved sources into a governed knowledge layer for your team of experts.
                Search, query, and work with your enterprise knowledge through a domain-aware AI workspace.
            </p>

            <div className="flex flex-col items-stretch gap-3 mt-4 sm:flex-row sm:items-center sm:pt-2">
                <div className="w-full sm:w-fit [&_a]:w-full sm:[&_a]:w-auto">
                    <CeramicButton href="/request-demo" color="rgba(255, 255, 255, 0.06)" ringColor="rgba(255, 255, 255, 0.22)" textColor="var(--color-white)" borderRadius={9999} padding="8px 16px" centered>
                        REQUEST A DEMO
                    </CeramicButton>
                </div>
            </div>

            <div className="w-full max-w-5xl relative mt-16">
                <div
                    className="absolute left-1/2 w-[90%] pointer-events-none z-0"
                    style={{
                        top: "-23%",
                        transform: "translateX(-50%)"
                    }}
                    aria-hidden="true"
                >
                    <img
                        src="https://i.postimg.cc/Ss6yShGy/glows.png"
                        alt=""
                        className="w-full h-auto filter-[hue-rotate(205deg)_saturate(220%)]"
                        loading="eager"
                    />
                </div>

                <div className="relative z-10">
                    <img
                        src="https://i.postimg.cc/SKcdVTr1/Dashboard2.png"
                        alt="Dashboard preview showing analytics and metrics interface"
                        className="w-full h-auto rounded-lg shadow-2xl"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
}