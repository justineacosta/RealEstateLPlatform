"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, MapPin, ChevronDown, Shield, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { statusOptions, propertyTypes } from "@/lib/data";

const heroImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=90",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=90",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=90",
];

const trustBadges = [
  { icon: Shield, label: "Verified Listings" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Zap, label: "Instant Alerts" },
];

const floatingCards = [
  {
    label: "Properties Sold",
    value: "4,200+",
    sub: "This Year",
    color: "from-gold-500 to-gold-600",
    position: "top-[20%] left-[5%]",
  },
  {
    label: "Avg. Client Rating",
    value: "4.9 ★",
    sub: "From 1,200+ reviews",
    color: "from-emerald-500 to-emerald-600",
    position: "bottom-[25%] left-[3%]",
  },
  {
    label: "New Listings",
    value: "89",
    sub: "Added this week",
    color: "from-blue-500 to-blue-600",
    position: "top-[15%] right-[5%]",
  },
];

export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [searchType, setSearchType] = useState("for-sale");
  const [propertyType, setPropertyType] = useState("all");
  const [location, setLocation] = useState("");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{ opacity: i === activeImage ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={img}
              alt="Hero property"
              fill
              className="object-cover"
              priority={i === 0}
              quality={90}
            />
          </motion.div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      {/* Floating Cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          className={`absolute hidden xl:block ${card.position} z-20`}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1 + i * 0.2, duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 shadow-2xl">
            <div
              className={`text-2xl font-black bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
            >
              {card.value}
            </div>
            <div className="text-white font-semibold text-sm">{card.label}</div>
            <div className="text-white/50 text-xs">{card.sub}</div>
          </div>
        </motion.div>
      ))}

      {/* Image Switcher */}
      <div className="absolute bottom-32 right-6 z-20 flex flex-col gap-2 hidden md:flex">
        {heroImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              i === activeImage
                ? "border-gold-400 scale-110 shadow-glow"
                : "border-white/30 opacity-60 hover:opacity-80"
            }`}
          >
            <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/30 backdrop-blur-sm text-gold-300 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            #1 Premium Real Estate Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Find Your{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Dream
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
            <br />
            Property with{" "}
            <span className="text-gold-400">Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-white/75 mb-10 leading-relaxed max-w-xl"
          >
            Expertly curated listings, personalized service, and seamless
            experiences to help you find the perfect property — backed by 15
            years of market expertise.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex items-center gap-6 mb-10"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/70 text-sm">
                <Icon className="w-4 h-4 text-gold-400" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl"
          >
            {/* Tabs */}
            <div className="flex gap-1 mb-3 px-2 pt-2">
              {statusOptions.slice(1).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSearchType(opt.value)}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    searchType === opt.value
                      ? "bg-gold-500 text-white shadow-md"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Search Inputs */}
            <div className="flex flex-col sm:flex-row gap-2">
              {/* Location */}
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, neighborhood, or address..."
                  className="w-full bg-white/15 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 rounded-xl pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:border-gold-400/60 focus:bg-white/20 transition-all duration-200"
                />
              </div>

              {/* Type */}
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="appearance-none bg-white/15 backdrop-blur-sm border border-white/20 text-white rounded-xl pl-4 pr-10 py-3.5 text-sm focus:outline-none focus:border-gold-400/60 focus:bg-white/20 transition-all duration-200 w-full sm:w-44"
                >
                  {propertyTypes.map((t) => (
                    <option key={t.value} value={t.value} className="text-slate-900 bg-white">
                      {t.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
              </div>

              {/* Search Button */}
              <Link
                href={`/properties?status=${searchType}&type=${propertyType}${location ? `&search=${location}` : ""}`}
              >
                <Button variant="gold" size="lg" className="rounded-xl whitespace-nowrap gap-2 w-full sm:w-auto">
                  <Search className="w-4 h-4" />
                  Search Properties
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-6"
          >
            <span className="text-white/50 text-sm">Popular:</span>
            {["New York", "Beverly Hills", "Miami", "Austin", "Aspen"].map((city) => (
              <Link
                key={city}
                href={`/properties?city=${city}`}
                className="text-white/70 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-1"
              >
                <MapPin className="w-3 h-3" />
                {city}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
}
