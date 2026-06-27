export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  content: string;
  calculatorSlug?: string;
  relatedSlugs: string[];
}

export const blogData: Record<string, BlogPost> = {
  "how-much-topsoil-do-i-need": {
    slug: "how-much-topsoil-do-i-need",
    title: "How Much Topsoil Do I Need? A Complete Landscaping Guide",
    excerpt: "Learn how to estimate topsoil for your lawn, raised beds, or landscaping project. We cover formulas, bag counts, and yard coverage.",
    category: "Construction & Landscaping",
    date: "2026-06-27",
    author: "Elena Rostova (Landscape Architect)",
    calculatorSlug: "topsoil",
    relatedSlugs: ["fill-dirt-vs-topsoil", "topsoil-cost-guide", "best-soil-depth-for-grass"],
    content: `
      <p>Whether you're starting a new lawn from scratch, establishing raised garden beds, or repairing low patches in your yard, one of the most critical questions to answer is: <strong>how much topsoil do I need?</strong></p>
      
      <p>Ordering too little soil means having to pay for double deliveries, which can easily double your trucking costs. Ordering too much leaves you with a massive, heavy pile of dirt sitting on your driveway or lawn with nowhere to go. This guide breaks down exactly how to estimate topsoil volume like a pro.</p>

      <h2>The Golden Formula for Topsoil Estimation</h2>
      <p>Calculating soil volume is a simple three-step process based on geometry. Soil is sold by volume (usually <strong>cubic yards</strong> in bulk or <strong>cubic feet</strong> in bags). Here is the standard formula to find soil requirements:</p>

      <div class="bg-slate-50 border border-slate-100 p-5 rounded-xl my-6">
        <h3 class="mt-0 text-slate-800 font-bold text-sm">Step 1: Calculate Square Footage</h3>
        <p class="font-mono text-primary text-sm">Area (sq ft) = Length (feet) × Width (feet)</p>
        
        <h3 class="text-slate-800 font-bold text-sm">Step 2: Convert Depth to Feet</h3>
        <p class="font-mono text-primary text-sm">Depth (feet) = Depth (inches) ÷ 12</p>

        <h3 class="text-slate-800 font-bold text-sm">Step 3: Calculate Cubic Yards</h3>
        <p class="font-mono text-primary text-sm">Cubic Yards = [Area (sq ft) × Depth (feet)] ÷ 27</p>
      </div>

      <h2>Step-by-Step Practical Example</h2>
      <p>Let's walk through an example. Suppose you have a rectangular lawn patch that measures <strong>30 feet long</strong> and <strong>20 feet wide</strong>, and you want to spread topsoil at a depth of <strong>3 inches</strong>.</p>
      
      <ol class="list-decimal list-inside space-y-2 my-4">
        <li><strong>Calculate Square Footage:</strong> 30 ft × 20 ft = 600 sq ft.</li>
        <li><strong>Convert Depth:</strong> 3 inches ÷ 12 = 0.25 ft.</li>
        <li><strong>Calculate Cubic Feet:</strong> 600 sq ft × 0.25 ft = 150 cu ft.</li>
        <li><strong>Convert to Cubic Yards:</strong> 150 cu ft ÷ 27 = <strong>5.56 cubic yards</strong>.</li>
      </ol>

      <h2>How Many Bags of Topsoil Do I Need?</h2>
      <p>If your project is smaller, buying soil in bulk (delivered by dump truck) might not make sense. Buying bagged soil from local nurseries or big box hardware stores is often cleaner and easier to manage.</p>
      <p>Standard topsoil bags are labeled by volume, typically containing <strong>0.75 cubic feet</strong> or <strong>1 cubic foot</strong>. To find bag counts, divide your total cubic feet by the bag size:</p>
      <ul>
        <li>For <strong>0.75 cu ft bags</strong>: 150 cu ft ÷ 0.75 = <strong>200 bags</strong>.</li>
        <li>For <strong>1.0 cu ft bags</strong>: 150 cu ft ÷ 1.0 = <strong>150 bags</strong>.</li>
      </ul>
      <p>Keep in mind that hauling 150+ bags in a standard car is impossible. In this scenario, bulk ordering is significantly cheaper and saves hours of physical lifting.</p>

      <h2>Recommended Topsoil Depths by Project</h2>
      <p>Different plants and projects require different amounts of rich topsoil to flourish:</p>
      
      <table class="w-full border-collapse border border-slate-200 my-6 text-sm">
        <thead>
          <tr class="bg-slate-50">
            <th class="border border-slate-200 p-2.5 text-left font-semibold">Project Type</th>
            <th class="border border-slate-200 p-2.5 text-left font-semibold">Recommended Depth</th>
            <th class="border border-slate-200 p-2.5 text-left font-semibold">Key Benefit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-200 p-2.5">Lawn Top Dressing</td>
            <td class="border border-slate-200 p-2.5">0.25 to 0.5 inches</td>
            <td class="border border-slate-200 p-2.5">Nutrient boost without smothering existing grass blades.</td>
          </tr>
          <tr>
            <td class="border border-slate-200 p-2.5">New Lawn (Seeding/Sod)</td>
            <td class="border border-slate-200 p-2.5">4 to 6 inches</td>
            <td class="border border-slate-200 p-2.5">Allows grass roots to develop deeply, preventing summer drought burn.</td>
          </tr>
          <tr>
            <td class="border border-slate-200 p-2.5">Flower & Vegetable Beds</td>
            <td class="border border-slate-200 p-2.5">8 to 12 inches</td>
            <td class="border border-slate-200 p-2.5">Accommodates root systems of active annuals and perennials.</td>
          </tr>
          <tr>
            <td class="border border-slate-200 p-2.5">Raised Garden Beds</td>
            <td class="border border-slate-200 p-2.5">12 to 18 inches</td>
            <td class="border border-slate-200 p-2.5">Provides ideal drainage control and deep nutrient access.</td>
          </tr>
        </tbody>
      </table>

      <h2>Important Soil Estimating Tips</h2>
      <p>Before placing your order, keep these expert tips in mind:</p>
      <ol class="list-decimal list-inside space-y-2 my-4">
        <li><strong>Add a 10% Waste Margin:</strong> Ground is rarely perfectly flat. Plus, soil compacts when watered or stepped on. Always multiply your final yard calculation by 1.10.</li>
        <li><strong>Understand Weight Limits:</strong> A cubic yard of dry topsoil weighs about 2,000 to 2,200 lbs (approx. 1 ton). Wet soil can weigh up to 3,000 lbs. Do not exceed your vehicle's payload capacity if picking it up yourself!</li>
      </ol>
    `
  },
  "fill-dirt-vs-topsoil": {
    slug: "fill-dirt-vs-topsoil",
    title: "Fill Dirt vs. Topsoil: Differences, Uses & When to Use Which",
    excerpt: "Confused about whether to buy fill dirt or topsoil? This comprehensive comparison guide explains the structural differences, costs, and project fit.",
    category: "Construction & Landscaping",
    date: "2026-06-25",
    author: "Elena Rostova (Landscape Architect)",
    calculatorSlug: "topsoil",
    relatedSlugs: ["how-much-topsoil-do-i-need", "topsoil-cost-guide"],
    content: `
      <p>One of the most common mistakes homeowners and DIYers make is choosing the wrong type of soil for their yard projects. Buying premium topsoil to fill a deep hole is an expensive waste of money. Conversely, planting grass directly into fill dirt is a recipe for lawn failure.</p>
      <p>To ensure your projects stand on solid ground, let's look at the differences between <strong>fill dirt</strong> and <strong>topsoil</strong>.</p>

      <h2>What is Topsoil?</h2>
      <p>Topsoil is the outermost layer of the earth's surface, typically the top 2 to 12 inches. It is highly organic, containing decomposed leaves, grass, roots, and organic matter. This makes it rich in nutrients and microorganisms necessary for plant growth.</p>
      <p><strong>Primary Uses:</strong> Lawns, flower beds, vegetable gardens, and top-dressing grass patches.</p>

      <h2>What is Fill Dirt?</h2>
      <p>Fill dirt is the soil found beneath the topsoil layer. It is excavated from deeper in the ground and contains little to no organic material. Instead, it consists of clay, sand, gravel, and rocks. Because it lacks organic matter, it does not decompose, settle, or shift over time.</p>
      <p><strong>Primary Uses:</strong> Filling deep holes, building up retaining walls, grading around house foundations, and establishing structural base layers.</p>

      <h2>Key Differences and Comparison</h2>
      <table class="w-full border-collapse border border-slate-200 my-6 text-sm">
        <thead>
          <tr class="bg-slate-50">
            <th class="border border-slate-200 p-2.5 text-left font-semibold">Feature</th>
            <th class="border border-slate-200 p-2.5 text-left font-semibold">Topsoil</th>
            <th class="border border-slate-200 p-2.5 text-left font-semibold">Fill Dirt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-200 p-2.5 font-semibold">Organic Content</td>
            <td class="border border-slate-200 p-2.5">High (microorganisms, organic nutrients)</td>
            <td class="border border-slate-200 p-2.5">Low to None (mostly inorganic sand/clay)</td>
          </tr>
          <tr>
            <td class="border border-slate-200 p-2.5 font-semibold">Settlement & Compaction</td>
            <td class="border border-slate-200 p-2.5">Settles significantly as organic material decays</td>
            <td class="border border-slate-200 p-2.5">Stable; compacts tightly and stays in place</td>
          </tr>
          <tr>
            <td class="border border-slate-200 p-2.5 font-semibold">Average Cost</td>
            <td class="border border-slate-200 p-2.5">Higher ($30 - $60 per cubic yard)</td>
            <td class="border border-slate-200 p-2.5">Lower ($10 - $25 per cubic yard)</td>
          </tr>
          <tr>
            <td class="border border-slate-200 p-2.5 font-semibold">Visual appearance</td>
            <td class="border border-slate-200 p-2.5">Dark, rich, crumbly texture</td>
            <td class="border border-slate-200 p-2.5">Lighter, clay-colored, contains rocks/clods</td>
          </tr>
        </tbody>
      </table>

      <h2>The Grading Rule of Thumb</h2>
      <p>If you are leveling an area or fixing the slope around your home to prevent basement leaks, <strong>never use topsoil</strong>. Because topsoil is loose and decomposes, water will easily seep through it, causing it to collapse. Instead, pack fill dirt tightly against the foundation to deflect water, and cover the top 3-4 inches with premium topsoil to allow grass to grow.</p>
    `
  },
  "topsoil-cost-guide": {
    slug: "topsoil-cost-guide",
    title: "Topsoil Cost Guide: Price Per Cubic Yard, Delivery, and Bags",
    excerpt: "Planning a budget for soil? Read our cost guide to compare bulk topsoil delivery costs, bag prices, and options for clean fill dirt.",
    category: "Construction & Landscaping",
    date: "2026-06-20",
    author: "Elena Rostova (Landscape Architect)",
    calculatorSlug: "topsoil",
    relatedSlugs: ["how-much-topsoil-do-i-need", "fill-dirt-vs-topsoil"],
    content: `
      <p>Purchasing topsoil is generally inexpensive, but the cost of <strong>delivery</strong> can quickly turn a budget-friendly project into an expensive home upgrade. If you only need a few yards of soil, shipping charges can easily exceed the cost of the dirt itself.</p>
      <p>This guide breaks down current average costs for bulk and bagged topsoil, plus delivery fees you can expect from suppliers.</p>

      <h2>Average Cost of Bulk Topsoil</h2>
      <p>In bulk, topsoil is priced and sold by the <strong>cubic yard</strong>. A cubic yard is a 3ft × 3ft × 3ft block (27 cubic feet) and covers 324 square feet at 1 inch deep.</p>
      <ul>
        <li><strong>Standard Screened Topsoil:</strong> $20 to $40 per cubic yard. (Cleaned of rocks, weeds, and twigs).</li>
        <li><strong>Premium Garden Soil Mix (Topsoil + Compost):</strong> $35 to $60 per cubic yard. (Higher nutrients, ideal for vegetable gardens).</li>
        <li><strong>Unscreened Fill Dirt:</strong> $10 to $20 per cubic yard. (Unprocessed base material).</li>
      </ul>

      <h2>Topsoil Delivery Trucking Costs</h2>
      <p>Trucking fees are usually flat rates based on distance or time. Most landscape supply yards charge a flat fee of <strong>$50 to $150 per delivery</strong> within a 10-15 mile radius.</p>
      <p>This means if you order 1 cubic yard of topsoil ($30) with delivery ($100), the total is $130. However, if you order 8 cubic yards of topsoil ($240) with delivery ($100), the total is $340, which averages out to a much more affordable $42.50 per yard. Always try to group your orders to save on delivery fees.</p>

      <h2>Bagged Soil Cost Comparison</h2>
      <p>A standard 40-pound bag of retail topsoil (0.75 cu ft) costs between <strong>$2.50 and $6.00 per bag</strong>. While this seems cheap, let's run the math to compare it to bulk rates:</p>
      <p>Since 1 cubic yard = 36 bags (of 0.75 cu ft):</p>
      <p class="font-mono text-center text-primary font-bold my-4">36 bags × $4.00 = $144.00 per cubic yard</p>
      <p>Compared to bulk soil ($30/yd), bagged soil is nearly <strong>five times more expensive</strong>! If your project requires more than 2 cubic yards of soil, ordering a bulk dump truck delivery is almost always the more cost-effective option.</p>
    `
  },
  "best-soil-depth-for-grass": {
    slug: "best-soil-depth-for-grass",
    title: "Best Soil Depth for Growing Grass and New Lawns",
    excerpt: "Discover the ideal topsoil depth required to establish strong, lush green grass roots that can survive dry spells.",
    category: "Construction & Landscaping",
    date: "2026-06-15",
    author: "Elena Rostova (Landscape Architect)",
    calculatorSlug: "topsoil",
    relatedSlugs: ["how-much-topsoil-do-i-need", "fill-dirt-vs-topsoil"],
    content: `
      <p>If you're planting a new lawn, laying sod, or overseeding patches, the foundation of your grass determines its long-term health. Scattering seeds over hard clay or rock-ridden fill dirt will result in weak, patchy turf that dies during the first dry summer weeks.</p>
      <p>To get a lush, deep-rooted lawn, you must provide the proper depth of high-quality topsoil.</p>

      <h2>The 6-Inch Standard for Root Health</h2>
      <p>For most residential turfgrasses (such as Kentucky Bluegrass, Bermuda, Fescue, and Zoysia), the optimal topsoil depth is <strong>4 to 6 inches</strong>. While grass can germinate in as little as 2 inches of soil, its root depth will be severely stunted.</p>
      <p>Deep root growth provides two major benefits:</p>
      <ol class="list-decimal list-inside space-y-2 my-4">
        <li><strong>Drought Tolerance:</strong> Deep roots can tap moisture stored deep in the earth. Shallow roots dry out and go dormant (turn brown) within days of hot, dry weather.</li>
        <li><strong>Nutrient Retention:</strong> A thicker layer of topsoil holds onto organic fertilizers and minerals far better than hard packed clay.</li>
      </ol>

      <h2>Can I Spread Soil Over Existing Grass?</h2>
      <p>If you are top-dressing an existing lawn to level out minor dips or add nutrients, you should never spread more than <strong>0.25 to 0.5 inches of topsoil at a time</strong>. Spreading any deeper will bury and suffocate the existing grass blades, killing off portions of your lawn.</p>
    `
  }
};
