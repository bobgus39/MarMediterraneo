import { useState, useEffect } from 'react'
import { Button } from '@heroui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

export default function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-lg shadow-sm border-b border-gray-100'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? 'py-4' : 'py-6'
            }`}
          >
            {/* Logo */}
            <motion.a
              href="#inicio"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center shadow-md shadow-[#0077B6]/25">
                <span className="text-white font-bold text-sm tracking-tight">MM</span>
              </div>
              <div className="hidden sm:block">
                <p
                  className="font-bold text-sm leading-tight transition-colors duration-300"
                  style={scrolled
                    ? { color: '#023E8A' }
                    : { color: '#ffffff', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }
                  }
                >
                  Mar Mediterráneo
                </p>
                <p
                  className="text-xs leading-tight transition-colors duration-300"
                  style={scrolled
                    ? { color: '#94A3B8' }
                    : { color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }
                  }
                >
                  Clínica Médica
                </p>
              </div>
            </motion.a>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  whileHover={{ y: -1 }}
                  className={`relative text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 group
                    ${scrolled
                      ? 'text-[#334155] hover:text-[#0077B6]'
                      : 'hover:bg-white/10'
                    }`}
                  style={!scrolled
                    ? { color: '#ffffff', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }
                    : undefined
                  }
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 w-0 group-hover:w-4/5
                    ${scrolled ? 'bg-[#0077B6]' : 'bg-white'}`}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  as="a"
                  href="#citas"
                  size="sm"
                  className="hidden sm:flex bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-semibold px-6 shadow-lg shadow-[#0077B6]/25 hover:shadow-[#0077B6]/40 hover:opacity-90 transition-all"
                  radius="full"
                >
                  Reservar Cita
                </Button>
              </motion.div>

              {/* Hamburger (mobile) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir menú"
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  scrolled
                    ? 'text-[#334155] hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/97 backdrop-blur-xl border-b border-gray-100 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#475569] font-medium py-3 px-3 rounded-lg hover:text-[#0077B6] hover:bg-[#F0F9FF] transition-colors border-b border-gray-50 last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <Button
                as="a"
                href="#citas"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold w-full mt-3"
                radius="full"
                size="lg"
              >
                Reservar Cita
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
