import './Gallery.css';

export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Commercial HVAC installation',
      title: 'VRF System Installation'
    },
    {
      url: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Industrial piping work',
      title: 'DX Piping Project'
    },
    {
      url: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Commercial building HVAC',
      title: 'Commercial Installation'
    },
    {
      url: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'HVAC mechanical room',
      title: 'Mechanical Room Setup'
    },
    {
      url: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Industrial building exterior',
      title: 'Rooftop Unit Installation'
    },
    {
      url: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Construction site equipment',
      title: 'Equipment Installation'
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
        <p className="gallery-note">
          * Placeholder images - Replace with your actual jobsite photos
        </p>
      </div>
    </section>
  );
}
