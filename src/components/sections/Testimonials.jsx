import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Card, CardBody, Avatar } from '@heroui/react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana García',
    role: 'Paciente de Fisioterapia',
    img: 'https://i.pravatar.cc/80?img=5',
    text: 'El equipo de fisioterapia de Mar Mediterráneo fue increíble. Después de mi operación de rodilla recuperé la movilidad total gracias a su dedicación y profesionalidad. 100% recomendado.',
    rating: 5,
  },
  {
    name: 'Roberto Pérez',
    role: 'Paciente de Traumatología',
    img: 'https://i.pravatar.cc/80?img=12',
    text: 'Acudí con una lesión de rodilla bastante seria y me trataron de forma excelente. El Dr. Ruiz es un profesional extraordinario. Las instalaciones son modernas y el trato, muy humano.',
    rating: 5,
  },
  {
    name: 'Carmen López',
    role: 'Paciente de Cardiología',
    img: 'https://i.pravatar.cc/80?img=9',
    text: 'Llevo 3 años siendo paciente de la clínica y no podría estar más satisfecha. Siempre que llamo tienen cita disponible y el seguimiento que hacen es muy completo y detallado.',
    rating: 5,
  },
  {
    name: 'Miguel Torres',
    role: 'Paciente de Medicina General',
    img: 'https://i.pravatar.cc/80?img=25',
    text: 'Lo mejor de Mar Mediterráneo es el trato cercano y personalizado. No te sientes un número más, sino un paciente al que de verdad le dedican tiempo y atención. ¡Gracias a todo el equipo!',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-24 bg-[#F8FAFC]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#0077B6] font-semibold text-xs uppercase tracking-[0.2em] bg-[#E0F4FF] px-4 py-1.5 rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Lo que dicen nuestros pacientes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-0 shadow-xl shadow-gray-200/80 overflow-hidden" radius="lg">
            <CardBody className="p-8 sm:p-14 relative">
              <Quote className="absolute top-8 left-8 w-10 h-10 text-[#E0F4FF]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex gap-0.5 mb-6">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-xl">★</span>
                    ))}
                  </div>

                  <blockquote className="text-[#334155] text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl italic font-light">
                    "{testimonials[current].text}"
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <Avatar src={testimonials[current].img} className="w-12 h-12 ring-2 ring-[#E0F4FF]" />
                    <div className="text-left">
                      <p className="font-bold text-[#0F172A] text-sm">{testimonials[current].name}</p>
                      <p className="text-[#64748B] text-xs">{testimonials[current].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardBody>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-7">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-10 h-10 rounded-full border-2 border-[#0077B6]/20 text-[#0077B6] flex items-center justify-center hover:bg-[#0077B6] hover:text-white hover:border-[#0077B6] transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-7 h-2.5 bg-[#0077B6]'
                      : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Siguiente"
              className="w-10 h-10 rounded-full border-2 border-[#0077B6]/20 text-[#0077B6] flex items-center justify-center hover:bg-[#0077B6] hover:text-white hover:border-[#0077B6] transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
