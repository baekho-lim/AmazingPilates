"use client";

import { contactInfo } from "@/content/home";

export function FloatingCTA() {
  return (
    <>
      {/* Mobile Bottom Fixed Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[var(--color-wp-gray-100)] shadow-lg">
        <div className="grid grid-cols-3 gap-1 p-2">
          <a
            href={contactInfo.naverTalkTalk}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3 text-white bg-[#03C75A] rounded-xl active:scale-95 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs font-medium">네이버 톡톡</span>
          </a>
          <a
            href={contactInfo.kakaoChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3 text-[#3C1E1E] bg-[#FEE500] rounded-xl active:scale-95 transition-transform"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.48 3 2 6.58 2 11c0 2.85 1.86 5.34 4.64 6.75-.14.53-.92 3.38-.95 3.6 0 0-.02.17.09.24.1.06.23.02.23.02.31-.04 3.6-2.34 4.17-2.73.59.09 1.2.12 1.82.12 5.52 0 10-3.58 10-8 0-4.42-4.48-8-10-8z"/>
            </svg>
            <span className="text-xs font-medium">카카오톡</span>
          </a>
          <a
            href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
            className="flex flex-col items-center justify-center gap-1 py-3 text-[var(--color-wp-primary)] bg-[var(--color-wp-primary)]/10 rounded-xl active:scale-95 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xs font-medium">전화</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href={contactInfo.naverTalkTalk}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 text-white bg-[#03C75A] rounded-full shadow-lg hover:bg-[#02B350] hover:scale-105 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="font-medium">상담하기</span>
        </a>
      </div>

      {/* Spacer for mobile fixed bar */}
      <div className="h-20 md:hidden" />
    </>
  );
}
