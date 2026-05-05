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
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:border-gold-200 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={agent.avatar}
                  alt={agent.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

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
                    className="flex-1 flex items-center justify-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white py-2 rounded-xl text-xs font-medium hover:bg-gold-500 hover:border-gold-500 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white py-2 rounded-xl text-xs font-medium hover:bg-gold-500 hover:border-gold-500 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-0.5">{agent.name}</h3>
                <p className="text-gold-600 text-sm font-medium mb-3">{agent.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {agent.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-dashed border-gray-200 mb-4">
                  {[
                    { label: "Sales", value: agent.totalSales },
                    { label: "Listings", value: agent.totalListings },
                    { label: "Years", value: agent.experience },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center">
                      <div className="text-lg font-black text-slate-900">{value}</div>
                      <div className="text-xs text-slate-400">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Specialties */}
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="text-xs bg-gold-50 text-gold-700 border border-gold-200 px-2.5 py-1 rounded-full font-medium">
                    {agent.specialties[0]}
                  </span>
                  {agent.specialties.length > 1 && (
                    <div className="relative group/tooltip">
                      <span className="cursor-default text-xs bg-slate-100 text-slate-500 border border-slate-200 px-2.5 py-1 rounded-full font-medium hover:bg-gold-50 hover:text-gold-700 hover:border-gold-200 transition-colors duration-200">
                        +{agent.specialties.length - 1}
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:flex flex-col gap-1.5 bg-white border border-gray-200 rounded-xl shadow-lg p-2.5 z-10 min-w-max">
                        {agent.specialties.slice(1).map((s) => (
                          <span
                            key={s}
                            className="text-xs bg-gold-50 text-gold-700 border border-gold-200 px-2.5 py-1 rounded-full font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link href={`/agents/${agent.id}`} className="mt-auto">
                  <Button variant="outline" className="w-full rounded-xl gap-2">
                    View Profile
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
