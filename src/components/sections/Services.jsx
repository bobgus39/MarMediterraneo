import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardBody, Chip, Button } from '@heroui/react'
import {
  Stethoscope, Activity, Bone, Heart, Brain, Apple, Dumbbell, ScanLine,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Medicina General',
    description: 'Atención primaria integral con diagnóstico y seguimiento personalizado para toda la familia.',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    tag: 'Más solicitado',
    tagColor: 'bg-sky-100 text-sky-700',
  },
  {
    icon: Activity,
    title: 'Fisioterapia',
    description: 'Rehabilitación, terapia manual y técnicas avanzadas para recuperar tu movilidad y bienestar.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    tag: 'Más solicitado',
    tagColor: 'bg-teal-100 text-teal-700',
  },
  {
    icon: Bone,
    title: 'Traumatología',
    description: 'Diagnóstico y tratamiento de lesiones del aparato locomotor, articulaciones y tejidos blandos.',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Heart,
    title: 'Cardiología',
    description: 'Evaluación y seguimiento cardiovascular completo con tecnología diagnóstica de última generación.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: Brain,
    title: 'Neurología',
    description: 'Diagnóstico y tratamiento de enfermedades del sistema nervioso central y periférico.',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Apple,
    title: 'Nutrición Clínica',
    description: 'Planes nutricionales individualizados para mejorar tu salud, controlar el peso y optimizar el rendimiento.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Dumbbell,
    title: 'Rehabilitación Deportiva',
    description: 'Recuperación y prevención de lesiones deportivas para atletas y personas activas de todos los niveles.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: ScanLine,
    title: 'Diagnóstico por Imagen',
    description: 'Ecografías y pruebas de diagnóstico avanzado para una evaluación rápida, precisa y no invasiva.',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#0077B6] font-semibold text-xs uppercase tracking-[0.2em] bg-[#E0F4FF] px-4 py-1.5 rounded-full mb-4">
            Nuestras Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-5 tracking-tight">
            Atención médica integral
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-lg leading-relaxed">
            Ofrecemos una amplia gama de especialidades para cuidar de tu salud en cada
            etapa de tu vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={cardVariants}
              >
                <Card
                  isPressable
                  className="h-full border border-gray-100 hover:border-[#0077B6]/30 hover:shadow-xl hover:shadow-[#0077B6]/8 transition-all duration-300 group cursor-pointer"
                  shadow="none"
                >
                  <CardBody className="p-6 flex flex-col gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-5 h-5 ${service.iconColor}`} />
                    </div>
                    <div>
                      <div className="flex items-start gap-2 mb-1.5">
                        <h3 className="font-bold text-[#0F172A] text-sm leading-tight">
                          {service.title}
                        </h3>
                      </div>
                      {service.tag && (
                        <Chip
                          size="sm"
                          className={`${service.tagColor} text-[10px] font-semibold border-0 h-5 mb-2`}
                          variant="flat"
                        >
                          {service.tag}
                        </Chip>
                      )}
                      <p className="text-[#64748B] text-xs leading-relaxed">{service.description}</p>
                    </div>
                    <div className="mt-auto pt-2 flex items-center gap-1 text-[#0077B6] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Saber más <ArrowRight className="w-3 h-3" />
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button
            as="a"
            href="#citas"
            size="lg"
            className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold shadow-lg shadow-[#0077B6]/25 px-10"
            radius="full"
          >
            Solicitar consulta
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
