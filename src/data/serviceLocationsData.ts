// Auto-generated 40 Service-by-Town Pages
// 8 core services across 5 Suffolk County towns
import serviceLocationsJson from "./serviceLocationsData.json";

export interface ServiceLocationPage {
  id: string;
  slug: string;
  serviceSlug: string;
  townSlug: string;
  serviceName: string;
  applianceName: string;
  townName: string;
  townShortName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  image: string;
  neighborhoods: string[];
  shortDesc: string;
  symptomsIntro: string;
  commonProblems: { title: string; desc: string }[];
  processSteps: string[];
  brands: string[];
  maintenanceTips: string[];
  faqs: { q: string; a: string }[];
  internalLinks: { anchor: string; url: string; isExternal?: boolean }[];
  externalLinks: { anchor: string; url: string; isExternal?: boolean }[];
}

export const SERVICE_LOCATION_PAGES: ServiceLocationPage[] = serviceLocationsJson as ServiceLocationPage[];

export function getServiceLocationPage(serviceSlug: string, townSlug: string): ServiceLocationPage | undefined {
  return SERVICE_LOCATION_PAGES.find(
    (p) => p.serviceSlug === serviceSlug && p.townSlug === townSlug
  );
}

export function getPagesForService(serviceSlug: string): ServiceLocationPage[] {
  return SERVICE_LOCATION_PAGES.filter((p) => p.serviceSlug === serviceSlug);
}

export function getPagesForTown(townSlug: string): ServiceLocationPage[] {
  return SERVICE_LOCATION_PAGES.filter((p) => p.townSlug === townSlug);
}

export function getAllServiceLocationSlugs(): { service: string; town: string }[] {
  return SERVICE_LOCATION_PAGES.map((p) => ({
    service: p.serviceSlug,
    town: p.townSlug,
  }));
}
