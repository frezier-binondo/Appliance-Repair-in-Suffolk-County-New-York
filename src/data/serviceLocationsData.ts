// Auto-generated 70 Service-by-Town Pages from Suffolk_County_Appliance_Repair_SEO_Silo.xlsx
import serviceLocationsJson from "./serviceLocationsData.json";

export interface ServiceLocationPage {
  id: string;
  slug: string;
  serviceSlug: string;
  townSlug: string;
  serviceName: string;
  townName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  image: string;
  neighborhoods: string[];
  intro: string;
  problems: { title: string; desc: string }[];
  processSteps: string[];
  brands: string;
  tips: string[];
  repairOrReplaceAdvice: string;
  whyChoose: string;
  faqs: { q: string; a: string }[];
  internalLinks: { anchor: string; url: string; isExternal?: boolean }[];
  externalLinks: { anchor: string; url: string; isExternal?: boolean }[];
  rawContent: string;
}

export const SERVICE_LOCATION_PAGES: ServiceLocationPage[] = serviceLocationsJson as ServiceLocationPage[];

export function getServiceLocationPage(serviceSlug: string, townSlug: string): ServiceLocationPage | undefined {
  return SERVICE_LOCATION_PAGES.find(
    (p) => p.serviceSlug === serviceSlug && p.townSlug === townSlug
  );
}

export function getAllServiceLocationSlugs(): { service: string; town: string }[] {
  return SERVICE_LOCATION_PAGES.map((p) => ({
    service: p.serviceSlug,
    town: p.townSlug,
  }));
}
