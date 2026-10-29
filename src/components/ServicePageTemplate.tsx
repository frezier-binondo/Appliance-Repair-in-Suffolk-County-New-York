import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, ShieldCheck, Clock, CheckCircle2, AlertTriangle, 
  MapPin, Star, ArrowRight, Wrench, Sparkles, HelpCircle 
} from "lucide-react";
import { ServiceDetail, BUSINESS_INFO, LOCATIONS_LIST } from "@/data/siteData";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickBookingForm from "@/components/QuickBookingForm";
import InternalLinkGrid from "@/components/InternalLinkGrid";

interface ServicePageTemplateProps {
  service: ServiceDetail;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  // Service Schema JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "serviceType": service.name,
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Suffolk County",
        "addressRegion": "NY",
        "addressCountry": "US"
      }
    },
    "areaServed": LOCATIONS_LIST.map(l => ({ "@type": "City", "name": l.townName })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.name} in Suffolk County`,
      "itemListElement": service.commonProblems.map((prob, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `${prob.title} for ${service.name}`
        }
      }))
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumbs 
        items={[
          { label: "Services", url: "/appliance-repair-services/" },
          { label: service.name }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-950 via-brand-950 to-navy-900 text-white py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wide">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Certified Suffolk County Specialists</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              {service.shortDesc} Expert technicians diagnosing genuine causes rather than guessing, backed by upfront quotes and our 90-day parts and labor warranty.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-lg transition-transform transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call {BUSINESS_INFO.phone}</span>
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
                90-Day Warranty
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-amber-400" />
                Same-Day Windows
              </span>
              <span>&bull;</span>
              <span>$89 Diagnostic Waived with Repair</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
            <Image
              src={service.image}
              alt={`${service.name} by local technicians in Suffolk County, NY`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur p-3.5 rounded-xl border border-white/10 text-xs text-slate-200">
              <div className="font-bold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Suffolk County Mobile Technician Route</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Daily service in Huntington, Smithtown, Islip, Babylon, and Patchogue.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Silo Content Body (800 - 1200 Words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 seo-article">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-10 prose-content">
            
            {/* Overview & Symptoms */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-sky-100 px-3 py-1 rounded-full">
                Common Symptoms & Diagnosis
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3 mb-4">
                Signs Your {service.name.replace(" Repair", "")} Needs Professional Attention
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Appliances rarely fail without warning signs. Addressing subtle operational abnormalities—such as minor cooling drops, slow cycle times, or unusual clicking sounds—prevents severe mechanical breakdowns and eliminates costly emergency food or property losses.
              </p>

              <div className="space-y-4">
                {service.commonProblems.map((prob, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-base text-navy-950 flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                      {prob.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
                      {prob.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnostic Protocol */}
            <div className="bg-sky-50/60 rounded-2xl p-6 sm:p-8 border border-sky-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                Our 5-Step {service.name} Protocol in Suffolk County
              </h2>
              <ol className="space-y-3">
                {service.processSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Brands Serviced */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-3">
                Brands We Service for {service.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Our technicians are trained on both mainstream household brands and high-end luxury systems. We carry factory OEM sensors, valves, and switches for:
              </p>
              <div className="flex flex-wrap gap-2">
                {service.brands.map((brand, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Maintenance Tips */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-3">
                Preventive Maintenance Tips from Our Technicians
              </h2>
              <ul className="space-y-2">
                {service.maintenanceTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs Specific to this Service */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-4">
                Frequently Asked Questions About {service.name}
              </h2>
              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
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

            {/* Required Internal & External Links with Popup Colors & Underlines */}
            <InternalLinkGrid
              internalLinks={service.internalLinks}
              externalLinks={service.externalLinks}
              title={`Related Silos & ${service.name} Town Hubs`}
              subtitle={`Connect directly with local town technicians or view related appliance repair silos across Suffolk County.`}
            />

          </div>

          {/* Sidebar Conversion Card & Quick Contact */}
          <div className="lg:col-span-4 space-y-6">
            <QuickBookingForm title={`Book ${service.name}`} />

            {/* Emergency Hotline Card */}
            <div className="bg-navy-950 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Phone className="w-5 h-5 fill-current animate-pulse" />
              </div>
              <h3 className="text-lg font-extrabold text-white">
                Urgent {service.name} Need?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If your appliance is leaking water, sparking, or spoiling groceries, speak directly to our dispatch coordinator for priority arrival.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="block text-center w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow transition-colors"
              >
                Call: {BUSINESS_INFO.phone}
              </a>
            </div>

            {/* Local Towns Served */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-sm text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-600" />
                Suffolk County Town Dispatch
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {LOCATIONS_LIST.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/${loc.slug}/`}
                      className="hover:text-brand-600 flex items-center justify-between py-1 border-b border-slate-100 last:border-none"
                    >
                      <span>{loc.townName}</span>
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
