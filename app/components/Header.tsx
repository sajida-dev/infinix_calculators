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

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/calculators"
              className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-bold text-primary border border-primary/20 hover:border-primary/50 transition-all duration-200 shadow-sm hover:shadow-primary/10 hover:-translate-y-[1px]"
            >
              All Calculators
            </Link>
            <Link
              href="/subscribe"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-primary-hover shadow-md shadow-primary/20 hover:shadow-primary-lg hover:-translate-y-[1px]"
            >
              Get Started
            </Link>
          </div>


        </div>
      </div>

    </header>
  );
}
