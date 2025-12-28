import { programsContent, contactInfo } from "@/content/home";

export function Programs() {
  return (
    <section id="programs" className="py-20 md:py-28 px-4 bg-[var(--color-wp-cream)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-wp-gray-900)] mb-4">
            {programsContent.title.kr}
          </h2>
          <p className="text-lg text-[var(--color-wp-gray-600)]">
            {programsContent.subtitle.kr}
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programsContent.items.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Badge */}
              {item.badge && (
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-[var(--color-wp-secondary)]/20 text-[var(--color-wp-secondary-dark)] rounded-full">
                  {item.badge.kr}
                </span>
              )}

              {/* Icon Placeholder */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-wp-primary)]/10 text-[var(--color-wp-primary)] mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-wp-gray-900)] mb-3">
                {item.title.kr}
              </h3>
              <p className="text-[var(--color-wp-gray-600)] leading-relaxed mb-4">
                {item.description.kr}
              </p>

              {/* Hover Arrow */}
              <div className="flex items-center text-[var(--color-wp-primary)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">자세히 보기</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={contactInfo.naverTalkTalk}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-wp-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-wp-primary-dark)] transition-all hover:scale-105 shadow-lg shadow-[var(--color-wp-primary)]/25"
          >
            {programsContent.cta.kr}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
