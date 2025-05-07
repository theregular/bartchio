import type { Metadata } from "next";
import { Geist, Geist_Mono, Sixtyfour, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sixtyfour = Sixtyfour({
  variable: "--font-sixtyfour",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bartchie",
  description: "music and fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sixtyfour.variable} ${orbitron.variable} ${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
