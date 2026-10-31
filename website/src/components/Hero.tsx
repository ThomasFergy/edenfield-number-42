import type { CSSProperties } from 'react'
import { site, trust } from '../content/site'
import { Icon } from './Icon'
import { Photo } from './Photo'

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

export function Hero() {
  return (
    <section className="hero" id="top">
      <span className="hero__numeral" aria-hidden="true">
        42
      </span>
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow eyebrow--line anim" style={d(100)}>
            Blackpool · North Shore · Adults Only
          </p>
          <h1 className="hero__title">
            <span className="anim" style={d(200)}>
              Edenfield
            </span>
            <span className="hero__sub anim" style={d(320)}>
              Number 42
            </span>
          </h1>
          <p className="hero__tagline anim" style={d(440)}>
            {site.tagline}
          </p>
          <div className="hero__actions anim" style={d(560)}>
            <a className="btn" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
              Check availability
            </a>
            <a className="btn btn--ghost" href={site.phone.href}>
              Call {site.phone.display}
            </a>
          </div>
        </div>
        <div className="hero__frame anim anim--photo" style={d(300)}>
          <Photo name="hero" alt="The red-brick frontage of Edenfield Number 42 on King Edward Avenue" className="hero__photo" eager />
        </div>
      </div>
      <div className="trust" role="group" aria-label="At a glance">
        <div className="container trust__inner">
          {trust.map((t) => (
            <span key={t.text} className="trust__item">
              <Icon name={t.icon} />
              {t.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
