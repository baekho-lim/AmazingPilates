// Button locations
export type ButtonLocation =
  | "header_cta"
  | "header_contact_bar"
  | "hero_primary"
  | "hero_secondary"
  | "section_cta"
  | "blog_bottom_cta"
  | "footer_contact"
  | "sticky_bar"
  | "contact_page"
  | "inquiry_form";

// Event types
export interface BaseEvent {
  event: string;
  page_location: string;
}

export interface ContactClickEvent extends BaseEvent {
  event: "naver_talktalk_click" | "phone_click" | "kakao_channel_click";
  button_location: ButtonLocation;
}

export interface FormSubmitEvent extends BaseEvent {
  event: "form_submit_success";
  form_type: "inquiry" | "application";
}

export interface CourseViewEvent extends BaseEvent {
  event: "course_detail_view";
  course_name: string;
  course_level: string;
}

export interface ProgramViewEvent extends BaseEvent {
  event: "program_detail_view";
  program_name: string;
}

export interface BlogReadEvent extends BaseEvent {
  event: "blog_post_read";
  post_title: string;
  category: string;
}

export interface FAQExpandEvent extends BaseEvent {
  event: "faq_expand";
  question_text: string;
}

export interface ScrollDepthEvent extends BaseEvent {
  event: "scroll_depth";
  percent: 25 | 50 | 75 | 100;
}

export interface TimeOnPageEvent extends BaseEvent {
  event: "time_on_page";
  seconds: 30 | 60 | 120 | 180;
}

// Type guard for dataLayer
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

// Push event to dataLayer
export function pushEvent(event: Record<string, unknown>): void {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  }
}

// Specific event functions
export function trackNaverTalkTalkClick(buttonLocation: ButtonLocation): void {
  pushEvent({
    event: "naver_talktalk_click",
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
    button_location: buttonLocation,
  });
}

export function trackPhoneClick(buttonLocation: ButtonLocation): void {
  pushEvent({
    event: "phone_click",
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
    button_location: buttonLocation,
  });
}

export function trackKakaoClick(buttonLocation: ButtonLocation): void {
  pushEvent({
    event: "kakao_channel_click",
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
    button_location: buttonLocation,
  });
}

export function trackFormSubmit(formType: "inquiry" | "application"): void {
  pushEvent({
    event: "form_submit_success",
    form_type: formType,
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackCourseView(courseName: string, courseLevel: string): void {
  pushEvent({
    event: "course_detail_view",
    course_name: courseName,
    course_level: courseLevel,
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackProgramView(programName: string): void {
  pushEvent({
    event: "program_detail_view",
    program_name: programName,
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackBlogRead(postTitle: string, category: string): void {
  pushEvent({
    event: "blog_post_read",
    post_title: postTitle,
    category: category,
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackFAQExpand(questionText: string): void {
  pushEvent({
    event: "faq_expand",
    question_text: questionText,
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackScrollDepth(percent: 25 | 50 | 75 | 100): void {
  pushEvent({
    event: "scroll_depth",
    percent: percent,
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackTimeOnPage(seconds: 30 | 60 | 120 | 180): void {
  pushEvent({
    event: "time_on_page",
    seconds: seconds,
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  });
}
