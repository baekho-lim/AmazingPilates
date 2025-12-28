import { heroContent, contactInfo } from "@/content/home";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-wp-cream)] to-[var(--color-wp-beige)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C5530' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-wp-gray-900)] mb-4">
          {heroContent.headline.kr}
        </h1>

        {/* English Subtitle */}
        <p className="text-xl md:text-2xl text-[var(--color-wp-primary)] font-medium mb-6">
          {heroContent.headline.en}
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-[var(--color-wp-gray-600)] max-w-2xl mx-auto mb-10 whitespace-pre-line leading-relaxed">
          {heroContent.tagline.kr}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={contactInfo.naverTalkTalk}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-[var(--color-wp-primary)] rounded-full hover:bg-[var(--color-wp-primary-dark)] transition-all hover:scale-105 shadow-lg shadow-[var(--color-wp-primary)]/25"
          >
            {heroContent.cta.primary.kr}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
          <a
            href="#programs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-[var(--color-wp-primary)] bg-white border-2 border-[var(--color-wp-primary)] rounded-full hover:bg-[var(--color-wp-primary)] hover:text-white transition-all"
          >
            {heroContent.cta.secondary.kr}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Quick Contact */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={contactInfo.naverTalkTalk}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#03C75A] text-white rounded-full text-sm font-medium hover:bg-[#02B350] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            네이버 톡톡
          </a>
          <a
            href={contactInfo.kakaoChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#FEE500] text-[#3C1E1E] rounded-full text-sm font-medium hover:bg-[#F5DC00] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.48 3 2 6.58 2 11c0 2.85 1.86 5.34 4.64 6.75-.14.53-.92 3.38-.95 3.6 0 0-.02.17.09.24.1.06.23.02.23.02.31-.04 3.6-2.34 4.17-2.73.59.09 1.2.12 1.82.12 5.52 0 10-3.58 10-8 0-4.42-4.48-8-10-8z"/>
            </svg>
            카카오톡
          </a>
          <a
            href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-[var(--color-wp-gray-700)] rounded-full text-sm font-medium border border-[var(--color-wp-gray-200)] hover:border-[var(--color-wp-primary)] hover:text-[var(--color-wp-primary)] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {contactInfo.phone}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[var(--color-wp-gray-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
