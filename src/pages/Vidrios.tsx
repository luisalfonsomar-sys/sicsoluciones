import { Link } from 'react-router-dom'
import { ArrowUpRight, SquaresFour, DoorOpen, Barricade, Sparkle } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

import heroObra from '../assets/images/hero-obra.jpg'
import fachadaVidrio from '../assets/images/fachada-vidrio.jpg'
import edificioAvant from '../assets/images/edificio-avant.jpg'
import proyectoSlider7 from '../assets/images/proyecto-slider7.jpg'
import obra6107 from '../assets/images/obra-lma6107.jpg'
import djiAerea from '../assets/images/dji-aerea.jpg'
import iconFachadas from '../assets/images/icon-fachadas.png'
import iconBanos from '../assets/images/icon-banos.png'
import iconPuertas from '../assets/images/icon-puertas.png'
import iconDivisiones from '../assets/images/icon-divisiones.png'
import iconBarandas from '../assets/images/icon-barandas.png'
import iconAluminio from '../assets/images/icon-aluminio.png'

const categorias = [
  { img: iconFachadas, title: 'Fachadas y muros cortina' },
  { img: iconPuertas, title: 'Puertas corredizas y batientes' },
  { img: iconDivisiones, title: 'Divisiones de oficina' },
  { img: iconBarandas, title: 'Barandas en vidrio templado' },
  { img: iconBanos, title: 'Divisiones de baño y espejos' },
  { img: iconAluminio, title: 'Aluminio arquitectónico' },
]

const proyectos = [
  {
    img: edificioAvant,
    title: 'Edificio Avant',
    place: 'Valledupar, Cesar',
    items: ['Fachada en vidrio templado', 'Puertas en vidrio', 'Divisiones de baño', 'Puertas y persianas en aluminio', 'Barandas en vidrio', 'Espejos'],
  },
  {
    img: obra6107,
    title: 'CDT Ganadero',
    place: 'Valledupar, Cesar',
    items: ['Puertas en aluminio', 'Persianas en aluminio', 'Puertas en vidrio'],
  },
  {
    img: proyectoSlider7,
    title: 'Edificio Cantagirón',
    place: 'Valledupar, Cesar',
    items: ['Fachada en vidrio', 'Ventanería', 'Puertas ventana', 'Barandas en acero inoxidable', 'Persianas en aluminio'],
  },
  {
    img: djiAerea,
    title: 'Conjunto Las Margaritas',
    place: 'San Juan del Cesar, Guajira — 114 casas',
    items: ['Ventanería', 'Puertas-ventanas'],
  },
]

export default function Vidrios() {
  return (
    <div>
      <section className="relative overflow-hidden bg-signal-700">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-16 pb-20 lg:grid-cols-[1fr_1fr] lg:px-10 lg:pt-24 lg:pb-28">
          <Reveal>
            <Eyebrow tone="dark">Vidrio, Aluminio y Acero</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Expertos en vidrio, aluminio y acero
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
              Asesoría, fabricación e instalación de vidrio, aluminio y acero inoxidable para
              cada necesidad del cliente. Nos adaptamos a los procesos de cada proyecto
              arquitectónico, desde fachadas hasta detalles de acabado.
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-signal-700 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Cotizar mi proyecto
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img src={fachadaVidrio} alt="Fachada de vidrio templado" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-signal-600 uppercase">Qué instalamos</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink-950 md:text-4xl">
            Sistemas que le dan a cada espacio una apariencia exclusiva
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3">
          {categorias.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="group overflow-hidden rounded-2xl border border-ink-100">
                <div className="relative aspect-square overflow-hidden bg-ink-50">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/0 to-transparent" />
                  <p className="absolute bottom-0 left-0 p-4 text-sm font-semibold text-white">{c.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.14em] text-signal-400 uppercase">Portafolio</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Algunos de nuestros proyectos
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {proyectos.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group grid grid-cols-1 gap-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] sm:grid-cols-2">
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto">
                    <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-xs text-white/45">{p.place}</p>
                    <ul className="mt-4 space-y-1.5">
                      {p.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-xs leading-relaxed text-white/60">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-400" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            { icon: SquaresFour, title: 'Diseño a medida', body: 'Cada estructura se adapta al plano y a la visión del proyecto arquitectónico.' },
            { icon: DoorOpen, title: 'Instalación integral', body: 'Del levantamiento en obra a la entrega, con acompañamiento técnico completo.' },
            { icon: Barricade, title: 'Acero inoxidable', body: 'Herrajes y barandas en acero inoxidable de alta durabilidad y acabado.' },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <f.icon size={26} weight="light" className="text-signal-600" />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-950">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <Reveal className="relative overflow-hidden rounded-[2rem]">
          <img src={heroObra} alt="Instalación de aluminio arquitectónico" className="h-[380px] w-full object-cover md:h-[460px]" />
          <div className="absolute inset-0 bg-ink-950/45" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <Sparkle size={30} weight="light" className="mb-4 text-white" />
            <h2 className="max-w-xl font-display text-3xl font-semibold text-white md:text-4xl">
              Sabemos todo del vidrio, aluminio y acero
            </h2>
            <Link
              to="/contacto"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Vea nuestros proyectos
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
