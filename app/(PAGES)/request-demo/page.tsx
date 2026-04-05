import { RequestDemoFormLazy } from "@/app/components/request-demo/RequestDemoFormLazy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a demo - SPAIDER",
  description:
    "Book a demo of SPAIDER - sovereign AI agents for your aerospace team.",
};

export default function RequestDemoPage() {
  return (
    <div className="grid w-full min-w-0 grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:items-start md:gap-8 lg:grid-cols-3 lg:gap-10">
      <div className="min-w-0 space-y-4 sm:space-y-5 md:pt-0 lg:pr-8">
        <h2 className="font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
          Request a demo
        </h2>

        <p className="text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
          See how SPAIDER can enhance your way of working and connect to your
          data. In a short live session, we&apos;ll show what&apos;s possible,
          listen to your goals, and outline the simplest path forward.
        </p>
        <ul className="space-y-2.5 font-inter sm:space-y-3">
          <li className="flex items-start gap-2 text-xs leading-6 font-medium text-foreground sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
            <span className="shrink-0 leading-6 sm:leading-7" aria-hidden>
              ✓
            </span>
            <span>Walk through your specific use case</span>
          </li>
          <li className="flex items-start gap-2 text-xs leading-6 font-medium text-foreground sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
            <span className="shrink-0 leading-6 sm:leading-7" aria-hidden>
              ✓
            </span>
            <span>Discuss security, deployment, and integrations</span>
          </li>
          <li className="flex items-start gap-2 text-xs leading-6 font-medium text-foreground sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
            <span className="shrink-0 leading-6 sm:leading-7" aria-hidden>
              ✓
            </span>
            <span>Get pricing and next steps</span>
          </li>
        </ul>
      </div>

      <RequestDemoFormLazy />
    </div>
  );
}
