"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
  className={`fixed inset-x-0 top-0 z-[999] border-b px-6 text-[#292928] transition-all duration-500 md:px-12 ${
        scrolled
          ? "border-[#4c523c]/10 bg-[#ede5dc]/92 py-3 shadow-[0_8px_30px_rgba(41,41,40,0.08)] supports-[backdrop-filter]:backdrop-blur-xl"
          : "border-[#4c523c]/8 bg-[#ede5dc]/92 py-4 shadow-[0_8px_30px_rgba(41,41,40,0.04)]"
      }`}
    >
      <div className="mx-auto flex max-w-[1520px] items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div
            className={`relative overflow-hidden rounded-full border border-[#c3963b]/40 bg-[#ede5dc] transition-all duration-500 ${
              scrolled ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11"
            }`}
          >
            <Image
  src="/images/fleurdevie.webp"
  alt="Fleur de vie"
  fill
  sizes="44px"
  className="object-contain p-1.5"
  priority
/>
          </div>

          <div>
            <p className="font-serif text-xl font-semibold leading-none tracking-[0.06em] text-[#292928] sm:text-2xl">
              Didier Yvonnou
            </p>
            <p className="mt-1 hidden text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#654728]/70 md:block">
              Bien-être durable
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#292928]/70 md:flex">
          <Link className="transition hover:text-[#4c523c]" href="/a-propos">
            À propos
          </Link>
          <Link className="transition hover:text-[#4c523c]" href="/reflexions">
            Réflexions
          </Link>
          <Link className="transition hover:text-[#4c523c]" href="/reseaux">
            Réseaux
          </Link>
          <Link className="transition hover:text-[#4c523c]" href="/newsletter">
            Newsletter
          </Link>

          <Link
            href="/contact"
            className="ml-2 rounded-full bg-[#4c523c] px-5 py-2.5 text-sm font-medium text-[#ede5dc] transition hover:bg-[#292928]"
          >
            Contact
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}