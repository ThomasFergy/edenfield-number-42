import { highlights, intro } from '../content/site'
import { Icon } from './Icon'
import { Ornament } from './Ornament'
import { Photo } from './Photo'
import { Reveal } from './Reveal'

export function Welcome() {
  return (
    <section className="section" id="welcome">
      <div className="container split">
        <Reveal>
          <p className="eyebrow eyebrow--line">Welcome</p>
          <h2>{intro.heading}</h2>
          <Ornament />
          {intro.paragraphs.map((p) => (
            <p key={p} className="prose">
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal className="framed" delay={120}>
          <Photo name="welcome" alt="A bright, comfortable bedroom at Edenfield Number 42" className="split__photo" />
        </Reveal>
      </div>
      <div className="container highlights">
        {highlights.map((h, i) => (
          <Reveal key={h.title} className="highlight" delay={i * 90}>
            <span className="highlight__icon">
              <Icon name={h.icon} />
            </span>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
