import type { MetadataRoute } from "next";
import { SITE_URL } from "./utils/constants";

function u(path: string): string {
	const base = SITE_URL.replace(/\/$/, "");
	return path === "/" ? base : `${base}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	return [
		{ url: u("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
		{
			url: u("/about"),
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: u("/our-tech"),
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: u("/ai-foundations"),
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: u("/agents/sagan"),
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: u("/invest"),
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: u("/blog"),
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.85,
		},
		{
			url: u("/blog/innospace"),
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.75,
		},
		{
			url: u("/request-trial"),
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.85,
		},
		{
			url: u("/pricing"),
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.85,
		},
		{
			url: u("/careers"),
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.75,
		},
		{
			url: u("/privacy-policy"),
			lastModified: now,
			changeFrequency: "yearly",
			priority: 0.4,
		},
	];
}
