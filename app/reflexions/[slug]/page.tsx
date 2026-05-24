import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/ui/Container";
import { getArticleBySlug } from "../../../lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,

    alternates: {
      canonical: `https://didieryvonnou.fr/reflexions/${slug}`,
    },

    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://didieryvonnou.fr/reflexions/${slug}`,
      siteName: "Didier Yvonnou",
      locale: "fr_FR",
      type: "article",

      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: article.title,
    description: article.description,

    image: `https://didieryvonnou.fr${article.image}`,

    author: {
      "@type": "Person",
      name: "Didier Yvonnou",
    },

    publisher: {
      "@type": "Person",
      name: "Didier Yvonnou",
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://didieryvonnou.fr/reflexions/${slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-[#ede5dc] text-[#292928]">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <article className="pb-28 pt-36">
        <Container className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#c3963b]">
            {article.category}
          </p>

          <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
            {article.title}
          </h1>

          <p className="mt-8 text-sm uppercase tracking-[0.28em] text-[#292928]/50">
            Par {article.author}
          </p>
        </Container>

        <Container className="mt-16">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[2.5rem] shadow-[0_25px_80px_rgba(41,41,40,0.12)]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </Container>

        <Container className="mt-20 max-w-3xl">
          <div
            className="
              text-[1.12rem] leading-[1.95] text-[#292928]/78
              [&>p]:mb-8
              [&>h2]:mb-7 [&>h2]:mt-20 [&>h2]:font-serif [&>h2]:text-4xl [&>h2]:leading-tight [&>h2]:tracking-[-0.03em] [&>h2]:text-[#292928] md:[&>h2]:text-5xl
              [&>h3]:mb-5 [&>h3]:mt-14 [&>h3]:font-serif [&>h3]:text-3xl
              [&>hr]:my-16 [&>hr]:border-0 [&>hr]:border-t [&>hr]:border-[#c3963b]/35
              [&>blockquote]:my-16 [&>blockquote]:border-l-2 [&>blockquote]:border-[#c3963b] [&>blockquote]:pl-8 [&>blockquote]:font-serif [&>blockquote]:text-3xl [&>blockquote]:italic [&>blockquote]:leading-relaxed [&>blockquote]:text-[#4c523c]
              [&_em]:text-[#4c523c]
              [&_strong]:font-semibold [&_strong]:text-[#292928]
            "
          >
            <MDXRemote source={article.content} />
          </div>
        </Container>
      </article>

      <Footer />
    </main>
  );
}