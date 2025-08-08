import Navbar from './components/navbar'
import Projects from './sections/Projects'
import Hero from './components/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Team from './sections/Team'

function App() {
  return (
    <div 
      className="min-h-screen py-8"
    >
      <div className='home'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
    </div>
  )
}

export default App
