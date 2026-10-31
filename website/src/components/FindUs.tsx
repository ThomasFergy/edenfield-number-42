import { goodToKnow, location, site } from '../content/site'
import { Ornament } from './Ornament'

export function FindUs() {
  const { address } = site
  return (
    <section className="section section--tint" id="find-us">
      <div className="container find">
        <div>
          <p className="eyebrow">Getting here</p>
          <h2>{location.heading}</h2>
          <Ornament />
          <p>{location.text}</p>
          <address>
            {site.name}
            <br />
            {address.line1}
            <br />
            {address.town} {address.postcode}
          </address>
          <ul className="distances">
            {location.distances.map((d) => (
              <li key={d.place}>
                <span>{d.place}</span>
                <b>{d.distance}</b>
              </li>
            ))}
          </ul>
          <a className="btn btn--outline" href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
            Get directions
          </a>
        </div>
        <div className="know">
          <h3>Good to know</h3>
          <dl>
            {goodToKnow.map((g) => (
              <div key={g.label}>
                <dt>{g.label}</dt>
                <dd>{g.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
