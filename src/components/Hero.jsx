import logo from '../assets/logo.png'

const CAPABILITIES = [
  'Software Products',
  'Intelligent Systems',
  'Automation Platforms',
  'Future Technologies',
]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
      </div>

      <div className="container hero__content">
        <div className="hero__brand">
          <img src={logo} alt="Asgard Dynamics" className="hero__logo logo-img" />
        </div>
        <p className="hero__eyebrow">Technology &bull; Systems &bull; Automation</p>
        <h1 id="hero-heading" className="hero__title">
          Building intelligent systems that move ideas forward.
        </h1>
        <p className="hero__subtitle">
          Asgard Dynamics designs and builds software products, automation platforms, and intelligent
          systems that help ambitious ideas become real-world solutions.
        </p>
        <p className="hero__strip" aria-label="Core capabilities">
          {CAPABILITIES.map((label, index) => (
            <span key={label} className="hero__strip-item">
              {index > 0 && (
                <span className="hero__strip-sep" aria-hidden="true">
                  &bull;
                </span>
              )}
              {label}
            </span>
          ))}
        </p>
        <div className="hero__actions">
          <a href="#products" className="btn btn--primary">
            Our Products
          </a>
          <a href="#contact" className="btn btn--secondary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
