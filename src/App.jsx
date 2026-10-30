import { useState } from 'react'
import { Music2, VolumeX, MapPin, Heart, Menu, X } from 'lucide-react'
import { wedding } from './data'
import Welcome from './components/Welcome'
import Countdown from './components/Countdown'
import Events from './components/Events'
import Gallery from './components/Gallery'
import './App.css'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMusic = () => {
    const audio = document.getElementById('wedding-audio')
    if (!audio) return
    if (musicOn) {
      audio.pause()
      setMusicOn(false)
    } else {
      audio.play()
        .then(() => setMusicOn(true))
        .catch(() => alert('Please add an MP3 file at public/music/wedding-music.mp3 first.'))
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <audio id="wedding-audio" loop src="/music/wedding-music.mp3" />
      {!opened ? (
        <Welcome onOpen={() => setOpened(true)} />
      ) : (
        <div className="invitation-shell">
          <header className="topbar">
            <a className="brand" href="#home" onClick={closeMenu}>{wedding.bride} <span>&</span> {wedding.groom}</a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
              {menuOpen ? <X /> : <Menu />}
            </button>
            <nav className={menuOpen ? 'nav-links show' : 'nav-links'}>
              <a href="#home" onClick={closeMenu}>Home</a>
              <a href="#events" onClick={closeMenu}>Events</a>
              <a href="#gallery" onClick={closeMenu}>Gallery</a>
            </nav>
            <button className="music-button" onClick={toggleMusic} aria-label="Toggle background music">
              {musicOn ? <VolumeX size={17} /> : <Music2 size={17} />}
              <span>{musicOn ? 'Pause music' : 'Play music'}</span>
            </button>
          </header>

          <section id="home" className="hero section-frame">
            <div className="corner corner-tl">❀</div><div className="corner corner-tr">❀</div>
            <p className="eyebrow">THE WEDDING CELEBRATION OF</p>
            <div className="ornament">✧ ❀ ✧</div>
            <h1><span>{wedding.bride}</span><i>&</i><span>{wedding.groom}</span></h1>
            <p className="hero-copy">{wedding.invitation}</p>
            <div className="hero-divider"><span>❦</span></div>
            <p className="date-large">{wedding.dateLabel}</p>
            <p className="weekday">{wedding.weekday} · Mumbai, India</p>
            <a href="#events" className="gold-button">VIEW CELEBRATION</a>
            <div className="bottom-flower">❀</div>
          </section>

          <Countdown targetDate={wedding.date} />
          <section className="quote-section">
            <span className="quote-mark">“</span>
            <p>Two hearts, one promise, and a lifetime of beautiful memories.</p>
            <span className="quote-mark closing">”</span>
          </section>
          <Events />
          <Gallery />
          <section className="venue-section section-frame">
            <p className="eyebrow">CELEBRATE WITH US</p>
            <h2>Where to find us</h2>
            <MapPin className="venue-icon" />
            <h3>{wedding.venue}</h3>
            <p>{wedding.address}</p>
            <a className="gold-button" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(wedding.mapQuery)}`} target="_blank" rel="noreferrer">
              OPEN GOOGLE MAPS
            </a>
          </section>
          <footer className="footer">
            <div className="ornament">✧ ❀ ✧</div>
            <h2>{wedding.bride} <span>&</span> {wedding.groom}</h2>
            <p>We can't wait to celebrate with you.</p>
            <Heart size={18} fill="currentColor" />
            <small>MADE WITH LOVE · {wedding.dateLabel.toUpperCase()}</small>
          </footer>
        </div>
      )}
    </main>
  )
}
