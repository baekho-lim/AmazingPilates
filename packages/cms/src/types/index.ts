// Site enum
export type Site = "wonder_pilates" | "k_classic_pilates";

// Status enums
export type Status = "published" | "draft" | "archived";
export type ScheduleStatus = "open" | "closed" | "full" | "completed";

// Base types
export interface BaseCollection {
  id: string;
  created_at: string;
  updated_at: string;
}

// Global Settings
export interface GlobalSettings extends BaseCollection {
  site: Site;
  brand_name_kr: string;
  brand_name_en: string;
  legal_name_kr?: string;
  legal_name_en?: string;
  tagline_kr?: string;
  tagline_en?: string;
  address_kr: string;
  address_en?: string;
  address_street: string;
  address_city: string;
  address_district: string;
  address_province: string;
  postal_code: string;
  country: string;
  phone: string;
  phone_display: string;
  email: string;
  kakao_channel_url: string;
  kakao_channel_id?: string;
  naver_talktalk_url: string;
  naver_place_url?: string;
  naver_blog_url?: string;
  instagram_url?: string;
  youtube_url?: string;
  business_hours: BusinessHours;
  geo_lat: number;
  geo_lng: number;
  copyright_year_start: number;
  gtm_id?: string;
  ga4_id?: string;
  naver_analytics_id?: string;
  meta_default_image?: string;
  logo_primary?: string;
  logo_white?: string;
  logo_dark?: string;
  favicon?: string;
}

export interface BusinessHours {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
  holidays: string;
  notes_kr?: string;
  notes_en?: string;
}

export interface DayHours {
  open: string | null;
  close: string | null;
  closed: boolean;
}

// People / Instructors
export interface Person extends BaseCollection {
  slug: string;
  name_kr: string;
  name_en?: string;
  role_kr: string;
  role_en?: string;
  positions: Position[];
  bio_short_kr?: string;
  bio_short_en?: string;
  bio_full_kr?: string;
  bio_full_en?: string;
  certifications: Certification[];
  publications?: Publication[];
  milestones?: Milestone[];
  photo_primary?: string;
  photo_secondary?: string;
  email?: string;
  display_on_sites: Site[];
  sort_order?: number;
  status: Status;
  seo_title_kr?: string;
  seo_title_en?: string;
  seo_description_kr?: string;
  seo_description_en?: string;
}

export interface Position {
  title_kr: string;
  title_en?: string;
  organization_kr: string;
  organization_en?: string;
  current: boolean;
}

export interface Certification {
  name_kr: string;
  name_en?: string;
  issuer_kr?: string;
  issuer_en?: string;
  year?: number;
  credential_id?: string;
}

export interface Publication {
  title_kr: string;
  title_en?: string;
  type: string;
  year?: number;
  isbn?: string;
  description_kr?: string;
  description_en?: string;
}

export interface Milestone {
  year: number;
  title_kr: string;
  title_en?: string;
  description_kr?: string;
  description_en?: string;
}

// Pages
export interface Page extends BaseCollection {
  site: Site;
  slug: string;
  title_kr: string;
  title_en?: string;
  template: PageTemplate;
  hero_title_kr?: string;
  hero_title_en?: string;
  hero_subtitle_kr?: string;
  hero_subtitle_en?: string;
  hero_image?: string;
  hero_cta_text_kr?: string;
  hero_cta_text_en?: string;
  hero_cta_link?: string;
  content_blocks?: ContentBlock[];
  parent_page?: string;
  show_in_nav: boolean;
  nav_order?: number;
  status: Status;
  seo_title_kr?: string;
  seo_title_en?: string;
  seo_description_kr?: string;
  seo_description_en?: string;
  seo_keywords_kr?: string;
  seo_keywords_en?: string;
  og_image?: string;
  canonical_url?: string;
  noindex?: boolean;
  schema_type?: string;
  schema_data?: Record<string, unknown>;
}

export type PageTemplate =
  | "home"
  | "about"
  | "programs_hub"
  | "program_detail"
  | "certification_hub"
  | "certification_detail"
  | "equipment_hub"
  | "equipment_detail"
  | "pricing"
  | "schedule"
  | "blog_hub"
  | "blog_post"
  | "faq"
  | "contact"
  | "apply"
  | "generic";

export interface ContentBlock {
  type: string;
  data: Record<string, unknown>;
}

// Blog Posts
export interface BlogPost extends BaseCollection {
  site: Site;
  slug: string;
  title_kr: string;
  title_en?: string;
  excerpt_kr: string;
  excerpt_en?: string;
  content_kr: string;
  content_en?: string;
  featured_image?: string;
  category?: string;
  tags?: string[];
  author?: string;
  read_time_minutes?: number;
  publish_date: string;
  status: Status | "scheduled";
  seo_title_kr?: string;
  seo_title_en?: string;
  seo_description_kr?: string;
  seo_description_en?: string;
  focus_keyword_kr?: string;
  focus_keyword_en?: string;
  og_image?: string;
  schema_article_type?: "Article" | "BlogPosting" | "NewsArticle";
  related_posts?: string[];
}

// FAQs
export interface FAQ extends BaseCollection {
  site: Site;
  question_kr: string;
  question_en?: string;
  answer_kr: string;
  answer_en?: string;
  category: string;
  display_pages?: string[];
  sort_order?: number;
  status: Status;
}

// Site A: Programs
export interface WPProgram extends BaseCollection {
  slug: string;
  name_kr: string;
  name_en?: string;
  short_description_kr: string;
  short_description_en?: string;
  full_description_kr: string;
  full_description_en?: string;
  duration_minutes: number;
  class_size_min: number;
  class_size_max: number;
  level?: "beginner" | "intermediate" | "advanced" | "all";
  benefits: Benefit[];
  ideal_for?: string[];
  equipment_used?: string[];
  featured_image?: string;
  gallery?: string[];
  icon?: string;
  sort_order?: number;
  is_featured?: boolean;
  status: Status;
  seo_title_kr?: string;
  seo_title_en?: string;
  seo_description_kr?: string;
  seo_description_en?: string;
  focus_keywords_kr?: string;
}

