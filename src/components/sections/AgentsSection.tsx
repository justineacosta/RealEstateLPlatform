"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Phone, Mail, ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { agents } from "@/lib/data";

export default function AgentsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-500" />
              Our Team
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-gold-500 to-gold-700 bg-clip-text text-transparent">
                Expert
              </span>{" "}
              Agents
            </h2>
          </div>
          <Link href="/agents">
            <Button variant="outline" className="gap-2 rounded-xl">
              View All Agents
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gold-200 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={agent.avatar}
                  alt={agent.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                {/* Rating badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-3 py-1.5 rounded-full text-sm">
                  <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                  <span className="font-bold">{agent.rating}</span>
                </div>

                {/* Verified badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1.5 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified
                  </div>
                </div>

                {/* Contact buttons (hover) */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={`tel:${agent.phone}`}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white py-2 rounded-xl text-xs font-medium hover:bg-gold-500 hover:border-gold-500 transition-colors duration-200"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white py-2 rounded-xl text-xs font-medium hover:bg-gold-500 hover:border-gold-500 transition-colors duration-200"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-lg leading-snug mb-0.5">
                  {agent.name}
                </h3>
                <p className="text-gold-600 text-sm font-medium mb-4">{agent.title}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-dashed border-gray-200">
                  <div className="text-center">
                    <div className="text-xl font-black text-slate-900">{agent.totalSales}</div>
                    <div className="text-xs text-slate-500">Sales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-black text-slate-900">{agent.experience}yr</div>
                    <div className="text-xs text-slate-500">Experience</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {agent.specialties.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-gold-50 text-gold-700 border border-gold-200 px-2.5 py-1 rounded-full font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/agents/${agent.id}`}
                  className="block mt-4 text-center py-2.5 border-2 border-dashed border-gray-200 rounded-xl text-sm font-semibold text-slate-600 hover:border-gold-400 hover:text-gold-600 hover:bg-gold-50 transition-all duration-200"
                >
                  View Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
