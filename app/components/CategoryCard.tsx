import Link from "next/link";
import { calculatorsData } from "../data/calculatorsData";

export interface Category {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  slugs: string[];
}

interface CategoryCardProps {
  category: Category;
  maxItems?: number;
  showViewAllButton?: boolean;
  id?: string;
}

const getCategoryIconBg = (id: string) => {
  switch (id) {
    case "financial": return "bg-emerald-500 text-white shadow-emerald-100";
    case "tax": return "bg-amber-500 text-white shadow-amber-100";
    case "construction": return "bg-sky-500 text-white shadow-sky-100";
    case "math": return "bg-indigo-500 text-white shadow-indigo-100";
    case "education": return "bg-green-500 text-white shadow-green-100";
    case "health": return "bg-rose-500 text-white shadow-rose-100";
    case "unit-converter": return "bg-olive-500 text-white shadow-olive-100";
    default: return "bg-primary text-white shadow-blue-100";
  }
};

export default function CategoryCard({
  category,
  maxItems,
  showViewAllButton = true,
  id,
}: CategoryCardProps) {
  const displayedSlugs = maxItems ? category.slugs.slice(0, maxItems) : category.slugs;

  return (
    <div
      id={id}
      className="bg-white rounded-2xl  border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between h-full scroll-mt-20"
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
          <div className={`w-10 h-10 rounded-xl ${getCategoryIconBg(category.id)} flex items-center justify-center shadow-sm shrink-0`}>
            {category.icon}
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
              {category.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {category.desc}
            </p>
          </div>
        </div>

        {/* List of matching calculators */}
        <ul className="space-y-3 mt-5">
          {displayedSlugs.map((slug) => {
            const calc = calculatorsData[slug];
            if (!calc) return null;
            return (
              <li key={slug} className="text-sm">
                <Link href={`/calculators/${slug}`} className="group flex items-center gap-2 transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/45 group-hover:bg-primary shrink-0 transition-colors" />
                  <span className="text-primary group-hover:text-primary-hover transition-colors leading-snug font-medium truncate">
                    {calc.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Card Action Button */}
      {showViewAllButton && (
        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <Link
            href={`/calculators#${category.id}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-primary-hover shadow-sm shadow-primary/20 hover:shadow-md hover:-translate-y-[1px]"
          >
            View All <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
