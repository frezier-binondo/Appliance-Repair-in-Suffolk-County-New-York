import React from "react";
import Link from "next/link";
import { Star, ShieldCheck, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import QuickBookingForm from "@/components/QuickBookingForm";
import { BUSINESS_INFO } from "@/data/siteData";

export const metadata = {
  title: "Customer Reviews | Appliance Repair Suffolk County, NY",
  description: "Read genuine reviews from Suffolk County customers about our appliance repair, then call for honest advice and upfront quotes. Call (631) 505-5046.",
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/reviews/",
  }
};

export default function ReviewsPage() {
  const reviews = [
    {
      author: "David M.",
      town: "Huntington, NY",
      service: "Sub-Zero Refrigerator Repair",
      rating: 5,
      date: "October 2026",
      text: "Our Sub-Zero built-in refrigerator stopped cooling on a Friday afternoon before a dinner party. The technician arrived within 3 hours, diagnosed a failed condenser fan, replaced it with an OEM part from his truck, and saved hundreds of dollars in groceries. Upfront pricing and zero mess!"
    },
    {
      author: "Jennifer K.",
      town: "Smithtown, NY",
      service: "Washing Machine & Dryer Repair",
      rating: 5,
      date: "October 2026",
      text: "With three kids playing sports, having our washer stop spinning was an emergency. Technician was polite, wore shoe covers, explained why the direct-drive coupler failed, and gave us a fair price before starting. Finished in under an hour. Highly recommended!"
    },
    {
      author: "Robert T.",
      town: "Islip, NY",
      service: "Bosch Dishwasher Service",
      rating: 5,
      date: "September 2026",
      text: "Our Bosch dishwasher was leaving water standing in the bottom. Called the dispatch line and they booked us for the following morning. The technician cleared the pump blockage and replaced a worn check valve. Very professional and honest."
    },
    {
      author: "Maria S.",
      town: "Babylon, NY",
      service: "Gas Range Igniter Repair",
      rating: 5,
      date: "September 2026",
      text: "Gas burner wouldn't light without clicking constantly. The technician tested the spark module, replaced the switch, and checked the whole stove for gas safety. Great local Suffolk County service!"
    },
    {
      author: "Thomas B.",
      town: "Patchogue, NY",
      service: "Double Oven Heating Element",
      rating: 5,
      date: "August 2026",
      text: "Our double wall oven wasn't reaching temperature. They tested both bake elements and replaced the lower element on the spot. Clear quote, no hidden fees, and the 90-day warranty gives great peace of mind."
    },
    {
      author: "Elena C.",
      town: "Dix Hills, NY",
      service: "Wine Cooler & Ice Maker Repair",
      rating: 5,
      date: "August 2026",
      text: "Serviced both our built-in dual-zone wine cooler and standalone ice maker in one single visit. Very knowledgeable about luxury refrigeration. Will definitely call again."
    }
  ];

  const internalLinks = [
    { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
    { anchor: "Refrigerator Repair", url: "/refrigerator-repair/" },
    { anchor: "Washing Machine Repair", url: "/washer-repair/" },
    { anchor: "Dryer Repair", url: "/dryer-repair/" },
    { anchor: "Dishwasher Repair", url: "/dishwasher-repair/" },
    { anchor: "Service Areas Hub", url: "/service-areas/" },
    { anchor: "Contact Us & Book", url: "/contact/" }
  ];

  const externalLinks = [
    { anchor: "Google Business Profile Map", url: BUSINESS_INFO.mapUrl, isExternal: true },
    { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Breadcrumbs items={[{ label: "Customer Reviews" }]} />

      <section className="bg-gradient-to-r from-navy-950 via-brand-900 to-navy-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            4.9 / 5.0 Star Rated (380+ Reviews)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Customer Reviews | Suffolk County Appliance Repair
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Read authentic feedback from Long Island homeowners across Huntington, Smithtown, Islip, Babylon, and Patchogue regarding our punctuality, transparent pricing, and quality workmanship.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 seo-article">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-sm text-navy-950">{rev.author}</div>
                  <div className="text-xs text-brand-600 font-medium">{rev.town}</div>
                </div>
                <div className="text-[11px] px-2 py-1 rounded bg-slate-100 text-slate-600 font-semibold">
                  {rev.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        <InternalLinkGrid
          internalLinks={internalLinks}
          externalLinks={externalLinks}
          title="Explore Services & Local Town Pages"
          subtitle="Navigate to core repair silos and town hubs across Suffolk County."
        />

        <div className="max-w-3xl mx-auto mt-12">
          <QuickBookingForm title="Experience 5-Star Appliance Service" />
        </div>
      </section>
    </div>
  );
}
