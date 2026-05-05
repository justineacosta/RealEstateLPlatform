"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, TrendingUp, Key, BarChart2, ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  TrendingUp,
  Key,
  BarChart2,
};

const colors = [
  { bg: "bg-gold-50", border: "border-gold-200", icon: "text-gold-600", iconBg: "bg-gold-100" },
  { bg: "bg-emerald-50", border: "border-emerald-200", icon: "text-emerald-600", iconBg: "bg-emerald-100" },
  { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-600", iconBg: "bg-blue-100" },
  { bg: "bg-purple-50", border: "border-purple-200", icon: "text-purple-600", iconBg: "bg-purple-100" },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-0.5 bg-gold-500" />
            Our Services
            <span className="w-8 h-0.5 bg-gold-500" />
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            What We{" "}
            <span className="bg-gradient-to-r from-gold-500 to-gold-700 bg-clip-text text-transparent">
              Can Do
            </span>{" "}
            For You
          </h2>
          <p className="text-slate-500 text-lg">
            Comprehensive real estate solutions tailored to your unique needs —
            from first-time buyers to seasoned investors.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const color = colors[i % colors.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group relative ${color.bg} ${color.border} border-2 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
              >
                {/* Background accent */}
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-20 bg-current" />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${color.iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${color.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className={`w-4 h-4 ${color.icon} flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href="/services"
                  className={`inline-flex items-center gap-2 font-semibold text-sm ${color.icon} hover:gap-3 transition-all duration-200`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="text-left">
              <p className="font-bold text-slate-900">Not sure which service fits you?</p>
              <p className="text-slate-500 text-sm">Let our experts guide you through the right path.</p>
            </div>
            <Link href="/contact">
              <Button variant="gold" className="rounded-xl whitespace-nowrap">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
