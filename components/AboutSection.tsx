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
          熱愛寵物，以執行力<br className="hidden md:block" />串聯物流與門市店務
        </h3>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-5 text-[#1A1A2E] leading-[1.9] text-[15px]">
            <p>
              我是張智森，對<strong className="text-[#2C5F8A] font-semibold">寵物產業</strong>充滿熱忱的職場新鮮人，細心負責、樂於學習。
              就讀醒吾科技大學企管系期間，在系辦公室擔任行政工讀生<strong className="text-[#2C5F8A] font-semibold">長達六年</strong>，
              累積扎實的行政協調與系統操作基礎。
            </p>
            <p>
              曾於<strong className="text-[#2C5F8A] font-semibold">全台物流</strong>擔任營業專員，
              協調物流中心與廠商間的訂單流程，並處理進出貨異常。
              這段經歷讓我對<strong className="text-[#2C5F8A] font-semibold">商品進退貨、庫存盤點</strong>與電商訂單管理非常有概念，
              能快速銜接門市後勤與店務管理。
            </p>
            <p>
              亦曾於<strong className="text-[#2C5F8A] font-semibold">南亞科技</strong>擔任 IT 實習生，
              具備系統操作與問題排除能力，能快速上手 POS 機與進銷存系統；
              並擅長以 <strong className="text-[#2C5F8A] font-semibold">Excel VBA 與 Python</strong> 優化作業效率。
              此外持有普通重型機車駕照，可隨時配合門市外送任務。
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
