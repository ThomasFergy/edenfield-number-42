import { reviews } from '../content/site'
import { Ornament } from './Ornament'
import { Reveal } from './Reveal'

const R = 54
const C = 2 * Math.PI * R

export function Reviews() {
  const frac = Number(reviews.score) / Number(reviews.outOf)
  return (
    <section className="section" id="reviews">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="eyebrow eyebrow--line">What guests say</p>
          <h2>Guest Reviews</h2>
          <Ornament />
        </Reveal>
        <div className="reviews">
          <Reveal className="score">
            <div className="ring" role="img" aria-label={`${reviews.score} out of ${reviews.outOf}`}>
              <svg viewBox="0 0 128 128" aria-hidden="true">
                <circle cx="64" cy="64" r={R} className="ring__track" />
                <circle cx="64" cy="64" r={R} className="ring__value" strokeDasharray={`${C * frac} ${C}`} transform="rotate(-90 64 64)" />
              </svg>
              <span className="ring__num">{reviews.score}</span>
            </div>
            <div className="score__label">{reviews.label}</div>
            <div className="score__meta">
              {reviews.count} reviews on {reviews.source}
            </div>
            <ul className="bars">
              {reviews.categories.map((c) => (
                <li key={c.name}>
                  <span>{c.name}</span>
                  <span className="bar" aria-hidden="true">
                    <i style={{ width: `${c.score * 10}%` }} />
                  </span>
                  <b>{c.score.toFixed(1)}</b>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="quotes">
            {reviews.quotes.map((q, i) => (
              <Reveal as="figure" key={q.who} className="quote" delay={i * 110}>
                <blockquote>{q.text}</blockquote>
                <figcaption>
                  {q.who} <span>· {reviews.source}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
