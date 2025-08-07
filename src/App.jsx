import Navbar from './components/navbar'
import Projects from './sections/Projects'
import Services from './sections/Services'

function App() {
  return (
    <div 
      className="min-h-screen py-8 main"
    >
      <Navbar />
      <Services />
      <Projects />
    </div>
  )
}

export default App
