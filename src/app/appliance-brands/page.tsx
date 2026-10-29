import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, ArrowRight, CheckCircle2, Phone, Star } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import QuickBookingForm from "@/components/QuickBookingForm";
import { BUSINESS_INFO, CORE_BRANDS, SERVICES_LIST } from "@/data/siteData";

export const metadata = {
  title: "Appliance Brands We Repair | Suffolk County, NY",
  description: "We repair Whirlpool, GE, Samsung, LG, Sub-Zero, Wolf, Viking, Bosch and more in Suffolk County, NY. Call (631) 505-5046 to book.",
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/appliance-brands/",
  }
};

export default function ApplianceBrandsPage() {
  const brandCategories = [
    {
      title: "Mainstream Residential Brands",
      desc: "Everyday dependable household appliances found in homes across Suffolk County.",
      brands: ["Whirlpool", "GE & GE Profile", "Samsung", "LG", "Frigidaire", "Maytag", "Kenmore", "Amana", "Electrolux", "Speed Queen"]
    },
    {
      title: "Premium & Luxury Kitchen Suites",
      desc: "High-performance architectural appliances requiring specialized diagnostic training.",
      brands: ["Sub-Zero", "Wolf", "Viking", "Thermador", "Miele", "Bosch Benchmark", "KitchenAid", "Jenn-Air", "Dacor", "Gaggenau", "Fisher & Paykel"]
    },
    {
      title: "Commercial & Specialty Equipment",
      desc: "Heavy-duty restaurant, bar, and corporate cafeteria refrigeration and cooking equipment.",
      brands: ["True", "Hoshizaki", "Scotsman", "Manitowoc", "Vulcan", "Garland", "Hobart", "Traulsen", "Turbo Air", "InSinkErator", "U-Line"]
    }
  ];

  const internalLinks = [
    { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
    { anchor: "Refrigerator Repair", url: "/refrigerator-repair/" },
    { anchor: "Washing Machine Repair", url: "/washer-repair/" },
    { anchor: "Dryer Repair", url: "/dryer-repair/" },
    { anchor: "Dishwasher Repair", url: "/dishwasher-repair/" },
    { anchor: "Oven Repair", url: "/oven-repair/" },
    { anchor: "Contact Us & Book", url: "/contact/" }
  ];

  const externalLinks = [
    { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true },
    { anchor: "U.S. Consumer Product Safety Commission", url: "https://www.cpsc.gov/", isExternal: true }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Breadcrumbs items={[{ label: "Brands We Service" }]} />

      <section className="bg-gradient-to-r from-navy-950 via-brand-900 to-navy-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Certified Brand Diagnostics
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Appliance Brands We Repair in Suffolk County, NY
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Our certified technicians service virtually every major household, luxury, and commercial appliance brand, utilizing authentic OEM components to keep your appliances operating as engineered.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 seo-article">
        <div className="space-y-12">
          {brandCategories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-extrabold text-navy-950 mb-2">
                {cat.title}
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                {cat.desc}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cat.brands.map((b, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center text-sm font-bold text-slate-800 hover:bg-sky-50 hover:text-brand-700 transition-colors"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="prose-content max-w-4xl mx-auto my-16 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-xl font-bold text-navy-950">
            Why Factory-Certified OEM Parts Make a Difference
          </h3>
          <p>
            When an appliance fails, generic aftermarket replacement parts can cause electrical mismatches, poor efficiency, and shortened operational lifespans. We source factory-authorized OEM components directly from certified distributors, guaranteeing exact fitment and protecting your manufacturer warranty.
          </p>
        </div>

        <InternalLinkGrid
          internalLinks={internalLinks}
          externalLinks={externalLinks}
          title="Browse Repair Silos & Consumer Guidelines"
          subtitle="Direct links to specific appliance service pages and official safety standards."
        />

        <div className="max-w-3xl mx-auto mt-12">
          <QuickBookingForm title="Book Service for Your Brand" />
        </div>
      </section>
    </div>
  );
}
