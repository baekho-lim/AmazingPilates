import { footerContent, contactInfo, siteConfig } from "@/content/home";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-[var(--color-wp-gray-900)] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">{footerContent.brand}</h3>
            <p className="text-[var(--color-wp-gray-400)] text-sm mb-4">
              {footerContent.tagline.kr}
            </p>
            <p className="text-[var(--color-wp-gray-500)] text-sm">
              {contactInfo.address.kr}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2 text-[var(--color-wp-gray-400)]">
              {footerContent.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label.kr}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-[var(--color-wp-gray-400)] text-sm">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  전화: {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  이메일: {contactInfo.email}
                </a>
              </li>
            </ul>
            {/* Social/Channel Links */}
            <div className="flex gap-3 mt-4">
              <a
                href={contactInfo.naverTalkTalk}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#03C75A] text-white hover:opacity-80 transition-opacity"
                aria-label="네이버 톡톡"
              >
                <span className="text-xs font-bold">N</span>
              </a>
              <a
                href={contactInfo.kakaoChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FEE500] text-[#3C1E1E] hover:opacity-80 transition-opacity"
                aria-label="카카오톡 채널"
              >
                <span className="text-xs font-bold">K</span>
              </a>
            </div>
          </div>
        </div>

        {/* Related Site */}
        <div className="py-6 border-t border-[var(--color-wp-gray-800)]">
          <p className="text-sm text-[var(--color-wp-gray-500)] mb-2">관련 사이트</p>
          <a
            href={footerContent.relatedSite.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-wp-gray-400)] hover:text-white transition-colors"
          >
            {footerContent.relatedSite.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[var(--color-wp-gray-800)] text-center">
          <p className="text-sm text-[var(--color-wp-gray-500)]">
            © {currentYear} {siteConfig.copyright}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
