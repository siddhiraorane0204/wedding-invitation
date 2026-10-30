import { CalendarDays, Clock3, MapPin } from 'lucide-react'
import { events } from '../data'

export default function Events() {
  return (
    <section id="events" className="events-section">
      <p className="eyebrow">JOIN OUR CELEBRATIONS</p>
      <h2>Wedding Events</h2>
      <p className="section-subtitle">A few special moments we would love to share with you.</p>
      <div className="events-grid">
        {events.map((event, index) => (
          <article className="event-card" key={event.name}>
            <span className="event-number">0{index + 1}</span>
            <div className="event-flower">✿</div>
            <h3>{event.name}</h3>
            <p className="event-detail">{event.detail}</p>
            <div className="event-meta"><CalendarDays size={15} /> {event.date}</div>
            <div className="event-meta"><Clock3 size={15} /> {event.time}</div>
            <div className="event-meta"><MapPin size={15} /> {event.place}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
