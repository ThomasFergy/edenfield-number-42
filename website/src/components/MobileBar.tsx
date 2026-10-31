import { site } from '../content/site'
import { Icon } from './Icon'

// Sticky call / book bar shown on phones only.
export function MobileBar() {
  return (
    <div className="mobilebar">
      <a href={site.phone.href}>
        <Icon name="phone" /> Call
      </a>
      <a className="mobilebar__book" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
        Check availability
      </a>
    </div>
  )
}
