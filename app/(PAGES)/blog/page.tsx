import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
	title: "Blog - SPAIDER",
	description: "News and deep dives from the SPAIDER team - AI, aerospace, and sovereignty.",
};


export default function BlogPage() {
	return <BlogClient />;
}
