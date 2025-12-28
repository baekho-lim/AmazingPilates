import { createDirectus, rest, readItems, readItem } from "@directus/sdk";
import type { Schema, Site, GlobalSettings, Person, Page, BlogPost, FAQ, WPProgram, WPPricing, KCCourse, KCEquipmentCourse, KCPricing, KCTextbook, KCSchedule, Testimonial } from "./types";

// Create Directus client
const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

export const directus = createDirectus<Schema>(directusUrl).with(rest());

// Helper to get the current site
export function getSiteId(): Site {
  const siteEnv = process.env.NEXT_PUBLIC_SITE_ID;
  if (siteEnv === "wonder_pilates" || siteEnv === "k_classic_pilates") {
    return siteEnv;
  }
  return "wonder_pilates"; // default
}

// Global Settings
export async function getGlobalSettings(site?: Site): Promise<GlobalSettings | null> {
  const targetSite = site || getSiteId();
  try {
    const items = await directus.request(
      readItems("global_settings", {
        filter: { site: { _eq: targetSite } },
        limit: 1,
      })
    );
    return items[0] || null;
  } catch {
    console.error("Failed to fetch global settings");
    return null;
  }
}

// People
export async function getPeople(site?: Site): Promise<Person[]> {
  const targetSite = site || getSiteId();
  try {
    return await directus.request(
      readItems("people", {
        filter: {
          status: { _eq: "published" },
          display_on_sites: { _contains: targetSite },
        },
        sort: ["sort_order"],
      })
    );
  } catch {
    console.error("Failed to fetch people");
    return [];
  }
}

export async function getPersonBySlug(slug: string): Promise<Person | null> {
  try {
    const items = await directus.request(
      readItems("people", {
        filter: {
          slug: { _eq: slug },
          status: { _eq: "published" },
        },
        limit: 1,
      })
    );
    return items[0] || null;
  } catch {
    console.error("Failed to fetch person");
    return null;
  }
}

// Pages
export async function getPages(site?: Site): Promise<Page[]> {
  const targetSite = site || getSiteId();
  try {
    return await directus.request(
      readItems("pages", {
        filter: {
          site: { _eq: targetSite },
          status: { _eq: "published" },
        },
        sort: ["nav_order"],
      })
    );
  } catch {
    console.error("Failed to fetch pages");
    return [];
  }
}

export async function getPageBySlug(slug: string, site?: Site): Promise<Page | null> {
  const targetSite = site || getSiteId();
  try {
    const items = await directus.request(
      readItems("pages", {
        filter: {
          site: { _eq: targetSite },
          slug: { _eq: slug },
          status: { _eq: "published" },
        },
        limit: 1,
      })
    );
    return items[0] || null;
  } catch {
    console.error("Failed to fetch page");
    return null;
  }
}

// Blog Posts
export async function getBlogPosts(site?: Site, limit?: number): Promise<BlogPost[]> {
  const targetSite = site || getSiteId();
  try {
    return await directus.request(
      readItems("blog_posts", {
        filter: {
          site: { _eq: targetSite },
          status: { _eq: "published" },
        },
        sort: ["-publish_date"],
        limit: limit || 100,
      })
    );
  } catch {
    console.error("Failed to fetch blog posts");
    return [];
  }
}

export async function getBlogPostBySlug(slug: string, site?: Site): Promise<BlogPost | null> {
  const targetSite = site || getSiteId();
  try {
    const items = await directus.request(
      readItems("blog_posts", {
        filter: {
          site: { _eq: targetSite },
          slug: { _eq: slug },
          status: { _eq: "published" },
        },
        limit: 1,
      })
    );
    return items[0] || null;
  } catch {
    console.error("Failed to fetch blog post");
    return null;
  }
}

// FAQs
export async function getFAQs(site?: Site, category?: string): Promise<FAQ[]> {
  const targetSite = site || getSiteId();
  try {
    const filter: Record<string, unknown> = {
      site: { _eq: targetSite },
      status: { _eq: "published" },
    };
    if (category) {
      filter.category = { _eq: category };
    }
    return await directus.request(
      readItems("faqs", {
        filter,
        sort: ["sort_order"],
      })
    );
  } catch {
    console.error("Failed to fetch FAQs");
    return [];
  }
}

// Wonder Pilates specific
export async function getWPPrograms(): Promise<WPProgram[]> {
  try {
    return await directus.request(
      readItems("wp_programs", {
        filter: { status: { _eq: "published" } },
        sort: ["sort_order"],
      })
    );
  } catch {
    console.error("Failed to fetch programs");
    return [];
  }
}

export async function getWPProgramBySlug(slug: string): Promise<WPProgram | null> {
  try {
    const items = await directus.request(
      readItems("wp_programs", {
        filter: {
          slug: { _eq: slug },
          status: { _eq: "published" },
        },
        limit: 1,
      })
    );
    return items[0] || null;
  } catch {
    console.error("Failed to fetch program");
    return null;
  }
}

export async function getWPPricing(): Promise<WPPricing[]> {
  try {
    return await directus.request(
      readItems("wp_pricing", {
        filter: { status: { _eq: "published" } },
        sort: ["sort_order"],
      })
    );
  } catch {
    console.error("Failed to fetch pricing");
    return [];
  }
}

// K Classic Pilates specific
export async function getKCCourses(): Promise<KCCourse[]> {
  try {
    return await directus.request(
      readItems("kc_courses", {
        filter: { status: { _eq: "published" } },
        sort: ["sort_order"],
      })
    );
  } catch {
    console.error("Failed to fetch courses");
    return [];
  }
}

export async function getKCCourseBySlug(slug: string): Promise<KCCourse | null> {
  try {
    const items = await directus.request(
      readItems("kc_courses", {
        filter: {
          slug: { _eq: slug },
          status: { _eq: "published" },
        },
        limit: 1,
      })
    );
    return items[0] || null;
  } catch {
    console.error("Failed to fetch course");
    return null;
  }
}

export async function getKCEquipmentCourses(): Promise<KCEquipmentCourse[]> {
  try {
    return await directus.request(
      readItems("kc_equipment_courses", {
        filter: { status: { _eq: "published" } },
        sort: ["sort_order"],
      })
    );
  } catch {
    console.error("Failed to fetch equipment courses");
    return [];
  }
}

export async function getKCTextbooks(): Promise<KCTextbook[]> {
  try {
    return await directus.request(
      readItems("kc_textbooks", {
        filter: { status: { _eq: "published" } },
        sort: ["sort_order"],
      })
    );
  } catch {
    console.error("Failed to fetch textbooks");
    return [];
  }
}

export async function getKCSchedule(): Promise<KCSchedule[]> {
  try {
    return await directus.request(
      readItems("kc_schedule", {
        filter: { status: { _in: ["open", "full"] } },
        sort: ["start_date"],
      })
    );
  } catch {
    console.error("Failed to fetch schedule");
    return [];
  }
}

export async function getKCPricing(): Promise<KCPricing[]> {
  try {
    return await directus.request(
      readItems("kc_pricing", {
        filter: { status: { _eq: "published" } },
        sort: ["sort_order"],
      })
    );
  } catch {
    console.error("Failed to fetch pricing");
    return [];
  }
}

// Testimonials
export async function getTestimonials(site?: Site): Promise<Testimonial[]> {
  const targetSite = site || getSiteId();
  try {
    return await directus.request(
      readItems("testimonials", {
        filter: {
          site: { _eq: targetSite },
          status: { _eq: "published" },
        },
        sort: ["-is_featured", "sort_order"],
      })
    );
  } catch {
    console.error("Failed to fetch testimonials");
    return [];
  }
}
