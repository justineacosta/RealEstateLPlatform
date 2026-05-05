"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Star,
  Heart,
  Share2,
  Phone,
  Mail,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PropertyCard from "@/components/properties/PropertyCard";
import { properties } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { use } from "react";

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const property = properties.find((p) => p.id === id);

  if (!property) notFound();

  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const related = properties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, 3);

  const statusLabels: Record<string, string> = {
    "for-sale": "For Sale",
    "for-rent": "For Rent",
    sold: "Sold",
    featured: "Featured",
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-gold-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/properties"
              className="hover:text-gold-600 transition-colors"
            >
              Properties
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium truncate max-w-xs">
              {property.title}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Back button */}
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-gold-600 transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to listings
            </Link>

            {/* Image Gallery */}
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-4 shadow-xl group">
              <Image
                src={property.images[activeImage]}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Nav arrows */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImage((prev) =>
                        prev === 0 ? property.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/40 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImage((prev) =>
                        prev === property.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/40 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Status badge */}
              <div className="absolute top-5 left-5">
                <Badge
                  variant={
                    property.status === "for-sale"
                      ? "success"
                      : property.status === "for-rent"
                      ? "info"
                      : "gold"
                  }
                  className="text-sm px-4 py-1.5"
                >
                  {statusLabels[property.status]}
                </Badge>
              </div>

              {/* Actions */}
              <div className="absolute top-5 right-5 flex gap-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-sm border transition-all ${isWishlisted ? "bg-red-500 border-red-500 text-white" : "bg-white/20 border-white/30 text-white hover:bg-red-500 hover:border-red-500"}`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </button>
                <button className="w-11 h-11 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/40 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Image counter */}
              <div className="absolute bottom-5 right-5 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-xl">
                {activeImage + 1} / {property.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mb-8">
              {property.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${i === activeImage ? "border-gold-500 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Title & Price */}
            <div className="bg-white rounded-3xl p-8 mb-6 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-black text-slate-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="w-4 h-4 text-gold-500" />
                    <span>
                      {property.address}, {property.city}, {property.state}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-slate-900">
                    {property.priceUnit === "rent"
                      ? `${formatPrice(property.price)}/mo`
                      : formatPrice(property.price)}
                  </div>
                  <div className="flex items-center gap-1.5 justify-end mt-1">
                    <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                    <span className="font-semibold">{property.rating}</span>
                    <span className="text-slate-400 text-sm">
                      · {property.views} views
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Bed, label: "Bedrooms", value: property.bedrooms },
                  { icon: Bath, label: "Bathrooms", value: property.bathrooms },
                  { icon: Square, label: "Area", value: `${property.area.toLocaleString()} ${property.areaUnit}` },
                  { icon: CalendarDays, label: "Year Built", value: property.yearBuilt },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-gray-50 rounded-2xl p-4 text-center"
                  >
                    <Icon className="w-5 h-5 text-gold-500 mx-auto mb-2" />
                    <div className="font-bold text-slate-900 text-lg">{value}</div>
                    <div className="text-xs text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl p-8 mb-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                About This Property
              </h2>
              <p className="text-slate-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-3xl p-8 mb-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Property Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-28">
              <h3 className="font-bold text-slate-900 mb-5">
                Contact Agent
              </h3>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Image
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    width={64}
                    height={64}
                    className="rounded-2xl ring-2 ring-gold-200"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{property.agent.name}</p>
                  <p className="text-gold-600 text-sm">{property.agent.title}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                    <span className="text-sm font-semibold">{property.agent.rating}</span>
                    <span className="text-xs text-slate-400">
                      · {property.agent.totalSales} sales
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-3 mb-4">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                />
                <textarea
                  placeholder={`Hi, I'm interested in ${property.title}. Please contact me.`}
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
                />
              </div>

              <Button variant="gold" className="w-full rounded-xl mb-3">
                <Mail className="w-4 h-4" />
                Send Message
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <a href={`tel:${property.agent.phone}`}>
                  <Button variant="outline" size="sm" className="w-full rounded-xl gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </Button>
                </a>
                <Button variant="outline" size="sm" className="w-full rounded-xl gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Schedule
                </Button>
              </div>

              <p className="text-xs text-slate-400 text-center mt-4">
                By messaging, you agree to our Terms of Service
              </p>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-black text-slate-900 mb-8">
              Similar Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
