import { Reveal } from '../hooks.jsx'

const traditional = ['Manual calling', 'Follow-up delays', 'Missed leads', 'High operational costs', 'Human errors', 'Limited working hours']
const ai = ['24/7 availability', 'Instant follow-ups', 'Higher collections', 'Lower costs', 'Better customer experience', 'Unlimited scalability']

export default function PainSection() {
  return (
    <section className="section section-soft" id="pain">
      <div className="container">
        <Reveal>
          <p className="eyebrow center">The problem</p>
          <h2 className="h2 center">Your team should focus on growth,<br />not repetitive work.</h2>
        </Reveal>

        <div className="compare">
          <Reveal className="compare-col" delay={100}>
            <div className="compare-card old">
              <h3>Traditional Operations</h3>
              <ul>
                {traditional.map((t) => (
                  <li key={t}><span className="mark x">✕</span>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="vs-pill">VS</div>

          <Reveal className="compare-col" delay={250}>
            <div className="compare-card new">
              <h3>AI-Powered Operations</h3>
              <ul>
                {ai.map((t) => (
                  <li key={t}><span className="mark check">✓</span>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
