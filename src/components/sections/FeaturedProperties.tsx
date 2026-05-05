"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/properties/PropertyCard";
import { properties } from "@/lib/data";

const filterTabs = [
  { label: "All", value: "all" },
  { label: "For Sale", value: "for-sale" },
  { label: "For Rent", value: "for-rent" },
  { label: "Featured", value: "featured" },
];

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? properties.filter((p) => p.isFeatured).slice(0, 6)
      : properties
          .filter(
            (p) =>
              p.status === activeFilter ||
              (activeFilter === "featured" && p.isFeatured)
          )
          .slice(0, 6);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-500" />
              Featured Listings
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-gold-500 to-gold-700 bg-clip-text text-transparent">
                Exquisite
              </span>
              <br />
              Featured Properties
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Link href="/properties">
              <Button variant="outline" size="sm" className="gap-2 rounded-xl">
                <SlidersHorizontal className="w-4 h-4" />
                All Filters
              </Button>
            </Link>
            <Link href="/properties">
              <Button variant="gold" size="sm" className="gap-2 rounded-xl">
                Explore All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-2 mb-10 flex-wrap"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeFilter === tab.value
                  ? "bg-gold-500 text-white shadow-md shadow-gold-500/25"
                  : "bg-white text-slate-600 hover:bg-gold-50 hover:text-gold-600 border border-gray-200"
              }`}
            >
              {tab.label}
              {tab.value === "all" && (
                <span
                  className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                    activeFilter === tab.value
                      ? "bg-white/20"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {properties.filter((p) => p.isFeatured).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-500">
            <p className="text-lg">No properties found for this filter.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setActiveFilter("all")}
            >
              Show All
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/properties">
            <Button variant="dark" size="lg" className="gap-2 rounded-xl">
              View All {properties.length}+ Properties
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
