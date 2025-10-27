#!/bin/bash

# Script to convert SVG favicons to PNG format for better browser compatibility
# This requires ImageMagick or similar SVG to PNG converter
# Install with: brew install imagemagick (macOS) or apt-get install imagemagick (Linux)

echo "🎨 Converting ICIP favicons from SVG to PNG..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Please install it first:"
    echo "   macOS: brew install imagemagick"
    echo "   Linux: sudo apt-get install imagemagick"
    exit 1
fi

# Navigate to public directory
cd public

echo "📦 Generating favicon-16x16.png..."
convert -background none -resize 16x16 favicon.svg favicon-16x16.png

echo "📦 Generating favicon-32x32.png..."
convert -background none -resize 32x32 favicon.svg favicon-32x32.png

echo "📦 Generating apple-touch-icon.png (180x180)..."
convert -background white -resize 180x180 apple-touch-icon.svg apple-touch-icon.png

echo "📦 Generating android-chrome-192x192.png..."
convert -background white -resize 192x192 icon-192.svg android-chrome-192x192.png

echo "📦 Generating android-chrome-512x512.png..."
convert -background white -resize 512x512 icon-512.svg android-chrome-512x512.png

echo "✅ All favicon PNGs generated successfully!"
echo ""
echo "Generated files:"
echo "  - favicon-16x16.png"
echo "  - favicon-32x32.png"
echo "  - apple-touch-icon.png"
echo "  - android-chrome-192x192.png"
echo "  - android-chrome-512x512.png"
echo ""
echo "💡 Tip: You can also use online tools like:"
echo "   - https://realfavicongenerator.net/"
echo "   - https://favicon.io/"
