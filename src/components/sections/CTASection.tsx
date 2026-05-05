"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=80"
              alt="Luxury property"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/50" />
          </div>

          <div className="relative z-10 p-10 md:p-16 lg:p-20">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-gold-400" />
                  Get Started Today
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                  Ready to Find Your{" "}
                  <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                    Dream Property?
                  </span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-10">
                  Whether you&apos;re buying, selling, or investing — our expert team is
                  ready to guide you through every step of your real estate journey.
                  Schedule a free consultation today.
                </p>
              </motion.div>

              {/* Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: Phone, label: "Call Us", sub: "+1 (555) 123-4567", href: "tel:+15551234567" },
                  { icon: Calendar, label: "Schedule Visit", sub: "Book a property tour", href: "/contact" },
                  { icon: MessageCircle, label: "Live Chat", sub: "Chat with an agent", href: "/contact" },
                ].map(({ icon: Icon, label, sub, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 hover:border-gold-400/40 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 bg-gold-500/20 rounded-xl flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-gold-400 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{label}</p>
                      <p className="text-slate-400 text-xs">{sub}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/properties">
                  <Button variant="gold" size="lg" className="gap-2 rounded-xl">
                    Browse Properties
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="white"
                    size="lg"
                    className="gap-2 rounded-xl"
                  >
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
              How It Works
            </p>
            <h3 className="text-3xl font-black text-slate-900">
              Simple 3-Step Process
            </h3>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Tell Us Your Needs",
                  desc: "Share your requirements, budget, and preferred location with our dedicated agent.",
                  color: "from-gold-400 to-gold-600",
                },
                {
                  step: "02",
                  title: "Explore & Tour",
                  desc: "Get personalized property recommendations and schedule in-person or virtual tours.",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  step: "03",
                  title: "Close the Deal",
                  desc: "We handle the paperwork, negotiations, and logistics for a seamless transaction.",
                  color: "from-emerald-400 to-emerald-600",
                },
              ].map(({ step, title, desc, color }, i) => (
                <div key={i} className="text-center relative">
                  <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${color} rounded-3xl text-white text-3xl font-black mb-6 shadow-lg`}>
                    {step}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
                  <p className="text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
