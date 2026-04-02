import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - SPAIDER",
  description:
    "News and deep dives from the SPAIDER team - AI, aerospace, and sovereignty.",
};

const blogs = [
  {
    href: "/blog/innospace",
    title: "We Secured 2nd Place at INNOspace Masters 2025",
    excerpt:
      "AI agents in mission-grade environments at Europe’s leading space innovation arena — OHB Challenge, Bonn.",
    date: "September 2025",
  },
];

export default function BlogPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Blogs
      </h1>

      <div className="grid gap-4">
        {blogs.map((blog) => (
          <Link
            key={blog.href}
            href={blog.href}
            className="block rounded-xl border border-border bg-card p-5 transition hover:border-primary/40 hover:bg-muted/40"
          >
            <p className="text-xs text-muted-foreground">{blog.date}</p>
            <h2 className="mt-1 text-xl font-semibold text-foreground">
              {blog.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{blog.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
