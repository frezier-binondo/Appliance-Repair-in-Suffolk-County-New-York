import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Wrench, Users, CheckCircle2, Phone, Star } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import QuickBookingForm from "@/components/QuickBookingForm";
import { BUSINESS_INFO } from "@/data/siteData";

export const metadata = {
  title: "About Us | Suffolk County Appliance Repair Company",
  description: "Meet Appliance Repair in Suffolk County New York, a local appliance repair company with honest pricing and careful service. Call (631) 505-5046.",
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/about-us/",
  }
};

export default function AboutUsPage() {
  const internalLinks = [
    { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
    { anchor: "Service Areas Directory", url: "/service-areas/" },
    { anchor: "Customer Reviews", url: "/reviews/" },
    { anchor: "Appliance Troubleshooting Blog", url: "/blog/" },
    { anchor: "Frequently Asked Questions", url: "/frequently-asked-questions/" },
    { anchor: "Contact Us & Book", url: "/contact/" }
  ];

  const externalLinks = [
    { anchor: "Town of Huntington", url: "https://www.huntingtonny.gov/", isExternal: true },
    { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Breadcrumbs items={[{ label: "About Us" }]} />

      <section className="bg-gradient-to-r from-navy-950 via-brand-900 to-navy-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            Local Long Island Craftsmanship
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About Appliance Repair in Suffolk County New York
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Founded with a simple and unbending commitment: diagnose faults properly, quote flat-rate prices honestly, and treat every homeowner's living space with absolute respect.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 seo-article">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6 prose-content text-slate-700 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Our Story & Service Standards
            </h2>
            <p>
              {BUSINESS_INFO.name} began as a team of dedicated local master technicians serving Long Island communities. Over years of hands-on service in Huntington, Smithtown, Islip, Babylon, and Patchogue, we recognized that homeowners were tired of misleading phone estimates, technicians who failed to carry common parts, and contractor pressure tactics.
            </p>
            <p>
              We established our team on three core principles:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>No Surprises:</strong> Complete diagnostic testing and a written price before any repair begins.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>Genuine Quality:</strong> Sourcing OEM parts backed by our 90-Day Parts and Labor Warranty.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>Respect for Your Home:</strong> Protective shoe covers, clean tool mats, and tidy work areas.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 relative h-80 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
              alt="Licensed appliance technician at work in Long Island"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        <InternalLinkGrid
          internalLinks={internalLinks}
          externalLinks={externalLinks}
          title="Explore Our Services & Suffolk County Town Hubs"
          subtitle="Direct links to repair silos, service areas, and reviews."
        />

        <div className="max-w-3xl mx-auto mt-12">
          <QuickBookingForm title="Book Your Diagnostic Visit" />
        </div>
      </section>
    </div>
  );
}
