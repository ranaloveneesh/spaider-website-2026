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
    <section className="mt-24">
      <h2 className="text-2xl font-semibold tracking-tight text-muted sm:text-2xl lg:text-3xl font-manrope mb-12">
        Powered by
      </h2>

      <div
        className="mx-auto w-full grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 items-center justify-items-center"
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
              className="h-12 md:h-14 lg:h-16 w-auto object-contain filter brightness-0 invert"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
