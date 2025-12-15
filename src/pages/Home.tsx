import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <SEO 
        title="Toronto Commercial HVAC & DX Piping Contractors"
        description="Going Ductless - Toronto's premier commercial HVAC contractors and GTA DX piping specialists. Expert ductless HVAC solutions, VRF, VRV systems. Over 25 years experience. TSSA certified, HRAI members. Call (905) 239-5567"
        keywords="going ductless, toronto commercial hvac, gta dx piping contractors, ductless hvac toronto, commercial hvac contractors gta, dx piping specialists, VRF systems toronto, VRV toronto, ductless air conditioning gta, commercial hvac installation toronto, refrigerant piping contractors gta"
      />
      <main>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-title">
            Commercial HVAC Solutions
            <span className="hero-subtitle">The Ductless Airconditioning Experts</span>
          </h1>
          <p className="hero-description">
            Over <strong className="years-badge">25 years</strong> of engineering excellence in VRF, VRV, ductless, and large DX systems.<br/>Serving the Greater Toronto Area, and beyond with certified installations.
          </p>
          <div className="hero-buttons">
            <Link to="/contact/" className="btn btn-primary">Get In Touch</Link>
            <Link to="/about/" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <nav className="social-proof" aria-label="Certifications and partnerships">
        <div className="container">
          <div className="logo-strip">
            <Link to="/about/#certifications" className="cert-logo">
              <picture>
                <source 
                  type="image/webp" 
                  srcSet="/tssa-small.webp 100w, /tssa.webp 300w"
                  sizes="100px"
                />
                <img src="/tssa-small.webp" alt="TSSA Certified" width="100" height="100" loading="eager" />
              </picture>
            </Link>
            <Link to="/about/#certifications" className="cert-logo">
              <picture>
                <source 
                  type="image/webp" 
                  srcSet="/hrai-small.webp 100w, /hrai.webp 300w"
                  sizes="100px"
                />
                <img src="/hrai-small.webp" alt="HRAI Member" width="100" height="100" loading="eager" />
              </picture>
            </Link>
            <Link to="/about/#certifications" className="cert-logo">
              <picture>
                <source 
                  type="image/webp" 
                  srcSet="/wsib-small.webp 100w, /wsib.webp 300w"
                  sizes="100px"
                />
                <img src="/wsib-small.webp" alt="WSIB" width="100" height="100" loading="eager" />
              </picture>
            </Link>
            <Link to="/about/#certifications" className="cert-logo">
              <picture>
                <source 
                  type="image/webp" 
                  srcSet="/mitsubishi-small.webp 100w, /mitsubishi.webp 300w"
                  sizes="100px"
                />
                <img src="/mitsubishi-small.webp" alt="Mitsubishi Certified" width="100" height="86" loading="eager" />
              </picture>
            </Link>
            <Link to="/about/#certifications" className="cert-logo">
              <picture>
                <source 
                  type="image/webp" 
                  srcSet="/lg-small.webp 100w, /lg.webp 300w"
                  sizes="100px"
                />
                <img src="/lg-small.webp" alt="LG Certified" width="100" height="100" loading="eager" />
              </picture>
            </Link>
            <Link to="/about/#certifications" className="cert-logo">
              <picture>
                <source 
                  type="image/webp" 
                  srcSet="/lennox-small.webp 100w, /lennox.webp 300w"
                  sizes="100px"
                />
                <img src="/lennox-small.webp" alt="Lennox Certified" width="100" height="56" loading="eager" />
              </picture>
            </Link>
            <Link to="/about/#certifications" className="cert-logo">
              <picture>
                <source 
                  type="image/webp" 
                  srcSet="/daikin-small.webp 100w, /daikin.webp 103w"
                  sizes="100px"
                />
                <img src="/daikin-small.webp" alt="Daikin Certified" width="100" height="106" loading="eager" />
              </picture>
            </Link>
          </div>
        </div>
      </nav>

      <section className="services" aria-labelledby="services-heading">
        <div className="container">
          <h2 id="services-heading" className="section-title">Our Specializations</h2>
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

      <section className="experience" aria-labelledby="experience-heading">
        <div className="container">
          <div className="experience-content">
            <div className="experience-text">
              <h2 id="experience-heading">Engineered for Excellence</h2>
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

      <section className="cta" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">Ready to Start Your Project?</h2>
          <p>Contact us today for an engineered ductless HVAC solution tailored to your commercial facility.</p>
          <Link to="/contact/" className="btn btn-primary btn-large">Contact Us</Link>
        </div>
      </section>
      </main>
    </div>
  );
}
