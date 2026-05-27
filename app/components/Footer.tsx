import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#292928] px-8 py-12 text-[#ede5dc] md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#c3963b]/40 bg-[#ede5dc]/10">
            <Image
              src="/images/fleurdevie.webp"
              alt="Fleur de vie"
              fill
              sizes="48px"
              className="object-contain p-1.5"
            />
          </div>

          <div>
            <p className="font-serif text-2xl leading-none sm:text-3xl">
              Didier Yvonnou
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#ede5dc]/45">
              Bien-être durable · Retour à soi
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#ede5dc]/65">
          <Link className="hover:text-[#ede5dc]" href="/a-propos">
            À propos
          </Link>

          <Link className="hover:text-[#ede5dc]" href="/reflexions">
            Réflexions
          </Link>

          <Link className="hover:text-[#ede5dc]" href="/reseaux">
            Réseaux
          </Link>

          <Link className="hover:text-[#ede5dc]" href="/newsletter">
            Newsletter
          </Link>

          <Link className="hover:text-[#ede5dc]" href="/contact">
            Contact
          </Link>
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-[#ede5dc]/10 pt-8 text-xs text-[#ede5dc]/40 md:flex-row">
        <p>© 2026 Didier Yvonnou. Tous droits réservés.</p>
<Link
  className="hover:text-[#ede5dc]"
  href="/mentions-legales"
>
  Mentions légales
</Link>

<Link
  className="hover:text-[#ede5dc]"
  href="/politique-confidentialite"
>
  Confidentialité
</Link>
        <p>Site imaginé avec calme, clarté et justesse.</p>
      </div>
    </footer>
  );
}