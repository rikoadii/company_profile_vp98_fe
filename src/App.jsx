import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

// Lazy load non-critical components
const Projects = lazy(() => import('./sections/Projects'));
const Services = lazy(() => import('./sections/Services'));
const About = lazy(() => import('./sections/About'));
const Team = lazy(() => import('./sections/Team'));
const Footer = lazy(() => import('./sections/Footer'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen"></div>}>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <div className='home' id='home'>
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
            element={<ProjectDetail />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App
