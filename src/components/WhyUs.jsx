import { Reveal } from '../hooks.jsx'

const reasons = [
  ['💸', 'Reduce Costs', 'Save up to 70% in operational expenses with AI-led workflows.'],
  ['📈', 'Increase Collections', 'Improve repayment recovery rates with timely, persistent AI follow-ups.'],
  ['⚙️', 'Automate Operations', 'Eliminate repetitive manual tasks across the entire loan lifecycle.'],
  ['🚀', 'Scale Faster', 'Handle 10X more customers without increasing headcount.'],
  ['🔒', 'Enterprise Security', 'Bank-grade encryption, access controls and compliance built in.'],
  ['🔌', 'Easy Integration', 'Connect with your existing CRM, LOS, telephony and core systems.'],
]

export default function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="container">
        <Reveal>
          <p className="eyebrow center">Why thefutureconnect</p>
          <h2 className="h2 center">Built for the future. Designed for growth.</h2>
        </Reveal>
        <div className="why-grid">
          {reasons.map(([icon, title, desc], i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="why-card">
                <span className="why-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
