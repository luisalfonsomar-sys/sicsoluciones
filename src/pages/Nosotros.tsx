import { Link } from 'react-router-dom'
import { ArrowUpRight, Buildings, DropSimple, Wrench } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

import mountainBg from '../assets/images/mountain-bg.jpg'
import obra6101 from '../assets/images/obra-lma6101.jpg'
import djiAerea from '../assets/images/dji-aerea.jpg'
import homeBg from '../assets/images/home-bg.jpg'

const lineas = [
  {
    icon: Wrench,
    title: 'Distribuimos',
    body: 'Somos distribuidores de las mejores marcas del sector, con servicio inmediato y especializado en cada pedido.',
  },
  {
    icon: Buildings,
    title: 'Instalamos',
    body: 'Cada cliente exige necesidades distintas y nosotros lo entendemos. Contamos con un equipo especializado en resolver cualquier requerimiento de instalación.',
  },
  {
    icon: DropSimple,
    title: 'Asesoramos',
    body: 'Resuelva sus inquietudes y dudas comunicándose con nosotros y obteniendo asesoría técnica especializada.',
  },
]

const proyectosEnEjecucion = [
  { img: djiAerea, title: 'Las Margaritas', place: 'San Juan del Cesar, Guajira', kind: 'Vivienda — 114 unidades' },
  { img: obra6101, title: 'Infraestructura vial', place: 'Cesar', kind: 'Obra civil' },
]

export default function Nosotros() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={mountainBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink-950/80" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:px-10 lg:py-36">
          <Reveal>
            <Eyebrow tone="dark">Nosotros</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Expertos en suministros y obras en Colombia
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65">
              Somos una empresa comprometida con suministrar tuberías, medidores, geosistemas y
              carpintería de vidrio, aluminio y acero de la más alta calidad — cumpliendo con
              estándares de soporte y servicio especializado en cada entrega.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img src={homeBg} alt="Oficinas y coordinación de obra SIC" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm font-semibold tracking-[0.14em] text-signal-600 uppercase">Quiénes somos</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950 md:text-4xl">
              Un mismo estándar de calidad en cada línea de negocio
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500">
              Desde Valledupar atendemos proyectos de infraestructura y vivienda en todo el
              Caribe colombiano. Nuestro equipo combina obra civil, suministro técnico y
              carpintería de vidrio y aluminio bajo la misma exigencia de servicio y soporte
              especializado que nos ha traído hasta aquí.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/suministros-y-obras"
                className="rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-400"
              >
                Suministros y Obras
              </Link>
              <Link
                to="/vidrio-aluminio-acero"
                className="rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-400"
              >
                Vidrio, Aluminio y Acero
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-100/50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.14em] text-signal-600 uppercase">Cómo trabajamos</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink-950 md:text-4xl">
              Un equipo conformado para resolver cualquier necesidad de obra
            </h2>
          </Reveal>
          <div className="mt-12 divide-y divide-ink-200 border-t border-ink-200">
            {lineas.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.08}>
                <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[auto_1fr_2fr] md:items-center md:gap-10">
                  <l.icon size={28} weight="light" className="text-signal-600" />
                  <h3 className="font-display text-xl font-semibold text-ink-950">{l.title}</h3>
                  <p className="max-w-xl text-sm leading-relaxed text-ink-500">{l.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-signal-600 uppercase">En ejecución</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink-950 md:text-4xl">
              Proyectos en ejecución en toda Colombia
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {proyectosEnEjecucion.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7">
                  <p className="text-[11px] font-semibold tracking-[0.1em] text-signal-300 uppercase">{p.kind}</p>
                  <p className="mt-1 font-display text-xl font-semibold text-white">{p.title}</p>
                  <p className="mt-0.5 text-xs text-white/60">{p.place}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-ink-950 px-8 py-14 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-2 max-w-md text-sm text-white/60">
              Cuéntanos qué necesitas y te conectamos con el equipo correcto.
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
