import { useState } from 'react'
import { Reveal } from '../hooks.jsx'

const initial = { name: '', company: '', mobile: '', email: '', product: '', message: '' }

export default function DemoForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const [sending, setSending] = useState(false)

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.company.trim()) e.company = 'Please enter your company name'
    if (!/^[0-9+\-\s]{10,15}$/.test(form.mobile.trim())) e.mobile = 'Enter a valid mobile number'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = 'Enter a valid email'
    if (!form.product) e.product = 'Choose a product'
    return e
  }

  const submit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return
    setSending(true)
    // Save lead locally; replace this block with your API / email endpoint.
    setTimeout(() => {
      try {
        const leads = JSON.parse(sessionStorage.getItem('tfc_leads') || '[]')
        leads.push({ ...form, at: new Date().toISOString() })
        sessionStorage.setItem('tfc_leads', JSON.stringify(leads))
      } catch { /* storage unavailable — ignore */ }
      setSending(false)
      setDone(true)
    }, 900)
  }

  return (
    <section className="section demo" id="demo">
      <div className="container demo-grid">
        <Reveal className="demo-copy">
          <p className="eyebrow">Book a demo</p>
          <h2 className="h2">See how much time and money you can save.</h2>
          <p className="section-sub">
            Book a personalized demo and discover how AI automation can transform
            your business operations — usually within 30 minutes.
          </p>
          <ul className="demo-points">
            <li>✓ Personalized walkthrough for your use case</li>
            <li>✓ Live AI calling agent demonstration</li>
            <li>✓ Custom savings estimate for your business</li>
            <li>✓ Go-live roadmap in 2–4 weeks</li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          {done ? (
            <div className="form-card glass success-state">
              <div className="success-check">✓</div>
              <h3>Demo request received!</h3>
              <p>Our team will reach out within 24 hours to schedule your personalized demo.</p>
              <button className="btn btn-ghost" onClick={() => { setForm(initial); setDone(false) }}>
                Submit another request
              </button>
            </div>
          ) : (
            <form className="form-card glass" onSubmit={submit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="f-name">Full name</label>
                  <input id="f-name" value={form.name} onChange={set('name')} placeholder="Aarav Mehta" />
                  {errors.name && <small className="err">{errors.name}</small>}
                </div>
                <div className="field">
                  <label htmlFor="f-company">Company name</label>
                  <input id="f-company" value={form.company} onChange={set('company')} placeholder="Apex Finance Pvt Ltd" />
                  {errors.company && <small className="err">{errors.company}</small>}
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="f-mobile">Mobile number</label>
                  <input id="f-mobile" inputMode="tel" value={form.mobile} onChange={set('mobile')} placeholder="+91 98765 43210" />
                  {errors.mobile && <small className="err">{errors.mobile}</small>}
                </div>
                <div className="field">
                  <label htmlFor="f-email">Email</label>
                  <input id="f-email" inputMode="email" value={form.email} onChange={set('email')} placeholder="you@company.com" />
                  {errors.email && <small className="err">{errors.email}</small>}
                </div>
              </div>
              <div className="field">
                <label htmlFor="f-product">Product interested in</label>
                <select id="f-product" value={form.product} onChange={set('product')}>
                  <option value="">Select a product</option>
                  <option>Loan Origination System (LOS)</option>
                  <option>Loan Management System (LMS)</option>
                  <option>AI Voice Calling Agents</option>
                  <option>WhatsApp & Workflow Automation</option>
                  <option>Custom AI Business Automation</option>
                  <option>Complete Platform</option>
                </select>
                {errors.product && <small className="err">{errors.product}</small>}
              </div>
              <div className="field">
                <label htmlFor="f-message">Message <span className="optional">(optional)</span></label>
                <textarea id="f-message" rows="3" value={form.message} onChange={set('message')}
                  placeholder="Tell us about your current operations…" />
              </div>
              <button className="btn btn-primary btn-block" type="submit" disabled={sending}>
                {sending ? 'Sending…' : 'Schedule Free Demo'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
