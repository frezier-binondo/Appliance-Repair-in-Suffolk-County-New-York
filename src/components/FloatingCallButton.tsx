"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS_INFO } from "@/data/siteData";
import Link from "next/link";

export default function FloatingCallButton() {
  return (
    <>
      {/* Mobile Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 sm:hidden shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md transition-all active:scale-95"
        >
          <Phone className="w-4 h-4 fill-current animate-bounce" />
          <span>Call ({BUSINESS_INFO.phone})</span>
        </a>
        <Link
          href="/contact/"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md transition-all active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Repair</span>
        </Link>
      </div>

      {/* Desktop Floating Quick-Call Badge */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <div className="group relative">
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="flex items-center gap-3 pl-4 pr-5 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold shadow-2xl transition-all transform hover:scale-105 border-2 border-white/60 animate-pulse-subtle"
            aria-label="Call Dispatch"
          >
            <div className="w-9 h-9 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shadow">
              <Phone className="w-5 h-5 fill-current animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-900/80 leading-none">
                Suffolk Emergency Tech
              </span>
              <span className="text-base font-extrabold tracking-tight">
                {BUSINESS_INFO.phone}
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
