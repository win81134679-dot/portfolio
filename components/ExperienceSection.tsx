import SectionLabel from './SectionLabel';

const experience = [
  {
    company: '全台物流股份有限公司',
    industry: '食品什貨批發業 · 500 人以上',
    role: '實習 — 營業專員',
    period: '2025.03 — 2025.10',
    duration: '8 個月',
    bullets: [
      '擔任物流中心、全家客戶、廠商三方溝通橋樑，確保訂單準時送達',
      '協調三方訂單流程，即時處理進貨、入倉、出貨等異常狀況，並執行帳務請款與催收',
      '開發 Excel VBA 巨集，自動彙整多份訂單報表，取代每日人工複製作業',
      '以 Python（Vibe Coding 模式）開發輔助腳本：負責需求定義、測試驗證與實際部署，自動分類物流資料並輸出摘要報表',
      '使用 Outlook、Teams、Line、Notion 進行跨部門溝通與訊息同步，建立商品主檔確保進出貨順暢',
    ],
  },
  {
    company: '南亞科技股份有限公司',
    industry: '半導體製造業 · 500 人以上',
    role: '實習 — IT 系統工程師',
    period: '2024.10 — 2025.02',
    duration: '5 個月',
    bullets: [
      '負責電腦維修與系統重灌，包括硬體維護、網路權限設定，確保設備穩定運行',
      '提供筆電故障排除服務，確保設備運行順暢並進行網頁製作與優化',
      '參與軟體介面優化、UI 設計與程式開發，提升使用體驗並維護網路安全',
    ],
  },
  {
    company: 'PISA 起司品味廚房 ／ 約瑟品味餐廳',
    industry: '餐館業',
    role: '餐飲服務生',
    period: '2023.05 — 2024.08',
    duration: '1 年 4 個月',
    bullets: [
      '接待客人、點餐與出餐作業，培養高壓環境下的服務溝通能力',
      '靈活應對多桌同時服務的情境，訓練多工處理與即時應變能力',
    ],
  },
  {
    company: '醒吾科技大學',
    industry: '教育服務業',
    role: '行政工讀生',
    period: '2018.10 — 2024.10',
    duration: '6 年 1 個月',
    bullets: [
      '電腦保養與資訊設備維護，建立紮實 IT 操作基礎',
      '設計校內海報、活動邀請卡、制服樣式稿等視覺設計素材',
      '遞送公文、教室環境維護等行政庶務，培養細心負責的工作習慣',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>工作經歷</SectionLabel>
        <h3 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mt-3 mb-12">
          實戰經驗
        </h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-[#E8E4DC] hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="md:pl-10 relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[22px] h-[22px] rounded-full bg-[#2C5F8A] border-4 border-[#FAF9F6] hidden md:block" />

                <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h4 className="font-bold text-[#2C5F8A] text-base">{exp.company}</h4>
                      <p className="text-[#6B7399] text-xs mt-0.5">{exp.industry}</p>
                    </div>
                    <span className="bg-[#EEF4FB] text-[#4A90C4] text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period} · {exp.duration}
                    </span>
                  </div>
                  <p className="text-[#1A1A2E] font-semibold text-sm mb-3 mt-1">{exp.role}</p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-[#1A1A2E] leading-relaxed">
                        <span className="text-[#4A90C4] mt-0.5 flex-shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
