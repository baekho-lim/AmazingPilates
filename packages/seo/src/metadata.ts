import type { Metadata } from "next";
import type { GlobalSettings, Page, BlogPost, WPProgram, KCCourse } from "@repo/cms";

interface BaseMetadataOptions {
  settings: GlobalSettings;
  baseUrl: string;
}

// Generate base metadata for a site
export function generateBaseMetadata(options: BaseMetadataOptions): Metadata {
  const { settings, baseUrl } = options;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: `${settings.brand_name_en} | ${settings.brand_name_kr}`,
      template: `%s | ${settings.brand_name_en}`,
    },
    description: settings.tagline_kr,
    authors: [{ name: settings.brand_name_kr }],
    creator: settings.brand_name_kr,
    publisher: settings.brand_name_kr,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: baseUrl,
      siteName: settings.brand_name_en,
      title: `${settings.brand_name_en} | ${settings.brand_name_kr}`,
      description: settings.tagline_kr,
      images: settings.meta_default_image
        ? [
            {
              url: settings.meta_default_image,
              width: 1200,
              height: 630,
              alt: settings.brand_name_kr,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${settings.brand_name_en} | ${settings.brand_name_kr}`,
      description: settings.tagline_kr,
      images: settings.meta_default_image ? [settings.meta_default_image] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Generate page metadata
interface PageMetadataOptions extends BaseMetadataOptions {
  page: Page;
  path: string;
}

export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const { settings, baseUrl, page, path } = options;
  const url = `${baseUrl}${path}`;

  const title = page.seo_title_kr || page.title_kr;
  const description = page.seo_description_kr || page.hero_subtitle_kr;

  return {
    title,
    description,
    keywords: page.seo_keywords_kr?.split(",").map((k) => k.trim()),
    openGraph: {
      title: `${title} | ${settings.brand_name_en}`,
      description,
      url,
      images: page.og_image
        ? [{ url: page.og_image, width: 1200, height: 630 }]
        : settings.meta_default_image
          ? [{ url: settings.meta_default_image, width: 1200, height: 630 }]
          : [],
    },
    twitter: {
      title: `${title} | ${settings.brand_name_en}`,
      description,
      images: page.og_image ? [page.og_image] : settings.meta_default_image ? [settings.meta_default_image] : [],
    },
    alternates: {
      canonical: page.canonical_url || url,
    },
    robots: page.noindex ? { index: false, follow: true } : undefined,
  };
}

// Generate blog post metadata
interface BlogPostMetadataOptions extends BaseMetadataOptions {
  post: BlogPost;
}

export function generateBlogPostMetadata(
  options: BlogPostMetadataOptions
): Metadata {
  const { settings, baseUrl, post } = options;
  const url = `${baseUrl}/blog/${post.slug}`;

  const title = post.seo_title_kr || post.title_kr;
  const description = post.seo_description_kr || post.excerpt_kr;

  return {
    title,
    description,
    keywords: post.focus_keyword_kr ? [post.focus_keyword_kr] : undefined,
    openGraph: {
      type: "article",
      title: `${title} | ${settings.brand_name_en}`,
      description,
      url,
      publishedTime: post.publish_date,
      modifiedTime: post.updated_at,
      images: post.og_image || post.featured_image
        ? [
            {
              url: post.og_image || post.featured_image || "",
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${settings.brand_name_en}`,
      description,
      images: post.og_image || post.featured_image
        ? [post.og_image || post.featured_image || ""]
        : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Generate program metadata (Site A)
interface ProgramMetadataOptions extends BaseMetadataOptions {
  program: WPProgram;
}

export function generateProgramMetadata(
  options: ProgramMetadataOptions
): Metadata {
  const { settings, baseUrl, program } = options;
  const url = `${baseUrl}/programs/${program.slug}`;

  const title = program.seo_title_kr || program.name_kr;
  const description = program.seo_description_kr || program.short_description_kr;

  return {
    title,
    description,
    keywords: program.focus_keywords_kr?.split(",").map((k) => k.trim()),
    openGraph: {
      title: `${title} | ${settings.brand_name_en}`,
      description,
      url,
      images: program.featured_image
        ? [{ url: program.featured_image, width: 1200, height: 630 }]
        : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Generate course metadata (Site B)
interface CourseMetadataOptions extends BaseMetadataOptions {
  course: KCCourse;
}

export function generateCourseMetadata(
  options: CourseMetadataOptions
): Metadata {
  const { settings, baseUrl, course } = options;
  const url = `${baseUrl}/certification/${course.slug}`;

  const title = course.seo_title_kr || course.name_kr;
  const description = course.seo_description_kr || course.short_description_kr;

  return {
    title,
    description,
    keywords: course.focus_keywords_kr?.split(",").map((k) => k.trim()),
    openGraph: {
      title: `${title} | ${settings.brand_name_en}`,
      description,
      url,
      images: course.featured_image
        ? [{ url: course.featured_image, width: 1200, height: 630 }]
        : [],
    },
    alternates: {
      canonical: url,
    },
  };
}
