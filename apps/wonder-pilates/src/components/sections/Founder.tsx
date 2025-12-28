import { founderContent, contactInfo } from "@/content/home";

export function Founder() {
  return (
    <section id="founder" className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-wp-gray-900)] mb-4">
            {founderContent.sectionTitle.kr}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[var(--color-wp-cream)] to-[var(--color-wp-beige)] rounded-3xl p-8 text-center sticky top-24">
              {/* Avatar Placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[var(--color-wp-primary)]/10 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-wp-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-[var(--color-wp-gray-900)] mb-1">
                {founderContent.name.kr}
              </h3>
              <p className="text-[var(--color-wp-primary)] font-medium mb-4">
                {founderContent.role.kr}
              </p>

              <p className="text-[var(--color-wp-gray-600)] leading-relaxed mb-6">
                {founderContent.introduction.kr}
              </p>

              {/* Current Positions */}
              <div className="space-y-2">
                {founderContent.currentPositions.map((position, idx) => (
                  <p key={idx} className="text-sm text-[var(--color-wp-gray-700)] font-medium">
                    {position.kr}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Certifications */}
            <div className="bg-[var(--color-wp-gray-50)] rounded-2xl p-8">
              <h4 className="text-lg font-bold text-[var(--color-wp-gray-900)] mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-wp-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                자격 및 인증
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {founderContent.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl"
                  >
                    <div className="w-2 h-2 rounded-full bg-[var(--color-wp-primary)]" />
                    <span className="text-[var(--color-wp-gray-700)]">{cert.kr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div className="bg-[var(--color-wp-gray-50)] rounded-2xl p-8">
              <h4 className="text-lg font-bold text-[var(--color-wp-gray-900)] mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-wp-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                저서 및 교재
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {founderContent.publications.map((pub, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl"
                  >
                    <div className="w-2 h-2 rounded-full bg-[var(--color-wp-secondary)]" />
                    <span className="text-[var(--color-wp-gray-700)]">{pub.kr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones */}
            <div className="bg-[var(--color-wp-gray-50)] rounded-2xl p-8">
              <h4 className="text-lg font-bold text-[var(--color-wp-gray-900)] mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-wp-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                주요 연혁
              </h4>
              <div className="space-y-4">
                {founderContent.milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl"
                  >
                    <span className="px-3 py-1 text-sm font-bold text-[var(--color-wp-primary)] bg-[var(--color-wp-primary)]/10 rounded-full">
                      {milestone.year}
                    </span>
                    <span className="text-[var(--color-wp-gray-700)] font-medium">
                      {milestone.kr}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-[var(--color-wp-gray-600)] mb-6">
            {founderContent.cta.subtext.kr}
          </p>
          <a
            href={contactInfo.naverTalkTalk}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-[var(--color-wp-primary)] rounded-full hover:bg-[var(--color-wp-primary-dark)] transition-all hover:scale-105 shadow-lg shadow-[var(--color-wp-primary)]/25"
          >
            {founderContent.cta.text.kr}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
