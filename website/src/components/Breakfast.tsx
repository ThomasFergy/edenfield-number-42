import { breakfast, site } from '../content/site'
import { Ornament } from './Ornament'
import { Photo } from './Photo'

export function Breakfast() {
  return (
    <section className="section section--dark" id="breakfast">
      <div className="container split split--reverse">
        <Photo name="breakfast" alt="A freshly cooked full breakfast" className="split__photo" />
        <div>
          <p className="eyebrow">{breakfast.served}</p>
          <h2>{breakfast.heading}</h2>
          <Ornament />
          <p>{breakfast.intro}</p>
          <dl className="menu">
            {breakfast.options.map((o) => (
              <div key={o.title}>
                <dt>{o.title}</dt>
                <dd>{o.text}</dd>
              </div>
            ))}
          </dl>
          <p className="note">
            {breakfast.dietary} Call or message on <a href={site.phone.href}>{site.phone.display}</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
