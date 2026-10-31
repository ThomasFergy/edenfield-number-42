import { site } from '../content/site'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">
            Edenfield <span>Number 42</span>
          </p>
          <p>
            {site.address.line1}, {site.address.town} {site.address.postcode}
          </p>
        </div>
        <div>
          <p>
            Call or message <a href={site.phone.href}>{site.phone.display}</a>
          </p>
          <p>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book on Booking.com
            </a>
          </p>
        </div>
        <p className="footer__copy">© {year} {site.name}. Hosted by {site.hosts}.</p>
      </div>
    </footer>
  )
}
