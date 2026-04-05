import CtaPanel from "@/app/components/CtaPanel";
import IntegrationsGallery from "@/app/components/our-tech/IntegrationsGallery";
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
    <div className="w-full min-w-0 space-y-6 pb-10 sm:space-y-8 sm:pb-12 md:space-y-10">
      <header className="space-y-3 sm:space-y-4">
        <h2 className="font-manrope text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
          Our tech
        </h2>
        <p className="max-w-3xl text-xs leading-6 text-muted-foreground font-inter sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
          A sovereign, modular AI stack built for aerospace teams that need
          reliability, security, and full deployment control.
        </p>
      </header>

      <main className="relative min-w-0 text-foreground">
        {/* 4 repeated sections */}
        <section className="mx-auto w-full min-w-0 max-w-5xl space-y-5 sm:space-y-6 md:space-y-8">
          {SECTIONS.map((s, i) => {
            const isSvg = s.img.toLowerCase().endsWith(".svg");
            return (
              <article
                key={s.title}
                className="grid min-w-0 grid-cols-1 items-stretch gap-3 rounded-xl border border-border bg-panel/40 p-3 shadow-sm sm:gap-4 sm:p-4 md:grid-cols-2 md:gap-5"
              >
                {/* Image left */}
                <div className="relative min-w-0 overflow-hidden rounded-lg border border-border/70 bg-background/40 sm:rounded-xl">
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
                      className="relative z-10 aspect-4/3 bg-center bg-no-repeat md:aspect-3/2"
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
                    <div className="relative z-10 aspect-4/3 md:aspect-3/2">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 512px"
                        priority={i === 0}
                        quality={80}
                      />
                    </div>
                  )}
                </div>

                {/* Text right panel */}
                <div className="relative min-w-0 overflow-hidden rounded-lg border border-border/70 bg-panel sm:rounded-xl">
                  <div className="absolute inset-0 bg-linear-to-br from-background/55 via-panel to-background/70" />
                  <div className="relative p-3 sm:p-4 md:p-5">
                    <h3 className="font-manrope text-base font-semibold tracking-tight text-foreground sm:text-lg lg:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-xs tracking-[0.12em] text-muted-foreground font-inter">
                      {s.subtitle.toUpperCase()}
                    </p>
                    <div className="mt-2.5 h-px w-28 bg-border sm:mt-3 sm:w-32 md:w-48" />
                    <p className="mt-2.5 text-xs leading-6 text-muted-foreground font-inter sm:mt-3 sm:text-sm sm:leading-7 lg:text-base lg:leading-7">
                      {s.body}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <IntegrationsGallery />

        {/* CTA PANEL (BEFORE FOOTER) */}
        <CtaPanel
          title="Got a use case in mind? Let's make it real."
          copy="Our team of AI experts is just a call away. Whether you're exploring ideas or ready to build, we'll help you bring your AI agent to life — faster."
          ctaHref="/book-demo"
          ctaLabel="Talk to us"
        />
      </main>
    </div>
  );
}
