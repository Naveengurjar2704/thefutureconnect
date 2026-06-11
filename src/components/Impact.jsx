import { useCountUp, useInView, Reveal } from '../hooks.jsx'

const stats = [
  { value: 70, suffix: '%', label: 'Operational Cost Reduction' },
  { value: 3, suffix: 'X', label: 'Faster Processing' },
  { value: 95, suffix: '%', label: 'Customer Reach' },
  { value: 24, suffix: '/7', label: 'AI Availability' },
  { value: 10, suffix: 'X', label: 'Business Scalability' },
]

function BigStat({ value, suffix, label, start }) {
  const v = useCountUp(value, start, 1800)
  return (
    <div className="impact-stat">
      <span className="impact-num">{v}{suffix}</span>
      <span className="impact-label">{label}</span>
    </div>
  )
}

export default function Impact() {
  const [ref, inView] = useInView(0.3)
  return (
    <section className="section impact" id="impact" ref={ref}>
      <div className="container">
        <Reveal>
          <p className="eyebrow center light">Business impact</p>
          <h2 className="h2 center light">Real results that matter.</h2>
        </Reveal>
        <div className="impact-grid">
          {stats.map((s) => <BigStat key={s.label} {...s} start={inView} />)}
        </div>
      </div>
    </section>
  )
}
