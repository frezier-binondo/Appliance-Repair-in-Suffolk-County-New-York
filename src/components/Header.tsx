"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck, Menu, X, ChevronDown, Wrench, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, SERVICES_LIST, LOCATIONS_LIST } from "@/data/siteData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100 transition-all">
      {/* Top emergency announcement bar */}
      <div className="bg-gradient-to-r from-navy-950 via-brand-900 to-navy-950 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1 text-sky-300 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Licensed & Insured #49281-H
            </span>
            <span className="hidden sm:inline-block text-slate-400">|</span>
            <span className="flex items-center gap-1 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Serving All of Suffolk County, Long Island
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-200">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Same-Day Dispatch Available
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="flex items-center gap-1.5 font-bold text-amber-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current animate-pulse" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with explicit branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Wrench className="w-6 h-6 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-navy-950 tracking-tight leading-none group-hover:text-brand-600 transition-colors">
                Appliance Repair
              </span>
              <span className="text-xs sm:text-sm font-semibold text-brand-600 tracking-wide">
                in Suffolk County New York
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/appliance-repair-services/"
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-brand-600 py-2 transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 p-3 grid grid-cols-1 gap-1 animate-fade-in z-50">
                  <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Repair Silos
                  </div>
                  {SERVICES_LIST.slice(0, 9).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}/`}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-brand-600 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-2 pt-2">
                    <Link
                      href="/appliance-repair-services/"
                      className="block px-3 py-1.5 text-xs font-bold text-center text-brand-600 hover:text-brand-800 bg-sky-50 rounded-lg transition-colors"
                    >
                      View All 14+ Repair Services &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdown(true)}
              onMouseLeave={() => setLocationsDropdown(false)}
            >
              <Link
                href="/service-areas/"
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-brand-600 py-2 transition-colors"
              >
                Locations
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {locationsDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 p-3 grid grid-cols-1 gap-1 animate-fade-in z-50">
                  <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Suffolk County Town Hubs
                  </div>
                  {LOCATIONS_LIST.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/${loc.slug}/`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-brand-600 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      Appliance Repair in {loc.townName}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-2 pt-2">
                    <Link
                      href="/service-areas/"
                      className="block px-3 py-1.5 text-xs font-bold text-center text-brand-600 hover:text-brand-800 bg-sky-50 rounded-lg transition-colors"
                    >
                      View All Service Areas &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog/"
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors"
            >
              Blog & Guides
            </Link>

            <Link
              href="/frequently-asked-questions/"
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors"
            >
              FAQ
            </Link>

            <Link
              href="/contact/"
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Phone Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <div className="w-7 h-7 rounded-full bg-slate-950/15 flex items-center justify-center">
                <Phone className="w-4 h-4 fill-slate-950 text-slate-950 animate-bounce" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-extrabold tracking-wider text-slate-900/80">
                  Emergency Service
                </span>
                <span className="text-base font-extrabold tracking-tight">
                  {BUSINESS_INFO.phone}
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="p-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold sm:hidden"
              aria-label="Call Dispatch"
            >
              <Phone className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-3 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Home
          </Link>

          <div>
            <div className="py-2 text-base font-semibold text-slate-800 flex justify-between items-center">
              <span>Appliance Services</span>
              <Link
                href="/appliance-repair-services/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold text-brand-600"
              >
                View Hub
              </Link>
            </div>
            <div className="pl-3 space-y-1.5 pb-2 border-b border-slate-100">
              {SERVICES_LIST.slice(0, 9).map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}/`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm text-slate-600 hover:text-brand-600"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="py-2 text-base font-semibold text-slate-800 flex justify-between items-center">
              <span>Locations We Serve</span>
              <Link
                href="/service-areas/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold text-brand-600"
              >
                View Hub
              </Link>
            </div>
            <div className="pl-3 space-y-1.5 pb-2 border-b border-slate-100">
              {LOCATIONS_LIST.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/${loc.slug}/`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm text-slate-600 hover:text-brand-600"
                >
                  Appliance Repair {loc.townName}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blog/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Blog & Troubleshooting
          </Link>

          <Link
            href="/frequently-asked-questions/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            FAQ
          </Link>

          <Link
            href="/contact/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
          >
            Contact & Book Online
          </Link>

          <div className="pt-3">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-base shadow"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call Dispatch: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
