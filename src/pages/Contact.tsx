import SEO from '../components/SEO';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <SEO 
        title="Contact Us"
        description="Contact Going Ductless Ltd. for commercial HVAC solutions in the GTA. Call (905) 239-5567 or email sales@goingductless.ca. Bowmanville, Ontario."
        keywords="contact HVAC Bowmanville, HVAC quote GTA, ductless HVAC consultation, commercial HVAC services"
        canonical="https://goingductless.ca/contact"
      />
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="contact-lead">
            Get in touch for ductless HVAC project inquiries and engineered solutions across the GTA
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-description">
                Based in Bowmanville and serving the entire Greater Toronto Area, we're here to help with your commercial ductless HVAC projects. Whether you're planning a new VRF installation, multi-split system, or have questions about our engineered solutions, our knowledgeable team is ready to assist you.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <a href="tel:+19052395567" className="info-link">(905) 239-5567</a>
                    <p className="info-note">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <a href="mailto:sales@goingductless.ca" className="info-link">sales@goingductless.ca</a>
                    <p className="info-note">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p className="info-link">Bowmanville, Ontario</p>
                    <p className="info-link">Serving the Greater Toronto Area</p>
                  </div>
                </div>
              </div>

              <div className="business-hours">
                <h3>Business Hours</h3>
                <div className="hours-grid">
                  <div className="hours-row">
                    <span className="day">Monday - Friday</span>
                    <span className="time">8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                title="Going Ductless Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d436591.39342911285!2d-79.01310705376264!3d44.03815987000206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4e05f084a3cbd%3A0x6eedd43c7ac80d3d!2sGoing%20Ductless%20Ltd!5e0!3m2!1sen!2sca!4v1765644729193!5m2!1sen!2sca"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="service-area">
                <h3>Service Area</h3>
                <p>
                  We proudly serve commercial clients throughout the <strong>Greater Toronto Area (GTA)</strong> and surrounding regions. From Hamilton to Cobourg, and everywhere in between, Going Ductless delivers expert ductless HVAC solutions across Southern Ontario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Contact us today to discuss your commercial ductless HVAC project and receive an engineered solution
          </p>
          <div className="cta-buttons">
            <a href="tel:+19055551234" className="btn btn-primary">Call Now</a>
            <a href="mailto:info@goingductless.ca" className="btn btn-secondary">Send Email</a>
          </div>
        </div>
      </section>
    </div>
  );
}
