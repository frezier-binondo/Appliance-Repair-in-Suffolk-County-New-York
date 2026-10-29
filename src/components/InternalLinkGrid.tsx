import React from "react";
import Link from "next/link";
import { LinkItem } from "@/data/siteData";
import { ExternalLink, Link2, ArrowUpRight } from "lucide-react";

interface InternalLinkGridProps {
  internalLinks: LinkItem[];
  externalLinks?: LinkItem[];
  title?: string;
  subtitle?: string;
}

export default function InternalLinkGrid({
  internalLinks,
  externalLinks = [],
  title = "Related Repair Services & Suffolk County Locations",
  subtitle = "Navigate to our localized town hubs, related appliance repair silos, and official consumer guidelines."
}: InternalLinkGridProps) {
  return (
    <section className="my-12 p-6 sm:p-8 bg-sky-50/60 rounded-2xl border border-sky-100">
      <div className="flex items-center gap-2 mb-2">
        <Link2 className="w-5 h-5 text-brand-600" />
        <h3 className="text-xl font-bold text-navy-950">{title}</h3>
      </div>
      <p className="text-xs sm:text-sm text-slate-600 mb-6">{subtitle}</p>

      {/* Internal Links: styled with underline and popup ocean color on the body */}
      <div className="mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Internal Navigation Silos:
        </h4>
        <div className="flex flex-wrap gap-2.5">
          {internalLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              className="body-link inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white shadow-sm border border-sky-200 text-sm font-semibold text-sky-700 hover:text-sky-900 hover:border-brand-400 transition-all group"
            >
              <span>{item.anchor}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 group-hover:text-brand-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          ))}
        </div>
      </div>

      {/* External Links */}
      {externalLinks.length > 0 && (
        <div className="pt-4 border-t border-sky-200/60">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Official Consumer & Safety Authorities:
          </h4>
          <div className="flex flex-wrap gap-3">
            {externalLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="body-link inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors"
              >
                <span>{item.anchor}</span>
                <ExternalLink className="w-3 h-3 text-sky-500" />
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
