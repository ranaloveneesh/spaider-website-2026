import { RequestDemoForm } from "@/app/components/request-demo-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a demo - SPAIDER",
  description:
    "Book a demo of SPAIDER - sovereign AI agents for your aerospace team.",
};

export default function RequestDemoPage() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start">
      <div className="space-y-6 lg:pr-8">
        <h2 className="text-2xl font-semibold tracking-tight text-muted sm:text-3xl lg:text-4xl font-manrope">
          Request a demo
        </h2>

        <p className="text-base leading-7 text-muted-foreground">
          See how SPAIDER can enhance your way of working and connect to your
          data. In a short live session, we&apos;ll show what&apos;s possible,
          listen to your goals, and outline the simplest path forward.
        </p>
        <ul className="space-y-3 text-sm font-medium text-foreground">
          <li className="flex items-center gap-2">
            <span className=" text-md leading-none">✓</span>
            <span>Walk through your specific use case</span>
          </li>
          <li className="flex items-center gap-2">
            <span className=" text-md leading-none">✓</span>
            <span>Discuss security, deployment, and integrations</span>
          </li>
          <li className="flex items-center gap-2">
            <span className=" text-md leading-none">✓</span>
            <span>Get pricing and next steps</span>
          </li>
        </ul>
      </div>

      <RequestDemoForm />
    </div>
  );
}
