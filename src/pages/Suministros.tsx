import { Link } from 'react-router-dom'
import { ArrowUpRight, Gauge, DropSimple, PipeWrench, TreeStructure } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

import heroSuministros from '../assets/images/hero-suministros.jpg'
import obra6024 from '../assets/images/obra-lma6024.jpg'
import djiAerea from '../assets/images/dji-aerea.jpg'
import prodTuberias from '../assets/images/prod-tuberias.jpg'
import prodMedidores from '../assets/images/prod-medidores.png'
import prodGeotextil from '../assets/images/prod-geotextil.jpg'
import marcaTigre from '../assets/images/marca-tigre.png'
import marcaMetrex from '../assets/images/marca-metrex.png'
import marcaExtrucol from '../assets/images/marca-extrucol.png'
import marcaMetacol from '../assets/images/marca-metacol.png'
import marcaGerfor from '../assets/images/marca-gerfor.png'
import clienteMaya from '../assets/images/cliente-maya.png'
import clienteAo from '../assets/images/cliente-ao.png'
import clienteConasel from '../assets/images/cliente-conasel.png'

const servicios = [
  'Construcción y mantenimiento de infraestructura',
  'Urbanismo, pavimentación y drenaje',
  'Suministro eléctrico, hidráulico y de construcción',
  'Gestión y supervisión de proyectos llave en mano',
]

const productos = [
  {
    icon: TreeStructure,
    img: prodTuberias,
    title: 'Tuberías',
    body: 'PVC y polietileno para redes hidráulicas y sanitarias, con respaldo de marcas líderes.',
  },
  {
    icon: Gauge,
    img: prodMedidores,
    title: 'Medidores',
    body: 'Micromedidores y macromedidores para proyectos de acueducto residenciales e industriales.',
  },
  {
    icon: DropSimple,
    img: prodGeotextil,
    title: 'Geosistemas',
    body: 'Geotextiles tejidos y no tejidos, geocompuestos para drenaje y tubería especializada.',
  },
]

const marcas = [
  { src: marcaTigre, alt: 'Tigre' },
  { src: marcaMetrex, alt: 'Metrex S.A' },
  { src: marcaExtrucol, alt: 'Extrucol' },
  { src: marcaMetacol, alt: 'Metacol' },
  { src: marcaGerfor, alt: 'Gerfor' },
]

const clientes = [
  { src: clienteMaya, alt: 'Maya Asociados' },
  { src: clienteAo, alt: 'A&O Proyectos' },
  { src: clienteConasel, alt: 'Conaseling' },
]

export default function Suministros() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-16 pb-20 lg:grid-cols-[1fr_1fr] lg:px-10 lg:pt-24 lg:pb-28">
          <Reveal>
            <Eyebrow tone="dark">Suministros y Obras</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Suministramos calidad y servicio en cada pulgada
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
              Obras civiles y suministro de materiales para proyectos industriales, comerciales
              y residenciales. Líneas completas con excelente respaldo técnico para infraestructura,
              urbanismo y redes.
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Solicitar cotización
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img src={heroSuministros} alt="Obra de infraestructura SIC" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.14em] text-signal-600 uppercase">Qué hacemos</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950">
              De la gestión del proyecto a la última pulgada de tubería
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-ink-200 border-t border-ink-200">
              {servicios.map((s) => (
                <li key={s} className="flex items-start gap-4 py-5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-500" />
                  <span className="text-base text-ink-700">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-100/50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.14em] text-signal-600 uppercase">Nuestros productos</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink-950 md:text-4xl">
              Líneas técnicas para cada etapa de la obra
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {productos.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-50">
                    <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <p.icon size={22} weight="light" className="text-signal-600" />
                    <h3 className="mt-3 font-display text-lg font-semibold text-ink-950">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:aspect-auto">
            <img src={djiAerea} alt="Vista aérea de proyecto de urbanismo" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:aspect-auto">
            <img src={obra6024} alt="Ejecución de obra civil" className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink-100 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-xs font-semibold tracking-[0.14em] text-ink-400 uppercase">Marcas que distribuimos</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {marcas.map((m) => (
              <img key={m.alt} src={m.src} alt={m.alt} className="h-8 w-auto opacity-60 grayscale transition-opacity hover:opacity-100" />
            ))}
          </div>
          <p className="mt-16 text-center text-xs font-semibold tracking-[0.14em] text-ink-400 uppercase">Clientes que confían en nosotros</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clientes.map((c) => (
              <img key={c.alt} src={c.src} alt={c.alt} className="h-9 w-auto opacity-60 grayscale transition-opacity hover:opacity-100" />
            ))}
            <span className="flex h-9 items-center text-sm font-medium text-ink-400">La Macuira</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-ink-950 px-8 py-14 text-center md:flex-row md:text-left">
          <div>
            <PipeWrench size={28} weight="light" className="mb-4 text-signal-400" />
            <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
              ¿Necesitas materiales o gestión de obra?
            </h2>
            <p className="mt-2 max-w-md text-sm text-white/60">
              Cuéntanos las especificaciones de tu proyecto y te enviamos una propuesta técnica.
            </p>
          </div>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold whitespace-nowrap text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Contáctanos
            <ArrowUpRight size={16} weight="bold" />
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
