import Navbar from "../components/Navbar";
import Footer from "../components/home/footer";

/** Fully static marketing pages: fresh HTML on each Vercel deploy. No ISR (suits ~monthly content changes via git). */

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:rounded-md focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main-content"
        className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
