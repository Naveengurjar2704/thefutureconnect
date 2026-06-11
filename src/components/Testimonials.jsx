import { useEffect, useState } from 'react'
import { Reveal } from '../hooks.jsx'

const testimonials = [
  {
    name: 'Rajesh Sharma',
    company: 'CEO, Apex Finance NBFC',
    review: 'Our collection rate improved by 38% in 90 days. The AI agents call every customer on time, every time — something our team simply could not do at scale.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    company: 'COO, LendFast Fintech',
    review: 'Loan processing that took 4 days now happens in hours. The LOS rule engine alone paid for itself in the first quarter.',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    company: 'Founder, SwiftCollect Agency',
    review: 'We replaced a 25-person calling floor with AI voice agents and WhatsApp automation. Costs dropped 65% and customers actually rate the experience higher.',
    rating: 5,
  },
  {
    name: 'Sneha Kulkarni',
    company: 'Head of Ops, CredGrow',
    review: 'Integration was painless — their team connected our CRM and core lending system in under two weeks. Support has been outstanding.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="section section-soft" id="testimonials">
      <div className="container">
        <Reveal>
          <p className="eyebrow center">Testimonials</p>
          <h2 className="h2 center">Leaders who stopped doing manual work.</h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="carousel">
            <div className="carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
              {testimonials.map((t) => (
                <figure className="testimonial glass" key={t.name}>
                  <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
                    {'★'.repeat(t.rating)}
                  </div>
                  <blockquote>“{t.review}”</blockquote>
                  <figcaption>
                    <span className="avatar">{t.name[0]}</span>
                    <div><b>{t.name}</b><small>{t.company}</small></div>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === active ? 'active' : ''}`}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
