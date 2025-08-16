import Navbar from './components/Navbar'
import Projects from './sections/Projects'
import Hero from './components/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Team from './sections/Team'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <div className='home' id='home'>
      <Navbar />
      <Hero />
    </div>
      <About />
      <Team />
      <Services />
      <Projects />
      <Footer />
    </>
  )
}

export default App
