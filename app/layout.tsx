import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import FooterSection from "./FooterSection";
import "./globals.css";
import NavBar from "./navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
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
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className={`${roboto.className} min-h-full flex flex-col`}>
        <Theme>
          <div className={roboto.className}>
            <NavBar />
            <main>{children}</main>
            <FooterSection />
          </div>
        </Theme>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: "Sydney Plumbing",
              telephone: "0477123456",
              url: "https://yourdomain.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2 Blaxcell Road",
                addressLocality: "Granville",
                addressRegion: "NSW",
                postalCode: "2142",
                addressCountry: "AU",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
