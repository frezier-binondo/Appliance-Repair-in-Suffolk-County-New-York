import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SERVICES_LIST } from "@/data/siteData";
import { notFound } from "next/navigation";

const service = SERVICES_LIST.find((s) => s.slug === "cooktop-repair");

export const metadata = {
  title: service?.metaTitle,
  description: service?.metaDescription,
  alternates: {
    canonical: "https://suffolkcountyappliancerepair.com/cooktop-repair/",
  }
};

export default function CooktopRepairPage() {
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
