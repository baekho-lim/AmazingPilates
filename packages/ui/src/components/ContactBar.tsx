"use client";

export interface ContactBarProps {
  phone: string;
  kakaoUrl: string;
  naverTalkTalkUrl: string;
  variant?: "inline" | "sticky";
}

export function ContactBar({
  phone,
  kakaoUrl,
  naverTalkTalkUrl,
  variant = "inline",
}: ContactBarProps) {
  const baseStyles = variant === "sticky"
    ? "fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 py-3 px-4 md:hidden"
    : "bg-gray-100 py-3 px-4 rounded-lg";

  return (
    <div className={baseStyles}>
      <div className="flex items-center justify-center gap-4">
        {/* Phone */}
        <a
          href={`tel:${phone.replace(/-/g, "")}`}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
          data-event="phone_click"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>전화 문의</span>
        </a>

        {/* Kakao */}
        <a
          href={kakaoUrl}
          className="flex items-center gap-2 px-4 py-2 bg-[#FAE100] rounded-full text-[#3C1E1E] hover:bg-[#F5D800] transition-colors text-sm font-medium"
          target="_blank"
          rel="noopener noreferrer"
          data-event="kakao_channel_click"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C6.5 3 2 6.58 2 11c0 2.84 1.87 5.33 4.67 6.77l-.92 3.38c-.08.3.26.54.52.37l3.98-2.63c.58.08 1.16.11 1.75.11 5.5 0 10-3.58 10-8s-4.5-8-10-8z" />
          </svg>
          <span>카카오톡</span>
        </a>

        {/* Naver TalkTalk */}
        <a
          href={naverTalkTalkUrl}
          className="flex items-center gap-2 px-4 py-2 bg-[#03C75A] rounded-full text-white hover:bg-[#02B350] transition-colors text-sm font-medium"
          target="_blank"
          rel="noopener noreferrer"
          data-event="naver_talktalk_click"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
          </svg>
          <span>네이버 톡톡</span>
        </a>
      </div>
    </div>
  );
}

// 블로그 전용 CTA (네이버 톡톡만 표시)
export interface BlogCTAProps {
  naverTalkTalkUrl: string;
  title?: string;
  description?: string;
}

export function BlogCTA({
  naverTalkTalkUrl,
  title = "궁금한 점이 있으신가요?",
  description = "네이버 톡톡으로 편하게 문의하세요",
}: BlogCTAProps) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 text-center my-12">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a
        href={naverTalkTalkUrl}
        className="inline-flex items-center gap-2 px-8 py-3 bg-[#03C75A] rounded-full text-white hover:bg-[#02B350] transition-colors font-semibold"
        target="_blank"
        rel="noopener noreferrer"
        data-event="naver_talktalk_click"
        data-location="blog_bottom_cta"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
        </svg>
        <span>네이버 톡톡 문의하기</span>
      </a>
    </div>
  );
}
