import { Reveal } from '../hooks.jsx'
export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <h2 className="final-h2">Stop losing money to<br />manual processes.</h2>
          <p className="final-sub">
            Start automating lead generation, loan processing, customer engagement
            and EMI collections today.
          </p>
          <a href="#demo" className="btn btn-light">Schedule Your Demo</a>
        </Reveal>
      </div>
    </section>
  )
}
