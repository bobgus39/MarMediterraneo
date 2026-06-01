import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button, Chip } from '@heroui/react'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Tecnología médica de última generación',
  'Equipo multidisciplinar altamente cualificado',
  'Atención personalizada y cercana',
  'Instalaciones modernas y confortables',
  'Cobertura por todas las aseguradoras principales',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" className="py-24 bg-[#F8FAFC]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-[520px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&auto=format&fit=crop"
                alt="Interior de la clínica Mar Mediterráneo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#023E8A]/25 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <p className="font-bold text-[#0F172A] text-sm">Certificación</p>
                  <p className="text-[#64748B] text-xs">ISO 9001:2015</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-5 -left-5 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-5 shadow-xl text-white text-center"
            >
              <p className="text-4xl font-extrabold leading-none">15+</p>
              <p className="text-xs text-white/80 mt-1 leading-tight">Años de<br />experiencia</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-[#0077B6] font-semibold text-xs uppercase tracking-[0.2em] bg-[#E0F4FF] px-4 py-1.5 rounded-full mb-5">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight leading-tight">
              Más de 15 años cuidando tu salud
            </h2>
            <p className="text-[#64748B] text-lg mb-5 leading-relaxed">
              Clínica Mar Mediterráneo nació con la misión de ofrecer atención médica de
              excelencia en un entorno cálido y cercano. Combinamos la mejor tecnología
              con un equipo humano excepcional para que tu salud esté siempre en las
              mejores manos.
            </p>
            <p className="text-[#64748B] mb-8 leading-relaxed">
              Nuestra filosofía es tratar a cada paciente como único, con la atención
              personalizada que se merece, desde el primer diagnóstico hasta la
              completa recuperación.
            </p>

            <div className="space-y-3 mb-9">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0077B6] flex-shrink-0" />
                  <span className="text-[#334155] font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                as="a"
                href="#citas"
                size="lg"
                className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold shadow-lg shadow-[#0077B6]/25 px-8"
                radius="full"
              >
                Reservar cita
              </Button>
              <Button
                as="a"
                href="#contacto"
                variant="bordered"
                size="lg"
                className="border-[#0077B6]/30 text-[#0077B6] hover:bg-[#E0F4FF] px-8"
                radius="full"
              >
                Contactar
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
