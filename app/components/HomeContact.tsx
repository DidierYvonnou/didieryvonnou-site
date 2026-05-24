import PrimaryButton from "./ui/PrimaryButton";
import SectionTitle from "./ui/SectionTitle";

export default function HomeContact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#4c523c] px-8 py-24 text-[#ede5dc] md:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(195,150,59,0.2),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(237,229,220,0.12),transparent_34%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <SectionTitle
            label="Contact"
            title="Contactez moi pour échanger, collaborer ou simplement partager votre ressenti."
            description="Pour échanger autour d’un contenu, d’une réflexion, d’un projet ou simplement découvrir mon univers."
          />
        </div>

        <div className="rounded-[2rem] border border-[#ede5dc]/15 bg-[#ede5dc]/10 p-8 backdrop-blur-md">
          <p className="font-serif text-4xl">Entrer en lien</p>

          <div className="mt-8 flex flex-col gap-4">
            <PrimaryButton
              href="mailto:bonjour@didieryvonnou.fr"
              light
            >
              Envoyer un message
            </PrimaryButton>

            <PrimaryButton href="#newsletter">
              Recevoir ma newsletter
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}