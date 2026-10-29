import React from "react";
import LocationPageTemplate from "@/components/LocationPageTemplate";
import { LOCATIONS_LIST } from "@/data/siteData";
import { notFound } from "next/navigation";

const location = LOCATIONS_LIST.find((l) => l.slug === "appliance-repair-huntington-ny");

export const metadata = {
  title: location?.metaTitle,
  description: location?.metaDescription,
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/appliance-repair-huntington-ny/",
  }
};

const huntingtonDeepContent = {
  historyAndHomes: `Huntington's architectural landscape is one of the most distinguished in Suffolk County, spanning historic 18th and 19th-century colonial homes around Huntington Village, mid-century ranches in Greenlawn and South Huntington, and expansive modern custom estates in Dix Hills and Cold Spring Harbor. In historic residences, kitchens have frequently been retrofitted with high-end European appliances—such as Miele dishwashers and Thermador built-in cooktops—fitted into custom cabinetry. These older homes present unique diagnostic hurdles: thick plaster walls, antique branch electrical circuits, and settled foundation walls through which long dryer exhaust vents must travel. Our technicians have years of field experience navigating these unique architectural parameters, ensuring that high-performance appliances are serviced without disturbing custom cabinetry, marble counters, or historic woodwork.`,
  waterAndClimate: `Situated on the North Shore along Huntington Bay and the Long Island Sound, Huntington experiences steep coastal elevation changes and distinct microclimates. Humidity rolling in from the Sound places additional condensing loads on residential refrigerators, freezers, and wine storage cellars during July and August. Furthermore, municipal and private well water in northern Suffolk County contains moderate dissolved minerals, which can precipitate inside dishwasher heating elements, ice maker solenoids, and washing machine water inlet valves over time. Our technicians carry specialized descaling compounds and filter replacements matched to North Shore water conditions.`,
  serviceSpecifics: [
    {
      appliance: "Refrigerator & Freezer Column Repair",
      localScenario: "Large North Shore estate kitchens frequently feature built-in Sub-Zero 48-inch dual-compressor units or column refrigeration integrated into paneled millwork, along with garage or basement overflow freezers.",
      repairFix: "We service sealed system vacuum lines, replace faulty thermistors, clear blocked defrost drain troughs, and install factory condenser fan motors without scratching custom floor surfaces."
    },
    {
      appliance: "Washing Machine & High-Efficiency Laundry Repair",
      localScenario: "Many Huntington homes feature washers installed in basement laundry alcoves or second-floor closets, where high vibration or slow pump discharge can cause water damage.",
      repairFix: "We replace heavy-duty tub bearings, shock dampeners, and high-flow drain pumps, re-leveling machines precisely to eliminate high-speed spin vibration."
    },
    {
      appliance: "Dryer Thermal Fuse & Exhaust Airflow Repair",
      localScenario: "Because basement laundry rooms in older Huntington homes require long exhaust vent pipe runs with multiple 90-degree elbows, backpressure and lint accumulation frequently trip thermal fuses.",
      repairFix: "We conduct exhaust backpressure tests, replace burned-out cycling thermostats and thermal cutoffs, and clean internal cabinet lint."
    },
    {
      appliance: "Built-In Dishwasher & Waste Disposal Service",
      localScenario: "Renovated kitchens often pair ultra-quiet Bosch or KitchenAid dishwashers with continuous-feed sink disposals connected to older cast-iron plumbing waste lines.",
      repairFix: "We clean spray arm impellers, replace circulation pump seals, clear disposal flywheel jams, and configure anti-siphon high loops on drain lines to prevent dirty water backflow."
    },
    {
      appliance: "Commercial Kitchen Appliance Repair",
      localScenario: "Huntington Village’s bustling restaurant and cafe corridor along New York Avenue and Main Street relies on uninterrupted refrigeration, ice machines, and commercial line ranges.",
      repairFix: "We offer priority same-day dispatch for restaurant walk-in coolers, commercial ice makers, and convection ovens to prevent downtime and health code interruptions."
    }
  ],
  neighborhoodProfiles: [
    { name: "Huntington Village", notes: "Walkable historic core with historic homes and downtown culinary spots requiring both residential and commercial refrigeration service." },
    { name: "Huntington Station", notes: "Densely populated residential neighborhood featuring active family homes running daily laundry and cooking appliances." },
    { name: "Cold Spring Harbor", notes: "Waterfront and hillside estates with premium Sub-Zero, Wolf, and Miele built-in kitchen suites." },
    { name: "Dix Hills", notes: "Sprawling custom properties with high-capacity double ovens, multiple beverage fridges, and outdoor summer kitchens." },
    { name: "Greenlawn & Centerport", notes: "Suburban family streets with single-family homes that depend on fast same-day washer, dryer, and refrigerator repairs." },
    { name: "Melville", notes: "Corporate hubs and residential developments requiring both residential kitchen care and office cafeteria maintenance." }
  ]
};

export default function HuntingtonPage() {
  if (!location) return notFound();
  return <LocationPageTemplate location={location} deepLocalContent={huntingtonDeepContent} />;
}
