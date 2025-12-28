import type {
  GlobalSettings,
  Person,
  WPProgram,
  KCCourse,
  KCTextbook,
  BlogPost,
  FAQ,
} from "@repo/cms";

// JSON-LD Types
interface WithContext<T> {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

// LocalBusiness Schema (Site A)
export function generateLocalBusinessSchema(
  settings: GlobalSettings,
  url: string
): WithContext<unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#organization`,
    name: settings.brand_name_kr,
    alternateName: settings.brand_name_en,
    url: url,
    logo: settings.logo_primary ? `${url}${settings.logo_primary}` : undefined,
    image: settings.meta_default_image
      ? `${url}${settings.meta_default_image}`
      : undefined,
    description: settings.tagline_kr,
    telephone: settings.phone,
    email: settings.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.address_street,
      addressLocality: settings.address_city,
      addressRegion: settings.address_province,
      postalCode: settings.postal_code,
      addressCountry: settings.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: settings.geo_lat,
      longitude: settings.geo_lng,
    },
    openingHoursSpecification: generateOpeningHours(settings.business_hours),
    sameAs: [
      settings.instagram_url,
      settings.naver_blog_url,
      settings.naver_place_url,
    ].filter(Boolean),
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://kclassicpilates.kr/#organization",
    },
  };
}

// Organization Schema (Site B)
export function generateOrganizationSchema(
  settings: GlobalSettings,
  url: string
): WithContext<unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name: "K Classic Pilates Association",
    alternateName: [settings.brand_name_kr, "KCPA"],
    url: url,
    logo: settings.logo_primary ? `${url}${settings.logo_primary}` : undefined,
    description: settings.tagline_kr,
    telephone: settings.phone,
    email: settings.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.address_street,
      addressLocality: settings.address_city,
      addressRegion: settings.address_province,
      postalCode: settings.postal_code,
      addressCountry: settings.country,
    },
    subOrganization: {
      "@type": "LocalBusiness",
      "@id": "https://wonderpilates.kr/#organization",
    },
    sameAs: [settings.instagram_url, settings.naver_blog_url].filter(Boolean),
  };
}

// WebSite Schema
export function generateWebSiteSchema(
  settings: GlobalSettings,
  url: string
): WithContext<unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url: url,
    name: `${settings.brand_name_en} | ${settings.brand_name_kr}`,
    publisher: {
      "@id": `${url}/#organization`,
    },
    inLanguage: ["ko-KR"],
  };
}

// Person Schema
export function generatePersonSchema(
  person: Person,
  url: string
): WithContext<unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}/#person-${person.slug}`,
    name: person.name_kr,
    alternateName: person.name_en,
    jobTitle: person.role_kr,
    worksFor: person.positions
      .filter((p) => p.current)
      .map((p) => ({
        "@type": "Organization",
        name: p.organization_kr,
      })),
    hasCredential: person.certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name_kr,
      credentialCategory: "certification",
    })),
    image: person.photo_primary ? `${url}${person.photo_primary}` : undefined,
    sameAs: [
      "https://wonderpilates.kr/about/instructor",
      "https://kclassicpilates.kr/about/founder",
    ],
  };
}

// Service Schema (Program)
export function generateServiceSchema(
  program: WPProgram,
  url: string
): WithContext<unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/programs/${program.slug}/#service`,
    name: program.name_kr,
    alternateName: program.name_en,
    description: program.short_description_kr,
    provider: {
      "@id": `${url}/#organization`,
    },
    serviceType: "Pilates Training",
    areaServed: {
      "@type": "City",
      name: "김포시",
    },
  };
}

// Course Schema
export function generateCourseSchema(
  course: KCCourse,
  url: string,
  personId?: string
): WithContext<unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${url}/certification/${course.slug}/#course`,
    name: course.name_kr,
    description: course.short_description_kr,
    provider: {
      "@id": `${url}/#organization`,
    },
    educationalCredentialAwarded: course.certification_awarded_kr,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      instructor: personId
        ? {
            "@type": "Person",
            "@id": personId,
          }
        : undefined,
    },
    timeRequired: `PT${course.duration_hours}H`,
    educationalLevel: course.level,
  };
}

// Book Schema
export function generateBookSchema(
  textbook: KCTextbook,
  url: string,
  authorId?: string
): WithContext<unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${url}/textbooks/${textbook.slug}/#book`,
    name: textbook.title_kr,
    author: authorId
      ? {
          "@type": "Person",
          "@id": authorId,
        }
      : undefined,
    publisher: {
      "@id": `${url}/#organization`,
    },
    datePublished: textbook.publish_year.toString(),
    inLanguage: "ko-KR",
    numberOfPages: textbook.pages,
    image: textbook.cover_image ? `${url}${textbook.cover_image}` : undefined,
    isbn: textbook.isbn,
  };
}

// BlogPosting Schema
export function generateBlogPostingSchema(
  post: BlogPost,
  url: string,
  authorId?: string
): WithContext<unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title_kr,
    description: post.excerpt_kr,
    image: post.featured_image ? `${url}${post.featured_image}` : undefined,
    datePublished: post.publish_date,
    dateModified: post.updated_at,
    author: authorId
      ? {
          "@type": "Person",
          "@id": authorId,
        }
      : undefined,
    publisher: {
      "@id": `${url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}/blog/${post.slug}`,
    },
    inLanguage: "ko-KR",
  };
}

// FAQPage Schema
export function generateFAQPageSchema(faqs: FAQ[]): WithContext<unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question_kr,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer_kr,
      },
    })),
  };
}

// Helper: Generate OpeningHoursSpecification
function generateOpeningHours(
  hours: GlobalSettings["business_hours"]
): unknown[] {
  const dayMap: Record<string, string> = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
  };

  const specs: unknown[] = [];
  const grouped: Record<string, string[]> = {};

  Object.entries(hours).forEach(([day, dayHours]) => {
    if (day === "holidays" || day === "notes_kr" || day === "notes_en") return;
    if (typeof dayHours !== "object" || dayHours.closed) return;

    const key = `${dayHours.open}-${dayHours.close}`;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(dayMap[day]);
  });

  Object.entries(grouped).forEach(([timeRange, days]) => {
    const [opens, closes] = timeRange.split("-");
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days,
      opens,
      closes,
    });
  });

  return specs;
}

// Generate full JSON-LD script tag content
export function generateJsonLd(schemas: unknown[]): string {
  if (schemas.length === 1) {
    return JSON.stringify(schemas[0]);
  }
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": schemas.map((s) => {
      const schema = s as Record<string, unknown>;
      const { "@context": _, ...rest } = schema;
      return rest;
    }),
  });
}
