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
      <body className="relative text-neutral-900 bg-[#ffe4ec]">

        {/* BACKGROUND LAYERS */}
        <div className="fixed inset-0 -z-10 
          bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.3)_0px,rgba(255,255,255,0.3)_2px,transparent_2px,transparent_40px)]" 
        />

        <div className="fixed inset-0 -z-10 
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_60%)]" 
        />

        {/* NAVBAR */}
        <div className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl shadow-lg z-50 border-b border-white/40">
          <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">

            {/* LOGO */}
            <img 
              src="/logo.png" 
              alt="Content With Katie Logo" 
              className="h-16 object-contain transition duration-300 hover:scale-105"
            />

            {/* BURGER */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-2xl hover:scale-110 transition"
            >
              ☰
            </button>
          </div>

          {/* DROPDOWN */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-6 pb-6 bg-white/90 backdrop-blur-md text-lg shadow-inner">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home 🫶🏻</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About ✨</Link>
              <Link href="/work" onClick={() => setMenuOpen(false)}>Work 💗</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact 🥰</Link>
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <main className="pt-28 px-2">
          {children}
        </main>

      </body>
    </html>
  );
}