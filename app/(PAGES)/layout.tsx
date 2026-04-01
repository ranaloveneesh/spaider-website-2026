import Navbar from "../components/Navbar";
import Footer from "../components/home/footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-0 py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
