import { motion } from 'framer-motion'
import { Button } from '@heroui/react'
import { ChevronDown, Shield, Star, Clock } from 'lucide-react'

const badges = [
  { icon: Shield, text: 'Certificación ISO 9001' },
  { icon: Star, text: '98% satisfacción' },
  { icon: Clock, text: 'Cita en 24h' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#012A4A] via-[#013A63] to-[#01497C]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
          backgroundSize: '44px 44px',
        }}
      />

      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#0096C7]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] w-[500px] h-[500px] rounded-full bg-[#023E8A]/30 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-36 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/15 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-[#48CAE4] animate-pulse" />
              Clínica especializada en salud integral
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              Tu salud,{' '}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48CAE4] via-[#90E0EF] to-[#ADE8F4]">
                nuestra misión
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg text-white/70 mb-9 max-w-lg leading-relaxed"
            >
              Medicina y fisioterapia de excelencia en el corazón del Mediterráneo. Más de{' '}
              <span className="text-white font-semibold">15 años</span> cuidando a tu familia con
              tecnología avanzada y atención personalizada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button
                as="a"
                href="#citas"
                size="lg"
                className="bg-white text-[#0077B6] font-bold hover:bg-[#CAF0F8] shadow-xl shadow-black/10 px-8 text-base"
                radius="full"
              >
                Reservar Cita
              </Button>
              <Button
                as="a"
                href="#servicios"
                variant="bordered"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-8 text-base"
                radius="full"
              >
                Ver Servicios
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-5"
            >
              <div className="flex -space-x-2.5">
                {[11, 12, 13, 14, 15].map((n) => (
                  <img
                    key={n}
                    src={`https://i.pravatar.cc/44?img=${n}`}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-[#013A63] ring-1 ring-white/20"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-300 text-base">★</span>
                  ))}
                </div>
                <p className="text-white/60 text-sm mt-0.5">
                  +5,000 pacientes satisfechos
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[400px]">
              <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&q=80&auto=format&fit=crop"
                  alt="Profesional médico"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012A4A]/70 via-transparent to-transparent" />
              </div>

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Próxima cita</p>
                    <p className="text-gray-900 font-bold text-sm">Hoy 10:30</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-[#E0F4FF] rounded-xl flex items-center justify-center">
                    <span className="text-[#0077B6] text-lg">❤</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Satisfacción</p>
                    <p className="text-gray-900 font-bold text-sm">98%</p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="flex gap-3">
                    {badges.map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-1.5 text-white/90 text-xs">
                        <Icon className="w-3.5 h-3.5 text-[#48CAE4] flex-shrink-0" />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,50 C200,90 400,10 600,50 C800,90 1000,10 1200,50 C1300,70 1370,60 1440,50 L1440,90 L0,90 Z"
          />
        </svg>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
