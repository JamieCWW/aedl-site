import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { NAVBAR_Body } from "@/components/NAVBAR_Body";
import { FOOTER_Body } from "@/components/FOOTER_Body";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AEDL",
  description:
    "Welcome to [Company Name], a leading electrical design company specializing in innovative solutions for residential, commercial, and industrial projects. Our team of expert engineers and designers is dedicated to delivering high-quality electrical designs, ensuring safety, efficiency, and sustainability. Contact us today to discuss your project needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src='< id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="4edaf643-5cb7-456b-8276-369a5473cc84" data-blockingmode="auto" type="text/javascript">' />
      </head>
      <body className={inter.className}>
        <NAVBAR_Body />
        {children}
        <FOOTER_Body />
      </body>
    </html>
  );
}
