"use client";
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
  ctaHref: _ctaHref = "/book-demo",
  ctaLabel: _ctaLabel = "Talk to us",
}: Props) {
  return (
    <div className="mx-auto mt-12 w-full min-w-0 max-w-420 sm:mt-16 md:mt-20 lg:mt-24">
      <div className="relative overflow-hidden rounded-xl border border-border bg-panel px-4 py-6 text-center shadow-md sm:rounded-2xl sm:px-6 sm:py-8 md:px-10 md:py-12">
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
          <h2 className="font-manrope text-xl font-semibold leading-tight text-foreground sm:text-2xl lg:text-3xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-xs leading-6 text-foreground/90 font-inter sm:mt-5 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
            {copy}
          </p>

          <div className="mt-8 flex justify-center sm:mt-10">
            <div className="w-full sm:w-fit [&_a]:w-full sm:[&_a]:w-auto">
              <CeramicButton
                href="/request-demo"
                color="rgba(255, 255, 255, 0.06)"
                ringColor="rgba(255, 255, 255, 0.22)"
                textColor="var(--color-white)"
                borderRadius={9999}
                padding="8px 16px"
                centered
              >
                REQUEST DEMO
              </CeramicButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
