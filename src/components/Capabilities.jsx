const CAPABILITIES = [
  {
    title: 'Software Products',
    description: 'Custom apps, platforms, and digital products designed for practical use.',
    icon: '◆',
  },
  {
    title: 'Intelligent Systems',
    description: 'Systems that support automation, decision-making, and scalable workflows.',
    icon: '◇',
  },
  {
    title: 'Automation Platforms',
    description: 'Tools that reduce manual work and help teams move faster.',
    icon: '▸',
  },
  {
    title: 'Future Technologies',
    description: 'Forward-looking products built for long-term growth and innovation.',
    icon: '◈',
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">What We Build</h2>
        </div>

        <div className="card-grid card-grid--capabilities">
          {CAPABILITIES.map(({ title, description, icon }) => (
            <article key={title} className="card value-card">
              <span className="value-card__icon" aria-hidden="true">
                {icon}
              </span>
              <h3 className="value-card__title">{title}</h3>
              <p className="value-card__text">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
