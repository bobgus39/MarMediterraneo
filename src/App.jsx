import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import FloatingActions from './components/layout/FloatingActions'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <FloatingActions showTop={showTop} />
    </div>
  )
}
