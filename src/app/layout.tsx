import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "Aawiz",
    template: "%s | Aawiz",
  },
  description:
    "Aawiz | Login panel and dashboard task for recruitment (Next.js 14).",
  keywords: ["Aawiz", "Dashboard", "Login", "Next.js 14", "Recruitment Task"],
  metadataBase: new URL("https://aawiz.net"),

  alternates: {
    canonical: "https://aawiz.net",
  },

  openGraph: {
    title: "Aawiz",
    description: "Aawiz login and dashboard system.",
    url: "https://aawiz.net",
    siteName: "Aawiz",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aawiz",
    description: "Aawiz login & dashboard task (Next.js14).",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
