"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4c523c]/15 bg-[#ede5dc] text-[#292928] md:hidden"
      >
        <Menu size={20} />
      </button>

      <div
        className={`fixed inset-0 z-[9999] overflow-y-auto bg-[#ede5dc] transition-all duration-500 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#292928]/10 px-6 py-5">
          <p className="font-serif text-3xl text-[#292928]">
            Didier Yvonnou
          </p>

          <button
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#292928]/10"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col px-8 py-12">
          {[
            ["À propos", "/a-propos"],
            ["Réflexions", "/reflexions"],
            ["Réseaux", "/reseaux"],
            ["Newsletter", "/newsletter"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="border-b border-[#292928]/8 py-6 font-serif text-5xl tracking-[-0.04em] text-[#292928]"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}