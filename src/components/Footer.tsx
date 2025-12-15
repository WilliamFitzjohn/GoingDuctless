import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about/" className="footer-link">About Us</Link>
          <Link to="/#testimonials" className="footer-link">Testimonials</Link>
          <Link to="/about/#certifications" className="footer-link">Certifications</Link>
          <Link to="/contact/" className="footer-link">Contact Us</Link>
        </nav>

        <div className="footer-social">
          <a 
            href="https://x.com/goingductless" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Twitter/X"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/company/going-ductless-ltd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="https://www.facebook.com/GoingDuctlessLtd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        <div className="footer-blog-links">
          <Link to="/commercial-hvac-toronto/" className="footer-blog-link">Toronto</Link>
          <span className="footer-separator">|</span>
          <Link to="/commercial-hvac-mississauga/" className="footer-blog-link">Mississauga</Link>
          <span className="footer-separator">|</span>
          <Link to="/commercial-hvac-north-york/" className="footer-blog-link">North York</Link>
          <span className="footer-separator">|</span>
          <Link to="/commercial-hvac-scarborough/" className="footer-blog-link">Scarborough</Link>
          <span className="footer-separator">|</span>
          <Link to="/ductless-commercial-hvac-toronto/" className="footer-blog-link">Ductless</Link>
          <span className="footer-separator">|</span>
          <Link to="/vrf-vrv-systems-toronto/" className="footer-blog-link">VRF/VRV</Link>
          <span className="footer-separator">|</span>
          <Link to="/dx-piping-contractors-toronto/" className="footer-blog-link">DX Piping</Link>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Going Ductless Ltd. All rights reserved.
          </p>
          <p className="footer-dev">
            Developed by <a href="https://flexconsulting.ca/" target="_blank" rel="noopener noreferrer">Flex Consulting Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
