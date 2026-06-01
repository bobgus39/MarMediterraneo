import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react'

const footerLinks = {
  Servicios: [
    'Medicina General',
    'Fisioterapia',
    'Traumatología',
    'Cardiología',
    'Neurología',
    'Rehabilitación Deportiva',
  ],
  Clínica: [
    'Sobre Nosotros',
    'Nuestro Equipo',
    'Instalaciones',
    'Testimonios',
    'Blog de Salud',
  ],
  Legal: [
    'Política de Privacidad',
    'Aviso Legal',
    'Política de Cookies',
    'RGPD',
  ],
}

const socialLinks = [
  { label: 'Facebook',  Icon: Facebook,  href: '#', color: 'hover:bg-[#1877F2]' },
  { label: 'Instagram', Icon: Instagram, href: '#', color: 'hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]' },
  { label: 'LinkedIn',  Icon: Linkedin,  href: '#', color: 'hover:bg-[#0A66C2]' },
  { label: 'Twitter',   Icon: Twitter,   href: '#', color: 'hover:bg-[#1DA1F2]' },
  { label: 'YouTube',   Icon: Youtube,   href: '#', color: 'hover:bg-[#FF0000]' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">MM</span>
              </div>
              <div>
                <p className="font-bold text-base">Mar Mediterráneo</p>
                <p className="text-xs text-gray-400">Clínica Médica y Fisioterapia</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Más de 15 años cuidando la salud de nuestros pacientes con profesionalidad,
              calidez humana y tecnología de vanguardia en el corazón del Mediterráneo.
            </p>

            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                C. Pintor Cabrera, 26, Alicante 03003
              </div>
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                +34 965 130 696
              </div>
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                info@marmediterraneo.com
              </div>
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                L–V 8:00–20:00 · S 9:00–14:00
              </div>
            </div>

            <div className="flex gap-2">
              {socialLinks.map(({ label, Icon, href, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 bg-white/8 rounded-lg flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-white hover:scale-110 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-xs uppercase tracking-widest mb-4 text-[#00B4D8]">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Clínica Mar Mediterráneo. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            Hecho con{' '}
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />{' '}
            en Alicante
          </p>
        </div>
      </div>
    </footer>
  )
}
