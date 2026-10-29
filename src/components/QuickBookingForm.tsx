"use client";

import React, { useState } from "react";
import { Phone, Calendar, Clock, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import { BUSINESS_INFO, SERVICES_LIST, LOCATIONS_LIST } from "@/data/siteData";

export default function QuickBookingForm({ title = "Book Your Repair Visit Online" }: { title?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    appliance: "refrigerator-repair",
    town: "Huntington, NY",
    brand: "",
    symptoms: "",
    urgency: "Same-Day Priority"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8 relative overflow-hidden">
      {/* Accent corner banner */}
      <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-sm">
        $89 Diagnostic Waived with Repair
      </div>

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          No obligation. Transparent flat-rate quote provided before any repair starts.
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center animate-fade-in space-y-3">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-lg font-bold text-emerald-900">
            Appointment Request Received!
          </h4>
          <p className="text-xs sm:text-sm text-emerald-800">
            Thank you, <span className="font-semibold">{formData.name}</span>. A dispatch technician for <span className="font-semibold">{formData.town}</span> will call you shortly at <span className="font-semibold">{formData.phone}</span> to confirm your service window.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-700 text-white font-bold text-xs rounded-lg shadow hover:bg-brand-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Need Immediate Response? Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. John Miller"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="(631) 555-0199"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Appliance Type *
              </label>
              <select
                value={formData.appliance}
                onChange={(e) => setFormData({ ...formData, appliance: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
              >
                {SERVICES_LIST.map((srv) => (
                  <option key={srv.slug} value={srv.slug}>
                    {srv.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Suffolk County Town *
              </label>
              <select
                value={formData.town}
                onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
              >
                {LOCATIONS_LIST.map((loc) => (
                  <option key={loc.id} value={loc.townName}>
                    {loc.townName} (and nearby)
                  </option>
                ))}
                <option value="Other Suffolk Town">Other Suffolk County Hamlet</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Appliance Brand & Model (if known)
              </label>
              <input
                type="text"
                placeholder="e.g. Whirlpool, Sub-Zero, Bosch, LG..."
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Desired Timing
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
              >
                <option value="Same-Day Priority">Same-Day Priority (Call before 12pm)</option>
                <option value="Next-Day Morning">Next-Day Morning (8am - 12pm)</option>
                <option value="Next-Day Afternoon">Next-Day Afternoon (12pm - 4pm)</option>
                <option value="Weekend Appointment">Saturday / Weekend Window</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Brief Symptoms or Error Code
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Not cooling, making clicking noise, leaking water on floor..."
              value={formData.symptoms}
              onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Confirm Appointment Request &rarr;
          </button>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              90-Day Parts & Labor Guarantee
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-500" />
              Fast Dispatch
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
