import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@heroui/react'
import { User, Mail, Phone, Calendar, Clock, ChevronDown, CheckCircle } from 'lucide-react'

const specialties = [
  'Medicina General',
  'Fisioterapia',
  'Traumatología',
  'Cardiología',
  'Neurología',
  'Nutrición Clínica',
  'Rehabilitación Deportiva',
  'Diagnóstico por Imagen',
]

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00',
]

const initialForm = {
  name: '', email: '', phone: '',
  specialty: '', date: '', time: '', message: '',
}

// Reutilizable: label + campo
function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#475569]">
        {label}
        {required && <span className="text-[#0077B6] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

const baseField =
  'w-full rounded-xl border border-gray-200 bg-white text-[#0F172A] text-sm ' +
  'placeholder:text-gray-300 outline-none transition-all duration-200 ' +
  'hover:border-[#0077B6] focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/10'

const fieldClass = `${baseField} h-11`
const textareaClass = `${baseField} py-3 px-4 resize-none min-h-[96px]`

export default function Appointment() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(initialForm)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setForm(initialForm)
    onOpen()
  }

  return (
    <section id="citas" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#012A4A] via-[#023E8A] to-[#0077B6]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00B4D8]/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[#48CAE4] font-semibold text-xs uppercase tracking-[0.2em] bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 border border-white/15">
            Cita Médica
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Reserva tu cita online
          </h2>
          <p className="text-white/65 max-w-xl mx-auto text-base leading-relaxed">
            Solicita tu cita de forma rápida y sencilla. Te confirmamos en menos de 24 horas.
          </p>
        </motion.div>

        {/* Tarjeta del formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">

              {/* Nombre */}
              <Field label="Nombre completo" required>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                  <input
                    className={`${fieldClass} pl-10 pr-4`}
                    placeholder="Juan García Martínez"
                    value={form.name}
                    onChange={set('name')}
                    required
                  />
                </div>
              </Field>

              {/* Email */}
              <Field label="Correo electrónico" required>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                  <input
                    className={`${fieldClass} pl-10 pr-4`}
                    type="email"
                    placeholder="juan@email.com"
                    value={form.email}
                    onChange={set('email')}
                    required
                  />
                </div>
              </Field>

              {/* Teléfono */}
              <Field label="Teléfono" required>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                  <input
                    className={`${fieldClass} pl-10 pr-4`}
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={form.phone}
                    onChange={set('phone')}
                    required
                  />
                </div>
              </Field>

              {/* Especialidad */}
              <Field label="Especialidad" required>
                <div className="relative">
                  <select
                    className={`${fieldClass} px-4 pr-10 appearance-none cursor-pointer ${form.specialty === '' ? 'text-gray-300' : 'text-[#0F172A]'}`}
                    value={form.specialty}
                    onChange={set('specialty')}
                    required
                  >
                    <option value="" disabled>Selecciona una especialidad</option>
                    {specialties.map((s) => (
                      <option key={s} value={s} className="text-[#0F172A]">{s}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                </div>
              </Field>

              {/* Fecha */}
              <Field label="Fecha preferida" required>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                  <input
                    className={`${fieldClass} pl-10 pr-4`}
                    type="date"
                    value={form.date}
                    onChange={set('date')}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
              </Field>

              {/* Hora */}
              <Field label="Hora preferida" required>
                <div className="relative">
                  <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                  <select
                    className={`${fieldClass} pl-10 pr-10 appearance-none cursor-pointer ${form.time === '' ? 'text-gray-300' : 'text-[#0F172A]'}`}
                    value={form.time}
                    onChange={set('time')}
                    required
                  >
                    <option value="" disabled>Selecciona una hora</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t} className="text-[#0F172A]">{t}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                </div>
              </Field>
            </div>

            {/* Motivo */}
            <Field label="Motivo de consulta (opcional)">
              <textarea
                className={textareaClass}
                rows={3}
                placeholder="Describe brevemente el motivo de tu consulta..."
                value={form.message}
                onChange={set('message')}
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              isLoading={loading}
              className="w-full mt-6 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold text-base shadow-lg shadow-[#0077B6]/25 h-13"
              radius="full"
            >
              {loading ? 'Enviando solicitud...' : 'Solicitar Cita Ahora'}
            </Button>

            <p className="text-center text-[#94A3B8] text-xs mt-4">
              Al enviar aceptas nuestra{' '}
              <a href="#" className="text-[#0077B6] hover:underline">política de privacidad</a>.
            </p>
          </form>
        </motion.div>
      </div>

      {/* Modal de confirmación */}
      <Modal isOpen={isOpen} onClose={onClose} placement="center" backdrop="blur" classNames={{ base: 'mx-4' }}>
        <ModalContent>
          <ModalHeader className="flex flex-col items-center pt-8 pb-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
            >
              <CheckCircle className="w-8 h-8 text-green-600" />
            </motion.div>
            <h3 className="text-xl font-bold text-[#0F172A]">¡Solicitud enviada!</h3>
          </ModalHeader>
          <ModalBody className="text-center text-[#64748B] px-8 pb-2">
            <p className="leading-relaxed">
              Hemos recibido tu solicitud correctamente. Nuestro equipo te contactará en menos de{' '}
              <span className="font-semibold text-[#0F172A]">24 horas</span> para confirmar la cita.
            </p>
          </ModalBody>
          <ModalFooter className="justify-center pb-8">
            <Button
              onPress={onClose}
              className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold px-10"
              radius="full"
              size="lg"
            >
              Entendido
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  )
}
