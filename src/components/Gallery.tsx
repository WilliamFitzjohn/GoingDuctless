import './Gallery.css';

export default function Gallery() {
  const images = [
    {
      url: '/vrfsysteminstall.jpg',
      alt: 'VRF System Installation',
      title: 'VRF System Installation'
    },
    {
      url: '/dxpiping.jpg',
      alt: 'DX Piping Project',
      title: 'DX Piping'
    },
    {
      url: '/commercialinstallation.jpg',
      alt: 'Commercial Installation',
      title: 'Commercial Installation'
    },
    {
      url: '/mechanicalroom.jpg',
      alt: 'Mechanical Room Setup',
      title: 'Mechanical Room Setup'
    },
    {
      url: '/rooftopunit.jpeg',
      alt: 'Rooftop Unit Installation',
      title: 'Rooftop Unit Installation'
    },
    {
      url: '/engineeredsolutions.jpg',
      alt: 'Engineering Drawings and Designs',
      title: 'Engineered Solutions'
    }
  ];

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title">Our Work</h2>
        <p className="gallery-subtitle">
          Professional installations and expert craftsmanship on every project
        </p>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-title">{image.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
