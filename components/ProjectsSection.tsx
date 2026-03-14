import SectionLabel from './SectionLabel';

const projects = [
  {
    name: 'Excel VBA 自動化工具',
    badge: '全台物流 · 實習開發',
    context:
      '為解決業務部門每日需手動複製多份訂單報表的痛點，於實習期間主動規劃並開發此工具。',
    tech: ['Excel VBA', 'Outlook', 'Word'],
    bullets: [
      '開發巨集自動彙整多份訂單報表，取代人工複製，縮短作業時間',
      '整合 Outlook 信件自動發送功能，主動通知相關部門異常訂單狀態',
    ],
    link: '',
  },
  {
    name: 'Python 資料處理腳本',
    badge: 'Vibe Coding 模式實作',
    context:
      '以 AI 協作的 Vibe Coding 模式主導開發——包含需求定義、邏輯驗證到最終部署，全程由我把關品質。',
    tech: ['Python', 'openpyxl', 'Vibe Coding'],
    bullets: [
      '自動讀取 Excel 物流資料，依條件分類並輸出摘要報表',
      '大幅縮短人工統計時間，顯著降低資料輸入失誤率',
    ],
    link: '',
  },
  {
    name: '校園行政設計作品',
    badge: '醒吾科技大學 · 6 年成果',
    context:
      '擔任學校行政工讀生期間，累積的視覺設計實務成果，同時兼顧設備維護工作。',
    tech: ['Photoshop', 'Illustrator', 'PowerPoint'],
    bullets: [
      '設計校內海報、活動邀請卡、制服樣式稿等視覺素材',
      '持續維護校內資訊設備，累積電腦保養與硬體處理實務經驗',
    ],
    link: '',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>作品集</SectionLabel>
        <h3 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mt-3 mb-12">
          實作成果
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl p-6 flex flex-col hover:shadow-md hover:border-[#4A90C4]/50 transition-all duration-200"
            >
              <div className="mb-3">
                <h4 className="font-bold text-[#1A1A2E] text-base mb-1">{p.name}</h4>
                <span className="inline-block bg-[#EEF4FB] text-[#4A90C4] text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {p.badge}
                </span>
              </div>

              <p className="text-[#6B7399] text-xs leading-relaxed mb-4">{p.context}</p>

              <ul className="space-y-2 mb-5 flex-1">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-xs text-[#1A1A2E] leading-relaxed">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4A90C4] flex-shrink-0 mt-[5px]"></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-[#1A1A2E] text-[#EEF4FB] text-[10px] font-semibold px-2.5 py-1 rounded-md font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
