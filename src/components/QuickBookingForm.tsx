"use client";

import React from "react";
import { Phone, Clock, ShieldCheck, CheckCircle2, Wrench, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";

export default function QuickBookingForm({ title = "Fast Diagnostic Dispatch" }: { title?: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8 relative overflow-hidden">
      {/* Accent corner banner */}
      <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-sm">
        $89 Diagnostic Waived with Repair
      </div>

      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
          <Phone className="w-3.5 h-3.5 text-brand-600" />
          Direct Dispatch Hotline
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Speak directly with our local Suffolk County dispatch coordinator for immediate appointment scheduling and same-day arrival windows.
        </p>
      </div>

      {/* Main Direct Call Box */}
      <div className="bg-gradient-to-br from-navy-950 via-brand-950 to-navy-900 rounded-2xl p-6 text-white text-center space-y-4 shadow-lg border border-brand-800">
        <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center mx-auto shadow-md">
          <Phone className="w-6 h-6 fill-current animate-pulse" />
        </div>

        <div>
          <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block">
            Central Dispatch Line
          </span>
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="text-2xl sm:text-3xl font-black text-white hover:text-amber-300 transition-colors tracking-tight block mt-1"
          >
            {BUSINESS_INFO.phone}
          </a>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Monday – Saturday: 7:00 AM – 8:00 PM <br />
          Sunday Emergency On-Call: 8:00 AM – 5:00 PM
        </p>

        <a
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          <Phone className="w-5 h-5 fill-current" />
          <span>Call To Schedule Now</span>
        </a>
      </div>

      {/* Trust Highlights List */}
      <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
          <span><strong>Same-Day Dispatch:</strong> Calls placed before 12:00 PM</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
          <span><strong>$89 Diagnostic Fee:</strong> 100% credited toward your approved repair</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
          <span><strong>90-Day Guarantee:</strong> Comprehensive parts and labor warranty</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-600 flex-shrink-0" />
          <span><strong>Suffolk County Licensed:</strong> DCA Lic #49281-H | EPA Universal</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
          <span><strong>Local Service:</strong> Huntington, Smithtown, Islip, Babylon, Patchogue</span>
        </div>
      </div>
    </div>
  );
}
