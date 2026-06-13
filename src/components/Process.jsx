import ForwardArrows from './ForwardArrows'

const STEPS = [
  { number: '1', title: 'Define the idea' },
  { number: '2', title: 'Structure the system' },
  { number: '3', title: 'Build the product' },
  { number: '4', title: 'Verify readiness' },
  { number: '5', title: 'Launch with confidence' },
]

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">How we move ideas forward</h2>
        </div>

        <ol className="process__steps">
          {STEPS.map((step, index) => (
            <li key={step.number} className="process__step">
              <div className="process__step-inner">
                <span className="process__number">{step.number}</span>
                <span className="process__title">{step.title}</span>
              </div>
              {index < STEPS.length - 1 && (
                <span className="process__connector" aria-hidden="true">
                  <ForwardArrows />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
