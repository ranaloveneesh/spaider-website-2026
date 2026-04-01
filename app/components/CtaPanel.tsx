"use client";
import Link from "next/link";
import CeramicButton from "./ui/button";

type Props = {
  title?: string;
  copy?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function CtaPanel({
  title = "Got a use case in mind? Let’s make it real.",
  copy = "Our team of AI experts is just a call away. Whether you're exploring ideas or ready to build, we’ll help you bring your AI agent to life — faster.",
  ctaHref = "/book-demo",
  ctaLabel = "Talk to us",
}: Props) {
  return (
    <div className="mx-auto w-full max-w-420 mt-12">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-panel px-6 py-8 text-center shadow-md md:px-10 md:py-12">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `
                radial-gradient(900px 450px at 10% 5%, rgba(78,167,252,0.14), transparent 60%),
                radial-gradient(700px 400px at 90% 15%, rgba(0,112,192,0.12), transparent 60%),
                linear-gradient(180deg, rgba(15,16,17,0.75), rgba(8,9,10,0.9))
              `,
          }}
        />
        <div className="relative">
          <h2 className="text-3xl font-medium leading-tight text-foreground font-manrope">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg text-foreground">
            {copy}
          </p>

          <div className="flex items-center justify-center mt-10">
            <CeramicButton
              href="/request-demo"
              color="rgba(255, 255, 255, 0.06)"
              ringColor="rgba(255, 255, 255, 0.22)"
              textColor="var(--color-white)"
              borderRadius={9999}
              padding="8px 16px"
            >
              REQUEST DEMO
            </CeramicButton>
          </div>
        </div>
      </div>
    </div>
  );
}
