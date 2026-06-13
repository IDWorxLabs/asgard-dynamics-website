const EMAIL = 'hello@asgarddynamics.io'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__card">
          <h2 className="section__title">Start a conversation</h2>
          <p className="contact__text">
            For partnerships, product enquiries, or early conversations, contact Asgard Dynamics.
          </p>
          <a href={`mailto:${EMAIL}`} className="contact__email">
            {EMAIL}
          </a>
          <a href={`mailto:${EMAIL}`} className="btn btn--primary">
            Email Asgard Dynamics
          </a>
        </div>
      </div>
    </section>
  )
}
