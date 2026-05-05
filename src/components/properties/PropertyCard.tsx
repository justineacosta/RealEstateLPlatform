"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bed,
  Bath,
  Square,
  Heart,
  MapPin,
  Star,
  Eye,
  Share2,
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Property } from "@/types";
import { formatPrice, cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  className?: string;
  index?: number;
}

const statusConfig = {
  "for-sale": { label: "For Sale", variant: "success" as const },
  "for-rent": { label: "For Rent", variant: "info" as const },
  sold: { label: "Sold", variant: "destructive" as const },
  featured: { label: "Featured", variant: "gold" as const },
};

export default function PropertyCard({
  property,
  className,
  index = 0,
}: PropertyCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const statusInfo = statusConfig[property.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={cn("group h-full", className)}
    >
      <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-500 border border-gray-100 hover:border-gold-200 hover:-translate-y-1">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          {/* Slide strip */}
          <motion.div
            className="flex h-full"
            animate={{ x: `-${imageIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50 && imageIndex < property.images.length - 1)
                setImageIndex(imageIndex + 1);
              else if (info.offset.x > 50 && imageIndex > 0)
                setImageIndex(imageIndex - 1);
            }}
          >
            {property.images.map((src, i) => (
              <div key={i} className="relative flex-shrink-0 w-full h-full">
                <Image
                  src={src}
                  alt={`${property.title} ${i + 1}`}
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Prev / Next arrows */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.preventDefault(); setImageIndex(prev => Math.max(prev - 1, 0)); }}
                className={cn(
                  "absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-200 hover:bg-black/60",
                  imageIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                )}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.preventDefault(); setImageIndex(prev => Math.min(prev + 1, property.images.length - 1)); }}
                className={cn(
                  "absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-200 hover:bg-black/60",
                  imageIndex === property.images.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                )}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Top badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant={statusInfo.variant} className="shadow-sm">
              {statusInfo.label}
            </Badge>
            {property.isNew && (
              <Badge variant="dark" className="shadow-sm">
                New
              </Badge>
            )}
          </div>

          {/* Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={cn(
                "w-9 h-9 rounded-xl flex items-center justify-center shadow-md backdrop-blur-sm transition-all duration-200",
                isWishlisted
                  ? "bg-red-500 text-white"
                  : "bg-white/90 text-slate-700 hover:bg-red-50 hover:text-red-500"
              )}
            >
              <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
            </button>
            <button className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md text-slate-700 hover:bg-gold-50 hover:text-gold-600 transition-all duration-200">
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Dot indicators */}
          {property.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {property.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.preventDefault(); setImageIndex(i); }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-200",
                    i === imageIndex ? "bg-white w-4" : "bg-white/50 w-1.5"
                  )}
                />
              ))}
            </div>
          )}

          {/* Image count */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1.5 rounded-lg">
            <Camera className="w-3 h-3" />
            {imageIndex + 1}/{property.images.length}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Price & Rating */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {property.priceUnit === "rent"
                  ? `${formatPrice(property.price)}/mo`
                  : formatPrice(property.price, "USD", true)}
              </p>
              {property.priceUnit === "sale" && (
                <p className="text-xs text-slate-500 mt-0.5">
                  Full price: {formatPrice(property.price)}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1 bg-gold-50 text-gold-700 px-2.5 py-1.5 rounded-xl">
              <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
              <span className="text-xs font-semibold">{property.rating}</span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/properties/${property.id}`}>
            <h3 className="font-bold text-slate-900 text-lg mb-1 hover:text-gold-600 transition-colors duration-200 leading-snug">
              {property.title}
            </h3>
          </Link>

          {/* Address */}
          <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
            <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
            <span className="truncate">
              {property.address}, {property.city}, {property.state}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-200 mb-4" />

          {/* Stats */}
          <div className="flex items-center justify-between text-slate-600 text-sm mb-4">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center">
                <Bed className="w-3.5 h-3.5 text-gold-600" />
              </div>
              <span className="font-medium">{property.bedrooms}</span>
              <span className="text-slate-400 text-xs">Beds</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center">
                <Bath className="w-3.5 h-3.5 text-gold-600" />
              </div>
              <span className="font-medium">{property.bathrooms}</span>
              <span className="text-slate-400 text-xs">Baths</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center">
                <Square className="w-3.5 h-3.5 text-gold-600" />
              </div>
              <span className="font-medium">{property.area.toLocaleString()}</span>
              <span className="text-slate-400 text-xs">{property.areaUnit}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Image
                  src={property.agent.avatar}
                  alt={property.agent.name}
                  width={32}
                  height={32}
                  className="rounded-full ring-2 ring-gold-200"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border border-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800">
                  {property.agent.name}
                </p>
                <div className="flex items-center gap-1 text-slate-400">
                  <Eye className="w-3 h-3" />
                  <span className="text-xs">{property.views} views</span>
                </div>
              </div>
            </div>
            <Link href={`/properties/${property.id}`}>
              <Button
                variant="gold"
                size="sm"
                className="rounded-xl gap-1.5 text-xs px-3"
              >
                View
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
