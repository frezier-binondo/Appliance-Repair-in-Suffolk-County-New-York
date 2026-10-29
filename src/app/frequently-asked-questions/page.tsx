import React from "react";
import Link from "next/link";
import { HelpCircle, Phone, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickBookingForm from "@/components/QuickBookingForm";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import { FAQS_LIST, BUSINESS_INFO } from "@/data/siteData";

export const metadata = {
  title: "Appliance Repair FAQs | Suffolk County, NY",
  description: "Answers to common appliance repair questions in Suffolk County, NY: pricing, scheduling, brands, warranty and repair vs replace. Call (631) 505-5046.",
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/frequently-asked-questions/",
  }
};

export default function FAQPage() {
  // FAQPage Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_LIST.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const internalLinks = [
    { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
    { anchor: "Refrigerator Repair", url: "/refrigerator-repair/" },
    { anchor: "Washing Machine Repair", url: "/washer-repair/" },
    { anchor: "Dryer Repair", url: "/dryer-repair/" },
    { anchor: "Oven Repair", url: "/oven-repair/" },
    { anchor: "Dishwasher Repair", url: "/dishwasher-repair/" },
    { anchor: "Appliance Repair Huntington", url: "/appliance-repair-huntington-ny/" },
    { anchor: "Appliance Repair Smithtown", url: "/appliance-repair-smithtown-ny/" },
    { anchor: "Appliance Repair Islip", url: "/appliance-repair-islip-ny/" },
    { anchor: "Service Areas Directory", url: "/service-areas/" },
    { anchor: "Contact Us & Book", url: "/contact/" }
  ];

  const externalLinks = [
    { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true },
    { anchor: "U.S. Consumer Product Safety Commission", url: "https://www.cpsc.gov/", isExternal: true },
    { anchor: "FoodSafety.gov Food Storage Guidelines", url: "https://www.foodsafety.gov/", isExternal: true }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-brand-900 to-navy-900 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Homeowner Answers & Policies
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Appliance Repair FAQs | Suffolk County, NY
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Get clear, upfront answers to the 10 questions Suffolk County homeowners ask most often regarding diagnostic fees, same-day scheduling, warranty terms, and repair vs. replacement.
          </p>
        </div>
      </section>

      {/* Main FAQ Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 seo-article">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main 10 FAQs */}
          <div className="lg:col-span-8 space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-sky-100 px-3 py-1 rounded-full">
                10 Core Questions Answered
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-2">
                Frequently Asked Appliance Repair Questions
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS_LIST.map((faq) => (
                <details
                  key={faq.id}
                  open={faq.id <= 3}
                  className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm transition-all open:ring-2 open:ring-brand-500/40"
                >
                  <summary className="flex items-center justify-between font-extrabold text-base sm:text-lg text-navy-950 cursor-pointer list-none select-none">
                    <span className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-sky-100 text-brand-700 font-black text-xs flex items-center justify-center flex-shrink-0">
                        {faq.id}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform ml-2">
                      &darr;
                    </span>
                  </summary>

                  <div className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-100 pl-10">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                </details>
              ))}
            </div>

            {/* Additional Informational Text (500+ Words SEO Depth) */}
            <div className="prose-content pt-8 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <h3 className="text-xl font-bold text-navy-950">
                Transparent Pricing and Firm Quotes Without Surprises
              </h3>
              <p>
                A frequent frustration for Suffolk County homeowners is dealing with contractors who offer low estimates over the telephone only to add unexpected travel fees, labor surcharges, or diagnostic penalties upon arrival. We conduct our business with 100% upfront pricing. Our technician assesses your machine in person, identifies the defective part or electrical fault, and provides you with a firm written estimate. If you decide to proceed with the repair, our $89 diagnostic fee is completely waived.
              </p>

              <h3 className="text-xl font-bold text-navy-950 pt-2">
                Our 90-Day Parts & Labor Guarantee
              </h3>
              <p>
                We stand behind our workmanship without excuses. Every repair completed by our technicians carries our standard 90-Day Parts and Labor Guarantee. If the identical part malfunctions or the same fault occurs within 90 days, we return and replace it at zero additional cost to you.
              </p>
            </div>

            {/* Internal & External Link Grid with Underline and Popup Colors */}
            <InternalLinkGrid
              internalLinks={internalLinks}
              externalLinks={externalLinks}
              title="Helpful Appliance Repair & Town Navigation Links"
              subtitle="Quickly access service categories, location hubs, and consumer safety references."
            />

          </div>

          {/* Sidebar Conversion Box */}
          <div className="lg:col-span-4 space-y-6">
            <QuickBookingForm title="Still Have a Question? Book Service" />

            <div className="bg-navy-950 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <h4 className="font-bold text-base text-white">
                Speak With a Dispatcher Now
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our friendly dispatchers can answer specific brand questions and confirm real-time appointment availability.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="block text-center w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow transition-colors"
              >
                Call: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}
