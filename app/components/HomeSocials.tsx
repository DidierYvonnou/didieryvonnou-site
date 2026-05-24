"use client";

import { ArrowRight, Camera, Play, Send, Users } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import FadeUp from "./ui/FadeUp";

const socialStats = [
  {
    platform: "Instagram",
    count: "+7,1K",
    label: "Réflexions courtes, carrousels et inspirations quotidiennes.",
    icon: Camera,
  },
  {
    platform: "Facebook",
    count: "+2,1K",
    label: "Réflexions courtes, carrousels et inspirations quotidiennes.",
    icon: Users,
  },
  {
    platform: "TikTok",
    count: "+40K",
    label: "Vidéos courtes et réflexions accessibles au plus grand nombre.",
    icon: Send,
  },
  {
    platform: "YouTube",
    count: "+10,5K",
    label: "Vidéos courtes, en attente de développer des formats longs.",
    icon: Play,
  },
];

export default function HomeSocials() {
  return (
    <section
      id="reseaux"
      className="relative overflow-hidden bg-[#4c523c] px-8 py-28 text-[#ede5dc] md:px-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#4c523c] via-[#3f4634] to-[#292928]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(195,150,59,0.26),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(237,229,220,0.13),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionTitle
            label="Réseaux & contenus"
            title="Une communauté déjà engagée autour de mes contenus."
          />

          <p className="max-w-2xl text-lg leading-relaxed text-[#ede5dc]/72">
            Je partage au quotidien des réflexions, des vidéos et
            des outils autour du bien-être durable, du retour à soi et de la
            transformation intérieure. Chaque plateforme devient un espace de
            lien, de transmission et d’inspiration.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {socialStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp key={item.platform} delay={index * 0.06}>
                <div className="group relative overflow-hidden rounded-[2rem] bg-[#ede5dc] p-7 text-[#292928] shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition duration-500 hover:-translate-y-[6px] hover:bg-[#f5eee7]">
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#c3963b]/12" />

                  <Icon
                    size={28}
                    className="relative z-10 mb-8 text-[#4c523c]"
                  />

                  <p className="relative z-10 text-sm font-medium text-[#4c523c]/70">
                    {item.platform}
                  </p>

                  <p className="relative z-10 mt-6 font-serif text-6xl leading-none text-[#4c523c]">
                    {item.count}
                  </p>

                  <div className="relative z-10 my-6 h-px w-full bg-[#654728]/15" />

                  <p className="relative z-10 text-sm font-medium text-[#292928]/65">
                    {item.label}
                  </p>

                  <div className="relative z-10 mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c3963b] opacity-0 transition duration-500 group-hover:opacity-100">
                    Voir le réseau <ArrowRight size={14} />
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col gap-5 rounded-[2rem] border border-[#ede5dc]/12 bg-[#ede5dc]/8 p-8 backdrop-blur-md md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-lg leading-relaxed text-[#ede5dc]/75">
            Une présence digitale pensée comme un prolongement naturel de mon
            univers : accessible, régulière, humaine et tournée vers la
            transmission.
          </p>

          <a
            href="/reseaux"
            className="inline-flex items-center gap-3 rounded-full bg-[#ede5dc] px-6 py-3 text-sm font-medium text-[#292928] transition hover:bg-white"
          >
            Découvrir mes contenus <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}