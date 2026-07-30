import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { label: 'About', hash: '#about' },
  { label: 'Capabilities', hash: '#capabilities' },
  { label: 'Products', hash: '#products' },
  { label: 'Contact', hash: '#contact' },
]

function SectionLink({ hash, children, onClick }) {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return (
      <a href={hash} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <Link to={{ pathname: '/', hash: hash.slice(1) }} onClick={onClick}>
      {children}
    </Link>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="Asgard Dynamics home" onClick={closeMenu}>
          <img src={logo} alt="Asgard Dynamics" className="logo-img" />
        </Link>

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
            {NAV_LINKS.map(({ label, hash }) => (
              <li key={hash}>
                <SectionLink hash={hash} onClick={closeMenu}>
                  {label}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
