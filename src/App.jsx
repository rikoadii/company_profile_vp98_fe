import Navbar from './components/navbar'
import Hero from './components/Hero'
import Services from './sections/Services'
import About from './sections/About'

function App() {
  return (
    <div 
      className="min-h-screen mx-18 main"
    >
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default App
