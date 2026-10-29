import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, ShieldCheck, Clock, Award, CheckCircle2, AlertTriangle, 
  MapPin, Star, ArrowRight, Wrench, Sparkles, HelpCircle 
} from "lucide-react";
import QuickBookingForm from "@/components/QuickBookingForm";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import { BUSINESS_INFO, SERVICES_LIST, LOCATIONS_LIST, CORE_BRANDS, FAQS_LIST } from "@/data/siteData";

export const metadata = {
  title: "Appliance Repair Suffolk County, NY | Fast Local Service (631) 505-5046",
  description: "Fast, reliable appliance repair across Suffolk County, NY. Refrigerators, washers, dryers, ovens and more. Upfront quotes. Call (631) 505-5046.",
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/",
  }
};

export default function HomePage() {
  const homeInternalLinks = [
    { anchor: "Refrigerator Repair", url: "/refrigerator-repair/" },
    { anchor: "Freezer Repair", url: "/freezer-repair/" },
    { anchor: "Washing Machine Repair", url: "/washer-repair/" },
    { anchor: "Dryer Repair", url: "/dryer-repair/" },
    { anchor: "Dishwasher Repair", url: "/dishwasher-repair/" },
    { anchor: "Oven Repair", url: "/oven-repair/" },
    { anchor: "Stove & Range Repair", url: "/stove-range-repair/" },
    { anchor: "Cooktop Repair", url: "/cooktop-repair/" },
    { anchor: "Appliance Repair Huntington", url: "/appliance-repair-huntington-ny/" },
    { anchor: "Appliance Repair Smithtown", url: "/appliance-repair-smithtown-ny/" },
    { anchor: "Appliance Repair Islip", url: "/appliance-repair-islip-ny/" },
    { anchor: "Appliance Repair Babylon", url: "/appliance-repair-babylon-ny/" },
    { anchor: "Appliance Repair Patchogue", url: "/appliance-repair-patchogue-ny/" },
    { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
    { anchor: "Service Areas Hub", url: "/service-areas/" },
    { anchor: "Appliance Troubleshooting Blog", url: "/blog/" },
    { anchor: "Contact Us & Book", url: "/contact/" }
  ];

  const homeExternalLinks = [
    { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true },
    { anchor: "FoodSafety.gov Food Safety Cold Storage Guide", url: "https://www.foodsafety.gov/", isExternal: true },
    { anchor: "U.S. Consumer Product Safety Commission", url: "https://www.cpsc.gov/", isExternal: true }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-navy-950 via-brand-950 to-navy-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headings & Call to Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Suffolk County’s Trusted Local Appliance Specialists</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Appliance Repair in <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-300 to-amber-400">
                  Suffolk County, NY
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                When your refrigerator warms up, your washer floods the floor, or your oven goes cold, you need a repair technician you can trust. <strong className="text-white">Appliance Repair in Suffolk County New York</strong> provides professional, locally optimized appliance service across Long Island with upfront quotes, factory-certified parts, and our signature <strong className="text-amber-300">90-Day Guarantee</strong>.
              </p>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl p-3 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">DCA Lic #49281-H</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl p-3 border border-white/10">
                  <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">90-Day Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl p-3 border border-white/10 col-span-2 sm:col-span-1">
                  <Clock className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-100">Same-Day Dispatch</span>
                </div>
              </div>

              {/* Big CTA Phone Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-lg shadow-xl hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-6 h-6 fill-slate-950" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <Link
                  href="/contact/"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/25 transition-all text-center"
                >
                  <span>Schedule Service Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-xs text-slate-400 italic">
                * Diagnostic fee of $89 is 100% waived when you approve our written repair quote.
              </p>
            </div>

            {/* Right Column: Interactive Conversion Booking Box */}
            <div className="lg:col-span-5">
              <QuickBookingForm title="Fast Diagnostic Booking" />
            </div>

          </div>
        </div>
      </section>

      {/* BRAND TICKER STRIP */}
      <section className="bg-slate-100 py-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            Factory-Trained Technicians for All Major & Luxury Appliance Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-700 font-extrabold text-sm sm:text-base tracking-tight">
            {CORE_BRANDS.map((brand, i) => (
              <span key={i} className="hover:text-brand-600 transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT ARTICLE (2000+ Words locally optimized content) */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 seo-article">
        
        {/* SECTION 1: INTRODUCTION & OVERVIEW */}
        <div className="prose-content max-w-4xl mx-auto space-y-6">
          <div className="border-l-4 border-brand-600 pl-4 py-1">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">
              Long Island Household & Commercial Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
              Suffolk County’s Trusted Appliance Repair Company
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            When your refrigerator warms up, your washer floods the floor, or your oven goes cold, you need an appliance repair technician you can trust without reservation. <strong className="font-semibold text-slate-900">Appliance Repair in Suffolk County New York</strong> provides fast, professional, and locally targeted appliance repair across Suffolk County, Long Island. We service homeowners, renters, condominium associations, landlords, and commercial dining establishments. Our service philosophy is straightforward: we diagnose the underlying electrical or mechanical fault, explain it in plain language, and present a firm, flat-rate written quote before any repair work starts.
          </p>

          <p className="text-slate-700 leading-relaxed">
            Call <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="font-bold">{BUSINESS_INFO.phone}</a> or book online to secure the earliest appointment window. We provide comprehensive repair services for refrigerators, freezers, washing machines, dryers, dishwashers, wall ovens, stoves, cooktops, microwaves, ice makers, wine coolers, and garbage disposals, as well as commercial kitchen appliances and premium luxury equipment. All our repairs follow strict manufacturer guidelines and use genuine factory OEM replacement parts to preserve the longevity of your investment.
          </p>
        </div>

        {/* SECTION 2: CORE APPLIANCE SERVICES SILO CARDS */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-sky-100 px-3 py-1 rounded-full">
              Silo Structure
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950 mt-3">
              Our Comprehensive Appliance Repair Services
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Select an appliance category below to explore specific symptoms, diagnostic steps, common parts replaced, and localized repair hubs across Suffolk County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={`${service.name} in Suffolk County NY`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Suffolk County Service
                    </span>
                    <h3 className="text-xl font-extrabold">{service.name}</h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Frequent Failures We Resolve:
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {service.commonProblems.slice(0, 3).map((prob, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{prob.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3">
                    <Link
                      href={`/${service.slug}/`}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-sky-50 text-brand-700 hover:bg-brand-600 hover:text-white font-bold text-sm transition-all group-hover:bg-brand-600 group-hover:text-white"
                    >
                      <span>Explore {service.name}</span>
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: WHY SUFFOLK COUNTY HOMEOWNERS CALL US */}
        <section className="mt-20 bg-gradient-to-br from-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              The Suffolk County Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Long Island Homeowners Choose Our Technicians
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Household appliances are essential to everyday life. When they break down, service should be fast, honest, and technically sound. Here is what you can always count on:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black mb-4">
                $
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Upfront, Written Pricing</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                You receive a clear, flat-rate quote before any repair work commences. No surprise hourly charges, travel fees, or hidden markups.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-black mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Common Parts on Mobile Vans</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our service trucks are mobile warehouses stocked with factory OEM switches, pumps, belts, heating elements, and control boards for single-visit fixes.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">90-Day Parts & Labor Warranty</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every repair completed by our technicians is backed by our rock-solid 90-day parts and labor guarantee. We stand behind our workmanship completely.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-black mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Licensed & EPA Certified</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Fully licensed by the Suffolk County Department of Consumer Affairs (License #49281-H) and EPA Section 608 Universal Certified for safe refrigerant handling.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="w-10 h-10 rounded-xl bg-purple-500 text-white flex items-center justify-center font-black mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Clean, Respectful In-Home Work</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We wear shoe covers, protect your hardwood and tile floors, keep our work areas spotless, and treat your Long Island home as our own.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Honest Repair vs. Replace Advice</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                If an old appliance has exceeded its lifespan and a repair is not economically sound, we tell you frankly. We never push an unwise repair.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS STEP-BY-STEP */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-sky-100 px-3 py-1 rounded-full">
              Seamless Process
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950 mt-3">
              How Our Appliance Repair Process Works
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From your initial call to the final functional test, we make your appliance repair effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 font-black text-xl flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-bold text-lg text-navy-950 mb-2">Call or Book Online</h3>
              <p className="text-sm text-slate-600">
                Contact our dispatch team at <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="font-semibold text-brand-600">(631) 505-5046</a> or fill out our online request form detailing the symptoms.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 font-black text-xl flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-bold text-lg text-navy-950 mb-2">Prompt Scheduling</h3>
              <p className="text-sm text-slate-600">
                We assign the nearest mobile truck in Huntington, Smithtown, Islip, Babylon, or Patchogue, giving you a tight 2-hour arrival window.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 font-black text-xl flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-bold text-lg text-navy-950 mb-2">Thorough Diagnosis</h3>
              <p className="text-sm text-slate-600">
                Your technician inspects mechanical and electrical systems, identifies the root failure, and provides a firm written quote.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-black text-xl flex items-center justify-center mb-4">
                4
              </div>
              <h3 className="font-bold text-lg text-navy-950 mb-2">Repair & Warranty</h3>
              <p className="text-sm text-slate-600">
                With your approval, we install genuine parts, test the appliance through full operational cycles, and furnish your 90-day warranty.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: WHERE WE WORK - 5 KEY TOWN HUBS (Locally Optimized Content) */}
        <section className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
              Local Community Hubs
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950 mt-3">
              Appliance Repair Across Suffolk County Towns
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Each Long Island town presents distinctive architecture, water characteristics, and kitchen configurations. Explore our dedicated service hubs below:
            </p>
          </div>

          <div className="space-y-8">
            {LOCATIONS_LIST.map((town, idx) => (
              <div
                key={town.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-4 relative h-60 w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src={town.image}
                    alt={`Appliance repair service in ${town.townName}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-amber-300">
                    {town.townName} Hub
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-600 uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>Town Territory & Hamlets</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy-950">
                    <Link href={`/${town.slug}/`} className="hover:text-brand-600 transition-colors">
                      {town.h1}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {town.uniqueContext}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                      Neighborhoods Regularly Visited:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {town.neighborhoods.map((nh, nIdx) => (
                        <span
                          key={nIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                        >
                          {nh}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/${town.slug}/`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-800 underline"
                    >
                      <span>View full {town.townName} Hub & Neighborhood Pages</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-slate-300">|</span>
                    <a
                      href={`tel:${BUSINESS_INFO.rawPhone}`}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800"
                    >
                      Call {town.townName} Dispatch: {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: APPLIANCE CARE & PREVENTIVE MAINTENANCE TIPS */}
        <section className="mt-20 bg-sky-50/70 border border-sky-100 rounded-3xl p-8 sm:p-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 bg-sky-100 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-brand-600" />
              Expert Technician Advice
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Appliance Care Tips From Our Suffolk County Technicians
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Most catastrophic appliance breakdowns can be delayed or prevented entirely through simple maintenance habits. Vacuum your refrigerator condenser coils twice a year to ease compressor strain. Clean clothes dryer lint screens after every single load, and schedule an annual exterior dryer duct cleaning to eliminate fire hazards. Clean your dishwasher sump filter monthly to prevent food odor and spray arm clogs. On washing machines, leave the front door slightly ajar between loads to allow the rubber boot to dry and avoid mildew. Small, consistent maintenance steps dramatically prolong appliance lifespan and save thousands of dollars in premature replacement costs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-sky-100 shadow-sm">
                <h3 className="font-bold text-sm text-navy-950 mb-1">Spring Coil & Gasket Check</h3>
                <p className="text-xs text-slate-600">
                  Clean refrigerator condenser coils and check door gaskets with the dollar bill test to keep compressors running cool as summer heat approaches.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-sky-100 shadow-sm">
                <h3 className="font-bold text-sm text-navy-950 mb-1">Fall Dryer Vent Cleaning</h3>
                <p className="text-xs text-slate-600">
                  Inspect the exterior exhaust flapper and clean indoor exhaust lines before heavy winter indoor laundry puts extra demand on dryer thermal fuses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: REPAIR OR REPLACE? DECISION MATRIX */}
        <section className="mt-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Repair or Replace? How to Decide
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              A widely adopted rule of thumb in the appliance industry is that if a repair costs more than 50% of the price of a comparable brand-new replacement and the existing unit is past two-thirds of its expected operating lifespan, replacement deserves serious evaluation. Furthermore, newer models often carry superior <a href="https://www.energystar.gov/products" target="_blank" rel="noopener noreferrer" className="body-link">ENERGY STAR® certified</a> efficiency ratings, which lower your monthly electric and water bills.
            </p>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-700 font-extrabold uppercase border-b border-slate-200">
                  <tr>
                    <th className="p-3 sm:p-4">Appliance Type</th>
                    <th className="p-3 sm:p-4">Average Lifespan</th>
                    <th className="p-3 sm:p-4">When to Repair</th>
                    <th className="p-3 sm:p-4">When to Replace</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-slate-900">Refrigerator</td>
                    <td className="p-3 sm:p-4">12 – 15 Years</td>
                    <td className="p-3 sm:p-4">Fans, defrost timers, inlet valves, thermostats</td>
                    <td className="p-3 sm:p-4">Compressor locked up on units over 10 yrs</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-slate-900">Washing Machine</td>
                    <td className="p-3 sm:p-4">10 – 14 Years</td>
                    <td className="p-3 sm:p-4">Drain pumps, lid switches, belts, inlet valves</td>
                    <td className="p-3 sm:p-4">Cracked outer tub, rusted frame, bad bearings</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-slate-900">Clothes Dryer</td>
                    <td className="p-3 sm:p-4">11 – 14 Years</td>
                    <td className="p-3 sm:p-4">Heating elements, thermal fuses, rollers, belts</td>
                    <td className="p-3 sm:p-4">Severely corroded drum, old obsolete motor</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-slate-900">Dishwasher</td>
                    <td className="p-3 sm:p-4">9 – 12 Years</td>
                    <td className="p-3 sm:p-4">Drain pumps, door latches, gaskets, water valves</td>
                    <td className="p-3 sm:p-4">Rusted interior tub, failing main motor on old unit</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-bold text-slate-900">Oven & Range</td>
                    <td className="p-3 sm:p-4">13 – 16 Years</td>
                    <td className="p-3 sm:p-4">Igniters, surface elements, safety valves, sensors</td>
                    <td className="p-3 sm:p-4">Discontinued electronic boards on vintage units</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Our technicians always quote you transparent numbers and let you make the final decision. We never pressure you into an unviable repair.
            </p>
          </div>
        </section>

        {/* SECTION 8: SAFETY FIRST (GAS & ELECTRICAL WARNINGS) */}
        <section className="mt-16 bg-amber-50/80 border border-amber-200 rounded-3xl p-6 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950">
                Safety Comes First: When to Stop Using an Appliance
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If you ever smell gas, notice burning odors, observe electrical sparking, see standing water near electrical connections, or experience an overheating dryer cabinet, <strong className="text-red-700">stop using the appliance immediately</strong>. If you detect unburned natural gas or propane, evacuate all occupants from the home, avoid operating light switches or landline phones, and call National Grid (1-800-490-0045) or 911 from outside. Our technicians are trained in strict NFPA cooking and gas standards.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: PREPARING FOR YOUR APPOINTMENT */}
        <section className="mt-16 max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-950">
            Preparing for Your Technician's Visit
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            To ensure the fastest possible diagnosis and repair during your appointment window, we suggest having the brand and model number ready (typically found on a metallic label inside the door frame or behind the lower kickplate). Clearing the area around the appliance, taking note of error codes or unusual sounds, and keeping pets secured helps our technician get straight to work with the right diagnostic meters and parts.
          </p>
        </section>

        {/* SECTION 10: FREQUENTLY ASKED QUESTIONS (Accordion style preview) */}
        <section className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-sky-100 px-3 py-1 rounded-full">
              Suffolk County FAQs
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950 mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Common questions from Long Island homeowners about our appliance repair pricing, warranties, and scheduling.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS_LIST.slice(0, 6).map((faq) => (
              <details
                key={faq.id}
                className="group bg-white rounded-xl p-5 border border-slate-200 shadow-sm transition-all open:ring-1 open:ring-brand-500"
              >
                <summary className="flex items-center justify-between font-bold text-base text-navy-950 cursor-pointer list-none select-none">
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform ml-2">
                    &darr;
                  </span>
                </summary>
                <p className="text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                  {faq.answer}
                </p>
              </details>
            ))}

            <div className="text-center pt-4">
              <Link
                href="/frequently-asked-questions/"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-800 underline"
              >
                <span>View all 10+ Suffolk County Appliance Repair FAQs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 11: INTERNAL & EXTERNAL LINKS GRID (Required: 5+ internal & 1+ external with popup color & underline) */}
        <InternalLinkGrid
          internalLinks={homeInternalLinks}
          externalLinks={homeExternalLinks}
          title="Suffolk County Appliance Repair Directory & Silos"
          subtitle="Explore localized town service hubs, specific appliance repair sub-pages, and official consumer safety resources."
        />

        {/* SECTION 12: FINAL CONVERSION CALLOUT */}
        <section className="mt-16 bg-gradient-to-r from-brand-800 via-navy-900 to-brand-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Ready to Restore Your Appliance Today?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Call our Suffolk County dispatch team at <span className="font-extrabold text-amber-300">{BUSINESS_INFO.phone}</span> or book online. Fast arrival, honest upfront quotes, and 90-day peace of mind.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-lg transition-transform transform hover:scale-105"
              >
                Call {BUSINESS_INFO.phone} Now
              </a>
              <Link
                href="/contact/"
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </section>

      </article>

    </div>
  );
}
