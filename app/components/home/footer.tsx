"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Youtube } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  EMAIL_ADDRESS,
  LINKEDIN_URL,
  YOUTUBE_URL,
} from "@/app/utils/constants";

function Footer() {
  const year = new Date().getFullYear();

  const path = usePathname();

  const isHome = path === "/";

  if (!isHome) {
    return null;
  }

  return (
    <footer className="relative mt-16 w-full overflow-hidden border-t border-white/10 bg-black/20 backdrop-blur-md shadow-[60px_60px_140px_rgba(0,112,192,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,112,192,0.28),transparent_55%),radial-gradient(circle_at_20%_40%,rgba(78,167,252,0.12),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[48px_48px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[rgba(0,112,192,0.22)] to-transparent" />

      <div className="relative mx-auto max-w-7xl py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt=""
                width={80}
                height={100}
                className="h-12 w-auto"
                priority
              />
              <div>
                <p className="font-semibold uppercase text-foreground font-montserrat">
                  Spaider Space
                </p>
                <p className="text-sm leading-relaxed text-muted font-inter">
                  The Sovereign AI Layer for Aerospace.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-tertiary font-inter">
              SPAIDER Space S.à r.l.
              <br />
              9, avenue des Hauts Fourneaux 4362, Esch sur Alzette, Luxembourg
              <br />
              VAT: LU36772970
            </p>
          </div>

          <nav aria-label="Footer — Platform">
            <h2 className="m-0 font-medium uppercase text-foreground font-montserrat">
              Platform
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/our-tech"
                  className="transition-colors text-foreground font-inter"
                >
                  Our Tech
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-foundations"
                  className="transition-colors text-foreground font-inter"
                >
                  AI Foundations
                </Link>
              </li>
              <li>
                <Link
                  href="/agents"
                  className="transition-colors text-foreground font-inter"
                >
                  Agents
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer — Company">
            <h2 className="m-0 font-medium uppercase text-foreground font-montserrat">
              Company
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/invest"
                  className="transition-colors text-foreground font-inter"
                >
                  Invest
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors text-foreground font-inter"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/request-demo"
                  className="transition-colors text-foreground font-inter"
                >
                  Request a demo
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors text-foreground font-inter"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="transition-colors text-foreground font-inter"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <section
            className="md:row-start-2 md:col-start-3 md:col-span-2"
            aria-labelledby="footer-contact-heading"
          >
            <h2
              id="footer-contact-heading"
              className="m-0 font-medium uppercase text-muted font-montserrat"
            >
              CONTACT US
            </h2>
            <ul className="mt-4 flex list-none flex-wrap gap-8 p-0 text-foreground font-inter">
              <li>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-2"
                  aria-label={`Email ${EMAIL_ADDRESS}`}
                >
                  <Mail className="h-6 w-6" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  className="flex items-center gap-2"
                  aria-label="Spaider Space on LinkedIn (opens in a new tab)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href={YOUTUBE_URL}
                  className="flex items-center gap-2"
                  aria-label="Spaider Space on YouTube (opens in a new tab)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-6 w-6" aria-hidden />
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-tertiary font-inter">
            Built for mission-ready, European-sovereign AI.
          </p>
          <p className="text-sm text-muted-tertiary font-inter">
            © {year} Spaider Space. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
