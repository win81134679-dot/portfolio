import SectionLabel from './SectionLabel';

type SkillType = 'office' | 'code' | 'soft';

const skills: { category: string; type: SkillType; items: string[] }[] = [
  {
    category: '辦公軟體',
    type: 'office',
    items: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Teams', 'Notion', 'Line'],
  },
  {
    category: 'IT ／ 系統',
    type: 'code',
    items: ['Windows 10/11', '硬體維修', '系統重灌', 'WLAN 網路管理', '網路權限設定'],
  },
  {
    category: '程式開發',
    type: 'code',
    items: ['Python', 'Excel VBA', 'openpyxl', 'HTML / CSS'],
  },
  {
    category: '軟實力',
    type: 'soft',
    items: ['跨部門溝通', '客戶協調', '多工處理', '異常處理', '文件管理', '問題排解'],
  },
];

const chipClass: Record<SkillType, string> = {
  code: 'bg-[#1A1A2E] text-[#EEF4FB] font-mono',
  soft: 'bg-[#FAF9F6] border border-[#4A90C4] text-[#2C5F8A]',
  office: 'bg-[#EEF4FB] text-[#1A1A2E]',
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>技能</SectionLabel>
        <h3 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mt-3 mb-12">
          專業能力
        </h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div
              key={s.category}
              className="bg-white border border-[#E8E4DC] rounded-2xl p-6"
            >
              <h4 className="font-bold text-[#2C5F8A] text-xs uppercase tracking-widest mb-4">
                {s.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium ${chipClass[s.type]}`}
                  >
                    {item}
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
