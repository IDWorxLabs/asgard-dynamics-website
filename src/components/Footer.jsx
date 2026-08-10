import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const SECTION_LINKS = [
  { label: 'About', hash: '#about' },
  { label: 'Capabilities', hash: '#capabilities' },
  { label: 'Products', hash: '#products' },
  { label: 'Contact', hash: '#contact' },
]

function SectionLink({ hash, children }) {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return <a href={hash}>{children}</a>
  }

  return <Link to={{ pathname: '/', hash: hash.slice(1) }}>{children}</Link>
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Asgard Dynamics home">
            <img src={logo} alt="Asgard Dynamics" className="logo-img" />
          </Link>
          <p className="footer__tagline">Forward-built technology for ambitious ideas.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <ul className="footer__links">
            {SECTION_LINKS.map(({ label, hash }) => (
              <li key={hash}>
                <SectionLink hash={hash}>{label}</SectionLink>
              </li>
            ))}
            <li>
              <Link to="/lisa">LISA</Link>
            </li>
            <li>
              <Link to="/lisa/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>&copy; 2026 Asgard Dynamics. All rights reserved.</p>
      </div>
    </footer>
  )
}
