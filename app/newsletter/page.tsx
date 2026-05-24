import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight, Mail } from "lucide-react";

const promises = [
  "Des réflexions simples et profondes",
  "Des outils pour revenir à soi",
  "Une lecture calme, sans bruit inutile",
];

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-[#ede5dc] text-[#292928]">
      <Header />

      <section className="px-8 pb-24 pt-36 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
              Newsletter
            </p>

            <h1 className="max-w-4xl font-serif text-6xl leading-[0.95] tracking-[-0.04em] md:text-8xl">
              Une respiration dans votre boîte mail.
            </h1>

            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[#292928]/72">
              Recevoir, de temps en temps, des réflexions, des inspirations et
              des outils simples pour nourrir votre cheminement intérieur.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#4c523c] p-8 text-[#ede5dc] shadow-[0_25px_80px_rgba(41,41,40,0.14)]">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#c3963b]/18" />

            <Mail className="relative z-10 mb-10 text-[#c3963b]" size={34} />

            <p className="relative z-10 font-serif text-4xl leading-tight">
              Prendre le temps de lire.  
              <br />
              Prendre le temps de revenir à soi.
            </p>

            <form className="relative z-10 mt-10 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="rounded-full border border-[#ede5dc]/20 bg-[#ede5dc]/10 px-6 py-4 text-sm text-[#ede5dc] outline-none placeholder:text-[#ede5dc]/50 focus:border-[#c3963b]"
              />

              <button className="group flex items-center justify-center gap-3 rounded-full bg-[#ede5dc] px-7 py-4 text-sm font-semibold text-[#292928] transition hover:bg-white">
                S’inscrire
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </button>
            </form>

            <p className="relative z-10 mt-5 text-xs text-[#ede5dc]/50">
              Aucun bruit inutile. Simplement des contenus pensés pour ralentir.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e5d9cd] px-8 py-28 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
              Ce que vous recevrez
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Une lettre pensée comme un espace de calme.
            </h2>
          </div>

          <div className="grid gap-5">
            {promises.map((item, index) => (
              <div
                key={item}
                className="flex gap-6 rounded-[2rem] bg-[#ede5dc] p-7 shadow-[0_20px_60px_rgba(41,41,40,0.05)]"
              >
                <p className="font-serif text-4xl text-[#c3963b]">
                  0{index + 1}
                </p>

                <p className="pt-2 text-xl leading-relaxed text-[#292928]/72">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-28 md:px-16">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#292928] md:grid-cols-[1fr_0.9fr]">
          <div className="p-10 text-[#ede5dc] md:p-16">
            <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
              Intention
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Moins de contenu. Plus de présence.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#ede5dc]/72">
              La newsletter n’a pas vocation à remplir une boîte mail. Elle est
              pensée comme un rendez-vous simple, sincère et utile pour continuer
              à explorer le bien-être durable.
            </p>
          </div>

          <div className="relative min-h-[420px]">
            <Image
              src="/images/portrait6.webp"
              alt="Nature"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#292928]/10 via-[#292928]/35 to-[#292928]/75" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}