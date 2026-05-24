import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import Container from "../components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réflexions — Didier Yvonnou",

  description:
    "Articles et réflexions autour du bien-être durable, du retour à soi, des émotions, de l’ancrage et de la transformation intérieure.",

  keywords: [
    "réflexions",
    "bien-être durable",
    "retour à soi",
    "développement personnel",
    "émotions",
    "ancrage",
    "paix intérieure",
    "relations humaines",
    "Didier Yvonnou",
  ],

  alternates: {
    canonical: "https://didieryvonnou.fr/reflexions",
  },

  openGraph: {
    title: "Réflexions — Didier Yvonnou",

    description:
      "Un espace de réflexion autour du retour à soi, de la conscience et du bien-être durable.",

    url: "https://didieryvonnou.fr/reflexions",

    type: "website",

    images: [
      {
        url: "/images/article1.webp",
        width: 1200,
        height: 630,
        alt: "Réflexions — Didier Yvonnou",
      },
    ],
  },
};

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

const jsonLd = {
  "@context": "https://schema.org",

  "@type": "CollectionPage",

  name: "Réflexions — Didier Yvonnou",

  description:
    "Collection d’articles et de réflexions autour du retour à soi, des émotions et du bien-être durable.",

  url: "https://didieryvonnou.fr/reflexions",
};

export default function ReflexionsPage() {
  return (
    <main className="min-h-screen bg-[#ede5dc] text-[#292928]">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd),
  }}
/>
      <Header />

      <section className="pb-24 pt-36">
        <Container>
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
            Réflexions
          </p>

          <h1 className="max-w-5xl font-serif text-6xl leading-[0.95] tracking-[-0.04em] md:text-8xl">
            Lire, ralentir,
            <br />
            revenir à soi.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[#292928]/72">
            Un espace pour partager des réflexions, des prises de conscience et
            des pistes autour du bien-être durable, du retour à soi et de la
            transformation intérieure.
          </p>
        </Container>
      </section>

      <section className="pb-28">
        <Container className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.title}
              href={`/reflexions/${article.slug}`}
              className="group block overflow-hidden rounded-[2rem] bg-[#f5eee7] shadow-[0_20px_60px_rgba(41,41,40,0.05)] transition duration-300 hover:-translate-y-[6px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
  src={article.image}
  alt={article.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
  className="object-cover transition duration-[1600ms] group-hover:scale-105"
/>
              </div>

              <div className="p-8">
                <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#c3963b]">
                  {article.category}
                </p>

                <h2 className="font-serif text-4xl leading-tight">
                  {article.title}
                </h2>

                <div className="mt-8 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-[#4c523c]">
                  Lire l’article
                  <ArrowRight size={15} />
                </div>
              </div>
            </a>
          ))}
        </Container>
      </section>

      <section className="bg-[#4c523c] py-28 text-[#ede5dc]">
        <Container className="max-w-5xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
            Une autre manière d’avancer
          </p>

          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            Parfois, prendre le temps de réfléchir
            <br />
            est déjà une forme de transformation.
          </h2>
        </Container>
      </section>

      <section className="py-28">
        <Container>
          <div className="grid overflow-hidden rounded-[2.5rem] bg-[#292928] md:grid-cols-[1fr_0.9fr]">
            <div className="p-10 text-[#ede5dc] md:p-16">
              <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
                Newsletter
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                Continuer le cheminement.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#ede5dc]/72">
                Certaines réflexions prennent davantage de place dans la
                newsletter, dans un format plus calme et plus personnel.
              </p>

              <a
                href="/newsletter"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#ede5dc] px-7 py-4 text-sm font-semibold text-[#292928] transition hover:bg-white"
              >
                Découvrir la newsletter
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative min-h-[420px]">
              <Image
  src="/images/portrait7.webp"
  alt="Didier Yvonnou"
  fill
  sizes="(max-width: 768px) 100vw, 45vw"
  className="object-cover"
/>

              <div className="absolute inset-0 bg-gradient-to-l from-[#292928]/10 via-[#292928]/35 to-[#292928]/75" />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}