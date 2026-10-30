import { useEffect, useState } from 'react'

function getTimeLeft(targetDate) {
  const difference = new Date(targetDate).getTime() - Date.now()
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export default function Countdown({ targetDate }) {
  const [time, setTime] = useState(() => getTimeLeft(targetDate))
  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <section className="countdown-section">
      <p className="eyebrow">SAVE THE DATE</p>
      <h2>Counting down to forever</h2>
      <div className="countdown-grid">
        {Object.entries(time).map(([label, value]) => (
          <div className="time-box" key={label}>
            <strong>{String(value).padStart(2, '0')}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="countdown-note">Every second brings us closer to our special day.</p>
    </section>
  )
}
