import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { List, X, PhoneCall } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/suministros-y-obras', label: 'Suministros y Obras' },
  { to: '/vidrio-aluminio-acero', label: 'Vidrio, Aluminio y Acero' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 shadow-[0_1px_0_rgba(16,22,31,0.06)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-signal-600' : 'text-ink-600 hover:text-ink-900'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+573218397060" className="flex items-center gap-2 text-sm font-medium text-ink-600">
            <PhoneCall size={16} weight="bold" className="text-signal-600" />
            321 839 7060
          </a>
          <NavLink
            to="/contacto"
            className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(12,17,23,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-signal-600"
          >
            Cotizar proyecto
          </NavLink>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-800 lg:hidden"
        >
          <List size={20} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink-950/97 lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Logo dark />
              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
              >
                <X size={20} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              className="flex flex-col gap-1 px-6 pt-8"
            >
              {[...links, { to: '/contacto', label: 'Contáctanos' }].map((l) => (
                <motion.div
                  key={l.to}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 font-display text-2xl font-medium text-white"
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
            <div className="px-6 pt-8 text-sm text-white/50">
              <p>321 839 7060 · 316 579 3929</p>
              <p>gerencia@sicsoluciones.com.co</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
