"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay.current]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-500" />
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              What Our{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Clients
              </span>{" "}
              Say
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="min-w-[calc(100%-24px)] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300">
                  {/* Quote icon */}
                  <div className="w-10 h-10 bg-gold-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Quote className="w-5 h-5 text-gold-400" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 text-gold-400 fill-gold-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Property badge */}
                  <div className="inline-flex items-center gap-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
                    {testimonial.propertyType}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="relative">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={44}
                        height={44}
                        className="rounded-full ring-2 ring-gold-500/30"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-950" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-slate-400 text-xs">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto text-slate-500 text-xs">
                      {new Date(testimonial.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex -space-x-3">
            {testimonials.slice(0, 5).map((t) => (
              <Image
                key={t.id}
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full ring-2 ring-slate-950"
              />
            ))}
            <div className="w-10 h-10 bg-gold-500 rounded-full ring-2 ring-slate-950 flex items-center justify-center text-white text-xs font-bold">
              +
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">4.9/5</div>
            <div className="flex gap-0.5 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
            </div>
          </div>
          <div className="text-slate-400 text-sm max-w-xs">
            Based on{" "}
            <span className="text-white font-semibold">1,200+ verified reviews</span>{" "}
            from satisfied clients across all our services.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
