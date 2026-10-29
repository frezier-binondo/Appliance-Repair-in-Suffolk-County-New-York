import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Phone, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuickBookingForm from "@/components/QuickBookingForm";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import { BLOG_POSTS, BUSINESS_INFO, SERVICES_LIST, LOCATIONS_LIST } from "@/data/siteData";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog Post Not Found" };

  return {
    title: `${post.title} | Suffolk County Appliance Repair`,
    description: post.excerpt,
    alternates: {
      canonical: `https://suffolkcountyappliancerepair.com/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    }
  };
}

export default function SingleBlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": "2026-10-18",
    "author": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "url": "https://suffolkcountyappliancerepair.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80"
      }
    }
  };

  const internalLinks = [
    { anchor: post.servicePageAnchor, url: post.servicePageUrl },
    ...post.townPageUrls.map(t => ({ anchor: t.anchor, url: t.url })),
    { anchor: "All Appliance Repair Services", url: "/appliance-repair-services/" },
    { anchor: "Troubleshooting Blog Hub", url: "/blog/" },
    { anchor: "Contact Us & Book", url: "/contact/" }
  ];

  const externalLinks = [
    { anchor: "ENERGY STAR certified products", url: "https://www.energystar.gov/products", isExternal: true },
    { anchor: "U.S. Consumer Product Safety Commission", url: "https://www.cpsc.gov/", isExternal: true }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", url: "/blog/" },
          { label: post.title }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 seo-article">
        <Link
          href="/blog/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Troubleshooting Guides</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-sky-100 text-brand-700 text-xs font-bold uppercase tracking-wider">
            {post.category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 pt-1">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-slate-400" />
              {post.date}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-slate-400" />
              {post.readTime}
            </span>
            <span>&bull;</span>
            <span className="text-brand-600 font-semibold">
              By Suffolk Repair Tech Team
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden mb-10 shadow-lg border border-slate-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* Article Body */}
        <div className="prose-content space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          {post.content.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Direct Service & Local Town Cross-Link Callout */}
        <div className="my-10 p-6 rounded-2xl bg-amber-50 border border-amber-200">
          <h3 className="font-extrabold text-navy-950 text-base mb-2">
            Need In-Person Diagnosis in Suffolk County?
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 mb-4">
            If these troubleshooting steps do not resolve the issue, avoid operating the unit to prevent further motor or electronic damage. Schedule an appointment with our local team:
          </p>
          <div className="flex flex-wrap gap-2.5">
            <Link
              href={post.servicePageUrl}
              className="body-link inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-xs font-bold text-slate-900 shadow-sm"
            >
              <span>{post.servicePageAnchor} &rarr;</span>
            </Link>
            {post.townPageUrls.map((town, tIdx) => (
              <Link
                key={tIdx}
                href={town.url}
                className="body-link inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-xs font-bold text-slate-900 shadow-sm"
              >
                <span>{town.anchor} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Required Internal & External Links with Underline and Popup Colors */}
        <InternalLinkGrid
          internalLinks={internalLinks}
          externalLinks={externalLinks}
          title="Related Services & Official Resources"
          subtitle="Explore corresponding appliance repair silos, town hubs, and consumer guidelines."
        />

        {/* Booking Card */}
        <div className="mt-12">
          <QuickBookingForm title="Book an Appliance Technician" />
        </div>
      </article>
    </div>
  );
}
