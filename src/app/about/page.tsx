"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Award, Users, Building2, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Award,
    title: "Excellence",
    desc: "We set the bar higher in every transaction, delivering results that exceed expectations.",
  },
  {
    icon: Users,
    title: "Client-First",
    desc: "Every decision we make centers around your goals, timeline, and best interests.",
  },
  {
    icon: Building2,
    title: "Market Mastery",
    desc: "Deep local knowledge and data-driven insights give our clients a competitive edge.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "A worldwide network connecting buyers and sellers across 200+ markets.",
  },
];

const milestones = [
  { year: "2010", event: "EstatePrime founded in New York City" },
  { year: "2013", event: "Expanded to 5 major metropolitan markets" },
  { year: "2016", event: "Launched proprietary property matching platform" },
  { year: "2019", event: "Surpassed $1 billion in transaction volume" },
  { year: "2022", event: "Named #1 luxury real estate platform nationally" },
  { year: "2025", event: "4,200+ families served, 50+ expert agents" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-48 pb-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
          alt="About hero"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                EstatePrime
              </span>
            </h1>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              We are a full-service property agency on a mission to make real estate
              transparent, accessible, and rewarding for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80"
                  alt="Our team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gold-500" />
                Our Mission
              </p>
              <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
                Making Real Estate Work{" "}
                <span className="gradient-text">For Everyone</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded in 2010, EstatePrime was built on the belief that real estate
                transactions should be transparent, efficient, and stress-free. We combine
                cutting-edge technology with personalized human service to deliver outcomes
                that matter.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Our team of 50+ dedicated professionals bring decades of combined experience
                to every transaction. We don&apos;t just help you find property — we help you
                make one of the most important decisions of your life with complete confidence.
              </p>

              {[
                "Transparent pricing with no hidden fees",
                "Award-winning client satisfaction program",
                "Technology-powered market analysis",
                "Dedicated agent from search to closing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-4">
              Our Core Values
            </p>
            <h2 className="text-4xl font-black text-slate-900">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl p-8 text-center border border-gray-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gold-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-4">
              Our Journey
            </p>
            <h2 className="text-4xl font-black text-slate-900">
              15 Years of Growth
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-300 to-gold-600" />
            {milestones.map(({ year, event }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`flex items-center gap-8 mb-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 inline-block shadow-sm">
                    <div className="text-gold-600 font-black text-xl mb-1">{year}</div>
                    <div className="text-slate-700 text-sm">{event}</div>
                  </div>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-md" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gold-500 to-gold-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands of satisfied clients who found their dream properties with EstatePrime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/properties">
              <Button variant="white" size="lg" className="rounded-xl gap-2">
                Browse Properties
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="dark"
                size="lg"
                className="rounded-xl"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
