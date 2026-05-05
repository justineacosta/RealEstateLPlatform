"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Phone, Mail, BadgeCheck, ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { agents } from "@/lib/data";

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-40 pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
          alt="Agents hero"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-0.5 bg-gold-400" />
              Our Experts
              <span className="w-6 h-0.5 bg-gold-400" />
            </p>
            <h1 className="text-5xl font-black text-white mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Expert
              </span>{" "}
              Team
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Award-winning agents with deep local market knowledge, proven track
              records, and a commitment to exceeding your expectations.
            </p>
          </motion.div>

          {/* Team Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-xl mx-auto">
            {[
              { icon: Users, value: "50+", label: "Expert Agents" },
              { icon: Award, value: "98%", label: "Client Satisfaction" },
              { icon: TrendingUp, value: "$2B+", label: "Properties Sold" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-slate-400 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:border-gold-200 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-72">
                <Image
                  src={agent.avatar}
                  alt={agent.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                {/* Verified */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-3 py-1.5 rounded-full text-sm">
                  <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                  <span className="font-bold">{agent.rating}</span>
                </div>

                {/* Contact overlay */}
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
                  <span className="text-xs bg-gold-50 text-gold-700 border border-gold-200 px-2.5 py-1 rounded-full">
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
    </div>
  );
}
