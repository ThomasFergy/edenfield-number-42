import { goodToKnow, location, site } from '../content/site'
import { MapEmbed } from './MapEmbed'
import { Ornament } from './Ornament'
import { Reveal } from './Reveal'

export function FindUs() {
  const { address } = site
  return (
    <section className="section section--tint" id="find-us">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="eyebrow eyebrow--line">Getting here</p>
          <h2>{location.heading}</h2>
          <Ornament />
          <p className="lede">{location.text}</p>
        </Reveal>
        <div className="find">
          <Reveal className="find__main">
            <MapEmbed />
            <div className="find__row">
              <address>
                <strong>{site.name}</strong>
                <br />
                {address.line1}
                <br />
                {address.town} {address.postcode}
              </address>
              <a className="btn btn--outline" href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
            </div>
            <ul className="distances">
              {location.distances.map((d) => (
                <li key={d.place}>
                  <span>{d.place}</span>
                  <b>{d.distance}</b>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="know" delay={120}>
            <h3>Good to know</h3>
            <dl>
              {goodToKnow.map((g) => (
                <div key={g.label}>
                  <dt>{g.label}</dt>
                  <dd>{g.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
