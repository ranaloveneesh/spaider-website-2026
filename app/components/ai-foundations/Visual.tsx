"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

type Px = number | undefined;

export default function Visual({
	title,
	src,
	alt = "",
	hMobile = 160, // <768px
	hMd = 200, // ≥768px
	hLg = 420, // ≥1024px
	bgSizeClass,
	zoomPct,
}: {
	title?: string;
	src: string;
	alt?: string;
	hMobile?: Px;
	hMd?: Px;
	hLg?: Px;
	bgSizeClass?: string;
	zoomPct?: number;
}) {
	const isSvg = src.toLowerCase().endsWith(".svg");
	const defaultBgSize = "bg-[length:98%_auto] md:bg-[length:104%_auto] lg:bg-[length:112%_auto]";

	const varStyle: CSSProperties & Record<string, string> = {
		"--v-h-mobile": `${hMobile ?? 160}px`,
		"--v-h-md": `${hMd ?? 200}px`,
		"--v-h-lg": `${hLg ?? 420}px`,
	};

	return (
		<section className="mx-auto mt-12 w-full min-w-0 sm:mt-16 md:mt-20 lg:mt-24">
			{title && <h2 className="font-manrope text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl lg:text-3xl">{title}</h2>}

			<div className="relative mt-6 overflow-hidden rounded-xl border border-border bg-panel shadow-md visual-wrap sm:mt-8 sm:rounded-2xl md:mt-10 lg:mt-12" style={varStyle}>
				<div
					aria-hidden
					className="absolute inset-0 z-0"
					style={{
						background: `
              radial-gradient(900px 450px at 10% 5%, rgba(78,167,252,0.14), transparent 60%),
              radial-gradient(700px 400px at 90% 15%, rgba(0,112,192,0.12), transparent 60%),
              linear-gradient(180deg, rgba(15,16,17,0.75), rgba(8,9,10,0.9))
            `,
					}}
				/>

				{isSvg ? (
					<div
						className={`relative z-10 visual-box bg-center bg-no-repeat ${bgSizeClass || defaultBgSize}`}
						style={{
							backgroundImage: `url(${src})`,
							...(bgSizeClass || zoomPct ? { backgroundSize: zoomPct ? `${zoomPct}% auto` : undefined } : undefined),
						}}
						role="img"
						aria-label={alt || title || ""}
					/>
				) : (
					<div className="relative z-10 visual-box">
						<Image src={src} alt={alt || title || ""} fill className="object-contain" sizes="(max-width: 767px) 100vw, (max-width: 1279px) 90vw, 1000px" quality={82} priority={false} />
					</div>
				)}

				<style jsx>{`
          .visual-wrap :global(.visual-box) {
            height: var(--v-h-mobile);
            min-height: 0;
          }
          @media (min-width: 768px) {
            .visual-wrap :global(.visual-box) {
              height: var(--v-h-md);
            }
          }
          @media (min-width: 1024px) {
            .visual-wrap :global(.visual-box) {
              height: var(--v-h-lg);
            }
          }
        `}</style>
			</div>
		</section>
	);
}
