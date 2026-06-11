// import { Reveal } from '../hooks.jsx'

// const products = [
//   {
//     tag: 'LOS',
//     title: 'Loan Origination System',
//     desc: 'Streamline the entire lending journey from lead capture to loan approval.',
//     items: ['Lead Management', 'Rule Engine', 'Credit Assessment', 'Document Collection', 'Automated Verification', 'Workflow Automation', 'Real-Time Analytics'],
//     icon: '⚡',
//   },
//   {
//     tag: 'LMS',
//     title: 'Loan Management System',
//     desc: 'Manage loan servicing, repayments, collections and the full customer lifecycle from one platform.',
//     items: ['Repayment Tracking', 'Collection Management', 'NPA Monitoring', 'Customer Portal', 'Auto Notifications', 'Reports & Analytics'],
//     icon: '📊',
//   },
//   {
//     tag: 'AI Calling Agents',
//     title: 'AI Voice Agents That Work 24/7',
//     desc: 'Automate thousands of customer conversations simultaneously, in multiple languages.',
//     items: ['Lead Qualification', 'EMI Reminders', 'Payment Collection', 'Customer Support', 'Welcome Calls', 'Survey Calls', 'Appointment Booking', 'Renewal Reminders'],
//     icon: '🎙',
//     wave: true,
//   },
//   {
//     tag: 'AI Automation Suite',
//     title: 'Replace Repetitive Work With Intelligent Automation',
//     desc: 'Connect your tools and let AI run the busywork end to end.',
//     items: ['CRM Updates', 'WhatsApp Messages', 'Customer Support', 'Sales Follow-Ups', 'Lead Assignment', 'Internal Workflows', 'Document Processing', 'Data Entry'],
//     icon: '🤖',
//   },
// ]

// export default function Products() {
//   return (
//     <section className="section" id="products">
//       <div className="container">
//         <Reveal>
//           <p className="eyebrow center">Products</p>
//           <h2 className="h2 center">One platform. Four engines of growth.</h2>
//           <p className="section-sub center">
//             Everything a modern lender needs to originate, manage, collect and grow — powered by AI.
//           </p>
//         </Reveal>

//         <div className="product-grid">
//           {products.map((p, i) => (
//             <Reveal key={p.tag} delay={i * 90}>
//               <article className="product-card">
//                 <div className="product-top">
//                   <span className="product-icon">{p.icon}</span>
//                   <span className="product-tag">{p.tag}</span>
//                 </div>
//                 <h3>{p.title}</h3>
//                 <p className="product-desc">{p.desc}</p>
//                 {p.wave && (
//                   <div className="voice-wave" aria-hidden="true">
//                     {Array.from({ length: 22 }).map((_, n) => (
//                       <span key={n} style={{ animationDelay: `${n * 0.08}s` }} />
//                     ))}
//                   </div>
//                 )}
//                 <ul className="feature-list">
//                   {p.items.map((f) => <li key={f}>{f}</li>)}
//                 </ul>
//                 <a href="#demo" className="product-link">See it in action →</a>
//               </article>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import { Reveal } from '../hooks.jsx'

