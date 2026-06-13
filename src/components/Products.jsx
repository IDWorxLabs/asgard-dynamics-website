const PRODUCTS = [
  {
    name: 'AiDevEngine',
    description:
      'An AI-assisted software development platform being built to help transform detailed ideas into structured, testable software projects.',
    badge: 'In Development',
    badgeType: 'development',
  },
  {
    name: 'Automation Tools',
    description:
      'Workflow and operations tools designed to reduce repetitive work and improve execution.',
    badge: 'Planned',
    badgeType: 'planned',
  },
  {
    name: 'Founder Systems',
    description:
      'Digital systems designed to support founders from idea validation to product launch.',
    badge: 'Planned',
    badgeType: 'planned',
  },
]

export default function Products() {
  return (
    <section id="products" className="section products">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Products built under Asgard Dynamics</h2>
        </div>

        <div className="card-grid card-grid--products">
          {PRODUCTS.map(({ name, description, badge, badgeType }) => (
            <article key={name} className="card product-card">
              <div className="product-card__header">
                <h3 className="product-card__name">{name}</h3>
                <span className={`badge badge--${badgeType}`}>{badge}</span>
              </div>
              <p className="product-card__text">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
