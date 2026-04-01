import CeramicButton from "../ui/button";
import Image from "next/image";

const hero = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:gap-8 lg:justify-between lg:items-center">
      <div className="w-full flex-1 lg:max-w-[560px] ">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold leading-[1.04] tracking-tight text-foreground sm:text-4xl lg:text-5xl font-manrope">
            Your Domain Trained
            <span className="font-playfair-italic block">Co-Pilot</span>
          </h1>

          <p className="max-w-lg text-base leading-normal text-muted-tertiary font-inter">
            Make complex work simple with our Special Purpose AI assistants. Cut
            repetitive work, integrate with your tools, and unlock new levels of
            productivity.
          </p>

          <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
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

      <div className="relative w-full flex-1  lg:ml-auto overflow-visible lg:flex lg:justify-end rounded-3xl">
        <div
          className="relative w-full overflow-visible border border-border rounded-3xl"
          style={{
            height: "600px",
            width: "100%",
          }}
        >
          <Image
            src="/demo.png"
            alt="Dashboard preview"
            fill
            priority
            className="object-cover object-left p-4 rounded-3xl w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default hero;
