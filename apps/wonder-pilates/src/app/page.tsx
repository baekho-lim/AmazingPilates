export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-wp-primary)] to-[var(--color-wp-primary-dark)]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            경이로운 필라테스
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            김포 마산동 프리미엄 필라테스 스튜디오
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/inquiry"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[var(--color-wp-primary)] font-semibold rounded-full hover:bg-[var(--color-wp-cream)] transition-colors"
            >
              상담 문의
            </a>
            <a
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              프로그램 보기
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-[var(--color-wp-cream)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-wp-gray-900)] mb-6">
            당신의 건강한 변화를 위한 공간
          </h2>
          <p className="text-lg text-[var(--color-wp-gray-600)] max-w-3xl mx-auto mb-12">
            경이로운 필라테스는 개인 맞춤형 레슨을 통해 체형교정, 재활,
            건강관리까지 전문적인 필라테스 서비스를 제공합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1:1 맞춤 레슨",
                description:
                  "개인의 체형과 목표에 맞는 맞춤형 프로그램을 제공합니다.",
              },
              {
                title: "전문 강사진",
                description:
                  "다양한 자격증과 풍부한 경험을 갖춘 전문 강사가 지도합니다.",
              },
              {
                title: "쾌적한 시설",
                description:
                  "최신 기구와 청결한 환경에서 편안하게 운동하실 수 있습니다.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-[var(--shadow-md)]"
              >
                <h3 className="text-xl font-bold text-[var(--color-wp-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--color-wp-gray-600)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-wp-gray-900)] mb-4">
              프로그램
            </h2>
            <p className="text-lg text-[var(--color-wp-gray-600)]">
              목적에 맞는 다양한 프로그램을 선택하세요
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "개인 레슨", slug: "personal" },
              { name: "듀엣 레슨", slug: "duet" },
              { name: "체형교정", slug: "posture" },
              { name: "재활 필라테스", slug: "rehabilitation" },
            ].map((program) => (
              <a
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group block p-6 bg-[var(--color-wp-beige)] rounded-xl hover:bg-[var(--color-wp-primary)] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[var(--color-wp-gray-900)] group-hover:text-white transition-colors">
                  {program.name}
                </h3>
                <span className="inline-block mt-4 text-sm text-[var(--color-wp-primary)] group-hover:text-white/80 transition-colors">
                  자세히 보기 →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[var(--color-wp-primary)]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-white/80 mb-8">
            전문 상담을 통해 나에게 맞는 프로그램을 찾아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:000-0000-0000"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[var(--color-wp-primary)] font-semibold rounded-full hover:bg-[var(--color-wp-cream)] transition-colors"
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
      <footer className="py-12 px-4 bg-[var(--color-wp-gray-900)] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">
                Wonder Pilates | 경이로운 필라테스
              </h3>
              <p className="text-[var(--color-wp-gray-400)] text-sm">
                김포 마산동 프리미엄 필라테스 스튜디오
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">바로가기</h4>
              <ul className="space-y-2 text-[var(--color-wp-gray-400)]">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    소개
                  </a>
                </li>
                <li>
                  <a href="/programs" className="hover:text-white transition-colors">
                    프로그램
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-white transition-colors">
                    가격 안내
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    오시는 길
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-[var(--color-wp-gray-400)] text-sm">
                <li>주소: 경기도 김포시 마산동 (상세주소 추후 입력)</li>
                <li>전화: 000-0000-0000</li>
                <li>이메일: info@wonderpilates.kr</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[var(--color-wp-gray-800)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--color-wp-gray-500)]">
              © {new Date().getFullYear()} Wonder Pilates. All rights reserved.
            </p>
            <a
              href="https://kclassicpilates.kr"
              className="text-sm text-[var(--color-wp-gray-400)] hover:text-white transition-colors"
            >
              K Classic Pilates 자격증 과정 →
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
