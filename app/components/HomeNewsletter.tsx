import Image from "next/image";
import PrimaryButton from "./ui/PrimaryButton";
import NewsletterForm from "./NewsletterForm";

export default function HomeNewsletter() {
  return (
    <section
      id="newsletter"
      className="relative overflow-hidden px-8 py-28 md:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(195,150,59,0.14),transparent_28%),radial-gradient(circle_at_85%_85%,rgba(76,82,60,0.12),transparent_32%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#292928] shadow-[0_30px_90px_rgba(41,41,40,0.18)] md:grid-cols-[1fr_0.9fr]">
        <div className="p-10 text-[#ede5dc] md:p-16 lg:p-20">
          <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
            Newsletter
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">
            Recevoir une respiration dans votre boîte mail.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#ede5dc]/72">
            Des réflexions, des inspirations et des outils simples pour nourrir
            votre cheminement, sans bruit inutile.
          </p>

          <div className="mt-10 max-w-xl">
  <NewsletterForm />
</div>

          <p className="mt-5 text-xs text-[#ede5dc]/45">
            Une lettre simple, occasionnelle, pensée pour prendre le temps.
          </p>

          <div className="mt-8">
            <PrimaryButton href="/newsletter" light>
              Découvrir ma newsletter
            </PrimaryButton>
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <Image
            src="/images/newsletter.webp"
            alt="Nature et lumière évoquant le retour à soi"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-[#292928]/10 via-[#292928]/35 to-[#292928]/75" />

          <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-[#ede5dc]/15 bg-[#ede5dc]/10 p-7 text-[#ede5dc] backdrop-blur-md">
            <p className="font-serif text-3xl leading-tight">
              “Le plus grand voyage est souvent celui qui nous ramène à
              nous-même.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}