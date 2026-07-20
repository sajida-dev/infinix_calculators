import fs from "fs";
import path from "path";
import { calculatorsData } from "../app/data/calculatorsData";
import { blogData } from "../app/data/blogData";

const baseUrl = "https://infinixcalculator.com";

const generateSitemap = () => {
  console.log("Generating static sitemap...");

  // Static base pages
  const staticPages = [
    { loc: "", lastmod: new Date().toISOString(), changefreq: "daily", priority: "1.0" },
    { loc: "/calculators", lastmod: new Date().toISOString(), changefreq: "daily", priority: "0.9" },
    { loc: "/blog", lastmod: new Date().toISOString(), changefreq: "weekly", priority: "0.8" },
    { loc: "/about", lastmod: new Date().toISOString(), changefreq: "monthly", priority: "0.5" },
    { loc: "/contact", lastmod: new Date().toISOString(), changefreq: "monthly", priority: "0.5" },
    { loc: "/privacy", lastmod: new Date().toISOString(), changefreq: "monthly", priority: "0.3" },
    { loc: "/terms", lastmod: new Date().toISOString(), changefreq: "monthly", priority: "0.3" },
  ];

  // Dynamic calculators
  const calcUrls = Object.values(calculatorsData).map((calc) => ({
    loc: `/calculators/${calc.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: "0.8",
  }));

  // Dynamic blogs
  const blogUrls = Object.values(blogData).map((post) => ({
    loc: `/blog/${post.slug}`,
    lastmod: new Date(post.date).toISOString(),
    changefreq: "monthly",
    priority: "0.7",
  }));

  const allUrls = [...staticPages, ...calcUrls, ...blogUrls];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  const publicDir = path.join(process.cwd(), "public");
  
  // Create public directory if it doesn't exist (safety check)
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(outputPath, xmlContent, "utf8");
  console.log(`Successfully generated static sitemap with ${allUrls.length} links at ${outputPath}`);
};

generateSitemap();
