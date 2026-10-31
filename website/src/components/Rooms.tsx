import { roomFeatures, roomPhotos, rooms, site } from '../content/site'
import { Ornament } from './Ornament'
import { Photo } from './Photo'
import { Reveal } from './Reveal'

export function Rooms() {
  return (
    <section className="section section--tint" id="rooms">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="eyebrow eyebrow--line">Stay with us</p>
          <h2>Rooms</h2>
          <Ornament />
          <p className="lede">Every room is spotlessly clean, quietly comfortable and equipped for a relaxed stay.</p>
        </Reveal>
        <ul className="mosaic">
          {roomPhotos.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 90}>
              <Photo name={p.name} alt={p.alt} className="mosaic__photo" />
            </Reveal>
          ))}
        </ul>
        <Reveal as="div" className="roomlist-wrap">
          <h3 className="roomlist__title">Room types</h3>
          <ul className="roomlist">
            {rooms.map((r) => (
              <li key={r.name}>
                <h3>{r.name}</h3>
                <span>{r.bed}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="features">
          <h3>In every room</h3>
          <ul>
            {roomFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <a className="btn" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
            See rates &amp; availability
          </a>
        </Reveal>
      </div>
    </section>
  )
}
