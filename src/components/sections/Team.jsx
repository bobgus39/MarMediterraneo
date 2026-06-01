import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardBody, Avatar, Chip } from '@heroui/react'
import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: 'Dr. Carlos Martínez',
    role: 'Director Médico',
    specialty: 'Medicina Interna',
    experience: '18 años',
    img: 'https://i.pravatar.cc/300?img=33',
    chipClass: 'bg-sky-100 text-sky-700',
  },
  {
    name: 'Dra. Laura González',
    role: 'Fisioterapeuta Jefa',
    specialty: 'Rehabilitación',
    experience: '12 años',
    img: 'https://i.pravatar.cc/300?img=47',
    chipClass: 'bg-teal-100 text-teal-700',
  },
  {
    name: 'Dr. Antonio Ruiz',
    role: 'Traumatólogo',
    specialty: 'Cirugía Ortopédica',
    experience: '15 años',
    img: 'https://i.pravatar.cc/300?img=52',
    chipClass: 'bg-indigo-100 text-indigo-700',
  },
  {
    name: 'Dra. María Sánchez',
    role: 'Cardióloga',
    specialty: 'Cardiología',
    experience: '10 años',
    img: 'https://i.pravatar.cc/300?img=44',
    chipClass: 'bg-rose-100 text-rose-700',
  },
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="equipo" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#0077B6] font-semibold text-xs uppercase tracking-[0.2em] bg-[#E0F4FF] px-4 py-1.5 rounded-full mb-4">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-5 tracking-tight">
            Profesionales a tu servicio
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-lg leading-relaxed">
            Un equipo de especialistas altamente cualificados y comprometidos con tu
            bienestar en cada visita.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card
                className="border border-gray-100 hover:border-[#0077B6]/25 hover:shadow-xl hover:shadow-[#0077B6]/8 hover:-translate-y-1 transition-all duration-300 group overflow-visible"
                shadow="none"
              >
                <CardBody className="p-6 flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <Avatar
                      src={member.img}
                      className="w-24 h-24 ring-4 ring-[#E0F4FF] group-hover:ring-[#0077B6]/25 transition-all duration-300"
                      imgProps={{ loading: 'lazy' }}
                    />
                    <span className="absolute bottom-0.5 right-0.5 w-5 h-5 bg-green-400 rounded-full border-2 border-white" />
                  </div>

                  <h3 className="font-bold text-[#0F172A] text-sm mb-0.5">{member.name}</h3>
                  <p className="text-[#64748B] text-xs mb-1">{member.role}</p>
                  <p className="text-[#94A3B8] text-xs mb-3">{member.experience} de experiencia</p>

                  <Chip size="sm" className={`${member.chipClass} border-0 text-[11px] font-medium`} variant="flat">
                    {member.specialty}
                  </Chip>

                  <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="w-8 h-8 rounded-lg bg-[#E0F4FF] text-[#0077B6] flex items-center justify-center hover:bg-[#0077B6] hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-[#E0F4FF] text-[#0077B6] flex items-center justify-center hover:bg-[#0077B6] hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
