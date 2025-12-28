"use client";

import { useState } from "react";
import { Container } from "./Container";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeaderProps {
  logo: React.ReactNode;
  navItems: NavItem[];
  ctaButton?: {
    label: string;
    href: string;
  };
  crossSiteLink?: {
    label: string;
    href: string;
  };
}

export function Header({
  logo,
  navItems,
  ctaButton,
  crossSiteLink,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            {logo}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.href)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-[var(--color-primary)] transition-colors font-medium"
                >
                  {item.label}
                  {item.children && (
                    <span className="ml-1 text-xs">▼</span>
                  )}
                </a>
                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[160px]">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-primary)]"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {crossSiteLink && (
              <a
                href={crossSiteLink.href}
                className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {crossSiteLink.label} ↗
              </a>
            )}
          </nav>

          {/* CTA Button (Desktop) */}
          {ctaButton && (
            <a
              href={ctaButton.href}
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              {ctaButton.label}
            </a>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  <a
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-[var(--color-primary)] font-medium"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block py-1.5 text-sm text-gray-600 hover:text-[var(--color-primary)]"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {crossSiteLink && (
                <a
                  href={crossSiteLink.href}
                  className="block py-2 text-gray-500 hover:text-gray-700 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {crossSiteLink.label} ↗
                </a>
              )}
              {ctaButton && (
                <a
                  href={ctaButton.href}
                  className="mt-2 inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-full"
                >
                  {ctaButton.label}
                </a>
              )}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
