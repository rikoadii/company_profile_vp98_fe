import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './sections/Projects';
import Hero from './components/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Team from './sections/Team';
import Footer from './sections/Footer';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <div className='home' id='home'>
                <Navbar />
                <div className="pt-24 sm:pt-28 md:pt-32">
                  <Hero />
                </div>
              </div>
              <About />
              <Team />
              <Services />
              <Projects />
              <Footer />
            </>
          } 
        />
        <Route
          path="/project/:id"
          element={
            <>
              <ProjectDetail />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
