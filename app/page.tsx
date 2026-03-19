"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      text: "I am dyslexic and explained this to Katie and explained what I struggle with to what I am wanting to create and left it with her and honestly all I can say is what she created was exactly what I wanted! Whether you have the smaller package to the largest package you will not be disappointed and worth every penny you spend! It’s taken the weight and stress off my shoulders!!! Thank you so much Katie 🩷🩷🩷",
      author: "Client Review",
    },
    {
      text: "I found Katie on Facebook back in January and haven't looked back. My business has the complete package and it is THE COMPLETE PACKAGE! Katie provides an amazing service and has pushed the business socials to another level! I'm extremely thankful that I found Katie when I did and am looking forward to our continued success together :)",
      author: "Client Review",
    },
    {
      text: "I’ve been working with Katie for a month now and it’s a relief that I can hand over my social media to someone I can trust. Katie is approachable and really friendly and makes a big effort to engage 💜",
      author: "Client Review",
    },
    {
      text: "Katie helped me start my Facebook page, created my logo and helped me get my business off the ground socials wise - it helps me reach new customers instead of relying on word of mouth all the time, really appreciate everything she did to kick start my online presence!",
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
    <div className="min-h-screen bg-[#ffe4ec] text-neutral-900">

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
          Content That Works, While You Work 🫶🏻✨
        </p>

        <p className="text-md max-w-2xl mx-auto mb-6 text-neutral-600">
          Helping you stay consistent, visible & booked 🩷
        </p>

        <p className="text-md max-w-2xl mx-auto mb-10 text-neutral-500">
          Fully Insured and DBS Checked 🩷
        </p>

        <a href="https://calendly.com/contentwithkatie/30min" target="_blank">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-lg shadow-md">
            Book a Consultation 🥰
          </button>
        </a>
      </section>

      {/* Results */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
          Results ✨
        </h2>

        <p className="max-w-2xl mx-auto text-neutral-600 mb-10">
          Helping businesses show up consistently, attract clients, and grow their socials without the stress 🫶🏻
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p>📈 Consistent posting</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p>💬 Increased engagement</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p>💸 More enquiries</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 text-center bg-[#fff6f9]">
        <h2 className="text-3xl mb-10" style={{ fontFamily: "Playfair Display, serif" }}>
          How It Works ✨
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Book a consultation 🩷",
            "We plan your content together ✨",
            "I create & manage everything 🫶🏻",
            "You sit back & watch your socials grow 🥰",
          ].map((step, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow-sm">
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 text-center bg-white">
        <h2 className="text-3xl mb-12" style={{ fontFamily: "Playfair Display, serif" }}>
          Client Love
        </h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#ffeef3] p-8 rounded-3xl shadow-md"
          >
            <p className="text-lg mb-6 text-neutral-700">
              {testimonials[current].text}
            </p>

            <p className="font-semibold">{testimonials[current].author}</p>

            <p className="text-pink-500 mt-2">★★★★★</p>
          </motion.div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full ${
                  current === i ? "bg-pink-500" : "bg-pink-200"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="py-24 px-6 text-center">
        <h2 className="text-3xl mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
          Custom Enquiry ✨
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

            <button className="bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600">
              Send Enquiry 🩷
            </button>
          </form>
        ) : (
          <p className="text-lg text-pink-600">
            Thank you — your enquiry has been sent 🫶🏻
          </p>
        )}
      </section>

      {/* Contact */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-3xl mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
          Contact Me ✨
        </h2>

        <p className="mb-4">Hellokatiecontent@gmail.com 🩷</p>

        <div className="flex flex-col gap-4 items-center">
          <a href="https://calendly.com/contentwithkatie/30min" target="_blank">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full">
              Book via Calendly 🥰
            </button>
          </a>

          <a
            href="https://www.facebook.com/share/14ZNSZNuv8D/?mibextid=wwXIfr"
            target="_blank"
          >
            <button className="border border-pink-500 text-pink-500 px-6 py-3 rounded-full hover:bg-pink-50">
              View Facebook 🙋🏼‍♀️
            </button>
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Content With Katie 🩷
      </footer>
    </div>
  );
}