import type { Metadata } from "next";
import { Geist, Geist_Mono, Sixtyfour, Orbitron } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";

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
        <div className="relative h-screen w-full bg-background text-foreground overflow-hidden">
          {/* Noise grain */}
          <div className="fuzzy-overlay1 pointer-events-none hidden sm:block" />
          <div className="fuzzy-overlay2 pointer-events-none hidden sm:block" />

          {/* Scanline overlay */}
          <div className="absolute inset-0 z-10 crt-scanline-overlay pointer-events-none"></div>

          {/* Glitch copy */}
          {/* <div
                className="absolute inset-0 z-30 flex items-center justify-center text-7xl glitch-layer pointer-events-none"
                aria-hidden="true"
              >
                <span className="text-[var(--color-crt-glow)] font-title opacity-50">
                  bartch.io
                </span>
              </div> */}

          {/* Normal content */}
          <div className="drop-shadow-[0_0_8px_var(--color-crt-glow)] relative z-20 h-full flex flex-col items-center mt-20 sm:mt-30 px-5">
            <Navigation />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
