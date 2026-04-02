import {
  EMAIL_ADDRESS,
  LINKEDIN_URL,
  SITE_URL,
  YOUTUBE_URL,
} from "@/app/utils/constants";

function origin(): string {
  return SITE_URL.replace(/\/$/, "");
}

/** Site-wide Organization + WebSite (inject once in root layout). */
export function getSiteJsonLd() {
  const base = origin();
  const orgId = `${base}/#organization`;
  const websiteId = `${base}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "SPAIDER Space S.à r.l.",
        alternateName: ["Spaider Space", "SPAIDER"],
        url: base,
        logo: {
          "@type": "ImageObject",
          url: `${base}/logo.png`,
        },
        email: EMAIL_ADDRESS,
        vatID: "LU36772970",
        address: {
          "@type": "PostalAddress",
          streetAddress: "9, avenue des Hauts Fourneaux",
          addressLocality: "Esch-sur-Alzette",
          postalCode: "4362",
          addressCountry: "LU",
        },
        sameAs: [LINKEDIN_URL, YOUTUBE_URL],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: base,
        name: "SPAIDER",
        description:
          "SPAIDER provides European-sovereign AI infrastructure for aerospace. Deploy domain-expert AI agents on your data—securely and compliantly.",
        publisher: { "@id": orgId },
        inLanguage: "en-US",
      },
    ],
  };
}

const INNOSPACE_HEADLINE =
  "We Secured 2nd Place at INNOspace Masters 2025 (And We're Just Getting Started)";

const INNOSPACE_DESCRIPTION =
  "SPAIDER secured 2nd place at INNOspace Masters 2025 in the OHB Challenge — AI agents for aerospace operations.";

/** Blog post /blog/innospace + breadcrumbs. */
export function getInnoSpaceArticleJsonLd() {
  const base = origin();
  const orgId = `${base}/#organization`;
  const pageUrl = `${base}/blog/innospace`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        headline: INNOSPACE_HEADLINE,
        description: INNOSPACE_DESCRIPTION,
        image: [`${base}/blog/innospace.png`],
        datePublished: "2025-09-01",
        dateModified: "2025-09-01",
        author: { "@id": orgId },
        publisher: {
          "@id": orgId,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: base,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${base}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "INNOspace Masters 2025",
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
