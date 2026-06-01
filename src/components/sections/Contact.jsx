import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@heroui/react'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'

const contactCards = [
  {
    icon: MapPin,
    title: 'Dirección',
    lines: ['Passeig del Mar Mediterrani, 42', 'Barcelona, 08003'],
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    action: { label: 'Ver en Maps', href: '#' },
  },
  {
    icon: Phone,
    title: 'Teléfono',
    lines: ['+34 93 456 78 90', '+34 600 123 456'],
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    action: { label: 'Llamar ahora', href: 'tel:+34934567890' },
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@marmediterraneo.com', 'citas@marmediterraneo.com'],
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    action: { label: 'Enviar email', href: 'mailto:info@marmediterraneo.com' },
  },
  {
    icon: Clock,
    title: 'Horario',
    lines: ['Lunes – Viernes: 8:00 – 20:00', 'Sábado: 9:00 – 14:00'],
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    action: null,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contacto" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#0077B6] font-semibold text-xs uppercase tracking-[0.2em] bg-[#E0F4FF] px-4 py-1.5 rounded-full mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-5 tracking-tight">
            ¿Cómo podemos ayudarte?
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-lg leading-relaxed">
            Estamos aquí para atenderte. Contacta con nosotros por cualquier duda
            o para solicitar tu cita.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {contactCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="p-6 rounded-2xl border border-gray-100 hover:border-[#0077B6]/25 hover:shadow-lg hover:shadow-[#0077B6]/8 transition-all duration-300 group flex flex-col"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
                >
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                <h3 className="font-bold text-[#0F172A] text-sm mb-2">{card.title}</h3>
                <div className="flex-1">
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-[#64748B] text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
                {card.action && (
                  <a
                    href={card.action.href}
                    className="inline-flex items-center gap-1 text-[#0077B6] text-xs font-semibold mt-3 hover:underline"
                    target={card.action.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    {card.action.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden h-72 bg-gradient-to-br from-[#E0F4FF] via-[#CAF0F8] to-[#ADE8F4]"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-14 h-14 bg-[#0077B6] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#0077B6]/30">
              <MapPin className="w-7 h-7 text-white fill-white/20" />
            </div>
            <p className="text-[#023E8A] font-bold text-lg mb-1">
              Passeig del Mar Mediterrani, 42
            </p>
            <p className="text-[#0077B6] text-sm mb-5">Barcelona, 08003</p>
            <Button
              as="a"
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="bg-[#0077B6] text-white font-semibold shadow-md"
              radius="full"
            >
              Abrir en Google Maps
            </Button>
          </div>

          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(#0077B6 1px, transparent 1px),
                linear-gradient(90deg, #0077B6 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
