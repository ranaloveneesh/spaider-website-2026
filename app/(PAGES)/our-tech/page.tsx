import CtaPanel from "@/app/components/CtaPanel";
import IntegrationsGallery from "@/app/components/IntegrationsGallery";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Tech - SPAIDER",
  description:
    "European-sovereign AI infrastructure for aerospace - platform architecture, security, and deployment.",
};

type Sec = {
  title: string;
  subtitle: string;
  body: string;
  img: string;
};

const SECTIONS: Sec[] = [
  {
    title: "AI that knows aerospace",
    subtitle: "Understands physics, standards, and mission workflows",
    body: "Built with aerospace knowledge from day one. SPAIDER keeps your terminology, constraints, and context so answers are accurate, cited, and useful across design, test, and operations. Teams get reliable support without changing how they work.",
    img: "/tech/infotech1.svg?v=2",
  },
  {
    title: "Adopt AI step by step",
    subtitle: "Start with your data. Add agents when ready",
    body: "First we set up a secure retrieval layer (RAG) over your documents and tools. Then we plug in ready-made agents for high-value tasks (like RFP analysis). When you need more, you customise and orchestrate on the same base—no rework, no new pipelines.",
    img: "/tech/infotech2.svg",
  },
  {
    title: "You choose where it runs",
    subtitle: "EU cloud or on-prem. Full audit and access control",
    body: "The stack is modular and containerised. Run in your VPC or inside your network, even in isolated environments. You keep control of data, identities, permissions, and logs—with clean integration into your existing systems and no vendor lock-in.",
    img: "/tech/infotech3.svg",
  },
  {
    title: "Decide faster, with less risk",
    subtitle: "Clean inputs. Clear answers. With sources",
    body: "Agents handle ingestion and retrieval, then return answers with sources and history. Less time searching and formatting; more time on design, safety, and delivery. Consistent, repeatable outputs your teams can stand behind.",
    img: "/tech/infotech4.svg",
  },
];

export default function OurTechPage() {
  return (
    <div className="space-y-8 md:space-y-10 pb-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-manrope">
          Our tech
        </h1>
        <p className="text-foreground leading-7">
          A sovereign, modular AI stack built for aerospace teams that need
          reliability, security, and full deployment control.
        </p>
      </header>

      <main className="relative text-foreground">
        {/* 4 repeated sections */}
        <section className="mx-auto w-full max-w-420 space-y-10 md:space-y-12">
          {SECTIONS.map((s, i) => {
            const isSvg = s.img.toLowerCase().endsWith(".svg");
            return (
              <article
                key={s.title}
                className="grid items-stretch gap-6 rounded-2xl border border-border bg-panel/40 p-4 shadow-sm md:grid-cols-2 md:gap-8 md:p-4"
              >
                {/* Image left */}
                <div className="relative overflow-hidden rounded-xl border border-border/70 bg-background/40">
                  <div
                    aria-hidden
                    className="absolute inset-0 z-0"
                    style={{
                      background: `
                        radial-gradient(900px 450px at 15% 10%, rgba(78,167,252,0.14), transparent 60%),
                        radial-gradient(800px 400px at 90% 20%, rgba(0,112,192,0.12), transparent 60%),
                        linear-gradient(180deg, rgba(15,16,17,0.55), rgba(8,9,10,0.45))
                      `,
                    }}
                  />

                  {/* Image layer */}
                  {isSvg ? (
                    <div
                      className="relative z-10 aspect-video bg-center bg-no-repeat md:aspect-5/3"
                      style={{
                        backgroundImage: `url(${s.img})`,
                        backgroundSize: i === 0 ? "110% auto" : "cover",
                        backgroundBlendMode: "normal",
                        filter: "none",
                      }}
                      aria-label={s.title}
                      role="img"
                    />
                  ) : (
                    <div className="relative z-10 aspect-video md:aspect-5/3">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className="object-cover"
                        sizes="(min-width:1280px) 840px, (min-width:1024px) 48vw, 92vw"
                        priority={i === 0}
                        quality={80}
                      />
                    </div>
                  )}
                </div>

                {/* Text right panel */}
                <div className="relative overflow-hidden rounded-xl border border-border/70 bg-panel">
                  <div className="absolute inset-0 bg-linear-to-br from-background/55 via-panel to-background/70" />
                  <div className="relative p-6 md:p-8 lg:p-6">
                    <h3 className="text-3xl font-medium leading-tight tracking-tight font-manrope">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-muted text-sm md:text-base tracking-[0.12em]">
                      {s.subtitle.toUpperCase()}
                    </p>
                    <div className="mt-5 h-px w-40 md:w-64 bg-border" />
                    <p className="mt-5 text-sm md:text-base leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <IntegrationsGallery />

        <div className="mt-28">
          {/* CTA PANEL (BEFORE FOOTER) */}
          <CtaPanel
            title="Got a use case in mind? Let's make it real."
            copy="Our team of AI experts is just a call away. Whether you're exploring ideas or ready to build, we'll help you bring your AI agent to life — faster."
            ctaHref="/book-demo"
            ctaLabel="Talk to us"
          />
        </div>
      </main>
    </div>
  );
}
