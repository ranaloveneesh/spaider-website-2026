import Footer from "../components/home/Footer";
import Navbar from "../components/Navbar";
import SmoothScrollProvider from "../components/SmoothScrollProvider";

export default function MarketingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SmoothScrollProvider lerp={0.1}>
			<a
				href="#main-content"
				className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:rounded-md focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
			>
				Skip to main content
			</a>
			<Navbar />
			<main id="main-content" className="w-full flex-1 px-4 pt-28 pb-16 sm:pb-20">
				<div className="w-full min-w-0">{children}</div>
			</main>
			<Footer />
		</SmoothScrollProvider>
	);
}
