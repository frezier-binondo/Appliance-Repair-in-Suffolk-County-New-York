import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SERVICES_LIST } from "@/data/siteData";
import { notFound } from "next/navigation";

const service = SERVICES_LIST.find((s) => s.slug === "dishwasher-repair");

export const metadata = {
  title: service?.metaTitle,
  description: service?.metaDescription,
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/dishwasher-repair/",
  }
};

export default function DishwasherRepairPage() {
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
