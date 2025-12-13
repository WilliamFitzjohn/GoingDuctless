import './Contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="contact-lead">
            Get in touch with our team for inquiries, quotes, or project consultations
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-description">
                We're here to help with all your HVAC needs. Whether you're planning a new installation, need maintenance services, or have questions about our capabilities, our experienced team is ready to assist you.
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
                    <a href="tel:+15551234567" className="info-link">(555) 123-4567</a>
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
                    <a href="mailto:info@apexhvac.com" className="info-link">info@apexhvac.com</a>
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
                    <p className="info-link">123 Industrial Drive</p>
                    <p className="info-link">Suite 200</p>
                    <p className="info-link">Your City, ST 12345</p>
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
                  <div className="hours-row">
                    <span className="day">Saturday</span>
                    <span className="time">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="day">Sunday</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
                <p className="emergency-note">
                  Emergency services available 24/7 for existing clients
                </p>
              </div>
            </div>

            <div className="contact-map">
              <div className="map-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <p>Map Placeholder</p>
                <span>Add your Google Maps embed or location map here</span>
              </div>

              <div className="service-area">
                <h3>Service Area</h3>
                <p>
                  We proudly serve commercial and industrial clients throughout the greater metropolitan area and surrounding regions. Contact us to confirm service availability in your location.
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
            Contact us today to discuss your HVAC needs and receive a detailed consultation
          </p>
          <div className="cta-buttons">
            <a href="tel:+15551234567" className="btn btn-primary">Call Now</a>
            <a href="mailto:info@apexhvac.com" className="btn btn-secondary">Send Email</a>
          </div>
        </div>
      </section>
    </div>
  );
}
