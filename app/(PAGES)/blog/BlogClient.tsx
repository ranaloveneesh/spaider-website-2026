"use client";

import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// Cinematic expo ease - identical to CareersHero heading
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
// Strong ease-out for cards - starts fast, lands clean
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const gridVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 16, scale: 0.98 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5, ease: EASE_OUT },
	},
};

type Blog = {
	href: string;
	image: string;
	title: string;
	excerpt: string;
	date: string;
};

const blogs: Blog[] = [
	{
		href: "/blog/innospace",
		image: "/blog/innospace.png",
		title: "We Secured 2nd Place at INNOspace Masters 2025",
		excerpt: "AI agents in mission-grade environments at Europe's leading space innovation arena - OHB Challenge, Bonn.",
		date: "September 2025",
	},
];

export default function BlogClient() {
	return (
		<section className="w-full min-w-0 max-w-7xl mx-auto pb-16 sm:pb-20 md:pb-24 space-y-8 sm:space-y-10 md:space-y-12">
			{/* Heading - cinematic blur + rise */}
			<motion.h1 className="font-outfit text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl" initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.85, ease: EASE_EXPO }}>
				Blog
			</motion.h1>

			{/* Card grid - stagger after heading settles. Caps at the post count so a
			    sparse blog does not render empty grid columns. */}
			<motion.div className={blogs.length === 1 ? "grid max-w-md grid-cols-1 gap-4" : blogs.length === 2 ? "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5" : "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"} variants={gridVariants} initial="hidden" animate="show">
				{blogs.map((blog) => (
					<motion.div key={blog.href} variants={cardVariants} className="h-full">
						<Link href={blog.href} className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors duration-200 hover:border-accent/30 sm:rounded-2xl">
							<div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-[at_100%_100%] from-accent/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							{/* Cover image */}
							<div className="relative aspect-video w-full overflow-hidden">
								<Image src={blog.image} alt={blog.title} fill className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
							</div>

							{/* Card body */}
							<div className="flex flex-1 flex-col gap-2 p-4 sm:gap-2.5 sm:p-5 lg:p-6">
								<p className="font-montserrat text-[10px] font-medium uppercase tracking-[0.16em] text-muted-tertiary sm:text-[11px]">{blog.date}</p>
								<h2 className="font-outfit text-sm font-medium leading-snug tracking-tight text-foreground sm:text-base lg:text-lg">{blog.title}</h2>
								<p className="line-clamp-2 text-xs leading-5 text-muted sm:text-sm sm:leading-6 lg:line-clamp-3">{blog.excerpt}</p>
								<div className="mt-auto flex items-center gap-1.5 pt-2 text-xs text-accent sm:text-sm">
									Read more
									<ArrowRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 sm:size-3.5" />
								</div>
							</div>
						</Link>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
