"use client";

import "./globals.css";
import { useState } from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-[#ffdbe6] text-neutral-900 bg-[linear-gradient(135deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:40px_40px]">

        {/* NAVBAR */}
        <div className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50">
          <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">

            {/* LOGO */}
            <img 
              src="/logo.png" 
              alt="Content With Katie Logo" 
              className="h-14 object-contain"
            />

            {/* BURGER */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-2xl"
            >
              ☰
            </button>
          </div>

          {/* DROPDOWN MENU */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-6 pb-6 bg-white text-lg">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home 🫶🏻</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About ✨</Link>
              <Link href="/work" onClick={() => setMenuOpen(false)}>Work 💗</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact 🥰</Link>
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <main className="pt-24">
          {children}
        </main>

      </body>
    </html>
  );
}