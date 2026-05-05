"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "15+ years of market expertise and proven results",
  "Over 4,200 families served with personalized guidance",
  "Exclusive access to off-market luxury properties",
  "Award-winning agents with local market knowledge",
  "Seamless end-to-end transaction support",
  "Investment portfolio management & advisory",
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80"
                alt="Modern luxury property"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

              {/* Play Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300 shadow-2xl">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </button>

              {/* Bottom Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4">
                  <p className="text-white font-bold text-lg">Our Signature Properties</p>
                  <p className="text-white/70 text-sm">Experience luxury redefined</p>
                </div>
              </div>
            </div>

            {/* Secondary Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80"
                alt="Interior design"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-6 -left-6 bg-gradient-to-br from-gold-500 to-gold-700 rounded-2xl p-5 shadow-xl shadow-gold-500/30"
            >
              <div className="text-4xl font-black text-white">15+</div>
              <div className="text-gold-100 text-sm font-medium">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-500" />
              About EstatePrime
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              We Are a{" "}
              <span className="bg-gradient-to-r from-gold-500 to-gold-700 bg-clip-text text-transparent">
                Full-Service
              </span>{" "}
              Property Agency
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We are a full-service property agency helping buyers, sellers, and
              investors make smarter real estate decisions. Our experienced agents
              blend deep market insight, modern technology, and personalized
              service to deliver transparent guidance, strong results, and
              long-term value.
            </p>

            <p className="text-slate-500 leading-relaxed mb-8">
              Our experienced team has successfully navigated countless market
              cycles, giving us the insight and expertise to guide you through
              any real estate journey — from your first home purchase to building
              a comprehensive investment portfolio.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-3 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button variant="gold" size="lg" className="gap-2 rounded-xl">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/agents">
                <Button variant="outline" size="lg" className="gap-2 rounded-xl">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
