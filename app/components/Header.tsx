import Image from "next/image";
import Link from "next/link";
import { categoriesList } from "../data/CategoryData";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-6">
      <div
        className="rounded-2xl border transition-all duration-300 px-5 py-3 flex items-center justify-between bg-white/80 dark:bg-dark-card/80 border-slate-200/80 dark:border-dark-border/80 backdrop-blur-md shadow-sm hover:shadow-md"
      >

        {/* Logo Branding */}
        <div className="flex shrink-0 items-center">
          <Link href="/" className="flex items-center">
            {/* Light Mode Logo */}
            <Image
              src="/infinix-calculator-brand-logo.webp"
              alt="Infinix Calculators"
              width={140}
              height={36}
              priority
              style={{ height: "auto" }}
              className="h-9 w-auto object-contain dark:hidden"
            />
            {/* Dark Mode Logo */}
            <Image
              src="/infinix-calculator-brand-logo-dark.webp"
              alt="Infinix Calculators"
              width={140}
              height={36}
              style={{ height: "auto" }}
              className="h-9 w-auto object-contain hidden dark:block"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <Link href="/" className="hover:text-primary dark:hover:text-sky-300 transition-colors py-2 px-1 min-h-11 inline-flex items-center">
            Home
          </Link>

          {/* Calculators Dropdown */}
          <div className="relative group">
            <Link
              href="/calculators"
              className="inline-flex items-center gap-1 hover:text-primary dark:hover:text-sky-300 transition-colors py-2 px-1 min-h-11"
            >
              <span>Calculators</span>
              <svg className="w-3.5 h-3.5 text-slate-400 dark:text-slate-400 group-hover:text-primary dark:group-hover:text-sky-300 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {/* Pure CSS Hover Dropdown */}
            <div className="absolute left-0 mt-1 w-56 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card p-3 shadow-lg hidden group-hover:block z-50">
              <ul className="space-y-1">
                {categoriesList.map((cat) => (
                  <li key={cat.id}>
                    <Link href={`/calculators#${cat.id}`} className=" rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-bg hover:text-primary dark:hover:text-sky-300 transition-colors min-h-9.5 flex items-center">
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="/blog" className="hover:text-primary dark:hover:text-sky-300 transition-colors py-2 px-1 min-h-11 inline-flex items-center">
            Blog & Guides
          </Link>

          <Link href="/about" className="hover:text-primary dark:hover:text-sky-300 transition-colors py-2 px-1 min-h-11 inline-flex items-center">
            About Us
          </Link>

          <Link href="/contact" className="hover:text-primary dark:hover:text-sky-300 transition-colors py-2 px-1 min-h-11 inline-flex items-center">
            Contact
          </Link>
        </nav>

        {/* Right side Actions & Theme Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/calculators"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 min-h-10.5 text-xs font-bold text-white transition-all duration-200 hover:bg-primary-hover shadow-md shadow-primary/10 hover:shadow-primary-lg"
          >
            All Calculators
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
