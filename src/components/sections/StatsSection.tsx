"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { TrendingUp, Users, Building2, Award } from "lucide-react";

const icons = [TrendingUp, Users, Building2, Award];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-2xl mb-4 group-hover:bg-gold-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-black text-white mb-1 tabular-nums">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      delay={i * 0.15}
                      separator=","
                    />
                  ) : (
                    "0"
                  )}
                  <span className="text-gold-400">{stat.suffix}</span>
                </div>

                {/* Label */}
                <div className="text-white font-bold text-lg mb-1">{stat.label}</div>
                <div className="text-slate-400 text-sm">{stat.description}</div>

                {/* Divider (not last) */}
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
