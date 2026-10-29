import React from "react";
import LocationPageTemplate from "@/components/LocationPageTemplate";
import { LOCATIONS_LIST } from "@/data/siteData";
import { notFound } from "next/navigation";

const location = LOCATIONS_LIST.find((l) => l.slug === "appliance-repair-smithtown-ny");

export const metadata = {
  title: location?.metaTitle,
  description: location?.metaDescription,
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/appliance-repair-smithtown-ny/",
  }
};

const smithtownDeepContent = {
  historyAndHomes: `The Town of Smithtown is renowned for its idyllic suburban communities, spacious family properties, and active multi-generational households. From classic colonial subdivisions in Nesconset and Hauppauge to custom ranches and historic properties in St. James and Kings Park, Smithtown homes are characterized by active, hardworking kitchens. With large families, children participating in sports leagues, and frequent holiday gatherings, major appliances in Smithtown endure significantly higher cycle counts than in average metropolitan apartments. It is routine for a Smithtown household to run two loads of laundry every day, cycle the dishwasher after every meal, and store bulk frozen food in auxiliary garage deep freezes. This high cycle volume accelerates mechanical wear on moving parts such as washer tub bearings, drive belts, drain pump impellers, and oven heating elements.`,
  waterAndClimate: `Smithtown's central Suffolk location creates hot, continental summer conditions coupled with cold winter temperature drops. In uninsulated garages or basements where overflow chest freezers and secondary beverage refrigerators are placed, ambient summer heat forcing compressors to cycle non-stop can cause thermal overload shutdowns. In winter, unheated garages can drop below the minimum ambient temperature required for certain electro-mechanical thermostats to sense cooling needs correctly. Furthermore, high hot water usage in large suburban homes frequently leads to sediment accumulation in dishwasher inlet solenoids. Our technicians understand how to recalibrate controls and install garage ambient heater kits so your appliances function reliably regardless of outdoor extremes.`,
  serviceSpecifics: [
    {
      appliance: "High-Volume Washing Machine & Dryer Service",
      localScenario: "Large Smithtown families running 12-15 laundry loads per week experience rapid wear on front-load tub bearings, direct-drive motor stators, and electric dryer heating coils.",
      repairFix: "We replace heavy-duty spin bearings, motor control boards, and heavy-gauge nickel-chrome heating elements, verifying machine balance to handle heavy towel loads."
    },
    {
      appliance: "Family Kitchen Refrigerator & Garage Deep Freeze Repair",
      localScenario: "Families depend on large French-door French-door refrigerators and garage chest freezers. A breakdown puts bulk frozen meats and groceries in immediate jeopardy.",
      repairFix: "We carry factory compressor start relays, digital defrost sensors, and evaporator fan assemblies on our trucks for same-day cooling restoration."
    },
    {
      appliance: "Double Wall Oven & Gas Range Calibration",
      localScenario: "Smithtown kitchens often feature 30-inch double wall ovens and five-burner gas ranges that see heavy dinner preparation. Uneven baking or weak bake igniters cause immediate disruption.",
      repairFix: "We calibrate electronic temperature probes with digital thermocouples, replace worn carbon glow-bar igniters, and service dual convection fans."
    },
    {
      appliance: "Dishwasher Cleaning & Pump Diagnostics",
      localScenario: "Running the dishwasher daily can lead to heavy grease and detergent film accumulation in spray arms and drain lines, causing dirty glasses and standing water.",
      repairFix: "We remove and chemically clean filter sumps, bench-test wash circulation motors, and replace degraded door perimeter gaskets."
    },
    {
      appliance: "Hauppauge Industrial Park & Local Commercial Care",
      localScenario: "Corporate cafeterias in the Hauppauge Industrial Park and local eateries in downtown Smithtown require rapid commercial refrigeration and ice maker support.",
      repairFix: "We provide emergency commercial response for walk-in coolers, ice cubers, and cooking lines, ensuring zero disruption to food safety inspections."
    }
  ],
  neighborhoodProfiles: [
    { name: "Smithtown Hamlet", notes: "Core suburban neighborhoods with busy family kitchens running multiple appliances every single day." },
    { name: "Kings Park", notes: "Established North Shore town with a mix of historic homes and modern developments needing prompt kitchen appliance care." },
    { name: "St. James", notes: "Charming historic village with large residential kitchens, pro gas ranges, and wine preservation coolers." },
    { name: "Nesconset", notes: "Spacious suburban subdivisions with active multi-person households and high-capacity laundry setups." },
    { name: "Hauppauge", notes: "Home to extensive residential communities and one of the largest corporate business parks in Long Island." },
    { name: "Fort Salonga & Head of the Harbor", notes: "Expansive luxury homes with premium integrated Sub-Zero, Wolf, and Bosch kitchen suites." }
  ]
};

export default function SmithtownPage() {
  if (!location) return notFound();
  return <LocationPageTemplate location={location} deepLocalContent={smithtownDeepContent} />;
}
