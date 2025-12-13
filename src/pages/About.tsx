import './About.css';

export default function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p className="about-lead">
            Building excellence in HVAC solutions for over 25 years
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded over 25 years ago, our company has grown from a small local operation to a trusted name in commercial and industrial HVAC solutions. Our commitment to excellence and customer satisfaction has remained unwavering throughout our journey.
              </p>
              <p>
                We specialize in Variable Refrigerant Flow (VRF) systems, commercial HVAC installations, and precision DX piping work. Our team of certified technicians brings decades of combined experience to every project, ensuring the highest standards of quality and performance.
              </p>
              <p>
                From initial consultation to final installation and ongoing maintenance, we provide comprehensive solutions tailored to meet the unique needs of each client. Our technical expertise, combined with our dedication to staying current with industry innovations, allows us to deliver cutting-edge HVAC systems that maximize energy efficiency and operational reliability.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <h3>Our Mission</h3>
                <p>
                  To deliver superior HVAC solutions that exceed expectations through technical expertise, quality workmanship, and exceptional customer service.
                </p>
              </div>
              <div className="highlight-card">
                <h3>Our Values</h3>
                <ul>
                  <li>Quality craftsmanship on every project</li>
                  <li>Honest and transparent communication</li>
                  <li>Continuous technical education</li>
                  <li>Safety-first approach</li>
                  <li>Environmental responsibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise">
        <div className="container">
          <h2>Areas of Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h3>VRF Systems</h3>
              <p>
                Advanced Variable Refrigerant Flow technology for precise temperature control and maximum energy efficiency in commercial buildings.
              </p>
            </div>
            <div className="expertise-item">
              <h3>Commercial HVAC</h3>
              <p>
                Complete heating, ventilation, and air conditioning solutions for office buildings, retail spaces, and industrial facilities.
              </p>
            </div>
            <div className="expertise-item">
              <h3>DX Piping</h3>
              <p>
                Expert installation of direct expansion refrigerant piping systems with precision brazing and pressure testing.
              </p>
            </div>
            <div className="expertise-item">
              <h3>System Design</h3>
              <p>
                Custom HVAC system design and engineering to meet specific building requirements and performance goals.
              </p>
            </div>
            <div className="expertise-item">
              <h3>Maintenance</h3>
              <p>
                Comprehensive preventive maintenance programs to ensure optimal system performance and longevity.
              </p>
            </div>
            <div className="expertise-item">
              <h3>Energy Solutions</h3>
              <p>
                Energy-efficient system upgrades and retrofits to reduce operating costs and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications">
        <div className="container">
          <h2>Certifications & Memberships</h2>
          <p className="certifications-intro">
            Our commitment to excellence is reflected in our industry certifications and professional memberships
          </p>
          <div className="certifications-grid">
            <div className="cert-card">
              <div className="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3>EPA Certified</h3>
              <p>Environmental Protection Agency refrigerant handling certification</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3>HVAC Excellence</h3>
              <p>Industry-recognized technical competency certification</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3>NATE Certified</h3>
              <p>North American Technician Excellence certification</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3>Licensed & Insured</h3>
              <p>Fully licensed contractors with comprehensive liability coverage</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3>ACCA Member</h3>
              <p>Air Conditioning Contractors of America member organization</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3>OSHA Safety</h3>
              <p>Occupational Safety and Health Administration compliance training</p>
            </div>
          </div>
          <p className="cert-note">
            * Template certifications - Update with your actual certifications and memberships
          </p>
        </div>
      </section>
    </div>
  );
}
