"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      text: "I am dyslexic and explained this to Katie and honestly what she created was exactly what I wanted! It’s taken the weight and stress off my shoulders!!!",
      author: "Client Review",
    },
    {
      text: "My business has the complete package! Katie provides an amazing service and has pushed the business socials to another level!",
      author: "Client Review",
    },
    {
      text: "It’s a relief that I can hand over my social media to someone I can trust.",
      author: "Client Review",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#ffe4ec] text-neutral-900 pt-24">

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">

          <h1 className="font-semibold text-lg">
            Content With Katie
          </h1>

          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-2xl"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col items-center gap-6 pb-6 bg-white">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About Me</Link>
            <Link href="/work" onClick={() => setMenuOpen(false)}>My Work</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6">
          Content With Katie 🩷
        </motion.h1>

        <p className="text-xl mb-4">
          Content That Works, While You Work ✨
        </p>

        <p className="text-neutral-600 mb-6">
          Helping busy business owners stay consistent, visible & booked 🫶🏻
        </p>

        <a href="https://calendly.com/contentwithkatie/30min" target="_blank">
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full">
            Book a Consultation 🥰
          </button>
        </a>
      </section>

      {/* RESULTS */}
      <section className="py-16 text-center">
        <h2 className="text-3xl mb-6">Results ✨</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-sm">📈 Consistent posting</div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">💬 Engagement</div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">💸 More enquiries</div>
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

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Content With Katie 🩷
      </footer>
    </div>
  );
}