import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kepler - SPAIDER",
  description:
    "Kepler is coming soon. A dedicated SPAIDER agent page for upcoming capabilities.",
};

export default function KeplerPage() {
  return (
    <section className="relative overflow-hidden p-6 shadow-sm md:p-10">
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl font-manrope">
          Kepler
        </h2>
        <p className="mt-2 text-base text-muted md:text-lg">Coming soon</p>

        <div className="mx-auto mt-6 h-px w-40 bg-border md:w-64" />

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          We are building Kepler to help teams. This page will be updated soon
          with full details.
        </p>
      </div>
    </section>
  );
}
