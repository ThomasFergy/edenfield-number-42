import { highlights, intro } from '../content/site'
import { Ornament } from './Ornament'
import { Photo } from './Photo'

export function Welcome() {
  return (
    <section className="section" id="welcome">
      <div className="container split">
        <div>
          <p className="eyebrow">Welcome</p>
          <h2>{intro.heading}</h2>
          <Ornament />
          {intro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Photo name="welcome" alt="A bright, comfortable bedroom at Edenfield Number 42" className="split__photo" />
      </div>
      <div className="container highlights">
        {highlights.map((h) => (
          <div key={h.title} className="highlight">
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
