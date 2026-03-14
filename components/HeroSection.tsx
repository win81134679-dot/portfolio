export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6] px-6 pt-20"
    >
      <div className="max-w-3xl w-full text-center">
        <span className="inline-block bg-[#EEF4FB] text-[#2C5F8A] px-5 py-1.5 rounded-full text-sm font-semibold tracking-widest mb-8">
          應屆畢業生 · 2025
        </span>

        <h1 className="text-7xl md:text-8xl font-black text-[#1A1A2E] mb-5 tracking-tight leading-none">
          張智森
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-[#2C5F8A] mb-6 tracking-wide">
          IT 系統工程師 ／ 營業專員
        </h2>

        <p className="text-base md:text-lg text-[#6B7399] max-w-xl mx-auto mb-12 leading-relaxed">
          具備 IT 設備支援與業務流程優化實戰經驗，<br className="hidden md:block" />
          橫跨半導體、物流與教育三大產業。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="mailto:win8.1134679@gmail.com"
            className="bg-[#2C5F8A] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#1d4a6e] transition-colors shadow-lg shadow-blue-900/20"
          >
            ✉ 寄信給我
          </a>
          <a
            href="#contact"
            className="border-2 border-[#2C5F8A] text-[#2C5F8A] px-8 py-3.5 rounded-xl font-semibold hover:bg-[#EEF4FB] transition-colors"
          >
            聯絡我
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-[#6B7399] hover:text-[#2C5F8A] transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="animate-bounce"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
