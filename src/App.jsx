import Navbar from './components/navbar'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Team from './sections/Team'

function App() {
  return (
    <div 
      className="min-h-screen py-8"
    >
      <div className='home'>
      <Navbar />
      </div>
      <Services />
      <Projects />
      <Team />
    </div>
  )
}

export default App
