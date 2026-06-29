import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kenaudielucero.vercel.app"),
  title: "Ken Audie Lucero | Backend Engineer",
  description:
    "Backend-focused CS junior at PUP. Building APIs, compilers, and real-time systems. President's List & Dean's List. Special contributor at WCTP 2025.",
  keywords: ["Ken Lucero", "backend developer", "software engineer", "PUP", "portfolio", "FastAPI", "Java", "Python"],
  authors: [{ name: "Ken Audie S. Lucero" }],
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ken Audie Lucero | Backend Engineer",
    description:
      "Backend-focused CS junior at PUP. Building APIs, compilers, and real-time systems. Published contributor at WCTP 2025.",
    type: "website",
    url: "https://kenaudielucero.vercel.app",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ken Audie Lucero - Backend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ken Audie Lucero | Backend Engineer",
    description: "Backend-focused CS junior at PUP. Building APIs, compilers, and real-time systems.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}",
          }}
        />
      </head>
      <body className="noise antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
