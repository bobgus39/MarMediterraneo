import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 15, suffix: '+', label: 'Años de experiencia', emoji: '🏥' },
  { value: 5000, suffix: '+', label: 'Pacientes atendidos', emoji: '👥' },
  { value: 12, suffix: '', label: 'Especialistas', emoji: '⚕️' },
  { value: 98, suffix: '%', label: 'Satisfacción pacientes', emoji: '⭐' },
]

function CountUp({ value, suffix, isActive }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return
    let start = 0
    const duration = 1800
    const totalSteps = 60
    const increment = value / totalSteps
    const interval = duration / totalSteps

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isActive, value])

  return (
    <span className="tabular-nums">
      {count >= 1000 ? count.toLocaleString('es-ES') : count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#023E8A] via-[#0077B6] to-[#0096C7]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <div className="text-3xl mb-3">{stat.emoji}</div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 leading-none">
                <CountUp value={stat.value} suffix={stat.suffix} isActive={isInView} />
              </div>
              <p className="text-[#ADE8F4] font-medium text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
