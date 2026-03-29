"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import CeramicButton, { Button } from "./ui/button";

type NavLink = { label: string; href: string };

const PRIMARY_LINKS: NavLink[] = [
  { label: "OUR TECH", href: "/our-tech" },
  { label: "AI FOUNDATIONS", href: "/ai-foundations" },
  { label: "AGENTS", href: "/agents" },
  { label: "INVEST", href: "/invest" },
  { label: "BLOG", href: "/blog" },
];

const MOBILE_LINKS: NavLink[] = [
  ...PRIMARY_LINKS,
  { label: "REQUEST DEMO", href: "/request-demo" },
];

const NAV_LINK_CLASSNAME =
  "relative inline-flex items-center py-[10px] text-[12px] leading-none font-semibold uppercase tracking-[0.08em] text-white after:absolute after:bottom-[2px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((v) => !v),
    [],
  );

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-md">
        <div className="mx-auto flex h-(--header-height) items-center justify-between px-5 sm:px-6 lg:px-10">
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="Home"
              className="select-none flex flex-row items-center gap-2"
            >
              <Image src="/logo.png" alt="SPAIDER" width={80} height={80} />
              <span className="text-2xl font-semibold text-white">
                Spaider Space
              </span>
            </Link>
          </div>

          <nav
            aria-label="Primary"
            className="hidden flex-1 items-center justify-end gap-5 xl:gap-6 lg:flex"
          >
            {PRIMARY_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={NAV_LINK_CLASSNAME}>
                {l.label}
              </Link>
            ))}

            <CeramicButton color="#0070C0" textColor="#ffffff">
              Request Demo
            </CeramicButton>
          </nav>

          <button
            type="button"
            className="relative inline-flex h-10 w-10 cursor-pointer items-center justify-center bg-transparent p-0 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="spx-mobile-menu"
            onClick={toggleMobileMenu}
          >
            <span
              aria-hidden="true"
              className={`absolute h-[2px] w-5 rounded-full bg-white transition-transform duration-300 ease-out ${
                isMobileMenuOpen
                  ? "translate-y-0 rotate-45"
                  : "-translate-y-[6px] rotate-0"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-[2px] w-5 rounded-full bg-white transition-opacity duration-300 ease-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-[2px] w-5 rounded-full bg-white transition-transform duration-300 ease-out ${
                isMobileMenuOpen
                  ? "translate-y-0 -rotate-45"
                  : "translate-y-[6px] rotate-0"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-60 bg-black/55 transition-opacity duration-300 ease-out lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <aside
        id="spx-mobile-menu"
        aria-label="Menu"
        className={`fixed right-0 top-0 z-70 h-dvh w-[min(420px,86vw)] border-l border-white/10 bg-black transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end px-8 pt-6">
          <button
            type="button"
            className={NAV_LINK_CLASSNAME}
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            CLOSE
          </button>
        </div>
        <nav className="px-8 pb-10 pt-6">
          <ul className="flex flex-col">
            {MOBILE_LINKS.map((l) => (
              <li
                key={`${l.href}-${l.label}`}
                className="border-b border-white/15"
              >
                <Link
                  href={l.href}
                  className="flex items-center justify-end py-4 text-[14px] font-semibold uppercase tracking-[0.08em] text-white"
                  onClick={closeMobileMenu}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
