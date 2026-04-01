import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - SPAIDER",
  description:
    "News and deep dives from the SPAIDER team - AI, aerospace, and sovereignty.",
};

export default function BlogPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Blog
      </h1>
    </div>
  );
}
