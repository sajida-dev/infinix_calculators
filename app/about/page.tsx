import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About – Infinix Calculators',
  description: 'Learn about Infinix Calculators, our mission, team, and the powerful tools we provide for finance, construction, health, and more.',
  keywords: ['infinix calculators', 'about us', 'financial calculator', 'construction calculator', 'health calculator', 'online calculators', 'premium calculation tools'],
};

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-primary mb-6">About Infinix Calculators</h1>
      <p className="text-lg text-slate-700 mb-4">
        Infinix Calculators is a collection of professional‑grade, no‑login, privacy‑first calculators built for
        finance, construction, health, and many other industries. Our mission is to provide fast, accurate, and
        completely free tools that empower individuals and businesses to make data‑driven decisions.
      </p>
      <p className="text-lg text-slate-700 mb-4">
        Every calculator is built with modern React, TypeScript, and Tailwind CSS, delivering a responsive, glass‑
        morphism aesthetic that works on any device. We constantly add new calculators based on community feedback
        and industry trends, ensuring you have the most up‑to‑date resources at your fingertips.
      </p>
      <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Why Choose Us?</h2>
      <ul className="list-disc list-inside space-y-2 text-slate-600">
        <li>Zero registration – start calculating instantly.</li>
        <li>Privacy‑centric – your data never leaves your browser.</li>
        <li>Premium design – vibrant gradients, smooth micro‑animations, and dark‑mode support.</li>
      </ul>
    </section>
  );
}
