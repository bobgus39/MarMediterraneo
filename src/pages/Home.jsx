import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Stats from '../components/sections/Stats'
import About from '../components/sections/About'
import Team from '../components/sections/Team'
import Testimonials from '../components/sections/Testimonials'
import Appointment from '../components/sections/Appointment'
import Contact from '../components/sections/Contact'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Team />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
    </main>
  )
}
