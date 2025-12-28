import { contactSectionContent, contactInfo } from "@/content/home";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 bg-[var(--color-wp-cream)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-wp-gray-900)] mb-4">
            {contactSectionContent.title.kr}
          </h2>
          <p className="text-lg text-[var(--color-wp-gray-600)]">
            {contactSectionContent.subtitle.kr}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="aspect-square lg:aspect-auto lg:min-h-[400px] bg-[var(--color-wp-gray-200)] rounded-3xl flex items-center justify-center">
            <div className="text-center text-[var(--color-wp-gray-500)] p-8">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg font-medium mb-2">{contactSectionContent.mapPlaceholder.kr}</p>
              <p className="text-sm">네이버/카카오 지도 iframe 추가 예정</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--color-wp-primary)]/10 text-[var(--color-wp-primary)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-wp-gray-900)] mb-1">주소</h4>
                  <p className="text-[var(--color-wp-gray-600)]">{contactInfo.address.kr}</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--color-wp-primary)]/10 text-[var(--color-wp-primary)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[var(--color-wp-gray-900)] mb-3">영업시간</h4>
                  <div className="space-y-2 text-[var(--color-wp-gray-600)]">
                    <div className="flex justify-between">
                      <span>평일</span>
                      <span className="font-medium">{contactInfo.businessHours.weekday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>토요일</span>
                      <span className="font-medium">{contactInfo.businessHours.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>일요일/공휴일</span>
                      <span className="font-medium text-[var(--color-wp-gray-400)]">{contactInfo.businessHours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={contactInfo.naverTalkTalk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-[#03C75A] text-white rounded-2xl hover:bg-[#02B350] transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span className="text-sm font-medium">{contactSectionContent.buttons.naver.kr}</span>
              </a>
              <a
                href={contactInfo.kakaoChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-[#FEE500] text-[#3C1E1E] rounded-2xl hover:bg-[#F5DC00] transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.48 3 2 6.58 2 11c0 2.85 1.86 5.34 4.64 6.75-.14.53-.92 3.38-.95 3.6 0 0-.02.17.09.24.1.06.23.02.23.02.31-.04 3.6-2.34 4.17-2.73.59.09 1.2.12 1.82.12 5.52 0 10-3.58 10-8 0-4.42-4.48-8-10-8z"/>
                </svg>
                <span className="text-sm font-medium">{contactSectionContent.buttons.kakao.kr}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                className="flex flex-col items-center gap-2 p-4 bg-[var(--color-wp-primary)] text-white rounded-2xl hover:bg-[var(--color-wp-primary-dark)] transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium">{contactSectionContent.buttons.phone.kr}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
