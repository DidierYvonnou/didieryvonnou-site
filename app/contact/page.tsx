import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Camera,
  Play,
  Users,
  Clapperboard,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Didier Yvonnou",
  description:
    "Contacter Didier Yvonnou pour échanger autour du bien-être durable, du retour à soi, d’une collaboration ou d’un projet.",
  keywords: [
    "contact Didier Yvonnou",
    "bien-être durable",
    "retour à soi",
    "développement personnel",
    "contact",
    "collaboration",
    "réflexions",
  ],
  alternates: {
    canonical: "https://didieryvonnou.fr/contact",
  },
  openGraph: {
    title: "Contact - Didier Yvonnou",
    description:
      "Entrer en contact avec Didier Yvonnou autour du bien-être durable et du retour à soi.",
    url: "https://didieryvonnou.fr/contact",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Didier Yvonnou",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact - Didier Yvonnou",
  description:
    "Page de contact de Didier Yvonnou autour du bien-être durable et du retour à soi.",
  url: "https://didieryvonnou.fr/contact",
  email: "bonjour@didieryvonnou.fr",
};

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/didieryvonnou/",
    icon: Camera,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/didier.yvonnou/",
    icon: Users,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCkSWnWJTRvqssw3vs2vtHtw",
    icon: Play,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@didier_yvonnou",
    icon: Clapperboard,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#ede5dc] text-[#292928]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Header />

      <section className="px-8 pb-28 pt-36 md:px-16">
        <div className="mx-auto mb-20 max-w-5xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
            Contact
          </p>

          <h1 className="font-serif text-6xl leading-[0.95] tracking-[-0.04em] md:text-8xl">
            Entrer en lien.
          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-[#292928]/72">
            Pour échanger autour d’un contenu, d’une réflexion, d’un projet ou
            simplement découvrir l’univers de Didier Yvonnou.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[2rem] bg-[#4c523c] p-8 text-[#ede5dc]">
            <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#c3963b]">
              Réseaux sociaux
            </p>

            <div className="space-y-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-full border border-[#ede5dc]/10 px-5 py-4 transition hover:bg-[#ede5dc]/10"
                  >
                    <div className="flex items-center gap-4">
                      <Icon size={18} />
                      <span>{social.name}</span>
                    </div>

                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>
                );
              })}
            </div>

            <p className="mt-8 text-sm leading-relaxed text-[#ede5dc]/60">
              Vous pouvez aussi écrire directement à{" "}
              <a
                href="mailto:bonjour@didieryvonnou.fr"
                className="text-[#ede5dc] underline underline-offset-4"
              >
                bonjour@didieryvonnou.fr
              </a>
              .
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-[#292928] p-8 text-[#ede5dc] md:p-12">
            <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
              Message
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              Prendre le temps d’échanger.
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-[#ede5dc]/70">
              Laissez un message pour entrer en contact ou partager une
              réflexion.
            </p>

            <form
              action="https://formspree.io/f/maqkjale"
              method="POST"
              className="mt-10 grid gap-4"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Votre nom"
                className="rounded-full border border-[#ede5dc]/20 bg-[#ede5dc]/10 px-6 py-4 text-sm text-[#ede5dc] outline-none placeholder:text-[#ede5dc]/45 focus:border-[#c3963b]/70"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Votre adresse email"
                className="rounded-full border border-[#ede5dc]/20 bg-[#ede5dc]/10 px-6 py-4 text-sm text-[#ede5dc] outline-none placeholder:text-[#ede5dc]/45 focus:border-[#c3963b]/70"
              />

              <textarea
                name="message"
                required
                placeholder="Votre message"
                rows={7}
                className="resize-none rounded-[1.5rem] border border-[#ede5dc]/20 bg-[#ede5dc]/10 px-6 py-4 text-sm text-[#ede5dc] outline-none placeholder:text-[#ede5dc]/45 focus:border-[#c3963b]/70"
              />

              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#ede5dc] px-7 py-4 text-sm font-semibold text-[#292928] transition hover:bg-white"
              >
                Envoyer le message
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}