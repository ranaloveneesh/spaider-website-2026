import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import Reveal from "@/app/components/ui/reveal";

export const metadata: Metadata = {
	title: "Blog",
	description: "News and deep dives from the SPAIDER team on AI, aerospace, and sovereignty.",
	alternates: { canonical: "https://www.spaiderspace.com/blog" },
};

type Post = {
	href: string;
	image: string;
	title: string;
	excerpt: string;
	date: string;
};

const POSTS: Post[] = [
	{
		href: "/blog/innospace",
		image: "/blog/innospace.png",
		title: "We secured 2nd place at INNOspace Masters 2025",
		excerpt: "AI agents in mission-grade environments at Europe's leading space innovation arena, the OHB Challenge in Bonn.",
		date: "September 2025",
	},
];

export default function BlogPage() {
	return (
		<div className="w-full min-w-0 overflow-x-clip" style={{ "--color-accent": "var(--spx-cyan)", "--color-accent-hover": "#3ecfdd" } as CSSProperties}>
			<div className="w-full pb-[calc(var(--spx-section-gap)*0.5)] text-left" style={{ marginLeft: "-1rem", marginRight: "-1rem", width: "calc(100% + 2rem)", paddingLeft: "var(--spx-gutter)", paddingRight: "var(--spx-gutter)" }}>
				{/* ── Hero (source Company "04 - Blog" heading) ── */}
				<Reveal as="header" variant="fade-up" threshold={0.1} className="border-b border-spx-rule pb-12 pt-6 sm:pb-16 sm:pt-10">
					<h1 className="max-w-[15ch] font-outfit text-[clamp(2.5rem,6.8vw,5.6rem)] font-medium leading-[1.05] tracking-tight text-foreground">
						Notes from the
						<br />
						<span className="spx-grad-text">aerospace AI frontier.</span>
					</h1>
					<p className="spx-lede mt-7">News and deep dives from the SPAIDER team on AI, aerospace, and sovereignty.</p>
				</Reveal>

				{/* ── Posts ── */}
				<section className="mt-[calc(var(--spx-section-gap)*0.5)]">
					<Reveal variant="fade-up" threshold={0.1}>
						<span className="spx-label block">Latest</span>
					</Reveal>
					<div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{POSTS.map((post, i) => (
							<Reveal key={post.href} variant="fade-up" threshold={0.1} delayMs={i * 55} className="h-full">
								<Link href={post.href} className="group flex h-full flex-col overflow-hidden rounded-xs border border-spx-rule bg-spx-void transition-colors duration-350 hover:border-spx-rule-2 hover:bg-spx-void-2">
									<div className="relative aspect-video w-full overflow-hidden border-b border-spx-rule">
										<Image src={post.image} alt={post.title} fill className="object-cover object-center transition-transform duration-400 ease-out group-hover:scale-[1.04]" />
									</div>
									<div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
										<span className="spx-label">{post.date}</span>
										<h2 className="text-[1.1rem] font-semibold leading-snug tracking-[-0.01em] text-foreground">{post.title}</h2>
										<p className="spx-body line-clamp-3">{post.excerpt}</p>
										{/* Visually the line Button variant (small nav-cta size) rendered as a span -
										    the whole card is already a Link, and nested anchors are invalid HTML.
										    Card hover drives its states via group-hover. */}
										<span className="mt-auto inline-flex w-fit items-center justify-center self-end whitespace-nowrap rounded-xs bg-transparent px-5 py-3 font-geist-mono text-[0.8125rem] font-normal uppercase tracking-[0.12em] text-spx-ink shadow-[inset_0_0_0_1px_var(--spx-rule-2)] transition-[background-color,color,box-shadow] duration-300 group-hover:bg-spx-cyan/8 group-hover:text-white group-hover:shadow-[inset_0_0_0_1px_var(--spx-cyan)]">
											Read more
										</span>
									</div>
								</Link>
							</Reveal>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
