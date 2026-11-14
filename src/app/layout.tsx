import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolio-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sivakumar-m-portfolio.vercel.app"),
  title: "Sivakumar M | Frontend Developer (React.js • Next.js • React Native • WebSockets)",
  description:
    "Frontend Developer with 1+ year of production experience building React.js, React Native, and Next.js applications. Specialized in real-time WebSockets, REST API integrations, and scalable UI architecture. MCA Graduate (8.6 CGPA).",
  keywords: [
    "Sivakumar M",
    "Frontend Developer",
    "React Developer",
    "React Native Developer",
    "Next.js Developer",
    "WebSockets",
    "Tailwind CSS",
    "Vite",
    "Milliontech",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Sivakumar M", url: "https://www.linkedin.com/in/m-sivakumar67" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" }
    ]
  },
  openGraph: {
    title: "Sivakumar M | Frontend Developer (React.js • Next.js • React Native)",
    description:
      "Frontend Developer with 1+ year of production experience building React.js, React Native, and Next.js applications. Real-time WebSockets, REST APIs, and high-performance UI.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile/linkedin-profile-photo.png",
        width: 800,
        height: 800,
        alt: "Sivakumar M - Frontend Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sivakumar M | Frontend Developer",
    description: "Frontend Developer specializing in React.js, Next.js, React Native & real-time WebSockets.",
    images: ["/profile/linkedin-profile-photo.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
