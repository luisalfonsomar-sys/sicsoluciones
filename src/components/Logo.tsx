import logoMark from '../assets/images/logo-blanco.png'
import { Link } from 'react-router-dom'

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-900 shadow-[0_8px_20px_-8px_rgba(12,17,23,0.55)] transition-transform duration-300 group-hover:-translate-y-0.5">
        <img src={logoMark} alt="" className="h-6 w-6" />
      </span>
      <span className={`flex flex-col leading-none ${dark ? 'text-white' : 'text-ink-900'}`}>
        <span className="font-display text-[15px] font-semibold tracking-tight">SIC</span>
        <span className={`text-[10px] font-medium tracking-[0.16em] uppercase ${dark ? 'text-white/60' : 'text-ink-500'}`}>
          Soluciones Caribe
        </span>
      </span>
    </Link>
  )
}
