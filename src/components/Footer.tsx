import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Clock, ExternalLink, Wrench, Star } from "lucide-react";
import { BUSINESS_INFO, SERVICES_LIST, LOCATIONS_LIST } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Highlight Banner in Footer */}
        <div className="bg-gradient-to-r from-brand-900 to-navy-900 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl border border-brand-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Top Rated Long Island Appliance Specialists
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need Appliance Service Today in Suffolk County?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Upfront flat-rate pricing, 90-day warranty on all parts and labor, and same-day emergency dispatch available across all Suffolk towns.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-lg shadow-lg hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <Link
              href="/contact/"
              className="flex items-center justify-center w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
            >
              Request Service Online
            </Link>
          </div>
        </div>

        {/* 4-Column Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow">
                <Wrench className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="block text-lg font-extrabold text-white leading-tight">
                  Appliance Repair
                </span>
                <span className="text-xs font-semibold text-brand-400">
                  in Suffolk County New York
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Professional, locally trusted repair services across all of Suffolk County, Long Island. We diagnose accurately, quote upfront, and repair major household and commercial appliances quickly.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{BUSINESS_INFO.license}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Serving all Suffolk County zip codes</span>
              </div>
            </div>
          </div>

          {/* Core Services Silo Links */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              Repair Services Silo
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_LIST.slice(0, 9).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}/`}
                    className="text-slate-400 hover:text-sky-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-brand-500">&rsaquo;</span>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/appliance-repair-services/"
                  className="inline-block pt-1 text-xs font-bold text-amber-400 hover:text-amber-300 underline"
                >
                  View All Services Hub &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Hubs */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Suffolk County Towns
            </h4>
            <ul className="space-y-2 text-sm">
              {LOCATIONS_LIST.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/${loc.slug}/`}
                    className="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-500/70" />
                    Appliance Repair {loc.townName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas/"
                  className="inline-block pt-1 text-xs font-bold text-amber-400 hover:text-amber-300 underline"
                >
                  View All Service Areas &rarr;
                </Link>
              </li>
            </ul>

            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-6 mb-2">
              Helpful Resources
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link href="/blog/" className="hover:text-white transition-colors">
                  Appliance Troubleshooting Blog
                </Link>
              </li>
              <li>
                <Link href="/frequently-asked-questions/" className="hover:text-white transition-colors">
                  Frequently Asked Questions (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors">
                  Contact & Diagnostic Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Official Links */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Dispatch & Authorities
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="flex items-start gap-2.5 text-white hover:text-amber-300 font-bold"
              >
                <Phone className="w-4 h-4 text-amber-400 mt-1" />
                <div>
                  <div>{BUSINESS_INFO.phone}</div>
                  <div className="text-xs font-normal text-slate-400">Direct Technician Dispatch</div>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span className="text-xs truncate">{BUSINESS_INFO.email}</span>
              </a>

              <div className="pt-2">
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Official Consumer Links:
                </span>
                <div className="flex flex-col gap-1.5 text-xs">
                  <a
                    href="https://www.energystar.gov/products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-300 hover:text-sky-200 underline"
                  >
                    ENERGY STAR® Certified Products <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.foodsafety.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-300 hover:text-sky-200 underline"
                  >
                    FoodSafety.gov Cold Storage Guide <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.cpsc.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-300 hover:text-sky-200 underline"
                  >
                    U.S. Consumer Product Safety Commission <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VISIBLE SUFFOLK COUNTY MAP SECTION (Prompt explicit requirement: add this map on the footer and make it visible https://maps.app.goo.gl/LMNaQs5pqdgLWyBH9) */}
        <div className="mt-12 pt-8">
          <div className="bg-navy-900 rounded-2xl p-6 border border-slate-800">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  Suffolk County, NY Local Service Territory Map
                </h4>
                <p className="text-xs text-slate-400">
                  Daily mobile coverage covering North Shore, South Shore, Central Suffolk, and the East End.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow transition-all"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embed visible responsive map */}
            <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden shadow-inner border border-slate-700">
              <iframe
                title="Appliance Repair in Suffolk County New York Service Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193306.96918667554!2d-73.35123964177567!3d40.829158300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82e3b2e50529d%3A0x6b245ffbc5505b38!2sSuffolk%20County%2C%20NY!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-105"
              ></iframe>
              <div className="absolute bottom-3 left-3 bg-navy-950/90 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Dispatch link:&nbsp;</span>
                <a
                  href={BUSINESS_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline font-semibold"
                >
                  {BUSINESS_INFO.mapUrl}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Disclaimer */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Licensed & Insured Home Appliance Service Contractor.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <span>&bull;</span>
            <Link href="/appliance-repair-services/" className="hover:text-slate-300 transition-colors">Services</Link>
            <span>&bull;</span>
            <Link href="/service-areas/" className="hover:text-slate-300 transition-colors">Locations</Link>
            <span>&bull;</span>
            <Link href="/contact/" className="hover:text-slate-300 transition-colors">Privacy & Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
