import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, EnvelopeSimple, MapPin, PaperPlaneTilt, PhoneCall } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

type FormState = { name: string; email: string; phone: string; line: string; message: string }
type Errors = Partial<Record<keyof FormState, string>>

const initial: FormState = { name: '', email: '', phone: '', line: 'Suministros y Obras', message: '' }

export default function Contacto() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate(f: FormState): Errors {
    const e: Errors = {}
    if (!f.name.trim()) e.name = 'Cuéntanos tu nombre.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Escribe un correo válido.'
    if (!f.message.trim() || f.message.trim().length < 12) e.message = 'Danos un poco más de detalle (mín. 12 caracteres).'
    return e
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const subject = encodeURIComponent(`Nuevo proyecto — ${form.line}`)
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nCorreo: ${form.email}\nTeléfono: ${form.phone || 'No indicado'}\nLínea de interés: ${form.line}\n\nMensaje:\n${form.message}`,
    )
    window.location.href = `mailto:gerencia@sicsoluciones.com.co?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div>
      <section className="bg-ink-950">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-10 lg:pt-24">
          <Reveal>
            <Eyebrow tone="dark">Contacto</Eyebrow>
            <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Hablemos de tu próximo proyecto
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">
              Escríbenos con los detalles de tu obra o proyecto de vidrio y aluminio. Un asesor
              te responde en menos de 24 horas hábiles.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-6">
              <ContactRow icon={PhoneCall} label="Teléfono">
                <a href="tel:+573218397060" className="block hover:text-signal-600">321 839 7060</a>
                <a href="tel:+573165793929" className="block hover:text-signal-600">316 579 3929</a>
              </ContactRow>
              <ContactRow icon={EnvelopeSimple} label="Correo">
                <a href="mailto:gerencia@sicsoluciones.com.co" className="block break-all hover:text-signal-600">gerencia@sicsoluciones.com.co</a>
                <a href="mailto:arqobras@sicsoluciones.com.co" className="block break-all hover:text-signal-600">arqobras@sicsoluciones.com.co</a>
              </ContactRow>
              <ContactRow icon={MapPin} label="Ubicación">
                <p>Valledupar, Cesar, Colombia</p>
                <p className="text-ink-400">Proyectos en Cesar y La Guajira</p>
              </ContactRow>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-ink-100 bg-white p-12 text-center"
              >
                <CheckCircle size={40} weight="fill" className="text-signal-600" />
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink-950">Se abrió tu cliente de correo</h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
                  Revisa el mensaje precargado y dale enviar. Si no se abrió automáticamente,
                  escríbenos directo a gerencia@sicsoluciones.com.co.
                </p>
                <button
                  onClick={() => { setSent(false); setForm(initial) }}
                  className="mt-6 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-800 hover:border-ink-400"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="rounded-[1.75rem] border border-ink-100 bg-white p-8 md:p-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field
                    label="Nombre"
                    error={errors.name}
                    input={
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Tu nombre completo"
                        className={inputClass(!!errors.name)}
                      />
                    }
                  />
                  <Field
                    label="Correo"
                    error={errors.email}
                    input={
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="tucorreo@empresa.com"
                        className={inputClass(!!errors.email)}
                      />
                    }
                  />
                  <Field
                    label="Teléfono (opcional)"
                    input={
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="300 000 0000"
                        className={inputClass(false)}
                      />
                    }
                  />
                  <Field
                    label="Línea de interés"
                    input={
                      <select
                        value={form.line}
                        onChange={(e) => setForm({ ...form, line: e.target.value })}
                        className={inputClass(false)}
                      >
                        <option>Suministros y Obras</option>
                        <option>Vidrio, Aluminio y Acero</option>
                        <option>Otro / no estoy seguro</option>
                      </select>
                    }
                  />
                </div>
                <div className="mt-6">
                  <Field
                    label="Cuéntanos sobre tu proyecto"
                    error={errors.message}
                    input={
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Ubicación, alcance, plazos estimados…"
                        rows={5}
                        className={inputClass(!!errors.message)}
                      />
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-signal-600"
                >
                  Enviar mensaje
                  <PaperPlaneTilt size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <Reveal className="overflow-hidden rounded-[1.75rem] border border-ink-100">
          <iframe
            title="Ubicación SIC — Valledupar, Cesar"
            src="https://www.google.com/maps?q=Valledupar,Cesar,Colombia&output=embed"
            className="h-[360px] w-full grayscale-[35%]"
            loading="lazy"
          />
        </Reveal>
      </section>
    </div>
  )
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof PhoneCall
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4 border-b border-ink-100 pb-6">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal-100 text-signal-600">
        <Icon size={18} weight="bold" />
      </span>
      <div>
        <p className="text-xs font-semibold tracking-[0.1em] text-ink-400 uppercase">{label}</p>
        <div className="mt-1 text-sm leading-relaxed text-ink-700">{children}</div>
      </div>
    </div>
  )
}

function Field({ label, error, input }: { label: string; error?: string; input: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-ink-800">{label}</span>
      {input}
      {error && <span className="text-xs font-medium text-red-600">{error}</span>}
    </label>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-ink-50/60 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors focus:bg-white focus:ring-2 ${
    hasError ? 'border-red-300 focus:ring-red-200' : 'border-ink-200 focus:border-signal-400 focus:ring-signal-100'
  }`
}
