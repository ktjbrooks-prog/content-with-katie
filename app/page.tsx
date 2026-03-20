"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      text: "I am dyslexic and explained this to Katie and honestly what she created was exactly what I wanted! It’s taken the weight and stress off my shoulders!!!",
      author: "Small Business Owner",
    },
    {
      text: "Katie has pushed the business socials to another level! I’m so glad I found her!",
      author: "Beauty Business Owner",
    },
    {
      text: "It’s such a relief knowing my socials are in safe hands 💗",
      author: "Local Business Owner",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#ffdbe6] text-neutral-900 pt-24">

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
          <h1 className="font-semibold text-lg">Content With Katie 🩷</h1>

          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-2xl"
          >
            ☰
          </button>
        </div>

        <div className={`transition-all duration-300 ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
          <div className="flex flex-col items-center gap-6 pb-6 bg-white">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home 🫶🏻</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About Me ✨</Link>
            <Link href="/work" onClick={() => setMenuOpen(false)}>My Work 💗</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact 🥰</Link>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <motion.h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-widest">
          <span className="bg-white px-3 py-1 inline-block rotate-[-2deg] shadow">CONTENT</span>{" "}
          <span className="bg-white px-3 py-1 inline-block rotate-[2deg] shadow">WITH</span>{" "}
          <span className="bg-white px-3 py-1 inline-block rotate-[-1deg] shadow">KATIE</span>
        </motion.h1>

        <p className="text-xl mb-4">
          Content That Works, While You Work 🫶🏻✨
        </p>

        <p className="text-neutral-700 mb-6">
          Fully Insured and DBS Checked 🩷
        </p>

        <a href="https://calendly.com/contentwithkatie/30min" target="_blank">
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full">
            Book a Consultation 🥰
          </button>
        </a>
      </section>

      {/* PRICING */}
      <section className="py-16 text-center">
        <h2 className="text-3xl mb-10">Packages ✨</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl mb-2">Your Socials, But Cuter 🩷</h3>
            <p className="text-2xl">£150 / Week</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl mb-2">Let’s Get You SEEN ✨</h3>
            <p className="text-2xl">£260 / Week</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl mb-2">Main Character Energy Only 💅</h3>
            <p className="text-2xl">£310 / Week</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl mb-6">Client Love</h2>

        <div className="max-w-xl mx-auto bg-pink-50 p-6 rounded-2xl">
          <p>{testimonials[current].text}</p>
          <p className="mt-4 font-semibold">{testimonials[current].author}</p>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="py-16 text-center">
        <h2 className="text-3xl mb-6">Enquiry ✨</h2>

        {!submitted ? (
          <form
            action="https://formspree.io/f/xreyjdoo"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="max-w-xl mx-auto flex flex-col gap-4"
          >
            <input name="name" placeholder="Your Name" required className="p-3 border rounded-full" />
            <input type="email" name="email" placeholder="Your Email" required className="p-3 border rounded-full" />
            <textarea name="message" placeholder="Your Message" required className="p-3 border rounded-xl" />

            <button className="bg-pink-500 text-white py-3 rounded-full">
              Send Enquiry 🩷
            </button>
          </form>
        ) : (
          <p className="text-pink-600">Thank you — message sent 🫶🏻</p>
        )}
      </section>

    </div>
  );
}