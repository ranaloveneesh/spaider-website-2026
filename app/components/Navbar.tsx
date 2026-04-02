"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import CeramicButton from "./ui/button";
import AnimatedNavLink from "./ui/animated-navlink";

type NavLink = { label: string; href: string };

const PRIMARY_LINKS: NavLink[] = [
  { label: "OUR TECH", href: "/our-tech" },
  { label: "AI FOUNDATIONS", href: "/ai-foundations" },
  { label: "AGENTS", href: "/agents" },
  { label: "INVEST", href: "/invest" },
  { label: "BLOG", href: "/blog" },
];

const AGENTS_DROPDOWN_LINKS: NavLink[] = [
  { label: "SAGAN", href: "/agents/sagan" },
  { label: "KEPLER (Coming Soon)", href: "/agents/kepler" },
];

const MOBILE_LINKS: NavLink[] = [
  ...PRIMARY_LINKS,
  { label: "REQUEST DEMO", href: "/request-demo" },
];

const NAV_LINK_CLASSNAME =
  "relative inline-flex items-center text-xs leading-none font-medium uppercase tracking-[0.08em] text-white";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [agentsMenuOpen, setAgentsMenuOpen] = useState(false);
  const agentsNavRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((v) => !v),
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        setProgress(0);
        return;
      }

      const scrolled = scrollTop / docHeight;
      setProgress(Math.max(0, Math.min(1, scrolled)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  const initialWidth = 0.2;
  const finalScale = initialWidth + (1 - initialWidth) * progress;

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-md">
        <div className="relative">
          <div className="mx-auto flex h-(--header-height) items-center justify-between px-5 sm:px-6 lg:px-10">
            <div className="flex items-center">
              <Link
                href="/"
                aria-label="Home"
                className="select-none flex flex-row items-center gap-2"
              >
                <Image src="/logo.png" alt="" width={40} height={80} />
                <span className="text-2xl font-semibold text-white">
                  SPAIDER Space
                </span>
              </Link>
            </div>
            <nav
              aria-label="Primary"
              className="hidden flex-1 items-center justify-end gap-5 xl:gap-10 lg:flex"
            >
              {PRIMARY_LINKS.map((l) =>
                l.label === "AGENTS" ? (
                  <div
                    key={l.href}
                    ref={agentsNavRef}
                    className="relative"
                    onMouseEnter={() => setAgentsMenuOpen(true)}
                    onMouseLeave={() => setAgentsMenuOpen(false)}
                    onBlur={(e) => {
                      if (
                        !agentsNavRef.current?.contains(
                          e.relatedTarget as Node | null,
                        )
                      ) {
                        setAgentsMenuOpen(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      className="group relative inline-block h-4 cursor-pointer border-0 bg-transparent p-0 text-left font-semibold uppercase text-[13px] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring-color)]"
                      aria-expanded={agentsMenuOpen}
                      aria-haspopup="true"
                      aria-controls="nav-agents-submenu"
                      aria-label={l.label}
                      onFocus={() => setAgentsMenuOpen(true)}
                    >
                      <span
                        aria-hidden="true"
                        className="relative inline-block overflow-hidden h-4"
                      >
                        <span className="flex flex-col transition-transform duration-400 ease-out group-hover:-translate-y-1/2">
                          <span className="text-muted">{l.label}</span>
                          <span className="text-foreground">{l.label}</span>
                        </span>
                      </span>
                    </button>

                    <div
                      id="nav-agents-submenu"
                      role="menu"
                      aria-label="Agents"
                      className={`absolute left-0 top-full z-60 w-max min-w-[220px] p-1 transition-all duration-300 ease-out ${
                        agentsMenuOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-[120vh] opacity-0"
                      }`}
                    >
                      {AGENTS_DROPDOWN_LINKS.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          role="menuitem"
                          className="block whitespace-nowrap px-1 py-1 tracking-[0.08em] font-semibold uppercase text-[13px] text-muted transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <AnimatedNavLink key={l.href} href={l.href}>
                    {l.label}
                  </AnimatedNavLink>
                ),
              )}
              <CeramicButton
                href="/request-demo"
                color="rgba(255, 255, 255, 0.06)"
                ringColor="rgba(255, 255, 255, 0.22)"
                textColor="var(--color-white)"
                borderRadius={9999}
                padding="8px 16px"
              >
                REQUEST DEMO
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

          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black overflow-hidden">
            <div
              className="h-full origin-center"
              style={{
                position: "absolute",
                left: "50%",
                transform: `translateX(-50%) scaleX(${finalScale})`,
                transformOrigin: "center",
                width: "100%",
                background:
                  "linear-gradient(90deg, #000000 -25%, var(--color-accent) 54.33%, #000000 125%)",
                transition: "transform 0.1s ease-out",
              }}
            />
          </div>
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
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
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
                <AnimatedNavLink
                  key={l.href}
                  href={l.href}
                  onClick={closeMobileMenu}
                >
                  {l.label}
                </AnimatedNavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
