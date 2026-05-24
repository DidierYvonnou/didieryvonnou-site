import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/reflexions");

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  author: string;
  keywords: string[];
  content: string;
};

export function getAllArticles() {
  const files = fs.readdirSync(articlesDirectory);

  return files
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        image: data.image,
        author: data.author,
        keywords: data.keywords || [],
      };
    });
}

export function getArticleBySlug(slug: string): Article {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Article introuvable : ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category,
    image: data.image,
    author: data.author,
    keywords: data.keywords || [],
    content,
  };
}