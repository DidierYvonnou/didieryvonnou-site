"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import FadeUp from "./ui/FadeUp";

const pillars = [
  {
    title: "Conscience",
    text: "Mieux se comprendre pour avancer avec plus de justesse.",
  },
  {
    title: "Équilibre",
    text: "Retrouver un rapport plus apaisé à soi, aux autres et au quotidien.",
  },
  {
    title: "Présence",
    text: "Ralentir, observer, respirer et revenir à l’instant.",
  },
  {
    title: "Transmission",
    text: "Partager des réflexions, des outils et des chemins intérieurs.",
  },
];

export default function HomeAbout() {
  return (
    <section id="a-propos" className="px-8 py-28 md:px-16">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <FadeUp className="relative aspect-[4/5] overflow-hidden rounded-t-full">
          <Image
  src="/images/didier-portrait.webp"
  alt="Portrait de Didier Yvonnou"
  fill
  sizes="(max-width: 768px) 100vw, 40vw"
  className="object-cover"
/>
        </FadeUp>

        <FadeUp delay={0.1}>
          <SectionTitle
            label="À propos"
            title="Une approche humaine, sensible et accessible."
            description="Je partage une vision du bien-être durable fondée sur le retour à soi, l’écoute intérieure et la transformation progressive. À travers mes contenus, mes écrits et mes réflexions, j'invite chacun à ralentir, comprendre et avancer autrement."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="border-l border-[#c3963b] pl-5"
              >
                <h3 className="font-serif text-3xl">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#292928]/65">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/a-propos"
            className="mt-10 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-[#4c523c]"
          >
            Découvrir mon parcours <ArrowRight size={16} />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}