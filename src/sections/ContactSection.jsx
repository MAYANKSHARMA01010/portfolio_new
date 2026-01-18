"use client";

import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      toast.error("Missing API Key. Check .env file.");
      console.error("Error: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is missing in .env");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error("Web3Forms Error:", data);
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      console.error("Submission Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-12 text-center bg-gradient-to-b from-[#020202] to-[#080808]"
    >
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
          Get In Touch
        </h2>
        <p className="text-white/70 mb-8">
          Have a question, idea, or opportunity? Let’s build something great together.
        </p>

        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-md text-left space-y-2">
          <p className="text-white/80 text-sm md:text-base flex justify-center">
            <strong className="text-cyan-400">Email: </strong>
            <a
              href="mailto:sharmamayank01010@gmail.com"
              className="hover:text-cyan-300 transition"
            >
              sharmamayank01010@gmail.com
            </a>
          </p>
          <p className="text-white/80 text-sm md:text-base flex justify-center">
            <strong className="text-cyan-400">Phone:</strong>
            <a
              href="tel:+919639398740"
              className="hover:text-cyan-300 transition"
            >
              +91 96393 98740
            </a>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg space-y-5"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="flex-1 p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="flex-1 p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-lg shadow-md transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
