export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-kc-primary)] to-[var(--color-kc-primary-dark)]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            K Classic Pilates
          </h1>
          <p className="text-lg md:text-xl mb-2 text-[var(--color-kc-secondary)]">
            필라테스 지도자의 새로운 기준
          </p>
          <p className="text-base md:text-lg mb-8 text-white/80">
            체계적인 커리큘럼과 공인 자격증으로 전문 필라테스 강사를 양성합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/certification"
              className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-kc-secondary)] text-[var(--color-kc-primary-dark)] font-semibold rounded-full hover:bg-[var(--color-kc-secondary-light)] transition-colors"
            >
              과정 알아보기
            </a>
            <a
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              수강 신청
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-[var(--color-kc-cream)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-kc-gray-900)] mb-6">
            왜 K Classic Pilates인가?
          </h2>
          <p className="text-lg text-[var(--color-kc-gray-600)] max-w-3xl mx-auto mb-12">
            KCPA는 필라테스 교육의 본질에 충실한 체계적인 커리큘럼과 실무 중심의
            교육을 통해 진정한 전문가를 양성합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "체계적 커리큘럼",
                description: "단계별로 설계된 교육 과정",
              },
              {
                title: "공인 자격증",
                description: "KCPA 공식 인증 자격증 발급",
              },
              {
                title: "현장 실습",
                description: "실제 스튜디오에서의 실습 교육",
              },
              {
                title: "취업 연계",
                description: "수료 후 취업 지원 프로그램",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-[var(--shadow-md)]"
              >
                <h3 className="text-lg font-bold text-[var(--color-kc-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-kc-gray-600)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Courses */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-kc-gray-900)] mb-4">
              자격증 과정
            </h2>
            <p className="text-lg text-[var(--color-kc-gray-600)]">
              단계별 교육 과정을 통해 전문 강사로 성장하세요
            </p>
          </div>

          {/* Certification Path */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            {["입문반", "중급반", "고급반", "마스터"].map((level, index) => (
              <div key={level} className="flex items-center">
                <div className="w-24 h-24 rounded-full bg-[var(--color-kc-primary)] text-white flex items-center justify-center font-bold text-center">
                  {level}
                </div>
                {index < 3 && (
                  <div className="hidden md:block w-12 h-0.5 bg-[var(--color-kc-primary)]" />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "입문반",
                slug: "beginner",
                description: "필라테스 기초 이론과 매트 운동",
              },
              {
                name: "중급반",
                slug: "intermediate",
                description: "소도구 활용 및 기초 기구 교육",
              },
              {
                name: "고급반",
                slug: "advanced",
                description: "전문 기구 심화 교육",
              },
              {
                name: "마스터 과정",
                slug: "master",
                description: "강사 양성 및 스튜디오 운영",
              },
            ].map((course) => (
              <a
                key={course.slug}
                href={`/certification/${course.slug}`}
                className="group block p-6 bg-[var(--color-kc-beige)] rounded-xl hover:bg-[var(--color-kc-primary)] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[var(--color-kc-gray-900)] group-hover:text-white transition-colors mb-2">
                  {course.name}
                </h3>
                <p className="text-sm text-[var(--color-kc-gray-600)] group-hover:text-white/80 transition-colors">
                  {course.description}
                </p>
                <span className="inline-block mt-4 text-sm text-[var(--color-kc-primary)] group-hover:text-[var(--color-kc-secondary)] transition-colors">
                  자세히 보기 →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Courses */}
      <section className="py-20 px-4 bg-[var(--color-kc-gray-50)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-kc-gray-900)] mb-4">
              기구별 과정
            </h2>
            <p className="text-lg text-[var(--color-kc-gray-600)]">
              전문 기구별 심화 교육 과정
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["리포머", "캐딜락", "체어", "바렐"].map((equipment) => (
              <a
                key={equipment}
                href={`/equipment/${equipment.toLowerCase()}`}
                className="group block p-8 bg-white rounded-xl shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-shadow text-center"
              >
                <h3 className="text-lg font-semibold text-[var(--color-kc-gray-900)] group-hover:text-[var(--color-kc-primary)] transition-colors">
                  {equipment}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-kc-gray-900)] mb-6">
            대표이사 소개
          </h2>
          <div className="bg-[var(--color-kc-cream)] p-8 rounded-2xl">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[var(--color-kc-gray-200)]" />
            <h3 className="text-2xl font-bold text-[var(--color-kc-gray-900)] mb-2">
              김현경
            </h3>
            <p className="text-[var(--color-kc-primary)] font-medium mb-4">
              대표이사, K Classic Pilates Association
            </p>
            <ul className="text-sm text-[var(--color-kc-gray-600)] space-y-1 mb-6">
              <li>現 경이로운필라테스 대표</li>
              <li>現 K클래식필라테스 협회 대표이사</li>
              <li>생활체육지도자 자격 2급</li>
              <li>RYT300 요가 지도자 자격</li>
            </ul>
            <a
              href="/about/founder"
              className="inline-flex items-center text-[var(--color-kc-primary)] font-medium hover:underline"
            >
              자세히 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[var(--color-kc-primary)]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            필라테스 강사의 꿈을 시작하세요
          </h2>
          <p className="text-lg text-white/80 mb-8">
            전문 상담을 통해 나에게 맞는 과정을 찾아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:000-0000-0000"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[var(--color-kc-primary)] font-semibold rounded-full hover:bg-[var(--color-kc-cream)] transition-colors"
            >
              📞 전화 문의
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#FAE100] text-[#3C1E1E] font-semibold rounded-full hover:bg-[#F5D800] transition-colors"
            >
              💬 카카오톡
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#03C75A] text-white font-semibold rounded-full hover:bg-[#02B350] transition-colors"
            >
              💬 네이버 톡톡
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[var(--color-kc-gray-900)] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">
                K Classic Pilates | K클래식 필라테스
              </h3>
              <p className="text-[var(--color-kc-gray-400)] text-sm">
                필라테스 지도자의 새로운 기준
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">바로가기</h4>
              <ul className="space-y-2 text-[var(--color-kc-gray-400)]">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    협회 소개
                  </a>
                </li>
                <li>
                  <a
                    href="/certification"
                    className="hover:text-white transition-colors"
                  >
                    자격증 과정
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-white transition-colors">
                    수강료 안내
                  </a>
                </li>
                <li>
                  <a href="/schedule" className="hover:text-white transition-colors">
                    교육 일정
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-[var(--color-kc-gray-400)] text-sm">
                <li>주소: 경기도 김포시 (상세주소 추후 입력)</li>
                <li>전화: 000-0000-0000</li>
                <li>이메일: info@kclassicpilates.kr</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[var(--color-kc-gray-800)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--color-kc-gray-500)]">
              © {new Date().getFullYear()} K Classic Pilates Association. All
              rights reserved.
            </p>
            <a
              href="https://wonderpilates.kr"
              className="text-sm text-[var(--color-kc-gray-400)] hover:text-white transition-colors"
            >
              경이로운 필라테스 스튜디오 →
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
