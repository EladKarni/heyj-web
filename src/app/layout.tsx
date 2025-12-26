import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavLinks from "@/components/NavLinks";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "HeyJ | Fast Voice Messages. Zero Clutter.",
    template: "%s | HeyJ",
  },
  description: "HeyJ is voice-first messaging. Press and hold to talk — let go to send. Works on Web, iOS, and Android, with no message length limits.",
  keywords: ["voice messaging", "voice notes", "voice chat", "messaging app", "voice-first", "instant messaging", "communication app"],
  authors: [{ name: "HeyJ" }],
  creator: "HeyJ",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/HeyJ-Logo.svg" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heyj.app/",
    title: "HeyJ | Fast Voice Messages. Zero Clutter.",
    description: "HeyJ is voice-first messaging. Press and hold to talk — let go to send. Works on Web, iOS, and Android, with no message length limits.",
    siteName: "HeyJ",
  },
  twitter: {
    card: "summary_large_image",
    title: "HeyJ | Fast Voice Messages. Zero Clutter.",
    description: "HeyJ is voice-first messaging. Press and hold to talk — let go to send. Works on Web, iOS, and Android, with no message length limits.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar>
          <NavLinks />
        </Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
