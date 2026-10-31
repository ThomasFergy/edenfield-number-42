import { nav, site } from '../content/site'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__col footer__col--brand">
          <p className="footer__brand">
            Edenfield <span>Number 42</span>
          </p>
          <p>
            {site.address.line1}
            <br />
            {site.address.town} {site.address.postcode}
          </p>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <p>
            <a href={site.phone.href}>{site.phone.display}</a>
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book on Booking.com
            </a>
          </p>
        </div>
        <div className="footer__col">
          <h4>Explore</h4>
          {nav.map((n) => (
            <p key={n.href}>
              <a href={n.href}>{n.label}</a>
            </p>
          ))}
        </div>
        <p className="footer__copy">
          <span>
            © {year} {site.name}. Hosted by {site.hosts}.
          </span>
          <a href="#top">Back to top ↑</a>
        </p>
      </div>
    </footer>
  )
}
