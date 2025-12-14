import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <picture>
            <source 
              type="image/webp" 
              srcSet="/logo-nobackground-cyan-small.webp 100w, /logo-nobackground-cyan.webp 300w"
              sizes="(max-width: 768px) 100px, 300px"
            />
            <img 
              src="/logo-nobackground-cyan.png" 
              alt="Going Ductless" 
              className="logo-image"
              width="300"
              height="69"
            />
          </picture>
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
