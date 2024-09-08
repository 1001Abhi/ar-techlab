import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const navLinks = [
  { id: 1, url: "#home", newTab: false, text: "Home" },
  { id: 2, url: "#features", newTab: false, text: "Features" },
  { id: 3, url: "#pricing", newTab: false, text: "Pricing" },
  { id: 4, url: "#contact", newTab: false, text: "Contact" },
];

export const metadata: Metadata = {
  title: 'AR-TechLab | Augmented Reality Solutions & Web Development',
  description: 'AR-TechLab specializes in cutting-edge augmented reality solutions, static website development, maintenance, and hosting. Transform your digital presence with us.',
  keywords: 'AR, augmented reality, web development, static websites, hosting',
  authors: [{ name: 'AR-TechLab Team' }],
  creator: 'AR-TechLab',
  publisher: 'AR-TechLab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AR-TechLab | Innovative AR Solutions',
    description: 'Discover cutting-edge augmented reality and web solutions with AR-TechLab.',
    url: 'https://www.ar-techlab.com',
    siteName: 'AR-TechLab',
    images: [
      {
        url: 'https://www.ar-techlab.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AR-TechLab - Augmented Reality Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AR-TechLab | Augmented Reality Experts',
    description: 'Transforming businesses with innovative AR solutions and web development.',
    images: ['https://www.ar-techlab.com/twitter-image.jpg'],
    creator: '@ARTechLab',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#5046e4',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <div className="flex-grow flex flex-col bg-gradient-to-br from-gray-900 to-black text-gray-100">
          <Navbar
            links={navLinks}
            logoUrl=""
            logoText="AR-TechLab"
          />
          <main className="flex-grow container mx-auto ">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}