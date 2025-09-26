import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse — the memecoin landing with playful vibes",
  description: "MemePulse — a playful memecoin landing that explains the idea, how to buy, tokenomics, and the community vibe. Quick steps, no fluff today.",
  keywords: [
    "memecoin",
    "cryptocurrency",
    "buy memecoin",
    "tokenomics",
    "community",
    "fun",
    "humor",
    "crypto landing",
    "MemePulse",
    "memecoin launch"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MemePulse — the memecoin landing with playful vibes",
    description: "MemePulse — a playful memecoin landing that explains the idea, how to buy, tokenomics, and the community vibe. Quick steps, no fluff today.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1758888303948-90815082.jpg",
      width: 1200,
      height: 630,
      alt: "MemePulse — the memecoin landing with playful vibes",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse — the memecoin landing with playful vibes",
    description: "MemePulse — a playful memecoin landing that explains the idea, how to buy, tokenomics, and the community vibe. Quick steps, no fluff today.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1758888303948-90815082.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased` }>
        {children}
      </body>
    </html>
  );
}
