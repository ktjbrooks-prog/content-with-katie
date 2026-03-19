"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#fff6f9] text-neutral-900">
      
      {/* Hero */}
      <section className="text-center py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-8 flex flex-wrap justify-center gap-3"
        >
          {"CONTENT WITH KATIE".split(" ").map((word, i) => (
            <span
              key={i}
              className="bg-white px-4 py-2 shadow-md rotate-[-2deg]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {word}
            </span>
          ))}
        </motion.h1>

        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-4 font-medium">
          Content That works, While You Work
        </p>

        <p className="text-md max-w-2xl mx-auto mb-10 text-neutral-500">
          Fully Insured and DBS checked
        </p>

        <a href="https://calendly.com/contentwithkatie/30min" target="_blank">
          <button className="bg-pink-400 hover:bg-pink-500 transition text-white px-10 py-4 rounded-full text-lg shadow-md">
            Book a Consultation
          </button>
        </a>
      </section>

      {/* Pricing */}
      <section className="bg-white py-24 px-6 text-center">
        <h2
          className="text-3xl mb-12"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { name: "Starter Presence", price: "£150" },
            { name: "Full Content & Visibility", price: "£260" },
            { name: "Full Content, Visibility & Growth", price: "£310" },
          ].map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl shadow-md bg-[#fff0f5]"
            >
              <h3 className="text-xl mb-3">{plan.name}</h3>
              <p className="text-3xl mb-4">{plan.price}</p>
              <p className="text-neutral-600">
                Tailored to elevate your brand presence
              </p>
            </motion.div>
          ))}
        </div>

        <a href="#enquiry">
          <p className="mt-12 text-pink-500 underline cursor-pointer">
            NOT WHAT YOU’RE LOOKING FOR?
          </p>
        </a>
      </section>

      {/* Instagram Preview */}
      <section className="py-24 text-center">
        <h2
          className="text-3xl mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Latest Work
        </h2>

        <p className="mb-6 text-neutral-500">
          See more on Instagram
        </p>

        <a
          href="https://www.instagram.com/contentwithkatie_"
          target="_blank"
        >
          <button className="border border-pink-400 text-pink-400 px-6 py-3 rounded-full hover:bg-pink-50">
            View Instagram
          </button>
        </a>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="py-24 px-6 text-center">
        <h2
          className="text-3xl mb-8"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Custom Enquiry
        </h2>

        {!submitted ? (
          <form
            action="https://formspree.io/f/xreyjdoo"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="max-w-xl mx-auto flex flex-col gap-4"
          >
            <input
              name="name"
              placeholder="Your Name"
              required
              className="p-4 border rounded-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-4 border rounded-full"
            />

            <textarea
              name="message"
              placeholder="Tell me what you need..."
              required
              className="p-4 border rounded-2xl h-32"
            />

            <button className="bg-pink-400 text-white py-3 rounded-full hover:bg-pink-500 transition">
              Send Enquiry
            </button>
          </form>
        ) : (
          <p className="text-lg text-pink-500">
            Thank you — your enquiry has been sent 💗
          </p>
        )}
      </section>

      {/* Contact */}
      <section className="bg-white py-20 text-center">
        <h2
          className="text-3xl mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Contact Me
        </h2>

        <p className="mb-4">Hellokatiecontent@gmail.com</p>

        <div className="flex flex-col gap-4 items-center">
          <a href="https://calendly.com/contentwithkatie/30min" target="_blank">
            <button className="bg-pink-400 text-white px-6 py-3 rounded-full">
              Book via Calendly
            </button>
          </a>

          <a
            href="https://www.instagram.com/contentwithkatie_"
            target="_blank"
          >
            <button className="border border-pink-400 text-pink-400 px-6 py-3 rounded-full hover:bg-pink-50">
              View Instagram
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Content With Katie
      </footer>
    </div>
  );
}