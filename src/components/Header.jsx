import { useEffect, useId, useRef, useState } from 'react'
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
  const [menuPathname, setMenuPathname] = useState(pathname)
  const headerRef = useRef(null)
  const menuBtnRef = useRef(null)
  const navId = useId()

  if (pathname !== menuPathname) {
    setMenuPathname(pathname)
    setMenuOpen(false)
  }

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((open) => !open)

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 769px)').matches) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuBtnRef.current?.focus()
      }
    }

    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  return (
    <header
      ref={headerRef}
      className={`header${menuOpen ? ' header--menu-open' : ''}`}
    >
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="Asgard Dynamics home" onClick={closeMenu}>
          <img src={logo} alt="Asgard Dynamics" className="logo-img" />
        </Link>

        <button
          ref={menuBtnRef}
          type="button"
          className={`header__menu-btn${menuOpen ? ' header__menu-btn--open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls={navId}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id={navId}
          className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}
          aria-label="Main navigation"
        >
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
