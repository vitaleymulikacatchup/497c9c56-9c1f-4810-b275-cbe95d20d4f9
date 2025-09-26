import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

export const metadata = {
  title: "MemePulse",
  description: "Join the fun and invest in our revolutionary memecoin!",
  openGraph: {
    title: "MemePulse",
    description: "Join the fun and invest in our revolutionary memecoin!",
    type: "website",
    url: "/",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630, alt: "MemePulse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse",
    description: "Join the fun and invest in our revolutionary memecoin!",
    images: ["/images/og-default.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: { url: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
