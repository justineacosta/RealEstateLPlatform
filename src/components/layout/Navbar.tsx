"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Home,
  Building2,
  Users,
  Info,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/properties",
    label: "Properties",
    icon: Building2,
    children: [
      { href: "/properties?status=for-sale", label: "For Sale" },
      { href: "/properties?status=for-rent", label: "For Rent" },
      { href: "/properties?type=villa", label: "Villas" },
      { href: "/properties?type=penthouse", label: "Penthouses" },
    ],
  },
  { href: "/agents", label: "Agents", icon: Users },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow duration-300">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <span
                className={cn(
                  "text-xl font-bold tracking-tight transition-colors duration-300",
                  isScrolled ? "text-slate-900" : "text-white"
                )}
              >
                Estate
                <span className="text-gold-500">Prime</span>
              </span>
              <p
                className={cn(
                  "text-xs transition-colors duration-300 -mt-0.5",
                  isScrolled ? "text-slate-500" : "text-white/70"
                )}
              >
                Premium Real Estate
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/10",
                    isScrolled
                      ? "text-slate-700 hover:text-gold-600 hover:bg-gold-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeDropdown === link.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 py-2 overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-gold-50 hover:text-gold-600 transition-colors duration-150"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+15551234567"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors duration-200",
                isScrolled ? "text-slate-600 hover:text-gold-600" : "text-white/80 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              +1 (555) 123-4567
            </a>
            <div className={cn("w-px h-6", isScrolled ? "bg-gray-200" : "bg-white/20")} />
            <Link href="/properties">
              <Button
                variant={isScrolled ? "outline" : "white"}
                size="sm"
                className="rounded-xl"
              >
                Browse Listings
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="gold" size="sm" className="rounded-xl">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors duration-200",
              isScrolled
                ? "text-slate-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-gold-50 hover:text-gold-600 font-medium transition-colors duration-150"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-8 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="px-4 py-2 text-sm text-slate-600 hover:text-gold-600 hover:bg-gold-50 rounded-xl transition-colors duration-150"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link href="/properties" onClick={() => setIsMobileOpen(false)}>
                  <Button variant="outline" className="w-full rounded-xl">
                    Browse Listings
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                  <Button variant="gold" className="w-full rounded-xl">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
