export default function Eyebrow({ children, tone = 'light' }: { children: string; tone?: 'light' | 'dark' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] uppercase ${
        tone === 'dark'
          ? 'border-white/15 bg-white/5 text-white/70'
          : 'border-signal-200 bg-signal-100 text-signal-700'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${tone === 'dark' ? 'bg-signal-400' : 'bg-signal-500'}`} />
      {children}
    </span>
  )
}
