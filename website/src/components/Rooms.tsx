import { roomFeatures, rooms, site } from '../content/site'
import { Ornament } from './Ornament'
import { Photo } from './Photo'

export function Rooms() {
  return (
    <section className="section section--tint" id="rooms">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">Stay with us</p>
          <h2>Rooms</h2>
          <Ornament />
          <p className="lede">Every room is spotlessly clean, quietly comfortable and equipped for a relaxed stay.</p>
        </header>
        <ul className="cards">
          {rooms.map((r) => (
            <li key={r.name} className="card">
              <Photo name={r.photo} alt={`${r.name} at Edenfield Number 42`} className="card__photo" />
              <div className="card__body">
                <h3>{r.name}</h3>
                <p>{r.bed}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="features">
          <h3>In every room</h3>
          <ul>
            {roomFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <a className="btn" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
            See rates & availability
          </a>
        </div>
      </div>
    </section>
  )
}
