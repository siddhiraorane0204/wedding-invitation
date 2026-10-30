import { useEffect, useState } from 'react'

export default function Welcome({ onOpen }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`welcome-screen ${visible ? 'welcome-visible' : ''}`}>
      <div className="welcome-card">
        <div className="welcome-flower flower-one">❀</div>
        <div className="welcome-flower flower-two">✿</div>
        <p className="eyebrow">A CELEBRATION OF LOVE</p>
        <div className="monogram">P <span>&</span> A</div>
        <div className="ornament">✧ ❀ ✧</div>
        <h1>Wedding Invitation</h1>
        <p className="welcome-text">Together with our families, we invite you to share in our joy.</p>
        <button className="open-button" onClick={onOpen}>OPEN INVITATION <span>♡</span></button>
        <p className="welcome-date">30 · 10 · 2027</p>
        <div className="welcome-flower flower-three">❀</div>
      </div>
    </section>
  )
}
