import { Reveal } from '../hooks.jsx'

const industries = [
  ['🏦', 'NBFCs'],
  ['🚀', 'Fintech Startups'],
  ['🏛', 'Banks'],
  ['🔗', 'Loan Aggregators'],
  ['🧑‍💼', 'DSAs'],
  ['📞', 'Collection Agencies'],
  ['🛡', 'Insurance Companies'],
  ['🏢', 'Enterprises'],
]

export default function Industries() {
  return (
    <section className="section section-soft" id="industries">
      <div className="container">
        <Reveal>
          <p className="eyebrow center">Industries</p>
          <h2 className="h2 center">Built for everyone who lends, collects and grows.</h2>
        </Reveal>
        <div className="industry-grid">
          {industries.map(([icon, name], i) => (
            <Reveal key={name} delay={i * 60}>
              <div className="industry-card">
                <span className="industry-icon">{icon}</span>
                <span>{name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
