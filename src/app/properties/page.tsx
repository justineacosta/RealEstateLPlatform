"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  X,
  Grid3X3,
  List,
  MapPin,
  ChevronDown,
} from "lucide-react";
import PropertyCard from "@/components/properties/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  properties,
  propertyTypes,
  statusOptions,
  cityOptions,
} from "@/lib/data";

export default function PropertiesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedsFilter, setBedsFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const filtered = useMemo(() => {
    let result = [...properties];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q)
      );
    }

    if (statusFilter !== "all") {
      result = result.filter((p) => p.status === statusFilter);
    }

    if (typeFilter !== "all") {
      result = result.filter((p) => p.type === typeFilter);
    }

    if (cityFilter !== "all") {
      result = result.filter((p) => p.city === cityFilter);
    }

    if (minPrice) {
      result = result.filter((p) => p.price >= Number(minPrice));
    }
    if (maxPrice) {
      result = result.filter((p) => p.price <= Number(maxPrice));
    }

    if (bedsFilter !== "all") {
      const beds = Number(bedsFilter);
      result = result.filter((p) =>
        beds === 5 ? p.bedrooms >= 5 : p.bedrooms === beds
      );
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "popular":
        result.sort((a, b) => b.views - a.views);
        break;
    }

    return result;
  }, [search, statusFilter, typeFilter, cityFilter, minPrice, maxPrice, bedsFilter, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("all");
    setTypeFilter("all");
    setCityFilter("all");
    setMinPrice("");
    setMaxPrice("");
    setBedsFilter("all");
  };

  const hasActiveFilters =
    search || statusFilter !== "all" || typeFilter !== "all" ||
    cityFilter !== "all" || minPrice || maxPrice || bedsFilter !== "all";

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold-400" />
              Browse
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              All{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Properties
              </span>
            </h1>
            <p className="text-slate-400 text-lg">
              Discover {properties.length}+ premium listings across the country
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex gap-3"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by city, neighborhood, or property name..."
                className="pl-11 h-14 text-base bg-white border-0 shadow-xl rounded-2xl"
              />
            </div>
            <Button
              variant="gold"
              size="lg"
              className="rounded-2xl px-8 hidden sm:flex"
            >
              <Search className="w-5 h-5" />
              Search
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Row */}
        <div className="flex flex-wrap gap-3 mb-6">
          {/* Status Filter */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-8 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all cursor-pointer"
            >
              {statusOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Type Filter */}
          <div className="relative">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-8 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all cursor-pointer"
            >
              {propertyTypes.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* City Filter */}
          <div className="relative">
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-8 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all cursor-pointer"
            >
              {cityOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Beds Filter */}
          <div className="relative">
            <select
              value={bedsFilter}
              onChange={(e) => setBedsFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-8 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all cursor-pointer"
            >
              <option value="all">Any Beds</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3">3 Beds</option>
              <option value="4">4 Beds</option>
              <option value="5">5+ Beds</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Price Range */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2">
            <span className="text-xs text-slate-500 font-medium">Price:</span>
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-20 text-sm text-slate-700 focus:outline-none"
            />
            <span className="text-slate-300">—</span>
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-20 text-sm text-slate-700 focus:outline-none"
            />
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium hover:bg-red-100 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )}

          {/* Sort & View - right side */}
          <div className="ml-auto flex items-center gap-3">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-8 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 transition-colors duration-200 ${viewMode === "grid" ? "bg-gold-500 text-white" : "text-slate-500 hover:bg-gray-50"}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 transition-colors duration-200 ${viewMode === "list" ? "bg-gold-500 text-white" : "text-slate-500 hover:bg-gray-50"}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-600 text-sm">
            Showing{" "}
            <span className="font-bold text-slate-900">{filtered.length}</span>{" "}
            of{" "}
            <span className="font-bold text-slate-900">{properties.length}</span>{" "}
            properties
          </p>
          {hasActiveFilters && (
            <div className="flex items-center gap-1.5 text-sm text-gold-600">
              <SlidersHorizontal className="w-4 h-4" />
              Filters active
            </div>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {filtered.map((property, i) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={i}
                className={viewMode === "list" ? "max-w-none" : ""}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              No Properties Found
            </h3>
            <p className="text-slate-500 mb-6">
              Try adjusting your search filters to find more results.
            </p>
            <Button variant="gold" onClick={clearFilters} className="rounded-xl">
              Clear All Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
