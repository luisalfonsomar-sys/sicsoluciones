import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Buildings,
  DropSimple,
  HardHat,
  ShieldCheck,
  SquaresFour,
  Wrench,
} from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

import fachadaVidrio from '../assets/images/fachada-vidrio.jpg'
import heroSuministros from '../assets/images/hero-suministros.jpg'
import edificioAvant from '../assets/images/edificio-avant.jpg'
import obra6107 from '../assets/images/obra-lma6107.jpg'
import djiAerea from '../assets/images/dji-aerea.jpg'
import proyectoSlider7 from '../assets/images/proyecto-slider7.jpg'

import marcaTigre from '../assets/images/marca-tigre.png'
import marcaMetrex from '../assets/images/marca-metrex.png'
import marcaExtrucol from '../assets/images/marca-extrucol.png'
import marcaMetacol from '../assets/images/marca-metacol.png'
import marcaGerfor from '../assets/images/marca-gerfor.png'

const marcas = [
  { src: marcaTigre, alt: 'Tigre' },
  { src: marcaMetrex, alt: 'Metrex' },
  { src: marcaExtrucol, alt: 'Extrucol' },
  { src: marcaMetacol, alt: 'Metacol' },
  { src: marcaGerfor, alt: 'Gerfor' },
]

const stats = [
  { value: '15+', label: 'Años operando en el Caribe colombiano' },
  { value: '120+', label: 'Proyectos entregados en obra y vidriería' },
  { value: '6', label: 'Municipios con proyectos activos' },
  { value: '4', label: 'Normas NTC bajo las que trabajamos' },
]

