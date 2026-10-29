import React from "react";
import LocationPageTemplate from "@/components/LocationPageTemplate";
import { LOCATIONS_LIST } from "@/data/siteData";
import { notFound } from "next/navigation";

const location = LOCATIONS_LIST.find((l) => l.slug === "appliance-repair-islip-ny");

export const metadata = {
  title: location?.metaTitle,
  description: location?.metaDescription,
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/appliance-repair-islip-ny/",
  }
};

const islipDeepContent = {
  historyAndHomes: `The Town of Islip occupies a broad swath of Suffolk County's South Shore, stretching from scenic coastal communities bordering the Great South Bay—such as Bay Shore, Sayville, and Great River—to inland suburban neighborhoods in Islip Terrace, Brentwood, and Central Islip. The housing stock is exceptionally diverse, encompassing converted summer bungalows near marinas, modern waterfront townhomes, mid-century split-levels, and contemporary multi-family apartment communities. In coastal neighborhoods, properties are directly exposed to salt spray, maritime mist, and prolonged coastal humidity. These environmental conditions dramatically affect home appliances: exposed steel parts on outdoor dryer vents oxidize, copper refrigeration tubing is prone to galvanic reactions, and electronic circuit boards without protective conformal coatings can suffer tracking faults. Our technicians bring marine-grade dielectric protection and corrosion-resistant fasteners when servicing appliances across Islip.`,
  waterAndClimate: `South Shore summers in Islip are consistently humid. When warm marine air enters the home, refrigerators and freezers must work significantly harder to condense moisture and maintain cold cabin temperatures. High ambient humidity also leads to excessive sweating on exterior cabinet surfaces and rapid frost buildup on evaporator coils if door gaskets lose elasticity. In laundry rooms, humid summer air impedes clothes dryers because the air drawn into the heater cannot absorb moisture efficiently unless the exhaust venting is clear and unrestricted. In winter, freezing salt winds off the bay test gas safety valves and draft inducers. Our technicians are well-versed in adjusting flame sensors and inspecting intake louvers for South Shore homes.`,
  serviceSpecifics: [
    {
      appliance: "Coastal Refrigerator & Freezer Service",
      localScenario: "Waterfront residences in Bay Shore, Sayville, and Great River experience accelerated condenser coil dust clumping due to marine humidity, leading to compressor overheating.",
      repairFix: "We perform chemical coil degreasing, replace failing electronic inverter compressor boards, and replace stiffened magnetic door gaskets to restore an airtight seal."
    },
    {
      appliance: "Washing Machine Drainage & Valve Diagnostics",
      localScenario: "Varied South Shore plumbing configurations, from elevated crawl-space plumbing to basement ejection systems, frequently create washer drainage backpressure.",
      repairFix: "We service high-head drain pumps, replace corroded water inlet solenoids, and install anti-hammer water arrestors to prevent pipe shock."
    },
    {
      appliance: "Dryer Vent Safety & Thermal Element Replacement",
      localScenario: "Humid air causes lint to clump inside long flex-ducts, restricting airflow and causing electric heating coils to burn out or gas igniters to cycle off prematurely.",
      repairFix: "We replace broken high-limit thermostats, rebuild drum roller assemblies with silicone-greased bearings, and inspect exterior exhaust hood dampers."
    },
    {
      appliance: "Dishwasher Under-Sink Leak Protection",
      localScenario: "Older South Shore homes with diverse under-sink pipe sizing frequently suffer from leaky fill valves or worn drain check valves that back up into kitchen cabinetry.",
      repairFix: "We install reinforced stainless-steel braided water lines, replace failing sump check valves, and bench-test circulation motors."
    },
    {
      appliance: "Bay Shore & Fire Island Ferry Corridor Commercial Service",
      localScenario: "Seafood restaurants, pubs, and cafes surrounding the Bay Shore marina and ferry terminals rely on non-stop commercial ice machines and reach-in coolers.",
      repairFix: "We provide priority emergency dispatch for commercial refrigeration, ice dispensers, and cooking equipment across Islip's waterfront dining district."
    }
  ],
  neighborhoodProfiles: [
    { name: "Islip Hamlet & East Islip", notes: "Established waterfront and suburban streets with single-family homes that depend on fast same-day appliance repairs." },
    { name: "Bay Shore", notes: "Vibrant downtown and ferry corridor featuring historic residences, luxury bayfront estates, and busy restaurant commercial kitchens." },
    { name: "Sayville & West Sayville", notes: "Picturesque South Shore communities with historic maritime homes, requiring careful care for vintage and high-end cooking appliances." },
    { name: "Great River", notes: "Large riverfront properties and secluded estates featuring Sub-Zero built-in refrigeration and professional gas ranges." },
    { name: "Islip Terrace & Central Islip", notes: "Active residential neighborhoods with family homes and rental properties needing budget-friendly, dependable appliance repairs." },
    { name: "Brentwood", notes: "Densely populated community where fast response for family washers, dryers, and stoves is an essential daily need." }
  ]
};

export default function IslipPage() {
  if (!location) return notFound();
  return <LocationPageTemplate location={location} deepLocalContent={islipDeepContent} />;
}
