import React from "react";
import LocationPageTemplate from "@/components/LocationPageTemplate";
import { LOCATIONS_LIST } from "@/data/siteData";
import { notFound } from "next/navigation";

const location = LOCATIONS_LIST.find((l) => l.slug === "appliance-repair-patchogue-ny");

export const metadata = {
  title: location?.metaTitle,
  description: location?.metaDescription,
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/appliance-repair-patchogue-ny/",
  }
};

const patchogueDeepContent = {
  historyAndHomes: `Patchogue is one of Long Island’s most vibrant South Shore success stories—a historic maritime village transformed into a thriving cultural and culinary destination. Surrounding Patchogue’s bustling downtown are established residential neighborhoods in East Patchogue, North Patchogue, Blue Point, Bellport, Medford, and Holbrook. The local architectural fabric combines turn-of-the-century seaside Victorian homes and craftsman bungalows with sleek, newly developed multi-story luxury condominiums along the Patchogue River and Great South Bay. In modernized downtown apartments and harbor condominiums, space is optimized with European-style integrated kitchen appliances, 24-inch space-saving dishwashers, and all-in-one ventless washer/dryer combos. Meanwhile, in surrounding suburban homes, families operate large-capacity French-door refrigerators, five-burner slide-in ranges, and basement deep freezes. Our technicians service both compact, high-efficiency urban appliances and heavy-duty suburban kitchen suites with equal proficiency.`,
  waterAndClimate: `Bordering the Great South Bay and the mouth of the Patchogue River, the local climate is defined by marine breezes and damp coastal summers. Moisture in the air can cause rapid condensation inside wine preservation chillers, bar ice machines, and residential refrigerators with weak door gaskets. In coastal condos where multiple units share vertical drainage stacks, improper dishwasher draining can cause back pressure or siphoning if check valves are worn. In the downtown culinary corridor, restaurants along Main Street and Ocean Avenue experience intense peak summer demands where commercial refrigeration condenser fans run non-stop in humid kitchen environments. Our team carries heavy-duty replacement fan motors, commercial water filters, and food-grade silicone seals specifically suited to Patchogue’s coastal microclimate.`,
  serviceSpecifics: [
    {
      appliance: "Condo & Apartment Space-Saving Refrigerator Repair",
      localScenario: "Modern downtown Patchogue condominiums feature integrated panel-ready and counter-depth refrigerators that demand careful diagnostic access without marring adjacent cabinetry.",
      repairFix: "We replace electronic damper motors, sealed system inverter boards, and magnetic perimeter seals, keeping cooling whisper-quiet."
    },
    {
      appliance: "Compact & Combo Laundry Unit Service",
      localScenario: "Multi-unit apartment buildings in Patchogue utilize compact stackable or all-in-one ventless heat-pump washer/dryer units where lint screens and drain filters need precision care.",
      repairFix: "We clear clogged internal condenser heat exchangers, replace drain pumps, and balance high-speed spin drums to eliminate structural apartment vibration."
    },
    {
      appliance: "Slide-In Cooking Range & Over-the-Range Microwave Repair",
      localScenario: "Smaller downtown kitchens heavily rely on slide-in induction ranges and integrated over-the-range microwave ventilation units that see frequent daily cooking use.",
      repairFix: "We replace high-voltage microwave diodes and magnetrons, repair induction surface power modules, and calibrate electric bake elements."
    },
    {
      appliance: "Dishwasher Drain & Disposal Diagnostics",
      localScenario: "In condos and waterfront homes, space-saving 18-inch and 24-inch dishwashers connected to compact garbage disposals must prevent leaks from reaching neighboring units below.",
      repairFix: "We install factory sump seals, replace anti-siphon valves, and clear disposal impeller jams to guarantee leak-free wash cycles."
    },
    {
      appliance: "Downtown Main Street Commercial Dining Refrigeration",
      localScenario: "Patchogue Village’s vibrant craft breweries, bars, seafood houses, and bistros rely on under-counter ice machines, bottle coolers, and walk-in boxes that cannot fail on busy weekends.",
      repairFix: "We provide emergency same-day commercial dispatch to replace failed thermostatic expansion valves (TXVs), fan motors, and ice maker sensors."
    }
  ],
  neighborhoodProfiles: [
    { name: "Patchogue Village", notes: "Lively downtown core with walkable apartments, historic Victorians, and busy Main Street restaurants requiring fast repairs." },
    { name: "East Patchogue", notes: "Suburban and coastal streets with spacious single-family homes that depend on dependable washer, dryer, and refrigerator service." },
    { name: "North Patchogue", notes: "Family-oriented neighborhoods running busy kitchens with double ovens, dishwashers, and outdoor cooking equipment." },
    { name: "Blue Point", notes: "Scenic South Shore hamlet featuring charming historic homes where vintage and modern appliances both require expert care." },
    { name: "Bellport", notes: "Prestigious historic village with high-end estate kitchens requiring Sub-Zero, Wolf, and Miele certified service." },
    { name: "Medford & Holbrook", notes: "Central suburban communities with high-load family laundry machines and high-capacity cooking ranges." }
  ]
};

export default function PatchoguePage() {
  if (!location) return notFound();
  return <LocationPageTemplate location={location} deepLocalContent={patchogueDeepContent} />;
}
