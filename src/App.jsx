import Navbar from './components/navbar'
import Projects from './sections/Projects'
import Hero from './components/Hero'
import Services from './sections/Services'
import About from './sections/About'

function App() {
  return (
    <div 
      className="min-h-screen py-8 main"
    >
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
    </div>
  )
}

export default App
