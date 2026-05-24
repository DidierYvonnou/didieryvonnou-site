"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PrimaryButton from "./ui/PrimaryButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#ede5dc]">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.02 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/didier-hero.webp"
            quality={82}
            alt="Didier Yvonnou"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ede5dc_0%,rgba(237,229,220,0.98)_28%,rgba(237,229,220,0.82)_48%,rgba(237,229,220,0.28)_72%,rgba(237,229,220,0.04)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(255,255,255,0.6),transparent_36%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#ede5dc] to-transparent" />
      </div>

      <div className="relative z-20 flex min-h-screen items-center px-6 pb-16 pt-32 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 42, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.42em] text-[#c3963b]">
            Bien-être durable · Retour à soi
          </p>

          <h1 className="max-w-2xl font-serif text-[3rem] leading-[0.96] tracking-[-0.05em] text-[#292928] sm:text-[4.2rem] md:text-[6.2rem] lg:text-[7rem]">
            Revenir à soi,
            <br />
            pour avancer
            <br />
            avec justesse.
          </h1>

          <div className="mt-9 h-[2px] w-24 bg-[#c3963b] md:w-28" />

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#292928]/68 md:mt-10 md:text-xl">
            Des réflexions, des outils et des contenus pour cultiver plus de
            conscience, d’équilibre et de sérénité au quotidien.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 md:mt-12">
            <PrimaryButton href="#a-propos">
              Découvrir l’univers
            </PrimaryButton>

            <a
              href="#newsletter"
              className="inline-flex items-center rounded-full border border-[#4c523c]/20 bg-white/60 px-6 py-3 text-sm font-medium text-[#4c523c] backdrop-blur-md transition duration-500 hover:bg-white"
            >
              Newsletter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}