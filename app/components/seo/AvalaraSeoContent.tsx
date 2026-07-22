import Link from "next/link";

export default function AvalaraSeoContent() {
  return (
    <article className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-6">
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Understanding the Avalara Sales Tax Calculator & Rate Lookup
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Calculating transaction taxes is one of the most critical compliance operations for modern e-commerce stores, freelancers, and businesses. An <strong>Avalara sales tax calculator</strong> provides an instant way to estimate how much sales tax must be collected from buyers during checkouts. 
        </p>
        <p className="text-sm sm:text-base text-slate-600">
          Unlike flat taxation models, sales tax rates in the United States are highly fragmented, based on destination-based sourcing guidelines. This means the rate is determined by the exact address or ZIP code where the product is delivered.
        </p>
      </section>

      <section className="bg-primary/5 rounded-2xl border border-primary/10 p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
          Featured Lookup: What is the Sales Tax Rate for ZIP Code 94105?
        </h3>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          The combined sales tax rate for <strong>ZIP code 94105</strong> (located in the heart of San Francisco, California) is <strong>8.625%</strong>. 
        </p>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Sales tax is rarely a single flat rate. Instead, it is a combination of multiple tax layers. Here is how the 94105 rate is compiled:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200">
            <thead className="bg-slate-100/80 border-b border-slate-200 font-bold text-slate-900">
              <tr>
                <th className="p-3 border-r border-slate-200">Tax Layer Type</th>
                <th className="p-3 border-r border-slate-200">Governing Body</th>
                <th className="p-3">Rate Contribution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="p-3 border-r border-slate-200 font-semibold text-slate-800">State Tax</td>
                <td className="p-3 border-r border-slate-200">State of California</td>
                <td className="p-3 text-primary font-bold">6.000%</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-200 font-semibold text-slate-800">County Tax</td>
                <td className="p-3 border-r border-slate-200">San Francisco County</td>
                <td className="p-3 text-primary font-bold">0.250%</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-200 font-semibold text-slate-800">Local District Surcharges</td>
                <td className="p-3 border-r border-slate-200">City / District Agencies</td>
                <td className="p-3 text-primary font-bold">2.375%</td>
              </tr>
              <tr className="bg-slate-50 font-semibold text-slate-900">
                <td className="p-3 border-r border-slate-200">Combined Rate</td>
                <td className="p-3 border-r border-slate-200">ZIP 94105 Total</td>
                <td className="p-3 text-primary font-extrabold text-base">8.625%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Popular US ZIP Codes & Combined Sales Tax Rates
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          To help with your invoice audits, here is a lookup table matching common high-traffic business ZIP codes to their corresponding combined tax rates:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200">
            <thead className="bg-slate-100 font-bold text-slate-900">
              <tr>
                <th className="p-2.5 border border-slate-200">ZIP Code</th>
                <th className="p-2.5 border border-slate-200">City / State</th>
                <th className="p-2.5 border border-slate-200 text-center">Combined Sales Tax Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="p-2.5 border border-slate-200 font-mono font-bold text-slate-800">94105</td>
                <td className="p-2.5 border border-slate-200">San Francisco, CA</td>
                <td className="p-2.5 border border-slate-200 text-center text-primary font-bold">8.625%</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-slate-200 font-mono font-bold text-slate-800">10001</td>
                <td className="p-2.5 border border-slate-200">New York, NY</td>
                <td className="p-2.5 border border-slate-200 text-center text-primary font-bold">8.875%</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-slate-200 font-mono font-bold text-slate-800">90210</td>
                <td className="p-2.5 border border-slate-200">Beverly Hills, CA</td>
                <td className="p-2.5 border border-slate-200 text-center text-primary font-bold">9.500%</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-slate-200 font-mono font-bold text-slate-800">60601</td>
                <td className="p-2.5 border border-slate-200">Chicago, IL</td>
                <td className="p-2.5 border border-slate-200 text-center text-primary font-bold">10.250%</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-slate-200 font-mono font-bold text-slate-800">77001</td>
                <td className="p-2.5 border border-slate-200">Houston, TX</td>
                <td className="p-2.5 border border-slate-200 text-center text-primary font-bold">8.250%</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-slate-200 font-mono font-bold text-slate-800">98101</td>
                <td className="p-2.5 border border-slate-200">Seattle, WA</td>
                <td className="p-2.5 border border-slate-200 text-center text-primary font-bold">10.250%</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-slate-200 font-mono font-bold text-slate-800">30301</td>
                <td className="p-2.5 border border-slate-200">Atlanta, GA</td>
                <td className="p-2.5 border border-slate-200 text-center text-primary font-bold">8.900%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          How Destination Nexus Affects Your Calculations
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Under South Dakota v. Wayfair (2018), businesses must collect sales tax in states where they meet certain economic sales thresholds (typically $100,000 in sales or 200 individual transactions, though thresholds vary by state). This is known as **Economic Nexus**.
        </p>
        <p className="text-sm sm:text-base text-slate-600">
          Once nexus is established, e-commerce sellers are obligated to calculate, collect, and remit transaction taxes on every shipping address within that state. Our free tool replicates these destination tax calculations, offering immediate auditing insights for your ledger entries without registering for paid enterprise platforms.
        </p>
      </section>
    </article>
  );
}
