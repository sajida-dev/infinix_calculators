import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo Branding */}
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/infinix-calculator-brand-logo.png"
                alt="Infinix Calculators"
                width={150}
                height={40}
                priority
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <Link
                href="/calculators"
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-2"
              >
                <span>Calculators</span>
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Pure CSS Hover Dropdown */}
              <div className="absolute left-0 mt-1 w-56 rounded-xl border border-slate-200 bg-white p-3 shadow-lg hidden group-hover:block z-50">
                <ul className="space-y-1">
                  <li>
                    <Link href="/calculators" className="block rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors">
                      Financial Calculators
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators" className="block rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors">
                      Tax & Payroll Tools
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators" className="block rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors">
                      Construction Estimators
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators" className="block rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors">
                      Health & Fitness Indices
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/blog"
              className="text-sm font-semibold text-slate-600 outline outline-1 outline-gray-400 rounded-full px-3 py-1.5 hover:text-primary hover:outline-primary transition-colors"
            >
              Blog & Guides
            </Link>

            <Link
              href="/calculators"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-primary-hover shadow-md shadow-primary/20 hover:shadow-primary-lg hover:-translate-y-[1px]"
            >
              All Calculators
            </Link>
          </div>
        </div>
      </div>

    </header>
  );
}
