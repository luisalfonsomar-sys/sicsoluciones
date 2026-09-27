import { Link } from 'react-router-dom'
import { EnvelopeSimple, PhoneCall, MapPin } from '@phosphor-icons/react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            Suministros, obras civiles, y sistemas de vidrio, aluminio y acero para proyectos en
            Valledupar, Cesar y la Región Caribe.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">Líneas de negocio</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <Link to="/suministros-y-obras" className="transition-colors hover:text-white">
                Suministros y Obras
              </Link>
            </li>
            <li>
              <Link to="/vidrio-aluminio-acero" className="transition-colors hover:text-white">
                Vidrio, Aluminio y Acero
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="transition-colors hover:text-white">
                Nosotros
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">Contacto</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <PhoneCall size={16} className="mt-0.5 shrink-0 text-signal-400" />
              <span>321 839 7060 · 316 579 3929</span>
            </li>
            <li className="flex items-start gap-2">
              <EnvelopeSimple size={16} className="mt-0.5 shrink-0 text-signal-400" />
              <span className="break-all">gerencia@sicsoluciones.com.co</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-signal-400" />
              <span>Valledupar, Cesar, Colombia</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">Empieza un proyecto</p>
          <p className="mt-4 text-sm text-white/70">
            Cuéntanos qué necesitas y te respondemos con una propuesta clara.
          </p>
          <Link
            to="/contacto"
            className="mt-4 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Contáctanos
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/40 md:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Soluciones Integrales Caribe. Todos los derechos reservados.</p>
          <p>Diseño y desarrollo — @soyluismarti</p>
        </div>
      </div>
    </footer>
  )
}
