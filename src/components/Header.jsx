import { useState } from 'react'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo" aria-label="Asgard Dynamics home">
          <img src={logo} alt="Asgard Dynamics" className="logo-img" />
        </a>

        <button
          type="button"
          className="header__menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Main navigation">
          <ul className="header__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
