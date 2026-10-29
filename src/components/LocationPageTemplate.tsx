import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, ShieldCheck, Clock, CheckCircle2, AlertTriangle, 
  MapPin, Star, ArrowRight, Wrench, Sparkles, HelpCircle 
} from "lucide-react";
import { LocationDetail, BUSINESS_INFO, SERVICES_LIST, LOCATIONS_LIST } from "@/data/siteData";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickBookingForm from "@/components/QuickBookingForm";
import InternalLinkGrid from "@/components/InternalLinkGrid";

interface LocationPageTemplateProps {
  location: LocationDetail;
  deepLocalContent: {
    historyAndHomes: string;
    waterAndClimate: string;
    serviceSpecifics: { appliance: string; localScenario: string; repairFix: string }[];
    neighborhoodProfiles: { name: string; notes: string }[];
  };
}

export default function LocationPageTemplate({ location, deepLocalContent }: LocationPageTemplateProps) {
  // Town-specific Schema
  const townSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "name": `${BUSINESS_INFO.name} - ${location.townName}`,
    "telephone": BUSINESS_INFO.phone,
    "url": `https://suffolkcountyappliancerepair.com/${location.slug}/`,
    "areaServed": {
      "@type": "City",
      "name": location.townName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Suffolk County, NY"
      }
    },
    "description": location.metaDescription,
    "hasMap": BUSINESS_INFO.mapUrl,
    "openingHours": "Mo-Sa 07:00-20:00, Su 08:00-17:00"
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(townSchema) }}
      />

      <Breadcrumbs 
        items={[
          { label: "Locations", url: "/service-areas/" },
          { label: location.townName }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-950 via-brand-950 to-navy-900 text-white py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wide">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Dedicated {location.townName} Mobile Service Units</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {location.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              {location.shortDesc} Fast, professional appliance repair for homeowners, landlords, and businesses across {location.townName}. Upfront pricing, genuine parts, and our 90-day guarantee.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-lg transition-transform transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call {location.townName}: {BUSINESS_INFO.phone}</span>
              </a>
              <Link
                href="/contact/"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                Book Inspection Online
              </Link>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-300 pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                DCA #49281-H
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-amber-400" />
                Same-Day Windows
              </span>
              <span>&bull;</span>
              <span>90-Day Warranty</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
            <Image
              src={location.image}
              alt={`Appliance repair technicians serving homes across ${location.townName}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur p-4 rounded-xl border border-white/10 text-xs text-slate-200">
              <div className="font-bold text-white text-sm">
                Serving {location.townName} & Surrounding Hamlets
              </div>
              <p className="text-slate-400 mt-1 line-clamp-2">
                {location.neighborhoods.join(", ")}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Town SEO Article (2000 Words Locally Optimized) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 seo-article">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-10 prose-content">
            
            {/* Overview & Local Housing Character */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-sky-100 px-3 py-1 rounded-full">
                Localized Community Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3 mb-4">
                Specialized Appliance Repair for {location.townName} Homes & Estates
              </h2>
              <p className="text-slate-700 leading-relaxed text-base mb-4">
                {location.fullContentText}
              </p>
              <p className="text-slate-700 leading-relaxed text-base">
                {deepLocalContent.historyAndHomes}
              </p>
            </div>

            {/* Environmental, Water, & Power Context */}
            <div className="bg-sky-50/70 rounded-2xl p-6 sm:p-8 border border-sky-100 space-y-3">
              <h3 className="text-xl font-bold text-navy-950 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-600" />
                Local Operating Conditions in {location.townName}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {deepLocalContent.waterAndClimate}
              </p>
            </div>

            {/* In-depth Appliance Service Breakdown for this Town */}
            <div>
              <h2 className="text-2xl font-extrabold text-navy-950 mb-4">
                Appliance Services We Provide in {location.townName}
              </h2>
              <div className="space-y-5">
                {deepLocalContent.serviceSpecifics.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-2">
                    <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-brand-600" />
                      {item.appliance} in {location.townName}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong className="text-slate-900">Local Scenario:</strong> {item.localScenario}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong className="text-slate-900">Our Technical Fix:</strong> {item.repairFix}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specific Neighborhood Profiles */}
            <div>
              <h2 className="text-2xl font-extrabold text-navy-950 mb-3">
                Neighborhoods & Hamlets We Service Across {location.townName}
              </h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Our technicians are stationed locally to minimize dispatch response times across all hamlets and postal codes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deepLocalContent.neighborhoodProfiles.map((nh, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-sm text-brand-700 mb-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      {nh.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {nh.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnostics and Guarantees */}
            <div className="border-l-4 border-emerald-500 bg-emerald-50/50 p-6 rounded-r-2xl space-y-3">
              <h3 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                The {location.townName} Peace-of-Mind Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                We believe in total transparency. Our $89 diagnostic fee is completely waived if you authorize the repair. Every part installed and every minute of labor is backed by our full 90-Day Guarantee. If the same issue returns within 90 days, we fix it at zero extra charge.
              </p>
            </div>

            {/* Town FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                {location.townName} Appliance Repair FAQs
              </h2>
              <div className="space-y-3">
                {location.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-white rounded-xl p-4 border border-slate-200 shadow-sm open:ring-1 open:ring-brand-500"
                  >
                    <summary className="font-bold text-sm text-navy-950 cursor-pointer list-none select-none flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-brand-600 flex-shrink-0" />
                        {faq.q}
                      </span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform ml-2">
                        &darr;
                      </span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5 pt-2.5 border-t border-slate-100">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* Internal & External Links with Required Underline and Popup Styling */}
            <InternalLinkGrid
              internalLinks={location.internalLinks}
              externalLinks={location.externalLinks}
              title={`Internal Links & ${location.townName} Resources`}
              subtitle={`Explore related town hubs, appliance repair services, and official municipal resources.`}
            />

          </div>

          {/* Sidebar Conversion Card */}
          <div className="lg:col-span-4 space-y-6">
            <QuickBookingForm title={`Book Service in ${location.townName}`} />

            {/* Town Hotline Card */}
            <div className="bg-navy-950 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Phone className="w-5 h-5 fill-current animate-pulse" />
              </div>
              <h3 className="text-lg font-extrabold text-white">
                Emergency {location.townName} Dispatch
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Same-day response available for refrigeration warming and emergency laundry leaks across all {location.townName} postal codes.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="block text-center w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow transition-colors"
              >
                Call Now: {BUSINESS_INFO.phone}
              </a>
            </div>

            {/* Sister Towns Navigation */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-sm text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-600" />
                Nearby Suffolk County Markets
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {LOCATIONS_LIST.filter(l => l.id !== location.id).map((otherLoc) => (
                  <li key={otherLoc.slug}>
                    <Link
                      href={`/${otherLoc.slug}/`}
                      className="hover:text-brand-600 flex items-center justify-between py-1 border-b border-slate-100 last:border-none"
                    >
                      <span>Appliance Repair {otherLoc.townName}</span>
                      <span className="text-brand-500 font-bold">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}