const products = [
  {
    tag: 'LOS',
    title: 'Loan Origination System',
    desc: 'Streamline the entire lending journey from lead capture to disbursement — for every loan type you offer.',
    loanTypes: ['Personal Loan', 'Home Loan', 'MSME Loan', 'Payday Loan', 'Gold Loan', 'Vehicle Loan', 'Education Loan', 'Credit Line'],
    icon: '⚡',
    accent: 'blue',
  },
  {
    tag: 'LMS',
    title: 'Loan Management System',
    desc: 'Manage servicing, repayments, collections and the full customer lifecycle from a single platform.',
    loanTypes: ['Revolving Credit', 'Term Loans', 'Payday / Short-Term', 'Flexi Loans', 'Bullet Repayment', 'EMI-Based Loans'],
    icon: '📊',
    accent: 'purple',
  },
  {
    tag: 'AI Calling Agent',
    title: 'AI Voice Agents That Work 24/7',
    desc: 'Automate thousands of customer conversations simultaneously, in multiple languages — no human required.',
    wave: true,
    icon: '🎙',
    accent: 'teal',
  },
  {
    tag: 'AI Recovery Agent',
    title: 'Intelligent Debt Recovery, Automated',
    desc: 'Recover overdue amounts faster with AI-powered negotiation, promise-to-pay tracking and smart escalation.',
    icon: '🔄',
    accent: 'coral',
    highlight: true,
  },
  {
    tag: 'AI Sales Agent',
    title: 'AI That Sells Loans Around the Clock',
    desc: 'Qualify, nurture and convert leads automatically — across WhatsApp, web chat, voice and email.',
    icon: '🤖',
    accent: 'amber',
    highlight: true,
  },
  {
    tag: 'AI Automation Suite',
    title: 'Replace Repetitive Work With Intelligent Automation',
    desc: 'Connect your tools and let AI handle the busywork end to end.',
    icon: '⚙️',
    accent: 'green',
  },
]

const loanTypes = [
  { label: 'Personal Loan', icon: '👤' },
  { label: 'Home Loan', icon: '🏠' },
  { label: 'Payday Loan', icon: '💵' },
  { label: 'MSME / Business Loan', icon: '🏢' },
  { label: 'Gold Loan', icon: '🥇' },
  { label: 'Vehicle Loan', icon: '🚗' },
  { label: 'Education Loan', icon: '🎓' },
  { label: 'Microfinance', icon: '🤝' },
  { label: 'Credit Line / BNPL', icon: '💳' },
  { label: 'Loan Against Property', icon: '📋' },
  { label: 'Agriculture Loan', icon: '🌾' },
  { label: 'Consumer Durable', icon: '📱' },
]

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="container">

        {/* ── Section header ── */}
        <Reveal>
          <p className="eyebrow center">Products</p>
          <h2 className="h2 center">One platform. Six engines of growth.</h2>
          <p className="section-sub center">
            Everything a modern lender needs to originate, manage, collect, recover and grow —
            powered by AI and built for every loan product you offer.
          </p>
        </Reveal>

        {/* ── Supported loan types strip ── */}
        <Reveal delay={100}>
          <div className="loan-types-strip">
            <p className="loan-types-label">Supports all major loan types</p>
            <div className="loan-types-grid">
              {loanTypes.map((l) => (
                <span key={l.label} className="loan-type-pill">
                  <span className="pill-icon" aria-hidden="true">{l.icon}</span>
                  {l.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Product cards ── */}
        <div className="product-grid">
          {products.map((p, i) => (
            <Reveal key={p.tag} delay={i * 80}>
              <article className={`product-card${p.highlight ? ' product-card--highlight' : ''}`}>
                <div className="product-top">
                  <span className="product-icon" aria-hidden="true">{p.icon}</span>
                  <span className={`product-tag product-tag--${p.accent}`}>{p.tag}</span>
                </div>

                <h3>{p.title}</h3>
                <p className="product-desc">{p.desc}</p>

                {/* Voice wave animation for calling agent */}
                {p.wave && (
                  <div className="voice-wave" aria-hidden="true">
                    {Array.from({ length: 22 }).map((_, n) => (
                      <span key={n} style={{ animationDelay: `${n * 0.08}s` }} />
                    ))}
                  </div>
                )}

                {/* Inline loan types for LOS & LMS */}
                {p.loanTypes && (
                  <div className="card-loan-types">
                    <span className="card-loan-types-label">Loan types covered:</span>
                    <div className="card-loan-pills">
                      {p.loanTypes.map((l) => (
                        <span key={l} className="card-loan-pill">{l}</span>
                      ))}
                    </div>
                  </div>
                )}

                <a href="#demo" className="product-link">See it in action →</a>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}