const proyectos = [
  {
    img: edificioAvant,
    title: 'Edificio Avant',
    place: 'Valledupar, Cesar',
    tag: 'Vidrio & Aluminio',
  },
  {
    img: djiAerea,
    title: 'Urbanización Las Margaritas',
    place: 'San Juan del Cesar, Guajira',
    tag: 'Obra civil — 114 casas',
  },
  {
    img: proyectoSlider7,
    title: 'Edificio Cantagirón',
    place: 'Valledupar, Cesar',
    tag: 'Fachada en vidrio templado',
  },
  {
    img: obra6107,
    title: 'CDT Ganadero',
    place: 'Valledupar, Cesar',
    tag: 'Aluminio arquitectónico',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-20 lg:pb-28">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Eyebrow>Valledupar · Cesar · Región Caribe</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl font-display text-4xl font-semibold tracking-tight text-ink-950 md:text-6xl"
            >
              Construimos y vestimos de vidrio la infraestructura del Caribe
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg text-base leading-relaxed text-ink-500"
            >
              Dos líneas, un mismo estándar: obra civil y suministro técnico por un lado, diseño
              y fabricación de vidrio, aluminio y acero por el otro. Proyectos llave en mano para
              constructoras, industria y vivienda en Cesar y La Guajira.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_32px_-14px_rgba(12,17,23,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-signal-600"
              >
                Cuéntanos tu proyecto
                <ArrowUpRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-6 py-3.5 text-sm font-semibold text-ink-800 transition-colors duration-300 hover:border-ink-400"
              >
                Conoce la empresa
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-200 pt-8"
            >
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-semibold text-ink-950">{s.value}</p>
                  <p className="mt-1 text-xs leading-snug text-ink-500">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.25rem] shadow-[0_40px_80px_-30px_rgba(12,17,23,0.45)]">
              <img src={fachadaVidrio} alt="Fachada de vidrio templado instalada por SIC" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/0 to-ink-950/10" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-8 -left-6 w-56 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-[0_24px_48px_-20px_rgba(12,17,23,0.35)] backdrop-blur-xl sm:-left-10"
            >
              <div className="flex items-center gap-2 text-signal-600">
                <ShieldCheck size={18} weight="fill" />
                <p className="text-xs font-semibold tracking-wide uppercase">Calidad NTC</p>
              </div>
              <p className="mt-2 text-sm leading-snug text-ink-700">
                Herrajes en acero inoxidable y materiales certificados en cada instalación.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divisions */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-signal-600 uppercase">Nuestras líneas</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink-950 md:text-4xl">
            Dos especialidades, un mismo compromiso de obra
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <Link
              to="/suministros-y-obras"
              className="group relative block h-full min-h-[420px] overflow-hidden rounded-[2rem]"
            >
              <img
                src={heroSuministros}
                alt="Obra civil ejecutada por Suministros y Obras SIC"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-ink-950/0" />
              <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
                <HardHat size={28} weight="fill" className="mb-4 text-signal-300" />
                <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">Suministros y Obras</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                  Construcción, mantenimiento de infraestructura, urbanismo, pavimentación,
                  drenaje y suministro eléctrico, hidráulico y de construcción.
                </p>
                <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white">
                  Ver la línea
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              to="/vidrio-aluminio-acero"
              className="group relative block h-full min-h-[420px] overflow-hidden rounded-[2rem]"
            >
              <img
                src={edificioAvant}
                alt="Instalación de vidrio y aluminio SIC"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-signal-700/90 via-signal-700/30 to-signal-700/0" />
              <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
                <SquaresFour size={28} weight="fill" className="mb-4 text-white" />
                <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">Vidrio, Aluminio y Acero</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
                  Fachadas, muros cortina, ventanería corrediza, divisiones y barandas en vidrio
                  templado con herrajes en acero inoxidable.
                </p>
                <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white">
                  Ver la línea
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-ink-950">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4 lg:px-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-display text-3xl font-semibold text-white md:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm leading-snug text-white/50">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-signal-600 uppercase">Proyectos</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink-950 md:text-4xl">
              Obra visible en toda la región
            </h2>
          </div>
          <Link
            to="/vidrio-aluminio-acero"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-signal-600"
          >
            Ver todos los proyectos
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proyectos.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="group overflow-hidden rounded-2xl border border-ink-100 bg-white">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold tracking-[0.1em] text-signal-600 uppercase">{p.tag}</p>
                  <p className="mt-1.5 font-display text-base font-semibold text-ink-950">{p.title}</p>
                  <p className="mt-0.5 text-xs text-ink-500">{p.place}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid grid-cols-1 gap-10 rounded-[2rem] bg-ink-100/60 p-8 md:grid-cols-3 md:p-12">
          {[
            {
              icon: Wrench,
              title: 'Distribuimos',
              body: 'Somos distribuidores de marcas como Tigre, Metrex, Gerfor y Extrucol, con servicio inmediato especializado.',
            },
            {
              icon: Buildings,
              title: 'Instalamos',
              body: 'Cada cliente exige necesidades distintas; nuestro equipo resuelve cualquier requerimiento de instalación.',
            },
            {
              icon: DropSimple,
              title: 'Asesoramos',
              body: 'Resolvemos dudas técnicas y acompañamos el proyecto desde el plano hasta la entrega final.',
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <f.icon size={26} weight="light" className="text-signal-600" />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-950">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brands marquee */}
      <section className="border-y border-ink-100 py-12">
        <p className="mx-auto max-w-7xl px-6 text-center text-xs font-semibold tracking-[0.14em] text-ink-400 uppercase lg:px-10">
          Marcas con las que trabajamos
        </p>
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-50 to-transparent" />
          <motion.div
            className="flex w-max items-center gap-16"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            {[...marcas, ...marcas].map((m, i) => (
              <img key={i} src={m.src} alt={m.alt} className="h-9 w-auto opacity-60 grayscale transition-opacity hover:opacity-100" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-8 py-16 text-center md:px-16">
          <div className="noise-overlay pointer-events-none absolute inset-0" />
          <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            ¿Tienes un proyecto en Cesar o La Guajira?
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/60 md:text-base">
            Escríbenos con los detalles y te contactamos con la línea de negocio correcta en
            menos de 24 horas hábiles.
          </p>
          <Link
            to="/contacto"
            className="relative mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Hablar con un asesor
            <ArrowUpRight size={16} weight="bold" />
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
