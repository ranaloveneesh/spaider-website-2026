import Footer from "../components/home/Footer";
import Navbar from "../components/Navbar";

export default function MarketingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<a
				href="#main-content"
				className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:rounded-md focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
			>
				Skip to main content
			</a>
			<Navbar />
			<main id="main-content" className="mx-auto w-full max-w-7xl flex-1 px-4 py-6">
				<div className="mt-4 w-full min-w-0 overflow-x-hidden">{children}</div>
			</main>
			<Footer />
		</>
	);
}
