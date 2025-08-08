import Navbar from './components/navbar'
import Projects from './sections/Projects'
import Hero from './components/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Team from './sections/Team'

function App() {
  return (
    <>
      <div className='home'>
      <Navbar />
      <Hero />
    </div>
      <About />
      <Services />
      <Projects />
      <div>
      <Team />
      </div>
    </>
  )
}

export default App
