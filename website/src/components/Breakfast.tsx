import { breakfast, site } from '../content/site'
import { Ornament } from './Ornament'
import { Photo } from './Photo'
import { Reveal } from './Reveal'

export function Breakfast() {
  return (
    <section className="section section--dark" id="breakfast">
      <div className="container split split--reverse">
        <Reveal className="framed framed--gold">
          <Photo name="breakfast" alt="The breakfast room with tables laid for guests" className="split__photo" />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow eyebrow--line">{breakfast.served}</p>
          <h2>{breakfast.heading}</h2>
          <Ornament />
          <p className="prose">{breakfast.intro}</p>
          <div className="menucard">
            <i className="menucard__corner menucard__corner--tl" />
            <i className="menucard__corner menucard__corner--tr" />
            <i className="menucard__corner menucard__corner--bl" />
            <i className="menucard__corner menucard__corner--br" />
            <dl className="menu">
              {breakfast.options.map((o) => (
                <div key={o.title}>
                  <dt>{o.title}</dt>
                  <dd>{o.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="note">
            {breakfast.dietary} Call or message on <a href={site.phone.href}>{site.phone.display}</a>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
