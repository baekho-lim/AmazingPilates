import { Container } from "./Container";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  brandName: string;
  brandNameKr: string;
  tagline: string;
  quickLinks: FooterLink[];
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  socialLinks?: FooterLink[];
  crossSiteLink?: {
    label: string;
    href: string;
    logo?: React.ReactNode;
  };
  copyrightHolder: string;
  legalLinks?: FooterLink[];
}

export function Footer({
  brandName,
  brandNameKr,
  tagline,
  quickLinks,
  contactInfo,
  socialLinks,
  crossSiteLink,
  copyrightHolder,
  legalLinks,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {brandName} | {brandNameKr}
            </h3>
            <p className="text-gray-400 text-sm">{tagline}</p>
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex gap-4 mt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>주소: {contactInfo.address}</li>
              <li>
                전화:{" "}
                <a
                  href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                이메일:{" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Cross-site Link */}
        {crossSiteLink && (
          <div className="py-6 border-t border-gray-800 mb-6">
            <p className="text-sm text-gray-500 mb-3">관련 사이트</p>
            <a
              href={crossSiteLink.href}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {crossSiteLink.logo}
              <span>{crossSiteLink.label}</span>
              <span>→</span>
            </a>
          </div>
        )}

        {/* Copyright & Legal */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} {copyrightHolder}. All rights reserved.
          </p>
          {legalLinks && legalLinks.length > 0 && (
            <div className="flex gap-4 text-sm text-gray-500">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}
