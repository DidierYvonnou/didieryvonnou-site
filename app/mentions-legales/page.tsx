import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#ede5dc] text-[#292928]">
      <Header />

      <section className="px-8 pb-24 pt-36 md:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
            Informations légales
          </p>

          <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Mentions légales
          </h1>

          <div className="mt-16 space-y-10 text-lg leading-relaxed text-[#292928]/75">
            <div>
              <h2 className="font-serif text-3xl text-[#292928]">
                Éditeur du site
              </h2>

              <p className="mt-4">
                Alexis Yvonnou
                <br />
                Email : alexisyvonnou@hotmail.fr
                <br />
                Site : https://www.alexisyvonnou.com
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-[#292928]">
                Hébergement
              </h2>

              <p className="mt-4">
                Vercel Inc.
                <br />
                440 N Barranca Ave #4133
                <br />
                Covina, CA 91723
                <br />
                États-Unis
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-[#292928]">
                Propriété intellectuelle
              </h2>

              <p className="mt-4">
                L’ensemble des contenus présents sur ce site
                (textes, images, éléments graphiques, identité visuelle)
                est protégé par le droit d’auteur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}