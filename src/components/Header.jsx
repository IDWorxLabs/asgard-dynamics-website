import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { label: 'Home', type: 'route', to: '/' },
  { label: 'About', type: 'hash', hash: '#about' },
  { label: 'Capabilities', type: 'hash', hash: '#capabilities' },
  { label: 'Products', type: 'hash', hash: '#products' },
  { label: 'LISA', type: 'route', to: '/lisa' },
  { label: 'Process', type: 'hash', hash: '#process' },
  { label: 'Contact', type: 'hash', hash: '#contact' },
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
  const { pathname } = useLocation()

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
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                {item.type === 'route' ? (
                  <Link
                    to={item.to}
                    onClick={closeMenu}
                    aria-current={pathname === item.to ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <SectionLink hash={item.hash} onClick={closeMenu}>
                    {item.label}
                  </SectionLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
