import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
  scale?: number; // visual scale only
};

const LOGOS: Logo[] = [
  { src: "/powered/nvidia.png", alt: "NVIDIA Inception", scale: 1.2 },
  { src: "/powered/googlecloud.svg", alt: "GCP", scale: 2.5 },
  { src: "/powered/aws.png", alt: "AWS", scale: 0.7 },
  { src: "/powered/luxprovide.png", alt: "LuxProvide", scale: 0.9 },
];

export default function PoweredBy() {
  return (
    <section className="mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
      <h2 className="mb-6 font-manrope text-xl font-semibold tracking-tight text-foreground sm:mb-8 sm:text-2xl md:mb-10 lg:mb-12 lg:text-3xl">
        Powered by
      </h2>

      <div
        className="mx-auto grid w-full grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4"
        aria-label="Powered by logos"
        role="region"
      >
        {LOGOS.map(({ src, alt, scale }, i) => (
          <div
            key={`${src}-${alt}-${i}`}
            className="flex items-center justify-center"
            style={{
              transform: `scale(${scale ?? 1})`,
              transformOrigin: "center",
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={360}
              height={120}
              sizes="(max-width: 640px) 160px, (max-width: 1280px) 200px, 220px"
              className="h-9 w-auto object-contain filter brightness-0 invert sm:h-10 md:h-12 lg:h-14 xl:h-16"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
