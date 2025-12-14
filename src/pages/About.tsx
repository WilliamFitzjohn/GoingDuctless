import SEO from '../components/SEO';
import './About.css';

export default function About() {
  return (
    <div className="about">
      <SEO 
        title="About Going Ductless - Toronto Commercial HVAC Experts"
        description="Going Ductless Ltd - Toronto's trusted commercial HVAC contractors. Over 25 years serving the GTA. Expert DX piping, VRF, VRV, and ductless specialists. TSSA certified, HRAI members."
        keywords="going ductless company, toronto hvac contractors, gta commercial hvac, tssa certified hvac toronto, hrai member, commercial ductless toronto, dx piping contractors gta"
        canonical="https://goingductless.ca/about"
      />
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p className="about-lead">
            Building excellence in ductless HVAC solutions for over 25 years
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Based in Bowmanville, Ontario, Going Ductless Ltd. has been serving the Greater Toronto Area for over 25 years. Our company has grown from a small specialized operation to become a trusted name in commercial ductless HVAC solutions. Our commitment to engineering excellence and customer satisfaction has remained unwavering throughout our journey.
              </p>
              <p>
                We specialize in Variable Refrigerant Flow (VRF), Variable Refrigerant Volume (VRV), and ductless split systems. Our knowledgeable staff brings decades of combined experience to every project, working with premium brands including Mitsubishi, Daikin, and Fujitsu. We ensure the highest standards of quality and performance on every installation.
              </p>
              <p>
                From initial system design to final commissioning, we provide engineered solutions tailored to meet the unique needs of each commercial client. Our technical expertise, combined with TSSA certification and HRAI membership, allows us to deliver cutting-edge ductless systems that maximize energy efficiency and operational reliability across offices, server rooms, hotels, schools, and hospitals.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <h3>Our Mission</h3>
                <p>
                  To deliver superior ductless HVAC solutions that exceed expectations through engineered design, quality installation, and decades of specialized experience in VRF, VRV, and split systems.
                </p>
              </div>
              <div className="highlight-card">
                <h3>Our Values</h3>
                <ul>
                  <li>Engineered solutions tailored to each project</li>
                  <li>TSSA certified installation excellence</li>
                  <li>Continuous technical training and expertise</li>
                  <li>Safety-first approach on every jobsite</li>
                  <li>Energy-efficient ductless technology</li>
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
              <h3>VRF & VRV Systems</h3>
              <p>
                Advanced Variable Refrigerant Flow and Volume technology for precise temperature control and maximum energy efficiency in commercial buildings.
              </p>
            </div>
            <div className="expertise-item">
              <h3>Multi-Split Systems</h3>
              <p>
                Complete multi-split ductless installations for offices, server rooms, hotels, schools, and hospitals with zone-by-zone climate control.
              </p>
            </div>
            <div className="expertise-item">
              <h3>Single-Split Systems</h3>
              <p>
                Expert installation of single-split ductless systems for targeted cooling and heating in specific zones or spaces.
              </p>
            </div>
            <div className="expertise-item">
              <h3>Engineered Design</h3>
              <p>
                Custom ductless system design and engineering to meet specific building requirements, load calculations, and performance goals.
              </p>
            </div>
            <div className="expertise-item">
              <h3>DX Piping Excellence</h3>
              <p>
                Precision direct expansion refrigerant piping installation with expert brazing, pressure testing, and leak detection.
              </p>
            </div>
            <div className="expertise-item">
              <h3>Premium Brands</h3>
              <p>
                Certified installations of industry-leading brands: Mitsubishi Electric, Daikin, and Fujitsu ductless systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications" id="certifications">
        <div className="container">
          <h2>Certifications & Memberships</h2>
          <p className="certifications-intro">
            Our commitment to excellence is reflected in our industry certifications and professional memberships
          </p>
          <div className="certifications-grid">
            <div className="cert-card">
              <div className="cert-icon">
                <img src="/tssa-small.webp" alt="TSSA" width="100" height="100" />
              </div>
              <h3>TSSA Certified</h3>
              <p>Technical Standards and Safety Authority certification for refrigeration systems in Ontario</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <img src="/hrai-small.webp" alt="HRAI" width="100" height="100" />
              </div>
              <h3>HRAI Member</h3>
              <p>Heating, Refrigeration and Air Conditioning Institute of Canada professional member organization</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <img src="/wsib-small.webp" alt="WSIB" width="100" height="100" />
              </div>
              <h3>Licensed & Insured</h3>
              <p>Fully licensed contractors with comprehensive liability coverage and WSIB compliance</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <img src="/mitsubishi-small.webp" alt="Mitsubishi" width="100" height="86" />
              </div>
              <h3>Mitsubishi Certified</h3>
              <p>Factory-trained and certified for Mitsubishi Electric ductless system installation</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <img src="/lg-small.webp" alt="LG" width="100" height="100" />
              </div>
              <h3>LG Certified</h3>
              <p>Authorized LG installer with specialized multi-zone ductless system training</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <img src="/lennox-small.webp" alt="Lennox" width="100" height="56" />
              </div>
              <h3>Lennox Certified</h3>
              <p>Certified installer for Lennox ductless heating and cooling systems</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
