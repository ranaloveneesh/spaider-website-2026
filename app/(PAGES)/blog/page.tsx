import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
	title: "Blog",
	description: "News and deep dives from the SPAIDER team - AI, aerospace, and sovereignty.",
	alternates: { canonical: "https://www.spaiderspace.com/blog" },
};

export default function BlogPage() {
	return <BlogClient />;
}
