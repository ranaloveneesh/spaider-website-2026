"use client";
import Image from "next/image";

type Badge = { alt: string; src: string };

const BADGES: Badge[] = [
  { alt: "ISO 27001", src: "/compliance-logos/iso27001.svg" },
  { alt: "ISO 27701", src: "/compliance-logos/iso27701.svg" },
  { alt: "SOC 2", src: "/compliance-logos/soc-1.svg" },
];

export default function SecurityCompliance() {
  return (
    <section className="relative mt-24">
      <div className="relative overflow-hidden rounded-[24px] border border-border/40 bg-transparent">
        {/* Gold/Black gradient background */}
        <div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{
            background: `
              /* Top metallic gold glow */
              radial-gradient(900px 280px at 50% -12%, rgba(255, 225, 120, 0.92), rgba(255, 225, 120, 0) 62%),
              /* Gold-to-black base */
              linear-gradient(
                180deg,
                rgba(255, 215, 110, 0.38) 0%,
                rgba(160, 98, 0, 0.42) 45%,
                rgba(64, 36, 5, 0.84) 100%
              ),
              /* Subtle diagonal gold sheen */
              linear-gradient(120deg, rgba(255, 214, 102, 0.22) 0%, rgba(255, 214, 102, 0.00) 45%)
            `,
          }}
        />

        {/* ✅ Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-5 md:p-8">
          {/* Left - Badges */}
          <div className="md:col-span-5">
            <div className="hidden md:flex h-full min-h-[220px] items-center justify-center">
              <div className="flex items-center justify-center gap-8">
                {BADGES.map((b) => (
                  <Image
                    key={b.alt}
                    src={b.src}
                    alt={b.alt}
                    width={200}
                    height={150}
                    className="h-[100px] lg:h-[120px] w-auto object-contain"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 items-center justify-items-center gap-5 md:hidden">
              {BADGES.map((b) => (
                <Image
                  key={b.alt}
                  src={b.src}
                  alt={b.alt}
                  width={128}
                  height={128}
                  className="h-[88px] sm:h-[96px] w-auto object-contain"
                />
              ))}
            </div>
          </div>

          {/* Right - Text */}
          <div className="md:col-span-7 self-center">
            <h3 className="text-white font-manrope text-[clamp(1.6rem,3.4vw,2.6rem)] font-bold leading-tight text-left">
              Industry-grade security and compliance
            </h3>
            <p className="mt-4 text-muted text-[clamp(1rem,1.1vw,1.125rem)] leading-relaxed text-left max-w-[60ch] wrap-break-word">
              Our AI agents meet the highest security standards for space
              missions. We make sure your data is safe and your operations are
              reliable, following all necessary rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
