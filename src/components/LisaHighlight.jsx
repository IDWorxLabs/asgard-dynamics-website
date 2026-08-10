import { Link } from 'react-router-dom'

export default function LisaHighlight() {
  return (
    <section id="lisa-highlight" className="section lisa-highlight">
      <div className="container lisa-highlight__inner">
        <div className="lisa-highlight__content">
          <h2 className="section__title">LISA® Communicator</h2>
          <p className="lisa-highlight__subtitle">Giving a voice through eye movement.</p>
          <p className="section__lead">
            LISA is an eye-controlled communication app designed for people who cannot speak or use
            their hands. Using only eye movements, users can communicate quickly, independently and
            confidently.
          </p>
          <Link to="/lisa" className="btn btn--primary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
