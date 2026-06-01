import { useState, useEffect } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from '@heroui/react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
      maxWidth="xl"
      height="4.5rem"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className={`sm:hidden ${scrolled ? 'text-[#0F172A]' : 'text-white'}`}
        />
        <NavbarBrand>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm tracking-tight">MM</span>
            </div>
            <div className="hidden sm:block">
              <p className={`font-bold text-sm leading-tight transition-colors ${scrolled ? 'text-[#023E8A]' : 'text-white'}`}>
                Mar Mediterráneo
              </p>
              <p className={`text-xs leading-tight transition-colors ${scrolled ? 'text-[#64748B]' : 'text-white/70'}`}>
                Clínica Médica
              </p>
            </div>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        {navItems.map((item, i) => (
          <NavbarItem key={item.href}>
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
              href={item.href}
              className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-all hover:text-[#0077B6] hover:bg-[#0077B6]/5 ${
                scrolled ? 'text-[#334155]' : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </motion.a>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              as="a"
              href="#citas"
              size="sm"
              className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-semibold px-5 shadow-lg shadow-[#0077B6]/25 hover:shadow-[#0077B6]/40 hover:scale-105 transition-all"
              radius="full"
            >
              Reservar Cita
            </Button>
          </motion.div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-white/97 backdrop-blur-xl pt-8 gap-1">
        {navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <a
              href={item.href}
              className="text-[#334155] text-base font-medium py-3 block hover:text-[#0077B6] transition-colors border-b border-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-4">
          <Button
            as="a"
            href="#citas"
            className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold w-full"
            radius="full"
            size="lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Reservar Cita
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
