import { useEffect, useState } from 'react'
import { nav, site } from '../content/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label={`${site.name} – home`}>
          <span className="brand__name">Edenfield</span>
          <span className="brand__num">Number 42</span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span className="menu-toggle__bars" aria-hidden="true" />
        </button>
        <nav id="primary-nav" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a className="btn btn--small" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
            Book now
          </a>
        </nav>
      </div>
    </header>
  )
}
