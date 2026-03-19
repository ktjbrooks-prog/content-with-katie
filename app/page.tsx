"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 text-neutral-900 font-serif">
      
      {/* Hero */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          Content With Katie
        </motion.h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Content That Works While You Work.
        </p>

        <p className="text-md md:text-lg max-w-2xl mx-auto mb-8 text-neutral-600">
          Fully Insured and DBS checked.
        </p>

        <a href="https://calendly.com/contentwithkatie/30min" target="_blank">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl text-lg">
            Book a Consultation
          </button>
        </a>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Content Creation",
            "Full Management",
            "Growth Strategy",
          ].map((title, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-neutral-600">
                High-end social media service tailored to your brand.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "Starter Presence",
              price: "£150",
            },
            {
              name: "Full Content & Visibility",
              price: "£260",
            },
            {
              name: "Full Content, Visibility & Growth",
              price: "£310",
            },
          ].map((plan, i) => (
            <div key={i} className="p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-2xl mb-4">{plan.price}</p>
              <p>Custom tailored to your business needs.</p>
            </div>
          ))}
        </div>

        <a href="#enquiry">
          <p className="mt-10 text-pink-600 underline cursor-pointer font-semibold">
            NOT WHAT YOU’RE LOOKING FOR?
          </p>
        </a>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Custom Enquiry</h2>

        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input placeholder="Your Name" className="p-3 border rounded-xl" />
          <input placeholder="Your Email" className="p-3 border rounded-xl" />
          <textarea
            placeholder="Tell me what you need..."
            className="p-3 border rounded-xl h-32"
          />
          <button className="bg-pink-500 text-white py-3 rounded-xl">
            Send Enquiry
          </button>
        </form>
      </section>

      {/* Contact */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>

        <p className="mb-4">Email: Hellokatiecontent@gmail.com</p>

        <a href="https://calendly.com/contentwithkatie/30min" target="_blank">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-xl">
            Book via Calendly
          </button>
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Content With Katie
      </footer>
    </div>
  );
}