import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Input,
  Button,
  Select,
  SelectItem,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@heroui/react'
import { User, Mail, Phone, Calendar, Clock, MessageSquare, CheckCircle } from 'lucide-react'

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
  name: '',
  email: '',
  phone: '',
  specialty: new Set([]),
  date: '',
  time: new Set([]),
  message: '',
}

export default function Appointment() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(initialForm)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1600))
    setLoading(false)
    setForm(initialForm)
    onOpen()
  }

  const inputStyles = {
    inputWrapper: [
      'border-gray-200',
      'hover:border-[#0077B6]',
      'focus-within:!border-[#0077B6]',
      'shadow-none',
      'bg-white',
    ],
  }

  return (
    <section id="citas" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#012A4A] via-[#023E8A] to-[#0077B6]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00B4D8]/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#48CAE4] font-semibold text-xs uppercase tracking-[0.2em] bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 border border-white/15">
            Cita Médica
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Reserva tu cita online
          </h2>
          <p className="text-white/65 max-w-2xl mx-auto text-lg leading-relaxed">
            Solicita tu cita de forma rápida y sencilla. Nuestro equipo te confirma
            en menos de 24 horas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-7 sm:p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Input
                label="Nombre completo"
                placeholder="Juan García Martínez"
                value={form.name}
                onValueChange={(v) => setForm({ ...form, name: v })}
                startContent={<User className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                isRequired
                variant="bordered"
                classNames={inputStyles}
              />
              <Input
                label="Correo electrónico"
                placeholder="juan@email.com"
                type="email"
                value={form.email}
                onValueChange={(v) => setForm({ ...form, email: v })}
                startContent={<Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                isRequired
                variant="bordered"
                classNames={inputStyles}
              />
              <Input
                label="Teléfono"
                placeholder="+34 600 000 000"
                value={form.phone}
                onValueChange={(v) => setForm({ ...form, phone: v })}
                startContent={<Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                isRequired
                variant="bordered"
                classNames={inputStyles}
              />
              <Select
                label="Especialidad"
                placeholder="Selecciona una especialidad"
                selectedKeys={form.specialty}
                onSelectionChange={(keys) => setForm({ ...form, specialty: keys })}
                isRequired
                variant="bordered"
                classNames={{ trigger: 'border-gray-200 hover:border-[#0077B6] shadow-none bg-white' }}
              >
                {specialties.map((s) => (
                  <SelectItem key={s}>{s}</SelectItem>
                ))}
              </Select>
              <Input
                label="Fecha preferida"
                type="date"
                value={form.date}
                onValueChange={(v) => setForm({ ...form, date: v })}
                startContent={<Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                isRequired
                variant="bordered"
                classNames={inputStyles}
                min={new Date().toISOString().split('T')[0]}
              />
              <Select
                label="Hora preferida"
                placeholder="Selecciona una hora"
                selectedKeys={form.time}
                onSelectionChange={(keys) => setForm({ ...form, time: keys })}
                isRequired
                variant="bordered"
                classNames={{ trigger: 'border-gray-200 hover:border-[#0077B6] shadow-none bg-white' }}
              >
                {timeSlots.map((t) => (
                  <SelectItem key={t}>{t}</SelectItem>
                ))}
              </Select>
            </div>

            <Textarea
              label="Motivo de consulta (opcional)"
              placeholder="Describe brevemente el motivo de tu consulta..."
              value={form.message}
              onValueChange={(v) => setForm({ ...form, message: v })}
              variant="bordered"
              classNames={{
                inputWrapper: [
                  'border-gray-200',
                  'hover:border-[#0077B6]',
                  'focus-within:!border-[#0077B6]',
                  'shadow-none',
                  'bg-white',
                ],
              }}
              className="mb-6"
              minRows={3}
              maxRows={5}
            />

            <Button
              type="submit"
              size="lg"
              isLoading={loading}
              className="w-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold text-base shadow-lg shadow-[#0077B6]/25 h-14"
              radius="full"
              loadingSpinner={
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              }
            >
              {loading ? 'Enviando solicitud...' : 'Solicitar Cita Ahora'}
            </Button>

            <p className="text-center text-[#94A3B8] text-xs mt-4">
              Al enviar este formulario aceptas nuestra{' '}
              <a href="#" className="text-[#0077B6] hover:underline">
                política de privacidad
              </a>
              .
            </p>
          </form>
        </motion.div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
        backdrop="blur"
        classNames={{ base: 'mx-4' }}
      >
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
              Hemos recibido tu solicitud de cita correctamente. Nuestro equipo se
              pondrá en contacto contigo en menos de{' '}
              <span className="font-semibold text-[#0F172A]">24 horas</span> para
              confirmar la fecha y hora.
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
