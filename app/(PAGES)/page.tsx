import dynamic from "next/dynamic";
import Hero from "../components/home/hero";

const Customers = dynamic(() => import("../components/home/customers"), {
  loading: () => (
    <section className="mt-24 min-h-[200px]" aria-busy="true">
      <div className="mb-12 h-8 w-48 animate-pulse rounded-md bg-white/10" />
      <div className="h-16 w-full animate-pulse rounded-md bg-white/5" />
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
    <div className="mt-24 min-h-[12rem] animate-pulse rounded-xl bg-white/5" aria-busy="true" />
  ),
});

const CtaPanel = dynamic(() => import("../components/CtaPanel"), {
  loading: () => (
    <div className="mx-auto mt-28 min-h-[14rem] max-w-420 animate-pulse rounded-2xl bg-white/5" aria-busy="true" />
  ),
});

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Customers />
      <SpaiderSection />
      <Agents />
      <GetStarted />
      <CtaPanel
        title="Got a use case in mind? Let's make it real."
        copy="Our team of AI experts is just a call away. Whether you're exploring ideas or ready to build, we'll help you bring your AI agent to life — faster."
        ctaHref="/book-demo"
        ctaLabel="Talk to us"
      />
    </div>
  );
}
