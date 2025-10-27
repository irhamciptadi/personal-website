# ICIP Favicon Setup

This portfolio uses a comprehensive favicon system based on the ICIP logo.

## 📁 Generated Files

### SVG Favicons (Scalable)

- ✅ `favicon.svg` - Modern browsers, scales perfectly
- ✅ `favicon.ico` - Legacy browser support
- ✅ `safari-pinned-tab.svg` - Safari pinned tab icon (monochrome)
- ✅ `apple-touch-icon.svg` - iOS home screen icon
- ✅ `icon-192.svg` - PWA icon (192x192)
- ✅ `icon-512.svg` - PWA icon (512x512)

### PNG Favicons (Optional, for better compatibility)

To generate PNG versions, run:

```bash
./scripts/generate-favicons.sh
```

This will create:

- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

**Requirements**: ImageMagick (`brew install imagemagick`)

## 🌐 Browser Support

| Browser         | Supported Icon                                           |
| --------------- | -------------------------------------------------------- |
| Chrome/Edge     | favicon.svg, icon-192.svg, icon-512.svg                  |
| Firefox         | favicon.svg                                              |
| Safari          | favicon.svg, safari-pinned-tab.svg, apple-touch-icon.svg |
| iOS Safari      | apple-touch-icon.svg                                     |
| Android Chrome  | icon-192.svg, icon-512.svg (PWA)                         |
| Legacy Browsers | favicon.ico                                              |

## 🎨 Design Details

All icons are based on the main `logo.svg` with:

- **Colors**: Purple to Pink gradient (#8b5cf6 → #a855f7 → #ec4899)
- **Style**: Bold & elegant serif-inspired letterforms
- **Format**: Clean SVG for perfect scaling
- **Background**: White for Apple icons, transparent for others

## 📝 Configuration

Icons are configured in:

1. `src/app/layout.tsx` - Metadata configuration
2. `public/site.webmanifest` - PWA manifest

## 🔧 Online Tools (Alternative)

If you prefer not to use the script, you can generate PNG favicons online:

- [Real Favicon Generator](https://realfavicongenerator.net/)
- [Favicon.io](https://favicon.io/)

Simply upload `logo.svg` and download the generated files.

## ✨ Usage

The favicons are automatically loaded by Next.js. No additional configuration needed!

Just deploy and your ICIP logo will appear in:

- Browser tabs
- Bookmarks
- iOS/Android home screens
- PWA installations
- Safari pinned tabs
