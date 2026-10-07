import type { FAQItem } from "../calculatorsData";

export const printingFaqs: FAQItem[] = [
    {
        question: "How do I calculate the cost of a printing job?",
        answer: "Sum the per-page paper and ink costs, add binding costs, then multiply by the print quantity: <code>Total Cost = (Per-Page Cost × Pages + Binding Cost) × Quantity</code>. Add your target markup percentage to get the customer quote. Estimate your own job with our free <a href=\"/calculators/printing\">Printing Cost Calculator</a>."
    },
    {
        question: "What is a typical cost per page for commercial printing?",
        answer: "Black & white printing typically runs $0.02 to $0.05 per page, while full-color (CMYK) printing runs $0.08 to $0.15 per page depending on paper stock. Premium glossy or cardstock paper adds $0.03 to $0.12 per page on top of ink costs."
    },
    {
        question: "How much should I mark up a print job when quoting a customer?",
        answer: "Most print shops apply a 25% to 50% markup over direct production cost (paper, ink, and binding) to cover labor, equipment depreciation, and profit margin. Rush jobs or highly customized orders often justify a markup at the higher end of that range."
    },
    {
        question: "What binding method is most cost-effective for booklets?",
        answer: "Saddle-stitching (stapled binding) is the cheapest option and works well for documents under about 64 pages. Spiral or comb binding costs more per unit but allows booklets to lie flat and handle higher page counts; perfect binding (like a paperback book) costs the most but gives a professional, squared spine."
    },
    {
        question: "What are typical setup and artwork fees for imprinting logos on promotional items?",
        answer: "Setup fees for imprinting a logo (screen printing, pad printing, or laser engraving) on promotional items like pens typically range from $25 to $75 per design per color, often waived or discounted on larger bulk orders. Artwork revision fees, if your logo needs vectorizing or color separation, can add $15 to $50 depending on complexity."
    }
];
