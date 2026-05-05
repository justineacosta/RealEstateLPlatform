"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    sub: "Mon–Fri, 9am–7pm EST",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@estateprime.com",
    sub: "We reply within 2 hours",
    href: "mailto:hello@estateprime.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "350 Fifth Avenue",
    sub: "New York, NY 10118",
    href: "#",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri: 9am–7pm",
    sub: "Sat–Sun: 10am–4pm",
    href: "#",
  },
];

const topics = [
  "Buying a Property",
  "Selling a Property",
  "Rental Inquiries",
  "Property Investment",
  "Agent Partnership",
  "General Question",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-44 pb-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
          alt="Contact"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Get In Touch
            </p>
            <h1 className="text-5xl font-black text-white mb-4">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Whether you have a question, want to schedule a viewing, or need
              expert advice — our team is here to help.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Contact Information
            </h2>
            {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-gold-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gold-50 group-hover:bg-gold-100 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    {label}
                  </p>
                  <p className="font-bold text-slate-900">{value}</p>
                  <p className="text-slate-500 text-sm">{sub}</p>
                </div>
              </motion.a>
            ))}

            {/* Map Placeholder */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80"
                alt="Office location map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
                <div className="bg-white rounded-2xl px-5 py-3 shadow-lg text-center">
                  <MapPin className="w-6 h-6 text-gold-600 mx-auto mb-1" />
                  <p className="font-bold text-slate-900 text-sm">
                    350 Fifth Avenue
                  </p>
                  <p className="text-slate-500 text-xs">New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 mb-6">
                    Thank you for reaching out. One of our agents will get back
                    to you within 2 hours.
                  </p>
                  <Button
                    variant="gold"
                    onClick={() => setSubmitted(false)}
                    className="rounded-xl"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-500 mb-8">
                    Fill out the form below and we&apos;ll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="John Smith"
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="john@example.com"
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          placeholder="+1 (555) 000-0000"
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Topic *
                        </label>
                        <select
                          required
                          value={form.topic}
                          onChange={(e) =>
                            setForm({ ...form, topic: e.target.value })
                          }
                          className="w-full h-11 border border-input bg-background rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        >
                          <option value="">Select a topic...</option>
                          {topics.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Tell us about your real estate needs, preferred location, budget, timeline..."
                        className="w-full border border-input bg-background rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="mt-0.5 w-4 h-4 accent-gold-500"
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-slate-500"
                      >
                        I agree to receive communications from EstatePrime. You
                        can unsubscribe at any time. View our{" "}
                        <a
                          href="/privacy"
                          className="text-gold-600 hover:underline"
                        >
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full rounded-xl gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
