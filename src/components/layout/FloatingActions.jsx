import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, MessageCircle } from 'lucide-react'

export default function FloatingActions({ showTop }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/34965130696?text=Hola,%20me%20gustaría%20pedir%20información%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-400/30 hover:shadow-green-400/50 hover:scale-110 transition-all duration-200"
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="w-14 h-14 bg-[#0077B6] rounded-full flex items-center justify-center shadow-lg shadow-[#0077B6]/30 hover:shadow-[#0077B6]/50 hover:scale-110 transition-all duration-200"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
