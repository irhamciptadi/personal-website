import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "../lib/ThemeProvider";
import { LanguageProvider } from "../lib/LanguageProvider";

const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://irham-ciptadi.vercel.app"
    : "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Irham Ciptadi — Full-Stack Software Engineer | Web Developer",
    template: "%s | Irham Ciptadi",
  },
  description:
    "Software Engineer with 7+ years of experience specializing in PHP, Node.js, Vue.js, React.js. Expert in building insurance automation systems, financial applications, and RESTful APIs. Based in Indonesia.",
  keywords: [
    "Irham Ciptadi",
    "Software Engineer",
    "Full-Stack Software Engineer",
    "PHP Developer",
    "Node.js Developer",
    "Vue.js Developer",
    "React.js Developer",
    "BullMQ",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "CodeIgniter",
    "Express.js",
    "Laravel",
    "RESTful API",
    "Indonesia",
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
    "Insurance Systems",
    "Financial Applications",
  ],
  authors: [
    { name: "Irham Ciptadi", url: "https://www.linkedin.com/in/irhamciptadi/" },
  ],
  creator: "Irham Ciptadi",
  publisher: "Irham Ciptadi",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: siteUrl,
    title: "Irham Ciptadi — Full-Stack Software Engineer | Web Developer",
    description:
      "Software Engineer with 7+ years of experience specializing in PHP, Node.js, Vue.js, React.js. Expert in building insurance automation systems, financial applications, and RESTful APIs.",
    siteName: "Irham Ciptadi Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Irham Ciptadi — Full-Stack Software Engineer | Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Irham Ciptadi — Full-Stack Software Engineer | Web Developer",
    description:
      "Software Engineer with 7+ years of experience specializing in PHP, Node.js, Vue.js, React.js. Expert in building insurance automation systems and financial applications.",
    images: ["/og-image.jpg"],
    creator: "@irhamciptadi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#8b5cf6" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#8b5cf6",
    "color-scheme": "light dark",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Add MutationObserver polyfill and error handling
                if (typeof window !== 'undefined') {
                  const originalObserve = window.MutationObserver && window.MutationObserver.prototype.observe;
                  if (originalObserve) {
                    window.MutationObserver.prototype.observe = function(target, options) {
                      if (!target || typeof target.nodeType === 'undefined') {
                        console.warn('MutationObserver.observe called with invalid target:', target);
                        return;
                      }
                      return originalObserve.call(this, target, options);
                    };
                  }

                  // Global error handler for uncaught observer errors
                  window.addEventListener('error', function(event) {
                    if (event.message && event.message.includes('MutationObserver')) {
                      event.preventDefault();
                      console.warn('MutationObserver error caught and suppressed:', event.error);
                    }
                  });
                }

                // Initialize theme before page renders to prevent flash
                try {
                  const savedTheme = localStorage.getItem('irham.theme');
                  const theme = savedTheme && ['light', 'night'].includes(savedTheme) ? savedTheme : 'light';

                  console.log('🚀 Initial theme load:', theme);

                  if (theme === 'night') {
                    document.documentElement.classList.add('dark');
                    console.log('🌙 Added dark class on initial load');
                  } else {
                    document.documentElement.classList.remove('dark');
                    console.log('☀️ Removed dark class on initial load (light mode)');
                  }
                } catch (e) {
                  console.error('❌ Error loading theme:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
