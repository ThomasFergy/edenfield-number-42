import { useState } from 'react'
import { site } from '../content/site'
import { Icon } from './Icon'

// Google Maps loads only after the visitor asks for it, so no third-party
// cookies are set just by viewing the page.
export function MapEmbed() {
  const [show, setShow] = useState(false)
  const { address } = site
  const query = encodeURIComponent(`${address.line1}, ${address.town} ${address.postcode}`)
  const src = `https://www.google.com/maps?q=${query}&z=16&output=embed`

  if (show) {
    return (
      <div className="map">
        <iframe title="Google Map showing Edenfield Number 42" src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
    )
  }
  return (
    <div className="map map--facade">
      <Icon name="pin" className="map__pin" />
      <p className="map__addr">
        {address.line1}
        <br />
        {address.town} {address.postcode}
      </p>
      <button type="button" className="btn btn--small" onClick={() => setShow(true)}>
        Show map
      </button>
      <p className="map__note">Loads Google Maps. Google may set cookies.</p>
    </div>
  )
}
