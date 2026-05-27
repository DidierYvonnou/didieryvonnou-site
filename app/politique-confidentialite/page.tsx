import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#ede5dc] text-[#292928]">
      <Header />

      <section className="px-8 pb-24 pt-36 md:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
            Confidentialité
          </p>

          <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Politique de confidentialité
          </h1>

          <div className="mt-16 space-y-10 text-lg leading-relaxed text-[#292928]/75">
            <div>
              <h2 className="font-serif text-3xl text-[#292928]">
                Données collectées
              </h2>

              <p className="mt-4">
                Certaines données personnelles peuvent être collectées via
                le formulaire de contact ou l’inscription à la newsletter,
                notamment votre adresse email.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-[#292928]">
                Utilisation des données
              </h2>

              <p className="mt-4">
                Les données collectées sont utilisées uniquement pour répondre
                aux messages envoyés ou transmettre les newsletters et contenus
                proposés par Didier Yvonnou.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-[#292928]">
                Newsletter
              </h2>

              <p className="mt-4">
                L’inscription à la newsletter est gérée via MailerLite.
                Vous pouvez vous désinscrire à tout moment grâce au lien présent
                dans chaque email.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-[#292928]">
                Vos droits
              </h2>

              <p className="mt-4">
                Conformément au RGPD, vous pouvez demander l’accès,
                la modification ou la suppression de vos données personnelles
                en contactant :
                bonjour@didieryvonnou.fr
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}