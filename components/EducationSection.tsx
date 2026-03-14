import SectionLabel from './SectionLabel';

const education = [
  {
    school: '私立醒吾科技大學',
    degree: '企業管理系 大學畢業',
    period: '2021.09 — 2025.09',
    note: '',
  },
];

const certifications = [
  'TQC PowerPoint 2016 專業級',
  '物聯網智慧應用及技術',
  '普通重型機車駕駛執照',
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>學歷</SectionLabel>
        <h3 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mt-3 mb-12">
          學歷與證照
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h4 className="text-xs font-bold text-[#6B7399] uppercase tracking-widest mb-4">
              學歷
            </h4>
            {education.map((e, i) => (
              <div
                key={i}
                className="bg-[#FAF9F6] border border-[#E8E4DC] rounded-2xl p-6"
              >
                <div className="font-bold text-[#2C5F8A] text-base">{e.school}</div>
                <div className="text-[#1A1A2E] font-medium text-sm mt-1.5">{e.degree}</div>
                <div className="text-[#6B7399] text-xs mt-2">{e.period}</div>
                {e.note && (
                  <div className="text-[#6B7399] text-xs mt-1">{e.note}</div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-bold text-[#6B7399] uppercase tracking-widest mb-4">
              證照
            </h4>
            <div className="flex flex-col gap-3">
              {certifications.map((c, i) => (
                <div
                  key={i}
                  className="bg-[#FAF9F6] border border-[#E8E4DC] rounded-xl px-5 py-3.5 flex items-center gap-3"
                >
                  <span className="text-[#4A90C4] text-base font-bold flex-shrink-0">✓</span>
                  <span className="text-[#1A1A2E] text-sm font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
