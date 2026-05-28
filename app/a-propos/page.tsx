import Image from "next/image";
import Header from "../components/Header";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Didier Yvonnou",

  description:
    "Découvrez le parcours de Didier Yvonnou : entrepreneur, engagé dans l’humanitaire, passionné par le développement personnel, le retour à soi et le bien-être durable.",

  keywords: [
    "Didier Yvonnou",
    "à propos",
    "bien-être durable",
    "retour à soi",
    "développement personnel",
    "parcours",
    "Croix-Rouge",
    "voyage intérieur",
    "conscience de soi",
  ],

  alternates: {
    canonical: "https://didieryvonnou.fr/a-propos",
  },

  openGraph: {
    title: "À propos - Didier Yvonnou",
    description:
      "Découvrez le parcours de Didier Yvonnou et sa vision du bien-être durable et du retour à soi.",
    url: "https://didieryvonnou.fr/a-propos",
    type: "website",

    images: [
      {
        url: "/images/portrait2.webp",
        width: 1200,
        height: 630,
        alt: "Didier Yvonnou",
      },
    ],
  },
};

const timeline = [
  {
    year: "1968",
    title: "Racines bretonnes",
    text: "Naissance à Concarneau, dans une famille marquée par la discipline, l’engagement et la solidarité.",
  },
  {
    year: "18 ans",
    title: "Premier voyage intérieur",
    text: "Un départ seul en Thaïlande, qui transforme ma vision de la vie et ouvre une première quête intérieure.",
  },
  {
    year: "Parcours",
    title: "Entrepreneuriat & voyages",
    text: "Plusieurs entreprises créées, de nombreux voyages en Asie et une réflexion profonde sur le sens de la vie.",
  },
  {
    year: "Engagement",
    title: "La Croix-Rouge",
    text: "Secouriste, formateur puis président de la délégation locale de Concarneau.",
  },
  {
    year: "Tournant",
    title: "Reconstruction",
    text: "Une période difficile devient le point de départ d’un profond travail intérieur.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Didier Yvonnou",

  description:
    "Entrepreneur, créateur de contenus et auteur partageant des réflexions autour du bien-être durable, du retour à soi et de la conscience.",

  url: "https://didieryvonnou.fr",

  image: "https://didieryvonnou.fr/images/portrait2.webp",

  knowsAbout: [
    "bien-être durable",
    "retour à soi",
    "développement personnel",
    "conscience de soi",
    "ancrage",
    "voyage intérieur",
    "gestion des émotions",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#ede5dc] text-[#292928]">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd),
  }}
/>
      <Header />

      <section className="px-8 pb-24 pt-36 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_0.85fr] md:items-center">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
              À propos
            </p>

            <h1 className="max-w-4xl font-serif text-6xl leading-[0.95] tracking-[-0.04em] md:text-8xl">
              Didier Yvonnou
            </h1>

            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[#292928]/72">
              Entrepreneur pendant de nombreuses années, engagé dans
              l’humanitaire au sein de la Croix-Rouge et passionné par les
              voyages et le développement personnel, je partage
              aujourd’hui une approche humaine du bien-être durable et du retour
              à soi.
            </p>

            <a
              href="#parcours"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#4c523c] px-7 py-3 text-sm font-semibold text-[#ede5dc] transition hover:bg-[#292928]"
            >
              Découvrir mon parcours <ArrowRight size={16} />
            </a>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_25px_80px_rgba(41,41,40,0.14)]">
            <Image
  src="/images/portrait2.webp"
  alt="Portrait de Didier Yvonnou"
  fill
  priority
  sizes="(max-width: 768px) 100vw, 42vw"
  className="object-cover"
/>
          </div>
        </div>
      </section>

      <section className="bg-[#4c523c] px-8 py-28 text-[#ede5dc] md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
            Vision
          </p>

          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            “La solution ne se trouve pas seulement à l’extérieur. Elle commence
            souvent à l’intérieur de chacun de nous.”
          </h2>
        </div>
      </section>

      <section id="parcours" className="px-8 py-28 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
            Parcours
          </p>

          <h2 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Un chemin fait d’expériences, de rencontres et de transformations.
          </h2>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {timeline.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#654728]/10 bg-[#f5eee7] p-7"
              >
                <p className="mb-8 text-sm font-semibold text-[#c3963b]">
                  {item.year}
                </p>

                <h3 className="font-serif text-3xl leading-tight">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-[#292928]/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e5d9cd] px-8 py-28 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full">
            <Image
  src="/images/portrait3.webp"
  alt="Didier Yvonnou en extérieur"
  fill
  sizes="(max-width: 768px) 100vw, 40vw"
  className="object-cover"
/>
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
              Reconstruction
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Transformer l’épreuve en chemin intérieur.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-[#292928]/72">
              <p>
                Après de nombreuses années passées à entreprendre, voyager,
                créer et travailler intensément, j'ai traversé une période de
                profonde fatigue intérieure, marquée par une profonde dépression.
              </p>

              <p>
                Ce moment difficile devient progressivement un tournant. Grâce à
                la méditation, la respiration, la gratitude, la pleine conscience,
                certaines lectures et de belles rencontres humaines, un processus
                de reconstruction intérieure commence.
              </p>

              <p>
                Peu à peu, une conviction s’impose : le bien-être durable ne
                repose pas uniquement sur ce qui nous entoure, mais aussi sur la
                manière dont nous apprenons à revenir à nous-mêmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-28 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
              Aujourd’hui
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Transmettre ce que la vie m'a appris.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[#292928]/72">
            <p>
              Depuis plusieurs années, je partage sur les réseaux sociaux
              mes réflexions, mes expériences et des outils simples autour du
              bien-être, de la conscience de soi et du voyage intérieur.
            </p>

            <p>
              Une communauté bienveillante s’est progressivement créée autour de
              mes contenus : des personnes en quête de sens, d’apaisement et
              d’épanouissement.
            </p>

            <p className="font-serif text-3xl leading-tight text-[#4c523c]">
              Ma mission est simple : transmettre des réflexions et des outils pour aider chacun à retrouver son chemin intérieur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#292928] px-8 py-24 text-[#ede5dc] md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
              Aller plus loin
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              Et parfois, il suffit simplement de commencer…
            </h2>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ede5dc] px-10 py-5 text-sm font-semibold text-[#292928] transition hover:bg-white"
          >
            Me contacter <ArrowRight size={25} />
          </a>
        </div>
      </section>
        <Footer />
    </main>
  );
}