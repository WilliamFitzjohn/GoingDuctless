import './Gallery.css';

interface GalleryImage {
  name: string;
  alt: string;
  title: string;
}

export default function Gallery() {
  const images: GalleryImage[] = [
    {
      name: 'vrfsysteminstall',
      alt: 'VRF System Installation',
      title: 'VRF System Installation'
    },
    {
      name: 'dxpiping',
      alt: 'DX Piping Project',
      title: 'DX Piping'
    },
    {
      name: 'commercialinstallation',
      alt: 'Commercial Installation',
      title: 'Commercial Installation'
    },
    {
      name: 'mechanicalroom',
      alt: 'Mechanical Room Setup',
      title: 'Mechanical Room Setup'
    },
    {
      name: 'rooftopunit',
      alt: 'Rooftop Unit Installation',
      title: 'Rooftop Unit Installation'
    },
    {
      name: 'engineeredsolutions',
      alt: 'Engineering Drawings and Designs',
      title: 'Engineered Solutions'
    }
  ];

  return (
    <section className="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <h2 id="gallery-heading" className="section-title">Our Work</h2>
        <p className="gallery-subtitle">
          Professional installations and expert craftsmanship on every project
        </p>
        <div className="gallery-grid" role="list">
          {images.map((image, index) => (
            <article key={index} className="gallery-item" role="listitem">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`/${image.name}-small.webp 400w, /${image.name}-medium.webp 800w, /${image.name}-large.webp 1200w`}
                  sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
                />
                <img
                  src={`/${image.name}-large.webp`}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="750"
                />
              </picture>
              <div className="gallery-overlay" aria-hidden="true">
                <span className="gallery-title">{image.title}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
