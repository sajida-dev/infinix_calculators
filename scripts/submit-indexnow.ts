import { calculatorsData } from "../app/data/calculatorsData";
import { blogData } from "../app/data/blogData";

const host = "infinixcalculator.com";
const apiKey = "67ad0d90752f4b07ad502253b766410e";
const keyLocation = `https://${host}/${apiKey}.txt`;
const baseUrl = `https://${host}`;

async function submitIndexNow() {
  console.log("Gathering all website URLs for IndexNow submission...");

  // 1. Static base pages
  const staticPages = [
    "",
    "/calculators",
    "/calculators/topsoil",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  // 2. Dynamic calculators
  const calcUrls = Object.values(calculatorsData).map((calc) => `/calculators/${calc.slug}`);

  // 3. Dynamic blogs
  const blogUrls = Object.values(blogData).map((post) => `/blog/${post.slug}`);

  // Combine and deduplicate
  const pathList = Array.from(new Set([...staticPages, ...calcUrls, ...blogUrls]));
  const fullUrlList = pathList.map((path) => `${baseUrl}${path}`);

  console.log(`Total URLs to submit to IndexNow: ${fullUrlList.length}`);

  const payload = {
    host: host,
    key: apiKey,
    keyLocation: keyLocation,
    urlList: fullUrlList,
  };

  const endpoints = [
    "https://api.indexnow.org/IndexNow",
    "https://www.bing.com/IndexNow",
    "https://yandex.com/indexnow",
  ];

  for (const endpoint of endpoints) {
    console.log(`Submitting ${fullUrlList.length} URLs to IndexNow via endpoint: ${endpoint}...`);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      console.log(`Endpoint: ${endpoint} | Status: ${response.status} ${response.statusText}`);
      if (response.status === 200 || response.status === 202) {
        console.log(`✅ Successfully submitted ${fullUrlList.length} URLs to IndexNow (${endpoint})!`);
      } else {
        const text = await response.text();
        console.warn(`⚠️ IndexNow returned non-200 status (${response.status}):`, text);
      }
    } catch (error) {
      console.error(`❌ Error submitting to IndexNow endpoint ${endpoint}:`, error);
    }
  }
}

submitIndexNow();
