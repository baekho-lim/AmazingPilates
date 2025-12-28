"use client";

import { useState } from "react";
import { siteConfig, navItems, contactInfo } from "@/content/home";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-wp-gray-100)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - 텍스트만 */}
          <a href="/" className="flex flex-col">
            <span className="text-lg md:text-xl font-bold text-[var(--color-wp-primary)]">
              {siteConfig.brand.kr}
            </span>
            <span className="text-xs text-[var(--color-wp-gray-500)]">
              {siteConfig.brand.en}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`text-sm font-medium transition-colors ${
                  item.external
                    ? "text-[var(--color-wp-secondary-dark)] hover:text-[var(--color-wp-primary)] flex items-center gap-1"
                    : "text-[var(--color-wp-gray-600)] hover:text-[var(--color-wp-primary)]"
                }`}
              >
                {item.label.kr}
                {item.external && (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={contactInfo.naverTalkTalk}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-[#03C75A] rounded-full hover:bg-[#02B350] transition-colors"
            >
              톡톡 상담
            </a>
            <a
              href={contactInfo.kakaoChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-[#3C1E1E] bg-[#FEE500] rounded-full hover:bg-[#F5DC00] transition-colors"
            >
              카카오톡
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
              className="px-4 py-2 text-sm font-medium text-[var(--color-wp-primary)] border border-[var(--color-wp-primary)] rounded-full hover:bg-[var(--color-wp-primary)] hover:text-white transition-colors"
            >
              전화
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-wp-gray-100)]">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`py-2 flex items-center gap-2 ${
                    item.external
                      ? "text-[var(--color-wp-secondary-dark)]"
                      : "text-[var(--color-wp-gray-700)] hover:text-[var(--color-wp-primary)]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label.kr}
                  {item.external && (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2 pt-4 border-t border-[var(--color-wp-gray-100)]">
              <a
                href={contactInfo.naverTalkTalk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-white bg-[#03C75A] rounded-xl"
              >
                네이버 톡톡 상담
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={contactInfo.kakaoChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 text-[#3C1E1E] bg-[#FEE500] rounded-xl"
                >
                  카카오톡
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                  className="flex items-center justify-center py-3 text-[var(--color-wp-primary)] border border-[var(--color-wp-primary)] rounded-xl"
                >
                  전화 문의
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
