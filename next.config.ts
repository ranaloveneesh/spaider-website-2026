import type { NextConfig } from "next";

/**
 * Shared caches (CDN / reverse proxy) honor `s-maxage` and often
 * `stale-while-revalidate`. Browsers use `max-age`.
 * Tune durations per deploy strategy (immutable asset filenames -> longer TTLs).
 */
const PUBLIC_ASSET_CACHE = "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400";

const nextConfig: NextConfig = {
	poweredByHeader: false,
	devIndicators: false,

	experimental: {
		optimizePackageImports: ["lucide-react", "motion"],
	},

	images: {
		qualities: [75, 95],
		remotePatterns: [
			{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
			{ protocol: "https", hostname: "i.pravatar.cc", pathname: "/**" },
		],
	},

	async redirects() {
		return [{ source: "/request-demo", destination: "/request-trial", permanent: true }];
	},

	async headers() {
		const assetHeader = {
			key: "Cache-Control",
			value: PUBLIC_ASSET_CACHE,
		} as const;

		return [
			{ source: "/trusted/:path*", headers: [assetHeader] },
			{ source: "/integrations/:path*", headers: [assetHeader] },
			{ source: "/ai-foundations/:path*", headers: [assetHeader] },
			{ source: "/logo/:path*", headers: [assetHeader] },
			{ source: "/blog/:path*", headers: [assetHeader] },
			{ source: "/team/:path*", headers: [assetHeader] },
			{
				source: "/favicon.ico",
				headers: [assetHeader],
			},
			{
				source: "/logo..svg",
				headers: [assetHeader],
			},
			{
				source: "/logo.png",
				headers: [assetHeader],
			},
			{
				source: "/logo.png",
				headers: [assetHeader],
			},
		];
	},
};

export default nextConfig;
