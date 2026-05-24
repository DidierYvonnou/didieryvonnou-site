import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight, Camera, Mail, Play, Send, Users } from "lucide-react";
import Container from "../components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réseaux & contenus — Didier Yvonnou",

  description:
    "Découvrez les contenus et réflexions partagés par Didier Yvonnou autour du bien-être durable, du retour à soi, des émotions et de la conscience de soi.",

  keywords: [
    "Didier Yvonnou",
    "réseaux sociaux",
    "bien-être durable",
    "retour à soi",
    "TikTok bien-être",
    "Instagram développement personnel",
    "réflexions",
    "conscience de soi",
    "contenus bien-être",
  ],

  alternates: {
    canonical: "https://didieryvonnou.fr/reseaux",
  },

  openGraph: {
    title: "Réseaux & contenus — Didier Yvonnou",

    description:
      "Des contenus simples, humains et accessibles autour du retour à soi et du bien-être durable.",

    url: "https://didieryvonnou.fr/reseaux",

    type: "website",

    images: [
      {
        url: "/images/portrait4.webp",
        width: 1200,
        height: 630,
        alt: "Didier Yvonnou",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@type": "ProfilePage",

  name: "Réseaux & contenus — Didier Yvonnou",

  description:
    "Présence digitale de Didier Yvonnou autour du bien-être durable, du retour à soi et de la transmission.",

  url: "https://didieryvonnou.fr/reseaux",
};

const platforms = [
  {
    name: "Instagram",
    count: "+7,1K",
    role: "Réflexions visuelles, citations, carrousels et contenus courts.",
    icon: Camera,
  },
  {
    name: "Facebook",
    count: "+2,1K",
    role: "Communauté fidèle, partages plus longs et échanges directs.",
    icon: Users,
  },
  {
    name: "TikTok",
    count: "+40K",
    role: "Formats courts, messages accessibles et contenus spontanés.",
    icon: Send,
  },
  {
    name: "YouTube",
    count: "+10,5K",
    role: "Vidéos plus incarnées et formats permettant d’approfondir certaines réflexions.",
    icon: Play,
  },
];

const contentTypes = [
  "Réflexions",
  "Citations",
  "Carrousels",
  "Vidéos courtes",
  "Exercices simples",
  "Partages personnels",
];

export default function ReseauxPage() {
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
        <Container className="grid gap-16 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
              Réseaux & contenus
            </p>

            <h1 className="max-w-4xl font-serif text-6xl leading-[0.95] tracking-[-0.04em] md:text-8xl">
              Transmettre au quotidien.
            </h1>

            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[#292928]/72">
              Les réseaux sociaux sont aujourd’hui l’un des espaces principaux
              où je partage mes réflexions, mes expériences et des
              outils simples autour du bien-être durable, de la conscience de soi
              et du retour à soi.
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_25px_80px_rgba(41,41,40,0.14)]">
            <Image
  src="/images/portrait4.webp"
  alt="Didier Yvonnou partageant des réflexions autour du bien-être durable"
  fill
  priority
  sizes="(max-width: 768px) 100vw, 42vw"
  className="object-cover"
/>
          </div>
        </Container>
      </section>

      <section className="bg-[#4c523c] py-28 text-[#ede5dc]">
        <Container>
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
                Présence digitale
              </p>

              <h2 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
                Une communauté construite autour de la transmission.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-[#ede5dc]/72">
             Les contenus sont aujourd’hui diffusés sur plusieurs plateformes afin de partager mes réflexions avec une audience toujours plus large, à travers des formats simples, accessibles et humains.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {platforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <div
                  key={platform.name}
                  className="group relative overflow-hidden rounded-[2rem] bg-[#ede5dc] p-7 text-[#292928] shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-[6px] hover:bg-[#f5eee7]"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#c3963b]/12" />

                  <Icon size={28} className="relative z-10 mb-8 text-[#4c523c]" />

                  <p className="relative z-10 text-sm font-medium text-[#4c523c]/70">
                    {platform.name}
                  </p>

                  <p className="relative z-10 mt-6 font-serif text-6xl leading-none text-[#4c523c]">
                    {platform.count}
                  </p>

                  <div className="relative z-10 my-6 h-px w-full bg-[#654728]/15" />

                  <p className="relative z-10 text-sm leading-relaxed text-[#292928]/65">
                    {platform.role}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-28">
        <Container className="grid gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
              Ligne éditoriale
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Créer du lien, pas seulement de la visibilité.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-relaxed text-[#292928]/72">
              Ma présence sur les réseaux sociaux repose sur
              une idée simple : transmettre avec sincérité. Les contenus ne
              cherchent pas à impressionner, mais à accompagner, questionner,
              apaiser et ouvrir des pistes de réflexion.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {contentTypes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#4c523c]/15 bg-[#f5eee7] px-5 py-3 text-sm font-medium text-[#4c523c]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#e5d9cd] py-28">
        <Container>
          <div className="mb-14">
            <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
              Formats
            </p>

            <h2 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
              Des contenus simples, humains et accessibles.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Pensées courtes",
                text: "Des phrases et réflexions pour provoquer un déclic ou ouvrir une respiration.",
              },
              {
                title: "Carrousels",
                text: "Des contenus plus structurés pour expliquer une idée ou proposer un exercice.",
              },
              {
                title: "Vidéos",
                text: "Une parole plus incarnée, plus directe, pour créer une relation de confiance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] bg-[#ede5dc] p-8 shadow-[0_20px_60px_rgba(41,41,40,0.06)]"
              >
                <h3 className="font-serif text-4xl">{item.title}</h3>
                <p className="mt-5 leading-relaxed text-[#292928]/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-28">
        <Container>
          <div className="grid overflow-hidden rounded-[2.5rem] bg-[#292928] md:grid-cols-[1fr_0.9fr]">
            <div className="p-10 text-[#ede5dc] md:p-16">
              <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
                Continuer le lien
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                Recevoir les prochaines réflexions.
              </h2>

              <p className="mt-8 max-w-xl leading-relaxed text-[#ede5dc]/72">
                La newsletter permet de prolonger les contenus partagés sur les
                réseaux dans un format plus calme, plus direct et plus personnel.
              </p>

              <a
                href="/newsletter"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#ede5dc] px-7 py-4 text-sm font-semibold text-[#292928] transition hover:bg-white"
              >
                Découvrir la newsletter <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative min-h-[420px]">
              <Image
  src="/images/portrait8.webp"
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