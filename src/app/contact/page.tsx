import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, 
  ExternalLink, AlertTriangle, ArrowRight, Wrench 
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickBookingForm from "@/components/QuickBookingForm";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import { BUSINESS_INFO, LOCATIONS_LIST, SERVICES_LIST } from "@/data/siteData";

export const metadata = {
  title: "Contact Appliance Repair | Suffolk County, NY",
  description: "Book an appliance repair in Suffolk County, NY. Call (631) 505-5046 or request service online. Huntington, Smithtown, Islip, Babylon, Patchogue.",
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/contact/",
  }
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Appliance Repair in Suffolk County New York",
    "description": "Book appliance repair services across Suffolk County, NY.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Suffolk County",
        "addressRegion": "NY",
        "addressCountry": "US"
      },
      "hasMap": BUSINESS_INFO.mapUrl
    }
  };

  const internalLinks = [
    { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
    { anchor: "Refrigerator Repair", url: "/refrigerator-repair/" },
    { anchor: "Washing Machine Repair", url: "/washer-repair/" },
    { anchor: "Dryer Repair", url: "/dryer-repair/" },
    { anchor: "Oven Repair", url: "/oven-repair/" },
    { anchor: "Dishwasher Repair", url: "/dishwasher-repair/" },
    { anchor: "Service Areas Hub", url: "/service-areas/" },
    { anchor: "Appliance Repair Huntington", url: "/appliance-repair-huntington-ny/" },
    { anchor: "Appliance Repair Smithtown", url: "/appliance-repair-smithtown-ny/" },
    { anchor: "Appliance Repair Islip", url: "/appliance-repair-islip-ny/" },
    { anchor: "Appliance Troubleshooting Blog", url: "/blog/" },
    { anchor: "Frequently Asked Questions", url: "/frequently-asked-questions/" }
  ];

  const externalLinks = [
    { anchor: "Google Maps Dispatch Location", url: BUSINESS_INFO.mapUrl, isExternal: true },
    { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true },
    { anchor: "FoodSafety.gov Food Cold Storage Guidance", url: "https://www.foodsafety.gov/", isExternal: true }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-brand-900 to-navy-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            Suffolk County Dispatch Line
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact Appliance Repair in Suffolk County, NY
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Need an experienced technician today? Call <span className="font-extrabold text-amber-300">{BUSINESS_INFO.phone}</span> or complete our service request form below. We provide upfront quotes with zero hidden travel charges.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 seo-article">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Procedures */}
          <div className="lg:col-span-7 space-y-8 prose-content">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Direct Phone Line
                  </h3>
                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="text-xl font-extrabold text-navy-950 hover:text-brand-600 transition-colors block mt-1"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Available Monday – Saturday 7am – 8pm
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 mt-4 text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Same-Day Appointments
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-brand-700 flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Email Customer Support
                  </h3>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm font-bold text-navy-950 hover:text-brand-600 transition-colors block mt-1 break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Replies within 1-2 hours during business hours
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 mt-4 text-[11px] text-brand-600 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Licensed & Insured
                </div>
              </div>

            </div>

            {/* Operating Hours & Dispatch Details */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-600" />
                Operating Hours & Service Response
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900 block">Regular Service Hours:</span>
                  <p className="text-slate-600 mt-0.5">Monday – Saturday: 7:00 AM – 8:00 PM</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900 block">Sunday Emergency Calls:</span>
                  <p className="text-slate-600 mt-0.5">8:00 AM – 5:00 PM (Emergency Dispatch)</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We group appointments regionally across Huntington, Smithtown, Islip, Babylon, and Patchogue, providing tight 2-hour arrival windows with a courtesy call 30 minutes before arrival.
              </p>
            </div>

            {/* What to Have Ready */}
            <div className="bg-sky-50/70 rounded-2xl p-6 sm:p-8 border border-sky-100 space-y-3">
              <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-brand-600" />
                What to Have Ready When Contacting Us
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Appliance Brand and Model Number:</strong> Usually located on a metallic sticker inside the door frame or behind the lower kickplate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Description of the Malfunction:</strong> Error codes, buzzing sounds, leaking water, or non-heating elements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Access Notes:</strong> Gate codes, apartment elevator restrictions, or designated parking instructions.</span>
                </li>
              </ul>
            </div>

            {/* Emergency & Gas Safety Alert */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed">
                <strong className="text-amber-900 block mb-0.5 font-bold">Emergency Gas Odor or Active Flooding?</strong>
                If you smell unburned gas, evacuate immediately and call your gas utility (National Grid: 1-800-490-0045) or 911 from outside. If your washer or dishwasher is actively flooding, turn off the water shut-off valve behind the unit or under the sink.
              </div>
            </div>

            {/* Large Interactive Visible Map */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-extrabold text-navy-950 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    Suffolk County Service Area Map
                  </h3>
                  <p className="text-xs text-slate-500">
                    Centrally serving Western, Central, and Eastern Suffolk County, NY.
                  </p>
                </div>
                <a
                  href={BUSINESS_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-brand-700 hover:bg-brand-600 hover:text-white font-bold text-xs transition-colors"
                >
                  <span>Google Maps Pin</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative w-full h-80 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe
                  title="Appliance Repair in Suffolk County New York Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193306.96918667554!2d-73.35123964177567!3d40.829158300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82e3b2e50529d%3A0x6b245ffbc5505b38!2sSuffolk%20County%2C%20NY!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="text-xs text-slate-500 flex items-center justify-between">
                <span>Direct Map Link:</span>
                <a
                  href={BUSINESS_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline font-semibold"
                >
                  {BUSINESS_INFO.mapUrl}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-5">
            <QuickBookingForm title="Request Diagnostic Service" />
          </div>

        </div>

        {/* Required Internal & External Links with Underline and Popup Colors */}
        <InternalLinkGrid
          internalLinks={internalLinks}
          externalLinks={externalLinks}
          title="Suffolk County Repair Directory & Local Town Silos"
          subtitle="Direct links to our individual appliance repair pages, location hubs, and consumer safety guidance."
        />

      </section>
    </div>
  );
}
