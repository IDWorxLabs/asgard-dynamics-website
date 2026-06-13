import logo from '../assets/logo.png'

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo" aria-label="Asgard Dynamics home">
            <img src={logo} alt="Asgard Dynamics" className="logo-img" />
          </a>
          <p className="footer__tagline">Forward-built technology for ambitious ideas.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <ul className="footer__links">
            {FOOTER_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>&copy; 2026 Asgard Dynamics. All rights reserved.</p>
      </div>
    </footer>
  )
}