export interface Benefit {
  title_kr: string;
  title_en?: string;
  description_kr?: string;
  description_en?: string;
}

// Site A: Pricing
export interface WPPricing extends BaseCollection {
  program: string;
  name_kr: string;
  name_en?: string;
  sessions: number;
  price: number;
  price_per_session?: number;
  validity_days?: number;
  description_kr?: string;
  description_en?: string;
  is_popular?: boolean;
  sort_order?: number;
  status: Status;
}

// Site B: Certification Courses
export interface KCCourse extends BaseCollection {
  slug: string;
  name_kr: string;
  name_en?: string;
  level: "beginner" | "intermediate" | "advanced" | "master";
  short_description_kr: string;
  short_description_en?: string;
  full_description_kr: string;
  full_description_en?: string;
  duration_hours: number;
  duration_weeks?: number;
  class_schedule_kr?: string;
  class_schedule_en?: string;
  prerequisites_kr?: string;
  prerequisites_en?: string;
  learning_outcomes: LearningOutcome[];
  curriculum_outline: CurriculumItem[];
  certification_awarded_kr: string;
  certification_awarded_en?: string;
  featured_image?: string;
  gallery?: string[];
  instructor?: string;
  max_students?: number;
  sort_order?: number;
  is_featured?: boolean;
  status: Status;
  seo_title_kr?: string;
  seo_title_en?: string;
  seo_description_kr?: string;
  seo_description_en?: string;
  focus_keywords_kr?: string;
}

export interface LearningOutcome {
  text_kr: string;
  text_en?: string;
}

export interface CurriculumItem {
  module: string;
  title_kr: string;
  title_en?: string;
  description_kr?: string;
  description_en?: string;
  hours?: number;
}

// Site B: Equipment Courses
export interface KCEquipmentCourse extends BaseCollection {
  slug: string;
  equipment_type: "reformer" | "cadillac" | "chair" | "barrel";
  name_kr: string;
  name_en?: string;
  level: "intermediate" | "advanced";
  short_description_kr: string;
  short_description_en?: string;
  full_description_kr: string;
  full_description_en?: string;
  duration_hours: number;
  prerequisites_kr?: string;
  prerequisites_en?: string;
  exercises_covered?: Exercise[];
  textbook?: string;
  featured_image?: string;
  gallery?: string[];
  instructor?: string;
  sort_order?: number;
  status: Status;
  seo_title_kr?: string;
  seo_title_en?: string;
  seo_description_kr?: string;
  seo_description_en?: string;
}

export interface Exercise {
  name_kr: string;
  name_en?: string;
  level?: string;
}

// Site B: Pricing
export interface KCPricing extends BaseCollection {
  course?: string;
  equipment_course?: string;
  name_kr: string;
  name_en?: string;
  price: number;
  early_bird_price?: number;
  early_bird_deadline?: string;
  includes: IncludeItem[];
  description_kr?: string;
  description_en?: string;
  is_popular?: boolean;
  sort_order?: number;
  status: Status;
}

export interface IncludeItem {
  text_kr: string;
  text_en?: string;
}

// Site B: Textbooks
export interface KCTextbook extends BaseCollection {
  slug: string;
  title_kr: string;
  title_en?: string;
  subtitle_kr?: string;
  subtitle_en?: string;
  description_kr: string;
  description_en?: string;
  author?: string;
  publish_year: number;
  isbn?: string;
  pages?: number;
  cover_image?: string;
  table_of_contents?: TOCItem[];
  related_courses?: string[];
  purchase_link?: string;
  sort_order?: number;
  status: Status;
}

export interface TOCItem {
  chapter: string;
  title_kr: string;
  title_en?: string;
}

// Testimonials
export interface Testimonial extends BaseCollection {
  site: Site;
  name_kr: string;
  name_en?: string;
  role_kr?: string;
  role_en?: string;
  content_kr: string;
  content_en?: string;
  photo?: string;
  program?: string;
  course?: string;
  rating?: number;
  date?: string;
  source?: string;
  is_featured?: boolean;
  sort_order?: number;
  status: Status;
}

// Schedules
export interface WPSchedule extends BaseCollection {
  program: string;
  day_of_week: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
  start_time: string;
  end_time: string;
  instructor?: string;
  max_capacity?: number;
  notes_kr?: string;
  notes_en?: string;
  is_active: boolean;
}

export interface KCSchedule extends BaseCollection {
  course?: string;
  equipment_course?: string;
  cohort_name_kr: string;
  cohort_name_en?: string;
  start_date: string;
  end_date?: string;
  class_days_kr: string;
  class_days_en?: string;
  class_time: string;
  location_kr?: string;
  location_en?: string;
  max_students?: number;
  spots_remaining?: number;
  registration_deadline?: string;
  status: ScheduleStatus;
  notes_kr?: string;
  notes_en?: string;
}

// Directus Schema
export interface Schema {
  global_settings: GlobalSettings[];
  people: Person[];
  pages: Page[];
  blog_posts: BlogPost[];
  faqs: FAQ[];
  wp_programs: WPProgram[];
  wp_pricing: WPPricing[];
  wp_schedule: WPSchedule[];
  kc_courses: KCCourse[];
  kc_equipment_courses: KCEquipmentCourse[];
  kc_pricing: KCPricing[];
  kc_textbooks: KCTextbook[];
  kc_schedule: KCSchedule[];
  testimonials: Testimonial[];
}
