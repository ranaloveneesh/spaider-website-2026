import Hero from "../components/home/hero";
import Customers from "../components/home/customers";
import Agents from "../components/home/agents";
import GetStarted from "../components/home/get-started";

export default function Home() {
  return (
    <section className="w-full">
      <Hero />
      <Customers />
      <Agents />
      <GetStarted />
    </section>
  );
}
