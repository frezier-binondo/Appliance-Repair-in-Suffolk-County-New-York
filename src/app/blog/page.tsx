import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, Clock, ArrowRight, ShieldCheck, Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import QuickBookingForm from "@/components/QuickBookingForm";
import { BLOG_POSTS, BUSINESS_INFO } from "@/data/siteData";

export const metadata = {
  title: "Appliance Repair Tips & Troubleshooting | Suffolk County, NY",
  description: "Troubleshooting guides and maintenance tips from Suffolk County appliance repair technicians. Fix small issues and know when to call. Call (631) 505-5046.",
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/blog/",
  }
};

export default function BlogHubPage() {
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
    { anchor: "Contact Us", url: "/contact/" }
  ];

  const externalLinks = [
    { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true },
    { anchor: "FoodSafety.gov Food Safety Cold Storage Guidance", url: "https://www.foodsafety.gov/", isExternal: true },
    { anchor: "U.S. Consumer Product Safety Commission", url: "https://www.cpsc.gov/", isExternal: true }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Breadcrumbs items={[{ label: "Appliance Troubleshooting Blog" }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-brand-900 to-navy-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Homeowner Knowledge Hub
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Appliance Repair Tips & Troubleshooting | Suffolk County
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Practical advice from our licensed Suffolk County technicians on diagnosing symptoms, DIY maintenance habits, energy-saving habits, and knowing when to call a professional.
          </p>
        </div>
      </section>

      {/* Main Blog Hub Content (500+ Words SEO Text) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 seo-article">
        
        {/* Intro Prose (Why We Share Advice) */}
        <div className="prose-content max-w-4xl mx-auto mb-16 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            Expert Troubleshooting Advice You Can Trust
          </h2>
          <p>
            When a major household appliance begins acting erratically—whether your refrigerator is clicking repeatedly without chilling, your washing machine won't drain its rinse water, or your gas stove igniters click continuously—the first challenge is determining whether the issue is a simple maintenance fix or requires a certified technician.
          </p>
          <p>
            Our technicians created this library of practical troubleshooting guides to empower Long Island homeowners. We explain how modern appliances function, how to recognize initial component fatigue before catastrophic failure strikes, and how proper seasonal maintenance protects your home against water damage, spoiled food, and electrical fire hazards.
          </p>

          {/* Seasonal Maintenance Routine Checklist */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm my-8">
            <h3 className="text-xl font-bold text-navy-950 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Suffolk County Homeowner Seasonal Maintenance Checklist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100">
                <span className="font-extrabold text-brand-800 uppercase text-xs block mb-1">
                  Spring Preparation:
                </span>
                <p className="text-slate-600">
                  Vacuum refrigerator condenser coils beneath the unit and check rubber door gaskets using a dollar bill to ensure tight magnetic contact before humid Long Island summer weather begins.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
                <span className="font-extrabold text-amber-800 uppercase text-xs block mb-1">
                  Summer Heat Monitoring:
                </span>
                <p className="text-slate-600">
                  Verify garage and basement freezers are holding 0°F. Replace refrigerator water filters every six months to protect internal ice maker solenoid valves from mineral clogs.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-100">
                <span className="font-extrabold text-orange-800 uppercase text-xs block mb-1">
                  Fall Fire Prevention:
                </span>
                <p className="text-slate-600">
                  Inspect and clean clothes dryer exhaust ductwork before heavy fall and winter laundry begins. Ensure exterior exhaust dampers swing freely and are not obstructed by leaves or nests.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-100">
                <span className="font-extrabold text-purple-800 uppercase text-xs block mb-1">
                  Winter Holiday Readiness:
                </span>
                <p className="text-slate-600">
                  Test oven bake elements, convection fans, and gas range igniters well before Thanksgiving and holiday dinner preparations. Clean dishwasher sump filters monthly to maintain sanitizing performance.
                </p>
              </div>
            </div>
          </div>

          <p>
            When an issue requires specialized diagnostic equipment—such as handling high-voltage microwave capacitors, testing sealed Freon systems, or diagnosing high-amperage heating elements—our licensed technicians are on standby throughout Suffolk County. Call <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="font-bold">{BUSINESS_INFO.phone}</a> for same-day service.
          </p>
        </div>

        {/* Featured Blog Posts Grid */}
        <div className="mb-16">
          <div className="border-b border-slate-200 pb-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Latest Troubleshooting Articles
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Read in-depth step-by-step diagnostic articles written by our local service crew.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
              >
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur px-2.5 py-1 rounded-md text-[11px] font-bold text-amber-300">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-950 group-hover:text-brand-600 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}/`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="text-xs font-bold text-brand-600 hover:text-brand-800 flex items-center gap-1 group-hover:underline"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href={post.servicePageUrl}
                      className="text-[11px] text-slate-400 hover:text-slate-600 underline"
                    >
                      {post.servicePageAnchor}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Required Internal & External Links with Underline and Popup Colors */}
        <InternalLinkGrid
          internalLinks={internalLinks}
          externalLinks={externalLinks}
          title="Appliance Troubleshooting & Town Navigation Directory"
          subtitle="Explore corresponding appliance repair services, local Suffolk County town hubs, and consumer safety guidance."
        />

        {/* Quick Booking Form */}
        <div className="max-w-3xl mx-auto mt-12">
          <QuickBookingForm title="Need Hands-On Troubleshooting from a Pro?" />
        </div>

      </section>
    </div>
  );
}
