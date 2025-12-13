import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <SEO 
        title="Commercial HVAC & Ductless Systems"
        description="Expert commercial ductless HVAC solutions in the Greater Toronto Area. Over 25 years experience in VRF, VRV, and ductless systems. TSSA certified, HRAI members. Call (905) 239-5567"
        keywords="ductless HVAC, VRF systems, VRV systems, commercial HVAC, Mitsubishi HVAC, LG HVAC, Lennox, DX piping, Toronto HVAC, Bowmanville HVAC"
      />
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Commercial HVAC Solutions
            <span className="hero-subtitle">The Ductless Airconditioning Experts</span>
          </h1>
          <p className="hero-description">
            Over 25 years of engineering excellence in VRF, VRV, ductless, and large DX systems.<br/>Serving the Greater Toronto Area, and beyond with certified installations.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <div className="container">
          <div className="logo-strip">
            <Link to="/about#certifications" className="cert-logo">
              <img src="/tssa.png" alt="TSSA Certified" />
            </Link>
            <Link to="/about#certifications" className="cert-logo">
              <img src="/hrai.png" alt="HRAI Member" />
            </Link>
            <Link to="/about#certifications" className="cert-logo">
              <img src="/wsib.png" alt="WSIB" />
            </Link>
            <Link to="/about#certifications" className="cert-logo">
              <img src="/mitsubishi.png" alt="Mitsubishi Certified" />
            </Link>
            <Link to="/about#certifications" className="cert-logo">
              <img src="/lg.png" alt="LG Certified" />
            </Link>
            <Link to="/about#certifications" className="cert-logo">
              <img src="/lennox.png" alt="Lennox Certified" />
            </Link>
            <Link to="/about#certifications" className="cert-logo">
              <img src="/daikin.png" alt="Lennox Certified" />
            </Link>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Specializations</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 3v18"/>
                  <path d="M15 3v18"/>
                </svg>
              </div>
              <h3>VRF & VRV Systems</h3>
              <p>Engineered solutions for Variable Refrigerant Flow and Variable Refrigerant Volume systems. Expert installation and maintenance for offices, server rooms, hotels, schools, and hospitals.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 3v4"/>
                  <path d="M8 3v4"/>
                  <path d="M12 11v6"/>
                  <path d="M9 14h6"/>
                </svg>
              </div>
              <h3>Ductless Systems</h3>
              <p>Complete installation and maintenance of single-split and multi-split ductless systems. Working with industry-leading brands including Mitsubishi, Daikin, and Fujitsu for optimal performance.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <path d="M12 22V12"/>
                  <path d="M3.3 7l8.7 5 8.7-5"/>
                </svg>
              </div>
              <h3>DX Piping</h3>
              <p>Precision direct expansion refrigerant piping installation for optimal system performance and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <div className="experience-content">
            <div className="experience-text">
              <h2>Engineered for Excellence</h2>
              <p>
                Based in Bowmanville and serving the entire Greater Toronto Area, Going Ductless Ltd. brings over 25 years of specialized expertise in ductless HVAC systems. Our knowledgeable staff delivers engineered solutions tailored to your commercial needs.
              </p>
              <p>
                TSSA certified and HRAI members, we're committed to the highest standards in installation quality and technical excellence. From initial design to final commissioning, we ensure your ductless system performs flawlessly.
              </p>
            </div>
            <div className="experience-stats">
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      <Testimonials />

      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for an engineered ductless HVAC solution tailored to your commercial facility.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
