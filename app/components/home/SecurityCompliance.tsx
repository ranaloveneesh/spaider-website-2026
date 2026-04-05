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
    <section className="relative mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
      <div className="relative overflow-hidden rounded-xl border border-border/40 bg-transparent sm:rounded-2xl md:rounded-[24px]">
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
        <div className="relative z-10 grid grid-cols-1 gap-4 p-4 md:grid-cols-12 md:gap-8 md:p-6 lg:gap-10 lg:p-8">
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
            <h3 className="text-left font-manrope text-base font-semibold leading-tight text-white sm:text-lg lg:text-xl">
              Industry-grade security and compliance
            </h3>
            <p className="mt-3 max-w-[60ch] text-left text-xs leading-6 text-muted wrap-break-word sm:mt-4 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
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
