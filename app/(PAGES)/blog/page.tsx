import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Blog - SPAIDER",
	description: "News and deep dives from the SPAIDER team - AI, aerospace, and sovereignty.",
};

const blogs = [
	{
		href: "/blog/innospace",
		title: "We Secured 2nd Place at INNOspace Masters 2025",
		excerpt: "AI agents in mission-grade environments at Europe’s leading space innovation arena — OHB Challenge, Bonn.",
		date: "September 2025",
	},
];

export default function BlogPage() {
	return (
		<section className="w-full min-w-0 space-y-6 sm:space-y-8">
			<Reveal as="h1" variant="fade-up" threshold={0.35} className="font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
				Blogs
			</Reveal>

			<div className="grid gap-4 sm:gap-5">
				{blogs.map((blog, index) => (
					<Reveal key={blog.href} as="div" variant={index % 2 === 0 ? "fade-right" : "fade-left"} threshold={0.2} delayMs={index * 90}>
						<Link href={blog.href} className="block min-w-0 rounded-xl border-2 border-border bg-card p-4 transition hover:border-primary/40 hover:bg-muted/40 sm:p-5">
							<p className="text-xs text-muted-foreground">{blog.date}</p>
							<h2 className="mt-1 text-base font-semibold leading-snug text-foreground sm:text-lg lg:text-xl">{blog.title}</h2>
							<p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm lg:text-base">{blog.excerpt}</p>
						</Link>
					</Reveal>
				))}
			</div>
		</section>
	);
}
