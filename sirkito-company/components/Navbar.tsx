"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients" },
  { href: "/licenses-certifications", label: "Licenses & Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        {/* Logo placeholder */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/images/sirkitoLogo.jpg" 
          alt="Sirkito Electrical Builders Corp Logo" 
          width={50} height={50} 
          className="rounded-lg object-contain" />

          <span className="hidden sm:inline text-slate-800 font-semibold tracking-tight leading-tight">
            Sirkito Electrical
            <br />
            Builders Corp.
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-200 ${
                  isActive(link.href)
                    ? "text-blue-700 after:w-full"
                    : "text-slate-600 hover:text-blue-700 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="border-t border-slate-200 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-2.5 px-3.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-100 hover:text-blue-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
