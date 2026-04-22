import SectionLabel from './SectionLabel';

const highlights = [
  { number: '2', label: '段企業實習', sub: 'IT + 物流業' },
  { number: '6', label: '年資訊行政', sub: '醒吾科技大學' },
  { number: '3', label: '項專案開發', sub: 'VBA / Python' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>關於我</SectionLabel>
        <h3 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mt-3 mb-12">
          熱衷於用科技解決<br className="hidden md:block" />實際業務問題
        </h3>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-5 text-[#1A1A2E] leading-[1.9] text-[15px]">
            <p>
              就讀醒吾科技大學企業管理系期間，我在<strong className="text-[#2C5F8A] font-semibold">企管系系辦公室</strong>擔任行政工讀生
              <strong className="text-[#2C5F8A] font-semibold">長達六年</strong>，
              從電腦保養、設備維護到視覺設計作品，累積紮實的行政與資訊基礎。這段經歷讓我找到熱情所在——利用技術解決實際問題。
            </p>
            <p>
              畢業前，我先後在<strong className="text-[#2C5F8A] font-semibold">南亞科技</strong>與
              <strong className="text-[#2C5F8A] font-semibold">全台物流</strong>兩家大型企業完成實習。
              在南亞科技負責 IT 設備維修與系統支援；在全台物流則以 Excel VBA 與 Python（Vibe Coding 模式）
              開發自動化工具，並在物流中心、全家客戶與廠商三方之間擔任溝通橋樑。
            </p>
            <p>
              我的跨領域背景——<strong className="text-[#2C5F8A] font-semibold">企管本科搭配 IT 實習</strong>
              ——讓我能同時理解業務需求與技術限制。我正在尋找能結合 IT 支援與流程優化的職位，
              相信能為組織帶來雙重價值：維護系統穩定的同時，從業務視角發現效率提升的機會。
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl p-5 flex items-center gap-4"
              >
                <span className="text-4xl font-black text-[#2C5F8A]">{h.number}</span>
                <div>
                  <div className="font-bold text-[#1A1A2E] text-sm">{h.label}</div>
                  <div className="text-[#6B7399] text-xs mt-0.5">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
