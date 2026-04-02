import Hero from "../components/home/hero";
import Customers from "../components/home/customers";
import Agents from "../components/home/agents";
import GetStarted from "../components/home/get-started";
import CtaPanel from "../components/CtaPanel";

export default function Home() {
  return (
    <section className="w-full">
      <Hero />
      <Customers />
      <Agents />
      <GetStarted />
      <CtaPanel
        title="Got a use case in mind? Let's make it real."
        copy="Our team of AI experts is just a call away. Whether you're exploring ideas or ready to build, we'll help you bring your AI agent to life — faster."
        ctaHref="/book-demo"
        ctaLabel="Talk to us"
      />
    </section>
  );
}
