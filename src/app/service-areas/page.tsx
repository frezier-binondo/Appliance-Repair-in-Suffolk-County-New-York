import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, ShieldCheck, ArrowRight, Star, Clock, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickBookingForm from "@/components/QuickBookingForm";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import { BUSINESS_INFO, LOCATIONS_LIST, SERVICES_LIST } from "@/data/siteData";

export const metadata = {
  title: "Appliance Repair Service Areas | Suffolk County, NY",
  description: "We repair appliances in Huntington, Smithtown, Islip, Babylon, Patchogue and nearby Suffolk County towns. Upfront quotes. Call (631) 505-5046.",
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/service-areas/",
  }
};

export default function ServiceAreasPage() {
  const internalLinks = [
    { anchor: "Appliance Repair Huntington", url: "/appliance-repair-huntington-ny/" },
    { anchor: "Appliance Repair Smithtown", url: "/appliance-repair-smithtown-ny/" },
    { anchor: "Appliance Repair Islip", url: "/appliance-repair-islip-ny/" },
    { anchor: "Appliance Repair Babylon", url: "/appliance-repair-babylon-ny/" },
    { anchor: "Appliance Repair Patchogue", url: "/appliance-repair-patchogue-ny/" },
    { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
    { anchor: "Refrigerator Repair", url: "/refrigerator-repair/" },
    { anchor: "Washing Machine Repair", url: "/washer-repair/" },
    { anchor: "Contact Us", url: "/contact/" }
  ];

  const externalLinks = [
    { anchor: "Town of Huntington Official Site", url: "https://www.huntingtonny.gov/", isExternal: true },
    { anchor: "Town of Smithtown Official Site", url: "https://www.smithtownny.gov/", isExternal: true },
    { anchor: "Town of Islip Official Site", url: "https://www.islipny.gov/", isExternal: true }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Breadcrumbs items={[{ label: "Service Areas" }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-brand-900 to-navy-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Suffolk County Regional Directory
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Appliance Repair Service Areas in Suffolk County, NY
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Our certified mobile technicians are stationed across Suffolk County to deliver rapid, same-day and next-day appliance repair. Select your town hub below for localized service details, neighborhood coverage, and direct booking.
          </p>
        </div>
      </section>

      {/* Town Hubs Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 seo-article">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {LOCATIONS_LIST.map((town) => (
            <div
              key={town.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={town.image}
                  alt={`Appliance repair in ${town.townName}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 text-white">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Town Hub & Surrounding
                  </span>
                  <h3 className="text-xl font-extrabold">{town.townName}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {town.shortDesc}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    Hamlets & Neighborhoods Served:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {town.neighborhoods.slice(0, 5).map((nh, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px]">
                        {nh}
                      </span>
                    ))}
                    <span className="text-[11px] text-brand-600 font-semibold self-center">+ more</span>
                  </div>
                </div>

                <Link
                  href={`/${town.slug}/`}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-sky-50 text-brand-700 hover:bg-brand-600 hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Explore {town.townName} Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Localized Territory Context (SEO Content) */}
        <div className="prose-content max-w-4xl mx-auto space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base mb-16">
          <h2 className="text-2xl font-extrabold text-navy-950">
            Why Local Proximity Matters for Long Island Homeowners
          </h2>
          <p>
            When a refrigerator compressor halts or an emergency washing machine leak occurs, you cannot afford to wait days for a technician commuting through NYC bridge and expressway traffic. By maintaining dedicated mobile trucks across western, central, and eastern Suffolk County, Appliance Repair in Suffolk County New York reaches your door with minimal travel delays.
          </p>
          <p>
            Our technicians know the typical challenges of local housing stock: from the older plumbing configurations of Huntington historic homes, to the high-load laundry demands of Smithtown suburban families, and the coastal humidity of Islip, Babylon, and Patchogue along the Great South Bay.
          </p>
        </div>

        {/* Internal Link Grid */}
        <InternalLinkGrid
          internalLinks={internalLinks}
          externalLinks={externalLinks}
          title="Service Area Navigation & Town Authority Resources"
          subtitle="Direct links to town hubs, repair service silos, and official town resources."
        />

        {/* Booking Card */}
        <div className="max-w-3xl mx-auto mt-12">
          <QuickBookingForm title="Request Technician in Your Town" />
        </div>

      </section>
    </div>
  );
}
