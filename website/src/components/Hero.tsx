import { site } from '../content/site'
import { Photo } from './Photo'

export function Hero() {
  return (
    <section className="hero" id="top">
      <Photo name="hero" alt="The red-brick frontage of Edenfield Number 42 on King Edward Avenue" className="hero__bg" eager />
      <div className="hero__shade" />
      <div className="container hero__content">
        <p className="eyebrow">Blackpool · North Shore</p>
        <h1 className="hero__title">
          <span>Edenfield</span>
          <span className="hero__sub">Number 42</span>
        </h1>
        <p className="hero__tagline">{site.tagline}</p>
        <div className="hero__actions">
          <a className="btn" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
            Check availability
          </a>
          <a className="btn btn--ghost" href={site.phone.href}>
            Call {site.phone.display}
          </a>
        </div>
      </div>
      <a className="hero__scroll" href="#welcome" aria-label="Scroll to content" />
    </section>
  )
}
