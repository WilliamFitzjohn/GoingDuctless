import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CommercialHVACToronto from './pages/blog/CommercialHVACToronto';
import CommercialHVACMississauga from './pages/blog/CommercialHVACMississauga';
import CommercialHVACNorthYork from './pages/blog/CommercialHVACNorthYork';
import CommercialHVACScarborough from './pages/blog/CommercialHVACScarborough';
import DuctlessHVACToronto from './pages/blog/DuctlessHVACToronto';
import VRFVRVToronto from './pages/blog/VRFVRVToronto';
import DXPipingToronto from './pages/blog/DXPipingToronto';
import './App.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to avoid forced reflow
    requestAnimationFrame(() => {
      if (hash) {
        // If there's a hash, scroll to that element
        const element = document.querySelector(hash);
        if (element) {
          // Use instant scroll to avoid layout thrashing
          const top = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top, behavior: 'instant' });
        }
      } else {
        // Otherwise scroll to top instantly
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Blog/Location Pages - Flat URLs */}
          <Route path="/commercial-hvac-toronto" element={<CommercialHVACToronto />} />
          <Route path="/commercial-hvac-mississauga" element={<CommercialHVACMississauga />} />
          <Route path="/commercial-hvac-north-york" element={<CommercialHVACNorthYork />} />
          <Route path="/commercial-hvac-scarborough" element={<CommercialHVACScarborough />} />
          
          {/* Blog/Service Pages - Flat URLs */}
          <Route path="/ductless-commercial-hvac-toronto" element={<DuctlessHVACToronto />} />
          <Route path="/vrf-vrv-systems-toronto" element={<VRFVRVToronto />} />
          <Route path="/dx-piping-contractors-toronto" element={<DXPipingToronto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
