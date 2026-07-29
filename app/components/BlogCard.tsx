import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  post: {
    slug: string;
    image: string;
    title: string;
    category: string;
    date: string;
    excerpt: string;
    author: string;
  };
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      key={post.slug}
      className="bg-white dark:bg-[#22242A] rounded-2xl border border-slate-200/80 dark:border-[#4D5156] shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-200"
    >
      {/* Visual Cover Image */}
      <div className="relative w-full h-64 bg-slate-100 dark:bg-[#191a1d]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
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
            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
            {post.excerpt}
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-[#4D5156]/80 flex items-center justify-between">
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">By {post.author}</span>
          <Link href={`/blog/${post.slug}`} className="text-xs font-bold text-primary hover:underline">
            Read Guide
          </Link>
        </div>
      </div>
    </article>
  );
}