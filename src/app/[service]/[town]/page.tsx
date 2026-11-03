import React from "react";
import { notFound } from "next/navigation";
import { 
  getServiceLocationPage, 
  getAllServiceLocationSlugs 
} from "@/data/serviceLocationsData";
import ServiceLocationPageTemplate from "@/components/ServiceLocationPageTemplate";

interface ServiceTownPageProps {
  params: {
    service: string;
    town: string;
  };
}

export async function generateStaticParams() {
  return getAllServiceLocationSlugs();
}

export async function generateMetadata({ params }: ServiceTownPageProps) {
  const page = getServiceLocationPage(params.service, params.town);
  if (!page) {
    return { title: "Page Not Found" };
  }

  return {
    title: `${page.h1} | Local Technicians`,
    description: page.metaDescription,
    alternates: {
      canonical: `https://suffolkcountyappliancerepair.com/${params.service}/${params.town}/`,
    },
    openGraph: {
      title: `${page.h1} | Local Technicians`,
      description: page.metaDescription,
      url: `https://suffolkcountyappliancerepair.com/${params.service}/${params.town}/`,
      images: [
        {
          url: page.image,
          width: 1200,
          height: 630,
          alt: `${page.h1} in Suffolk County, NY`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.h1} | Local Technicians`,
      description: page.metaDescription,
      images: [page.image],
    },
  };
}

export default function ServiceTownPage({ params }: ServiceTownPageProps) {
  const page = getServiceLocationPage(params.service, params.town);
  if (!page) {
    return notFound();
  }

  return <ServiceLocationPageTemplate page={page} />;
}
