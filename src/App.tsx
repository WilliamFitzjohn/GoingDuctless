import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
