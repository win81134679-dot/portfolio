import SectionLabel from './SectionLabel';

const contacts = [
  {
    icon: '✉',
    label: '電子信箱',
    value: 'win8.1134679@gmail.com',
    href: 'mailto:win8.1134679@gmail.com',
    breakAll: true,
  },
  {
    icon: '☎',
    label: '電話',
    value: '0908-922-681',
    href: null,
    breakAll: false,
  },
  {
    icon: '◎',
    label: '所在地區',
    value: '新北市新莊區',
    sub: '可至林口・龜山・樹林',
    href: null,
    breakAll: false,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>聯絡我</SectionLabel>
        <h3 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mt-3 mb-4">
          期待與您聯繫
        </h3>
        <p className="text-[#6B7399] text-base mb-12 max-w-lg leading-relaxed">
          目前積極求職中，歡迎 HR 或用人主管直接與我聯繫。
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
          {contacts.map((c) => {
            const inner = (
              <>
                <div className="w-12 h-12 bg-[#EEF4FB] rounded-xl flex items-center justify-center text-xl text-[#2C5F8A] flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs text-[#6B7399] font-medium">{c.label}</div>
                  <div className={`text-sm font-semibold text-[#1A1A2E] mt-0.5 ${c.breakAll ? 'break-all' : ''}`}>
                    {c.value}
                  </div>
                  {'sub' in c && c.sub && (
                    <div className="text-xs text-[#6B7399] mt-0.5">{c.sub}</div>
                  )}
                </div>
              </>
            );

            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-4 bg-white border border-[#E8E4DC] rounded-2xl p-5 hover:border-[#2C5F8A] hover:shadow-md transition-all"
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.label}
                className="flex items-center gap-4 bg-white border border-[#E8E4DC] rounded-2xl p-5"
              >
                {inner}
              </div>
            );
          })}

          {/* Send email card */}
          <a
            href="mailto:win8.1134679@gmail.com"
            className="flex items-center gap-4 bg-[#2C5F8A] border border-[#2C5F8A] rounded-2xl p-5 hover:bg-[#1d4a6e] transition-colors col-span-full sm:col-span-1"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl text-white flex-shrink-0">
              ✉
            </div>
            <div>
              <div className="text-xs text-white/70 font-medium">直接聯絡</div>
              <div className="text-sm font-semibold text-white">寄信給我</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
