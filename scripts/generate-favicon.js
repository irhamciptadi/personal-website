const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generateFavicon() {
  const publicDir = path.join(__dirname, "..", "public");
  const logoPath = path.join(publicDir, "logo.svg");
  const faviconPath = path.join(publicDir, "favicon.ico");

  try {
    console.log("🎨 Generating favicon.ico from logo.svg...");

    // Generate 32x32 PNG (standard favicon size)
    const favicon32 = await sharp(logoPath).resize(32, 32).png().toBuffer();

    // Generate 16x16 PNG (smaller size)
    const favicon16 = await sharp(logoPath).resize(16, 16).png().toBuffer();

    // For ICO format, we'll create a 32x32 PNG and save it as .ico
    // Most modern browsers accept PNG in .ico file
    await sharp(logoPath).resize(32, 32).png().toFile(faviconPath);

    console.log("✅ favicon.ico generated successfully!");
    console.log(`📁 Location: ${faviconPath}`);

    // Also generate PNG favicons for better compatibility
    const favicon16Path = path.join(publicDir, "favicon-16x16.png");
    const favicon32Path = path.join(publicDir, "favicon-32x32.png");

    await sharp(logoPath).resize(16, 16).png().toFile(favicon16Path);

    await sharp(logoPath).resize(32, 32).png().toFile(favicon32Path);

    console.log("✅ favicon-16x16.png generated!");
    console.log("✅ favicon-32x32.png generated!");

    // Generate apple-touch-icon.png
    const appleTouchPath = path.join(publicDir, "apple-touch-icon.png");
    await sharp(logoPath)
      .resize(180, 180)
      .flatten({ background: "#ffffff" })
      .png()
      .toFile(appleTouchPath);

    console.log("✅ apple-touch-icon.png generated!");

    // Generate android icons
    const android192Path = path.join(publicDir, "android-chrome-192x192.png");
    const android512Path = path.join(publicDir, "android-chrome-512x512.png");

    await sharp(logoPath)
      .resize(192, 192)
      .flatten({ background: "#ffffff" })
      .png()
      .toFile(android192Path);

    await sharp(logoPath)
      .resize(512, 512)
      .flatten({ background: "#ffffff" })
      .png()
      .toFile(android512Path);

    console.log("✅ android-chrome-192x192.png generated!");
    console.log("✅ android-chrome-512x512.png generated!");

    console.log("\n🎉 All favicons generated successfully!");
    console.log("\n📝 Generated files:");
    console.log("  - favicon.ico (32x32)");
    console.log("  - favicon-16x16.png");
    console.log("  - favicon-32x32.png");
    console.log("  - apple-touch-icon.png (180x180)");
    console.log("  - android-chrome-192x192.png");
    console.log("  - android-chrome-512x512.png");
  } catch (error) {
    console.error("❌ Error generating favicon:", error);
    process.exit(1);
  }
}

generateFavicon();
