import Link from "next/link";
import Image from "next/image";
import { getAuthorBySlug, getAuthorForCategory } from "../data/authorsData";

type BlogCardProps = {
  post: {
    slug: string;
    image: string;
    title: string;
    category: string;
    date: string;
    excerpt: string;
    author: string;
    authorSlug?: string;
  };
};

export default function BlogCard({ post }: BlogCardProps) {
  const author = post.authorSlug
    ? getAuthorBySlug(post.authorSlug)
    : getAuthorForCategory(post.category);

  return (
    <article
      key={post.slug}
      className="bg-white dark:bg-dark-card rounded-2xl border border-slate-200/80 dark:border-dark-border shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-200"
    >
      {/* Visual Cover Image with fixed aspect ratio */}
      <div className="relative w-full aspect-[16/10] bg-slate-100 dark:bg-dark-bg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-3 leading-snug">
            <Link href={`/blog/${post.slug}`} className="hover:text-primary dark:hover:text-sky-400 transition-colors">
              {post.title}
            </Link>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2 line-clamp-3">
            {post.excerpt}
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-dark-border/80 flex items-center justify-between">
          <Link
            href={`/authors/${author.slug}`}
            className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold hover:text-primary dark:hover:text-sky-400 transition-colors py-2 inline-flex items-center min-h-11"
          >
            By {author.name}
          </Link>
          <Link
            href={`/blog/${post.slug}`}
            aria-label={`Read Guide: ${post.title}`}
            className="text-xs font-bold text-primary dark:text-sky-400 hover:underline py-2 px-2 -mr-2 inline-flex items-center min-h-11"
          >
            Read Guide
          </Link>
        </div>
      </div>
    </article>
  );
}