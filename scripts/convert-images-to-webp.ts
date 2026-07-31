import fs from "fs";
import path from "path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");

async function convertImagesToWebp() {
  console.log("Starting WebP conversion and optimization...");

  const files = fs.readdirSync(publicDir);
  const targetExts = [".png", ".jpg", ".jpeg", ".gif"];
  let convertedCount = 0;
  let deletedCount = 0;

  const pathReplacements: Record<string, string> = {};

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (targetExts.includes(ext)) {
      const baseName = path.basename(file, ext);
      const webpFileName = `${baseName}.webp`;
      const originalPath = path.join(publicDir, file);
      const webpPath = path.join(publicDir, webpFileName);

      console.log(`Converting ${file} -> ${webpFileName}...`);

      try {
        await sharp(originalPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(webpPath);

        convertedCount++;
        pathReplacements[`/${file}`] = `/${webpFileName}`;
        pathReplacements[file] = webpFileName;

        // Delete original file
        fs.unlinkSync(originalPath);
        deletedCount++;
        console.log(`Successfully converted and deleted original: ${file}`);
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err);
      }
    }
  }

  // Update references in source code if any files were converted
  if (Object.keys(pathReplacements).length > 0) {
    console.log("Updating image references across codebase...");
    updateCodebaseReferences(process.cwd(), pathReplacements);
  }

  console.log(`\nWebP Conversion Complete! Converted: ${convertedCount}, Deleted Originals: ${deletedCount}`);
}

function updateCodebaseReferences(dir: string, replacements: Record<string, string>) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next" || entry.name === ".git") {
        continue;
      }
      updateCodebaseReferences(path.join(dir, entry.name), replacements);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if ([".ts", ".tsx", ".js", ".jsx", ".json", ".html", ".css", ".md"].includes(ext)) {
        const filePath = path.join(dir, entry.name);
        let content = fs.readFileSync(filePath, "utf8");
        let modified = false;

        for (const [oldPath, newPath] of Object.entries(replacements)) {
          if (content.includes(oldPath)) {
            content = content.replaceAll(oldPath, newPath);
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(filePath, content, "utf8");
          console.log(`Updated image paths in ${path.relative(process.cwd(), filePath)}`);
        }
      }
    }
  }
}

convertImagesToWebp();
