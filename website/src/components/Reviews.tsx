import { reviews } from '../content/site'
import { Ornament } from './Ornament'

export function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">What guests say</p>
          <h2>Guest Reviews</h2>
          <Ornament />
        </header>
        <div className="reviews">
          <div className="score">
            <div className="score__num" aria-label={`${reviews.score} out of ${reviews.outOf}`}>
              {reviews.score}
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
          </div>
          <div className="quotes">
            {reviews.quotes.map((q) => (
              <figure key={q.who} className="quote">
                <blockquote>“{q.text}”</blockquote>
                <figcaption>
                  {q.who} · {reviews.source}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
