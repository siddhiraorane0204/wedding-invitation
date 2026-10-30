import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryPhotos } from '../data'

export default function Gallery() {
  const [active, setActive] = useState(null)
  const move = (direction) => setActive((current) => (current + direction + galleryPhotos.length) % galleryPhotos.length)

  return (
    <section id="gallery" className="gallery-section">
      <p className="eyebrow">A FEW MOMENTS OF LOVE</p>
      <h2>Our Gallery</h2>
      <p className="section-subtitle">Little glimpses of a beautiful journey.</p>
      <div className="gallery-grid">
        {galleryPhotos.map((photo, index) => (
          <button className="gallery-photo" key={photo.url} onClick={() => setActive(index)} aria-label={`View ${photo.alt}`}>
            <img src={photo.url} alt={photo.alt} loading="lazy" />
            <span>{photo.caption}</span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close"><X /></button>
          <button className="lightbox-arrow left" onClick={(e) => { e.stopPropagation(); move(-1) }} aria-label="Previous"><ChevronLeft /></button>
          <img src={galleryPhotos[active].url} alt={galleryPhotos[active].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lightbox-arrow right" onClick={(e) => { e.stopPropagation(); move(1) }} aria-label="Next"><ChevronRight /></button>
          <p>{galleryPhotos[active].caption}</p>
        </div>
      )}
    </section>
  )
}
