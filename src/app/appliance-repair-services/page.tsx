import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, CheckCircle2, ArrowRight, Wrench, Star } from "lucide-react";
import QuickBookingForm from "@/components/QuickBookingForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import { BUSINESS_INFO, SERVICES_LIST, LOCATIONS_LIST } from "@/data/siteData";

export const metadata = {
  title: "Appliance Repair Services Suffolk County, NY | All Appliances",
  description: "Browse all appliance repair services in Suffolk County, NY: refrigerators, washers, dryers, ovens, dishwashers and more. Upfront quotes. Call (631) 505-5046.",
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/appliance-repair-services/",
  }
};

export default function ServicesHubPage() {
  const internalLinks = [
    { anchor: "Refrigerator Repair", url: "/refrigerator-repair/" },
    { anchor: "Freezer Repair", url: "/freezer-repair/" },
    { anchor: "Washing Machine Repair", url: "/washer-repair/" },
    { anchor: "Dryer Repair", url: "/dryer-repair/" },
    { anchor: "Dishwasher Repair", url: "/dishwasher-repair/" },
    { anchor: "Oven Repair", url: "/oven-repair/" },
    { anchor: "Stove & Range Repair", url: "/stove-range-repair/" },
    { anchor: "Cooktop Repair", url: "/cooktop-repair/" },
    { anchor: "Microwave Repair", url: "/microwave-repair/" },
    { anchor: "Appliance Repair Huntington", url: "/appliance-repair-huntington-ny/" },
    { anchor: "Appliance Repair Smithtown", url: "/appliance-repair-smithtown-ny/" },
    { anchor: "Appliance Repair Islip", url: "/appliance-repair-islip-ny/" },
    { anchor: "Appliance Repair Babylon", url: "/appliance-repair-babylon-ny/" },
    { anchor: "Appliance Repair Patchogue", url: "/appliance-repair-patchogue-ny/" },
    { anchor: "Home", url: "/" },
    { anchor: "Contact Us", url: "/contact/" }
  ];

  const externalLinks = [
    { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true },
    { anchor: "U.S. Consumer Product Safety Commission", url: "https://www.cpsc.gov/", isExternal: true }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Breadcrumbs items={[{ label: "Appliance Repair Services" }]} />

      {/* Silo Header Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-brand-900 to-navy-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              Comprehensive Repair Silo Hub
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Appliance Repair Services in Suffolk County, NY
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Suffolk County households and commercial businesses rely on essential kitchen and laundry appliances every single day. Whether you need a rapid diagnostic for a refrigerator that stopped cooling or factory-certified service on a luxury gas range, our local technicians are ready to help with upfront quotes and our 90-day guarantee.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <span className="text-xs text-slate-400">
                Diagnostic fee waived 100% when repair is authorized.
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>The Suffolk Repair Standard</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Firm flat-rate quote before any work starts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>90-Day Parts & Labor Guarantee on all jobs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Certified OEM components carried on mobile vans</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Emergency same-day dispatch across Suffolk County</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Silo Navigation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 seo-article">
        
        {/* Core Services Silo Grid */}
        <div className="mb-16">
          <div className="border-b border-slate-200 pb-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Core Appliance Repair Services
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Select an appliance below to view detailed failure symptoms, diagnostic procedures, common OEM parts, and local neighborhood availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.slice(0, 9).map((service, idx) => (
              <div
                key={service.slug}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
              >
                <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.name} in Suffolk County, NY`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-400">
                      Silo Page #{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold">{service.name}</h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <span className="font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Key Diagnostic Checks:
                    </span>
                    {service.commonProblems.slice(0, 2).map((item, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span className="truncate">{item.title}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/${service.slug}/`}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-sky-50 text-brand-700 hover:bg-brand-600 hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>View {service.name} Silo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Localized Town Hub Cross-Linking Section */}
        <section className="my-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Suffolk County Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-2">
              Local Appliance Repair by Town Hub
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Every Suffolk County town presents distinct infrastructure, from North Shore historic estates in Huntington to coastal waterfront communities in Islip and Patchogue. Visit each dedicated local hub below:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LOCATIONS_LIST.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}/`}
                className="p-5 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-brand-300 transition-all group"
              >
                <div className="text-xs font-bold text-amber-600 mb-1">Town Hub</div>
                <h3 className="font-extrabold text-navy-950 text-base group-hover:text-brand-600 transition-colors">
                  {loc.townName}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                  {loc.shortDesc}
                </p>
                <div className="mt-3 text-xs font-bold text-brand-600 flex items-center gap-1 group-hover:underline">
                  <span>Explore Town</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* In-Depth Informational Text (SEO Content 800+ Words) */}
        <div className="prose-content max-w-4xl mx-auto space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <h2 className="text-2xl font-extrabold text-navy-950">
            How Our Appliance Repair Diagnostics Work
          </h2>
          <p>
            When an appliance fails, guessing at the problem leads to costly misdiagnoses and unnecessary part replacements. At Appliance Repair in Suffolk County New York, our approach is built on precision testing. Our technicians carry digital multi-meters, thermal sensors, capacitor testers, and brand-specific diagnostic software to systematically test each component in the system.
          </p>
          <p>
            Whether addressing a front-load washing machine with a seized drain pump in Huntington, a French-door refrigerator failing to defrost in Smithtown, or a gas range igniter clicking continuously in Babylon, we isolate the exact electrical, hydraulic, or mechanical malfunction before ordering or installing parts.
          </p>

          <h3 className="text-xl font-bold text-navy-950 pt-2">
            Why Choose Genuine OEM Replacement Parts?
          </h3>
          <p>
            Generic, aftermarket components often have loose manufacturing tolerances and higher failure rates. We partner with authorized factory distributors to supply Original Equipment Manufacturer (OEM) parts for Whirlpool, GE, Samsung, LG, Bosch, Sub-Zero, and all other major manufacturers. OEM components fit precisely, maintain original energy efficiency ratings, and keep factory warranties intact.
          </p>

          <h3 className="text-xl font-bold text-navy-950 pt-2">
            Residential & Commercial Appliance Service Across Long Island
          </h3>
          <p>
            Beyond residential households, our technicians understand the urgent stakes of commercial downtime for restaurants, delis, bakeries, and cafes across Long Island. A malfunctioning commercial reach-in cooler or ice machine can halt operations in hours. We provide priority commercial dispatch to keep your kitchen operating in full health inspection compliance.
          </p>
        </div>

        {/* Required Internal & External Links with Underline and Popup Colors */}
        <InternalLinkGrid
          internalLinks={internalLinks}
          externalLinks={externalLinks}
          title="All Services Link Directory"
          subtitle="Navigate to core appliance repair pages, location hubs, and consumer safety guidance."
        />

        {/* Bottom Booking Card */}
        <div className="mt-12 max-w-3xl mx-auto">
          <QuickBookingForm title="Schedule Any Appliance Service" />
        </div>

      </section>
    </div>
  );
}
