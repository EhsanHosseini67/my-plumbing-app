import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./navbar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import FooterSection from "./FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sydney plumbing",
    template: "%s | Sydney plumbing",
  },

  description: "Trusted plumbing tradee in Sydney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Theme>
          <NavBar />
          <main>{children}</main>
          <FooterSection />
        </Theme>
      </body>
    </html>
  );
}
