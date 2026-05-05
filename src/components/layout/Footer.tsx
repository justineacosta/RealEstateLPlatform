import Link from "next/link";
import {
  Home,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  properties: [
    { label: "Homes for Sale", href: "/properties?status=for-sale" },
    { label: "Homes for Rent", href: "/properties?status=for-rent" },
    { label: "Luxury Villas", href: "/properties?type=villa" },
    { label: "Penthouses", href: "/properties?type=penthouse" },
    { label: "New Listings", href: "/properties?isNew=true" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Agents", href: "/agents" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Newsletter Banner */}
      <div className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Stay Updated with Market Insights
              </h3>
              <p className="text-white/80 mt-1">
                Get exclusive listings and market reports delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 md:w-72 px-4 py-3 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Estate<span className="text-gold-400">Prime</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted partner in premium real estate. We help buyers,
              sellers, and investors make smarter decisions with market
              expertise and personalized service.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-slate-400 hover:text-gold-400 transition-colors duration-200 text-sm"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +1 (555) 123-4567
              </a>
              <a
                href="mailto:hello@estateprime.com"
                className="flex items-center gap-3 text-slate-400 hover:text-gold-400 transition-colors duration-200 text-sm"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                hello@estateprime.com
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                350 Fifth Avenue, New York, NY 10118
              </div>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-semibold text-white mb-5">Properties</h4>
            <ul className="space-y-3">
              {footerLinks.properties.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-gold-400 transition-colors duration-200 text-sm flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-gold-400 transition-colors duration-200 text-sm flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-5">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-gold-400 transition-colors duration-200 text-sm flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 EstatePrime. All rights reserved. Built with{" "}
            <span className="text-gold-500">♦</span> in New York.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 bg-slate-800 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
