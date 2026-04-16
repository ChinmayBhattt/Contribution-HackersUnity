import { useEffect } from 'react'
import './App.css'
import { SignedIn, SignedOut } from "@clerk/clerk-react"
import { Routes, Route, useLocation } from 'react-router-dom'

// Import components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import Sponsors from './components/Sponsors'
import Partners from './components/Partners'
import Events from './components/Events'
import Footer from './components/Footer'
import WorkWithHU from './pages/WorkWithHU'

// Import components
function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Achievements />
              <Events />
              <Sponsors />
              <Partners />
            </>
          } />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/events" element={<Events />} />
          <Route path="/work-with-hu" element={<WorkWithHU />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
