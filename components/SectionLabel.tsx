export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[#4A90C4] font-bold text-xs uppercase tracking-[0.2em]">
      <span className="w-8 h-[2px] bg-[#4A90C4] rounded-full" />
      {children}
    </span>
  );
}
