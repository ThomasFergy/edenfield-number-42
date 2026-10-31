import { roomFeatures, roomPhotos, rooms, site } from '../content/site'
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
        <ul className="mosaic">
          {roomPhotos.map((p) => (
            <li key={p.name}>
              <Photo name={p.name} alt={p.alt} className="mosaic__photo" />
            </li>
          ))}
        </ul>
        <ul className="roomlist">
          {rooms.map((r) => (
            <li key={r.name}>
              <h3>{r.name}</h3>
              <span>{r.bed}</span>
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
