import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { NAVBAR_Body } from "@/components/NAVBAR_Body";
import { FOOTER_Body } from "@/components/FOOTER_Body";

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
      <body className={inter.className}>
        <NAVBAR_Body />
        {children}
        <FOOTER_Body />
      </body>
    </html>
  );
}
