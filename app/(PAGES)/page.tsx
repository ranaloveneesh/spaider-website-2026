import dynamic from "next/dynamic";
import Hero from "../components/home/hero";
import SecurityCompliance from "../components/home/SecurityCompliance";

const Customers = dynamic(() => import("../components/home/customers"), {
  loading: () => (
    <section className="mt-24 min-h-[200px]" aria-busy="true">
      <div className="mb-12 h-8 w-48 animate-pulse rounded-md bg-white/10" />
      <div className="h-16 w-full animate-pulse rounded-md bg-white/5" />
    </section>
  ),
});

const PoweredBy = dynamic(() => import("../components/home/powered-by"), {
  loading: () => (
    <section className="mt-24 min-h-[200px]" aria-busy="true">
      <div className="mb-12 h-8 w-56 animate-pulse rounded-md bg-white/10" />
      <div className="h-16 w-full animate-pulse rounded-md bg-white/5" />
    </section>
  ),
});

const FAQ = dynamic(() => import("../components/home/faq"), {
  loading: () => (
    <section className="mt-24 min-h-[28rem]" aria-busy="true">
      <div className="mb-10 h-10 w-40 animate-pulse rounded-md bg-white/10" />
      <div className="h-80 w-full animate-pulse rounded-3xl bg-white/5" />
    </section>
  ),
});

const SpaiderSection = dynamic(
  () => import("../components/home/SpaiderSection"),
  {
    loading: () => (
      <div
        className="mt-24 min-h-[24rem] w-full animate-pulse rounded-[22px] bg-white/5"
        aria-busy="true"
      />
    ),
  },
);

const Agents = dynamic(() => import("../components/home/agents"), {
  loading: () => (
    <section className="mt-24 min-h-[20rem]" aria-busy="true">
      <div className="mb-8 h-8 w-64 animate-pulse rounded-md bg-white/10" />
      <div className="h-72 w-full animate-pulse rounded-md bg-white/5" />
    </section>
  ),
});

const GetStarted = dynamic(() => import("../components/home/get-started"), {
  loading: () => (
    <div
      className="mt-24 min-h-[12rem] animate-pulse rounded-xl bg-white/5"
      aria-busy="true"
    />
  ),
});

const CtaPanel = dynamic(() => import("../components/CtaPanel"), {
  loading: () => (
    <div
      className="mx-auto min-h-[14rem] max-w-420 animate-pulse rounded-2xl bg-white/5"
      aria-busy="true"
    />
  ),
});

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Customers />
      <Agents />
      <SpaiderSection />
      <SecurityCompliance />
      <GetStarted />
      <PoweredBy />
      <FAQ />
      <CtaPanel
        title="Got a use case in mind? Let's make it real."
        copy="Our team of AI experts is just a call away. Whether you're exploring ideas or ready to build, we'll help you bring your AI agent to life — faster."
        ctaHref="/book-demo"
        ctaLabel="Talk to us"
      />
    </div>
  );
}
