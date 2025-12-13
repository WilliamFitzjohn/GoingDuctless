import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Professional HVAC Solutions
            <span className="hero-subtitle">For Commercial & Industrial Systems</span>
          </h1>
          <p className="hero-description">
            Over 25 years of excellence in VRF systems, commercial HVAC, and DX piping installations
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
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
              <h3>VRF Systems</h3>
              <p>Expert installation and maintenance of Variable Refrigerant Flow systems for maximum efficiency and comfort control.</p>
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
              <h3>Commercial HVAC</h3>
              <p>Comprehensive commercial heating, ventilation, and air conditioning solutions for businesses of all sizes.</p>
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
              <h2>25+ Years of Excellence</h2>
              <p>
                With over a quarter century of experience in the HVAC industry, we've built our reputation on quality workmanship, technical expertise, and unwavering commitment to customer satisfaction.
              </p>
              <p>
                Our team of certified technicians stays current with the latest technologies and best practices to deliver superior results on every project.
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

      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a consultation and see how we can help with your HVAC needs.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
