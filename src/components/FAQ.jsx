import { useState } from 'react'
import { Reveal } from '../hooks.jsx'

const faqs = [
  ['What is LOS?', 'A Loan Origination System digitizes the journey from lead capture to disbursement — application intake, credit assessment, document collection, verification and approval — with rule engines and automation that cut processing time from days to hours.'],
  ['What is LMS?', 'A Loan Management System runs everything after disbursement: repayment tracking, EMI schedules, collections, NPA monitoring, customer portals, notifications and reporting — all from one dashboard.'],
  ['How do AI calling agents work?', 'Our AI voice agents place and receive real phone calls, speak naturally with customers, qualify leads, send EMI reminders, collect payment commitments and update your CRM automatically. They handle thousands of conversations simultaneously, 24/7.'],
  ['How much can we save?', 'Most clients reduce operational costs by 50–70%. A 10-person calling team costing ₹2.5L per month can typically be replaced or augmented with AI at a fraction of the cost — use the savings calculator above for your numbers.'],
  ['Can AI agents speak multiple languages?', 'Yes. Our agents support Hindi, English and major regional languages, and can switch languages mid-conversation based on how the customer responds.'],
  ['Can your platform integrate with existing systems?', 'Yes. We integrate with your existing CRM, core banking or lending software, telephony, payment gateways and WhatsApp Business API through secure, well-documented connectors.'],
  ['How quickly can we go live?', 'Typical deployments go live in 2–4 weeks, including integration, AI agent training on your scripts, and a pilot phase before full rollout.'],
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section section-soft" id="faq">
      <div className="container narrow">
        <Reveal>
          <p className="eyebrow center">FAQ</p>
          <h2 className="h2 center">Questions, answered.</h2>
        </Reveal>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * 50}>
              <div className={`faq-item ${open === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  {q}
                  <span className="faq-plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a"><p>{a}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
