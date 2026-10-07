import type { FAQItem } from "../calculatorsData";

export const tileSqftFaqs: FAQItem[] = [
    {
        question: "How do I calculate how many tiles I need for a room?",
        answer: "Divide your total installation area (in square feet) by the area of a single tile: <code>Tiles Needed = Room Area ÷ Tile Area</code>, then add a 10% waste buffer for cuts, edges, and breakage. Calculate your exact tile and box count with our free <a href=\"/calculators/tile-sqft\">Tile Sq Ft Calculator</a>."
    },
    {
        question: "How much extra tile should I order for waste?",
        answer: "A 10% waste factor is standard for simple rectangular rooms laid in a straight pattern. For diagonal layouts, herringbone patterns, or rooms with lots of corners, alcoves, and fixtures, increase the waste buffer to 15% to 20%."
    },
    {
        question: "Why should I keep extra tiles after finishing a project?",
        answer: "Tile colors and finishes can vary slightly between manufacturing batches (called \"dye lots\"), so keeping a few extra tiles from your original order ensures future repairs or replacements match exactly, rather than needing a new batch that may not blend seamlessly."
    },
    {
        question: "Does tile size affect how much waste I should budget for?",
        answer: "Yes. Larger format tiles (like 24x24 inch) generally produce more waste per cut because a single miscut wastes more material, while smaller tiles are more forgiving but require more grout lines and labor time per square foot."
    }
];
