import { Reveal } from '../hooks.jsx'

const steps = [
  ['📥', 'Lead Arrives'],
  ['☏', 'AI Calls Customer'],
  ['🎯', 'Captures Response'],
  ['🗂', 'Updates CRM'],
  ['⚡', 'Triggers LOS'],
  ['📄', 'Loan Processing'],
  ['📊', 'LMS Monitoring'],
  ['🗓', 'EMI Tracking'],
  ['💰', 'Collections Automation'],
  ['🤝', 'Customer Retention'],
]

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <Reveal>
          <p className="eyebrow center">How it works</p>
          <h2 className="h2 center">One platform. Endless automation.</h2>
          <p className="section-sub center">
            From the first ring to the last rupee collected — one connected, intelligent flow.
          </p>
        </Reveal>

        <div className="flow">
          {steps.map(([icon, label], i) => (
            <Reveal key={label} delay={i * 70} className="flow-item-wrap">
              <div className="flow-item">
                <span className="flow-icon">{icon}</span>
                <span className="flow-label">{label}</span>
              </div>
              {i < steps.length - 1 && <div className="flow-link" aria-hidden="true"><span /></div>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
