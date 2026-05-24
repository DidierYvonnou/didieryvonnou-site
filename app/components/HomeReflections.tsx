"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Container from "./ui/Container";

const articles = [
  {
    category: "Réflexion",
    title: "Pourquoi avons-nous autant de mal à ralentir ?",
    image: "/images/article1.webp",
    slug: "pourquoi-ralentir",
  },
  {
    category: "Conscience",
    title: "Revenir à soi sans fuir le monde",
    image: "/images/article2.webp",
    slug: "revenir-a-soi",
  },
  {
    category: "Bien-être",
    title: "La paix intérieure se cultive chaque jour",
    image: "/images/article3.webp",
    slug: "paix-interieur",
  },
  {
    category: "Ancrage",
    title: "L’ancrage commence dans le corps",
    image: "/images/article4.webp",
    slug: "ancrage",
  },
  {
    category: "Relations",
    title: "Nos relations révèlent notre état intérieur",
    image: "/images/didier-hero.webp",
    slug: "relations",
  },
  {
    category: "Émotions",
    title: "Apprendre à écouter ses émotions",
    image: "/images/article6.webp",
    slug: "emotions",
  },
];

const articleGroups = [
  articles.slice(0, 3),
  articles.slice(3, 6),
];

export default function HomeReflections() {
  const [activeGroup, setActiveGroup] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGroup((current) => (current + 1) % articleGroups.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reflexions" className="bg-[#e5d9cd] py-28">
      <Container>
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle
            label="Réflexions"
            title="Lire, ralentir, comprendre."
          />

          <a
            href="/reflexions"
            className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-[#4c523c]"
          >
            Toutes les réflexions <ArrowRight size={16} />
          </a>
        </div>

        <div className="relative min-h-[520px] overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeGroup}
      initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, x: -40, filter: "blur(6px)" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="grid gap-6 lg:grid-cols-3"
    >
      {articleGroups[activeGroup].map((article) => (
        <a
          key={article.title}
          href={`/reflexions/${article.slug}`}
          className="group block overflow-hidden rounded-3xl bg-[#ede5dc] shadow-[0_20px_60px_rgba(41,41,40,0.08)] transition duration-500 hover:-translate-y-[6px]"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
  src={article.image}
  alt={article.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
  className="object-cover transition duration-[1800ms] group-hover:scale-105"
/>
          </div>

          <div className="p-8">
            <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#c3963b]">
              {article.category}
            </p>

            <h3 className="font-serif text-3xl leading-tight">
              {article.title}
            </h3>

            <div className="mt-8 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-[#4c523c]">
              Lire l’article <ArrowRight size={15} />
            </div>
          </div>
        </a>
      ))}
    </motion.div>
  </AnimatePresence>
</div>

        <div className="mt-10 flex justify-center gap-3">
          {articleGroups.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveGroup(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeGroup === index
                  ? "w-10 bg-[#4c523c]"
                  : "w-2.5 bg-[#4c523c]/25"
              }`}
              aria-label={`Afficher le groupe ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}