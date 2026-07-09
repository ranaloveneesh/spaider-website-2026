import type { Metadata } from "next";
import { AuthProvider } from "@/app/lib/admin/auth-context";

export const metadata: Metadata = {
	title: {
		default: "Admin",
		template: "%s | Admin",
	},
	robots: {
		index: false,
		follow: false,
	},
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen w-full bg-background text-foreground">
			<AuthProvider>{children}</AuthProvider>
		</div>
	);
}
